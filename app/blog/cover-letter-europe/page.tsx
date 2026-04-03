import { Metadata } from 'next'

import Link from 'next/link'



export const metadata: Metadata = {

  title: 'How to Write a Cover Letter for European Employers | EuroCareer AI',

  description: 'European cover letters differ from US ones in tone, length, and structure. Here is how to write one that actually gets read — by country.',

  openGraph: {

    title: 'How to Write a Cover Letter for European Employers',

    description: 'European cover letters differ from US ones. Here is how to write one that gets read.',

    url: 'https://eurocareerai.com/blog/cover-letter-europe',

    type: 'article',

    images: [{ url: 'https://eurocareerai.com/LOGO_NEW.png' }],

  },

  twitter: {

    card: 'summary_large_image',

    title: 'How to Write a Cover Letter for European Employers',

    description: 'European cover letters differ from US ones. Here is how to write one that gets read.',

  },

  alternates: {

    canonical: 'https://eurocareerai.com/blog/cover-letter-europe',

  },

}



export default function CoverLetterEurope() {

  return (

    <article className="max-w-2xl mx-auto px-4 py-16">

      <div className="mb-8">

        <span className="text-sm font-medium text-indigo-400 uppercase tracking-wide">🇪🇺 Cover Letters · Europe</span>

        <h1 className="mt-3 text-3xl font-bold text-white leading-tight">

          How to Write a Cover Letter for European Employers

        </h1>

        <p className="mt-4 text-slate-400 text-lg">

          European hiring cultures vary significantly. A cover letter that works in the US may come across as aggressive in Germany or too informal in France. Here is what actually works.

        </p>

      </div>



      <div className="prose prose-invert prose-slate max-w-none">

        <h2>Why European cover letters are different</h2>

        <p>

          American cover letters tend to be confident and achievement-focused, often opening with bold claims about impact. Most European hiring cultures expect a more measured tone — professional, specific, and grounded. Overly promotional language can actually hurt you in markets like the Netherlands, Sweden, and Germany.

        </p>



        <h2>The universal structure</h2>

        <p>Regardless of country, a strong European cover letter follows this structure:</p>

        <ul>

          <li><strong>Opening:</strong> Why this specific company. Research it — a generic opener is noticed immediately.</li>

          <li><strong>Body (1–2 paragraphs):</strong> What you bring. Relevant experience, concrete examples, and why you are a strong fit for this particular role.</li>

          <li><strong>Relocation / practicalities (if applicable):</strong> Address it directly. When can you start? Do you need visa support? Are you already in the country?</li>

          <li><strong>Closing:</strong> A simple, direct call to action — "I would welcome the opportunity to discuss this further."</li>

        </ul>



        <h2>Country-specific expectations</h2>



        <h3>Germany</h3>

        <p>Cover letters (Anschreiben) are taken very seriously. Formal tone, addressed directly to the hiring manager if possible. Structure matters — Germans appreciate logical, ordered writing. One page maximum. Avoid humour or casual language.</p>



        <h3>France</h3>

        <p>The <em>lettre de motivation</em> is expected with every application and often weighted equally with the CV. Formal, well-written French is valued. Show genuine motivation for the company — French employers want to understand why you want to work there specifically, not just why you want the role type.</p>



        <h3>Netherlands</h3>

        <p>Direct and to the point. Dutch culture values clarity — get to the substance quickly. One page, professional but not stiff. You can be a bit more conversational than in France or Germany.</p>



        <h3>Sweden</h3>

        <p>Modest and collaborative in tone. Avoid overselling. Highlight teamwork, initiative, and alignment with the company's values. Mentioning Swedish language ability (even beginner level) is worth doing.</p>



        <h3>UK</h3>

        <p>Similar to the US in structure but slightly more formal. One page. Strong personal profile approach — who you are and what you offer, then why this company. Subtle personality is fine but keep it professional.</p>



        <h2>Addressing relocation in your cover letter</h2>

        <p>

          If you are applying from outside the country, address it head-on in the third paragraph. Something like: "I am currently based in [city] and am actively planning to relocate to [country]. I am available for remote interviews and can be on-site within [timeline]. I [do/do not] require visa sponsorship." This removes the recruiter's biggest hesitation immediately.

        </p>



        <h2>Length and format</h2>

        <p>

          One page across the board. Three to four short paragraphs. Send as PDF. Match the visual styling to your CV if possible — a consistent, professional pair makes a strong impression.

        </p>



        <div className="mt-12 p-6 rounded-xl bg-indigo-950 border border-indigo-800">

          <p className="text-white font-semibold">Generate a country-specific cover letter in seconds.</p>

          <p className="mt-1 text-slate-400 text-sm">EuroCareer AI writes personalised cover letters adapted to the tone and conventions of each EU country — with a feedback loop to refine until it is right.</p>

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
