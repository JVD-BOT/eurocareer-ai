import { Metadata } from 'next'

import Link from 'next/link'



export const metadata: Metadata = {

  title: 'How to Write a CV for Spain in 2026 | EuroCareer AI',

  description: 'Spanish CV format explained — what to include, photo norms, language expectations, and how to stand out in the Spanish job market as an international applicant.',

  openGraph: {

    title: 'How to Write a CV for Spain in 2026',

    description: 'Spanish CV format, photo norms, and recruiter expectations explained.',

    url: 'https://eurocareerai.com/blog/spain-cv-format',

    type: 'article',

    images: [{ url: 'https://eurocareerai.com/LOGO_NEW.png' }],

  },

  twitter: { card: 'summary_large_image', title: 'How to Write a CV for Spain in 2026', description: 'Spanish CV format, photo norms, and recruiter expectations explained.' },

  alternates: { canonical: 'https://eurocareerai.com/blog/spain-cv-format' },

}



export default function SpainCVFormat() {

  return (

    <article className="max-w-2xl mx-auto px-4 py-16">

      <div className="mb-2 text-sm text-slate-500">

        <Link href="/" className="hover:text-white transition-colors">Home</Link>

        <span className="mx-2">/</span>

        <Link href="/blog" className="hover:text-white transition-colors">Guides</Link>

        <span className="mx-2">/</span>

        <span className="text-slate-400">Spain CV Format</span>

      </div>



      <div className="mb-8 mt-4">

        <span className="text-sm font-medium text-indigo-400 uppercase tracking-wide">🇪🇸 CV Guide</span>

        <h1 className="mt-3 text-3xl font-bold text-white leading-tight">

          How to Write a CV for Spain in 2026

        </h1>

        <p className="mt-4 text-slate-400 text-lg">

          Spain has a distinct CV culture with specific expectations around photos, personal details, and tone. Here is what you need to know before applying.

        </p>

      </div>



      <div className="prose prose-invert prose-slate max-w-none space-y-6">

        <h2 className="text-xl font-semibold text-white mt-8">The Spanish CV at a glance</h2>

        <p className="text-slate-400 leading-relaxed">

          A Spanish CV (<em>currículum vítae</em>) is typically one to two pages. Spain sits closer to the French and German conventions — a photo is standard, personal details are expected, and presentation matters. The overall tone should be professional and direct.

        </p>



        <h2 className="text-xl font-semibold text-white mt-8">Photo convention</h2>

        <p className="text-slate-400 leading-relaxed">

          Including a professional photo is the norm in Spain. Use a recent, business-appropriate headshot placed in the top right corner. Casual photos or selfies are a red flag. If you are unsure, include one — omitting it in the Spanish market can make a CV look incomplete.

        </p>



        <h2 className="text-xl font-semibold text-white mt-8">What to include</h2>

        <ul className="text-slate-400 space-y-2 list-disc list-inside">

          <li><strong className="text-white">Personal details:</strong> Full name, address, phone, email, date of birth, nationality. More detail is expected than in Northern Europe.</li>

          <li><strong className="text-white">Professional summary:</strong> A brief <em>perfil profesional</em> of 3–4 lines at the top. Clear and specific — not a list of vague adjectives.</li>

          <li><strong className="text-white">Work experience:</strong> Reverse chronological. Company, title, dates, and bullet points of key responsibilities and achievements.</li>

          <li><strong className="text-white">Education:</strong> Degree, institution, graduation year. Spanish employers value formal qualifications and certifications.</li>

          <li><strong className="text-white">Languages:</strong> Critical. Spanish fluency is essential for most roles outside international tech companies. Specify level clearly.</li>

          <li><strong className="text-white">Additional training:</strong> Certifications, online courses, and professional development are valued and worth including.</li>

        </ul>



        <h2 className="text-xl font-semibold text-white mt-8">Language requirements</h2>

        <p className="text-slate-400 leading-relaxed">

          Spanish fluency is required for the vast majority of roles. Exceptions exist in Barcelona's growing tech scene, international companies, and tourism. If applying in Spanish, have a native speaker review your CV — grammatical errors stand out immediately. Many international professionals find Barcelona and Madrid the most accessible entry points due to the concentration of English-friendly companies.

        </p>



        <h2 className="text-xl font-semibold text-white mt-8">Spanish job market realities</h2>

        <p className="text-slate-400 leading-relaxed">

          Spain has a relationship-driven hiring culture. Personal connections and referrals carry significant weight. LinkedIn is widely used, but networking — both in-person and online — is often more effective than cold applications. If you know anyone working at the company you are targeting, a warm introduction dramatically increases your chances.

        </p>



        <h2 className="text-xl font-semibold text-white mt-8">Common mistakes</h2>

        <ul className="text-slate-400 space-y-2 list-disc list-inside">

          <li>Omitting a photo when one is expected</li>

          <li>Applying in English to roles that are clearly Spanish-language</li>

          <li>Using a US-style one-page resume format</li>

          <li>Not specifying work authorisation if you are a non-EU national</li>

          <li>Using informal language — Spanish professional tone is formal</li>

        </ul>



        <div className="mt-12 p-6 rounded-xl bg-indigo-950 border border-indigo-800">

          <p className="text-white font-semibold">Ready to adapt your CV for Spain?</p>

          <p className="mt-1 text-slate-400 text-sm">EuroCareer AI adapts your CV to Spanish standards — photo placement, structure, tone, and more — in seconds.</p>

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
