import type { Application } from "./types";
import { COUNTRIES } from "./constants";

// ── Country-specific CV guidelines ───────────────────────────
export const COUNTRY_CV_GUIDELINES: Record<string, string> = {
  DE: `- Format: Tabellarischer Lebenslauf (reverse chronological table)
- Photo: standard and expected — mention "Professional photo" as a placeholder
- Personal details: full name, address, phone, email, date of birth (optional but common), nationality
- Tone: highly formal throughout
- Education: include grades (Abitur note, university GPA/note), use German degree equivalents (Bachelor, Master)
- Career gaps: explain all gaps (Elternzeit, Auszeit, job search — no stigma if explained)
- Hobbies section: standard to include at the end
- End with: "Referenzen auf Anfrage" (references upon request)
- Language: write in German, formal register (Sie form in any letters)`,

  NL: `- Format: concise, 1–2 pages, skills-forward
- Photo: not required or expected
- Tone: direct, practical — Dutch value conciseness over formality
- Emphasise collaboration, team contribution, and international awareness
- Include all languages spoken prominently (Dutch valued even at basic level)
- Work-life balance, volunteering, and side projects are positives
- Skills: practical technical skills highlighted
- Education: straightforward listing, HBO/WO levels if Dutch-equivalent known
- Language: Dutch or English equally acceptable`,

  FR: `- Format: Curriculum Vitae, max 1 page for junior, 2 pages for senior
- Photo: expected and common — include placeholder
- Personal details prominent: name, address, date of birth, nationality
- Tone: formal (Madame, Monsieur)
- Education: prestigious French institutions (Grandes Écoles, Bac+X level) are very important — include full official diploma names
- Skills: separate technical (compétences techniques) from soft skills
- Note: A "Lettre de motivation" (cover letter) is traditional — mention it accompanies the CV
- Language: French strongly preferred`,

  SE: `- Format: clean, modern, 1–2 pages
- Photo: optional, becoming less common
- Tone: understated and humble — the Swedish "lagom" principle; let quantified achievements speak
- Equality and diversity: avoid gendered language, no mention of age/marital status needed
- Work-life balance: mentioning interests outside work is positive
- Collaboration valued over individual heroics
- Union membership can be mentioned if relevant
- Language: Swedish or English both acceptable`,

  DK: `- Format: clean, 1–2 pages, direct
- Photo: optional
- Tone: direct, egalitarian, pragmatic — Danish flat hierarchy culture
- Quantified achievements strongly preferred over vague descriptions
- Mention any Danish language skills even if basic — it's appreciated
- Volunteering and community engagement are positives
- Language: Danish or English both fine`,

  GB: `- Say "CV" not "resume"
- Photo: do NOT include (UK discrimination law)
- Date of birth: do NOT include (UK discrimination law)
- Include a Personal Profile / Personal Statement (2–4 lines) at the top
- Include right-to-work / visa status if non-UK national — this is critical
- References: "Available upon request" at the bottom
- Tone: formal but slightly more personal than Germany; understated achievements
- Spelling: British English throughout (colour, programme, organisation)
- Format: reverse chronological, 2 pages max`,

  ES: `- Photo: common and expected — include placeholder
- Personal details: full name, address, date of birth, nationality, NIE/NIF if applicable
- Tone: formal but warm
- Education: full official degree names, university prestige matters
- Language skills: extremely important — list all languages with CEFR level (A2, B1, B2, C1, C2)
- Hobbies: include to show personality and cultural fit
- References: often expected
- Language: Spanish strongly preferred`,

  IE: `- Similar to UK CV format
- Photo: not required (Irish equality law)
- Date of birth: not required
- Personal statement at top (2–4 lines)
- Right-to-work status: CRITICAL for non-EEA nationals — must state clearly
- Tech skills section prominent (Ireland has a major tech sector)
- References: 2 named references or "Available upon request"
- Language: English`,

  BE: `- Format: depends on region — French CV style for Wallonia/Brussels, Dutch for Flanders
- Brussels: bilingual French/Dutch awareness; EU institution experience highly valued
- Photo: common, especially in French-speaking regions
- Languages: extremely prominent section — French/Dutch/English trilingual is very valuable
- EU citizenship / right to work: mention if relevant (Belgium hosts major EU institutions)
- Tone: formal, structured
- Language: match the region (French for Brussels/Wallonia, Dutch for Flanders)`,

  AT: `- Similar to Germany but slightly less formal
- Photo: common and standard
- Personal details: similar to Germany; birth date optional
- Tone: professional but slightly warmer than Germany
- Austrian degree names preferred where applicable
- Less focus on career gap explanations than Germany
- Hobbies: fine to include
- Language: German (Austrian register)`,

  CH: `- Very high standards — precision and thoroughness are Swiss values
- Photo: common across all language regions
- Work permit status: critical — Swiss work permits (B, C, G) are complex; always state permit type
- Nationality and languages: prominent
- International experience highly valued given Switzerland's global role
- Salary expectations: common to include in Swiss applications
- Tone: precise, formal, detailed
- Language: match the region (German for Zürich/Bern, French for Geneva/Lausanne, Italian for Lugano)`,

  IT: `- Photo: common and expected — include placeholder
- Personal details: date of birth, nationality, Codice Fiscale if available
- Tone: formal and polished
- Education: university degree, faculty, and specialisation are important
- Language skills: highly important — list with CEFR levels
- References: common to include or offer
- Motivation letter (Lettera di motivazione): traditional and expected
- Language: Italian strongly preferred`,
};

