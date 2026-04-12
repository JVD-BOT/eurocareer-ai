import { createClient } from "@supabase/supabase-js";

// Use fallback URLs during build-time prerendering when env vars aren't available.
// All client pages check auth before querying, so the placeholder is never hit at runtime.
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "https://placeholder.supabase.co";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "placeholder";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
