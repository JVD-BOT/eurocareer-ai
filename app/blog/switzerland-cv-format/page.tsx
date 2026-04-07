import { Metadata } from 'next'

import Link from 'next/link'



export const metadata: Metadata = {

  title: 'How to Write a CV for Switzerland in 2026 | EuroCareer AI',

  description: 'Switzerland has four official languages and high hiring standards. Here is how to write a CV that works for Swiss employers — and what makes the Swiss market unique.',

  openGraph: {

    title: 'How to Write a CV for Switzerland in 2026',

    description: 'Swiss CV format — four languages, high standards, and what recruiters expect.',

    url: 'https://eurocareerai.com/blog/switzerland-cv-format',

    type: 'article',

    images: [{ url: 'https://eurocareerai.com/LOGO_NEW.png' }],

  },

  twitter: { card: 'summary_large_image', title: 'How to Write a CV for Switzerland in 2026', description: 'Swiss CV format — four languages, high standards, and what recruiters expect.' },

  alternates: { canonical: 'https://eurocareerai.com/blog/switzerland-cv-format' },

}



export default function SwitzerlandCVFormat() {

  return (

    <article className="max-w-2xl mx-auto px-4 py-16">

      <div className="mb-2 text-sm text-slate-500">

        <Link href="/" className="hover:text-white transition-colors">Home</Link>

        <span className="mx-2">/</span>

        <Link href="/blog" className="hover:text-white transition-colors">Guides</Link>

        <span className="mx-2">/</span>

        <span className="text-slate-400">Switzerland CV Format</span>

      </div>



      <div className="mb-8 mt-4">

        <span className="text-sm font-medium text-indigo-400 uppercase tracking-wide">🇨🇭 CV Guide</span>

        <h1 className="mt-3 text-3xl font-bold text-white leading-tight">

          How to Write a CV for Switzerland in 2026

        </h1>

        <p className="mt-4 text-slate-400 text-lg">

          Switzerland is one of Europe's most competitive job markets. High salaries attract high competition — your CV needs to be immaculate.

        </p>

      </div>



      <div className="prose prose-invert prose-slate max-w-none space-y-6">

        <h2 className="text-xl font-semibold text-white mt-8">The multilingual challenge</h2>

        <p className="text-slate-400 leading-relaxed">

          Switzerland has four national languages: German (spoken by ~63% of the population), French (~23%), Italian (~8%), and Romansh (a small minority). Your CV language should match the region: German for Zurich and Bern, French for Geneva and Lausanne, Italian for Ticino. Zurich is the dominant business hub and English is widely used in finance and tech.

        </p>



        <h2 className="text-xl font-semibold text-white mt-8">High standards, high competition</h2>

        <p className="text-slate-400 leading-relaxed">

          Switzerland consistently has some of the lowest unemployment rates in Europe and correspondingly high expectations for applicants. Presentation quality matters enormously — a CV with formatting inconsistencies, typos, or gaps will be screened out quickly. Invest time in making your CV flawless before applying.

        </p>



        <h2 className="text-xl font-semibold text-white mt-8">Format and structure</h2>

        <ul className="text-slate-400 space-y-2 list-disc list-inside">

          <li><strong className="text-white">Length:</strong> Two pages maximum. Swiss recruiters value concision.</li>

          <li><strong className="text-white">Photo:</strong> Standard and expected. Professional headshot, top right.</li>

          <li><strong className="text-white">Personal details:</strong> Name, address, phone, email, date of birth, nationality. Work permit status if non-EU is essential to include.</li>

          <li><strong className="text-white">Work experience:</strong> Precise dates, company names, titles, and key achievements. Quantify where possible — Swiss employers respond well to measurable results.</li>

          <li><strong className="text-white">Education:</strong> Formal qualifications are highly valued. Include all degrees and professional certifications.</li>

          <li><strong className="text-white">Languages:</strong> List all languages with levels. Multilingualism is a genuine differentiator in Switzerland — even basic French or German in a German-speaking region is worth noting.</li>

        </ul>



        <h2 className="text-xl font-semibold text-white mt-8">Work permits — the key barrier</h2>

        <p className="text-slate-400 leading-relaxed">

          Switzerland is not in the EU, but has bilateral agreements with the EU that make it relatively straightforward for EU/EEA nationals to work there. Non-EU nationals face a more restrictive permit system — employers must demonstrate they could not fill the role with an EU/Swiss candidate first. Be transparent about your nationality and permit situation early in the process. Many Swiss employers in finance, pharma, and tech are experienced with international hires.

        </p>



        <h2 className="text-xl font-semibold text-white mt-8">Key industries and cities</h2>

        <p className="text-slate-400 leading-relaxed">

          Zurich dominates in finance, banking, insurance, and tech. Geneva is home to international organisations, pharma, and watchmaking. Basel is the centre of the pharmaceutical industry. Understanding which city aligns with your sector matters when targeting your search.

        </p>



        <h2 className="text-xl font-semibold text-white mt-8">Common mistakes</h2>

        <ul className="text-slate-400 space-y-2 list-disc list-inside">

          <li>Applying in the wrong language for the region</li>

          <li>Not addressing work permit status proactively</li>

          <li>Submitting a CV with any formatting inconsistencies</li>

          <li>Omitting a photo</li>

          <li>Exaggerating qualifications — Swiss background checks are thorough</li>

        </ul>



        <div className="mt-12 p-6 rounded-xl bg-indigo-950 border border-indigo-800">

          <p className="text-white font-semibold">Ready to adapt your CV for Switzerland?</p>

          <p className="mt-1 text-slate-400 text-sm">EuroCareer AI formats your CV to Swiss standards — language, structure, precision, and regional conventions handled in seconds.</p>

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
