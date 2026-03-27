import Link from "next/link";

const FEATURES = [
  {
    emoji: "📋",
    title: "Application Tracker",
    desc: "Kanban board across 6 stages — Researching, Applied, Responded, Interview, Offer, Rejected. Drag to update, filter by country or status.",
  },
  {
    emoji: "📄",
    title: "AI CV Adapter",
    desc: "One click and your CV is reformatted to the standards of Germany, Netherlands, France, Sweden, and 8 more countries.",
  },
  {
    emoji: "💌",
    title: "Cover Letter Generator",
    desc: "Choose formal, warm, or casual tone. Get a personalised letter in seconds — regenerate with feedback until it's perfect.",
  },
  {
    emoji: "🌍",
    title: "Country Intelligence",
    desc: "Built-in hiring norms for 12 EU countries: photo expectations, CV length, language conventions, and more.",
  },
];

const FAQS = [
  {
    q: "Which countries are supported?",
    a: "Germany, Netherlands, France, Sweden, Denmark, UK, Spain, Ireland, Belgium, Austria, Switzerland, and Italy — with country-specific CV and cover letter guidelines built in.",
  },
  {
    q: "How does the AI CV adapter work?",
    a: "Paste your existing CV, select the target country, and the AI rewrites it to match local hiring standards — format, length, tone, and section order.",
  },
  {
    q: "What is an AI credit?",
    a: "Each AI generation (CV adaptation, cover letter, or follow-up email) uses one credit. Free accounts get 3 per month. Pro accounts get unlimited.",
  },
  {
    q: "Can I cancel my Pro subscription at any time?",
    a: "Yes. Cancel anytime from the billing page — you keep Pro access until the end of your billing period.",
  },
  {
    q: "Is my data secure?",
    a: "All data is stored in a Supabase (PostgreSQL) database with Row Level Security — only you can access your applications, CV, and generated content.",
  },
];

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Nav */}
      <nav className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-6 py-3.5 flex items-center justify-between">
          <span className="text-indigo-600 font-bold text-lg tracking-tight">★ EuroCareer AI</span>
          <div className="flex items-center gap-4">
            <Link href="/auth/login" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
              Sign in
            </Link>
            <Link
              href="/auth/signup"
              className="text-sm bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg font-medium transition-colors"
            >
              Start free
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="max-w-5xl mx-auto px-6 pt-20 pb-16 text-center">
        <div className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-700 text-xs font-semibold px-3 py-1.5 rounded-full mb-6">
          <span>🇪🇺</span> Built for the European job market
        </div>
        <h1 className="text-5xl sm:text-6xl font-extrabold text-gray-900 leading-tight tracking-tight mb-6">
          Land your EU role<br />
          <span className="text-indigo-600">faster with AI</span>
        </h1>
        <p className="text-xl text-gray-500 max-w-2xl mx-auto mb-10">
          Track every application, adapt your CV to local standards, and generate cover letters —
          all optimised for the European job market.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/auth/signup"
            className="bg-indigo-600 hover:bg-indigo-700 text-white text-base font-semibold px-8 py-3.5 rounded-xl transition-colors w-full sm:w-auto text-center"
          >
            Start free →
          </Link>
          <Link
            href="/auth/login"
            className="text-base text-gray-600 hover:text-gray-900 transition-colors"
          >
            Already have an account?
          </Link>
        </div>
        <p className="mt-4 text-sm text-gray-400">No credit card required · 3 free AI generations/month</p>
      </section>

      {/* Features */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-3">Everything you need to win in Europe</h2>
          <p className="text-gray-500 text-center mb-12">One platform from first application to signed offer.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {FEATURES.map((f) => (
              <div key={f.title} className="bg-white rounded-2xl border p-6 hover:shadow-md transition-shadow">
                <div className="text-3xl mb-3">{f.emoji}</div>
                <h3 className="font-semibold text-gray-900 mb-2">{f.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-3">Simple, transparent pricing</h2>
        <p className="text-gray-500 text-center mb-12">Start free. Upgrade when you need more AI power.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {/* Free */}
          <div className="rounded-2xl border p-8 space-y-4">
            <div>
              <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Free</p>
              <p className="text-4xl font-extrabold mt-1">€0</p>
              <p className="text-sm text-gray-400 mt-1">Forever free</p>
            </div>
            <ul className="space-y-2 text-sm text-gray-700">
              {["Application tracker (unlimited)", "Kanban board + list view", "3 AI generations / month", "12 EU countries supported"].map((f) => (
                <li key={f} className="flex items-center gap-2">
                  <span className="text-green-500 font-bold">✓</span>{f}
                </li>
              ))}
            </ul>
            <Link
              href="/auth/signup"
              className="block text-center border border-gray-200 hover:border-indigo-300 hover:bg-indigo-50 text-gray-700 hover:text-indigo-700 font-medium py-2.5 rounded-lg transition-colors text-sm"
            >
              Get started free
            </Link>
          </div>

          {/* Pro */}
          <div className="rounded-2xl border-2 border-indigo-600 p-8 space-y-4 relative">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-indigo-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
              Most popular
            </div>
            <div>
              <p className="text-sm font-semibold text-indigo-600 uppercase tracking-wide">Pro</p>
              <div className="flex items-end gap-1 mt-1">
                <p className="text-4xl font-extrabold">€9</p>
                <p className="text-gray-400 mb-1">/ month</p>
              </div>
              <p className="text-sm text-gray-400 mt-1">Cancel anytime</p>
            </div>
            <ul className="space-y-2 text-sm text-gray-700">
              {[
                "Everything in Free",
                "Unlimited AI generations",
                "CV adapter for all 12 countries",
                "Cover letter with feedback loop",
                "Follow-up & rejection emails",
                "Priority AI processing",
                "Early access to new features",
              ].map((f) => (
                <li key={f} className="flex items-center gap-2">
                  <span className="text-indigo-600 font-bold">✓</span>{f}
                </li>
              ))}
            </ul>
            <Link
              href="/auth/signup"
              className="block text-center bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2.5 rounded-lg transition-colors text-sm"
            >
              Start with Pro →
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently asked questions</h2>
          <div className="space-y-4">
            {FAQS.map((faq) => (
              <details key={faq.q} className="group bg-white rounded-xl border px-6 py-4 cursor-pointer">
                <summary className="font-medium text-gray-900 list-none flex items-center justify-between gap-4">
                  {faq.q}
                  <span className="text-gray-400 group-open:rotate-180 transition-transform shrink-0">▼</span>
                </summary>
                <p className="mt-3 text-sm text-gray-500 leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 text-center">
        <div className="max-w-xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-4">Ready to land your EU role?</h2>
          <p className="text-gray-500 mb-8">Join job seekers using AI to stand out across Europe.</p>
          <Link
            href="/auth/signup"
            className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white text-base font-semibold px-10 py-4 rounded-xl transition-colors"
          >
            Start free →
          </Link>
          <p className="mt-4 text-sm text-gray-400">No credit card required</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-gray-50 py-10">
        <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-indigo-600 font-bold">★ EuroCareer AI</span>
          <div className="flex items-center gap-6 text-sm text-gray-400">
            <Link href="/privacy" className="hover:text-gray-600 transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-gray-600 transition-colors">Terms</Link>
            <Link href="/auth/login" className="hover:text-gray-600 transition-colors">Sign in</Link>
            <Link href="/auth/signup" className="hover:text-gray-600 transition-colors">Sign up</Link>
          </div>
          <p className="text-sm text-gray-400">© {new Date().getFullYear()} EuroCareer AI</p>
        </div>
      </footer>
    </div>
  );
}
