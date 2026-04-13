import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Job Search in the Netherlands: A Complete Guide for 2026',
  description: 'How to find work in the Netherlands — the best job boards, networking tips, visa requirements, and what Dutch employers look for in candidates.',
  openGraph: {
    title: 'Job Search in the Netherlands: A Complete Guide for 2026',
    description: 'Find work in the Netherlands — job boards, visas, and what Dutch employers want.',
    url: 'https://eurocareerai.com/blog/netherlands-job-search',
    type: 'article',
    images: [{ url: 'https://eurocareerai.com/LOGO_NEW.png' }],
  },
  twitter: { card: 'summary_large_image', title: 'Job Search in the Netherlands: A Complete Guide for 2026', description: 'Find work in the Netherlands — job boards, visas, and what Dutch employers want.' },
  alternates: { canonical: 'https://eurocareerai.com/blog/netherlands-job-search' },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://eurocareerai.com' },
    { '@type': 'ListItem', position: 2, name: 'Guides', item: 'https://eurocareerai.com/blog' },
    { '@type': 'ListItem', position: 3, name: 'Job Search in Netherlands', item: 'https://eurocareerai.com/blog/netherlands-job-search' },
  ],
}

export default function NetherlandsJobSearch() {
  return (
    <article className="max-w-2xl mx-auto px-4 py-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <nav aria-label="breadcrumb">
        <div className="flex items-center gap-2 text-sm text-[#64748B] mb-8">
          <Link href="/" className="hover:text-[#6366F1] transition-colors">Home</Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-[#6366F1] transition-colors">Guides</Link>
          <span>/</span>
          <span className="text-[#0F172A]">Job Search in Netherlands</span>
        </div>
      </nav>

      <div className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-sm font-medium text-indigo-600 uppercase tracking-wide">Job Search Guide</span>
          <span className="text-sm text-[#64748B]">Last updated: April 2026</span>
          <span className="text-sm text-[#64748B]">&middot; ~7 min read</span>
        </div>
        <h1 className="mt-3 text-3xl font-bold text-[#0F172A] leading-tight">
          Job Search in the Netherlands: A Complete Guide for 2026
        </h1>
        <p className="mt-4 text-[#1E293B] text-lg">
          The Netherlands is one of Europe's most international job markets. Here is everything you need to know about finding work in Amsterdam, Rotterdam, and beyond.
        </p>
      </div>

      <div className="prose prose-slate max-w-none space-y-6">
        <h2 className="text-xl font-semibold text-[#0F172A] mt-8">Why the Netherlands?</h2>
        <p className="text-slate-600 leading-relaxed">
          The Netherlands is home to the European headquarters of companies like ASML, Shell, Unilever, Booking.com, Adyen, and thousands of international firms. English is widely spoken — in Amsterdam, you can conduct your entire professional life in English. The country consistently ranks among Europe's top destinations for expats and international professionals.
        </p>

        <h2 className="text-xl font-semibold text-[#0F172A] mt-8">Best job boards in the Netherlands</h2>
        <ul className="text-slate-600 space-y-2 list-disc list-inside">
          <li><strong className="text-[#0F172A]">LinkedIn:</strong> The dominant platform for professional jobs in the Netherlands. Many Dutch companies post exclusively on LinkedIn.</li>
          <li><strong className="text-[#0F172A]">Nationale Vacaturebank (NationaleVacaturebank.nl):</strong> The Netherlands' largest Dutch-language job board.</li>
          <li><strong className="text-[#0F172A]">Monsterboard.nl:</strong> A major generalist job board covering most sectors.</li>
          <li><strong className="text-[#0F172A]">Indeed.nl:</strong> Aggregates listings from across the Dutch job market.</li>
          <li><strong className="text-[#0F172A]">Intermediair.nl:</strong> Focused on higher education graduates and professionals.</li>
          <li><strong className="text-[#0F172A]">Jobbird.com:</strong> Good for English-language roles in international companies.</li>
        </ul>

        <h2 className="text-xl font-semibold text-[#0F172A] mt-8">Networking in the Netherlands</h2>
        <p className="text-slate-600 leading-relaxed">
          Dutch professionals network actively but often prefer direct, purposeful networking over small talk. LinkedIn is the primary platform. In-person meetups, tech events, and industry conferences are popular in Amsterdam and Rotterdam. Being direct about your intentions is appreciated — tell people what you are looking for and ask specific questions.
        </p>

        <h2 className="text-xl font-semibold text-[#0F172A] mt-8">Work permits and visas</h2>
        <p className="text-slate-600 leading-relaxed">
          EU and EEA citizens can work freely in the Netherlands. Non-EU nationals have several pathways including the Highly Skilled Migrant (Kennismigrant) permit, which requires your employer to be a recognised sponsor and a minimum salary threshold. The Netherlands also offers an orientation year permit for international graduates from recognised Dutch universities.
        </p>

        <h2 className="text-xl font-semibold text-[#0F172A] mt-8">Language requirements</h2>
        <p className="text-slate-600 leading-relaxed">
          For international companies and tech roles in Amsterdam, English is sufficient. For Dutch companies, government, healthcare, and roles outside the Randstad (Amsterdam-Rotterdam-Utrecht-The Hague urban area), Dutch proficiency is increasingly important. Learning Dutch, even conversationally, is a significant competitive advantage and is appreciated by Dutch employers.
        </p>

        <h2 className="text-xl font-semibold text-[#0F172A] mt-8">The Dutch hiring process</h2>
        <p className="text-slate-600 leading-relaxed">
          Dutch hiring processes tend to be multi-stage — typically an initial phone or video screen, followed by one or two interviews, sometimes including a case study or assessment. Decisions are often made by consensus (Dutch organisations are famously collaborative), which can mean longer timelines than in the UK or US. Expect honest, direct feedback.
        </p>

        <h2 className="text-xl font-semibold text-[#0F172A] mt-8">Salary expectations</h2>
        <p className="text-slate-600 leading-relaxed">
          The Netherlands has a relatively high cost of living — particularly Amsterdam. Salaries for professional roles are competitive, but negotiation is more subdued than in the US. Research salary ranges using platforms like Glassdoor, LinkedIn Salary, or Loonwijzer.nl. Dutch employers typically include holiday allowance (vakantiegeld) of 8% on top of gross salary.
        </p>

        <div className="mt-12 p-6 rounded-xl bg-indigo-950 border border-indigo-800">
          <p className="text-white font-semibold">Found a Dutch role? Get your CV right.</p>
          <p className="mt-1 text-slate-400 text-sm">EuroCareer AI adapts your CV to Dutch expectations — direct, achievement-focused, and without the clutter Dutch recruiters skip past.</p>
          <Link href="/auth/signup" className="mt-4 inline-block bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium px-5 py-2.5 rounded-lg transition-colors">
            Try EuroCareer AI free
          </Link>
        </div>

        <div className="mt-12 border-t border-[#E2E8F0] pt-8">
          <h2 className="text-lg font-semibold text-[#0F172A] mb-4">Related guides</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Link href="/blog/netherlands-cv-format" className="p-4 rounded-xl border border-[#E2E8F0] hover:border-[#6366F1] transition-colors">
              <span className="text-2xl">nl</span>
              <p className="mt-2 text-sm font-semibold text-[#0F172A]">Netherlands CV Format</p>
              <p className="text-xs text-[#64748B] mt-1">CV conventions for Dutch employers</p>
            </Link>
            <Link href="/blog/eu-work-visa-guide" className="p-4 rounded-xl border border-[#E2E8F0] hover:border-[#6366F1] transition-colors">
              <span className="text-2xl">eu</span>
              <p className="mt-2 text-sm font-semibold text-[#0F172A]">EU Work Visa Guide</p>
              <p className="text-xs text-[#64748B] mt-1">Kennismigrant visa explained</p>
            </Link>
            <Link href="/blog/best-job-boards-europe" className="p-4 rounded-xl border border-[#E2E8F0] hover:border-[#6366F1] transition-colors">
              <span className="text-2xl">eu</span>
              <p className="mt-2 text-sm font-semibold text-[#0F172A]">Best Job Boards in Europe</p>
              <p className="text-xs text-[#64748B] mt-1">Pan-European job platforms</p>
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
