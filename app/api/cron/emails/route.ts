import { createClient, SupabaseClient } from "@supabase/supabase-js";
import { NextRequest } from "next/server";
import { day2Email, day7Email, sendEmail } from "@/lib/emails";

export const dynamic = "force-dynamic";

const FREE_MONTHLY_LIMIT = 3;
const DAY_MS = 24 * 60 * 60 * 1000;

type ProfileRow = {
  id: string;
  ai_credits_used: number | null;
  emails_sent: Record<string, string> | null;
};

async function processBatch(
  admin: SupabaseClient,
  profiles: ProfileRow[],
  key: "day2" | "day7",
  build: (remaining: number) => { subject: string; html: string },
  errors: string[]
): Promise<number> {
  let sent = 0;
  for (const p of profiles) {
    try {
      const { data: userRes, error: userErr } = await admin.auth.admin.getUserById(p.id);
      if (userErr || !userRes?.user?.email) {
        errors.push(`${key} user ${p.id}: no email`);
        continue;
      }
      const remaining = Math.max(0, FREE_MONTHLY_LIMIT - (p.ai_credits_used ?? 0));
      const { subject, html } = build(remaining);
      await sendEmail({ to: userRes.user.email, subject, html });

      const merged = { ...(p.emails_sent ?? {}), [key]: new Date().toISOString() };
      const { error: updateErr } = await admin
        .from("profiles")
        .update({ emails_sent: merged })
        .eq("id", p.id);
      if (updateErr) {
        errors.push(`${key} user ${p.id} update: ${updateErr.message}`);
        continue;
      }
      sent++;
    } catch (err) {
      errors.push(`${key} user ${p.id}: ${(err as Error).message}`);
    }
  }
  return sent;
}

export async function GET(request: NextRequest) {
  const auth = request.headers.get("authorization");
  if (auth !== `Bearer ${process.env.CRON_SECRET}`) {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }

  const admin = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  );

  const now = Date.now();
  const twoDaysStart = new Date(now - 2.5 * DAY_MS).toISOString();
  const twoDaysEnd = new Date(now - 1.5 * DAY_MS).toISOString();
  const sevenDaysStart = new Date(now - 7.5 * DAY_MS).toISOString();
  const sevenDaysEnd = new Date(now - 6.5 * DAY_MS).toISOString();

  const errors: string[] = [];

  // Day 2 — created ~2 days ago, 0 generations used, day2 email not yet sent
  const day2Query = await admin
    .from("profiles")
    .select("id, ai_credits_used, emails_sent")
    .gte("created_at", twoDaysStart)
    .lte("created_at", twoDaysEnd)
    .eq("ai_credits_used", 0)
    .is("emails_sent->>day2", null);
  if (day2Query.error) errors.push(`day2 query: ${day2Query.error.message}`);

  // Day 7 — created ~7 days ago, used fewer than 3 generations, day7 not yet sent
  const day7Query = await admin
    .from("profiles")
    .select("id, ai_credits_used, emails_sent")
    .gte("created_at", sevenDaysStart)
    .lte("created_at", sevenDaysEnd)
    .lt("ai_credits_used", FREE_MONTHLY_LIMIT)
    .is("emails_sent->>day7", null);
  if (day7Query.error) errors.push(`day7 query: ${day7Query.error.message}`);

  const day2Sent = await processBatch(admin, (day2Query.data ?? []) as ProfileRow[], "day2", day2Email, errors);
  const day7Sent = await processBatch(admin, (day7Query.data ?? []) as ProfileRow[], "day7", day7Email, errors);

  return Response.json({
    day2Candidates: day2Query.data?.length ?? 0,
    day2Sent,
    day7Candidates: day7Query.data?.length ?? 0,
    day7Sent,
    errors,
  });
}
