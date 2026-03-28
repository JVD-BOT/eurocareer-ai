import Link from "next/link";

const COUNTRIES = [
  { code: "DE", name: "Germany" },
  { code: "NL", name: "Netherlands" },
  { code: "FR", name: "France" },
  { code: "SE", name: "Sweden" },
  { code: "GB", name: "UK" },
  { code: "ES", name: "Spain" },
  { code: "IE", name: "Ireland" },
  { code: "DK", name: "Denmark" },
  { code: "BE", name: "Belgium" },
  { code: "AT", name: "Austria" },
  { code: "CH", name: "Switzerland" },
  { code: "IT", name: "Italy" },
];

const HOW_IT_WORKS = [
  { step: "01", title: "Create your profile", desc: "Add your CV once. EuroCareer AI stores it securely and uses it as the base for every adaptation and cover letter." },
  { step: "02", title: "Track your applications", desc: "Log every job across the Kanban board — Researching, Applied, Responded, Interview, Offer, Rejected." },
  { step: "03", title: "Generate with AI", desc: "Pick a country, click adapt. Get a country-specific CV and cover letter in seconds, ready to send." },
];

const FEATURES = [
  { emoji: "📋", title: "Application Tracker", desc: "Kanban board across 6 stages — Researching, Applied, Responded, Interview, Offer, Rejected. Drag to update, filter by country or status." },
  { emoji: "📄", title: "AI CV Adapter", desc: "One click and your CV is reformatted to the standards of Germany, Netherlands, France, Sweden, and 8 more countries." },
  { emoji: "💌", title: "Cover Letter Generator", desc: "Choose formal, warm, or casual tone. Get a personalised letter in seconds — regenerate with feedback until perfect." },
  { emoji: "🌍", title: "Country Intelligence", desc: "Built-in hiring norms for 12 EU countries: photo expectations, CV length, language conventions, and more." },
];

const BLOG_POSTS = [
  { tag: "CV Guide", title: "How to write a CV for Germany in 2026", desc: "German CVs follow strict conventions.", href: "/blog/german-cv-format" },
  { tag: "Job Search", title: "Finding jobs in the Netherlands as a foreigner", desc: "The Dutch job market is open to internationals.", href: "/blog/netherlands-job-search" },
  { tag: "CV Guide", title: "EU vs US resume: key differences", desc: "Here is what to change before you hit send.", href: "/blog/eu-vs-us-resume" },
];

