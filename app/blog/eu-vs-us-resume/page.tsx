import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'EU vs US Resume: Key Differences Explained',
  description: 'Moving from the US to Europe? Learn the key differences between American resumes and European CVs — from length and photos to tone and structure.',
  openGraph: {
    title: 'EU vs US Resume: Key Differences Explained',
    description: 'What changes when you move from a US resume to a European CV.',
    url: 'https://eurocareerai.com/blog/eu-vs-us-resume',
    type: 'article',
    images: [{ url: 'https://eurocareerai.com/LOGO_NEW.png' }],
  },
  twitter: { card: 'summary_large_image', title: 'EU vs US Resume: Key Differences Explained', description: 'What changes when you move from a US resume to a European CV.' },
  alternates: { canonical: 'https://eurocareerai.com/blog/eu-vs-us-resume' },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://eurocareerai.com' },
    { '@type': 'ListItem', position: 2, name: 'Guides', item: 'https://eurocareerai.com/blog' },
    { '@type': 'ListItem', position: 3, name: 'EU vs US Resume', item: 'https://eurocareerai.com/blog/eu-vs-us-resume' },
  ],
}

export default function EUvsUSResume() {
  return (
    <article className="max-w-2xl mx-auto px-4 py-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <nav aria-label="breadcrumb">
        <div className="flex items-center gap-2 text-sm text-[#64748B] mb-8">
          <Link href="/" className="hover:text-[#6366F1] transition-colors">Home</Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-[#6366F1] transition-colors">Guides</Link>
          <span>/</span>
          <span className="text-[#0F172A]">EU vs US Resume</span>
        </div>
      </nav>

      <div className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-sm font-medium text-indigo-600 uppercase tracking-wide">Career Guide</span>
          <span className="text-sm text-[#64748B]">Last updated: April 2026</span>
          <span className="text-sm text-[#64748B]">&middot; ~6 min read</span>
        </div>
        <h1 className="mt-3 text-3xl font-bold text-[#0F172A] leading-tight">
          EU vs US Resume: Key Differences Explained
        </h1>
        <p className="mt-4 text-[#1E293B] text-lg">
          Moving from the US to Europe? Your American resume will need significant changes before it lands well with European employers.
        </p>
      </div>

      <div className="prose prose-slate max-w-none space-y-6">
        <h2 className="text-xl font-semibold text-[#0F172A] mt-8">The biggest differences at a glance</h2>
        <p className="text-slate-600 leading-relaxed">
          While both a US resume and a European CV serve the same purpose — getting you an interview — the conventions around format, content, and presentation differ significantly. Understanding these differences is crucial if you are applying to European employers.
        </p>

        <h2 className="text-xl font-semibold text-[#0F172A] mt-8">1. Document name: Resume vs CV</h2>
        <p className="text-slate-600 leading-relaxed">
          In the US, a one-to-two page "resume" is standard. In Europe, the term "CV" (curriculum vitae) is universal. Crucially, a European CV is not the same as a US "academic CV" — it simply means the standard job application document, which is typically one to two pages for most roles.
        </p>

        <h2 className="text-xl font-semibold text-[#0F172A] mt-8">2. Photos</h2>
        <p className="text-slate-600 leading-relaxed">
          US resumes never include photos — it is considered discriminatory and can get your application rejected. In much of Europe, however, a professional photo is standard or even expected. Germany, Austria, France, and Spain typically include photos. The Netherlands and Scandinavia are moving away from photos. The UK follows US norms — no photo.
        </p>

        <h2 className="text-xl font-semibold text-[#0F172A] mt-8">3. Personal details</h2>
        <p className="text-slate-600 leading-relaxed">
          US resumes omit personal details like date of birth, nationality, and marital status to avoid discrimination. European CVs — particularly in Germany, France, and Southern Europe — often include date of birth, nationality, and sometimes marital status. This varies significantly by country.
        </p>

        <h2 className="text-xl font-semibold text-[#0F172A] mt-8">4. Length</h2>
        <p className="text-slate-600 leading-relaxed">
          US resumes are strictly one page for most candidates. In Europe, two pages is the norm for experienced professionals. Some senior roles in Germany or academia may extend to three pages. Brevity is still valued — do not pad your CV.
        </p>

        <h2 className="text-xl font-semibold text-[#0F172A] mt-8">5. Tone and language</h2>
        <p className="text-slate-600 leading-relaxed">
          American resumes use punchy, achievement-focused language with strong action verbs and quantified results ("Increased revenue by 45%"). European CVs vary by country — German CVs are factual and formal, Dutch CVs are direct but modest, UK CVs are professional but conversational. Adjust your tone for the target country.
        </p>

        <h2 className="text-xl font-semibold text-[#0F172A] mt-8">6. The cover letter</h2>
        <p className="text-slate-600 leading-relaxed">
          Cover letters are declining in the US. In most of Europe — especially Germany, France, and Austria — they remain expected and taken seriously. A strong motivation letter can differentiate you significantly.
        </p>

        <h2 className="text-xl font-semibold text-[#0F172A] mt-8">7. Objective statements vs profiles</h2>
        <p className="text-slate-600 leading-relaxed">
          Objective statements (common in older US resumes) are rare in Europe. A brief professional profile or summary at the top is acceptable in most European markets, but should be concise — two to three sentences maximum.
        </p>

        <h2 className="text-xl font-semibold text-[#0F172A] mt-8">Quick comparison table</h2>
        <div className="overflow-x-auto">
          <table className="text-sm text-slate-600 border-collapse w-full">
            <thead>
              <tr className="border-b border-[#E2E8F0]">
                <th className="text-left py-2 pr-4 text-[#0F172A] font-semibold">Feature</th>
                <th className="text-left py-2 pr-4 text-[#0F172A] font-semibold">US Resume</th>
                <th className="text-left py-2 text-[#0F172A] font-semibold">European CV</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-[#E2E8F0]"><td className="py-2 pr-4">Length</td><td className="py-2 pr-4">1 page</td><td className="py-2">1–2 pages</td></tr>
              <tr className="border-b border-[#E2E8F0]"><td className="py-2 pr-4">Photo</td><td className="py-2 pr-4">Never</td><td className="py-2">Often expected (varies by country)</td></tr>
              <tr className="border-b border-[#E2E8F0]"><td className="py-2 pr-4">Date of birth</td><td className="py-2 pr-4">Never</td><td className="py-2">Common in some countries</td></tr>
              <tr className="border-b border-[#E2E8F0]"><td className="py-2 pr-4">Cover letter</td><td className="py-2 pr-4">Declining</td><td className="py-2">Usually expected</td></tr>
              <tr><td className="py-2 pr-4">Tone</td><td className="py-2 pr-4">Achievement-focused</td><td className="py-2">Varies by country</td></tr>
            </tbody>
          </table>
        </div>

        <div className="mt-12 p-6 rounded-xl bg-indigo-950 border border-indigo-800">
          <p className="text-white font-semibold">Adapting your US resume for Europe?</p>
          <p className="mt-1 text-slate-400 text-sm">EuroCareer AI converts your US resume to the correct European format for any target country — automatically.</p>
          <Link href="/auth/signup" className="mt-4 inline-block bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium px-5 py-2.5 rounded-lg transition-colors">
            Try EuroCareer AI free
          </Link>
        </div>

        <div className="mt-12 border-t border-[#E2E8F0] pt-8">
          <h2 className="text-lg font-semibold text-[#0F172A] mb-4">Related guides</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Link href="/blog/german-cv-format" className="p-4 rounded-xl border border-[#E2E8F0] hover:border-[#6366F1] transition-colors">
              <span className="text-2xl">de</span>
              <p className="mt-2 text-sm font-semibold text-[#0F172A]">German CV Format</p>
              <p className="text-xs text-[#64748B] mt-1">Most formal European market</p>
            </Link>
            <Link href="/blog/cover-letter-europe" className="p-4 rounded-xl border border-[#E2E8F0] hover:border-[#6366F1] transition-colors">
              <span className="text-2xl">eu</span>
              <p className="mt-2 text-sm font-semibold text-[#0F172A]">Cover Letters in Europe</p>
              <p className="text-xs text-[#64748B] mt-1">Country-by-country guide</p>
            </Link>
            <Link href="/blog/eu-work-visa-guide" className="p-4 rounded-xl border border-[#E2E8F0] hover:border-[#6366F1] transition-colors">
              <span className="text-2xl">eu</span>
              <p className="mt-2 text-sm font-semibold text-[#0F172A]">EU Work Visa Guide</p>
              <p className="text-xs text-[#64748B] mt-1">Working in Europe legally</p>
            </Link>
          </div>
        </div>

        <div className="mt-8">
          <Link href="/blog" className="text-indigo-600 hover:text-indigo-500 text-sm transition-colors">Back to all guides</Link>
        </div>
      </div>
    </article>
  )
}
