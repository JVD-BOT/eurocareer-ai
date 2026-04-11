import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'How to Write a CV for the Netherlands in 2026',
  description: 'Dutch CV conventions explained — direct, photo-free, and achievement-focused. Learn what Amsterdam employers actually expect in 2026.',
  openGraph: {
    title: 'How to Write a CV for the Netherlands in 2026',
    description: 'Dutch CV format — direct, no photo, and concise. What Dutch employers expect.',
    url: 'https://eurocareerai.com/blog/netherlands-cv-format',
    type: 'article',
    images: [{ url: 'https://eurocareerai.com/LOGO_NEW.png' }],
  },
  twitter: { card: 'summary_large_image', title: 'How to Write a CV for the Netherlands in 2026', description: 'Dutch CV format — direct, no photo, and concise.' },
  alternates: { canonical: 'https://eurocareerai.com/blog/netherlands-cv-format' },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://eurocareerai.com' },
    { '@type': 'ListItem', position: 2, name: 'Guides', item: 'https://eurocareerai.com/blog' },
    { '@type': 'ListItem', position: 3, name: 'Netherlands CV Format', item: 'https://eurocareerai.com/blog/netherlands-cv-format' },
  ],
}

export default function NetherlandsCVFormat() {
  return (
    <article className="max-w-2xl mx-auto px-4 py-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <nav aria-label="breadcrumb">
        <div className="flex items-center gap-2 text-sm text-[#7A7F94] mb-8">
          <Link href="/" className="hover:text-[#636DF5] transition-colors">Home</Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-[#636DF5] transition-colors">Guides</Link>
          <span>/</span>
          <span className="text-[#0F1629]">Netherlands CV Format</span>
        </div>
      </nav>

      <div className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-sm font-medium text-indigo-600 uppercase tracking-wide">NL CV Guide</span>
          <span className="text-sm text-[#7A7F94]">Last updated: April 2026</span>
          <span className="text-sm text-[#7A7F94]">&middot; ~5 min read</span>
        </div>
        <h1 className="mt-3 text-3xl font-bold text-[#0F1629] leading-tight">
          How to Write a CV for the Netherlands in 2026
        </h1>
        <p className="mt-4 text-[#3D4255] text-lg">
          The Dutch are famous for directness — and their CVs reflect this. Here is what Amsterdam and Rotterdam employers actually look for.
        </p>
      </div>

      <div className="prose prose-slate max-w-none space-y-6">
        <h2 className="text-xl font-semibold text-[#0F1629] mt-8">Dutch workplace culture</h2>
        <p className="text-slate-600 leading-relaxed">
          The Netherlands has a pragmatic, egalitarian workplace culture. Dutch employers value honesty, directness, and results. Over-promising or excessive self-promotion can actually work against you. A clear, factual, achievement-focused CV will always outperform a flowery, vague one in the Dutch market.
        </p>

        <h2 className="text-xl font-semibold text-[#0F1629] mt-8">Photo and personal details</h2>
        <p className="text-slate-600 leading-relaxed">
          Photos are increasingly uncommon on Dutch CVs due to anti-discrimination laws and cultural norms. Many Dutch recruiters actually prefer to receive CVs without photos. Do not include date of birth or other personal details beyond your name, email, phone number, and LinkedIn profile. Keep it to the basics.
        </p>

        <h2 className="text-xl font-semibold text-[#0F1629] mt-8">Structure and format</h2>
        <ul className="text-slate-600 space-y-2 list-disc list-inside">
          <li><strong className="text-[#0F1629]">Length:</strong> One to two pages maximum. Dutch employers do not have patience for padding. Every line should add value.</li>
          <li><strong className="text-[#0F1629]">Layout:</strong> Clean, minimal, and well-structured. The simpler the better. Avoid decorative elements.</li>
          <li><strong className="text-[#0F1629]">Work experience:</strong> Reverse chronological with specific, quantified achievements. "Increased sales by 23%" beats "responsible for sales".</li>
          <li><strong className="text-[#0F1629]">Education:</strong> List your highest qualification prominently. Dutch employers value degrees but are equally impressed by practical experience.</li>
          <li><strong className="text-[#0F1629]">Languages:</strong> Dutch fluency is a significant advantage for most roles. English is near-universal in Dutch business. List both with CEFR levels.</li>
        </ul>

        <h2 className="text-xl font-semibold text-[#0F1629] mt-8">The motivatiebrief</h2>
        <p className="text-slate-600 leading-relaxed">
          A short cover letter (motivatiebrief) is typically expected. Keep it to one page and be direct. Dutch employers appreciate genuine enthusiasm but are put off by excessive formality or sales language. Explain specifically why you want this role at this company in no more than three paragraphs.
        </p>

        <h2 className="text-xl font-semibold text-[#0F1629] mt-8">Working in the Netherlands as a non-EU national</h2>
        <p className="text-slate-600 leading-relaxed">
          The Netherlands has a well-developed Highly Skilled Migrant (Kennismigrant) visa programme that allows internationally recruited talent to work in the country. Your Dutch employer must be recognised as a sponsor. The salary threshold varies by age and is updated annually.
        </p>

        <h2 className="text-xl font-semibold text-[#0F1629] mt-8">Common mistakes</h2>
        <ul className="text-slate-600 space-y-2 list-disc list-inside">
          <li>Including a photo (increasingly off-putting in the Netherlands)</li>
          <li>Using vague, responsibility-focused language instead of specific achievements</li>
          <li>Sending a generic motivatiebrief</li>
          <li>Exceeding two pages</li>
          <li>Not mentioning Dutch language skills if you have any</li>
        </ul>

        <div className="mt-12 p-6 rounded-xl bg-indigo-950 border border-indigo-800">
          <p className="text-white font-semibold">Ready to adapt your CV for the Netherlands?</p>
          <p className="mt-1 text-slate-400 text-sm">EuroCareer AI formats your CV to Dutch standards — direct, achievement-focused, and appropriately brief.</p>
          <Link href="/auth/signup" className="mt-4 inline-block bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium px-5 py-2.5 rounded-lg transition-colors">
            Try EuroCareer AI free
          </Link>
        </div>

        <div className="mt-12 border-t border-[#E2E1DC] pt-8">
          <h2 className="text-lg font-semibold text-[#0F1629] mb-4">Related guides</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Link href="/blog/netherlands-job-search" className="p-4 rounded-xl border border-[#E2E1DC] hover:border-[#636DF5] transition-colors">
              <span className="text-2xl">nl</span>
              <p className="mt-2 text-sm font-semibold text-[#0F1629]">Job Search in Netherlands</p>
              <p className="text-xs text-[#7A7F94] mt-1">Where to find Dutch jobs</p>
            </Link>
            <Link href="/blog/denmark-cv-format" className="p-4 rounded-xl border border-[#E2E1DC] hover:border-[#636DF5] transition-colors">
              <span className="text-2xl">dk</span>
              <p className="mt-2 text-sm font-semibold text-[#0F1629]">Denmark CV Format</p>
              <p className="text-xs text-[#7A7F94] mt-1">Similar direct culture</p>
            </Link>
            <Link href="/blog/eu-work-visa-guide" className="p-4 rounded-xl border border-[#E2E1DC] hover:border-[#636DF5] transition-colors">
              <span className="text-2xl">eu</span>
              <p className="mt-2 text-sm font-semibold text-[#0F1629]">EU Work Visa Guide</p>
              <p className="text-xs text-[#7A7F94] mt-1">The Kennismigrant visa explained</p>
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
