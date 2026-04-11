import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'How to Write a CV for Austria in 2026',
  description: 'Austrian CV conventions explained — similar to Germany but with key differences. Learn the format, photo norms, and what Viennese recruiters actually expect.',
  openGraph: {
    title: 'How to Write a CV for Austria in 2026',
    description: 'Austrian CV format — similar to Germany but with key differences worth knowing.',
    url: 'https://eurocareerai.com/blog/austria-cv-format',
    type: 'article',
    images: [{ url: 'https://eurocareerai.com/LOGO_NEW.png' }],
  },
  twitter: { card: 'summary_large_image', title: 'How to Write a CV for Austria in 2026', description: 'Austrian CV format — similar to Germany but with key differences worth knowing.' },
  alternates: { canonical: 'https://eurocareerai.com/blog/austria-cv-format' },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://eurocareerai.com' },
    { '@type': 'ListItem', position: 2, name: 'Guides', item: 'https://eurocareerai.com/blog' },
    { '@type': 'ListItem', position: 3, name: 'Austria CV Format', item: 'https://eurocareerai.com/blog/austria-cv-format' },
  ],
}

export default function AustriaCVFormat() {
  return (
    <article className="max-w-2xl mx-auto px-4 py-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <nav aria-label="breadcrumb">
        <div className="flex items-center gap-2 text-sm text-[#7A7F94] mb-8">
          <Link href="/" className="hover:text-[#636DF5] transition-colors">Home</Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-[#636DF5] transition-colors">Guides</Link>
          <span>/</span>
          <span className="text-[#0F1629]">Austria CV Format</span>
        </div>
      </nav>

      {/* Header */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-sm font-medium text-indigo-600 uppercase tracking-wide">🇦🇹 CV Guide</span>
          <span className="text-sm text-[#7A7F94]">Last updated: April 2026</span>
          <span className="text-sm text-[#7A7F94]">&middot; ~6 min read</span>
        </div>
        <h1 className="mt-3 text-3xl font-bold text-[#0F1629] leading-tight">
          How to Write a CV for Austria in 2026
        </h1>
        <p className="mt-4 text-[#3D4255] text-lg">
          Austria shares much of Germany's CV culture but has its own expectations — especially in Vienna's growing international job market.
        </p>
      </div>

      <div className="prose prose-slate max-w-none space-y-6">
        <h2 className="text-xl font-semibold text-[#0F1629] mt-8">Austria vs Germany: the differences</h2>
        <p className="text-slate-600 leading-relaxed">
          Austria and Germany share a language and many professional conventions, but Austrian workplace culture is generally slightly less formal and more personal. Viennese recruiters tend to appreciate a warmer tone than their German counterparts, while still expecting structure, precision, and professionalism. The fundamentals are the same — but the edges are softer.
        </p>

        <h2 className="text-xl font-semibold text-[#0F1629] mt-8">Photo and personal details</h2>
        <p className="text-slate-600 leading-relaxed">
          Including a professional photo is standard. Personal details — name, address, date of birth, nationality, phone, email — are all expected at the top of the document. This is more similar to Germany than to the Netherlands or Sweden.
        </p>

        <h2 className="text-xl font-semibold text-[#0F1629] mt-8">Structure and format</h2>
        <ul className="text-slate-600 space-y-2 list-disc list-inside">
          <li><strong className="text-[#0F1629]">Length:</strong> Two pages is standard. One page for very junior roles, three only for very senior or academic positions.</li>
          <li><strong className="text-[#0F1629]">Layout:</strong> Clean and professional. No graphics or heavy design. Clear section headers.</li>
          <li><strong className="text-[#0F1629]">Work experience:</strong> Reverse chronological. Include exact dates (month and year), company name, job title, and responsibilities. No unexplained gaps.</li>
          <li><strong className="text-[#0F1629]">Education:</strong> Include all formal qualifications. Austrian employers respect academic credentials — particularly university degrees and apprenticeships (Lehre).</li>
          <li><strong className="text-[#0F1629]">Languages:</strong> German fluency is essential for most roles. English is widely spoken in Vienna's tech and international sectors. Specify levels using CEFR.</li>
        </ul>

        <h2 className="text-xl font-semibold text-[#0F1629] mt-8">The cover letter (Bewerbungsschreiben)</h2>
        <p className="text-slate-600 leading-relaxed">
          A cover letter is expected in Austria, similar to Germany. It should be one page, formally addressed, and explain your motivation for the specific role and company — not just a summary of your CV. Austrian employers appreciate genuine interest in the organisation. Do some research before you write.
        </p>

        <h2 className="text-xl font-semibold text-[#0F1629] mt-8">Vienna's international job market</h2>
        <p className="text-slate-600 leading-relaxed">
          Vienna hosts a number of international organisations including UN agencies, OPEC, and the OSCE, making it more internationally accessible than most Austrian cities. The tech startup scene is growing. For international companies, English CVs are often accepted and sometimes preferred. Always check the language of the job posting.
        </p>

        <h2 className="text-xl font-semibold text-[#0F1629] mt-8">Common mistakes</h2>
        <ul className="text-slate-600 space-y-2 list-disc list-inside">
          <li>Treating Austria exactly like Germany — the cultural differences are subtle but real</li>
          <li>Omitting a photo</li>
          <li>Leaving unexplained employment gaps</li>
          <li>Sending a CV without a cover letter</li>
          <li>Not specifying German language level if applying to Austrian companies</li>
        </ul>

        <div className="mt-12 p-6 rounded-xl bg-indigo-950 border border-indigo-800">
          <p className="text-white font-semibold">Ready to adapt your CV for Austria?</p>
          <p className="mt-1 text-slate-400 text-sm">EuroCareer AI reformats your CV to Austrian standards — photo, structure, tone, and all — in seconds.</p>
          <Link href="/auth/signup" className="mt-4 inline-block bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium px-5 py-2.5 rounded-lg transition-colors">
            Try EuroCareer AI free
          </Link>
        </div>

        {/* Related guides */}
        <div className="mt-12 border-t border-[#E2E1DC] pt-8">
          <h2 className="text-lg font-semibold text-[#0F1629] mb-4">Related guides</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Link href="/blog/german-cv-format" className="p-4 rounded-xl border border-[#E2E1DC] hover:border-[#636DF5] transition-colors">
              <span className="text-2xl">de</span>
              <p className="mt-2 text-sm font-semibold text-[#0F1629]">German CV Format</p>
              <p className="text-xs text-[#7A7F94] mt-1">The closest comparison to Austria</p>
            </Link>
            <Link href="/blog/switzerland-cv-format" className="p-4 rounded-xl border border-[#E2E1DC] hover:border-[#636DF5] transition-colors">
              <span className="text-2xl">ch</span>
              <p className="mt-2 text-sm font-semibold text-[#0F1629]">Switzerland CV Format</p>
              <p className="text-xs text-[#7A7F94] mt-1">Another German-speaking market</p>
            </Link>
            <Link href="/blog/cover-letter-europe" className="p-4 rounded-xl border border-[#E2E1DC] hover:border-[#636DF5] transition-colors">
              <span className="text-2xl">letter</span>
              <p className="mt-2 text-sm font-semibold text-[#0F1629]">Cover Letters in Europe</p>
              <p className="text-xs text-[#7A7F94] mt-1">Writing for European employers</p>
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
