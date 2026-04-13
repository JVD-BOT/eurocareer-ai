import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'How to Write a CV for Belgium in 2026',
  description: 'Belgium has three official languages and a unique hiring culture. Here is how to write a CV that works for Belgian employers — in French, Dutch, or English.',
  openGraph: {
    title: 'How to Write a CV for Belgium in 2026',
    description: 'Belgian CV format — navigating French, Dutch, and English hiring conventions.',
    url: 'https://eurocareerai.com/blog/belgium-cv-format',
    type: 'article',
    images: [{ url: 'https://eurocareerai.com/LOGO_NEW.png' }],
  },
  twitter: { card: 'summary_large_image', title: 'How to Write a CV for Belgium in 2026', description: 'Belgian CV format — navigating French, Dutch, and English hiring conventions.' },
  alternates: { canonical: 'https://eurocareerai.com/blog/belgium-cv-format' },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://eurocareerai.com' },
    { '@type': 'ListItem', position: 2, name: 'Guides', item: 'https://eurocareerai.com/blog' },
    { '@type': 'ListItem', position: 3, name: 'Belgium CV Format', item: 'https://eurocareerai.com/blog/belgium-cv-format' },
  ],
}

export default function BelgiumCVFormat() {
  return (
    <article className="max-w-2xl mx-auto px-4 py-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <nav aria-label="breadcrumb">
        <div className="flex items-center gap-2 text-sm text-[#64748B] mb-8">
          <Link href="/" className="hover:text-[#6366F1] transition-colors">Home</Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-[#6366F1] transition-colors">Guides</Link>
          <span>/</span>
          <span className="text-[#0F172A]">Belgium CV Format</span>
        </div>
      </nav>

      <div className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-sm font-medium text-indigo-600 uppercase tracking-wide">BE CV Guide</span>
          <span className="text-sm text-[#64748B]">Last updated: April 2026</span>
          <span className="text-sm text-[#64748B]">&middot; ~6 min read</span>
        </div>
        <h1 className="mt-3 text-3xl font-bold text-[#0F172A] leading-tight">
          How to Write a CV for Belgium in 2026
        </h1>
        <p className="mt-4 text-[#1E293B] text-lg">
          Belgium has three official languages and a unique hiring culture — here is how to write a CV that works for Belgian employers.
        </p>
      </div>

      <div className="prose prose-slate max-w-none space-y-6">
        <h2 className="text-xl font-semibold text-[#0F172A] mt-8">Belgium's linguistic divide</h2>
        <p className="text-slate-600 leading-relaxed">
          Belgium is split into Flanders (Dutch-speaking), Wallonia (French-speaking), and Brussels (officially bilingual). The language of your CV should match the region where you are applying. For Brussels-based international roles, English is widely accepted.
        </p>

        <h2 className="text-xl font-semibold text-[#0F172A] mt-8">Photo and personal details</h2>
        <p className="text-slate-600 leading-relaxed">
          Including a professional photo is common in Belgium, particularly in French-speaking regions. In Flanders, it is becoming less common but still widely accepted. Include your address, phone number, and email.
        </p>

        <h2 className="text-xl font-semibold text-[#0F172A] mt-8">Structure and format</h2>
        <ul className="text-slate-600 space-y-2 list-disc list-inside">
          <li><strong className="text-[#0F172A]">Length:</strong> One to two pages. Two pages is standard for experienced candidates.</li>
          <li><strong className="text-[#0F172A]">Layout:</strong> Clean and structured. Belgian employers appreciate clarity. Avoid excessive graphics.</li>
          <li><strong className="text-[#0F172A]">Work experience:</strong> Reverse chronological with dates, company names, job titles, and bullet-pointed responsibilities.</li>
          <li><strong className="text-[#0F172A]">Education:</strong> Include full educational history. Belgian employers value formal qualifications highly.</li>
          <li><strong className="text-[#0F172A]">Languages:</strong> Crucial in Belgium. List all languages with CEFR levels. Multilingualism is a significant advantage.</li>
        </ul>

        <h2 className="text-xl font-semibold text-[#0F172A] mt-8">The cover letter</h2>
        <p className="text-slate-600 leading-relaxed">
          A cover letter is expected. Match the language of your CV. Keep it to one page, be specific about why you want this role at this company, and demonstrate cultural awareness of the Belgian workplace.
        </p>

        <h2 className="text-xl font-semibold text-[#0F172A] mt-8">EU institutions and international employers</h2>
        <p className="text-slate-600 leading-relaxed">
          Brussels is home to the European Commission, European Parliament, NATO, and hundreds of international organisations. These bodies often have their own application formats. For these roles, English is typically required and the expectations around personal details align with international norms.
        </p>

        <h2 className="text-xl font-semibold text-[#0F172A] mt-8">Common mistakes</h2>
        <ul className="text-slate-600 space-y-2 list-disc list-inside">
          <li>Sending a CV in the wrong language for the region</li>
          <li>Not listing language skills or understating your proficiency</li>
          <li>Using a template that ignores the bilingual or trilingual reality of Belgian workplaces</li>
          <li>Omitting a cover letter</li>
        </ul>

        <div className="mt-12 p-6 rounded-xl bg-indigo-950 border border-indigo-800">
          <p className="text-white font-semibold">Ready to adapt your CV for Belgium?</p>
          <p className="mt-1 text-slate-400 text-sm">EuroCareer AI tailors your CV to Belgian conventions — language, structure, and tone handled automatically.</p>
          <Link href="/auth/signup" className="mt-4 inline-block bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium px-5 py-2.5 rounded-lg transition-colors">
            Try EuroCareer AI free
          </Link>
        </div>

        <div className="mt-12 border-t border-[#E2E8F0] pt-8">
          <h2 className="text-lg font-semibold text-[#0F172A] mb-4">Related guides</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Link href="/blog/france-cv-format" className="p-4 rounded-xl border border-[#E2E8F0] hover:border-[#6366F1] transition-colors">
              <span className="text-2xl">fr</span>
              <p className="mt-2 text-sm font-semibold text-[#0F172A]">France CV Format</p>
              <p className="text-xs text-[#64748B] mt-1">French-language CV conventions</p>
            </Link>
            <Link href="/blog/netherlands-cv-format" className="p-4 rounded-xl border border-[#E2E8F0] hover:border-[#6366F1] transition-colors">
              <span className="text-2xl">nl</span>
              <p className="mt-2 text-sm font-semibold text-[#0F172A]">Netherlands CV Format</p>
              <p className="text-xs text-[#64748B] mt-1">Dutch-language CV guide</p>
            </Link>
            <Link href="/blog/eu-work-visa-guide" className="p-4 rounded-xl border border-[#E2E8F0] hover:border-[#6366F1] transition-colors">
              <span className="text-2xl">eu</span>
              <p className="mt-2 text-sm font-semibold text-[#0F172A]">EU Work Visa Guide</p>
              <p className="text-xs text-[#64748B] mt-1">Working in the EU as a non-EU national</p>
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
