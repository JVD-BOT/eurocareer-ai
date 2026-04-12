import { createClient } from "@supabase/supabase-js";

// Use fallback URLs during build-time prerendering when env vars aren't available.
// All client pages check auth before querying, so the placeholder is never hit at runtime.
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "https://placeholder.supabase.co";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "placeholder";

/** Base client – use for auth operations (sign-in, sign-out, onAuthStateChange). */
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

/** Client that sends the user's JWT as the Bearer token so PostgREST RLS sees auth.uid(). */
export function supabaseWithToken(accessToken: string) {
  return createClient(supabaseUrl, supabaseAnonKey, {
    global: { headers: { Authorization: `Bearer ${accessToken}` } },
    auth: { persistSession: false, autoRefreshToken: false },
  });
}
