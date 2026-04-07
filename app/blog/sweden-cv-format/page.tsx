import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'How to Write a CV for Sweden in 2026 | EuroCareer AI',
  description: 'Learn what Swedish recruiters expect in a CV — minimal design, humble tone, and the specific format conventions that set you apart in the Nordic job market.',
  openGraph: {
    title: 'How to Write a CV for Sweden in 2026',
    description: 'What Swedish recruiters expect in a CV — format, tone, and Nordic conventions explained.',
    url: 'https://eurocareerai.com/blog/sweden-cv-format',
    type: 'article',
    images: [{ url: 'https://eurocareerai.com/LOGO_NEW.png' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Write a CV for Sweden in 2026',
    description: 'What Swedish recruiters expect in a CV — format, tone, and Nordic conventions explained.',
  },
  alternates: {
    canonical: 'https://eurocareerai.com/blog/sweden-cv-format',
  },
}

export default function SwedenCVFormat() {
  return (
    <article className="max-w-2xl mx-auto px-4 py-16">
      <div className="mb-8">
        <span className="text-sm font-medium text-indigo-400 uppercase tracking-wide">🇸🇪 CV Guide · Sweden</span>
        <h1 className="mt-3 text-3xl font-bold text-white leading-tight">
          How to Write a CV for Sweden in 2026
        </h1>
        <p className="mt-4 text-slate-400 text-lg">
          Sweden has a distinctive workplace culture that directly shapes what recruiters expect to see in a CV. Here is how to get it right.
        </p>
      </div>

      <div className="prose prose-invert prose-slate max-w-none">
        <h2>Swedish CV culture: lagom</h2>
        <p>
          The Swedish concept of <em>lagom</em> — meaning just the right amount — applies directly to job applications. Swedish CVs are expected to be modest, clear, and free of self-promotion. Avoid language like "exceptional achiever" or "top performer." Present your experience factually and let the work speak for itself.
        </p>

        <h2>Format and length</h2>
        <p>
          One to two pages is standard. Swedish CVs are clean and minimal — plenty of white space, clear section headers, and a simple font. Flashy or heavily designed CVs can work against you in more traditional industries. For creative roles, a clean portfolio link is more effective than a designed CV.
        </p>

        <h2>Photo convention</h2>
        <p>
          Including a photo is common but not required. If you include one, use a professional but approachable headshot. Sweden has strong anti-discrimination norms in hiring, so some companies actively prefer anonymous applications.
        </p>

        <h2>What to include</h2>
        <ul>
          <li><strong>Contact details:</strong> Name, city, phone, email, LinkedIn. No full address required.</li>
          <li><strong>Summary:</strong> Optional but useful. Keep it factual — two to three sentences about your background and what you are looking for.</li>
          <li><strong>Work experience:</strong> Reverse chronological. Include employer, title, dates, and 3–4 bullet points of responsibilities and outcomes. Avoid inflating your role.</li>
          <li><strong>Education:</strong> Degree, institution, years. Swedish employers respect formal education but do not over-index on it compared to France.</li>
          <li><strong>Language skills:</strong> Swedish proficiency is a significant differentiator. Even intermediate Swedish shows genuine interest. Specify level using CEFR (A1–C2).</li>
          <li><strong>Personal interests:</strong> Common to include and seen positively — it shows you are a whole person, which aligns with Swedish work-life balance values.</li>
        </ul>

        <h2>Swedish workplace values to signal</h2>
        <p>
          Swedish employers value flat hierarchies, collaboration, and independence. In your experience bullets, highlight times you worked cross-functionally, took initiative without being told, or improved a process. Avoid implying you only performed tasks under direction.
        </p>

        <h2>Language requirements</h2>
        <p>
          Many Swedish companies — especially in tech, fintech, and startups — operate primarily in English. But Swedish fluency opens up far more roles, particularly in the public sector, healthcare, retail, and mid-sized companies outside Stockholm. If you are actively learning Swedish, mention it.
        </p>

        <h2>Common mistakes</h2>
        <ul>
          <li>Over-selling yourself — this reads as arrogant in Swedish culture</li>
          <li>Using aggressive US-style action verbs ("crushed," "dominated," "slayed")</li>
          <li>Leaving out Swedish language level entirely</li>
          <li>Sending a very long CV — two pages is the hard limit</li>
        </ul>

        <div className="mt-12 p-6 rounded-xl bg-indigo-950 border border-indigo-800">
          <p className="text-white font-semibold">Ready to adapt your CV for Sweden?</p>
          <p className="mt-1 text-slate-400 text-sm">EuroCareer AI rewrites your CV to match Swedish tone, format, and recruiter expectations — in seconds.</p>
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
