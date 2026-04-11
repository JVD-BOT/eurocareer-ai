import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'How to Write a CV for Ireland in 2026',
  description: 'Irish CV conventions explained — similar to the UK but with key differences. Learn the format, length, and what Dublin employers actually expect in 2026.',
  openGraph: {
    title: 'How to Write a CV for Ireland in 2026',
    description: 'Irish CV format — professional, concise, and without a photo.',
    url: 'https://eurocareerai.com/blog/ireland-cv-format',
    type: 'article',
    images: [{ url: 'https://eurocareerai.com/LOGO_NEW.png' }],
  },
  twitter: { card: 'summary_large_image', title: 'How to Write a CV for Ireland in 2026', description: 'Irish CV format — professional, concise, and without a photo.' },
  alternates: { canonical: 'https://eurocareerai.com/blog/ireland-cv-format' },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://eurocareerai.com' },
    { '@type': 'ListItem', position: 2, name: 'Guides', item: 'https://eurocareerai.com/blog' },
    { '@type': 'ListItem', position: 3, name: 'Ireland CV Format', item: 'https://eurocareerai.com/blog/ireland-cv-format' },
  ],
}

export default function IrelandCVFormat() {
  return (
    <article className="max-w-2xl mx-auto px-4 py-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <nav aria-label="breadcrumb">
        <div className="flex items-center gap-2 text-sm text-[#7A7F94] mb-8">
          <Link href="/" className="hover:text-[#636DF5] transition-colors">Home</Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-[#636DF5] transition-colors">Guides</Link>
          <span>/</span>
          <span className="text-[#0F1629]">Ireland CV Format</span>
        </div>
      </nav>

      <div className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-sm font-medium text-indigo-600 uppercase tracking-wide">IE CV Guide</span>
          <span className="text-sm text-[#7A7F94]">Last updated: April 2026</span>
          <span className="text-sm text-[#7A7F94]">&middot; ~5 min read</span>
        </div>
        <h1 className="mt-3 text-3xl font-bold text-[#0F1629] leading-tight">
          How to Write a CV for Ireland in 2026
        </h1>
        <p className="mt-4 text-[#3D4255] text-lg">
          Ireland's job market — centred on Dublin's thriving tech and finance sectors — follows conventions similar to the UK, with some important differences.
        </p>
      </div>

      <div className="prose prose-slate max-w-none space-y-6">
        <h2 className="text-xl font-semibold text-[#0F1629] mt-8">Ireland's job market</h2>
        <p className="text-slate-600 leading-relaxed">
          Dublin is home to the European headquarters of Google, Meta, Apple, LinkedIn, and dozens of other major tech companies. This makes Ireland's job market particularly tech-forward and internationally oriented. The country's English-language environment and EU membership also make it an attractive landing point for international professionals.
        </p>

        <h2 className="text-xl font-semibold text-[#0F1629] mt-8">Photo and personal details</h2>
        <p className="text-slate-600 leading-relaxed">
          Like the UK, Irish CVs do not include photos — it is considered unusual and can create unconscious bias issues. Do not include your date of birth, nationality, or marital status. Your name, address (or general location), phone number, email, and LinkedIn URL are sufficient.
        </p>

        <h2 className="text-xl font-semibold text-[#0F1629] mt-8">Structure and format</h2>
        <ul className="text-slate-600 space-y-2 list-disc list-inside">
          <li><strong className="text-[#0F1629]">Length:</strong> Two pages is standard. One page for very junior roles or recent graduates, three pages for very senior roles only.</li>
          <li><strong className="text-[#0F1629]">Layout:</strong> Professional and clean. Simple formatting. Avoid heavy graphics or design elements unless you are in a creative role.</li>
          <li><strong className="text-[#0F1629]">Work experience:</strong> Reverse chronological. Include company, job title, dates, and 3-5 bullet points per role focusing on achievements and impact.</li>
          <li><strong className="text-[#0F1629]">Education:</strong> List qualifications with institution, dates, and grade. Irish employers value academic credentials.</li>
          <li><strong className="text-[#0F1629]">Skills:</strong> Include technical skills, language abilities, and any relevant certifications.</li>
        </ul>

        <h2 className="text-xl font-semibold text-[#0F1629] mt-8">The covering letter</h2>
        <p className="text-slate-600 leading-relaxed">
          A covering letter is generally expected in Ireland, though for tech roles at international companies it is sometimes optional. Keep it to one page, professional in tone, and focused on why you are a good fit for this specific role. Irish culture appreciates warmth and personality alongside professionalism — do not be too stiff.
        </p>

        <h2 className="text-xl font-semibold text-[#0F1629] mt-8">Work permits and visas</h2>
        <p className="text-slate-600 leading-relaxed">
          EU and EEA citizens can work freely in Ireland. Non-EU nationals need a work permit — Ireland has a Critical Skills Employment Permit for in-demand roles and a General Employment Permit for others. Check the official Irish immigration website for current eligibility criteria.
        </p>

        <h2 className="text-xl font-semibold text-[#0F1629] mt-8">Common mistakes</h2>
        <ul className="text-slate-600 space-y-2 list-disc list-inside">
          <li>Including a photo (not expected in Ireland)</li>
          <li>Exceeding two pages without a very senior track record</li>
          <li>Omitting specific achievements and quantified results</li>
          <li>Writing a generic covering letter</li>
          <li>Using a CV template clearly designed for another market</li>
        </ul>

        <div className="mt-12 p-6 rounded-xl bg-indigo-950 border border-indigo-800">
          <p className="text-white font-semibold">Ready to adapt your CV for Ireland?</p>
          <p className="mt-1 text-slate-400 text-sm">EuroCareer AI reformats your CV to Irish conventions — achievement-focused, photo-free, and properly structured.</p>
          <Link href="/auth/signup" className="mt-4 inline-block bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium px-5 py-2.5 rounded-lg transition-colors">
            Try EuroCareer AI free
          </Link>
        </div>

        <div className="mt-12 border-t border-[#E2E1DC] pt-8">
          <h2 className="text-lg font-semibold text-[#0F1629] mb-4">Related guides</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Link href="/blog/uk-cv-format" className="p-4 rounded-xl border border-[#E2E1DC] hover:border-[#636DF5] transition-colors">
              <span className="text-2xl">gb</span>
              <p className="mt-2 text-sm font-semibold text-[#0F1629]">UK CV Format</p>
              <p className="text-xs text-[#7A7F94] mt-1">Very similar conventions</p>
            </Link>
            <Link href="/blog/eu-work-visa-guide" className="p-4 rounded-xl border border-[#E2E1DC] hover:border-[#636DF5] transition-colors">
              <span className="text-2xl">eu</span>
              <p className="mt-2 text-sm font-semibold text-[#0F1629]">EU Work Visa Guide</p>
              <p className="text-xs text-[#7A7F94] mt-1">Working in Europe legally</p>
            </Link>
            <Link href="/blog/cover-letter-europe" className="p-4 rounded-xl border border-[#E2E1DC] hover:border-[#636DF5] transition-colors">
              <span className="text-2xl">eu</span>
              <p className="mt-2 text-sm font-semibold text-[#0F1629]">Cover Letters in Europe</p>
              <p className="text-xs text-[#7A7F94] mt-1">Country-by-country guide</p>
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
