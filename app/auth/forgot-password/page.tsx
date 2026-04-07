"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { supabase } from "@/lib/supabase";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/auth/callback`,
    });
    if (error) {
      setError(error.message);
      setLoading(false);
    } else {
      setSuccess(true);
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
          <h1 className="text-2xl font-bold" style={{ fontFamily: "'Sora', sans-serif", color: "#0F1629" }}>Check your email</h1>
          <p className="text-sm" style={{ color: "#7A7F94" }}>
            We sent a password reset link to <strong style={{ color: "#3D4255" }}>{email}</strong>. Click it to reset your password.
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

      {/* ── LEFT BRAND PANEL ── */}
      <div className="hidden lg:flex lg:w-1/2 flex-col justify-between p-12 relative overflow-hidden" style={{ background: "#0F1629" }}>
        <div className="absolute inset-0 pointer-events-none select-none opacity-[0.03]">
          <Image src="/STAR.png" alt="" fill className="object-contain animate-slow-spin" style={{ filter: "invert(1)" }} />
        </div>
        <div className="relative">
          <Image src="/LOGO_NEW.png" alt="EuroCareer AI" width={160} height={36} className="h-9 w-auto" style={{ filter: "brightness(0) invert(1)" }} />
        </div>
        <div className="relative space-y-6">
          <h2 className="text-3xl font-bold text-white leading-tight" style={{ fontFamily: "'Sora', sans-serif" }}>
            Your EU job search,<br />
            <span style={{ background: "linear-gradient(135deg, #636DF5, #7C3AED)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>powered by AI</span>
          </h2>
          <div className="flex flex-wrap gap-2">
            {["✨ AI CV Adapter", "🌍 12 Countries", "💌 Cover Letters", "📋 Kanban Tracker"].map((pill) => (
              <span key={pill} className="text-xs font-semibold px-3 py-1 rounded-full border border-white/10 text-white/70">{pill}</span>
            ))}
          </div>
        </div>
        <p className="relative text-xs" style={{ color: "#7A7F94" }}>&copy; {new Date().getFullYear()} EuroCareer AI</p>
      </div>

      {/* ── RIGHT FORM PANEL ── */}
      <div className="flex-1 flex items-center justify-center p-6 lg:p-12">
        <div className="w-full max-w-md">
          <div className="lg:hidden flex justify-center mb-8">
            <Image src="/LOGO_NEW.png" alt="EuroCareer AI" width={140} height={32} className="h-8 w-auto" />
          </div>

          <Link href="/auth/login" className="inline-flex items-center gap-1 text-sm mb-8 transition-colors" style={{ color: "#7A7F94" }}>
            &larr; Back to sign in
          </Link>

          <h1 className="text-2xl font-bold mb-1" style={{ fontFamily: "'Sora', sans-serif", color: "#0F1629" }}>Reset your password</h1>
          <p className="text-sm mb-8" style={{ color: "#7A7F94" }}>Enter your email and we&apos;ll send you a reset link</p>

          {error && (
            <div className="mb-5 text-sm px-4 py-3 rounded-xl border" style={{ background: "#FEE2E2", borderColor: "#DC2626", color: "#DC2626" }}>{error}</div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-1.5">
              <Label htmlFor="email" className="text-sm font-medium" style={{ color: "#3D4255" }}>Email</Label>
              <Input id="email" type="email" placeholder="you@example.com" value={email} onChange={(e) => setEmail(e.target.value)} required disabled={loading} className="h-11 rounded-xl border-[#E2E8F0] focus:border-[#636DF5] focus:ring-[#636DF5]/20" />
            </div>
            <Button type="submit" className="w-full h-11 font-semibold rounded-xl text-white transition-all hover:-translate-y-0.5 hover:shadow-md" style={{ background: "#636DF5" }} disabled={loading}>
              {loading ? (
                <span className="flex items-center gap-2"><svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" /></svg>Sending&hellip;</span>
              ) : (
                "Send reset link"
              )}
            </Button>
          </form>

          <p className="text-sm text-center mt-6" style={{ color: "#7A7F94" }}>
            Remember your password?{" "}
            <Link href="/auth/login" className="font-semibold hover:underline" style={{ color: "#636DF5" }}>Sign in</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
