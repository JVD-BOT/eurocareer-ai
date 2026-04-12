"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { supabase } from "@/lib/supabase";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const COUNTRIES = [
  "🇩🇪 Germany", "🇳🇱 Netherlands", "🇫🇷 France", "🇸🇪 Sweden",
  "🇩🇰 Denmark", "🇬🇧 United Kingdom", "🇪🇸 Spain", "🇮🇪 Ireland",
  "🇧🇪 Belgium", "🇦🇹 Austria", "🇨🇭 Switzerland", "🇮🇹 Italy",
];

const FEATURES = [
  {
    emoji: "📄",
    title: "AI CV Adapter",
    description: "Paste your CV and pick a country. Our AI restructures it to match local norms — photo rules, section order, tone, and formatting.",
  },
  {
    emoji: "💌",
    title: "Cover Letter Generator",
    description: "Generate a tailored cover letter in seconds. Choose formal, warm, or casual tone — tuned to each country's business culture.",
  },
  {
    emoji: "📋",
    title: "Application Tracker",
    description: "Kanban board and list view to manage every application. Drag cards between stages — researching, applied, interview, offer.",
  },
  {
    emoji: "🌍",
    title: "Country Intelligence",
    description: "Hiring norms, visa guidance, and market insights for 12 European countries. Know what employers expect before you apply.",
  },
];

const STEPS = [
  { num: "1", title: "Add your application", description: "Enter the company, role, and target country. Paste the job description for best results." },
  { num: "2", title: "AI adapts your CV", description: "Our AI restructures your CV to match local formatting — photo, layout, tone, and section order." },
  { num: "3", title: "Generate & track", description: "Create a cover letter, send your application, and track your progress on the Kanban board." },
];

const FAQS = [
  {
    q: "Which countries are supported?",
    a: "Germany, Netherlands, France, Sweden, Denmark, United Kingdom, Spain, Ireland, Belgium, Austria, Switzerland, and Italy — 12 markets and growing.",
  },
  {
    q: "How does the AI CV adapter work?",
    a: "You paste your existing CV and select a target country. The AI restructures it to follow that country's formatting conventions — including photo requirements, section ordering, tone, and length.",
  },
  {
    q: "Can I cancel Pro anytime?",
    a: "Yes. Pro is a monthly subscription at €9/month. You can cancel anytime from the billing page — no lock-in, no questions asked.",
  },
  {
    q: "Is my data secure?",
    a: "Your data is stored in Supabase with row-level security. We never share your CV or application data with third parties. AI processing uses Anthropic's Claude API with no data retention.",
  },
  {
    q: "Do I need a credit card to start?",
    a: "No. The free plan gives you 3 AI generations per month with full access to the application tracker. No credit card required.",
  },
];

