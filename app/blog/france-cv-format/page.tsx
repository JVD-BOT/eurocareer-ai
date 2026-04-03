import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'How to Write a CV for France in 2026 | EuroCareer AI',
  description: 'Everything you need to know about French CV format — photo conventions, the lettre de motivation, and how to present yourself to French recruiters.',
  openGraph: {
    title: 'How to Write a CV for France in 2026',
    description: 'Everything you need to know about French CV format and recruiter expectations.',
    url: 'https://eurocareerai.com/blog/france-cv-format',
    type: 'article',
    images: [{ url: 'https://eurocareerai.com/LOGO_NEW.png' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Write a CV for France in 2026',
    description: 'Everything you need to know about French CV format and recruiter expectations.',
  },
  alternates: {
    canonical: 'https://eurocareerai.com/blog/france-cv-format',
  },
}

export default function FranceCVFormat() {
  return (
    <article className="max-w-2xl mx-auto px-4 py-16">
      <div className="mb-8">
        <span className="text-sm font-medium text-indigo-400 uppercase tracking-wide">🇫🇷 CV Guide · France</span>
        <h1 className="mt-3 text-3xl font-bold text-white leading-tight">
          How to Write a CV for France in 2026
        </h1>
        <p className="mt-4 text-slate-400 text-lg">
          France has distinct hiring conventions that differ significantly from the UK and US. Here is what French recruiters actually expect.
        </p>
      </div>

      <div className="prose prose-invert prose-slate max-w-none">
        <h2>The French CV at a glance</h2>
        <p>
          A French CV (curriculum vitae) is typically one page for junior candidates and two pages maximum for senior professionals. It is almost always accompanied by a <em>lettre de motivation</em> — the French equivalent of a cover letter — which is taken very seriously and often given as much weight as the CV itself.
        </p>

        <h2>Photo convention</h2>
        <p>
          Including a professional headshot is standard and widely expected in France, unlike the Netherlands or Nordic countries. Use a recent, professional photo — typically placed in the top right corner of the CV. Avoid casual or informal photos.
        </p>

        <h2>What to include</h2>
        <ul>
          <li><strong>Personal details:</strong> Name, address, phone, email. Date of birth is sometimes included but not required. Nationality is optional.</li>
          <li><strong>Professional summary:</strong> A short <em>profil</em> section (3–4 lines) is common at the top.</li>
          <li><strong>Work experience:</strong> Reverse chronological. French CVs tend to include the company name, your title, dates, and bullet points of responsibilities and achievements.</li>
          <li><strong>Education:</strong> French employers place high value on educational credentials, particularly <em>grandes écoles</em> and engineering schools. List degrees clearly with institution and year.</li>
          <li><strong>Languages:</strong> Specify level (débutant / intermédiaire / courant / bilingue / langue maternelle).</li>
          <li><strong>Interests:</strong> Including a short hobbies section is more common in France than in many other EU countries and is seen as part of your overall profile.</li>
        </ul>

        <h2>The lettre de motivation</h2>
        <p>
          Do not skip this. In France, submitting a CV without a cover letter is often seen as a lack of effort or interest. The letter should be formal in tone, addressed to the hiring manager where possible, and structured as: why this company, why this role, what you bring. Keep it to one page and avoid repeating your CV verbatim.
        </p>

        <h2>Language requirements</h2>
        <p>
          French language ability is often essential — even for international companies based in Paris. Many roles require at least B2 French. International tech companies (particularly startups) sometimes hire in English only, but this is the exception rather than the rule outside major tech hubs. Be honest about your level.
        </p>

        <h2>Common mistakes</h2>
        <ul>
          <li>Sending a CV without a lettre de motivation</li>
          <li>Using an American-style resume format</li>
          <li>Omitting a photo when one is expected</li>
          <li>Being too informal in tone — French professional communication is formal</li>
        </ul>

        <div className="mt-12 p-6 rounded-xl bg-indigo-950 border border-indigo-800">
          <p className="text-white font-semibold">Ready to adapt your CV for France?</p>
          <p className="mt-1 text-slate-400 text-sm">EuroCareer AI formats your CV to French standards — photo placement, structure, tone, and more — in seconds.</p>
          <Link
            href="/auth/signup"
            className="mt-4 inline-block bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium px-5 py-2.5 rounded-lg transition-colors"
          >
            Try EuroCareer AI free →
          </Link>
        </div>
      </div>
    </article>
  )
}
