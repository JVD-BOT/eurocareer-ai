import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'How to Write a CV for Denmark in 2026',
  description: 'Danish CV conventions explained — flat hierarchy, no photo, and a direct tone. Learn what Danish employers actually expect in 2026.',
  openGraph: {
    title: 'How to Write a CV for Denmark in 2026',
    description: 'Danish CV format — direct, informal, and photo-free. What Copenhagen employers expect.',
    url: 'https://eurocareerai.com/blog/denmark-cv-format',
    type: 'article',
    images: [{ url: 'https://eurocareerai.com/LOGO_NEW.png' }],
  },
  twitter: { card: 'summary_large_image', title: 'How to Write a CV for Denmark in 2026', description: 'Danish CV format — direct, informal, and photo-free.' },
  alternates: { canonical: 'https://eurocareerai.com/blog/denmark-cv-format' },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://eurocareerai.com' },
    { '@type': 'ListItem', position: 2, name: 'Guides', item: 'https://eurocareerai.com/blog' },
    { '@type': 'ListItem', position: 3, name: 'Denmark CV Format', item: 'https://eurocareerai.com/blog/denmark-cv-format' },
  ],
}

export default function DenmarkCVFormat() {
  return (
    <article className="max-w-2xl mx-auto px-4 py-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <nav aria-label="breadcrumb">
        <div className="flex items-center gap-2 text-sm text-[#7A7F94] mb-8">
          <Link href="/" className="hover:text-[#636DF5] transition-colors">Home</Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-[#636DF5] transition-colors">Guides</Link>
          <span>/</span>
          <span className="text-[#0F1629]">Denmark CV Format</span>
        </div>
      </nav>

      <div className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-sm font-medium text-indigo-600 uppercase tracking-wide">DK CV Guide</span>
          <span className="text-sm text-[#7A7F94]">Last updated: April 2026</span>
          <span className="text-sm text-[#7A7F94]">&middot; ~5 min read</span>
        </div>
        <h1 className="mt-3 text-3xl font-bold text-[#0F1629] leading-tight">
          How to Write a CV for Denmark in 2026
        </h1>
        <p className="mt-4 text-[#3D4255] text-lg">
          Danish CV conventions are shaped by Scandinavia's flat hierarchy culture. Here is what Copenhagen employers actually look for.
        </p>
      </div>

      <div className="prose prose-slate max-w-none space-y-6">
        <h2 className="text-xl font-semibold text-[#0F1629] mt-8">The Danish workplace culture</h2>
        <p className="text-slate-600 leading-relaxed">
          Denmark has one of the flattest workplace hierarchies in the world. The concept of Janteloven — the cultural norm against claiming to be better than others — means that Danish CVs tend to be modest, factual, and direct. Avoid excessive self-promotion. Focus on what you have done, not superlatives about how great you are.
        </p>

        <h2 className="text-xl font-semibold text-[#0F1629] mt-8">Photo and personal details</h2>
        <p className="text-slate-600 leading-relaxed">
          Unlike Germany or Austria, photos are not common on Danish CVs and are often omitted. Anti-discrimination laws make many Danish employers cautious about receiving photos. Your name, email, phone number, and LinkedIn profile are sufficient. Date of birth and address are optional.
        </p>

        <h2 className="text-xl font-semibold text-[#0F1629] mt-8">Structure and format</h2>
        <ul className="text-slate-600 space-y-2 list-disc list-inside">
          <li><strong className="text-[#0F1629]">Length:</strong> One to two pages. Danes appreciate brevity. Two pages is the maximum for most roles.</li>
          <li><strong className="text-[#0F1629]">Layout:</strong> Clean and professional. A simple, well-structured document beats elaborate design. White space matters.</li>
          <li><strong className="text-[#0F1629]">Work experience:</strong> Reverse chronological. Include company, role, dates, and 2-3 bullet points per role describing what you actually did and achieved.</li>
          <li><strong className="text-[#0F1629]">Education:</strong> Include degrees and relevant professional training. Danish employers value continuous learning.</li>
          <li><strong className="text-[#0F1629]">Skills:</strong> Include language skills (Danish is a significant advantage) and technical skills relevant to the role.</li>
        </ul>

        <h2 className="text-xl font-semibold text-[#0F1629] mt-8">Language</h2>
        <p className="text-slate-600 leading-relaxed">
          For Danish companies, submitting your CV in Danish is highly advantageous even if the job description is in English. Many Danish employers — especially outside Copenhagen — prefer Danish. For international companies in Denmark, an English CV is standard. When in doubt, check the language of the job posting.
        </p>

        <h2 className="text-xl font-semibold text-[#0F1629] mt-8">Cover letter in Denmark</h2>
        <p className="text-slate-600 leading-relaxed">
          A cover letter (ansøgning) is generally expected in Denmark. It should be concise — one page maximum — and focus on your motivation for this specific role. Danes appreciate authenticity over sales-speak. Explain why you are genuinely interested in the company and role, and what you will bring to the team.
        </p>

        <h2 className="text-xl font-semibold text-[#0F1629] mt-8">Common mistakes</h2>
        <ul className="text-slate-600 space-y-2 list-disc list-inside">
          <li>Including a photo (uncommon and can be off-putting)</li>
          <li>Over-selling yourself — Danish culture values modesty</li>
          <li>Sending a generic cover letter</li>
          <li>Ignoring the importance of Danish language skills</li>
          <li>Using a template clearly designed for the US or UK market</li>
        </ul>

        <div className="mt-12 p-6 rounded-xl bg-indigo-950 border border-indigo-800">
          <p className="text-white font-semibold">Ready to adapt your CV for Denmark?</p>
          <p className="mt-1 text-slate-400 text-sm">EuroCareer AI reformats your CV to Danish standards — tone, structure, and format adjusted automatically.</p>
          <Link href="/auth/signup" className="mt-4 inline-block bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium px-5 py-2.5 rounded-lg transition-colors">
            Try EuroCareer AI free
          </Link>
        </div>

        <div className="mt-12 border-t border-[#E2E1DC] pt-8">
          <h2 className="text-lg font-semibold text-[#0F1629] mb-4">Related guides</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Link href="/blog/sweden-cv-format" className="p-4 rounded-xl border border-[#E2E1DC] hover:border-[#636DF5] transition-colors">
              <span className="text-2xl">se</span>
              <p className="mt-2 text-sm font-semibold text-[#0F1629]">Sweden CV Format</p>
              <p className="text-xs text-[#7A7F94] mt-1">Similar Scandinavian conventions</p>
            </Link>
            <Link href="/blog/netherlands-cv-format" className="p-4 rounded-xl border border-[#E2E1DC] hover:border-[#636DF5] transition-colors">
              <span className="text-2xl">nl</span>
              <p className="mt-2 text-sm font-semibold text-[#0F1629]">Netherlands CV Format</p>
              <p className="text-xs text-[#7A7F94] mt-1">Another direct-style culture</p>
            </Link>
            <Link href="/blog/eu-vs-us-resume" className="p-4 rounded-xl border border-[#E2E1DC] hover:border-[#636DF5] transition-colors">
              <span className="text-2xl">eu</span>
              <p className="mt-2 text-sm font-semibold text-[#0F1629]">EU vs US Resume</p>
              <p className="text-xs text-[#7A7F94] mt-1">Key differences explained</p>
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
