"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { supabase } from "@/lib/supabase";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const router = useRouter();

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }
    setLoading(true);
    const plan = new URLSearchParams(window.location.search).get("plan");
    const callbackUrl = new URL(window.location.origin + "/auth/callback");
    if (plan) callbackUrl.searchParams.set("plan", plan);
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: { emailRedirectTo: callbackUrl.toString() },
    });
    if (error) {
      setError(error.message);
      setLoading(false);
    } else {
      setSuccess(true);
    }
  };

  const handleGoogleSignup = async () => {
    setGoogleLoading(true);
    setError("");
    const plan = new URLSearchParams(window.location.search).get("plan");
    const callbackUrl = new URL(window.location.origin + "/auth/callback");
    if (plan) callbackUrl.searchParams.set("plan", plan);
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: { redirectTo: callbackUrl.toString() },
    });
    if (error) {
      setError(error.message);
      setGoogleLoading(false);
    }
  };

  if (success) {
    return (
      <div className="min-h-screen flex items-center justify-center p-6" style={{ background: "#F8F8F6" }}>
        <div className="w-full max-w-md text-center space-y-4">
          <div className="mx-auto mb-4 w-16 h-16 rounded-full flex items-center justify-center" style={{ background: "#EEEFFE" }}>
            <svg className="w-8 h-8" style={{ color: "#636DF5" }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <h1 className="text-2xl font-bold" style={{ fontFamily: "'Outfit', sans-serif", color: "#0F1629" }}>Check your email</h1>
          <p className="text-sm" style={{ color: "#7A7F94" }}>
            We sent a confirmation link to <strong style={{ color: "#3D4255" }}>{email}</strong>. Click it to activate your account.
          </p>
          <Link href="/auth/login" className="text-sm font-semibold hover:underline" style={{ color: "#636DF5" }}>
            Back to sign in
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col lg:flex-row" style={{ background: "#F8F8F6" }}>
      <div className="hidden lg:flex lg:w-1/2 flex-col justify-between p-12 relative overflow-hidden" style={{ background: "#0F1629" }}>
        <div className="absolute inset-0 pointer-events-none select-none opacity-[0.03]">
          <Image src="/STAR.png" alt="" fill className="object-contain" style={{ filter: "invert(1)" }} />
        </div>
        <Link href="/" className="relative z-10">
          <Image src="/LOGO_NEW.png" alt="EuroCareer AI" width={140} height={32} className="h-8 w-auto brightness-0 invert" />
        </Link>
        <div className="relative z-10 space-y-4">
          <p className="text-3xl font-bold leading-tight" style={{ fontFamily: "'Outfit', sans-serif", color: "#FFFFFF" }}>
            Your career across<br />Europe, simplified.
          </p>
          <p className="text-sm leading-relaxed" style={{ color: "#7A7F94" }}>
            AI-powered CV adaptation, cover letters, and application tracking.
          </p>
        </div>
        <p className="relative z-10 text-xs" style={{ color: "#7A7F94" }}>&copy; 2026 EuroCareer AI</p>
      </div>

      <div className="flex-1 flex items-center justify-center p-6 lg:p-12">
        <div className="w-full max-w-md text-center space-y-4">
          <div className="lg:hidden flex justify-center mb-8">
            <Image src="/LOGO_NEW.png" alt="EuroCareer AI" width={140} height={32} className="h-8 w-auto" />
          </div>
          <Link href="/" className="inline-flex items-center gap-1 text-sm mb-8 transition-colors" style={{ color: "#7A7F94" }}>
            &larr; Back to home
          </Link>
          <h1 className="text-2xl font-bold mb-1" style={{ fontFamily: "’Outfit’, sans-serif", color: "#0F1629" }}>
            Join EuroCareer AI
          </h1>
          <p className="text-sm mb-8" style={{ color: "#7A7F94" }}>
            Join EuroCareerAI — it&apos;s free
          </p>
          {error && (
            <div className="mb-5 text-sm px-4 py-3 rounded-xl border" style={{ background: "#FEE2E2", borderColor: "#FECACA", color: "#DC2626" }}>
              {error}
            </div>
          )}
          <Button type="button" variant="outline" className="w-full h-11 font-medium mb-4 rounded-xl" onClick={handleGoogleSignup} disabled={googleLoading}>
            {googleLoading ? (
              <span className="flex items-center gap-2">
                <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" /></svg>
                Connecting&hellip;
              </span>
            ) : (
              <span className="flex items-center gap-2"><GoogleIcon />Continue with Google</span>
            )}
          </Button>
          <div className="relative mb-4">
            <div className="absolute inset-0 flex items-center"><span className="w-full border-t border-[#E2E1DC]" /></div>
            <div className="relative flex justify-center text-xs uppercase"><span className="px-2 text-[#B0B4C5]" style={{ background: "#F8F8F6" }}>or</span></div>
          </div>
          <form onSubmit={handleSignup} className="space-y-4">
            <div className="text-left space-y-1">
              <Label htmlFor="email" className="text-sm font-medium" style={{ color: "#3D4255" }}>Email</Label>
              <Input id="email" type="email" placeholder="you@example.com" value={email} onChange={(e) => setEmail(e.target.value)} required className="h-11 rounded-xl" style={{ borderColor: "#E2E1DC" }} />
            </div>
            <div className="text-left space-y-1">
              <Label htmlFor="password" className="text-sm font-medium" style={{ color: "#3D4255" }}>Password</Label>
              <Input id="password" type="password" placeholder="Min. 6 characters" value={password} onChange={(e) => setPassword(e.target.value)} required className="h-11 rounded-xl" style={{ borderColor: "#E2E1DC" }} />
            </div>
            <div className="text-left space-y-1">
              <Label htmlFor="confirm" className="text-sm font-medium" style={{ color: "#3D4255" }}>Confirm password</Label>
              <Input id="confirm" type="password" placeholder="Repeat your password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required className="h-11 rounded-xl" style={{ borderColor: "#E2E1DC" }} />
            </div>
            <Button type="submit" className="w-full h-11 font-semibold rounded-xl text-white" style={{ background: "#636DF5" }} disabled={loading}>
              {loading ? (
                <span className="flex items-center gap-2">
                  <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" /></svg>
                  Creating account&hellip;
                </span>
              ) : (
                <span className="flex items-center gap-2">
                  <Image src="/STAR.png" alt="" width={14} height={14} style={{ filter: "invert(1)" }} />
                  Create account
                </span>
              )}
            </Button>
            <p className="text-xs text-center" style={{ color: "#7A7F94" }}>
              By signing up you agree to our{" "}
              <Link href="/terms" className="hover:underline" style={{ color: "#636DF5" }}>Terms</Link>
              {" "}and{" "}
              <Link href="/privacy" className="hover:underline" style={{ color: "#636DF5" }}>Privacy Policy</Link>
            </p>
          </form>
          <p className="text-sm text-center mt-6" style={{ color: "#7A7F94" }}>
            Already have an account?{" "}
            <Link href="/auth/login" className="font-semibold hover:underline" style={{ color: "#636DF5" }}>Sign in</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

function GoogleIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
    </svg>
  );
}
