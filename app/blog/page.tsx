import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'European Career Guides',
  description: 'Practical guides on CVs, cover letters, job searching and work visas across European markets. Written for international professionals.',
  alternates: { canonical: 'https://eurocareerai.com/blog' },
  openGraph: {
    title: 'European Career Guides',
    description: 'CV formats, job search tips, cover letters and visa guides for Europe — written for international professionals.',
    url: 'https://eurocareerai.com/blog',
    type: 'website',
    images: [{ url: 'https://eurocareerai.com/LOGO_NEW.png' }],
  },
}

const cvGuides = [
  {
    href: '/blog/german-cv-format',
    flag: '🇩🇪',
    country: 'Germany',
    title: 'How to write a CV for Germany in 2026',
    excerpt: 'German CVs follow strict conventions around format, photo, and structure.',
    tag: 'CV Guide',
  },
  {
    href: '/blog/netherlands-cv-format',
    flag: '🇳🇱',
    country: 'Netherlands',
    title: 'How to write a CV for the Netherlands in 2026',
    excerpt: 'Clean, concise, and internationally friendly — here is what Dutch recruiters expect.',
    tag: 'CV Guide',
  },
  {
    href: '/blog/france-cv-format',
    flag: '🇫🇷',
    country: 'France',
    title: 'How to write a CV for France in 2026',
    excerpt: 'Photos, the lettre de motivation, and formal conventions — the French CV explained.',
    tag: 'CV Guide',
  },
  {
    href: '/blog/sweden-cv-format',
    flag: '🇸🇪',
    country: 'Sweden',
    title: 'How to write a CV for Sweden in 2026',
    excerpt: 'Lagom in practice — modest, factual, and well-structured is what Swedish recruiters want.',
    tag: 'CV Guide',
  },
  {
    href: '/blog/uk-cv-format',
    flag: '🇬🇧',
    country: 'United Kingdom',
    title: 'How to write a CV for the UK in 2026',
    excerpt: 'CV not resume — and several other things that matter in the British job market.',
    tag: 'CV Guide',
  },
  {
    href: '/blog/spain-cv-format',
    flag: '🇪🇸',
    country: 'Spain',
    title: 'How to write a CV for Spain in 2026',
    excerpt: 'Relationship-driven hiring and specific photo and format expectations in Spain.',
    tag: 'CV Guide',
  },
  {
    href: '/blog/belgium-cv-format',
    flag: '🇧🇪',
    country: 'Belgium',
    title: 'How to write a CV for Belgium in 2026',
    excerpt: 'Bilingual market, formal expectations, and what sets Belgian recruiters apart.',
    tag: 'CV Guide',
  },
  {
    href: '/blog/austria-cv-format',
    flag: '🇦🇹',
    country: 'Austria',
    title: 'How to write a CV for Austria in 2026',
    excerpt: 'Similar to Germany but with its own nuances — the Austrian CV format explained.',
    tag: 'CV Guide',
  },
  {
    href: '/blog/switzerland-cv-format',
    flag: '🇨🇭',
    country: 'Switzerland',
    title: 'How to write a CV for Switzerland in 2026',
    excerpt: 'High standards, multiple languages, and competitive salaries — the Swiss market explained.',
    tag: 'CV Guide',
  },
  {
    href: '/blog/italy-cv-format',
    flag: '🇮🇹',
    country: 'Italy',
    title: 'How to write a CV for Italy in 2026',
    excerpt: 'Relationship culture, formal conventions, and what Italian employers look for.',
    tag: 'CV Guide',
  },
  {
    href: '/blog/denmark-cv-format',
    flag: '🇩🇰',
    country: 'Denmark',
    title: 'How to write a CV for Denmark in 2026',
    excerpt: 'Flat hierarchies and egalitarian culture — how that shapes the Danish CV format.',
    tag: 'CV Guide',
  },
  {
    href: '/blog/ireland-cv-format',
    flag: '🇮🇪',
    country: 'Ireland',
    title: 'How to write a CV for Ireland in 2026',
    excerpt: "Dublin is Europe's most accessible English-speaking job market — here's how to stand out.",
    tag: 'CV Guide',
  },
]

