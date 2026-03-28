"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef } from "react";

const COUNTRIES = [
  { code: "DE", name: "Germany", flag: "🇩🇪" },
  { code: "NL", name: "Netherlands", flag: "🇳🇱" },
  { code: "FR", name: "France", flag: "🇫🇷" },
  { code: "SE", name: "Sweden", flag: "🇸🇪" },
  { code: "GB", name: "UK", flag: "🇬🇧" },
  { code: "ES", name: "Spain", flag: "🇪🇸" },
  { code: "IE", name: "Ireland", flag: "🇮🇪" },
  { code: "DK", name: "Denmark", flag: "🇩🇰" },
  { code: "BE", name: "Belgium", flag: "🇧🇪" },
  { code: "AT", name: "Austria", flag: "🇦🇹" },
  { code: "CH", name: "Switzerland", flag: "🇨🇭" },
  { code: "IT", name: "Italy", flag: "🇮🇹" },
  ];

const HOW_IT_WORKS = [
  { step: "01", icon: "👤", title: "Create your profile", desc: "Add your CV once. EuroCareer AI stores it securely and uses it as the base for every adaptation and cover letter." },
  { step: "02", icon: "📋", title: "Track your applications", desc: "Log every job across the Kanban board — Researching, Applied, Interview, Offer, Rejected." },
  { step: "03", icon: "✨", title: "Generate with AI", desc: "Pick a country, click adapt. Get a country-specific CV and cover letter in seconds, ready to send." },
  ];

const FEATURES = [
  { emoji: "📋", title: "Application Tracker", desc: "Kanban board across 6 stages — Researching, Applied, Interview, Offer, Rejected. Filter by country or status.", tag: "Core" },
  { emoji: "📄", title: "AI CV Adapter", desc: "One click and your CV is reformatted to the standards of Germany, Netherlands, France, Sweden, and 8 more.", tag: "AI" },
  { emoji: "💌", title: "Cover Letter Generator", desc: "Choose formal, warm, or casual tone. Get a personalised letter in seconds — regenerate with feedback.", tag: "AI" },
  { emoji: "🌍", title: "Country Intelligence", desc: "Built-in hiring norms for 12 EU countries: photo expectations, CV length, language conventions, and more.", tag: "Core" },
  ];

const BLOG_POSTS = [
  { tag: "CV Guide", flag: "🇩🇪", title: "How to write a CV for Germany in 2026", desc: "German CVs follow strict conventions around format, photo, and structure.", href: "/blog/german-cv-format" },
  { tag: "Job Search", flag: "🇳🇱", title: "Finding jobs in the Netherlands as a foreigner", desc: "The Dutch job market is open to internationals — here is how to stand out.", href: "/blog/netherlands-job-search" },
  { tag: "CV Guide", flag: "🇪🇺", title: "EU vs US resume: key differences explained", desc: "Here is exactly what to change before you hit send on an EU application.", href: "/blog/eu-vs-us-resume" },
  ];

const FAQS = [
  { q: "Which countries are supported?", a: "Germany, Netherlands, France, Sweden, Denmark, UK, Spain, Ireland, Belgium, Austria, Switzerland, and Italy — 12 countries total." },
  { q: "How does the AI CV adapter work?", a: "Paste your existing CV, select the target country, and the AI rewrites it to match local hiring standards — format, length, photo norms, and more." },
  { q: "Do I need ChatGPT or any other AI subscription?", a: "No. The AI is built directly into EuroCareer AI. Everything runs within the app — no third-party subscriptions needed." },
  { q: "What is an AI credit?", a: "Each AI generation (CV adaptation or cover letter) uses one credit. Free accounts get 3 per month. Pro accounts get unlimited." },
  { q: "Can I cancel my Pro subscription at any time?", a: "Yes. Cancel anytime from your billing page — no questions asked, no lock-in." },
  { q: "Is my data secure?", a: "All data is stored in a Supabase database with Row Level Security. Only you can access your applications and documents." },
  ];

