import { createClient } from "@supabase/supabase-js";
import { NextRequest } from "next/server";
import { sendEmail, welcomeEmail } from "@/lib/emails";

export const dynamic = "force-dynamic";

/** Sends the welcome email once per user. Safe to call multiple times — idempotent. */
export async function POST(request: NextRequest) {
  try {
    const { accessToken } = await request.json();
    if (!accessToken) {
      return Response.json({ error: "Unauthorized" }, { status: 401 });
    }

    const anon = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    );
    const { data: { user }, error: authError } = await anon.auth.getUser(accessToken);
    if (authError || !user?.email) {
      return Response.json({ error: "Unauthorized" }, { status: 401 });
    }

    const admin = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!
    );

    // Idempotency check — don't re-send
    const { data: profile } = await admin
      .from("profiles")
      .select("emails_sent")
      .eq("id", user.id)
      .maybeSingle();

    const emailsSent = (profile?.emails_sent as Record<string, string> | null) ?? {};
    if (emailsSent.welcome) {
      return Response.json({ sent: false, reason: "already_sent" });
    }

    const { subject, html } = welcomeEmail();
    await sendEmail({ to: user.email, subject, html });

    const updated = { ...emailsSent, welcome: new Date().toISOString() };
    await admin.from("profiles").upsert({ id: user.id, emails_sent: updated });

    return Response.json({ sent: true });
  } catch (err) {
    console.error("[/api/emails/welcome] failed:", err);
    return Response.json({ error: "Failed" }, { status: 500 });
  }
}