const otherGuides = [
  {
    href: '/blog/netherlands-job-search',
    flag: '🇳🇱',
    country: 'Netherlands',
    title: 'Finding jobs in the Netherlands as a foreigner',
    excerpt: 'The Dutch job market is open to internationals — here is how to stand out.',
    tag: 'Job Search',
    tagColor: 'emerald',
  },
  {
    href: '/blog/eu-vs-us-resume',
    flag: '🌍',
    country: 'Europe vs US',
    title: 'EU vs US resume: key differences explained',
    excerpt: 'Here is exactly what to change before you hit send on an EU application.',
    tag: 'CV Guide',
    tagColor: 'indigo',
  },
  {
    href: '/blog/best-job-boards-europe',
    flag: '💼',
    country: 'Europe',
    title: 'Best job boards in Europe for English speakers',
    excerpt: 'The platforms European recruiters actually use — by country and pan-European.',
    tag: 'Job Search',
    tagColor: 'emerald',
  },
  {
    href: '/blog/cover-letter-europe',
    flag: '✉️',
    country: 'Europe',
    title: 'How to write a cover letter for European employers',
    excerpt: 'European cover letters differ by country — here is what works, and what does not.',
    tag: 'Cover Letters',
    tagColor: 'violet',
  },
  {
    href: '/blog/eu-work-visa-guide',
    flag: '🛂',
    country: 'Europe',
    title: 'EU work visa options for non-EU nationals in 2026',
    excerpt: 'Blue Card, country-specific permits, and practical advice for non-EU job seekers.',
    tag: 'Visa Guide',
    tagColor: 'amber',
  },
]

const tagStyles: Record<string, string> = {
  'CV Guide': 'bg-indigo-50 text-indigo-700 ring-1 ring-indigo-200',
  'Job Search': 'bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200',
  'Cover Letters': 'bg-violet-50 text-violet-700 ring-1 ring-violet-200',
  'Visa Guide': 'bg-amber-50 text-amber-700 ring-1 ring-amber-200',
}

function GuideCard({
  href,
  flag,
  title,
  excerpt,
  tag,
}: {
  href: string
  flag: string
  title: string
  excerpt: string
  tag: string
}) {
  return (
    <Link
      href={href}
      className="group flex flex-col bg-white rounded-2xl border border-slate-200 p-6 hover:border-indigo-300 hover:shadow-md transition-all duration-200"
    >
      <div className="flex items-start justify-between gap-3 mb-4">
        <span className="text-3xl leading-none">{flag}</span>
        <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${tagStyles[tag] ?? tagStyles['CV Guide']}`}>
          {tag}
        </span>
      </div>
      <h2 className="text-base font-semibold text-slate-900 leading-snug mb-2 group-hover:text-indigo-700 transition-colors">
        {title}
      </h2>
      <p className="text-sm text-slate-500 leading-relaxed flex-1">{excerpt}</p>
      <div className="mt-4 text-sm font-medium text-indigo-600 group-hover:text-indigo-800 flex items-center gap-1">
        Read guide
        <svg className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </Link>
  )
}

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      {/* Header */}
      <div className="bg-white border-b border-slate-100">
        <div className="max-w-5xl mx-auto px-6 py-16 sm:py-20">
          <div className="flex items-center gap-2 text-indigo-600 text-sm font-semibold tracking-wide uppercase mb-4">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
            Career Guides
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 tracking-tight mb-4">
            Land your European role
          </h1>
          <p className="text-lg text-slate-500 max-w-2xl leading-relaxed">
            Practical guides on CVs, cover letters, job searching and visas across European markets — written for international professionals.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-12 space-y-14">

        {/* CV Guides by Country */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <span className="text-2xl">🗺️</span>
            <div>
              <h2 className="text-xl font-bold text-slate-900">CV Guides by Country</h2>
              <p className="text-sm text-slate-500 mt-0.5">Every country has different expectations — here is what you need to know</p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {cvGuides.map((g) => (
              <GuideCard key={g.href} {...g} />
            ))}
          </div>
        </section>

        {/* Job Search, Visa & Cover Letters */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <span className="text-2xl">🧭</span>
            <div>
              <h2 className="text-xl font-bold text-slate-900">Job Search, Visas & Cover Letters</h2>
              <p className="text-sm text-slate-500 mt-0.5">Everything else you need to navigate the European job market</p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {otherGuides.map((g) => (
              <GuideCard key={g.href} {...g} />
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-indigo-600 rounded-2xl p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold text-white mb-1">Ready to adapt your CV?</h3>
            <p className="text-indigo-200 text-sm">EuroCareer AI rewrites your CV for any EU country in seconds.</p>
          </div>
          <Link
            href="/auth/signup"
            className="shrink-0 bg-white text-indigo-700 font-semibold text-sm px-6 py-3 rounded-xl hover:bg-indigo-50 transition-colors"
          >
            Try EuroCareer AI free →
          </Link>
        </section>

      </div>
    </main>
  )
}
