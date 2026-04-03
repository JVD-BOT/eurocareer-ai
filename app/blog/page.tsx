import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'EU Job Search Guides — CV Tips, Visa Info & More | EuroCareer AI',
  description: 'Practical guides for international professionals applying for jobs in Europe. CV formats by country, cover letter tips, job boards, and visa information.',
  openGraph: {
    title: 'EU Job Search Guides | EuroCareer AI',
    description: 'Practical guides for international professionals applying for jobs in Europe.',
    url: 'https://eurocareerai.com/blog',
    type: 'website',
    images: [{ url: 'https://eurocareerai.com/LOGO_NEW.png' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EU Job Search Guides | EuroCareer AI',
    description: 'Practical guides for international professionals applying for jobs in Europe.',
  },
  alternates: { canonical: 'https://eurocareerai.com/blog' },
}

const cvGuides = [
  { flag: '🇩🇪', tag: 'CV Guide', title: 'How to write a CV for Germany in 2026', description: 'German CVs follow strict conventions around format, photo, and structure.', href: '/blog/german-cv-format' },
  { flag: '🇳🇱', tag: 'CV Guide', title: 'How to write a CV for the Netherlands in 2026', description: 'Clean, concise, and internationally friendly — here is what Dutch recruiters expect.', href: '/blog/netherlands-cv-format' },
  { flag: '🇫🇷', tag: 'CV Guide', title: 'How to write a CV for France in 2026', description: 'Photos, the lettre de motivation, and formal conventions — the French CV explained.', href: '/blog/france-cv-format' },
  { flag: '🇸🇪', tag: 'CV Guide', title: 'How to write a CV for Sweden in 2026', description: 'Lagom in practice — modest, factual, and well-structured is what Swedish recruiters want.', href: '/blog/sweden-cv-format' },
  { flag: '🇬🇧', tag: 'CV Guide', title: 'How to write a CV for the UK in 2026', description: 'CV not resume — and several other things that matter in the British job market.', href: '/blog/uk-cv-format' },
  { flag: '🇪🇸', tag: 'CV Guide', title: 'How to write a CV for Spain in 2026', description: 'Relationship-driven hiring and specific photo and format expectations in Spain.', href: '/blog/spain-cv-format' },
  { flag: '🇮🇪', tag: 'CV Guide', title: 'How to write a CV for Ireland in 2026', description: 'Dublin hosts Europe\'s biggest tech hub — here is how to get in.', href: '/blog/ireland-cv-format' },
  { flag: '🇩🇰', tag: 'CV Guide', title: 'How to write a CV for Denmark in 2026', description: 'Flat hierarchies, minimal design, and what Copenhagen recruiters actually read.', href: '/blog/denmark-cv-format' },
  { flag: '🇧🇪', tag: 'CV Guide', title: 'How to write a CV for Belgium in 2026', description: 'Three languages, one country — navigating French and Dutch hiring conventions.', href: '/blog/belgium-cv-format' },
  { flag: '🇦🇹', tag: 'CV Guide', title: 'How to write a CV for Austria in 2026', description: 'Similar to Germany but warmer — what Viennese recruiters expect from applicants.', href: '/blog/austria-cv-format' },
  { flag: '🇨🇭', tag: 'CV Guide', title: 'How to write a CV for Switzerland in 2026', description: 'High standards, multiple languages, and competitive salaries — the Swiss market explained.', href: '/blog/switzerland-cv-format' },
  { flag: '🇮🇹', tag: 'CV Guide', title: 'How to write a CV for Italy in 2026', description: 'Relationship culture, formal conventions, and what Italian employers look for.', href: '/blog/italy-cv-format' },
]

const otherGuides = [
  { flag: '🇳🇱', tag: 'Job Search', title: 'Finding jobs in the Netherlands as a foreigner', description: 'The Dutch job market is open to internationals — here is how to stand out.', href: '/blog/netherlands-job-search' },
  { flag: '🇪🇺', tag: 'CV Guide', title: 'EU vs US resume: key differences explained', description: 'Here is exactly what to change before you hit send on an EU application.', href: '/blog/eu-vs-us-resume' },
  { flag: '🇪🇺', tag: 'Job Search', title: 'Best job boards in Europe for English speakers', description: 'The platforms European recruiters actually use — by country and pan-European.', href: '/blog/best-job-boards-europe' },
  { flag: '🇪🇺', tag: 'Cover Letters', title: 'How to write a cover letter for European employers', description: 'European cover letters differ by country — here is what works, and what does not.', href: '/blog/cover-letter-europe' },
  { flag: '🇪🇺', tag: 'Visa Guide', title: 'EU work visa options for non-EU nationals in 2026', description: 'Blue Card, country permits, and practical advice for non-EU job seekers.', href: '/blog/eu-work-visa-guide' },
]

export default function BlogIndex() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      {/* Header */}
      <div className="mb-12">
        <div className="flex items-center gap-2 mb-4">
          <Image src="/STAR.png" alt="" width={20} height={20} />
          <span className="text-sm font-medium text-indigo-400 uppercase tracking-wide">Guides</span>
        </div>
        <h1 className="text-3xl font-bold text-white">EU job search guides</h1>
        <p className="mt-3 text-slate-400 text-lg max-w-2xl">
          Practical advice on CVs, cover letters, and job searching across European markets. Written for international professionals.
        </p>
      </div>

      {/* CV Guides by Country */}
      <div className="mb-12">
        <h2 className="text-lg font-semibold text-white mb-6">CV guides by country</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {cvGuides.map((post) => (
            <Link
              key={post.href}
              href={post.href}
              className="group p-5 rounded-xl border border-slate-800 bg-slate-900/30 hover:border-indigo-700 hover:bg-slate-900/60 transition-all"
            >
              <div className="flex items-start gap-3">
                <span className="text-2xl flex-shrink-0">{post.flag}</span>
                <div>
                  <span className="text-xs text-indigo-400 font-medium uppercase tracking-wide">{post.tag}</span>
                  <h3 className="mt-1 text-sm font-semibold text-white group-hover:text-indigo-300 transition-colors leading-snug">{post.title}</h3>
                  <p className="mt-1 text-xs text-slate-500 leading-relaxed">{post.description}</p>
                  <span className="mt-2 inline-block text-xs text-indigo-400 group-hover:text-indigo-300 transition-colors">Read guide →</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Other Guides */}
      <div>
        <h2 className="text-lg font-semibold text-white mb-6">Job search guides</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {otherGuides.map((post) => (
            <Link
              key={post.href}
              href={post.href}
              className="group p-5 rounded-xl border border-slate-800 bg-slate-900/30 hover:border-indigo-700 hover:bg-slate-900/60 transition-all"
            >
              <div className="flex items-start gap-3">
                <span className="text-2xl flex-shrink-0">{post.flag}</span>
                <div>
                  <span className="text-xs text-indigo-400 font-medium uppercase tracking-wide">{post.tag}</span>
                  <h3 className="mt-1 text-sm font-semibold text-white group-hover:text-indigo-300 transition-colors leading-snug">{post.title}</h3>
                  <p className="mt-1 text-xs text-slate-500 leading-relaxed">{post.description}</p>
                  <span className="mt-2 inline-block text-xs text-indigo-400 group-hover:text-indigo-300 transition-colors">Read guide →</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
