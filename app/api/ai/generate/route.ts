import Anthropic from "@anthropic-ai/sdk";
import { createClient } from "@supabase/supabase-js";
import { NextRequest } from "next/server";
import { buildCVPrompt, buildCoverLetterPrompt, buildFollowUpPrompt } from "@/lib/ai-prompts";
import { FREE_AI_LIMIT } from "@/lib/types";

export async function POST(request: NextRequest) {
  const apiKey = process.env.ANTHROPIC_API_KEY;
  console.log("[AI] ANTHROPIC_API_KEY first 10 chars:", apiKey?.slice(0, 10) ?? "UNDEFINED");
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

    // ── Auth ──────────────────────────────────────────────────
    // Use the access token as the Authorization header so all subsequent
    // DB queries run under the user's identity (RLS-aware).
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      { global: { headers: { Authorization: `Bearer ${accessToken}` } } }
    );

    const { data: { user }, error: authError } = await supabase.auth.getUser(accessToken);
    if (authError || !user) {
      return new Response(JSON.stringify({ error: "Unauthorized" }), { status: 401 });
    }

    // ── Profile & rate limiting ───────────────────────────────
    const currentMonth = new Date().toISOString().slice(0, 7); // "2025-03"

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

    // ── Fetch application ─────────────────────────────────────
    const { data: application } = await supabase
      .from("applications")
      .select("*")
      .eq("id", applicationId)
      .single();

    if (!application) {
      return new Response(JSON.stringify({ error: "Application not found" }), { status: 404 });
    }

    // ── Build prompt ──────────────────────────────────────────
    let prompt: string;
    const maxTokens = type === "follow_up_email" ? 600 : 2048;

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

    // ── Call Anthropic ────────────────────────────────────────
    console.log("[AI] calling Anthropic, model: claude-sonnet-4-6, type:", type);
    const response = await anthropic.messages.create({
      model: "claude-sonnet-4-6",
      max_tokens: 1024,
      messages: [{ role: "user", content: prompt }],
    });

    console.log("[AI] Anthropic response received, stop_reason:", response.stop_reason);
    const text = response.content[0].type === "text" ? response.content[0].text : "";

    // Save generation record and increment credits (fire & forget)
    Promise.all([
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
    ]).catch(console.error);

    return Response.json({ content: text });
  } catch (error: unknown) {
    const e = error as { message?: string; status?: number; stack?: string };
    console.error("[AI] generate error — message:", e?.message);
    console.error("[AI] generate error — status:", e?.status);
    console.error("[AI] generate error — stack:", e?.stack);
    return new Response(JSON.stringify({ error: "Internal server error", message: e?.message, status: e?.status }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
