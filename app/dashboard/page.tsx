"use client";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { supabase } from "@/lib/supabase";
import { Button } from "@/components/ui/button";
import type { User } from "@supabase/supabase-js";
import type { Profile } from "@/lib/types";

interface Stats {
      applications: number;
      interviews: number;
      offers: number;
      aiGenerations?: number;
}

const NAV_ITEMS = [
    { label: "Applications", icon: "📋", href: "/applications" },
    { label: "Profile", icon: "👤", href: "/profile" },
    { label: "Billing", icon: "💳", href: "/settings/billing" },
    ];

const QUICK_ACTIONS = [
    { label: "Track applications", desc: "Kanban board + list view", emoji: "📋", href: "/applications" },
    { label: "AI CV Adapter", desc: "Adapt your CV for any EU country", emoji: "📄", href: "/dashboard/cv-adapter" },
    { label: "Cover Letter", desc: "Generate in seconds with AI", emoji: "💌", href: "/dashboard/cover-letter" },
      { label: "Country Intel", desc: "Hiring norms for 12 EU markets", emoji: "🌍", href: "/dashboard/country-intel" },
    ];

export default function DashboardPage() {
      const [user, setUser] = useState<User | null>(null);
      const [loading, setLoading] = useState(true);
      const [stats, setStats] = useState<Stats>({ applications: 0, interviews: 0, offers: 0 });
      const [sidebarOpen, setSidebarOpen] = useState(false);
      const [paymentWarning, setPaymentWarning] = useState(false);
      const [dismissedWarning, setDismissedWarning] = useState(false);
      const [userPlan, setUserPlan] = useState<"free" | "pro">("free");
      const accessTokenRef = useRef<string | null>(null);
      const router = useRouter();

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, session) => {
        if (event === "INITIAL_SESSION" || event === "SIGNED_IN") {
          if (!session) {
            router.replace("/auth/login");
          } else {
            accessTokenRef.current = session.access_token;
            setUser(session.user);
            loadStats(session.access_token);
          }
        } else if (event === "TOKEN_REFRESHED" && session) {
          accessTokenRef.current = session.access_token;
        } else if (event === "SIGNED_OUT") {
          accessTokenRef.current = null;
          router.replace("/auth/login");
        }
      }
    );
    return () => { subscription.unsubscribe(); };
  }, [router]);

  const handleUpdatePayment = async () => {
    const { data: { session } } = await supabase.auth.getSession();
    if (!session) return;
    const res = await fetch("/api/stripe/portal", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ accessToken: session.access_token }),
    });
    const { url } = await res.json();
    if (url) window.location.href = url;
  };

  const handleDismissWarning = async () => {
    setDismissedWarning(true);
    if (accessTokenRef.current) {
      await fetch("/api/user/profile", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessTokenRef.current}`,
        },
        body: JSON.stringify({ payment_warning: false }),
      });
    }
  };

  const loadStats = async (accessToken: string) => {
    const res = await fetch("/api/user/profile", {
      headers: { Authorization: `Bearer ${accessToken}` },
    });
    if (!res.ok) return setLoading(false);
    const data = await res.json();
    setStats({
      applications: data.applications,
      interviews: data.interviews,
      offers: data.offers,
      aiGenerations: data.ai_credits_used,
    });
    if (data.plan === "pro") setUserPlan("pro");
    if (data.payment_warning) setPaymentWarning(true);
    setLoading(false);
  };

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    router.replace("/auth/login");
  };

  if (loading) {
          return (
                    <div className="min-h-screen flex items-center justify-center" style={{ background: "#FAFAFA" }}>
                                <div className="flex flex-col items-center gap-3">
                                          <Image src="/STAR.png" alt="" width={40} height={40} className="animate-slow-spin opacity-40" />
                                          <p className="text-sm" style={{ color: "#64748B" }}>Loading…</p>
                                </div>
                    </div>
                  );
  }
    
      return (
              <div className="min-h-screen flex" style={{ background: "#FAFAFA" }}>
                  {/* ── SIDEBAR ── */}
                  {sidebarOpen && (
                          <div className="fixed inset-0 z-40 bg-black/40 lg:hidden" onClick={() => setSidebarOpen(false)} />
                        )}
                    <aside
                                className={`fixed lg:static inset-y-0 left-0 z-50 w-64 flex flex-col justify-between transition-transform lg:translate-x-0 ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}`}
                                style={{ background: "#0F172A" }}
                              >
                            <div className="absolute bottom-0 right-0 pointer-events-none select-none opacity-[0.025]">
                                      <Image src="/STAR.png" alt="" width={120} height={120} style={{ filter: "invert(1)" }} />
                            </div>
                            <div className="relative flex flex-col h-full">
                                      <Link href="/" className="block px-5 pt-5 pb-4 border-b border-white/5 flex items-center gap-2">
                                                                                                    <Image src="/LOGO_NEW.png" alt="EuroCareer AI" width={130} height={30} className="h-7 w-auto" style={{ filter: "brightness(0) invert(1)" }} />
                                      </Link>
                                      <nav className="flex-1 px-3 py-4 space-y-0.5 overflow-y-auto">
                                          {NAV_ITEMS.map((item) => (
                                                <Link
                                                                    key={item.label}
                                                                    href={item.href}
                                                                    className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors text-white/50 hover:text-white hover:bg-white/5"
                                                                  >
                                                                <span className="text-base">{item.icon}</span>
                                                    {item.label}
                                                </Link>
                                              ))}
                                      </nav>
                                {/* AI Credits card */}
                                      <div className="mx-3 mb-4 p-4 rounded-xl relative overflow-hidden" style={{ background: "linear-gradient(135deg, #6366F1, #7C3AED)" }}>
                                                  <div className="absolute top-1 right-1 opacity-[0.07]">
                                                                <Image src="/STAR.png" alt="" width={48} height={48} style={{ filter: "invert(1)" }} />
                                                  </div>
                                                  <p className="text-xs font-bold text-white/70 uppercase tracking-widest mb-1">AI Credits</p>
                                                  {userPlan === "pro" ? (
                                                    <p className="text-2xl font-extrabold text-white mb-2" style={{ fontFamily: "'Sora', sans-serif" }}>Unlimited</p>
                                                  ) : (
                                                    <p className="text-2xl font-extrabold text-white mb-2" style={{ fontFamily: "'Sora', sans-serif" }}>3 <span className="text-sm font-normal text-white/50">/ month</span></p>
                                                  )}
                                                  <div className="w-full h-1.5 rounded-full bg-white/20 mb-3">
                                                                <div className="h-1.5 rounded-full bg-white" style={{ width: userPlan === "pro" ? "100%" : `${Math.min(((stats.aiGenerations ?? 0) / 3) * 100, 100)}%` }} />
                                                  </div>
                                                  {userPlan === "pro" ? (
                                                    <Link href="/settings/billing" className="block text-center text-xs font-semibold text-white bg-white/15 hover:bg-white/25 rounded-lg py-1.5 transition-colors">Manage plan →</Link>
                                                  ) : (
                                                    <Link href="/settings/billing" className="block text-center text-xs font-semibold text-white bg-white/15 hover:bg-white/25 rounded-lg py-1.5 transition-colors">Upgrade to Pro →</Link>
                                                  )}
                                      </div>
                            </div>
                    </aside>
              
                  {/* ── MAIN ── */}
                    <div className="flex-1 flex flex-col min-w-0">
                        {/* Top bar */}
                            <header className="bg-white border-b border-[#E2E8F0] px-6 py-4 flex items-center justify-between sticky top-0 z-30">
                                      <div className="flex items-center gap-3">
                                                  <button
                                                                    onClick={() => setSidebarOpen(!sidebarOpen)}
                                                                    className="lg:hidden p-1.5 rounded-lg hover:bg-[#FAFAFA] transition-colors"
                                                                    style={{ color: "#1E293B" }}
                                                                  >
                                                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
                                                  </button>
                                                  <h1 className="font-bold text-lg" style={{ fontFamily: "'Sora', sans-serif", color: "#0F172A" }}>Dashboard</h1>
                                      </div>
                                      <div className="flex items-center gap-3">
                                                  <span className="text-sm hidden sm:block" style={{ color: "#64748B" }}>{user?.email}</span>
                                                  <Button
                                                                    variant="outline"
                                                                    size="sm"
                                                                    onClick={handleSignOut}
                                                                    className="rounded-lg border-[#E2E8F0] text-sm font-medium hover:border-[#6366F1] hover:bg-[#EEF2FF] transition-all"
                                                                    style={{ color: "#1E293B" }}
                                                                  >
                                                                Sign out
                                                  </Button>
                                      </div>
                            </header>
                    
                        {/* Content */}
                            <main className="flex-1 p-6 max-w-5xl w-full mx-auto">
                                {/* Payment warning banner */}
                                {paymentWarning && !dismissedWarning && (
                                  <div className="mb-6 flex items-center justify-between gap-4 rounded-xl border border-red-200 bg-red-50 px-5 py-4">
                                    <div className="flex items-center gap-3 min-w-0">
                                      <span className="text-red-500 text-lg shrink-0">⚠</span>
                                      <p className="text-sm text-red-800">
                                        Your last payment failed. Please update your payment method to keep Pro access.
                                      </p>
                                    </div>
                                    <div className="flex items-center gap-2 shrink-0">
                                      <Button
                                        size="sm"
                                        onClick={handleUpdatePayment}
                                        className="bg-red-600 hover:bg-red-700 text-white text-xs rounded-lg"
                                      >
                                        Update payment method
                                      </Button>
                                      <button
                                        onClick={handleDismissWarning}
                                        className="p-1 rounded hover:bg-red-100 transition-colors text-red-400 hover:text-red-600"
                                        aria-label="Dismiss"
                                      >
                                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                                      </button>
                                    </div>
                                  </div>
                                )}

                                {/* Welcome */}
                                      <div className="mb-8 animate-fade-up">
                                                  <h2 className="text-2xl font-bold mb-1" style={{ fontFamily: "'Sora', sans-serif", color: "#0F172A" }}>Welcome back 👋</h2>
                                                  <p className="text-sm" style={{ color: "#64748B" }}>Here&apos;s your EuroCareer AI overview</p>
                                      </div>
                            
                                {/* Stats */}
                                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
                                          {[
                  { label: "Total", value: stats.applications, icon: "📋", color: "#6366F1" },
                  { label: "Interviews", value: stats.interviews, icon: "🎤", color: "#7C3AED" },
                  { label: "Offers", value: stats.offers, icon: "🎯", color: "#16A34A" },
                  { label: "AI Credits", value: stats.aiGenerations ?? 0, icon: null, color: "#6366F1", star: true, isPro: userPlan === "pro" },
                              ].map((stat) => (
                                                <div key={stat.label} className="bg-white rounded-2xl border border-[#E2E8F0] p-5 flex items-center gap-3 hover:border-[#6366F1] hover:shadow-sm transition-all">
                                                    {stat.star ? (
                                                                      <Image src="/STAR.png" alt="" width={28} height={28} style={{ opacity: 0.5 }} />
                                                                    ) : (
                                                                      <span className="text-2xl">{stat.icon}</span>
                                                                )}
                                                                <div>
                                                                  <p className="text-2xl font-bold" style={{ fontFamily: "'Sora', sans-serif", color: "#0F172A" }}>{stat.label === "AI Credits" ? (stat.isPro ? `${stat.value}` : `${stat.value} of 3`) : stat.value}</p>
                                                                  <p className="text-xs" style={{ color: "#64748B" }}>{stat.label === "AI Credits" ? (stat.isPro ? "Unlimited AI credits" : "AI Credits used this month") : stat.label}</p>
                                                                </div>
                                                </div>
                                              ))}
                                      </div>

                                {/* Issue #12: New user onboarding */}
                                {stats.applications === 0 && (
                                  <div className="mb-6 p-6 rounded-2xl border border-[#6366F1]/30" style={{ background: "linear-gradient(135deg, #EEF2FF 0%, #F8F8FF 100%)" }}>
                                    <h2 className="font-bold text-lg mb-1" style={{ fontFamily: "'Sora', sans-serif", color: "#0F172A" }}>
                                      Welcome to EuroCareerAI — let&apos;s get started!
                                    </h2>
                                    <p className="text-sm mb-4" style={{ color: "#64748B" }}>
                                      Complete these three steps to get the most out of EuroCareer AI.
                                    </p>
                                    <div className="space-y-3">
                                      {[
                                        { step: 1, label: "Add your first application", href: "/applications" },
                                        { step: 2, label: "Adapt your CV for your target country", href: "/applications" },
                                        { step: 3, label: "Generate a tailored cover letter", href: "/applications" },
                                      ].map(({ step, label, href }) => (
                                        <a key={step} href={href} className="flex items-center gap-3 p-3 rounded-xl bg-white hover:bg-[#FAFAFA] transition-colors border border-[#E2E8F0] group">
                                          <span className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold text-white" style={{ background: "#6366F1" }}>{step}</span>
                                          <span className="text-sm font-medium" style={{ color: "#0F172A" }}>{label}</span>
                                          <svg className="ml-auto w-4 h-4 text-[#64748B] group-hover:text-[#6366F1] transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                                        </a>
                                      ))}
                                    </div>
                                  </div>
                                )}

                                {/* Quick actions */}
                                      <div className="bg-white rounded-2xl border border-[#E2E8F0] p-6 mb-6">
                                                  <div className="flex items-center gap-2 mb-5">
                                                                <Image src="/STAR.png" alt="" width={16} height={16} style={{ opacity: 0.5 }} />
                                                                <h3 className="font-bold" style={{ fontFamily: "'Sora', sans-serif", color: "#0F172A" }}>Quick actions</h3>
                                                  </div>
                                                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                                      {QUICK_ACTIONS.map((action) => (
                                  <Link
                                                        key={action.label}
                                                        href={action.href}
                                                        className="flex items-center gap-3 p-4 rounded-xl border border-[#E2E8F0] hover:border-[#6366F1] hover:bg-[#EEF2FF] transition-all group"
                                                      >
                                                    <span className="text-2xl">{action.emoji}</span>
                                                    <div>
                                                                        <p className="font-semibold text-sm transition-colors" style={{ color: "#0F172A", fontFamily: "'Sora', sans-serif" }}>{action.label}</p>
                                                                        <p className="text-xs" style={{ color: "#64748B" }}>{action.desc}</p>
                                                    </div>
                                  </Link>
                                ))}
                                                  </div>
                                      </div>
                            
                                {/* Recent applications link */}
                                      <div className="bg-white rounded-2xl border border-[#E2E8F0] p-6">
                                                  <div className="flex items-center justify-between mb-4">
                                                                <h3 className="font-bold" style={{ fontFamily: "'Sora', sans-serif", color: "#0F172A" }}>Applications</h3>
                                                                <Link href="/applications" className="text-sm font-medium hover:underline" style={{ color: "#6366F1" }}>View all →</Link>
                                                  </div>
                                          {stats.applications === 0 ? (
                                <div className="flex flex-col items-center py-8 gap-3">
                                                <Image src="/STAR.png" alt="" width={36} height={36} className="opacity-10" />
                                                <p className="text-sm" style={{ color: "#64748B" }}>No applications yet</p>
                                                <Link href="/applications" className="text-sm font-semibold px-4 py-2 rounded-lg text-white transition-all hover:-translate-y-0.5" style={{ background: "#6366F1" }}>Add your first →</Link>
                                </div>
                              ) : (
                                <p className="text-sm" style={{ color: "#64748B" }}>You have {stats.applications} application{stats.applications !== 1 ? "s" : ""} tracked. <Link href="/applications" className="hover:underline font-medium" style={{ color: "#6366F1" }}>View them →</Link></p>
                                                  )}
                                      </div>
                            </main>
                    </div>
              </div>
            );
}
