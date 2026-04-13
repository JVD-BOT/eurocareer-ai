import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'EU Work Visa Guide for Non-EU Nationals in 2026',
  description: 'A practical guide to working in Europe as a non-EU national. Covers visa types, work permits, the EU Blue Card, and country-by-country requirements.',
  openGraph: {
    title: 'EU Work Visa Guide for Non-EU Nationals in 2026',
    description: 'How to legally work in Europe — visas, permits, and the EU Blue Card.',
    url: 'https://eurocareerai.com/blog/eu-work-visa-guide',
    type: 'article',
    images: [{ url: 'https://eurocareerai.com/LOGO_NEW.png' }],
  },
  twitter: { card: 'summary_large_image', title: 'EU Work Visa Guide for Non-EU Nationals in 2026', description: 'How to legally work in Europe — visas, permits, and the EU Blue Card.' },
  alternates: { canonical: 'https://eurocareerai.com/blog/eu-work-visa-guide' },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://eurocareerai.com' },
    { '@type': 'ListItem', position: 2, name: 'Guides', item: 'https://eurocareerai.com/blog' },
    { '@type': 'ListItem', position: 3, name: 'EU Work Visa Guide', item: 'https://eurocareerai.com/blog/eu-work-visa-guide' },
  ],
}

export default function EUWorkVisaGuide() {
  return (
    <article className="max-w-2xl mx-auto px-4 py-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <nav aria-label="breadcrumb">
        <div className="flex items-center gap-2 text-sm text-[#64748B] mb-8">
          <Link href="/" className="hover:text-[#6366F1] transition-colors">Home</Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-[#6366F1] transition-colors">Guides</Link>
          <span>/</span>
          <span className="text-[#0F172A]">EU Work Visa Guide</span>
        </div>
      </nav>

      <div className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-sm font-medium text-indigo-600 uppercase tracking-wide">Visa Guide</span>
          <span className="text-sm text-[#64748B]">Last updated: April 2026</span>
          <span className="text-sm text-[#64748B]">&middot; ~8 min read</span>
        </div>
        <h1 className="mt-3 text-3xl font-bold text-[#0F172A] leading-tight">
          EU Work Visa Guide for Non-EU Nationals in 2026
        </h1>
        <p className="mt-4 text-[#1E293B] text-lg">
          A practical guide to working in Europe legally. Covers visa types, work permits, the EU Blue Card, and what you need to know before you apply.
        </p>
      </div>

      <div className="prose prose-slate max-w-none space-y-6">
        <h2 className="text-xl font-semibold text-[#0F172A] mt-8">Do you need a visa to work in Europe?</h2>
        <p className="text-slate-600 leading-relaxed">
          EU and EEA citizens (including Norway, Iceland, and Liechtenstein) have the right to work freely in all EU member states. Citizens of Switzerland also have extensive rights. If you are from outside these zones, you will generally need a work permit and/or visa to legally work in Europe. The exact requirements vary significantly by country.
        </p>

        <h2 className="text-xl font-semibold text-[#0F172A] mt-8">The EU Blue Card</h2>
        <p className="text-slate-600 leading-relaxed">
          The EU Blue Card is a work and residence permit for highly skilled non-EU workers. It is the most widely recognised pathway for skilled professionals. Key requirements include a job offer meeting a minimum salary threshold (varies by country), a recognised university degree or equivalent qualification, and a contract of at least six months. The Blue Card allows holders to move to a new EU country after 12 months.
        </p>

        <h2 className="text-xl font-semibold text-[#0F172A] mt-8">Country-specific pathways</h2>
        <ul className="text-slate-600 space-y-2 list-disc list-inside">
          <li><strong className="text-[#0F172A]">Germany:</strong> The German Fachkräfteeinwanderungsgesetz (Skilled Immigration Act) is one of the most comprehensive. The Opportunity Card (Chancenkarte) allows skilled workers to enter Germany to seek employment. The EU Blue Card is also widely used.</li>
          <li><strong className="text-[#0F172A]">Netherlands:</strong> The Highly Skilled Migrant programme (Kennismigrant) is employer-sponsored and requires a minimum salary. The Netherlands also offers an orientation visa for graduates and freelancers.</li>
          <li><strong className="text-[#0F172A]">France:</strong> The Passeport Talent programme covers multiple categories including highly skilled workers, researchers, and investors. A job offer from a French employer is typically required.</li>
          <li><strong className="text-[#0F172A]">Ireland:</strong> The Critical Skills Employment Permit is available for roles on Ireland's Critical Skills Occupations List. The General Employment Permit covers other roles. Ireland is English-speaking, which makes it attractive to many applicants.</li>
          <li><strong className="text-[#0F172A]">Spain:</strong> Spain's Ley de Startups introduced a digital nomad visa in 2023. Traditional work permits require employer sponsorship. Spain also has a highly skilled worker fast-track.</li>
        </ul>

        <h2 className="text-xl font-semibold text-[#0F172A] mt-8">The job seeker visa</h2>
        <p className="text-slate-600 leading-relaxed">
          Several European countries offer job seeker visas that allow you to enter and look for work for a fixed period (typically three to six months) without a job offer in hand. Germany, Austria, Denmark, and Portugal all offer versions of this. Requirements vary — you typically need to demonstrate qualifications, language skills, and sufficient funds.
        </p>

        <h2 className="text-xl font-semibold text-[#0F172A] mt-8">Practical steps to take</h2>
        <ul className="text-slate-600 space-y-2 list-disc list-inside">
          <li>Research the specific requirements for your target country — immigration law changes frequently</li>
          <li>Get your qualifications recognised if necessary — some countries require formal recognition of foreign degrees</li>
          <li>Secure a job offer where possible — employer-sponsored pathways are the most straightforward</li>
          <li>Apply for your visa or permit early — processing times can be several months</li>
          <li>Consult an immigration lawyer for complex situations — this guide is for general information only</li>
        </ul>

        <p className="text-sm text-slate-500 italic">
          Note: This guide provides general information only and does not constitute legal advice. Immigration rules change frequently. Always verify requirements with official government sources or a qualified immigration professional.
        </p>

        <div className="mt-12 p-6 rounded-xl bg-indigo-950 border border-indigo-800">
          <p className="text-white font-semibold">Got your visa sorted? Now get your CV right.</p>
          <p className="mt-1 text-slate-400 text-sm">EuroCareer AI adapts your CV to the exact format expected by employers in your target EU country.</p>
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
              <p className="text-xs text-[#64748B] mt-1">Largest EU job market</p>
            </Link>
            <Link href="/blog/netherlands-job-search" className="p-4 rounded-xl border border-[#E2E8F0] hover:border-[#6366F1] transition-colors">
              <span className="text-2xl">nl</span>
              <p className="mt-2 text-sm font-semibold text-[#0F172A]">Job Search Netherlands</p>
              <p className="text-xs text-[#64748B] mt-1">Finding work in Holland</p>
            </Link>
            <Link href="/blog/eu-vs-us-resume" className="p-4 rounded-xl border border-[#E2E8F0] hover:border-[#6366F1] transition-colors">
              <span className="text-2xl">eu</span>
              <p className="mt-2 text-sm font-semibold text-[#0F172A]">EU vs US Resume</p>
              <p className="text-xs text-[#64748B] mt-1">Key differences</p>
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
