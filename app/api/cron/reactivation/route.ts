import { createClient } from "@supabase/supabase-js";
import { NextRequest } from "next/server";
import { reactivationEmail, sendEmail } from "@/lib/emails";

export const dynamic = "force-dynamic";

// One-time reactivation broadcast. Not wired into vercel.json — triggered
// manually by hand with the CRON_SECRET. The dedup key namespaces this send so
// it can never go out twice, and so future broadcasts get their own key.
const DEDUP_KEY = "reactivation_2026_06";
const BATCH_SIZE = 25;

type ProfileRow = {
  id: string;
  emails_sent: Record<string, string> | null;
};

export async function GET(request: NextRequest) {
  const auth = request.headers.get("authorization");
  if (auth !== `Bearer ${process.env.CRON_SECRET}`) {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }

  // Safety guard: only actually send with ?confirm=yes. Otherwise dry-run.
  const confirm = request.nextUrl.searchParams.get("confirm") === "yes";

  // Optional ?only=<email> — safe test send to a single address. Bypasses the
  // profiles loop entirely and never writes a dedup stamp, so it can be re-run.
  const only = request.nextUrl.searchParams.get("only");
  if (only) {
    if (!confirm) {
      return Response.json({ wouldTestSend: only, dryRun: true });
    }
    const { subject, html } = reactivationEmail();
    await sendEmail({ to: only, subject, html });
    return Response.json({ testSent: true, to: only });
  }

  const admin = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  );

  // Every user who hasn't already received this broadcast — no created_at
  // window, no credit filter. Dedup via the emails_sent jsonb key.
  const { data, error } = await admin
    .from("profiles")
    .select("id, emails_sent")
    .is(`emails_sent->>${DEDUP_KEY}`, null);

  if (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }

  const profiles = (data ?? []) as ProfileRow[];

  // Dry-run preview: how many users WOULD receive it, without sending.
  if (!confirm) {
    return Response.json({ sent: 0, would_send: profiles.length, dryRun: true });
  }

  const { subject, html } = reactivationEmail();
  let sent = 0;
  let skipped = 0;
  let failed = 0;
  const errors: string[] = [];

  for (let i = 0; i < profiles.length; i += BATCH_SIZE) {
    const batch = profiles.slice(i, i + BATCH_SIZE);
    for (const p of batch) {
      try {
        const { data: userRes, error: userErr } = await admin.auth.admin.getUserById(p.id);
        if (userErr || !userRes?.user?.email) {
          skipped++;
          errors.push(`${p.id}: no email`);
          continue;
        }
        await sendEmail({ to: userRes.user.email, subject, html });

        const merged = { ...(p.emails_sent ?? {}), [DEDUP_KEY]: new Date().toISOString() };
        const { error: updateErr } = await admin
          .from("profiles")
          .update({ emails_sent: merged })
          .eq("id", p.id);
        if (updateErr) {
          failed++;
          errors.push(`${p.id} update: ${updateErr.message}`);
          continue;
        }
        sent++;
      } catch (err) {
        failed++;
        errors.push(`${p.id}: ${(err as Error).message}`);
      }
    }
  }

  return Response.json({ sent, skipped, failed, errors });
}