const FAQS = [
  { q: "Which countries are supported?", a: "Germany, Netherlands, France, Sweden, Denmark, UK, Spain, Ireland, Belgium, Austria, Switzerland, and Italy." },
  { q: "How does the AI CV adapter work?", a: "Paste your existing CV, select the target country, and the AI rewrites it to match local hiring standards." },
  { q: "Do I need ChatGPT or any other AI subscription?", a: "No. The AI is built directly into EuroCareer AI. Everything runs within the app." },
  { q: "What is an AI credit?", a: "Each AI generation uses one credit. Free accounts get 3 per month. Pro accounts get unlimited." },
  { q: "Can I cancel my Pro subscription at any time?", a: "Yes. Cancel anytime from the billing page." },
  { q: "Is my data secure?", a: "All data is stored in a Supabase database with Row Level Security." },
];

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <nav className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-6 py-3.5 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <img src="/LOGO_PNG.png" alt="EuroCareer AI" className="h-8 w-auto" />
          </Link>
          <div className="flex items-center gap-4">
            <Link href="/auth/login" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Sign in</Link>
            <Link href="/auth/signup" className="text-sm bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors">Start free</Link>
          </div>
        </div>
      </nav>
      <section className="max-w-5xl mx-auto px-6 pt-20 pb-16 text-center">
        <div className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-700 text-xs font-semibold px-3 py-1.5 rounded-full mb-6">
          <span>🇪🇺</span> Built for the European job market
        </div>
        <h1 className="text-5xl sm:text-6xl font-extrabold text-gray-900 leading-tight tracking-tight mb-6">
          Land your EU role{" "}
          <span className="bg-gradient-to-r from-indigo-600 to-violet-500 bg-clip-text text-transparent">faster</span>
          {" "}with AI
        </h1>
        <p className="text-xl text-gray-500 max-w-2xl mx-auto mb-10">Track every application, adapt your CV to local standards, and generate cover letters.</p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/auth/signup" className="bg-indigo-600 hover:bg-indigo-700 text-white text-base font-semibold px-8 py-3.5 rounded-xl transition-colors w-full sm:w-auto text-center">Start free</Link>
          <Link href="#how-it-works" className="text-base text-gray-600 hover:text-gray-900 transition-colors">See how it works</Link>
        </div>
        <p className="mt-4 text-sm text-gray-400">No credit card required</p>
      </section>
      <section className="border-y bg-gray-50 py-8">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest text-center mb-6">Trusted by job seekers targeting</p>
          <div className="flex flex-wrap justify-center gap-3">
            {COUNTRIES.map((c) => (
              <span key={c.code} className="inline-flex items-center gap-2 bg-white border border-gray-200 rounded-full px-4 py-1.5 text-sm text-gray-700 font-medium shadow-sm">
                <span className="text-xs font-bold text-gray-400">{c.code}</span>
                {c.name}
              </span>
            ))}
          </div>
        </div>
      </section>
      <section id="how-it-works" className="py-20 max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-3">Three steps to your next EU role</h2>
        <p className="text-gray-500 text-center mb-14">From signup to sent application in under 5 minutes.</p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {HOW_IT_WORKS.map((item) => (
            <div key={item.step} className="flex flex-col items-start">
              <span className="text-4xl font-extrabold text-indigo-100 mb-3">{item.step}</span>
              <h3 className="font-bold text-gray-900 text-lg mb-2">{item.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
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
      <section className="py-20 max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-3">Simple, transparent pricing</h2>
        <p className="text-gray-500 text-center mb-12">Start free. Upgrade when you need more AI power.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
          <div className="rounded-2xl border p-8 space-y-4">
            <p className="text-sm font-semibold text-gray-500 uppercase">Free</p>
            <p className="text-4xl font-extrabold">€0</p>
            <ul className="space-y-2 text-sm text-gray-700">
              {["Application tracker (unlimited)", "Kanban board", "3 AI generations / month", "12 EU countries"].map((item) => (
                <li key={item} className="flex items-center gap-2"><span className="text-green-500 font-bold">✓</span>{item}</li>
              ))}
            </ul>
            <Link href="/auth/signup" className="block text-center border border-gray-200 hover:bg-indigo-50 text-gray-700 font-medium py-2.5 rounded-lg transition-colors text-sm">Get started free</Link>
          </div>
          <div className="rounded-2xl border-2 border-indigo-600 p-8 space-y-4 relative">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-indigo-600 text-white text-xs font-semibold px-3 py-1 rounded-full">Most popular</div>
            <p className="text-sm font-semibold text-indigo-600 uppercase">Pro</p>
            <p className="text-4xl font-extrabold">€9 <span className="text-base text-gray-400 font-normal">/ month</span></p>
            <ul className="space-y-2 text-sm text-gray-700">
              {["Everything in Free", "Unlimited AI generations", "CV adapter for all 12 countries", "Cover letter with feedback loop", "Follow-up emails", "Priority AI processing"].map((item) => (
                <li key={item} className="flex items-center gap-2"><span className="text-indigo-600 font-bold">✓</span>{item}</li>
              ))}
            </ul>
            <Link href="/auth/signup" className="block text-center bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2.5 rounded-lg transition-colors text-sm">Start with Pro</Link>
          </div>
        </div>
      </section>
      <section className="bg-gray-50 py-20">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-3">EU job search guides</h2>
          <p className="text-gray-500 text-center mb-12">Free resources to help you land roles across Europe.</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {BLOG_POSTS.map((post) => (
              <Link key={post.title} href={post.href} className="bg-white rounded-2xl border p-6 hover:shadow-md transition-shadow flex flex-col gap-3">
                <span className="text-xs font-semibold text-indigo-600 uppercase">{post.tag}</span>
                <h3 className="font-bold text-gray-900 leading-snug">{post.title}</h3>
                <p className="text-sm text-gray-500 flex-1">{post.desc}</p>
                <span className="text-sm text-indigo-600 font-medium">Read guide</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20">
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
      <section className="py-20 bg-gray-900 text-white text-center">
        <div className="max-w-xl mx-auto px-6">
          <img src="/ARROW.png" alt="" className="h-10 w-auto mx-auto mb-6 opacity-80 invert" />
          <h2 className="text-3xl font-bold mb-4">Ready to land your EU role?</h2>
          <p className="text-gray-400 mb-8">Join job seekers using AI to stand out across 12 European markets.</p>
          <Link href="/auth/signup" className="inline-block bg-white hover:bg-gray-100 text-gray-900 text-base font-semibold px-10 py-4 rounded-xl transition-colors">Start free</Link>
          <p className="mt-4 text-sm text-gray-500">No credit card required</p>
        </div>
      </section>
      <footer className="border-t bg-gray-50 py-10">
        <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <img src="/ARROW.png" alt="" className="h-5 w-auto" />
            <span>© {new Date().getFullYear()} EuroCareer AI</span>
          </div>
          <div className="flex items-center gap-6 text-sm text-gray-400">
            <Link href="/privacy" className="hover:text-gray-600 transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-gray-600 transition-colors">Terms</Link>
            <Link href="/auth/login" className="hover:text-gray-600 transition-colors">Sign in</Link>
            <Link href="/auth/signup" className="hover:text-gray-600 transition-colors">Sign up</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}