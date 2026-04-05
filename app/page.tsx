"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

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
  { step: "01", icon: "👤", title: "Create your profile", desc: "Upload your CV once and you're set. EuroCareer AI uses it as the foundation for every country-specific adaptation." },
  { step: "02", icon: "📋", title: "Track your applications", desc: "See every application at a glance — track where you stand, from first look to final offer." },
  { step: "03", icon: "✨", title: "Generate with AI", desc: "Pick a country, click adapt. In seconds your CV speaks the local language — formatted to the standards recruiters in that country actually expect." },
  ];

const FEATURES = [
  { emoji: "📋", title: "Application Tracker", desc: "See exactly where every application stands — at a glance. Filter by country or stage and never lose track of an opportunity.", tag: "Core" },
  { emoji: "📄", title: "AI CV Adapter", desc: "One click and your CV is restructured for the country you're targeting — format, length, and photo norms all handled.", tag: "AI" },
  { emoji: "💌", title: "Cover Letter Generator", desc: "Set your tone, get a personalised letter in seconds. Not happy? Regenerate with feedback until it's right.", tag: "AI" },
  { emoji: "🌍", title: "Country Intelligence", desc: "Know exactly what recruiters in each country expect — photo rules, CV length, language conventions, and more.", tag: "Core" },
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
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
        const observer = new IntersectionObserver(
                (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
          { threshold: 0.1 }
              );
        revealRefs.current.forEach((el) => el && observer.observe(el));
        return () => observer.disconnect();
  }, []);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  const addReveal = (el: HTMLElement | null) => {
        if (el && !revealRefs.current.includes(el)) revealRefs.current.push(el);
  };

  return (
        <div className="min-h-screen text-[#0F1629]" style={{ background: "#F8F8F6" }}>

          {/* ── NAV ── */}
                <Navbar />
        
          {/* ── HERO ── */}
      <section
        className="relative overflow-hidden text-center"
        style={{ minHeight: "max(100vh, 600px)", background: "#0f172a", display: "flex", flexDirection: "column", justifyContent: "center" }}
      >
        {/* Background video – hidden on mobile (<768px) via .hero-video CSS */}
        {!isMobile && (
        <video
          src="/hero-loop.mp4"
          autoPlay
          muted
          loop
          playsInline
                    preload="none"
          className="hero-video"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: 0,
          }}
        />
      )}

        {/* Dark overlay – rgba(15, 23, 42, 0.72) */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(15, 23, 42, 0.72)",
            zIndex: 1,
          }}
        />

        {/* Hero content – sits above video + overlay */}
        <div
          className="relative max-w-5xl mx-auto px-6 pt-20 pb-16"h
          style={{ zIndex: 2 }}
        >
          <div className="inline-flex items-center gap-2 text-xs font-semibold px-3 py-1.5 rounded-full mb-6 border border-white/20 bg-white/10 text-white">
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-phulse-dot" />
            Built for the European job market
          </div>
          <h1
            className="text-5xl sm:text-6xl font-extrabold leading-tight tracking-tight mb-6"
            style={{ fontFamily: "'Outfit', sans-serif", color: "#FAFAFA" }}
          >
            Land your EU role{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #818cf8, #a78bfa)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              faster
            </span>
            {" "}with AI
          </h1>
          <p
            className="text-xl max-w-2xl mx-auto mb-10"
            style={{ color: "#cbd5e1" }}
          >
            Every EU country has different CV rules, photo norms, and cover letter styles. EuroCareer AI adapts your application to match — 12 markets, in seconds.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/auth/signup"
              className="font-semibold px-8 py-3.5 rounded-xl transition-all hover:-translate-y-0.5 hover:shadow-lg w-full sm:w-auto text-center"
              style={{ background: "#FAFAFA", color: "#0F1629" }}
            >
              Start free →
            </Link>
            <a
              href="#how-it-works"
              className="font-medium hover:underline"
              style={{ color: "#818cf8" }}
            >
              See how it works
            </a>
          </div>
          <p className="mt-4 text-sm" style={{ color: "#94a3b8" }}>No credit card required</p>
        </div>
      </section>
        
          {/* ── COUNTRY BAR ── */}
              <section className="border-y border-[#E2E1DC] bg-white py-8">
                      <div className="max-w-5xl mx-auto px-6">
                                <p className="text-xs font-semibold text-[#B0B4C5] uppercase tracking-widest text-center mb-5">Supporting job seekers applying to:</p>
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
                                <h2 className="text-3xl sm:text-4xl font-bold" style={{ fontFamily: "'Outfit', sans-serif" }}>From signup to sent application in under 5 minutes</h2>
                                <p className="text-[#7A7F94] mt-3">Three steps, zero guesswork.</p>
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
                                            <h2 className="text-3xl sm:text-4xl font-bold" style={{ fontFamily: "'Outfit', sans-serif" }}>From first application to signed offer</h2>
                                            <p className="text-[#7A7F94] mt-3">One platform built for the European job market.</p>
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
                                <p className="text-[#7A7F94] mt-3">Start free. Upgrade when your job search gets serious.</p>
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
                                            <Link href="/auth/signup" className="block text-center border border-[#E2E1DC] hover:border-[#636DF5] hover:bg-[#EEEFFE] text-[#3D4255] font-medium py-2.5 rounded-xl transition-colors text-sm">Start free</Link>
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
                                            <Link href="/auth/signup?plan=pro" className="block text-center text-white font-semibold py-2.5 rounded-xl transition-all hover:-translate-y-0.5 hover:shadow-md text-sm" style={{ background: "#636DF5" }}>Upgrade to Pro — €9/month</Link>
                                <p className="text-xs text-slate-500 mt-1 text-center">Cancel anytime · No lock-in</p>
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
                                <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ fontFamily: "'Outfit', sans-serif" }}>Your next EU role is closer than you think.</h2>
                                <p className="text-[#7A7F94] mb-8">Stop guessing what European recruiters want. Start free today — no credit card needed.</p>
                                <Link href="/auth/signup" className="inline-block bg-white text-[#0F1629] text-base font-semibold px-10 py-4 rounded-xl transition-all hover:-translate-y-0.5 hover:shadow-lg">Start free →</Link>
                                <p className="mt-4 text-sm text-[#7A7F94]">No credit card required</p>
                      </div>
              </section>
        
          {/* ── FOOTER ── */}
              <Footer />
        </div>
      );
}
