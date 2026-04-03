import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'How to Write a CV for the Netherlands in 2026 | EuroCareer AI',
  description: 'A complete guide to Dutch CV format, structure, and recruiter expectations. Learn what to include, what to skip, and how to stand out in the Netherlands job market.',
  openGraph: {
    title: 'How to Write a CV for the Netherlands in 2026',
    description: 'A complete guide to Dutch CV format, structure, and recruiter expectations.',
    url: 'https://eurocareerai.com/blog/netherlands-cv-format',
    type: 'article',
    images: [{ url: 'https://eurocareerai.com/LOGO_NEW.png' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Write a CV for the Netherlands in 2026',
    description: 'A complete guide to Dutch CV format, structure, and recruiter expectations.',
  },
  alternates: {
    canonical: 'https://eurocareerai.com/blog/netherlands-cv-format',
  },
}

export default function NetherlandsCVFormat() {
  return (
    <article className="max-w-2xl mx-auto px-4 py-16">
      <div className="mb-8">
        <span className="text-sm font-medium text-indigo-400 uppercase tracking-wide">🇳🇱 CV Guide · Netherlands</span>
        <h1 className="mt-3 text-3xl font-bold text-white leading-tight">
          How to Write a CV for the Netherlands in 2026
        </h1>
        <p className="mt-4 text-slate-400 text-lg">
          The Dutch job market is one of the most international in Europe. Here is exactly how to format your CV to meet local expectations.
        </p>
      </div>

      <div className="prose prose-invert prose-slate max-w-none">
        <h2>Dutch CV basics</h2>
        <p>
          Dutch recruiters expect a clean, concise CV — typically one to two pages. Unlike Germany or France, the Netherlands has no strong convention around including a photo, so it is optional. Most candidates omit it unless applying to client-facing roles.
        </p>

        <h2>What to include</h2>
        <ul>
          <li><strong>Personal details:</strong> Name, city (not full address), phone, email, LinkedIn URL. Nationality is optional.</li>
          <li><strong>Professional summary:</strong> 3–4 sentences. Direct and results-focused. Dutch culture values clarity — avoid vague buzzwords.</li>
          <li><strong>Work experience:</strong> Reverse chronological. Use bullet points with measurable outcomes where possible.</li>
          <li><strong>Education:</strong> Degree, institution, graduation year. Dutch employers value formal qualifications.</li>
          <li><strong>Skills:</strong> Language skills are especially important. List Dutch level honestly — even A2/B1 is worth including if you are learning.</li>
        </ul>

        <h2>Language expectations</h2>
        <p>
          Many Dutch companies operate in English, particularly in Amsterdam, Rotterdam, and the tech sector. However, fluency in Dutch significantly widens your options, especially for roles outside major cities or in government, healthcare, and education. Always specify your Dutch level using the CEFR scale (A1–C2).
        </p>

        <h2>Format and length</h2>
        <p>
          Aim for one page if you have under eight years of experience. Two pages is acceptable for senior roles. Use a clean, minimal layout — the Dutch tend to be direct and functional. Avoid overly designed CVs with multiple columns, heavy graphics, or coloured backgrounds unless you are in a creative field.
        </p>

        <h2>Common mistakes to avoid</h2>
        <ul>
          <li>Using a US-style resume format (objective statement, references available on request)</li>
          <li>Including a photo when it is not expected</li>
          <li>Omitting language skills entirely</li>
          <li>Being vague about work authorisation — Dutch employers need to know if you require visa sponsorship</li>
        </ul>

        <h2>Work authorisation note</h2>
        <p>
          If you are an EU/EEA citizen, you have the right to work in the Netherlands without a visa. If you are a non-EU national, you will need a work permit — and your employer must apply for it. Be transparent about your status on your CV or cover letter. Many Dutch employers are experienced with this process, particularly in tech and engineering.
        </p>

        <div className="mt-12 p-6 rounded-xl bg-indigo-950 border border-indigo-800">
          <p className="text-white font-semibold">Ready to adapt your CV for the Netherlands?</p>
          <p className="mt-1 text-slate-400 text-sm">EuroCareer AI adapts your CV to Dutch format in seconds — photo norms, length, structure, and more.</p>
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
