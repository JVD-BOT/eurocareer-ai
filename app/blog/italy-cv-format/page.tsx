import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'How to Write a CV for Italy in 2026',
  description: 'Italian CV conventions explained — the Europass format, photo norms, and what Italian employers actually expect in 2026.',
  openGraph: {
    title: 'How to Write a CV for Italy in 2026',
    description: 'Italian CV format — Europass, photo, and formal tone explained.',
    url: 'https://eurocareerai.com/blog/italy-cv-format',
    type: 'article',
    images: [{ url: 'https://eurocareerai.com/LOGO_NEW.png' }],
  },
  twitter: { card: 'summary_large_image', title: 'How to Write a CV for Italy in 2026', description: 'Italian CV format — Europass, photo, and formal tone explained.' },
  alternates: { canonical: 'https://eurocareerai.com/blog/italy-cv-format' },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://eurocareerai.com' },
    { '@type': 'ListItem', position: 2, name: 'Guides', item: 'https://eurocareerai.com/blog' },
    { '@type': 'ListItem', position: 3, name: 'Italy CV Format', item: 'https://eurocareerai.com/blog/italy-cv-format' },
  ],
}

export default function ItalyCVFormat() {
  return (
    <article className="max-w-2xl mx-auto px-4 py-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <nav aria-label="breadcrumb">
        <div className="flex items-center gap-2 text-sm text-[#64748B] mb-8">
          <Link href="/" className="hover:text-[#6366F1] transition-colors">Home</Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-[#6366F1] transition-colors">Guides</Link>
          <span>/</span>
          <span className="text-[#0F172A]">Italy CV Format</span>
        </div>
      </nav>

      <div className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-sm font-medium text-indigo-600 uppercase tracking-wide">IT CV Guide</span>
          <span className="text-sm text-[#64748B]">Last updated: April 2026</span>
          <span className="text-sm text-[#64748B]">&middot; ~6 min read</span>
        </div>
        <h1 className="mt-3 text-3xl font-bold text-[#0F172A] leading-tight">
          How to Write a CV for Italy in 2026
        </h1>
        <p className="mt-4 text-[#1E293B] text-lg">
          Italy uses the Europass CV format widely. Here is what you need to know about structure, photos, language, and what Italian recruiters actually look for.
        </p>
      </div>

      <div className="prose prose-slate max-w-none space-y-6">
        <h2 className="text-xl font-semibold text-[#0F172A] mt-8">The Europass CV in Italy</h2>
        <p className="text-slate-600 leading-relaxed">
          Italy is one of the strongest adopters of the Europass CV format — an EU-standardised template widely used across Southern and Eastern Europe. While not mandatory, it is familiar to Italian recruiters and is a safe default choice. You can create your Europass CV at europass.europa.eu.
        </p>

        <h2 className="text-xl font-semibold text-[#0F172A] mt-8">Photo and personal details</h2>
        <p className="text-slate-600 leading-relaxed">
          A professional photo is standard practice in Italy and is expected by most Italian employers. Include your date of birth, address, phone number, email, and nationality. The Europass format includes a dedicated photo field.
        </p>

        <h2 className="text-xl font-semibold text-[#0F172A] mt-8">Structure and format</h2>
        <ul className="text-slate-600 space-y-2 list-disc list-inside">
          <li><strong className="text-[#0F172A]">Length:</strong> Two to three pages is common in Italy — more generous than Northern European markets.</li>
          <li><strong className="text-[#0F172A]">Layout:</strong> Clean and professional. The Europass template is widely accepted. Avoid overly creative designs.</li>
          <li><strong className="text-[#0F172A]">Work experience:</strong> Reverse chronological. Include company, role, dates, and detailed descriptions of responsibilities.</li>
          <li><strong className="text-[#0F172A]">Education:</strong> Italian employers value academic credentials highly, especially from recognised Italian universities.</li>
          <li><strong className="text-[#0F172A]">Languages:</strong> Italian is essential for most roles. English is valuable, particularly in Milan's international business community.</li>
        </ul>

        <h2 className="text-xl font-semibold text-[#0F172A] mt-8">The cover letter (lettera di presentazione)</h2>
        <p className="text-slate-600 leading-relaxed">
          A cover letter is generally expected in Italy. It should be formal, in Italian for Italian companies, and demonstrate knowledge of the company. Italian business culture is relationship-oriented — showing genuine interest in the company and team is valued.
        </p>

        <h2 className="text-xl font-semibold text-[#0F172A] mt-8">Regional differences</h2>
        <p className="text-slate-600 leading-relaxed">
          Italy's job market is geographically diverse. Milan is Italy's financial and fashion capital with a more international, corporate atmosphere. Rome is dominated by government, public sector, and international organisations. Naples and Sicily have smaller but growing job markets. For tech roles, Milan and Rome have the largest concentrations of international employers.
        </p>

        <h2 className="text-xl font-semibold text-[#0F172A] mt-8">Common mistakes</h2>
        <ul className="text-slate-600 space-y-2 list-disc list-inside">
          <li>Omitting a photo (expected in most Italian contexts)</li>
          <li>Sending a CV in English to an Italian-language company</li>
          <li>Using a CV format clearly designed for the UK or US market</li>
          <li>Not including your date of birth (standard in Italy)</li>
          <li>Underselling your academic qualifications</li>
        </ul>

        <div className="mt-12 p-6 rounded-xl bg-indigo-950 border border-indigo-800">
          <p className="text-white font-semibold">Ready to adapt your CV for Italy?</p>
          <p className="mt-1 text-slate-400 text-sm">EuroCareer AI reformats your CV to Italian standards — Europass-compatible, photo-ready, and properly structured.</p>
          <Link href="/auth/signup" className="mt-4 inline-block bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium px-5 py-2.5 rounded-lg transition-colors">
            Try EuroCareer AI free
          </Link>
        </div>

        <div className="mt-12 border-t border-[#E2E8F0] pt-8">
          <h2 className="text-lg font-semibold text-[#0F172A] mb-4">Related guides</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Link href="/blog/spain-cv-format" className="p-4 rounded-xl border border-[#E2E8F0] hover:border-[#6366F1] transition-colors">
              <span className="text-2xl">es</span>
              <p className="mt-2 text-sm font-semibold text-[#0F172A]">Spain CV Format</p>
              <p className="text-xs text-[#64748B] mt-1">Similar Southern European conventions</p>
            </Link>
            <Link href="/blog/france-cv-format" className="p-4 rounded-xl border border-[#E2E8F0] hover:border-[#6366F1] transition-colors">
              <span className="text-2xl">fr</span>
              <p className="mt-2 text-sm font-semibold text-[#0F172A]">France CV Format</p>
              <p className="text-xs text-[#64748B] mt-1">Another formal Latin European market</p>
            </Link>
            <Link href="/blog/cover-letter-europe" className="p-4 rounded-xl border border-[#E2E8F0] hover:border-[#6366F1] transition-colors">
              <span className="text-2xl">eu</span>
              <p className="mt-2 text-sm font-semibold text-[#0F172A]">Cover Letters in Europe</p>
              <p className="text-xs text-[#64748B] mt-1">Country-by-country guide</p>
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
