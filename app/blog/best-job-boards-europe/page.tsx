import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Best Job Boards in Europe for 2026',
  description: 'The best job boards in Europe for finding work across Germany, Netherlands, France, UK, and beyond. Curated for international job seekers.',
  openGraph: {
    title: 'Best Job Boards in Europe for 2026',
    description: 'Find work across Europe — curated job boards for international job seekers.',
    url: 'https://eurocareerai.com/blog/best-job-boards-europe',
    type: 'article',
    images: [{ url: 'https://eurocareerai.com/LOGO_NEW.png' }],
  },
  twitter: { card: 'summary_large_image', title: 'Best Job Boards in Europe for 2026', description: 'Find work across Europe — curated job boards for international job seekers.' },
  alternates: { canonical: 'https://eurocareerai.com/blog/best-job-boards-europe' },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://eurocareerai.com' },
    { '@type': 'ListItem', position: 2, name: 'Guides', item: 'https://eurocareerai.com/blog' },
    { '@type': 'ListItem', position: 3, name: 'Best Job Boards in Europe', item: 'https://eurocareerai.com/blog/best-job-boards-europe' },
  ],
}

export default function BestJobBoardsEurope() {
  return (
    <article className="max-w-2xl mx-auto px-4 py-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <nav aria-label="breadcrumb">
        <div className="flex items-center gap-2 text-sm text-[#7A7F94] mb-8">
          <Link href="/" className="hover:text-[#636DF5] transition-colors">Home</Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-[#636DF5] transition-colors">Guides</Link>
          <span>/</span>
          <span className="text-[#0F1629]">Best Job Boards in Europe</span>
        </div>
      </nav>

      <div className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-sm font-medium text-indigo-600 uppercase tracking-wide">Job Search Guide</span>
          <span className="text-sm text-[#7A7F94]">Last updated: April 2026</span>
          <span className="text-sm text-[#7A7F94]">&middot; ~7 min read</span>
        </div>
        <h1 className="mt-3 text-3xl font-bold text-[#0F1629] leading-tight">
          Best Job Boards in Europe for 2026
        </h1>
        <p className="mt-4 text-[#3D4255] text-lg">
          Whether you are searching across the whole continent or targeting a specific country, here are the best platforms for finding work in Europe.
        </p>
      </div>

      <div className="prose prose-slate max-w-none space-y-6">
        <h2 className="text-xl font-semibold text-[#0F1629] mt-8">Pan-European job boards</h2>
        <p className="text-slate-600 leading-relaxed">
          These platforms cover multiple European countries and are ideal if you are open to opportunities across borders.
        </p>
        <ul className="text-slate-600 space-y-2 list-disc list-inside">
          <li><strong className="text-[#0F1629]">LinkedIn:</strong> The dominant professional network across all of Europe. Essential for networking and direct outreach to recruiters. Most roles in tech, finance, and consulting are posted here.</li>
          <li><strong className="text-[#0F1629]">Indeed Europe:</strong> A reliable aggregator pulling from company career pages, other job boards, and direct listings. Good for volume searches.</li>
          <li><strong className="text-[#0F1629]">Glassdoor:</strong> Job listings plus company reviews and salary data. Useful for researching employers before applying.</li>
          <li><strong className="text-[#0F1629]">EuroJobs.com:</strong> Specifically designed for cross-border European job seekers. Covers most EU countries.</li>
          <li><strong className="text-[#0F1629]">EURES:</strong> The European Job Mobility Portal — run by the EU itself. Free to use and covers all 27 EU member states plus Iceland, Liechtenstein, and Norway.</li>
        </ul>

        <h2 className="text-xl font-semibold text-[#0F1629] mt-8">Country-specific job boards</h2>
        <ul className="text-slate-600 space-y-2 list-disc list-inside">
          <li><strong className="text-[#0F1629]">Germany:</strong> StepStone.de, Xing (professional network), Monster.de, Bundesagentur für Arbeit (the national employment agency)</li>
          <li><strong className="text-[#0F1629]">Netherlands:</strong> Nationale Vacaturebank, Indeed.nl, Monsterboard.nl, Intermediair.nl</li>
          <li><strong className="text-[#0F1629]">France:</strong> Pôle Emploi, APEC (for executives and graduates), Welcome to the Jungle (popular with startups), Cadremploi</li>
          <li><strong className="text-[#0F1629]">UK:</strong> Reed.co.uk, Total Jobs, CV-Library, Guardian Jobs (media/public sector), CWJobs (tech)</li>
          <li><strong className="text-[#0F1629]">Spain:</strong> InfoJobs.net, Infojobs, LinkedIn (very active), Tecnoempleo (tech)</li>
          <li><strong className="text-[#0F1629]">Sweden:</strong> Arbetsförmedlingen (national employment agency), Jobs.se, LinkedIn (dominant for professionals)</li>
        </ul>

        <h2 className="text-xl font-semibold text-[#0F1629] mt-8">Tips for international job seekers</h2>
        <ul className="text-slate-600 space-y-2 list-disc list-inside">
          <li>Always adapt your CV for the country you are applying to — format, photo expectations, and language norms vary significantly</li>
          <li>Use country-specific job boards in addition to LinkedIn — local boards often list roles not found elsewhere</li>
          <li>Set up job alerts so you are notified immediately when relevant roles are posted</li>
          <li>Research visa requirements before applying if you are not an EU citizen</li>
          <li>Network actively on LinkedIn — many roles in Europe are filled through connections before being publicly posted</li>
        </ul>

        <h2 className="text-xl font-semibold text-[#0F1629] mt-8">Niche platforms worth knowing</h2>
        <p className="text-slate-600 leading-relaxed">
          For specific sectors, niche boards often outperform general ones. Sector-specific options include Euractiv for EU policy roles, eLitmus for tech roles in Eastern Europe, Welcome to the Jungle for startup culture, and Dezeen Jobs for design and architecture roles across Europe.
        </p>

        <div className="mt-12 p-6 rounded-xl bg-indigo-950 border border-indigo-800">
          <p className="text-white font-semibold">Found a role? Now adapt your CV for it.</p>
          <p className="mt-1 text-slate-400 text-sm">EuroCareer AI adapts your CV to match the expectations of employers in any EU country — in seconds.</p>
          <Link href="/auth/signup" className="mt-4 inline-block bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium px-5 py-2.5 rounded-lg transition-colors">
            Try EuroCareer AI free
          </Link>
        </div>

        <div className="mt-12 border-t border-[#E2E1DC] pt-8">
          <h2 className="text-lg font-semibold text-[#0F1629] mb-4">Related guides</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Link href="/blog/netherlands-job-search" className="p-4 rounded-xl border border-[#E2E1DC] hover:border-[#636DF5] transition-colors">
              <span className="text-2xl">nl</span>
              <p className="mt-2 text-sm font-semibold text-[#0F1629]">Job Search in Netherlands</p>
              <p className="text-xs text-[#7A7F94] mt-1">Country-specific job search tips</p>
            </Link>
            <Link href="/blog/eu-work-visa-guide" className="p-4 rounded-xl border border-[#E2E1DC] hover:border-[#636DF5] transition-colors">
              <span className="text-2xl">eu</span>
              <p className="mt-2 text-sm font-semibold text-[#0F1629]">EU Work Visa Guide</p>
              <p className="text-xs text-[#7A7F94] mt-1">Working in Europe as a non-EU national</p>
            </Link>
            <Link href="/blog/eu-vs-us-resume" className="p-4 rounded-xl border border-[#E2E1DC] hover:border-[#636DF5] transition-colors">
              <span className="text-2xl">eu</span>
              <p className="mt-2 text-sm font-semibold text-[#0F1629]">EU vs US Resume</p>
              <p className="text-xs text-[#7A7F94] mt-1">Key differences explained</p>
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
