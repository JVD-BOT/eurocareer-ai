import { createClient } from "@supabase/supabase-js";
import { NextRequest } from "next/server";

/** Anon client with user JWT — used only to verify the caller's identity. */
function createAuthClient(accessToken: string) {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    { global: { headers: { Authorization: `Bearer ${accessToken}` } } }
  );
}

/** Service-role client — bypasses RLS for server-side reads/writes. */
function getAdmin() {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
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

  const { data: { user }, error: authError } = await createAuthClient(accessToken).auth.getUser(accessToken);
  console.log("[/api/user/profile] user session:", user?.id ?? "none", "error:", authError?.message ?? "none");
  if (authError || !user) {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }

  console.log("[/api/user/profile] service role key defined:", !!process.env.SUPABASE_SERVICE_ROLE_KEY);

  const [appsResult, profileResult] = await Promise.all([
    getAdmin().from("applications").select("status").eq("user_id", user.id),
    getAdmin()
      .from("profiles")
      .select("plan, ai_credits_used")
      .eq("id", user.id)
      .maybeSingle(),
  ]);

  if (profileResult.error) {
    console.error("[/api/user/profile] profiles query error:", JSON.stringify(profileResult.error));
  }
  if (appsResult.error) {
    console.error("[/api/user/profile] applications query error:", JSON.stringify(appsResult.error));
  }

  const { data: apps } = appsResult;
  const { data: profile } = profileResult;
  console.log("[/api/user/profile] raw profile:", JSON.stringify(profile));

  const response = {
    plan: profile?.plan ?? "free",
    ai_credits_used: profile?.ai_credits_used ?? 0,
    payment_warning: false,
    applications: apps?.length ?? 0,
    interviews: apps?.filter((a) => a.status === "interview").length ?? 0,
    offers: apps?.filter((a) => a.status === "offer").length ?? 0,
  };
  console.log("[/api/user/profile] response:", JSON.stringify(response));

  return Response.json(response);
}

