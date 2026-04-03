import { Metadata } from 'next'

import Link from 'next/link'



export const metadata: Metadata = {

  title: 'How to Write a CV for Denmark in 2026 | EuroCareer AI',

  description: 'Danish CV conventions — minimal design, flat hierarchy culture, and what Copenhagen recruiters expect from international applicants in 2026.',

  openGraph: {

    title: 'How to Write a CV for Denmark in 2026',

    description: 'Danish CV format — minimal design, flat hierarchy culture, and Copenhagen recruiter expectations.',

    url: 'https://eurocareerai.com/blog/denmark-cv-format',

    type: 'article',

    images: [{ url: 'https://eurocareerai.com/LOGO_NEW.png' }],

  },

  twitter: { card: 'summary_large_image', title: 'How to Write a CV for Denmark in 2026', description: 'Danish CV format — minimal design, flat hierarchy culture, and Copenhagen recruiter expectations.' },

  alternates: { canonical: 'https://eurocareerai.com/blog/denmark-cv-format' },

}



export default function DenmarkCVFormat() {

  return (

    <article className="max-w-2xl mx-auto px-4 py-16">

      <div className="mb-2 text-sm text-slate-500">

        <Link href="/" className="hover:text-white transition-colors">Home</Link>

        <span className="mx-2">/</span>

        <Link href="/blog" className="hover:text-white transition-colors">Guides</Link>

        <span className="mx-2">/</span>

        <span className="text-slate-400">Denmark CV Format</span>

      </div>



      <div className="mb-8 mt-4">

        <span className="text-sm font-medium text-indigo-400 uppercase tracking-wide">🇩🇰 CV Guide</span>

        <h1 className="mt-3 text-3xl font-bold text-white leading-tight">

          How to Write a CV for Denmark in 2026

        </h1>

        <p className="mt-4 text-slate-400 text-lg">

          Denmark has a highly egalitarian workplace culture that shows up directly in what recruiters expect to see in a CV.

        </p>

      </div>



      <div className="prose prose-invert prose-slate max-w-none space-y-6">

        <h2 className="text-xl font-semibold text-white mt-8">Danish CV culture</h2>

        <p className="text-slate-400 leading-relaxed">

          Danish workplace culture is characterised by flat hierarchies, autonomy, and work-life balance — concepts that should come through in how you present yourself. Like Sweden, the tone should be factual and modest rather than promotional. Danish recruiters respond to substance over style.

        </p>



        <h2 className="text-xl font-semibold text-white mt-8">Format and length</h2>

        <p className="text-slate-400 leading-relaxed">

          One to two pages. Clean, minimal layout. Danish CVs are often shorter than German or French ones — clarity and relevance matter more than completeness. A one-page CV for someone with five to eight years of experience is perfectly acceptable.

        </p>



        <h2 className="text-xl font-semibold text-white mt-8">Photo convention</h2>

        <p className="text-slate-400 leading-relaxed">

          Including a professional photo is common in Denmark. It is not mandatory, but many candidates include one. Use a clean, approachable headshot. Like Sweden, anonymous applications are sometimes used by progressive companies to reduce bias — but this is not the norm.

        </p>



        <h2 className="text-xl font-semibold text-white mt-8">What to include</h2>

        <ul className="text-slate-400 space-y-2 list-disc list-inside">

          <li><strong className="text-white">Contact details:</strong> Name, city, phone, email, LinkedIn. No full address required.</li>

          <li><strong className="text-white">Summary:</strong> 2–3 lines, factual. Who you are and what you bring. No buzzwords.</li>

          <li><strong className="text-white">Work experience:</strong> Reverse chronological. Titles, companies, dates, 3–4 bullet points per role. Focus on outcomes and initiative.</li>

          <li><strong className="text-white">Education:</strong> Degree, institution, years. Danish employers respect formal qualifications but weight experience highly too.</li>

          <li><strong className="text-white">Languages:</strong> Danish language ability is a real differentiator. Even basic Danish shows initiative. English is widely used in Copenhagen's tech scene.</li>

          <li><strong className="text-white">Interests:</strong> A brief interests section is acceptable and reinforces your personality, which aligns with Danish cultural values.</li>

        </ul>



        <h2 className="text-xl font-semibold text-white mt-8">English vs Danish</h2>

        <p className="text-slate-400 leading-relaxed">

          Denmark has one of the highest English proficiency rates in the world. Copenhagen's tech, design, and startup sectors frequently hire in English. However, Danish fluency is important for roles in the public sector, healthcare, education, retail, and most companies outside Copenhagen. Always match your CV language to the job posting.

        </p>



        <h2 className="text-xl font-semibold text-white mt-8">Danish workplace values to signal</h2>

        <p className="text-slate-400 leading-relaxed">

          Danish employers value independence, collaboration, and the ability to work without being micromanaged. In your experience bullets, highlight projects where you took initiative, worked across teams, or improved a process on your own. Avoid language that implies you only executed tasks under direction.

        </p>



        <h2 className="text-xl font-semibold text-white mt-8">Common mistakes</h2>

        <ul className="text-slate-400 space-y-2 list-disc list-inside">

          <li>Using overly formal or hierarchical language</li>

          <li>Over-emphasising titles and seniority — Danish culture is egalitarian</li>

          <li>Not mentioning Danish language level if you have any</li>

          <li>Sending a very long CV — keep it tight</li>

        </ul>



        <div className="mt-12 p-6 rounded-xl bg-indigo-950 border border-indigo-800">

          <p className="text-white font-semibold">Ready to adapt your CV for Denmark?</p>

          <p className="mt-1 text-slate-400 text-sm">EuroCareer AI adapts your CV to Danish tone, format, and recruiter expectations in seconds.</p>

          <Link href="/auth/signup" className="mt-4 inline-block bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium px-5 py-2.5 rounded-lg transition-colors">

            Try EuroCareer AI free →

          </Link>

        </div>



        <div className="mt-8">

          <Link href="/blog" className="text-indigo-400 hover:text-indigo-300 text-sm transition-colors">← Back to all guides</Link>

        </div>

      </div>

    </article>

  )

}
