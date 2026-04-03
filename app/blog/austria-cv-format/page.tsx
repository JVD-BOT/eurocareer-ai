import { Metadata } from 'next'

import Link from 'next/link'



export const metadata: Metadata = {

  title: 'How to Write a CV for Austria in 2026 | EuroCareer AI',

  description: 'Austrian CV conventions explained — similar to Germany but with key differences. Learn the format, photo norms, and what Viennese recruiters actually expect.',

  openGraph: {

    title: 'How to Write a CV for Austria in 2026',

    description: 'Austrian CV format — similar to Germany but with key differences worth knowing.',

    url: 'https://eurocareerai.com/blog/austria-cv-format',

    type: 'article',

    images: [{ url: 'https://eurocareerai.com/LOGO_NEW.png' }],

  },

  twitter: { card: 'summary_large_image', title: 'How to Write a CV for Austria in 2026', description: 'Austrian CV format — similar to Germany but with key differences worth knowing.' },

  alternates: { canonical: 'https://eurocareerai.com/blog/austria-cv-format' },

}



export default function AustriaCVFormat() {

  return (

    <article className="max-w-2xl mx-auto px-4 py-16">

      <div className="mb-2 text-sm text-slate-500">

        <Link href="/" className="hover:text-white transition-colors">Home</Link>

        <span className="mx-2">/</span>

        <Link href="/blog" className="hover:text-white transition-colors">Guides</Link>

        <span className="mx-2">/</span>

        <span className="text-slate-400">Austria CV Format</span>

      </div>



      <div className="mb-8 mt-4">

        <span className="text-sm font-medium text-indigo-400 uppercase tracking-wide">🇦🇹 CV Guide</span>

        <h1 className="mt-3 text-3xl font-bold text-white leading-tight">

          How to Write a CV for Austria in 2026

        </h1>

        <p className="mt-4 text-slate-400 text-lg">

          Austria shares much of Germany's CV culture but has its own expectations — especially in Vienna's growing international job market.

        </p>

      </div>



      <div className="prose prose-invert prose-slate max-w-none space-y-6">

        <h2 className="text-xl font-semibold text-white mt-8">Austria vs Germany: the differences</h2>

        <p className="text-slate-400 leading-relaxed">

          Austria and Germany share a language and many professional conventions, but Austrian workplace culture is generally slightly less formal and more personal. Viennese recruiters tend to appreciate a warmer tone than their German counterparts, while still expecting structure, precision, and professionalism. The fundamentals are the same — but the edges are softer.

        </p>



        <h2 className="text-xl font-semibold text-white mt-8">Photo and personal details</h2>

        <p className="text-slate-400 leading-relaxed">

          Including a professional photo is standard. Personal details — name, address, date of birth, nationality, phone, email — are all expected at the top of the document. This is more similar to Germany than to the Netherlands or Sweden.

        </p>



        <h2 className="text-xl font-semibold text-white mt-8">Structure and format</h2>

        <ul className="text-slate-400 space-y-2 list-disc list-inside">

          <li><strong className="text-white">Length:</strong> Two pages is standard. One page for very junior roles, three only for very senior or academic positions.</li>

          <li><strong className="text-white">Layout:</strong> Clean and professional. No graphics or heavy design. Clear section headers.</li>

          <li><strong className="text-white">Work experience:</strong> Reverse chronological. Include exact dates (month and year), company name, job title, and responsibilities. No unexplained gaps.</li>

          <li><strong className="text-white">Education:</strong> Include all formal qualifications. Austrian employers respect academic credentials — particularly university degrees and apprenticeships (Lehre).</li>

          <li><strong className="text-white">Languages:</strong> German fluency is essential for most roles. English is widely spoken in Vienna's tech and international sectors. Specify levels using CEFR.</li>

        </ul>



        <h2 className="text-xl font-semibold text-white mt-8">The cover letter (Bewerbungsschreiben)</h2>

        <p className="text-slate-400 leading-relaxed">

          A cover letter is expected in Austria, similar to Germany. It should be one page, formally addressed, and explain your motivation for the specific role and company — not just a summary of your CV. Austrian employers appreciate genuine interest in the organisation. Do some research before you write.

        </p>



        <h2 className="text-xl font-semibold text-white mt-8">Vienna's international job market</h2>

        <p className="text-slate-400 leading-relaxed">

          Vienna hosts a number of international organisations including UN agencies, OPEC, and the OSCE, making it more internationally accessible than most Austrian cities. The tech startup scene is growing. For international companies, English CVs are often accepted and sometimes preferred. Always check the language of the job posting.

        </p>



        <h2 className="text-xl font-semibold text-white mt-8">Common mistakes</h2>

        <ul className="text-slate-400 space-y-2 list-disc list-inside">

          <li>Treating Austria exactly like Germany — the cultural differences are subtle but real</li>

          <li>Omitting a photo</li>

          <li>Leaving unexplained employment gaps</li>

          <li>Sending a CV without a cover letter</li>

          <li>Not specifying German language level if applying to Austrian companies</li>

        </ul>



        <div className="mt-12 p-6 rounded-xl bg-indigo-950 border border-indigo-800">

          <p className="text-white font-semibold">Ready to adapt your CV for Austria?</p>

          <p className="mt-1 text-slate-400 text-sm">EuroCareer AI reformats your CV to Austrian standards — photo, structure, tone, and all — in seconds.</p>

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