// ── Country sign-offs for cover letters ──────────────────────
export const COUNTRY_SIGNOFFS: Record<string, string> = {
  DE: "Mit freundlichen Grüßen",
  NL: "Met vriendelijke groet",
  FR: "Veuillez agréer, Madame, Monsieur, l'expression de mes salutations distinguées",
  SE: "Med vänliga hälsningar",
  DK: "Med venlig hilsen",
  GB: "Yours sincerely",
  ES: "Atentamente",
  IE: "Yours sincerely",
  BE: "Met vriendelijke groet / Cordialement",
  AT: "Mit freundlichen Grüßen",
  CH: "Mit freundlichen Grüßen / Avec mes meilleures salutations",
  IT: "Cordiali saluti",
};

// ── Country cover letter conventions ─────────────────────────
export const COUNTRY_LETTER_GUIDELINES: Record<string, string> = {
  DE: "Formal Anschreiben style. Begin with 'Sehr geehrte Damen und Herren' or named contact. State the exact job reference/title in the first sentence. Structured: why this company, what you bring, call to action. Sign off with 'Mit freundlichen Grüßen'.",
  NL: "Direct and practical. Skip flowery language — Dutch prefer clarity. Mention specific value you bring. Collaboration and pragmatism are positives. Can be slightly less formal than Germany.",
  FR: "Formal lettre de motivation. Follow strict French business letter format. Emphasise your academic background and intellectual curiosity. Show genuine knowledge of the company.",
  SE: "Understated and genuine. Avoid boasting. Mention collaborative work style and interest in the Swedish work-life culture. Be authentic and humble.",
  DK: "Direct, friendly, egalitarian. Show genuine personality. Avoid corporate jargon. Mention specific reasons for choosing Denmark.",
  GB: "Professional but approachable. Open with a strong hook. Reference the job ad specifically. UK employers value conciseness — no padding.",
  ES: "Warm and polished. Show enthusiasm for the company. Mention language skills prominently. A personal touch is appreciated.",
  IE: "Similar to UK. Mention right-to-work status early if non-EEA. Ireland values personality and culture fit — show genuine enthusiasm.",
  BE: "Formal. If Brussels, show awareness of bilingual/multilingual environment. EU institution familiarity a plus.",
  AT: "Similar to Germany but slightly warmer. Show genuine interest in Austrian company culture.",
  CH: "Precise and structured. Mention permit status. Show that you understand Switzerland's multilingual and internationally-oriented environment.",
  IT: "Elegant and formal. Show passion for the role. Emphasise academic credentials and language skills.",
};

// ── Prompt builders ───────────────────────────────────────────

function getCountryName(code: string): string {
  return COUNTRIES.find((c) => c.code === code)?.name ?? code;
}