export default function HomePage() {
  const router = useRouter();

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session) router.replace("/dashboard");
    });
  }, [router]);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      {/* ── HERO ── */}
      <section className="relative overflow-hidden pt-24 pb-20 md:pt-32 md:pb-28" style={{ background: "#0F172A" }}>
        <div className="absolute inset-0 pointer-events-none select-none opacity-[0.03]">
          <Image src="/STAR.png" alt="" fill className="object-contain animate-slow-spin" style={{ filter: "invert(1)" }} />
        </div>

        {/* Hero video — hidden on mobile via globals.css */}
        <video
          autoPlay muted loop playsInline
          className="hero-video absolute inset-0 w-full h-full object-cover opacity-[0.08]"
        >
          <source src="/hero-loop.mp4" type="video/mp4" />
        </video>

        <div className="relative max-w-5xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 text-xs font-semibold px-3 py-1.5 rounded-full border border-white/10 text-white/60 mb-8">
            <Image src="/STAR.png" alt="" width={14} height={14} style={{ filter: "invert(1)" }} className="opacity-60" />
            AI-powered for 12 European markets
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6" style={{ fontFamily: "var(--font-outfit), 'Outfit', sans-serif" }}>
            Your EU job search,<br />
            <span style={{ background: "linear-gradient(135deg, #6366F1, #7C3AED)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              powered by AI
            </span>
          </h1>

          <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-10 leading-relaxed">
            Adapt your CV for any European country in seconds. AI cover letters,
            application tracking, and country intelligence — free to start.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Link
              href="/auth/signup"
              className="inline-flex items-center gap-2 bg-[#6366F1] hover:bg-[#4F46E5] text-white font-semibold px-8 py-3.5 rounded-xl text-base transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-indigo-500/25"
            >
              <Image src="/STAR.png" alt="" width={16} height={16} style={{ filter: "invert(1)" }} className="opacity-70" />
              Start free
            </Link>
            <Link
              href="#how-it-works"
              className="text-white/60 hover:text-white text-sm font-medium transition-colors"
            >
              See how it works &darr;
            </Link>
          </div>

          {/* Country pills */}
          <div className="flex flex-wrap justify-center gap-2">
            {COUNTRIES.map((c) => (
              <span key={c} className="text-xs font-medium px-3 py-1.5 rounded-full border border-white/10 text-white/50">
                {c}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section id="how-it-works" className="py-20 md:py-28 px-4" style={{ background: "#F8F8F6" }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#6366F1" }}>How it works</p>
            <h2 className="text-3xl md:text-4xl font-bold" style={{ fontFamily: "var(--font-outfit), 'Outfit', sans-serif", color: "#0F172A" }}>
              Three steps to your next EU role
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {STEPS.map((step) => (
              <div key={step.num} className="text-center">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-5"
                  style={{ background: "#6366F1" }}
                >
                  {step.num}
                </div>
                <h3 className="font-bold text-lg mb-2" style={{ fontFamily: "var(--font-outfit), 'Outfit', sans-serif", color: "#0F172A" }}>
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "#7A7F94" }}>
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section id="features" className="py-20 md:py-28 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#6366F1" }}>Features</p>
            <h2 className="text-3xl md:text-4xl font-bold" style={{ fontFamily: "var(--font-outfit), 'Outfit', sans-serif", color: "#0F172A" }}>
              Everything you need to land a job in Europe
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {FEATURES.map((f) => (
              <div
                key={f.title}
                className="rounded-2xl border border-[#E2E1DC] p-6 hover:border-[#6366F1] hover:shadow-sm transition-all"
              >
                <span className="text-3xl mb-4 block">{f.emoji}</span>
                <h3 className="font-bold text-lg mb-2" style={{ fontFamily: "var(--font-outfit), 'Outfit', sans-serif", color: "#0F172A" }}>
                  {f.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "#7A7F94" }}>
                  {f.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRICING ── */}
      <section id="pricing" className="py-20 md:py-28 px-4" style={{ background: "#F8F8F6" }}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#6366F1" }}>Pricing</p>
            <h2 className="text-3xl md:text-4xl font-bold" style={{ fontFamily: "var(--font-outfit), 'Outfit', sans-serif", color: "#0F172A" }}>
              Start free, upgrade when you need more
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {/* Free */}
            <div className="bg-white rounded-2xl border border-[#E2E1DC] p-8">
              <p className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: "#7A7F94" }}>Free</p>
              <p className="text-4xl font-extrabold mb-1" style={{ fontFamily: "var(--font-outfit), 'Outfit', sans-serif", color: "#0F172A" }}>
                &euro;0
              </p>
              <p className="text-sm mb-6" style={{ color: "#7A7F94" }}>No credit card required</p>
              <ul className="space-y-3 mb-8">
                {["3 AI generations / month", "AI CV Adapter", "Cover letter generator", "Application tracker", "Country intelligence guides"].map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm" style={{ color: "#3D4255" }}>
                    <span style={{ color: "#6366F1" }} className="font-bold">&#10003;</span>
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                href="/auth/signup"
                className="block text-center font-semibold text-sm px-6 py-3 rounded-xl border border-[#E2E1DC] hover:border-[#6366F1] hover:bg-[#EEF2FF] transition-all"
                style={{ color: "#0F172A" }}
              >
                Start free
              </Link>
            </div>

            {/* Pro */}
            <div className="rounded-2xl p-8 relative overflow-hidden text-white" style={{ background: "linear-gradient(135deg, #6366F1, #7C3AED)" }}>
              <div className="absolute top-2 right-2 opacity-[0.07]">
                <Image src="/STAR.png" alt="" width={80} height={80} style={{ filter: "invert(1)" }} />
              </div>
              <p className="text-xs font-bold uppercase tracking-widest mb-1 text-white/60">Pro</p>
              <p className="text-4xl font-extrabold mb-1" style={{ fontFamily: "var(--font-outfit), 'Outfit', sans-serif" }}>
                &euro;9<span className="text-base font-normal text-white/50"> / month</span>
              </p>
              <p className="text-sm mb-6 text-white/60">Cancel anytime</p>
              <ul className="space-y-3 mb-8">
                {["Unlimited AI generations", "AI CV Adapter", "Cover letter generator", "Follow-up email generator", "Application tracker", "Priority AI processing"].map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-white/90">
                    <span className="font-bold text-white">&#10003;</span>
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                href="/auth/signup"
                className="block text-center font-semibold text-sm px-6 py-3 rounded-xl bg-white hover:bg-white/90 transition-all"
                style={{ color: "#6366F1" }}
              >
                Start free, upgrade later
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section id="faq" className="py-20 md:py-28 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#6366F1" }}>FAQ</p>
            <h2 className="text-3xl md:text-4xl font-bold" style={{ fontFamily: "var(--font-outfit), 'Outfit', sans-serif", color: "#0F172A" }}>
              Frequently asked questions
            </h2>
          </div>

          <div className="space-y-6">
            {FAQS.map((faq) => (
              <div key={faq.q} className="rounded-xl border border-[#E2E1DC] p-6">
                <h3 className="font-bold mb-2" style={{ color: "#0F172A" }}>{faq.q}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "#7A7F94" }}>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="py-20 md:py-28 px-4 relative overflow-hidden" style={{ background: "#0F172A" }}>
        <div className="absolute inset-0 pointer-events-none select-none opacity-[0.03]">
          <Image src="/STAR.png" alt="" fill className="object-contain" style={{ filter: "invert(1)" }} />
        </div>
        <div className="relative max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-outfit), 'Outfit', sans-serif" }}>
            Ready to land your next role in Europe?
          </h2>
          <p className="text-white/50 mb-8 text-lg">
            Join EuroCareer AI — free to start, no credit card needed.
          </p>
          <Link
            href="/auth/signup"
            className="inline-flex items-center gap-2 bg-[#6366F1] hover:bg-[#4F46E5] text-white font-semibold px-8 py-3.5 rounded-xl text-base transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-indigo-500/25"
          >
            <Image src="/STAR.png" alt="" width={16} height={16} style={{ filter: "invert(1)" }} className="opacity-70" />
            Start free
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
