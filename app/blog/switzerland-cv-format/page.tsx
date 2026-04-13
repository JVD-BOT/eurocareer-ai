import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'How to Write a CV for Switzerland in 2026',
  description: 'Swiss CV conventions explained — professional, multilingual, and precise. Learn what Zurich and Geneva employers actually expect in 2026.',
  openGraph: {
    title: 'How to Write a CV for Switzerland in 2026',
    description: 'Swiss CV format — professional, multilingual, and precise.',
    url: 'https://eurocareerai.com/blog/switzerland-cv-format',
    type: 'article',
    images: [{ url: 'https://eurocareerai.com/LOGO_NEW.png' }],
  },
  twitter: { card: 'summary_large_image', title: 'How to Write a CV for Switzerland in 2026', description: 'Swiss CV format — professional, multilingual, and precise.' },
  alternates: { canonical: 'https://eurocareerai.com/blog/switzerland-cv-format' },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://eurocareerai.com' },
    { '@type': 'ListItem', position: 2, name: 'Guides', item: 'https://eurocareerai.com/blog' },
    { '@type': 'ListItem', position: 3, name: 'Switzerland CV Format', item: 'https://eurocareerai.com/blog/switzerland-cv-format' },
  ],
}

export default function SwitzerlandCVFormat() {
  return (
    <article className="max-w-2xl mx-auto px-4 py-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <nav aria-label="breadcrumb">
        <div className="flex items-center gap-2 text-sm text-[#64748B] mb-8">
          <Link href="/" className="hover:text-[#6366F1] transition-colors">Home</Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-[#6366F1] transition-colors">Guides</Link>
          <span>/</span>
          <span className="text-[#0F172A]">Switzerland CV Format</span>
        </div>
      </nav>

      <div className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-sm font-medium text-indigo-600 uppercase tracking-wide">CH CV Guide</span>
          <span className="text-sm text-[#64748B]">Last updated: April 2026</span>
          <span className="text-sm text-[#64748B]">&middot; ~6 min read</span>
        </div>
        <h1 className="mt-3 text-3xl font-bold text-[#0F172A] leading-tight">
          How to Write a CV for Switzerland in 2026
        </h1>
        <p className="mt-4 text-[#1E293B] text-lg">
          Switzerland has four official languages and one of Europe's highest salary markets. Here is what Zurich, Geneva, and Basel employers look for.
        </p>
      </div>

      <div className="prose prose-slate max-w-none space-y-6">
        <h2 className="text-xl font-semibold text-[#0F172A] mt-8">Switzerland's multilingual reality</h2>
        <p className="text-slate-600 leading-relaxed">
          Switzerland has four official languages: German (spoken by ~63%), French (~23%), Italian (~8%), and Romansh (~1%). The language of your CV should match the linguistic region of the role. For Zurich and the German-speaking cantons, German is expected. For Geneva and the Romandy region, French. For international roles and many multinational companies, English CVs are widely accepted.
        </p>

        <h2 className="text-xl font-semibold text-[#0F172A] mt-8">Photo and personal details</h2>
        <p className="text-slate-600 leading-relaxed">
          A professional photo is commonly included on Swiss CVs, particularly for roles in German-speaking Switzerland where conventions are similar to Germany. Personal details including name, address, date of birth, nationality, and phone number are standard. Swiss employers often pay close attention to your work permit status if you are a non-Swiss national.
        </p>

        <h2 className="text-xl font-semibold text-[#0F172A] mt-8">Structure and format</h2>
        <ul className="text-slate-600 space-y-2 list-disc list-inside">
          <li><strong className="text-[#0F172A]">Length:</strong> Two pages is standard. Swiss employers expect thoroughness — one page may seem too brief for experienced candidates.</li>
          <li><strong className="text-[#0F172A]">Layout:</strong> Professional and polished. Swiss employers have high standards for presentation quality. Clean typography and consistent formatting are essential.</li>
          <li><strong className="text-[#0F172A]">Work experience:</strong> Reverse chronological with specific achievements. Swiss employers value precision and quantifiable results.</li>
          <li><strong className="text-[#0F172A]">Education:</strong> Swiss employers hold educational credentials in high regard. List all formal qualifications clearly.</li>
          <li><strong className="text-[#0F172A]">Languages:</strong> Multilingualism is extremely valued in Switzerland. List every language you speak with CEFR levels and be honest about your proficiency.</li>
        </ul>

        <h2 className="text-xl font-semibold text-[#0F172A] mt-8">The cover letter</h2>
        <p className="text-slate-600 leading-relaxed">
          A cover letter is expected in Switzerland. Match the language of your CV. In German-speaking Switzerland, formal conventions similar to Germany apply (Sehr geehrte Damen und Herren, Mit freundlichen Grüßen). In French-speaking Switzerland, French formality is expected. Be precise and professional — Swiss employers value substance over style.
        </p>

        <h2 className="text-xl font-semibold text-[#0F172A] mt-8">Work permits</h2>
        <p className="text-slate-600 leading-relaxed">
          Switzerland is not in the EU, but it has bilateral agreements with the EU that allow EU citizens to work freely. Non-EU nationals need a work permit, which typically requires a job offer from a Swiss employer. Switzerland has strict immigration rules and quotas for non-EU nationals, so competition is significant.
        </p>

        <h2 className="text-xl font-semibold text-[#0F172A] mt-8">Salaries in Switzerland</h2>
        <p className="text-slate-600 leading-relaxed">
          Switzerland offers some of the highest salaries in Europe — but the cost of living in Zurich and Geneva is correspondingly high. Research salary ranges thoroughly before negotiating. Swiss employers rarely negotiate aggressively; they typically offer fair market rates and expect you to research the market yourself.
        </p>

        <h2 className="text-xl font-semibold text-[#0F172A] mt-8">Common mistakes</h2>
        <ul className="text-slate-600 space-y-2 list-disc list-inside">
          <li>Sending an English CV to a German or French-speaking Swiss company</li>
          <li>Omitting language skills or being vague about proficiency</li>
          <li>Not including your work permit status</li>
          <li>Using a CV that looks unprofessional — Swiss standards for presentation are high</li>
          <li>Submitting an underprepared cover letter</li>
        </ul>

        <div className="mt-12 p-6 rounded-xl bg-indigo-950 border border-indigo-800">
          <p className="text-white font-semibold">Ready to adapt your CV for Switzerland?</p>
          <p className="mt-1 text-slate-400 text-sm">EuroCareer AI reformats your CV to Swiss standards — precise, professional, and in the right language for your target canton.</p>
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
              <p className="text-xs text-[#64748B] mt-1">Closest comparison for German-speaking CH</p>
            </Link>
            <Link href="/blog/austria-cv-format" className="p-4 rounded-xl border border-[#E2E8F0] hover:border-[#6366F1] transition-colors">
              <span className="text-2xl">at</span>
              <p className="mt-2 text-sm font-semibold text-[#0F172A]">Austria CV Format</p>
              <p className="text-xs text-[#64748B] mt-1">Another German-speaking market</p>
            </Link>
            <Link href="/blog/france-cv-format" className="p-4 rounded-xl border border-[#E2E8F0] hover:border-[#6366F1] transition-colors">
              <span className="text-2xl">fr</span>
              <p className="mt-2 text-sm font-semibold text-[#0F172A]">France CV Format</p>
              <p className="text-xs text-[#64748B] mt-1">For French-speaking cantons</p>
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
