import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Write a CV for Germany in 2026',
  description: 'German CVs follow strict conventions around format, photo, and structure. Learn exactly what German employers expect in 2026.',
  openGraph: {
    title: 'How to Write a CV for Germany in 2026',
    description: 'German CV conventions — photo, structure, and the Anschreiben explained.',
    url: 'https://eurocareerai.com/blog/german-cv-format',
    type: 'article',
    images: [{ url: 'https://eurocareerai.com/LOGO_NEW.png' }],
  },
  twitter: { card: 'summary_large_image', title: 'How to Write a CV for Germany in 2026', description: 'German CV conventions — photo, structure, and the Anschreiben explained.' },
  alternates: { canonical: 'https://eurocareerai.com/blog/german-cv-format' },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://eurocareerai.com' },
    { '@type': 'ListItem', position: 2, name: 'Guides', item: 'https://eurocareerai.com/blog' },
    { '@type': 'ListItem', position: 3, name: 'German CV Format', item: 'https://eurocareerai.com/blog/german-cv-format' },
  ],
}

export default function GermanCvFormatPage() {
  return (
    <div className="min-h-screen bg-white">

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <main className="max-w-3xl mx-auto px-6 py-16">
        <nav aria-label="breadcrumb">
          <div className="flex items-center gap-2 text-sm text-[#7A7F94] mb-8">
            <Link href="/" className="hover:text-[#636DF5] transition-colors">Home</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-[#636DF5] transition-colors">Guides</Link>
            <span>/</span>
            <span className="text-[#0F1629]">German CV Format</span>
          </div>
        </nav>

        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-sm font-medium text-indigo-600 uppercase tracking-wide">DE CV Guide</span>
            <span className="text-sm text-[#7A7F94]">Last updated: April 2026</span>
            <span className="text-sm text-[#7A7F94]">&middot; ~7 min read</span>
          </div>
          <h1 className="mt-3 text-3xl font-bold text-[#0F1629] leading-tight">
            How to Write a CV for Germany in 2026
          </h1>
          <p className="mt-4 text-[#3D4255] text-lg">
            German CVs follow strict conventions around format, photo, and structure. Learn exactly what German employers expect.
          </p>
        </div>

        <div className="prose prose-slate max-w-none space-y-6">
          <h2 className="text-xl font-semibold text-[#0F1629] mt-8">The Lebenslauf</h2>
          <p className="text-slate-600 leading-relaxed">
            In Germany, your CV is called a Lebenslauf (literally "course of life"). It follows a highly structured, formal format. German employers have very specific expectations — and deviating from them signals a lack of local knowledge. Get the format right before anything else.
          </p>

          <h2 className="text-xl font-semibold text-[#0F1629] mt-8">Photo requirements</h2>
          <p className="text-slate-600 leading-relaxed">
            A professional passport-style photo (Bewerbungsfoto) is expected on virtually all German CVs. It should be taken professionally, show you in business attire, and be printed in colour. The photo should appear in the top-right corner of the first page. This is non-negotiable for most German employers — submitting without a photo risks your application being dismissed.
          </p>

          <h2 className="text-xl font-semibold text-[#0F1629] mt-8">Personal details</h2>
          <p className="text-slate-600 leading-relaxed">
            German CVs typically include: full name, address, date of birth, place of birth, nationality, phone number, and email address. Marital status is optional. These details are placed directly after the photo, usually in the top section of the document.
          </p>

          <h2 className="text-xl font-semibold text-[#0F1629] mt-8">Structure and format</h2>
          <ul className="text-slate-600 space-y-2 list-disc list-inside">
            <li><strong className="text-[#0F1629]">Length:</strong> Two pages is standard. One page for very junior roles. Three pages for senior or academic positions.</li>
            <li><strong className="text-[#0F1629]">Layout:</strong> Tabular/structured format. Section headers in the left column, details in the right. Clean, precise, professional.</li>
            <li><strong className="text-[#0F1629]">Work experience (Berufserfahrung):</strong> Reverse chronological. Include exact dates (month and year), company name, city, job title, and responsibilities.</li>
            <li><strong className="text-[#0F1629]">Education (Ausbildung):</strong> Include all formal qualifications. German employers respect academic credentials and apprenticeships (Ausbildung).</li>
            <li><strong className="text-[#0F1629]">Skills (Kenntnisse):</strong> Language skills with CEFR levels, technical skills, and IT proficiencies.</li>
            <li><strong className="text-[#0F1629]">Hobbies (Hobbies/Interessen):</strong> A short hobbies section is acceptable in Germany — it shows personality. Keep it brief and relevant.</li>
          </ul>

          <h2 className="text-xl font-semibold text-[#0F1629] mt-8">The Anschreiben (cover letter)</h2>
          <p className="text-slate-600 leading-relaxed">
            A formal cover letter is absolutely expected in Germany. The Anschreiben should be exactly one page, formally addressed (Sehr geehrte Frau / Sehr geehrter Herr + surname), and explain specifically why you want this role at this company. German employers place significant weight on the cover letter. A generic one will cost you the interview.
          </p>

          <h2 className="text-xl font-semibold text-[#0F1629] mt-8">Language</h2>
          <p className="text-slate-600 leading-relaxed">
            For German companies, submit your CV in German. Even for international companies with German-speaking teams, a German CV demonstrates cultural awareness. For global companies with English-language postings, an English CV is appropriate — always follow the language of the job advert.
          </p>

          <h2 className="text-xl font-semibold text-[#0F1629] mt-8">Common mistakes</h2>
          <ul className="text-slate-600 space-y-2 list-disc list-inside">
            <li>Omitting the professional photo</li>
            <li>Using a casual or creative CV format</li>
            <li>Writing a generic Anschreiben</li>
            <li>Not including date of birth and address</li>
            <li>Leaving unexplained gaps in employment history</li>
            <li>Translating directly from an English CV without adapting to German format conventions</li>
          </ul>

          <div className="mt-12 p-6 rounded-xl bg-indigo-950 border border-indigo-800">
            <p className="text-white font-semibold">Ready to adapt your CV for Germany?</p>
            <p className="mt-1 text-slate-400 text-sm">EuroCareer AI reformats your CV to German standards — photo slot, tabular layout, formal tone, and all the details German employers expect.</p>
            <Link href="/auth/signup" className="mt-4 inline-block bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium px-5 py-2.5 rounded-lg transition-colors">
              Try EuroCareer AI free
            </Link>
          </div>

          {/* Related guides */}
          <div className="mt-12 border-t border-[#E2E1DC] pt-8">
            <h2 className="text-lg font-semibold text-[#0F1629] mb-4">Related guides</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <Link href="/blog/austria-cv-format" className="p-4 rounded-xl border border-[#E2E1DC] hover:border-[#636DF5] transition-colors">
                <span className="text-2xl">at</span>
                <p className="mt-2 text-sm font-semibold text-[#0F1629]">Austria CV Format</p>
                <p className="text-xs text-[#7A7F94] mt-1">Closest comparison to Germany</p>
              </Link>
              <Link href="/blog/switzerland-cv-format" className="p-4 rounded-xl border border-[#E2E1DC] hover:border-[#636DF5] transition-colors">
                <span className="text-2xl">ch</span>
                <p className="mt-2 text-sm font-semibold text-[#0F1629]">Switzerland CV Format</p>
                <p className="text-xs text-[#7A7F94] mt-1">German-speaking Swiss market</p>
              </Link>
              <Link href="/blog/cover-letter-europe" className="p-4 rounded-xl border border-[#E2E1DC] hover:border-[#636DF5] transition-colors">
                <span className="text-2xl">eu</span>
                <p className="mt-2 text-sm font-semibold text-[#0F1629]">Cover Letters in Europe</p>
                <p className="text-xs text-[#7A7F94] mt-1">Country-by-country cover letter guide</p>
              </Link>
            </div>
          </div>

          <div className="mt-8">
            <Link href="/blog" className="text-indigo-600 hover:text-indigo-500 text-sm transition-colors">Back to all guides</Link>
          </div>
        </div>
      </main>
    </div>
  )
}
