import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'How to Write a CV for Spain in 2026',
  description: 'Spanish CV conventions explained — photo norms, the curriculum vitae format, and what Madrid employers actually expect in 2026.',
  openGraph: {
    title: 'How to Write a CV for Spain in 2026',
    description: 'Spanish CV format — photo, warm tone, and what Spanish employers look for.',
    url: 'https://eurocareerai.com/blog/spain-cv-format',
    type: 'article',
    images: [{ url: 'https://eurocareerai.com/LOGO_NEW.png' }],
  },
  twitter: { card: 'summary_large_image', title: 'How to Write a CV for Spain in 2026', description: 'Spanish CV format — photo, warm tone, and what Spanish employers look for.' },
  alternates: { canonical: 'https://eurocareerai.com/blog/spain-cv-format' },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://eurocareerai.com' },
    { '@type': 'ListItem', position: 2, name: 'Guides', item: 'https://eurocareerai.com/blog' },
    { '@type': 'ListItem', position: 3, name: 'Spain CV Format', item: 'https://eurocareerai.com/blog/spain-cv-format' },
  ],
}

export default function SpainCVFormat() {
  return (
    <article className="max-w-2xl mx-auto px-4 py-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <nav aria-label="breadcrumb">
        <div className="flex items-center gap-2 text-sm text-[#7A7F94] mb-8">
          <Link href="/" className="hover:text-[#636DF5] transition-colors">Home</Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-[#636DF5] transition-colors">Guides</Link>
          <span>/</span>
          <span className="text-[#0F1629]">Spain CV Format</span>
        </div>
      </nav>

      <div className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-sm font-medium text-indigo-600 uppercase tracking-wide">ES CV Guide</span>
          <span className="text-sm text-[#7A7F94]">Last updated: April 2026</span>
          <span className="text-sm text-[#7A7F94]">&middot; ~6 min read</span>
        </div>
        <h1 className="mt-3 text-3xl font-bold text-[#0F1629] leading-tight">
          How to Write a CV for Spain in 2026
        </h1>
        <p className="mt-4 text-[#3D4255] text-lg">
          Spain's job market has its own conventions — particularly around photos, language, and the warm, personal tone that Spanish employers appreciate.
        </p>
      </div>

      <div className="prose prose-slate max-w-none space-y-6">
        <h2 className="text-xl font-semibold text-[#0F1629] mt-8">Spanish workplace culture</h2>
        <p className="text-slate-600 leading-relaxed">
          Spain has a relationship-oriented business culture. Building rapport matters. Spanish employers value personal connection, genuine interest in the company, and a warm — though still professional — tone in application materials. This extends from the major cities (Madrid, Barcelona) to regional markets with their own distinct cultures (Catalonia, Basque Country, Andalusia).
        </p>

        <h2 className="text-xl font-semibold text-[#0F1629] mt-8">Photo and personal details</h2>
        <p className="text-slate-600 leading-relaxed">
          A professional photo is standard in Spain and widely expected. Personal details including date of birth, address, phone, email, and nationality are typically included. DNI (Spanish ID number) is sometimes requested for Spanish nationals. For international applicants, include your nationality and visa status if relevant.
        </p>

        <h2 className="text-xl font-semibold text-[#0F1629] mt-8">Structure and format</h2>
        <ul className="text-slate-600 space-y-2 list-disc list-inside">
          <li><strong className="text-[#0F1629]">Length:</strong> One to two pages. Spanish employers appreciate brevity but do not penalise a well-structured second page.</li>
          <li><strong className="text-[#0F1629]">Layout:</strong> Clean and professional. The Europass format is accepted but a customised format often makes a stronger impression.</li>
          <li><strong className="text-[#0F1629]">Work experience:</strong> Reverse chronological with dates, company names, roles, and bullet-pointed achievements.</li>
          <li><strong className="text-[#0F1629]">Education:</strong> List qualifications with institution, location, and dates. Spanish employers value formal education.</li>
          <li><strong className="text-[#0F1629]">Languages:</strong> Spanish proficiency is essential for most roles. English is increasingly valued, particularly in Barcelona and tech sectors.</li>
        </ul>

        <h2 className="text-xl font-semibold text-[#0F1629] mt-8">The carta de presentación</h2>
        <p className="text-slate-600 leading-relaxed">
          A cover letter is generally expected. Write it in Spanish for Spanish companies. Demonstrate genuine knowledge of and interest in the company. Spanish employers appreciate authentic motivation — show that you have researched them specifically. A warm, personal tone is appropriate without being informal.
        </p>

        <h2 className="text-xl font-semibold text-[#0F1629] mt-8">Barcelona vs Madrid</h2>
        <p className="text-slate-600 leading-relaxed">
          Barcelona has a stronger startup and tech ecosystem, with many international companies. Catalan is widely spoken — learning even a few words shows cultural respect. Madrid is Spain's financial and corporate capital, home to many multinational headquarters. The tech scene is growing. Both cities have large expat communities and English-speaking job markets in certain sectors.
        </p>

        <h2 className="text-xl font-semibold text-[#0F1629] mt-8">Common mistakes</h2>
        <ul className="text-slate-600 space-y-2 list-disc list-inside">
          <li>Omitting a photo (expected in most Spanish contexts)</li>
          <li>Sending an English-only CV to a Spanish company</li>
          <li>Using a generic carta de presentación</li>
          <li>Ignoring regional language considerations (Catalan in Barcelona, Basque in the north)</li>
          <li>Underestimating the importance of relationships in the Spanish hiring process</li>
        </ul>

        <div className="mt-12 p-6 rounded-xl bg-indigo-950 border border-indigo-800">
          <p className="text-white font-semibold">Ready to adapt your CV for Spain?</p>
          <p className="mt-1 text-slate-400 text-sm">EuroCareer AI reformats your CV to Spanish standards — warm tone, photo-ready, and properly structured in Spanish.</p>
          <Link href="/auth/signup" className="mt-4 inline-block bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium px-5 py-2.5 rounded-lg transition-colors">
            Try EuroCareer AI free
          </Link>
        </div>

        <div className="mt-12 border-t border-[#E2E1DC] pt-8">
          <h2 className="text-lg font-semibold text-[#0F1629] mb-4">Related guides</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Link href="/blog/italy-cv-format" className="p-4 rounded-xl border border-[#E2E1DC] hover:border-[#636DF5] transition-colors">
              <span className="text-2xl">it</span>
              <p className="mt-2 text-sm font-semibold text-[#0F1629]">Italy CV Format</p>
              <p className="text-xs text-[#7A7F94] mt-1">Similar Southern European conventions</p>
            </Link>
            <Link href="/blog/france-cv-format" className="p-4 rounded-xl border border-[#E2E1DC] hover:border-[#636DF5] transition-colors">
              <span className="text-2xl">fr</span>
              <p className="mt-2 text-sm font-semibold text-[#0F1629]">France CV Format</p>
              <p className="text-xs text-[#7A7F94] mt-1">Another Latin European market</p>
            </Link>
            <Link href="/blog/eu-work-visa-guide" className="p-4 rounded-xl border border-[#E2E1DC] hover:border-[#636DF5] transition-colors">
              <span className="text-2xl">eu</span>
              <p className="mt-2 text-sm font-semibold text-[#0F1629]">EU Work Visa Guide</p>
              <p className="text-xs text-[#7A7F94] mt-1">Working in Europe legally</p>
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
