"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { supabase } from "@/lib/supabase";
import { Button } from "@/components/ui/button";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type User = any;

interface Stats {
      applications: number;
      interviews: number;
      offers: number;
}

const NAV_ITEMS = [
    { label: "Applications", icon: "📋", href: "/applications" },
    { label: "Profile", icon: "👤", href: "/profile" },
    { label: "Billing", icon: "💳", href: "/settings/billing" },
    ];

const QUICK_ACTIONS = [
    { label: "Track applications", desc: "Kanban board + list view", emoji: "📋", href: "/applications" },
    { label: "AI CV Adapter", desc: "Adapt your CV for any EU country", emoji: "📄", href: "#" },
    { label: "Cover Letter", desc: "Generate in seconds with AI", emoji: "💌", href: "#" },
    { label: "Country Intel", desc: "Hiring norms for 12 EU markets", emoji: "🌍", href: "#" },
    ];

export default function DashboardPage() {
      const [user, setUser] = useState<User | null>(null);
      const [loading, setLoading] = useState(true);
      const [stats, setStats] = useState<Stats>({ applications: 0, interviews: 0, offers: 0 });
      const [sidebarOpen, setSidebarOpen] = useState(false);
      const router = useRouter();

  useEffect(() => {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
                (supabase.auth as any).getUser().then(({ data }: { data: { user: User | null } }) => {
                          const currentUser = data.user;
                          if (!currentUser) {
                                      router.replace("/auth/login");
                          } else {
                                      setUser(currentUser);
                                      loadStats();
                          }
                });
  }, [router]);

  const loadStats = async () => {
          const { data } = await supabase.from("applications").select("status");
          if (data) {
                    setStats({
                                applications: data.length,
                                interviews: data.filter((a: { status: string }) => a.status === "interview").length,
                                offers: data.filter((a: { status: string }) => a.status === "offer").length,
                    });
          }
          setLoading(false);
  };

  const handleSignOut = async () => {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          await (supabase.auth as any).signOut();
          router.replace("/auth/login");
  };

  if (loading) {
          return (
                    <div className="min-h-screen flex items-center justify-center" style={{ background: "#F8F8F6" }}>
                                <div className="flex flex-col items-center gap-3">
                                          <Image src="/STAR.png" alt="" width={40} height={40} className="animate-slow-spin opacity-40" />
                                          <p className="text-sm" style={{ color: "#7A7F94" }}>Loading…</p>p>
                                </div>div>
                    </div>div>
                  );
  }
    
      return (
              <div className="min-h-screen flex" style={{ background: "#F8F8F6" }}>
                  {/* ── SIDEBAR ── */}
                  {sidebarOpen && (
                          <div className="fixed inset-0 z-40 bg-black/40 lg:hidden" onClick={() => setSidebarOpen(false)} />
                        )}
                    <aside
                                className={`fixed lg:static inset-y-0 left-0 z-50 w-64 flex flex-col justify-between transition-transform lg:translate-x-0 ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}`}
                                style={{ background: "#0F1629" }}
                              >
                            <div className="absolute bottom-0 right-0 pointer-events-none select-none opacity-[0.025]">
                                      <Image src="/STAR.png" alt="" width={120} height={120} style={{ filter: "invert(1)" }} />
                            </div>div>
                            <div className="relative flex flex-col h-full">
                                      <div className="px-5 pt-5 pb-4 border-b border-white/5 flex items-center gap-2">
                                                  <Image src="/STAR.png" alt="" width={28} height={28} style={{ filter: "brightness(0) invert(1)" }} className="opacity-90 shrink-0" />
                                                  <Image src="/LOGO_NEW.png" alt="EuroCareer AI" width={130} height={30} className="h-7 w-auto" style={{ filter: "brightness(0) invert(1)" }} />
                                      </div>div>
                                      <nav className="flex-1 px-3 py-4 space-y-0.5 overflow-y-auto">
                                          {NAV_ITEMS.map((item) => (
                                                <Link
                                                                    key={item.label}
                                                                    href={item.href}
                                                                    className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors text-white/50 hover:text-white hover:bg-white/5"
                                                                  >
                                                                <span className="text-base">{item.icon}</span>span>
                                                    {item.label}
                                                </Link>Link>
                                              ))}
                                      </nav>nav>
                                {/* AI Credits card */}
                                      <div className="mx-3 mb-4 p-4 rounded-xl relative overflow-hidden" style={{ background: "linear-gradient(135deg, #636DF5, #7C3AED)" }}>
                                                  <div className="absolute top-1 right-1 opacity-[0.07]">
                                                                <Image src="/STAR.png" alt="" width={48} height={48} style={{ filter: "invert(1)" }} />
                                                  </div>div>
                                                  <p className="text-xs font-bold text-white/70 uppercase tracking-widest mb-1">AI Credits</p>p>
                                                  <p className="text-2xl font-extrabold text-white mb-2" style={{ fontFamily: "'Outfit', sans-serif" }}>3 <span className="text-sm font-normal text-white/50">/ month</span>span></p>p>
                                                  <div className="w-full h-1.5 rounded-full bg-white/20 mb-3">
                                                                <div className="h-1.5 rounded-full bg-white" style={{ width: "100%" }} />
                                                  </div>div>
                                                  <Link href="/settings/billing" className="block text-center text-xs font-semibold text-white bg-white/15 hover:bg-white/25 rounded-lg py-1.5 transition-colors">Upgrade to Pro →</Link>Link>
                                      </div>div>
                            </div>div>
                    </aside>aside>
              
                  {/* ── MAIN ── */}
                    <div className="flex-1 flex flex-col min-w-0">
                        {/* Top bar */}
                            <header className="bg-white border-b border-[#E2E1DC] px-6 py-4 flex items-center justify-between sticky top-0 z-30">
                                      <div className="flex items-center gap-3">
                                                  <button
                                                                    onClick={() => setSidebarOpen(!sidebarOpen)}
                                                                    className="lg:hidden p-1.5 rounded-lg hover:bg-[#F8F8F6] transition-colors"
                                                                    style={{ color: "#3D4255" }}
                                                                  >
                                                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>svg>
                                                  </button>button>
                                                  <h1 className="font-bold text-lg" style={{ fontFamily: "'Outfit', sans-serif", color: "#0F1629" }}>Dashboard</h1>h1>
                                      </div>div>
                                      <div className="flex items-center gap-3">
                                                  <span className="text-sm hidden sm:block" style={{ color: "#7A7F94" }}>{user?.email}</span>span>
                                                  <Button
                                                                    variant="outline"
                                                                    size="sm"
                                                                    onClick={handleSignOut}
                                                                    className="rounded-lg border-[#E2E1DC] text-sm font-medium hover:border-[#636DF5] hover:bg-[#EEEFFE] transition-all"
                                                                    style={{ color: "#3D4255" }}
                                                                  >
                                                                Sign out
                                                  </Button>Button>
                                      </div>div>
                            </header>header>
                    
                        {/* Content */}
                            <main className="flex-1 p-6 max-w-5xl w-full mx-auto">
                                {/* Welcome */}
                                      <div className="mb-8 animate-fade-up">
                                                  <h2 className="text-2xl font-bold mb-1" style={{ fontFamily: "'Outfit', sans-serif", color: "#0F1629" }}>Welcome back 👋</h2>h2>
                                                  <p className="text-sm" style={{ color: "#7A7F94" }}>Here&apos;s your EuroCareer AI overview</p>p>
                                      </div>div>
                            
                                {/* Stats */}
                                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
                                          {[
                  { label: "Total", value: stats.applications, icon: "📋", color: "#636DF5" },
                  { label: "Interviews", value: stats.interviews, icon: "🎤", color: "#7C3AED" },
                  { label: "Offers", value: stats.offers, icon: "🎯", color: "#16A34A" },
                  { label: "AI Gens", value: 3, icon: null, color: "#636DF5", star: true },
                              ].map((stat) => (
                                                <div key={stat.label} className="bg-white rounded-2xl border border-[#E2E1DC] p-5 flex items-center gap-3 hover:border-[#636DF5] hover:shadow-sm transition-all">
                                                    {stat.star ? (
                                                                      <Image src="/STAR.png" alt="" width={28} height={28} style={{ opacity: 0.5 }} />
                                                                    ) : (
                                                                      <span className="text-2xl">{stat.icon}</span>span>
                                                                )}
                                                                <div>
                                                                                  <p className="text-2xl font-bold" style={{ fontFamily: "'Outfit', sans-serif", color: "#0F1629" }}>{stat.value}</p>p>
                                                                                  <p className="text-xs" style={{ color: "#7A7F94" }}>{stat.label}</p>p>
                                                                </div>div>
                                                </div>div>
                                              ))}
                                      </div>div>
                            
                                {/* Quick actions */}
                                      <div className="bg-white rounded-2xl border border-[#E2E1DC] p-6 mb-6">
                                                  <div className="flex items-center gap-2 mb-5">
                                                                <Image src="/STAR.png" alt="" width={16} height={16} style={{ opacity: 0.5 }} />
                                                                <h3 className="font-bold" style={{ fontFamily: "'Outfit', sans-serif", color: "#0F1629" }}>Quick actions</h3>h3>
                                                  </div>div>
                                                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                                      {QUICK_ACTIONS.map((action) => (
                                  <Link
                                                        key={action.label}
                                                        href={action.href}
                                                        className="flex items-center gap-3 p-4 rounded-xl border border-[#E2E1DC] hover:border-[#636DF5] hover:bg-[#EEEFFE] transition-all group"
                                                      >
                                                    <span className="text-2xl">{action.emoji}</span>span>
                                                    <div>
                                                                        <p className="font-semibold text-sm transition-colors" style={{ color: "#0F1629", fontFamily: "'Outfit', sans-serif" }}>{action.label}</p>p>
                                                                        <p className="text-xs" style={{ color: "#7A7F94" }}>{action.desc}</p>p>
                                                    </div>div>
                                  </Link>Link>
                                ))}
                                                  </div>div>
                                      </div>div>
                            
                                {/* Recent applications link */}
                                      <div className="bg-white rounded-2xl border border-[#E2E1DC] p-6">
                                                  <div className="flex items-center justify-between mb-4">
                                                                <h3 className="font-bold" style={{ fontFamily: "'Outfit', sans-serif", color: "#0F1629" }}>Applications</h3>h3>
                                                                <Link href="/applications" className="text-sm font-medium hover:underline" style={{ color: "#636DF5" }}>View all →</Link>Link>
                                                  </div>div>
                                          {stats.applications === 0 ? (
                                <div className="flex flex-col items-center py-8 gap-3">
                                                <Image src="/STAR.png" alt="" width={36} height={36} className="opacity-10" />
                                                <p className="text-sm" style={{ color: "#B0B4C5" }}>No applications yet</p>p>
                                                <Link href="/applications" className="text-sm font-semibold px-4 py-2 rounded-lg text-white transition-all hover:-translate-y-0.5" style={{ background: "#636DF5" }}>Add your first →</Link>Link>
                                </div>div>
                              ) : (
                                <p className="text-sm" style={{ color: "#7A7F94" }}>You have {stats.applications} application{stats.applications !== 1 ? "s" : ""} tracked. <Link href="/applications" className="hover:underline font-medium" style={{ color: "#636DF5" }}>View them →</Link>Link></p>p>
                                                  )}
                                      </div>div>
                            </main>main>
                    </div>div>
              </div>div>
            );
}</div>
