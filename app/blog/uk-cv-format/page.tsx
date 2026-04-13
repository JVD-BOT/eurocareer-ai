import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'How to Write a CV for the UK in 2026',
  description: 'UK CV conventions explained — no photo, two pages, achievement-focused. Learn what London employers actually expect from your CV in 2026.',
  openGraph: {
    title: 'How to Write a CV for the UK in 2026',
    description: 'UK CV format — no photo, two pages, achievement-focused.',
    url: 'https://eurocareerai.com/blog/uk-cv-format',
    type: 'article',
    images: [{ url: 'https://eurocareerai.com/LOGO_NEW.png' }],
  },
  twitter: { card: 'summary_large_image', title: 'How to Write a CV for the UK in 2026', description: 'UK CV format — no photo, two pages, achievement-focused.' },
  alternates: { canonical: 'https://eurocareerai.com/blog/uk-cv-format' },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://eurocareerai.com' },
    { '@type': 'ListItem', position: 2, name: 'Guides', item: 'https://eurocareerai.com/blog' },
    { '@type': 'ListItem', position: 3, name: 'UK CV Format', item: 'https://eurocareerai.com/blog/uk-cv-format' },
  ],
}

export default function UKCVFormat() {
  return (
    <article className="max-w-2xl mx-auto px-4 py-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <nav aria-label="breadcrumb">
        <div className="flex items-center gap-2 text-sm text-[#64748B] mb-8">
          <Link href="/" className="hover:text-[#6366F1] transition-colors">Home</Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-[#6366F1] transition-colors">Guides</Link>
          <span>/</span>
          <span className="text-[#0F172A]">UK CV Format</span>
        </div>
      </nav>

      <div className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-sm font-medium text-indigo-600 uppercase tracking-wide">UK CV Guide</span>
          <span className="text-sm text-[#64748B]">Last updated: April 2026</span>
          <span className="text-sm text-[#64748B]">&middot; ~5 min read</span>
        </div>
        <h1 className="mt-3 text-3xl font-bold text-[#0F172A] leading-tight">
          How to Write a CV for the UK in 2026
        </h1>
        <p className="mt-4 text-[#1E293B] text-lg">
          The UK CV follows a distinct set of conventions — no photo, no age, achievement-focused, and two pages maximum. Here is the complete guide.
        </p>
      </div>

      <div className="prose prose-slate max-w-none space-y-6">
        <h2 className="text-xl font-semibold text-[#0F172A] mt-8">UK vs US job application culture</h2>
        <p className="text-slate-600 leading-relaxed">
          While both are English-speaking markets, UK CV conventions differ significantly from US norms. UK CVs are typically two pages (not one), use the term "CV" rather than "resume", and place greater emphasis on education. US resume conventions like objective statements are unusual in the UK. However, UK CVs share the US norm of excluding photos and personal details.
        </p>

        <h2 className="text-xl font-semibold text-[#0F172A] mt-8">Photo and personal details</h2>
        <p className="text-slate-600 leading-relaxed">
          Never include a photo on a UK CV — it is considered discriminatory practice and will often lead your application to be rejected. Do not include date of birth, nationality, or marital status. Your name, address (or just city and postcode), phone number, email, and LinkedIn profile are all you need.
        </p>

        <h2 className="text-xl font-semibold text-[#0F172A] mt-8">Structure and format</h2>
        <ul className="text-slate-600 space-y-2 list-disc list-inside">
          <li><strong className="text-[#0F172A]">Length:</strong> Two pages is the UK standard. One page for very junior roles. Three pages is acceptable for very senior executives.</li>
          <li><strong className="text-[#0F172A]">Personal statement:</strong> A 3-4 line profile at the top summarising who you are, your key skills, and what you are looking for is standard UK practice.</li>
          <li><strong className="text-[#0F172A]">Work experience:</strong> Reverse chronological. Include company, job title, dates, and 4-6 bullet points per role focused on specific achievements and impact.</li>
          <li><strong className="text-[#0F172A]">Education:</strong> After work experience (for experienced candidates) or before (for graduates). Include degree, institution, grade, and year.</li>
          <li><strong className="text-[#0F172A]">Skills:</strong> A skills section is helpful. Include technical skills, languages, and relevant certifications.</li>
        </ul>

        <h2 className="text-xl font-semibold text-[#0F172A] mt-8">The covering letter</h2>
        <p className="text-slate-600 leading-relaxed">
          A covering letter is expected in the UK, though for digital applications through portals it is often optional. When writing one, keep it to one page, professional in tone, and focused on why you are suited to this specific role. UK employers appreciate confidence but not arrogance. Proofread carefully — British employers pay close attention to written English.
        </p>

        <h2 className="text-xl font-semibold text-[#0F172A] mt-8">London vs other UK cities</h2>
        <p className="text-slate-600 leading-relaxed">
          London accounts for a disproportionate share of the UK's professional job market, particularly in finance, tech, media, and consulting. Edinburgh has a significant financial sector. Manchester, Bristol, and Leeds have growing tech scenes. For non-London roles, research the local market — salary expectations and competition levels differ significantly.
        </p>

        <h2 className="text-xl font-semibold text-[#0F172A] mt-8">Post-Brexit work rights</h2>
        <p className="text-slate-600 leading-relaxed">
          Since Brexit, EU citizens no longer have automatic right to work in the UK. Most EU nationals will need to apply through the UK Skilled Worker Visa route, which requires an employer sponsor, a role on the eligible occupations list, and a minimum salary threshold. Check the UK government's immigration website for current requirements.
        </p>

        <h2 className="text-xl font-semibold text-[#0F172A] mt-8">Common mistakes</h2>
        <ul className="text-slate-600 space-y-2 list-disc list-inside">
          <li>Including a photo (a major red flag to UK employers)</li>
          <li>Using a one-page American resume format</li>
          <li>Using an "objective statement" instead of a personal profile</li>
          <li>Omitting quantified achievements</li>
          <li>Spelling errors — UK English differs from US English (colour vs color, organisation vs organization)</li>
        </ul>

        <div className="mt-12 p-6 rounded-xl bg-indigo-950 border border-indigo-800">
          <p className="text-white font-semibold">Ready to adapt your CV for the UK?</p>
          <p className="mt-1 text-slate-400 text-sm">EuroCareer AI reformats your CV to UK standards — two pages, achievement-focused, no photo, in British English.</p>
          <Link href="/auth/signup" className="mt-4 inline-block bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium px-5 py-2.5 rounded-lg transition-colors">
            Try EuroCareer AI free
          </Link>
        </div>

        <div className="mt-12 border-t border-[#E2E8F0] pt-8">
          <h2 className="text-lg font-semibold text-[#0F172A] mb-4">Related guides</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Link href="/blog/ireland-cv-format" className="p-4 rounded-xl border border-[#E2E8F0] hover:border-[#6366F1] transition-colors">
              <span className="text-2xl">ie</span>
              <p className="mt-2 text-sm font-semibold text-[#0F172A]">Ireland CV Format</p>
              <p className="text-xs text-[#64748B] mt-1">Very similar to UK conventions</p>
            </Link>
            <Link href="/blog/eu-vs-us-resume" className="p-4 rounded-xl border border-[#E2E8F0] hover:border-[#6366F1] transition-colors">
              <span className="text-2xl">eu</span>
              <p className="mt-2 text-sm font-semibold text-[#0F172A]">EU vs US Resume</p>
              <p className="text-xs text-[#64748B] mt-1">Key differences explained</p>
            </Link>
            <Link href="/blog/eu-work-visa-guide" className="p-4 rounded-xl border border-[#E2E8F0] hover:border-[#6366F1] transition-colors">
              <span className="text-2xl">eu</span>
              <p className="mt-2 text-sm font-semibold text-[#0F172A]">EU Work Visa Guide</p>
              <p className="text-xs text-[#64748B] mt-1">Working in Europe legally</p>
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