export function buildCVPrompt(
  application: Application,
  resumeText: string,
  targetCountry: string
): string {
  const countryName = getCountryName(targetCountry);
  const guidelines = COUNTRY_CV_GUIDELINES[targetCountry] ?? "Follow standard European CV conventions.";

  return `You are a professional CV/resume expert specialising in European job markets.

Your task: adapt the resume below for a job application in ${countryName}.

Job context:
- Role: ${application.role_title}
- Company: ${application.company_name}
- Location: ${application.city ?? countryName}

${countryName} CV guidelines:
${guidelines}

Original resume:
---
${resumeText}
---

Instructions:
- Rewrite the full CV following ${countryName} conventions exactly
- Preserve all factual content — do not invent achievements or experience
- Apply the structural, formatting, and language guidance above
- Output the adapted CV in plain text with clear section headers (use ALL CAPS or --- underlines for headers)
- Do not include any meta-commentary — output only the CV itself`;
}

export function buildCoverLetterPrompt(
  application: Application,
  resumeText: string,
  tone: string,
  languages: string,
  nationality: string,
  workAuthorization: string,
  feedback: string
): string {
  const targetCountry = application.country ?? "GB";
  const countryName = getCountryName(targetCountry);
  const signOff = COUNTRY_SIGNOFFS[targetCountry] ?? "Kind regards";
  const letterGuide = COUNTRY_LETTER_GUIDELINES[targetCountry] ?? "Follow standard professional European cover letter conventions.";

  const toneDesc =
    tone === "formal"
      ? "highly professional and formal — traditional business register"
      : tone === "warm"
      ? "professional and enthusiastic — personable but still polished"
      : "conversational and authentic — professional but with genuine personality";

  const relocNote =
    nationality && nationality !== targetCountry
      ? `- The applicant is from ${getCountryName(nationality)} — address relocation briefly and naturally (show genuine interest in the ${countryName} market, not just the job; do not make it sound like a bureaucratic issue)`
      : "";

  return `You are an expert in European job applications.

Write a cover letter for the following position.

Job context:
- Company: ${application.company_name}
- Role: ${application.role_title}
- Location: ${application.city ?? countryName}, ${countryName}
${application.salary_range ? `- Salary range: ${application.salary_range}` : ""}

Applicant profile:
- Nationality: ${nationality || "International"}
- Languages: ${languages || "English"}
- Work authorisation: ${workAuthorization || "To be confirmed"}

Job description:
---
${application.job_description || "Senior professional role. Write a compelling general letter based on the role title and company."}
---

Applicant resume:
---
${resumeText || "Experienced professional with a strong background in the field."}
---

${feedback ? `Revision feedback from applicant: ${feedback}\n` : ""}

${countryName} cover letter conventions:
${letterGuide}

Instructions:
- Tone: ${toneDesc}
- Length: 250–350 words in the body (not counting salutation or signature block)
${relocNote}
- Mention relevant language skills where they strengthen the application
- Sign off with: "${signOff}"
- End the signature block with "Your Name" as a placeholder
- Do NOT use any placeholder brackets like [Your Name] — write a complete, ready-to-send letter except for the name placeholder
- Output the full letter from salutation to signature — nothing else`;
}

export function buildFollowUpPrompt(
  application: Application,
  emailType: string
): string {
  const countryName = getCountryName(application.country ?? "GB");
  const signOff = COUNTRY_SIGNOFFS[application.country ?? "GB"] ?? "Kind regards";

  const daysSince = application.applied_date
    ? Math.floor((Date.now() - new Date(application.applied_date).getTime()) / 86400000)
    : null;

  const typeInstructions: Record<string, string> = {
    follow_up: `This is a follow-up to check on application status. Express continued strong interest in the role. Be polite and not pushy. ${daysSince ? `It has been ${daysSince} days since applying.` : ""}`,
    thank_you: `This is a thank-you email after an interview. Express gratitude, reiterate your enthusiasm and fit for the role. Reference something specific from the interview conversation if possible (use a general placeholder if not known).`,
    rejection_response: `This is a graceful response to receiving a rejection. Thank them for their time, express that you remain interested in future opportunities at the company, and politely ask if there is any feedback on your application.`,
  };

  return `Write a concise ${emailType.replace("_", " ")} email for a job application.

Context:
- Company: ${application.company_name}
- Role: ${application.role_title}
- Application stage: ${application.status}
- Target country: ${countryName}

Purpose:
${typeInstructions[emailType] ?? typeInstructions.follow_up}

Format requirements:
- First line must be: Subject: [write the subject line here]
- Blank line after subject
- Email body: 4–6 sentences maximum — concise is key
- End with "${signOff}" and "Your Name" placeholder
- Output only the email — no explanations or meta-commentary`;
}
