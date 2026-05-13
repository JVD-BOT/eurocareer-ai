import Anthropic from "@anthropic-ai/sdk";
import { createClient } from "@supabase/supabase-js";
import { NextRequest } from "next/server";
import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";
import { buildCVPrompt, buildCoverLetterPrompt, buildFollowUpPrompt, SYSTEM_PROMPT } from "@/lib/ai-prompts";
import { FREE_AI_LIMIT } from "@/lib/types";

export async function POST(request: NextRequest) {
  const apiKey = process.env.ANTHROPIC_API_KEY;
  const anthropic = new Anthropic({ apiKey });

  try {
    const body = await request.json();
    const {
      type,
      applicationId,
      accessToken,
      resumeText,
      country,
      tone,
      emailType,
      feedback,
      languages,
      nationality,
      workAuthorization,
    } = body;

    if (!accessToken) {
      return new Response(JSON.stringify({ error: "Unauthorized" }), { status: 401 });
    }

    // ── Input validation ───────────────────────────────────────────────────
    if (resumeText && resumeText.length > 15000) {
      return new Response(
        JSON.stringify({ error: "CV text is too long. Please trim to under 15,000 characters." }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }
    if (feedback && feedback.length > 500) {
      return new Response(
        JSON.stringify({ error: "Feedback must be under 500 characters." }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    // ── Auth ────────────────────────────────────────────────────────────────
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      { global: { headers: { Authorization: `Bearer ${accessToken}` } } }
    );

    const { data: { user }, error: authError } = await supabase.auth.getUser(accessToken);
    if (authError || !user) {
      return new Response(JSON.stringify({ error: "Unauthorized" }), { status: 401 });
    }

    // ── Profile & rate limiting ─────────────────────────────────────────────
    const currentMonth = new Date().toISOString().slice(0, 7);
    let { data: profile } = await supabase
      .from("profiles")
      .select("*")
      .eq("id", user.id)
      .maybeSingle();

    if (!profile) {
      const { data } = await supabase
        .from("profiles")
        .insert({ id: user.id, ai_credits_used: 0, ai_credits_month: currentMonth, plan: "free" })
        .select()
        .single();
      profile = data;
    }

    // Monthly reset
    let creditsUsed = profile?.ai_credits_used ?? 0;
    if (profile?.ai_credits_month !== currentMonth) {
      creditsUsed = 0;
      await supabase
        .from("profiles")
        .update({ ai_credits_used: 0, ai_credits_month: currentMonth })
        .eq("id", user.id);
    }

    const isPro = profile?.plan === "pro";
    if (!isPro && creditsUsed >= FREE_AI_LIMIT) {
      return new Response(
        JSON.stringify({ error: "Monthly AI credit limit reached", upgrade: true, limit: FREE_AI_LIMIT }),
        { status: 403, headers: { "Content-Type": "application/json" } }
      );
    }

    // ── Pro daily rate limit (Upstash) ─────────────────────────────────────
    if (isPro) {
      const ratelimit = new Ratelimit({
        redis: Redis.fromEnv(),
        limiter: Ratelimit.slidingWindow(100, "1 d"),
        analytics: true,
      });
      const { success } = await ratelimit.limit(user.id);
      if (!success) {
        return new Response(
          JSON.stringify({ error: "Daily generation limit reached. Resets at midnight UTC." }),
          { status: 429, headers: { "Content-Type": "application/json" } }
        );
      }
    }

    // ── Fetch application (scoped to current user) ────────────────────────
    const { data: application } = await supabase
      .from("applications")
      .select("*")
      .eq("id", applicationId)
      .eq("user_id", user.id)
      .single();

    if (!application) {
      return new Response(JSON.stringify({ error: "Application not found" }), { status: 404 });
    }

    // ── Build prompt ────────────────────────────────────────────────────────
    // Fix: maxTokens variable was computed but never used — now passed to anthropic.messages.create
    const maxTokens = type === "follow_up_email" ? 600 : 2048;
    let prompt: string;

    if (type === "cv_adapter") {
      prompt = buildCVPrompt(application, resumeText ?? "", country ?? application.country ?? "GB");
    } else if (type === "cover_letter") {
      prompt = buildCoverLetterPrompt(
        application,
        resumeText ?? "",
        tone ?? "formal",
        languages ?? "",
        nationality ?? "",
        workAuthorization ?? "",
        feedback ?? ""
      );
    } else if (type === "follow_up_email") {
      prompt = buildFollowUpPrompt(application, emailType ?? "follow_up");
    } else {
      return new Response(JSON.stringify({ error: "Invalid generation type" }), { status: 400 });
    }

    // ── Call Anthropic ──────────────────────────────────────────────────────
    const response = await anthropic.messages.create({
      model: "claude-sonnet-4-6",
      max_tokens: maxTokens,
      system: SYSTEM_PROMPT,
      messages: [{ role: "user", content: prompt }],
    });

    const text =
      response.content[0].type === "text" ? response.content[0].text : "";

    // Save generation record and increment credits
    const [genResult, creditResult] = await Promise.all([
      supabase.from("ai_generations").insert({
        user_id: user.id,
        application_id: applicationId,
        type,
        input_tokens: response.usage.input_tokens,
        output_tokens: response.usage.output_tokens,
      }),
      supabase
        .from("profiles")
        .update({ ai_credits_used: creditsUsed + 1, ai_credits_month: currentMonth })
        .eq("id", user.id),
    ]);

    if (genResult.error || creditResult.error) {
      // Log server-side only — still return generated content to user
      if (process.env.NODE_ENV === "development") {
        console.error("[AI] usage tracking error:", genResult.error, creditResult.error);
      }
    }

    return Response.json({ content: text });
  } catch (error: unknown) {
    const e = error as { message?: string; status?: number };
    if (process.env.NODE_ENV === "development") {
      console.error("[AI] generate error:", e?.message);
    }
    return new Response(
      JSON.stringify({ error: "Internal server error" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
