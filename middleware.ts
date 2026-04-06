import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { createClient } from "@supabase/supabase-js";

const protectedPaths = ["/dashboard", "/applications", "/profile", "/settings"];

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const isProtected = protectedPaths.some((p) => pathname.startsWith(p));
  if (!isProtected) return NextResponse.next();

  // Check for Supabase auth token in cookies
  const accessToken =
    request.cookies.get("sb-access-token")?.value ||
    request.cookies.get("sb-auth-token")?.value;

  // Also check the standard supabase auth cookie pattern
  const allCookies = request.cookies.getAll();
  const supabaseCookie = allCookies.find(
    (c) => c.name.includes("auth-token") || c.name.includes("sb-") && c.name.includes("-auth-token")
  );

  if (!accessToken && !supabaseCookie) {
    // No auth cookie found — redirect to login
    const loginUrl = new URL("/auth/login", request.url);
    loginUrl.searchParams.set("redirect", pathname);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*", "/applications/:path*", "/profile/:path*", "/settings/:path*"],
};
