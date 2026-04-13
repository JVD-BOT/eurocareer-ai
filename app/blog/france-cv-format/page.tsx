import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'How to Write a CV for France in 2026',
  description: 'French CV conventions explained — the CV format, photo norms, and what Parisian employers actually expect. Includes tips on the lettre de motivation.',
  openGraph: {
    title: 'How to Write a CV for France in 2026',
    description: 'French CV format — photo, structure, and the lettre de motivation explained.',
    url: 'https://eurocareerai.com/blog/france-cv-format',
    type: 'article',
    images: [{ url: 'https://eurocareerai.com/LOGO_NEW.png' }],
  },
  twitter: { card: 'summary_large_image', title: 'How to Write a CV for France in 2026', description: 'French CV format — photo, structure, and the lettre de motivation explained.' },
  alternates: { canonical: 'https://eurocareerai.com/blog/france-cv-format' },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://eurocareerai.com' },
    { '@type': 'ListItem', position: 2, name: 'Guides', item: 'https://eurocareerai.com/blog' },
    { '@type': 'ListItem', position: 3, name: 'France CV Format', item: 'https://eurocareerai.com/blog/france-cv-format' },
  ],
}

export default function FranceCVFormat() {
  return (
    <article className="max-w-2xl mx-auto px-4 py-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <nav aria-label="breadcrumb">
        <div className="flex items-center gap-2 text-sm text-[#64748B] mb-8">
          <Link href="/" className="hover:text-[#6366F1] transition-colors">Home</Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-[#6366F1] transition-colors">Guides</Link>
          <span>/</span>
          <span className="text-[#0F172A]">France CV Format</span>
        </div>
      </nav>

      <div className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-sm font-medium text-indigo-600 uppercase tracking-wide">FR CV Guide</span>
          <span className="text-sm text-[#64748B]">Last updated: April 2026</span>
          <span className="text-sm text-[#64748B]">&middot; ~6 min read</span>
        </div>
        <h1 className="mt-3 text-3xl font-bold text-[#0F172A] leading-tight">
          How to Write a CV for France in 2026
        </h1>
        <p className="mt-4 text-[#1E293B] text-lg">
          The French CV has specific conventions around photo, structure, and the accompanying lettre de motivation. Here is what Parisian employers actually expect.
        </p>
      </div>

      <div className="prose prose-slate max-w-none space-y-6">
        <h2 className="text-xl font-semibold text-[#0F172A] mt-8">French workplace culture</h2>
        <p className="text-slate-600 leading-relaxed">
          France has a formal, hierarchical workplace culture — particularly in traditional sectors like finance, law, and the civil service. Startups and tech companies in Paris are increasingly casual, but for most roles in France, presenting yourself professionally and formally in your application materials is essential.
        </p>

        <h2 className="text-xl font-semibold text-[#0F172A] mt-8">Photo and personal details</h2>
        <p className="text-slate-600 leading-relaxed">
          A professional photo is standard practice in France and is widely expected. Personal details — name, address, phone, email, date of birth, and nationality — are typically included. Marital status and number of children are becoming less common but still appear occasionally. Always include your LinkedIn profile URL.
        </p>

        <h2 className="text-xl font-semibold text-[#0F172A] mt-8">Structure and format</h2>
        <ul className="text-slate-600 space-y-2 list-disc list-inside">
          <li><strong className="text-[#0F172A]">Length:</strong> One page is strongly preferred in France. Two pages for very experienced candidates only.</li>
          <li><strong className="text-[#0F172A]">Layout:</strong> Clean and classical. French employers value elegance and clarity. Subtle design is acceptable — flashy templates are not.</li>
          <li><strong className="text-[#0F172A]">Work experience:</strong> Reverse chronological. Include company, role, dates, and specific achievements. French employers appreciate precise descriptions.</li>
          <li><strong className="text-[#0F172A]">Education:</strong> The Grande École system carries significant prestige. If you attended a top French institution, list it prominently. For international candidates, explain your qualifications clearly.</li>
          <li><strong className="text-[#0F172A]">Languages:</strong> French proficiency is crucial for most roles. Even for international companies, demonstrating French language skills is highly advantageous.</li>
        </ul>

        <h2 className="text-xl font-semibold text-[#0F172A] mt-8">The lettre de motivation</h2>
        <p className="text-slate-600 leading-relaxed">
          A cover letter is not optional in France — it is expected and taken seriously. The lettre de motivation should be formal, address a specific person, and demonstrate genuine knowledge of the company. French employers value intellectual engagement; show that you have researched the company deeply. Keep it to one page and follow formal French letter-writing conventions.
        </p>

        <h2 className="text-xl font-semibold text-[#0F172A] mt-8">Language</h2>
        <p className="text-slate-600 leading-relaxed">
          For French companies, always write your CV and cover letter in French. Even if the job posting is in English, submitting application materials in French shows respect and commitment. For multinational companies based in France, English is often acceptable — follow the language of the job posting.
        </p>

        <h2 className="text-xl font-semibold text-[#0F172A] mt-8">Common mistakes</h2>
        <ul className="text-slate-600 space-y-2 list-disc list-inside">
          <li>Sending a CV that exceeds one page</li>
          <li>Omitting a photo (it signals unfamiliarity with French norms)</li>
          <li>Writing a generic lettre de motivation</li>
          <li>Applying to a French company in English without checking expectations</li>
          <li>Using an overly casual tone in your cover letter</li>
        </ul>

        <div className="mt-12 p-6 rounded-xl bg-indigo-950 border border-indigo-800">
          <p className="text-white font-semibold">Ready to adapt your CV for France?</p>
          <p className="mt-1 text-slate-400 text-sm">EuroCareer AI reformats your CV to French standards — one page, structured, and with the right professional tone.</p>
          <Link href="/auth/signup" className="mt-4 inline-block bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium px-5 py-2.5 rounded-lg transition-colors">
            Try EuroCareer AI free
          </Link>
        </div>

        <div className="mt-12 border-t border-[#E2E8F0] pt-8">
          <h2 className="text-lg font-semibold text-[#0F172A] mb-4">Related guides</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Link href="/blog/belgium-cv-format" className="p-4 rounded-xl border border-[#E2E8F0] hover:border-[#6366F1] transition-colors">
              <span className="text-2xl">be</span>
              <p className="mt-2 text-sm font-semibold text-[#0F172A]">Belgium CV Format</p>
              <p className="text-xs text-[#64748B] mt-1">Similar French-language conventions</p>
            </Link>
            <Link href="/blog/cover-letter-europe" className="p-4 rounded-xl border border-[#E2E8F0] hover:border-[#6366F1] transition-colors">
              <span className="text-2xl">eu</span>
              <p className="mt-2 text-sm font-semibold text-[#0F172A]">Cover Letters in Europe</p>
              <p className="text-xs text-[#64748B] mt-1">Country-by-country guide</p>
            </Link>
            <Link href="/blog/germany-cv-format" className="p-4 rounded-xl border border-[#E2E8F0] hover:border-[#6366F1] transition-colors">
              <span className="text-2xl">de</span>
              <p className="mt-2 text-sm font-semibold text-[#0F172A]">German CV Format</p>
              <p className="text-xs text-[#64748B] mt-1">Another formal European market</p>
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