export default function LandingPage() {
    const revealRefs = useRef<HTMLElement[]>([]);

  useEffect(() => {
        const observer = new IntersectionObserver(
                (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
          { threshold: 0.1 }
              );
        revealRefs.current.forEach((el) => el && observer.observe(el));
        return () => observer.disconnect();
  }, []);

  const addReveal = (el: HTMLElement | null) => {
        if (el && !revealRefs.current.includes(el)) revealRefs.current.push(el);
  };

  return (
        <div className="min-h-screen text-[#0F1629]" style={{ background: "#F8F8F6" }}>

          {/* ── NAV ── */}
                <nav className="border-b border-[#E2E1DC] bg-white/90 backdrop-blur-sm sticky top-0 z-50">
                        <div className="max-w-5xl mx-auto px-6 py-3.5 flex items-center justify-between">
                                  <Link href="/" className="flex items-center gap-2">
                                              <Image src="/LOGO_PNG.png" alt="EuroCareer AI" width={140} height={32} className="h-8 w-auto" />
                                  </Link>
                                  <div className="hidden md:flex items-center gap-6 text-sm text-[#7A7F94]">
                                              <a href="#how-it-works" className="hover:text-[#0F1629] transition-colors">How it works</a>
                                              <a href="#features" className="hover:text-[#0F1629] transition-colors">Features</a>
                                              <a href="#pricing" className="hover:text-[#0F1629] transition-colors">Pricing</a>
                                              <a href="#faq" className="hover:text-[#0F1629] transition-colors">FAQ</a>
                                  </div>
                                  <div className="flex items-center gap-3">
                                              <Link href="/auth/login" className="text-sm text-[#3D4255] hover:text-[#0F1629] transition-colors font-medium">Sign in</Link>
                                              <Link href="/auth/signup" className="text-sm font-semibold px-4 py-2 rounded-lg text-white transition-all hover:-translate-y-0.5 hover:shadow-md" style={{ background: "#636DF5" }}>Start free</Link>
                                  </div>
                        </div>
                </nav>
        
          {/* ── HERO ── */}
              <section className="max-w-5xl mx-auto px-6 pt-20 pb-16 text-center relative">
                      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none opacity-[0.03]">
                                <Image src="/STAR.png" alt="" width={400} height={400} className="animate-slow-spin" />
                      </div>
                      <div className="relative">
                                <div className="inline-flex items-center gap-2 text-xs font-semibold px-3 py-1.5 rounded-full mb-6 border border-[#E2E1DC] bg-white text-[#636DF5]">
                                            <span className="w-1.5 h-1.5 rounded-full bg-[#636DF5] animate-pulse-dot" />
                                            Built for the European job market
                                </div>
                                <h1 className="text-5xl sm:text-6xl font-extrabold leading-tight tracking-tight mb-6" style={{ fontFamily: "'Outfit', sans-serif" }}>
                                            Land your EU role{" "}
                                            <span style={{ background: "linear-gradient(135deg, #636DF5, #7C3AED)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>faster</span>
                                  {" "}with AI
                                </h1>
                                <p className="text-xl text-[#7A7F94] max-w-2xl mx-auto mb-10">Track every application, adapt your CV to local standards, and generate cover letters for 12 European markets — all in one place.</p>
                                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                            <Link href="/auth/signup" className="font-semibold px-8 py-3.5 rounded-xl text-white transition-all hover:-translate-y-0.5 hover:shadow-lg w-full sm:w-auto text-center" style={{ background: "#0F1629" }}>Start free →</Link>
                                            <a href="#how-it-works" className="text-[#636DF5] font-medium hover:underline">See how it works</a>
                                </div>
                                <p className="mt-4 text-sm text-[#B0B4C5]">No credit card required</p>
                      </div>
              </section>
        
          {/* ── COUNTRY BAR ── */}
              <section className="border-y border-[#E2E1DC] bg-white py-8">
                      <div className="max-w-5xl mx-auto px-6">
                                <p className="text-xs font-semibold text-[#B0B4C5] uppercase tracking-widest text-center mb-5">Trusted by job seekers targeting 12 EU countries</p>
                                <div className="flex flex-wrap justify-center gap-2">
                                  {COUNTRIES.map((c) => (
                        <span key={c.code} className="inline-flex items-center gap-1.5 bg-[#F8F8F6] border border-[#E2E1DC] rounded-full px-3 py-1.5 text-sm text-[#3D4255] font-medium hover:border-[#636DF5] hover:bg-[#EEEFFE] transition-colors cursor-default">
                                        <span>{c.flag}</span> {c.name}
                        </span>
                      ))}
                                </div>
                      </div>
              </section>
        
          {/* ── HOW IT WORKS ── */}
              <section id="how-it-works" className="py-20 max-w-5xl mx-auto px-6">
                      <div ref={addReveal} className="reveal text-center mb-14">
                                <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#636DF5] uppercase tracking-widest mb-3">
                                            <Image src="/STAR.png" alt="" width={14} height={14} className="opacity-60" /> How it works
                                </div>
                                <h2 className="text-3xl sm:text-4xl font-bold" style={{ fontFamily: "'Outfit', sans-serif" }}>Three steps to your next EU role</h2>
                                <p className="text-[#7A7F94] mt-3">From signup to sent application in under 5 minutes.</p>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                        {HOW_IT_WORKS.map((item, i) => (
                      <div key={item.step} ref={addReveal} className="reveal flex flex-col items-start" style={{ transitionDelay: `${i * 0.1}s` }}>
                                    <div className="w-12 h-12 rounded-xl flex items-center justify-center text-xl mb-4 border border-[#E2E1DC] bg-white shadow-sm">{item.icon}</div>
                                    <span className="text-xs font-bold text-[#B0B4C5] mb-2">{item.step}</span>
                                    <h3 className="font-bold text-[#0F1629] text-lg mb-2" style={{ fontFamily: "'Outfit', sans-serif" }}>{item.title}</h3>
                                    <p className="text-sm text-[#7A7F94] leading-relaxed">{item.desc}</p>
                      </div>
                    ))}
                      </div>
              </section>
        
          {/* ── FEATURES ── */}
              <section id="features" className="bg-white border-y border-[#E2E1DC] py-20">
                      <div className="max-w-5xl mx-auto px-6">
                                <div ref={addReveal} className="reveal text-center mb-12">
                                            <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#636DF5] uppercase tracking-widest mb-3">
                                                          <Image src="/STAR.png" alt="" width={14} height={14} className="opacity-60" /> Features
                                            </div>
                                            <h2 className="text-3xl sm:text-4xl font-bold" style={{ fontFamily: "'Outfit', sans-serif" }}>Everything you need to win in Europe</h2>
                                            <p className="text-[#7A7F94] mt-3">One platform from first application to signed offer.</p>
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                  {FEATURES.map((f, i) => (
                        <div key={f.title} ref={addReveal} className="reveal rounded-2xl border border-[#E2E1DC] bg-[#F8F8F6] p-6 hover:border-[#636DF5] hover:shadow-md transition-all hover:-translate-y-0.5" style={{ transitionDelay: `${i * 0.08}s` }}>
                                        <div className="flex items-start justify-between mb-3">
                                                          <span className="text-3xl">{f.emoji}</span>
                                                          <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${f.tag === "AI" ? "bg-[#EEEFFE] text-[#636DF5]" : "bg-[#F3F2EE] text-[#7A7F94]"}`}>{f.tag === "AI" ? "✨ AI" : f.tag}</span>
                                        </div>
                                        <h3 className="font-semibold text-[#0F1629] mb-2" style={{ fontFamily: "'Outfit', sans-serif" }}>{f.title}</h3>
                                        <p className="text-sm text-[#7A7F94] leading-relaxed">{f.desc}</p>
                        </div>
                      ))}
                                </div>
                      </div>
              </section>
        
          {/* ── PRICING ── */}
              <section id="pricing" className="py-20 max-w-5xl mx-auto px-6">
                      <div ref={addReveal} className="reveal text-center mb-12">
                                <h2 className="text-3xl sm:text-4xl font-bold" style={{ fontFamily: "'Outfit', sans-serif" }}>Simple, transparent pricing</h2>
                                <p className="text-[#7A7F94] mt-3">Start free. Upgrade when you need more AI power.</p>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
                                <div ref={addReveal} className="reveal rounded-2xl border border-[#E2E1DC] bg-white p-8 space-y-4">
                                            <p className="text-xs font-bold text-[#B0B4C5] uppercase tracking-widest">Free</p>
                                            <p className="text-4xl font-extrabold" style={{ fontFamily: "'Outfit', sans-serif" }}>€0</p>
                                            <ul className="space-y-2 text-sm text-[#3D4255]">
                                              {["Application tracker (unlimited)", "Kanban board", "3 AI generations / month", "12 EU countries"].map((item) => (
                          <li key={item} className="flex items-center gap-2"><span className="text-[#16A34A] font-bold">✓</span>{item}</li>
                        ))}
                                            </ul>
                                            <Link href="/auth/signup" className="block text-center border border-[#E2E1DC] hover:border-[#636DF5] hover:bg-[#EEEFFE] text-[#3D4255] font-medium py-2.5 rounded-xl transition-colors text-sm">Get started free</Link>
                                </div>
                                <div ref={addReveal} className="reveal rounded-2xl border-2 bg-white p-8 space-y-4 relative" style={{ borderColor: "#636DF5" }}>
                                            <div className="absolute -top-3 left-1/2 -translate-x-1/2 text-white text-xs font-semibold px-3 py-1 rounded-full" style={{ background: "#636DF5" }}>Most popular</div>
                                            <p className="text-xs font-bold uppercase tracking-widest" style={{ color: "#636DF5" }}>Pro</p>
                                            <p className="text-4xl font-extrabold" style={{ fontFamily: "'Outfit', sans-serif" }}>€9 <span className="text-base text-[#B0B4C5] font-normal">/ month</span></p>
                                            <ul className="space-y-2 text-sm text-[#3D4255]">
                                              {["Everything in Free", "Unlimited AI generations", "CV adapter for all 12 countries", "Cover letter with feedback loop", "Follow-up emails", "Priority AI processing"].map((item) => (
                          <li key={item} className="flex items-center gap-2"><span className="font-bold" style={{ color: "#636DF5" }}>✓</span>{item}</li>
                        ))}
                                            </ul>
                                            <Link href="/auth/signup" className="block text-center text-white font-semibold py-2.5 rounded-xl transition-all hover:-translate-y-0.5 hover:shadow-md text-sm" style={{ background: "#636DF5" }}>Start with Pro</Link>
                                </div>
                      </div>
              </section>
        
          {/* ── BLOG ── */}
              <section className="bg-white border-y border-[#E2E1DC] py-20">
                      <div className="max-w-5xl mx-auto px-6">
                                <div ref={addReveal} className="reveal flex items-center justify-between mb-10">
                                            <div>
                                                          <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#636DF5] uppercase tracking-widest mb-2">
                                                                          <Image src="/STAR.png" alt="" width={14} height={14} className="opacity-60" /> Guides
                                                          </div>
                                                          <h2 className="text-2xl sm:text-3xl font-bold" style={{ fontFamily: "'Outfit', sans-serif" }}>EU job search guides</h2>
                                            </div>
                                            <Link href="/blog" className="text-sm font-medium text-[#636DF5] hover:underline hidden sm:block">View all →</Link>
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                                  {BLOG_POSTS.map((post, i) => (
                        <Link key={post.title} href={post.href} ref={addReveal} className="reveal group rounded-2xl border border-[#E2E1DC] bg-[#F8F8F6] p-6 hover:border-[#636DF5] hover:shadow-md transition-all hover:-translate-y-0.5 flex flex-col gap-3" style={{ transitionDelay: `${i * 0.08}s` }}>
                                        <div className="text-2xl">{post.flag}</div>
                                        <span className="text-xs font-semibold text-[#636DF5] uppercase">{post.tag}</span>
                                        <h3 className="font-bold text-[#0F1629] leading-snug text-sm" style={{ fontFamily: "'Outfit', sans-serif" }}>{post.title}</h3>
                                        <p className="text-xs text-[#7A7F94] flex-1">{post.desc}</p>
                                        <span className="text-sm font-medium text-[#636DF5] group-hover:underline">Read guide →</span>
                        </Link>
                      ))}
                                </div>
                      </div>
              </section>
        
          {/* ── FAQ ── */}
              <section id="faq" className="py-20">
                      <div className="max-w-2xl mx-auto px-6">
                                <div ref={addReveal} className="reveal text-center mb-12">
                                            <h2 className="text-3xl font-bold" style={{ fontFamily: "'Outfit', sans-serif" }}>Frequently asked questions</h2>
                                </div>
                                <div className="space-y-3">
                                  {FAQS.map((faq, i) => (
                        <details key={faq.q} ref={addReveal} className="reveal group rounded-xl border border-[#E2E1DC] bg-white px-6 py-4 cursor-pointer" style={{ transitionDelay: `${i * 0.05}s` }}>
                                        <summary className="font-medium text-[#0F1629] list-none flex items-center justify-between gap-4 text-sm">
                                          {faq.q}
                                                          <span className="text-[#B0B4C5] group-open:rotate-180 transition-transform shrink-0 text-xs">▼</span>
                                        </summary>
                                        <p className="mt-3 text-sm text-[#7A7F94] leading-relaxed">{faq.a}</p>
                        </details>
                      ))}
                                </div>
                      </div>
              </section>
        
          {/* ── CTA ── */}
              <section className="py-20 mx-4 sm:mx-8 mb-8 rounded-3xl text-white text-center relative overflow-hidden" style={{ background: "#0F1629" }}>
                      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none opacity-[0.04]">
                                <Image src="/STAR.png" alt="" width={500} height={500} className="animate-slow-spin" style={{ filter: "invert(1)" }} />
                      </div>
                      <div className="relative max-w-xl mx-auto px-6">
                                <Image src="/STAR.png" alt="" width={36} height={36} className="mx-auto mb-5 opacity-60" style={{ filter: "invert(1)" }} />
                                <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ fontFamily: "'Outfit', sans-serif" }}>Ready to land your EU role?</h2>
                                <p className="text-[#7A7F94] mb-8">Join job seekers using AI to stand out across 12 European markets.</p>
                                <Link href="/auth/signup" className="inline-block bg-white text-[#0F1629] text-base font-semibold px-10 py-4 rounded-xl transition-all hover:-translate-y-0.5 hover:shadow-lg">Start free →</Link>
                                <p className="mt-4 text-sm text-[#7A7F94]">No credit card required</p>
                      </div>
              </section>
        
          {/* ── FOOTER ── */}
              <footer className="border-t border-[#E2E1DC] py-10">
                      <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                                <div className="flex items-center gap-2 text-sm text-[#7A7F94]">
                                            <Image src="/STAR.png" alt="" width={18} height={18} className="opacity-50" />
                                            <span>© {new Date().getFullYear()} EuroCareer AI</span>
                                </div>
                                <div className="flex items-center gap-6 text-sm text-[#B0B4C5]">
                                            <Link href="/privacy" className="hover:text-[#3D4255] transition-colors">Privacy</Link>
                                            <Link href="/terms" className="hover:text-[#3D4255] transition-colors">Terms</Link>
                                            <Link href="/auth/login" className="hover:text-[#3D4255] transition-colors">Sign in</Link>
                                            <Link href="/auth/signup" className="hover:text-[#3D4255] transition-colors">Sign up</Link>
                                </div>
                      </div>
              </footer>
        </div>
      );
}
