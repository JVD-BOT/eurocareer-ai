import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'How to Write a CV for Sweden in 2026',
  description: 'Swedish CV conventions explained — clean design, no photo, flat hierarchy. Learn what Stockholm employers actually expect in 2026.',
  openGraph: {
    title: 'How to Write a CV for Sweden in 2026',
    description: 'Swedish CV format — minimal, photo-free, and achievement-focused.',
    url: 'https://eurocareerai.com/blog/sweden-cv-format',
    type: 'article',
    images: [{ url: 'https://eurocareerai.com/LOGO_NEW.png' }],
  },
  twitter: { card: 'summary_large_image', title: 'How to Write a CV for Sweden in 2026', description: 'Swedish CV format — minimal, photo-free, and achievement-focused.' },
  alternates: { canonical: 'https://eurocareerai.com/blog/sweden-cv-format' },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://eurocareerai.com' },
    { '@type': 'ListItem', position: 2, name: 'Guides', item: 'https://eurocareerai.com/blog' },
    { '@type': 'ListItem', position: 3, name: 'Sweden CV Format', item: 'https://eurocareerai.com/blog/sweden-cv-format' },
  ],
}

export default function SwedenCVFormat() {
  return (
    <article className="max-w-2xl mx-auto px-4 py-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <nav aria-label="breadcrumb">
        <div className="flex items-center gap-2 text-sm text-[#7A7F94] mb-8">
          <Link href="/" className="hover:text-[#636DF5] transition-colors">Home</Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-[#636DF5] transition-colors">Guides</Link>
          <span>/</span>
          <span className="text-[#0F1629]">Sweden CV Format</span>
        </div>
      </nav>

      <div className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-sm font-medium text-indigo-600 uppercase tracking-wide">SE CV Guide</span>
          <span className="text-sm text-[#7A7F94]">Last updated: April 2026</span>
          <span className="text-sm text-[#7A7F94]">&middot; ~5 min read</span>
        </div>
        <h1 className="mt-3 text-3xl font-bold text-[#0F1629] leading-tight">
          How to Write a CV for Sweden in 2026
        </h1>
        <p className="mt-4 text-[#3D4255] text-lg">
          Sweden's flat workplace hierarchy and emphasis on equality shapes its CV conventions. Here is what Stockholm and Gothenburg employers actually expect.
        </p>
      </div>

      <div className="prose prose-slate max-w-none space-y-6">
        <h2 className="text-xl font-semibold text-[#0F1629] mt-8">Swedish workplace culture</h2>
        <p className="text-slate-600 leading-relaxed">
          Sweden has one of the most egalitarian workplace cultures in the world. Lagom — the concept of "just the right amount" — applies to everything from portion sizes to self-promotion. Over-selling yourself will work against you. Swedish employers value results, collaborative spirit, and work-life balance. Your CV should reflect this: factual, achievement-focused, and appropriately modest.
        </p>

        <h2 className="text-xl font-semibold text-[#0F1629] mt-8">Photo and personal details</h2>
        <p className="text-slate-600 leading-relaxed">
          Photos are not expected on Swedish CVs — in fact, many Swedish employers actively prefer not to receive them due to anti-discrimination considerations. Include your name, email, phone number, LinkedIn profile, and city. Date of birth and personal ID numbers are not needed.
        </p>

        <h2 className="text-xl font-semibold text-[#0F1629] mt-8">Structure and format</h2>
        <ul className="text-slate-600 space-y-2 list-disc list-inside">
          <li><strong className="text-[#0F1629]">Length:</strong> One to two pages. Swedes value brevity. Every sentence should earn its place.</li>
          <li><strong className="text-[#0F1629]">Layout:</strong> Clean and minimal. Good typography, white space, and clear section headers. Avoid cluttered designs.</li>
          <li><strong className="text-[#0F1629]">Work experience:</strong> Reverse chronological. Quantify your achievements where possible. Show impact, not just responsibilities.</li>
          <li><strong className="text-[#0F1629]">Education:</strong> List formal qualifications. Sweden has excellent universities — local degrees carry weight, but international qualifications are widely respected.</li>
          <li><strong className="text-[#0F1629]">Languages:</strong> Swedish proficiency is a significant advantage for most roles. English is almost universal in Swedish professional environments. List both with CEFR levels.</li>
        </ul>

        <h2 className="text-xl font-semibold text-[#0F1629] mt-8">The cover letter</h2>
        <p className="text-slate-600 leading-relaxed">
          A cover letter (personligt brev) is generally expected. Keep it to one page and focus on three things: why you are qualified, why you want this specific role, and why you want to work at this specific company. Swedish employers appreciate authenticity and directness. Show your personality — Swedish workplace culture values genuine people, not polished performances.
        </p>

        <h2 className="text-xl font-semibold text-[#0F1629] mt-8">Sweden's tech and startup scene</h2>
        <p className="text-slate-600 leading-relaxed">
          Stockholm is home to Spotify, Klarna, King, and dozens of other major tech companies. The city is sometimes called "the tech capital of Europe" and consistently produces more billion-dollar companies per capita than any other region outside Silicon Valley. For tech roles, English CVs are standard and often preferred.
        </p>

        <h2 className="text-xl font-semibold text-[#0F1629] mt-8">Common mistakes</h2>
        <ul className="text-slate-600 space-y-2 list-disc list-inside">
          <li>Including a photo (not expected or desired in Sweden)</li>
          <li>Over-selling yourself — Swedish culture values modesty</li>
          <li>Ignoring the importance of Swedish language skills for non-tech roles</li>
          <li>Sending a generic personligt brev</li>
          <li>Using a CV clearly designed for another market</li>
        </ul>

        <div className="mt-12 p-6 rounded-xl bg-indigo-950 border border-indigo-800">
          <p className="text-white font-semibold">Ready to adapt your CV for Sweden?</p>
          <p className="mt-1 text-slate-400 text-sm">EuroCareer AI reformats your CV to Swedish standards — clean, photo-free, and appropriately direct.</p>
          <Link href="/auth/signup" className="mt-4 inline-block bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium px-5 py-2.5 rounded-lg transition-colors">
            Try EuroCareer AI free
          </Link>
        </div>

        <div className="mt-12 border-t border-[#E2E1DC] pt-8">
          <h2 className="text-lg font-semibold text-[#0F1629] mb-4">Related guides</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Link href="/blog/denmark-cv-format" className="p-4 rounded-xl border border-[#E2E1DC] hover:border-[#636DF5] transition-colors">
              <span className="text-2xl">dk</span>
              <p className="mt-2 text-sm font-semibold text-[#0F1629]">Denmark CV Format</p>
              <p className="text-xs text-[#7A7F94] mt-1">Similar Scandinavian approach</p>
            </Link>
            <Link href="/blog/netherlands-cv-format" className="p-4 rounded-xl border border-[#E2E1DC] hover:border-[#636DF5] transition-colors">
              <span className="text-2xl">nl</span>
              <p className="mt-2 text-sm font-semibold text-[#0F1629]">Netherlands CV Format</p>
              <p className="text-xs text-[#7A7F94] mt-1">Another direct, flat-hierarchy culture</p>
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
