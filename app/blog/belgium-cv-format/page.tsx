import { Metadata } from 'next'

import Link from 'next/link'



export const metadata: Metadata = {

  title: 'How to Write a CV for Belgium in 2026 | EuroCareer AI',

  description: 'Belgium has three official languages and a unique hiring culture. Here is how to write a CV that works for Belgian employers — in French, Dutch, or English.',

  openGraph: {

    title: 'How to Write a CV for Belgium in 2026',

    description: 'Belgian CV format — navigating French, Dutch, and English hiring conventions.',

    url: 'https://eurocareerai.com/blog/belgium-cv-format',

    type: 'article',

    images: [{ url: 'https://eurocareerai.com/LOGO_NEW.png' }],

  },

  twitter: { card: 'summary_large_image', title: 'How to Write a CV for Belgium in 2026', description: 'Belgian CV format — navigating French, Dutch, and English hiring conventions.' },

  alternates: { canonical: 'https://eurocareerai.com/blog/belgium-cv-format' },

}



export default function BelgiumCVFormat() {

  return (

    <article className="max-w-2xl mx-auto px-4 py-16">

      <div className="mb-2 text-sm text-slate-500">

        <Link href="/" className="hover:text-white transition-colors">Home</Link>

        <span className="mx-2">/</span>

        <Link href="/blog" className="hover:text-white transition-colors">Guides</Link>

        <span className="mx-2">/</span>

        <span className="text-slate-400">Belgium CV Format</span>

      </div>



      <div className="mb-8 mt-4">

        <span className="text-sm font-medium text-indigo-400 uppercase tracking-wide">🇧🇪 CV Guide</span>

        <h1 className="mt-3 text-3xl font-bold text-white leading-tight">

          How to Write a CV for Belgium in 2026

        </h1>

        <p className="mt-4 text-slate-400 text-lg">

          Belgium is a genuinely multilingual market — what works in Brussels may not work in Antwerp. Here is how to navigate it.

        </p>

      </div>



      <div className="prose prose-invert prose-slate max-w-none space-y-6">

        <h2 className="text-xl font-semibold text-white mt-8">The three-language reality</h2>

        <p className="text-slate-400 leading-relaxed">

          Belgium has three official languages: Dutch (spoken in Flanders), French (spoken in Wallonia and Brussels), and German (a small eastern region). Brussels is officially bilingual French/Dutch but functions largely in French for professional contexts. Your CV language should match the region and language of the job posting — this is not optional.

        </p>



        <h2 className="text-xl font-semibold text-white mt-8">Photo convention</h2>

        <p className="text-slate-400 leading-relaxed">

          Including a photo is common across all three regions, though it is more expected in French-speaking Belgium (similar to France) than in Flanders (where Dutch norms apply and it is more optional). When in doubt, include a professional headshot.

        </p>



        <h2 className="text-xl font-semibold text-white mt-8">What to include</h2>

        <ul className="text-slate-400 space-y-2 list-disc list-inside">

          <li><strong className="text-white">Personal details:</strong> Name, address, phone, email. Nationality and date of birth are sometimes included, particularly in French-speaking roles.</li>

          <li><strong className="text-white">Professional summary:</strong> 3–4 lines at the top. Clear and specific to the role.</li>

          <li><strong className="text-white">Work experience:</strong> Reverse chronological with company, title, dates, and responsibilities.</li>

          <li><strong className="text-white">Education:</strong> Belgian employers respect formal qualifications. Include degrees, institutions, and years clearly.</li>

          <li><strong className="text-white">Languages:</strong> Belgium is one of the few places where listing multiple languages is not just acceptable but impressive. Be accurate about levels.</li>

          <li><strong className="text-white">EU institutions:</strong> Brussels hosts most major EU institutions. If targeting these roles, a different, more formal format applies — follow the official EU application process.</li>

        </ul>



        <h2 className="text-xl font-semibold text-white mt-8">Brussels: the international hub</h2>

        <p className="text-slate-400 leading-relaxed">

          Brussels is one of the most international cities in Europe thanks to EU and NATO headquarters. Many organisations operate primarily in English, making it one of the more accessible Belgian cities for non-French/Dutch speakers. However, functional French or Dutch still significantly expands your options even in Brussels.

        </p>



        <h2 className="text-xl font-semibold text-white mt-8">Speculative applications</h2>

        <p className="text-slate-400 leading-relaxed">

          Unsolicited applications (candidatures spontanées / spontane sollicitaties) are common and accepted in Belgium, particularly for larger organisations. A well-targeted speculative application can be effective when the local job market is tight for your specific role.

        </p>



        <h2 className="text-xl font-semibold text-white mt-8">Common mistakes</h2>

        <ul className="text-slate-400 space-y-2 list-disc list-inside">

          <li>Submitting a CV in the wrong language for the region</li>

          <li>Treating Belgium as a single, homogeneous market</li>

          <li>Underestimating how important language skills are listed — be specific and honest</li>

          <li>Not addressing work authorisation if you are non-EU</li>

        </ul>



        <div className="mt-12 p-6 rounded-xl bg-indigo-950 border border-indigo-800">

          <p className="text-white font-semibold">Ready to adapt your CV for Belgium?</p>

          <p className="mt-1 text-slate-400 text-sm">EuroCareer AI adapts your CV to Belgian hiring standards — French or Dutch conventions, structure, and tone — in seconds.</p>

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
