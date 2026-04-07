import { Metadata } from 'next'

import Link from 'next/link'



export const metadata: Metadata = {

  title: 'How to Write a CV for Italy in 2026 | EuroCareer AI',

  description: 'Italian CV format explained — the Europass option, photo conventions, language requirements, and how to navigate the Italian job market as an international professional.',

  openGraph: {

    title: 'How to Write a CV for Italy in 2026',

    description: 'Italian CV format — Europass, photo norms, and recruiter expectations explained.',

    url: 'https://eurocareerai.com/blog/italy-cv-format',

    type: 'article',

    images: [{ url: 'https://eurocareerai.com/LOGO_NEW.png' }],

  },

  twitter: { card: 'summary_large_image', title: 'How to Write a CV for Italy in 2026', description: 'Italian CV format — Europass, photo norms, and recruiter expectations explained.' },

  alternates: { canonical: 'https://eurocareerai.com/blog/italy-cv-format' },

}



export default function ItalyCVFormat() {

  return (

    <article className="max-w-2xl mx-auto px-4 py-16">

      <div className="mb-2 text-sm text-slate-500">

        <Link href="/" className="hover:text-white transition-colors">Home</Link>

        <span className="mx-2">/</span>

        <Link href="/blog" className="hover:text-white transition-colors">Guides</Link>

        <span className="mx-2">/</span>

        <span className="text-slate-400">Italy CV Format</span>

      </div>



      <div className="mb-8 mt-4">

        <span className="text-sm font-medium text-indigo-400 uppercase tracking-wide">🇮🇹 CV Guide</span>

        <h1 className="mt-3 text-3xl font-bold text-white leading-tight">

          How to Write a CV for Italy in 2026

        </h1>

        <p className="mt-4 text-slate-400 text-lg">

          Italy has a relationship-driven hiring culture and specific CV expectations. Here is what Italian recruiters want to see.

        </p>

      </div>



      <div className="prose prose-invert prose-slate max-w-none space-y-6">

        <h2 className="text-xl font-semibold text-white mt-8">The Italian CV (curriculum vitae)</h2>

        <p className="text-slate-400 leading-relaxed">

          Italian CVs are typically one to two pages. The Europass format — a standardised EU CV template — is widely recognised and accepted in Italy, particularly for public sector, academic, and NGO roles. For private sector and corporate roles, a well-designed custom CV often makes a stronger impression.

        </p>



        <h2 className="text-xl font-semibold text-white mt-8">Photo convention</h2>

        <p className="text-slate-400 leading-relaxed">

          A professional photo is expected and standard in Italy. Place it in the top left or top right corner. Use a clean, business-appropriate headshot. Casual or informal photos are a red flag.

        </p>



        <h2 className="text-xl font-semibold text-white mt-8">What to include</h2>

        <ul className="text-slate-400 space-y-2 list-disc list-inside">

          <li><strong className="text-white">Personal details:</strong> Name, date of birth, address, phone, email. Nationality is sometimes included.</li>

          <li><strong className="text-white">Professional summary:</strong> A brief <em>profilo professionale</em> at the top — 3–4 lines summarising your background and what you bring.</li>

          <li><strong className="text-white">Work experience:</strong> Reverse chronological. Company, title, dates, and responsibilities. Italian CVs tend to describe roles in some detail.</li>

          <li><strong className="text-white">Education:</strong> Degree, institution, graduation year, and grade if strong. Italian employers value formal education credentials.</li>

          <li><strong className="text-white">Languages:</strong> Italian fluency is essential for most roles. Milan and Rome have more English-friendly international companies, but Italian remains dominant.</li>

          <li><strong className="text-white">Interests:</strong> Including a brief personal interests section is acceptable and can help build a connection with the recruiter.</li>

        </ul>



        <h2 className="text-xl font-semibold text-white mt-8">Language reality</h2>

        <p className="text-slate-400 leading-relaxed">

          Italian fluency is required for the vast majority of roles across the country. Milan is the most international city and has more English-language opportunities, particularly in finance, fashion, design, and tech. Rome has a concentration of international organisations. Outside these two cities, Italian is almost always essential.

        </p>



        <h2 className="text-xl font-semibold text-white mt-8">Relationship-driven culture</h2>

        <p className="text-slate-400 leading-relaxed">

          Italy has one of the most relationship-driven hiring cultures in Europe. Personal connections, referrals, and direct outreach often outperform cold applications significantly. LinkedIn is growing in use, particularly in Milan and among younger professionals, but in-person networking and warm introductions remain highly effective.

        </p>



        <h2 className="text-xl font-semibold text-white mt-8">Cover letter</h2>

        <p className="text-slate-400 leading-relaxed">

          A cover letter (<em>lettera di presentazione</em>) is expected when applying formally. Keep it professional and specific to the company — generic letters are noticed. Show genuine interest in the organisation and explain clearly why you are a fit for the role.

        </p>



        <h2 className="text-xl font-semibold text-white mt-8">Common mistakes</h2>

        <ul className="text-slate-400 space-y-2 list-disc list-inside">

          <li>Applying without a photo</li>

          <li>Not including a cover letter</li>

          <li>Underestimating how important Italian language ability is</li>

          <li>Using a very American-style resume format</li>

          <li>Not accounting for the relationship-driven nature of Italian hiring</li>

        </ul>



        <div className="mt-12 p-6 rounded-xl bg-indigo-950 border border-indigo-800">

          <p className="text-white font-semibold">Ready to adapt your CV for Italy?</p>

          <p className="mt-1 text-slate-400 text-sm">EuroCareer AI adapts your CV to Italian standards — photo placement, format, and local conventions — in seconds.</p>

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
