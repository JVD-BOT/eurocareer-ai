import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'How to Write a Cover Letter for European Employers',
  description: 'Cover letter conventions vary significantly across Europe. Learn what employers in Germany, France, the UK, and the Netherlands expect from your motivation letter.',
  openGraph: {
    title: 'How to Write a Cover Letter for European Employers',
    description: 'Cover letter conventions for Germany, France, UK, Netherlands, and more.',
    url: 'https://eurocareerai.com/blog/cover-letter-europe',
    type: 'article',
    images: [{ url: 'https://eurocareerai.com/LOGO_NEW.png' }],
  },
  twitter: { card: 'summary_large_image', title: 'How to Write a Cover Letter for European Employers', description: 'Cover letter conventions for Germany, France, UK, Netherlands, and more.' },
  alternates: { canonical: 'https://eurocareerai.com/blog/cover-letter-europe' },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://eurocareerai.com' },
    { '@type': 'ListItem', position: 2, name: 'Guides', item: 'https://eurocareerai.com/blog' },
    { '@type': 'ListItem', position: 3, name: 'Cover Letters in Europe', item: 'https://eurocareerai.com/blog/cover-letter-europe' },
  ],
}

export default function CoverLetterEurope() {
  return (
    <article className="max-w-2xl mx-auto px-4 py-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <nav aria-label="breadcrumb">
        <div className="flex items-center gap-2 text-sm text-[#64748B] mb-8">
          <Link href="/" className="hover:text-[#6366F1] transition-colors">Home</Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-[#6366F1] transition-colors">Guides</Link>
          <span>/</span>
          <span className="text-[#0F172A]">Cover Letters in Europe</span>
        </div>
      </nav>

      <div className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-sm font-medium text-indigo-600 uppercase tracking-wide">Cover Letter Guide</span>
          <span className="text-sm text-[#64748B]">Last updated: April 2026</span>
          <span className="text-sm text-[#64748B]">&middot; ~7 min read</span>
        </div>
        <h1 className="mt-3 text-3xl font-bold text-[#0F172A] leading-tight">
          How to Write a Cover Letter for European Employers
        </h1>
        <p className="mt-4 text-[#1E293B] text-lg">
          Cover letter conventions vary significantly across Europe. What works in Germany may not land in the Netherlands. Here is what you need to know.
        </p>
      </div>

      <div className="prose prose-slate max-w-none space-y-6">
        <h2 className="text-xl font-semibold text-[#0F172A] mt-8">Does Europe expect a cover letter?</h2>
        <p className="text-slate-600 leading-relaxed">
          Yes — in most European countries, a cover letter (also called a motivation letter or Anschreiben) is expected alongside your CV. The exceptions are Scandinavian countries and some tech-forward startups where the practice is declining. When in doubt, include one. A strong cover letter can differentiate you from candidates with similar qualifications.
        </p>

        <h2 className="text-xl font-semibold text-[#0F172A] mt-8">Country-by-country expectations</h2>
        <ul className="text-slate-600 space-y-2 list-disc list-inside">
          <li><strong className="text-[#0F172A]">Germany and Austria:</strong> Formal, structured, and expected. Address it to a named person. One page maximum. Explain specifically why you want this role at this company.</li>
          <li><strong className="text-[#0F172A]">France:</strong> The lettre de motivation is a formal requirement. French employers place significant weight on it. Tone should be respectful and formal. Handwritten letters are uncommon but occasionally requested for some traditional roles.</li>
          <li><strong className="text-[#0F172A]">Netherlands:</strong> A shorter, more direct motivatiebrief is standard. Dutch employers value honesty and directness. Skip the flowery language — get to the point.</li>
          <li><strong className="text-[#0F172A]">UK and Ireland:</strong> Covering letters are expected. Tone is professional but less formal than Germany or France. One page. Focus on your value to the employer, not just what you want from the job.</li>
          <li><strong className="text-[#0F172A]">Spain:</strong> A carta de presentación is standard. Warm and personal in tone. Demonstrating genuine interest in the company culture matters.</li>
          <li><strong className="text-[#0F172A]">Sweden and Denmark:</strong> Cover letters are common but less strictly formal. Clarity and brevity are valued. Many Scandinavian employers appreciate seeing personality.</li>
        </ul>

        <h2 className="text-xl font-semibold text-[#0F172A] mt-8">Structure of a strong European cover letter</h2>
        <ul className="text-slate-600 space-y-2 list-disc list-inside">
          <li><strong className="text-[#0F172A]">Opening:</strong> State the position you are applying for and where you saw it advertised. Show enthusiasm without being sycophantic.</li>
          <li><strong className="text-[#0F172A]">Body paragraph 1:</strong> Why you are qualified. Highlight 2-3 specific achievements or skills relevant to the role.</li>
          <li><strong className="text-[#0F172A]">Body paragraph 2:</strong> Why this company. Demonstrate research. Reference a recent initiative, product, or news item that resonates with you.</li>
          <li><strong className="text-[#0F172A]">Closing:</strong> Thank the reader, express interest in discussing further, and sign off appropriately for the country.</li>
        </ul>

        <h2 className="text-xl font-semibold text-[#0F172A] mt-8">Common mistakes across Europe</h2>
        <ul className="text-slate-600 space-y-2 list-disc list-inside">
          <li>Generic letters that could apply to any company</li>
          <li>Exceeding one page</li>
          <li>Using the wrong level of formality for the country</li>
          <li>Summarising your CV instead of complementing it</li>
          <li>Not addressing it to a specific person (always try to find the hiring manager's name)</li>
          <li>Writing in English when the job posting and company are in the local language</li>
        </ul>

        <h2 className="text-xl font-semibold text-[#0F172A] mt-8">Sign-off phrases by country</h2>
        <ul className="text-slate-600 space-y-2 list-disc list-inside">
          <li><strong className="text-[#0F172A]">Germany:</strong> Mit freundlichen Grüßen</li>
          <li><strong className="text-[#0F172A]">France:</strong> Veuillez agréer, Madame, Monsieur, l'expression de mes salutations distinguées</li>
          <li><strong className="text-[#0F172A]">Netherlands:</strong> Met vriendelijke groet</li>
          <li><strong className="text-[#0F172A]">Spain:</strong> Atentamente</li>
          <li><strong className="text-[#0F172A]">UK/Ireland:</strong> Yours sincerely (if named) or Yours faithfully (if not)</li>
        </ul>

        <div className="mt-12 p-6 rounded-xl bg-indigo-950 border border-indigo-800">
          <p className="text-white font-semibold">Generate a tailored cover letter in seconds.</p>
          <p className="mt-1 text-slate-400 text-sm">EuroCareer AI writes country-appropriate cover letters that match the tone and format expected by employers in your target market.</p>
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
              <p className="text-xs text-[#64748B] mt-1">CV guide for Germany</p>
            </Link>
            <Link href="/blog/eu-vs-us-resume" className="p-4 rounded-xl border border-[#E2E8F0] hover:border-[#6366F1] transition-colors">
              <span className="text-2xl">eu</span>
              <p className="mt-2 text-sm font-semibold text-[#0F172A]">EU vs US Resume</p>
              <p className="text-xs text-[#64748B] mt-1">Key differences explained</p>
            </Link>
            <Link href="/blog/best-job-boards-europe" className="p-4 rounded-xl border border-[#E2E8F0] hover:border-[#6366F1] transition-colors">
              <span className="text-2xl">eu</span>
              <p className="mt-2 text-sm font-semibold text-[#0F172A]">Best Job Boards</p>
              <p className="text-xs text-[#64748B] mt-1">Where to find jobs in Europe</p>
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
