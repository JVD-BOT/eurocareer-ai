import { Metadata } from 'next'

import Link from 'next/link'



export const metadata: Metadata = {

  title: 'How to Write a CV for Ireland in 2026 | EuroCareer AI',

  description: 'Ireland CV format guide — why Dublin is Europe\'s most accessible English-speaking job market, what Irish recruiters expect, and how to stand out.',

  openGraph: {

    title: 'How to Write a CV for Ireland in 2026',

    description: 'Irish CV format — why Dublin is Europe\'s most accessible English-speaking job market.',

    url: 'https://eurocareerai.com/blog/ireland-cv-format',

    type: 'article',

    images: [{ url: 'https://eurocareerai.com/LOGO_NEW.png' }],

  },

  twitter: { card: 'summary_large_image', title: 'How to Write a CV for Ireland in 2026', description: 'Irish CV format — why Dublin is Europe\'s most accessible English-speaking job market.' },

  alternates: { canonical: 'https://eurocareerai.com/blog/ireland-cv-format' },

}



export default function IrelandCVFormat() {

  return (

    <article className="max-w-2xl mx-auto px-4 py-16">

      <div className="mb-2 text-sm text-slate-500">

        <Link href="/" className="hover:text-white transition-colors">Home</Link>

        <span className="mx-2">/</span>

        <Link href="/blog" className="hover:text-white transition-colors">Guides</Link>

        <span className="mx-2">/</span>

        <span className="text-slate-400">Ireland CV Format</span>

      </div>



      <div className="mb-8 mt-4">

        <span className="text-sm font-medium text-indigo-400 uppercase tracking-wide">🇮🇪 CV Guide</span>

        <h1 className="mt-3 text-3xl font-bold text-white leading-tight">

          How to Write a CV for Ireland in 2026

        </h1>

        <p className="mt-4 text-slate-400 text-lg">

          Ireland — and Dublin in particular — is the most accessible English-speaking job market in the EU. Here is how to make the most of it.

        </p>

      </div>



      <div className="prose prose-invert prose-slate max-w-none space-y-6">

        <h2 className="text-xl font-semibold text-white mt-8">Why Ireland is a top choice for international professionals</h2>

        <p className="text-slate-400 leading-relaxed">

          Dublin hosts the European headquarters of Google, Meta, LinkedIn, Salesforce, Apple, and dozens of other major tech companies. The entire hiring culture is English-language, and Ireland is an EU member — meaning EU/EEA nationals have full right to work without a visa. For many international professionals, it is the natural first step into the European job market.

        </p>



        <h2 className="text-xl font-semibold text-white mt-8">CV format</h2>

        <p className="text-slate-400 leading-relaxed">

          Irish CV conventions are very similar to UK ones — "CV" not "resume," two pages maximum, clean professional layout, no photo. Irish employers are comfortable with international applicants and are generally experienced with diverse CV formats, but following local conventions signals professionalism.

        </p>



        <h2 className="text-xl font-semibold text-white mt-8">No photo required</h2>

        <p className="text-slate-400 leading-relaxed">

          Like the UK, do not include a photo on an Irish CV. Anti-discrimination norms mean photos are not expected and can create unnecessary complications in the screening process.

        </p>



        <h2 className="text-xl font-semibold text-white mt-8">What to include</h2>

        <ul className="text-slate-400 space-y-2 list-disc list-inside">

          <li><strong className="text-white">Contact details:</strong> Name, phone, email, LinkedIn, city. Include your right to work status if you are non-EU.</li>

          <li><strong className="text-white">Personal profile:</strong> 3–4 lines at the top summarising your background and what you are looking for.</li>

          <li><strong className="text-white">Work experience:</strong> Reverse chronological. Title, company, dates, and 3–5 bullets with achievements. Quantify where possible.</li>

          <li><strong className="text-white">Education:</strong> Degree, institution, years. Grade if strong.</li>

          <li><strong className="text-white">Skills:</strong> Technical skills, tools, languages.</li>

        </ul>



        <h2 className="text-xl font-semibold text-white mt-8">The tech sector advantage</h2>

        <p className="text-slate-400 leading-relaxed">

          If you are in tech, marketing, sales, finance, or customer success, Dublin is particularly strong. The concentration of global tech companies means there are consistently more English-language roles here than in almost any other EU city. Competition is high, but so is the volume of opportunities.

        </p>



        <h2 className="text-xl font-semibold text-white mt-8">Right to work</h2>

        <p className="text-slate-400 leading-relaxed">

          EU/EEA nationals can work in Ireland without a visa or permit. Non-EU nationals need a work permit — Critical Skills Employment Permits are available for high-demand roles in tech, engineering, healthcare, and other sectors. Be upfront about your work authorisation status on your CV or in your cover letter.

        </p>



        <h2 className="text-xl font-semibold text-white mt-8">Irish hiring culture</h2>

        <p className="text-slate-400 leading-relaxed">

          Irish workplace culture is warm, collaborative, and relatively informal compared to Germany or France. Recruiters appreciate personality alongside professionalism. Your cover letter can have a slightly more personal tone — a bit of genuine warmth goes a long way.

        </p>



        <h2 className="text-xl font-semibold text-white mt-8">Common mistakes</h2>

        <ul className="text-slate-400 space-y-2 list-disc list-inside">

          <li>Including a photo</li>

          <li>Using US-style resume format (objective statement, references available on request)</li>

          <li>Not specifying right to work status</li>

          <li>Going over two pages</li>

        </ul>



        <div className="mt-12 p-6 rounded-xl bg-indigo-950 border border-indigo-800">

          <p className="text-white font-semibold">Ready to adapt your CV for Ireland?</p>

          <p className="mt-1 text-slate-400 text-sm">EuroCareer AI adapts your CV to Irish standards — format, tone, and right-to-work context included — in seconds.</p>

          <Link href="/auth/signup" className="mt-4 inline-block bg-[#6366f1] hover:bg-[#4f46e5] text-white text-sm font-medium px-5 py-2.5 rounded-lg transition-colors">

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
