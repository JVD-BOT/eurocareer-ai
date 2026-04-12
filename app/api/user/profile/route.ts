import { createClient } from "@supabase/supabase-js";
import { NextRequest } from "next/server";

function createSupabaseServer(accessToken: string) {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    { global: { headers: { Authorization: `Bearer ${accessToken}` } } }
  );
}

function getToken(request: NextRequest): string | null {
  return request.headers.get("Authorization")?.replace("Bearer ", "") ?? null;
}

export async function GET(request: NextRequest) {
  const accessToken = getToken(request);
  if (!accessToken) {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }

  const supabase = createSupabaseServer(accessToken);
  const { data: { user }, error: authError } = await supabase.auth.getUser();
  console.log("[/api/user/profile] user session:", user?.id ?? "none", "error:", authError?.message ?? "none");
  if (authError || !user) {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }

  const [{ data: apps }, { data: profile }] = await Promise.all([
    supabase.from("applications").select("status").eq("user_id", user.id),
    supabase
      .from("profiles")
      .select("plan, ai_credits_used, payment_warning")
      .eq("id", user.id)
      .maybeSingle(),
  ]);
  console.log("[/api/user/profile] raw profile:", JSON.stringify(profile));

  const response = {
    plan: profile?.plan ?? "free",
    ai_credits_used: profile?.ai_credits_used ?? 0,
    payment_warning: profile?.payment_warning ?? false,
    applications: apps?.length ?? 0,
    interviews: apps?.filter((a) => a.status === "interview").length ?? 0,
    offers: apps?.filter((a) => a.status === "offer").length ?? 0,
  };
  console.log("[/api/user/profile] response:", JSON.stringify(response));

  return Response.json(response);
}

export async function PATCH(request: NextRequest) {
  const accessToken = getToken(request);
  if (!accessToken) {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }

  const supabase = createSupabaseServer(accessToken);
  const { data: { user }, error: authError } = await supabase.auth.getUser();
  if (authError || !user) {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { payment_warning } = await request.json();
  await supabase
    .from("profiles")
    .update({ payment_warning: !!payment_warning })
    .eq("id", user.id);

  return Response.json({ ok: true });
}
