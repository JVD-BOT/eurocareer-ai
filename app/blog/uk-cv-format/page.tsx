import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'How to Write a CV for the UK in 2026 | EuroCareer AI',
  description: 'UK CV format explained — what to include, what to skip, visa requirements, and how to stand out to British recruiters in 2026.',
  openGraph: {
    title: 'How to Write a CV for the UK in 2026',
    description: 'UK CV format explained — what to include, what to skip, and how to stand out.',
    url: 'https://eurocareerai.com/blog/uk-cv-format',
    type: 'article',
    images: [{ url: 'https://eurocareerai.com/LOGO_NEW.png' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Write a CV for the UK in 2026',
    description: 'UK CV format explained — what to include, what to skip, and how to stand out.',
  },
  alternates: {
    canonical: 'https://eurocareerai.com/blog/uk-cv-format',
  },
}

export default function UKCVFormat() {
  return (
    <article className="max-w-2xl mx-auto px-4 py-16">
      <div className="mb-8">
        <span className="text-sm font-medium text-indigo-400 uppercase tracking-wide">🇬🇧 CV Guide · United Kingdom</span>
        <h1 className="mt-3 text-3xl font-bold text-white leading-tight">
          How to Write a CV for the UK in 2026
        </h1>
        <p className="mt-4 text-slate-400 text-lg">
          The UK uses a "CV" not a "resume" — and while it shares similarities with US formats, there are key differences that matter to British recruiters.
        </p>
      </div>

      <div className="prose prose-invert prose-slate max-w-none">
        <h2>CV vs resume: what's the difference?</h2>
        <p>
          In the UK, always call it a CV — using the word "resume" immediately marks you as unfamiliar with the local market. Beyond the terminology, UK CVs tend to be more detailed than US resumes, typically two pages, with a personal profile section at the top rather than an objective statement.
        </p>

        <h2>Format and length</h2>
        <p>
          Two pages is the standard for most roles. One page is acceptable for very junior candidates. Three pages is occasionally acceptable for highly senior or academic roles. Use a clean, professional layout — readable fonts, clear section headers, and logical flow.
        </p>

        <h2>No photo required</h2>
        <p>
          Do not include a photo on a UK CV. Unlike France or Germany, photos are not expected and can actually create issues due to anti-discrimination hiring practices. Leave it out entirely.
        </p>

        <h2>What to include</h2>
        <ul>
          <li><strong>Personal details:</strong> Name, phone, email, LinkedIn, and city (not full address). Include your right to work status if you are not a UK/EU citizen.</li>
          <li><strong>Personal profile:</strong> 3–5 sentences summarising who you are, your key skills, and what you are looking for. This replaces the US-style objective statement.</li>
          <li><strong>Work experience:</strong> Reverse chronological. Job title, company, dates, and 3–5 bullet points per role. Use strong action verbs and quantify outcomes where possible.</li>
          <li><strong>Education:</strong> Degree, university, years, grade if strong (e.g. First Class Honours, 2:1). A-levels optional unless you are a recent graduate.</li>
          <li><strong>Skills:</strong> Technical skills, software, languages. Keep it relevant.</li>
          <li><strong>References:</strong> Do not include "references available on request" — this is outdated. Leave references off entirely.</li>
        </ul>

        <h2>Right to work — post-Brexit reality</h2>
        <p>
          Since Brexit, EU/EEA citizens no longer have automatic right to work in the UK. You will need either settled/pre-settled status (if you were in the UK before June 2021) or a Skilled Worker visa sponsored by your employer. UK employers are experienced with this process, but you should be upfront about your visa requirements early in the process to avoid wasted time on both sides.
        </p>

        <h2>British CV tone</h2>
        <p>
          UK CVs sit between the formality of French CVs and the directness of Dutch ones. Professional but not stuffy. Confident but not boastful. Subtle humour is appreciated in cover letters but keep CVs factual. Avoid Americanisms — spell "colour" not "color," "organised" not "organized."
        </p>

        <h2>Common mistakes</h2>
        <ul>
          <li>Including a photo</li>
          <li>Writing "resume" instead of "CV"</li>
          <li>Using US spelling throughout</li>
          <li>Including date of birth or marital status — these are not expected</li>
          <li>Going over two pages without good reason</li>
        </ul>

        <div className="mt-12 p-6 rounded-xl bg-indigo-950 border border-indigo-800">
          <p className="text-white font-semibold">Ready to adapt your CV for the UK?</p>
          <p className="mt-1 text-slate-400 text-sm">EuroCareer AI adapts your CV to UK standards — format, tone, right-to-work notes, and more — in seconds.</p>
          <Link
            href="/auth/signup"
            className="mt-4 inline-block bg-[#6366f1] hover:bg-[#4f46e5] text-white text-sm font-medium px-5 py-2.5 rounded-lg transition-colors"
          >
            Try EuroCareer AI free →
          </Link>
        </div>
      </div>
    </article>
  )
}
