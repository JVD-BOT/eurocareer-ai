export interface CountryIntelligence {
    code: string;
    name: string;
    flag: string;
    photoExpectation: "Required" | "Expected" | "Optional" | "Not recommended";
    cvLength: string;
    language: string;
    formality: "Very formal" | "Formal" | "Moderate" | "Relaxed";
    keyNorms: string[];
    coverLetterStyle: string;
    signOff: string;
    topTip: string;
}

export const COUNTRY_INTELLIGENCE: CountryIntelligence[] = [
  {
        code: "DE",
        name: "Germany",
        flag: "\ud83c\udde9\ud83c\uddea",
        photoExpectation: "Expected",
        cvLength: "1\u20132 pages (Tabellarischer Lebenslauf)",
        language: "German strongly preferred",
        formality: "Very formal",
        keyNorms: [
                "Use reverse-chronological table format",
                "Include date of birth and nationality",
                "Explain all career gaps explicitly",
                "List grades for education (Abitur, GPA)",
                "Hobbies section is standard",
                "End with \u2018Referenzen auf Anfrage\u2019",
              ],
        coverLetterStyle:
                "Formal Anschreiben. Open with \u2018Sehr geehrte Damen und Herren\u2019. State exact job reference in the first sentence.",
        signOff: "Mit freundlichen Gr\u00fc\u00dfen",
        topTip:
                "German employers expect precision \u2014 a photo, structured format, and no unexplained gaps.",
  },
  {
        code: "NL",
        name: "Netherlands",
        flag: "\ud83c\uddf3\ud83c\uddf1",
        photoExpectation: "Not recommended",
        cvLength: "1\u20132 pages, skills-forward",
        language: "Dutch or English equally acceptable",
        formality: "Relaxed",
        keyNorms: [
                "Be concise and direct \u2014 Dutch value clarity",
                "Emphasise collaboration and teamwork",
                "Highlight international awareness",
                "List all languages spoken prominently",
                "Volunteering and side projects are positives",
                "Work-life balance is valued",
              ],
        coverLetterStyle:
                "Direct and practical. Skip flowery language. Mention specific value you bring.",
        signOff: "Met vriendelijke groet",
        topTip:
                "The Dutch prefer substance over style \u2014 keep it short, honest, and skills-focused.",
  },
  {
        code: "FR",
        name: "France",
        flag: "\ud83c\uddeb\ud83c\uddf7",
        photoExpectation: "Expected",
        cvLength: "1 page (junior) / 2 pages (senior)",
        language: "French strongly preferred",
        formality: "Very formal",
        keyNorms: [
                "Include a professional photo",
                "Personal details prominent: name, address, DOB, nationality",
                "Education prestige matters (Grandes \u00c9coles, Bac+X)",
                "Separate technical from soft skills",
                "A Lettre de motivation is traditional",
                "Use full official diploma names",
              ],
        coverLetterStyle:
                "Formal lettre de motivation. Follow strict French business letter format. Emphasise academic background.",
        signOff:
                "Veuillez agr\u00e9er, Madame, Monsieur, l\u2019expression de mes salutations distingu\u00e9es",
        topTip:
                "Academic credentials carry enormous weight in France \u2014 always highlight your education prominently.",
  },
  {
        code: "SE",
        name: "Sweden",
        flag: "\ud83c\uddf8\ud83c\uddea",
        photoExpectation: "Optional",
        cvLength: "1\u20132 pages, clean and modern",
        language: "Swedish or English both acceptable",
        formality: "Relaxed",
        keyNorms: [
                "Understated tone \u2014 follow the \u2018lagom\u2019 principle",
                "Let quantified achievements speak for themselves",
                "Avoid gendered language",
                "No need for age or marital status",
                "Collaboration valued over individual heroics",
                "Mentioning interests outside work is positive",
              ],
        coverLetterStyle:
                "Understated and genuine. Avoid boasting. Mention collaborative work style.",
        signOff: "Med v\u00e4nliga h\u00e4lsningar",
        topTip:
                "Sweden values humility and equality \u2014 show achievements through numbers, not self-promotion.",
  },
  {
        code: "DK",
        name: "Denmark",
        flag: "\ud83c\udde9\ud83c\uddf0",
        photoExpectation: "Optional",
        cvLength: "1\u20132 pages, direct",
        language: "Danish or English both fine",
        formality: "Relaxed",
        keyNorms: [
                "Direct, egalitarian, and pragmatic tone",
                "Quantified achievements strongly preferred",
                "Mention Danish language skills even if basic",
                "Volunteering and community engagement are positives",
                "Flat hierarchy culture \u2014 show teamwork",
                "Keep formatting clean and simple",
              ],
        coverLetterStyle:
                "Direct, friendly, egalitarian. Show genuine personality. Avoid corporate jargon.",
        signOff: "Med venlig hilsen",
        topTip:
                "Even basic Danish skills are a huge plus \u2014 mention them prominently to stand out.",
  },
  {
        code: "GB",
        name: "United Kingdom",
        flag: "\ud83c\uddec\ud83c\udde7",
        photoExpectation: "Not recommended",
        cvLength: "2 pages max, reverse chronological",
        language: "British English throughout",
        formality: "Formal",
        keyNorms: [
                "Say \u2018CV\u2019 not \u2018resume\u2019",
                "Do NOT include a photo (discrimination law)",
                "Do NOT include date of birth",
                "Include a Personal Profile at the top (2\u20134 lines)",
                "State right-to-work / visa status if non-UK",
                "Use British spelling (colour, programme, organisation)",
              ],
        coverLetterStyle:
                "Professional but approachable. Open with a strong hook. Reference the job ad specifically.",
        signOff: "Yours sincerely",
        topTip:
                "No photo, no DOB \u2014 UK anti-discrimination law is strict. Always state your right-to-work status.",
  },
  {
        code: "ES",
        name: "Spain",
        flag: "\ud83c\uddea\ud83c\uddf8",
        photoExpectation: "Expected",
        cvLength: "1\u20132 pages",
        language: "Spanish strongly preferred",
        formality: "Formal",
        keyNorms: [
                "Include a professional photo",
                "Personal details: name, address, DOB, nationality, NIE/NIF if applicable",
                "Language skills extremely important \u2014 list all with CEFR level",
                "Include hobbies to show personality and cultural fit",
                "References are often expected",
                "Tone: formal but warm",
              ],
        coverLetterStyle:
                "Warm and polished. Show enthusiasm for the company. Mention language skills prominently.",
        signOff: "Atentamente",
        topTip:
                "Language skills with CEFR levels are essential in Spain \u2014 always list every language you speak.",
  },
  {
        code: "IE",
        name: "Ireland",
        flag: "\ud83c\uddee\ud83c\uddea",
        photoExpectation: "Not recommended",
        cvLength: "2 pages max (UK-style format)",
        language: "English",
        formality: "Moderate",
        keyNorms: [
                "Similar to UK CV format",
                "No photo required (equality law)",
                "Date of birth not required",
                "Personal statement at top (2\u20134 lines)",
                "Right-to-work status CRITICAL for non-EEA nationals",
                "Tech skills section prominent (major tech sector)",
              ],
        coverLetterStyle:
                "Similar to UK. Mention right-to-work status early. Show genuine enthusiasm and culture fit.",
        signOff: "Yours sincerely",
        topTip:
                "Ireland\u2019s tech sector is massive \u2014 highlight technical skills and state your work authorisation clearly.",
  },
  {
        code: "BE",
        name: "Belgium",
        flag: "\ud83c\udde7\ud83c\uddea",
        photoExpectation: "Expected",
        cvLength: "1\u20132 pages, region-dependent format",
        language: "Match the region: French (Brussels/Wallonia), Dutch (Flanders)",
        formality: "Formal",
        keyNorms: [
                "Format depends on region \u2014 French style for Wallonia/Brussels, Dutch for Flanders",
                "Photo common, especially in French-speaking regions",
                "Languages extremely prominent \u2014 trilingual (FR/NL/EN) is very valuable",
                "EU citizenship / right to work: mention if relevant",
                "Belgium hosts major EU institutions \u2014 EU experience valued",
                "Formal and structured tone",
              ],
        coverLetterStyle:
                "Formal. Show awareness of bilingual/multilingual environment. EU institution familiarity is a plus.",
        signOff: "Met vriendelijke groet / Cordialement",
        topTip:
                "Belgium is multilingual \u2014 tailor your CV language to the region and highlight all languages spoken.",
  },
  {
        code: "AT",
        name: "Austria",
        flag: "\ud83c\udde6\ud83c\uddf9",
        photoExpectation: "Expected",
        cvLength: "1\u20132 pages",
        language: "German (Austrian register)",
        formality: "Formal",
        keyNorms: [
                "Similar to Germany but slightly less formal",
                "Photo is common and standard",
                "Birth date optional but common",
                "Austrian degree names preferred where applicable",
                "Less focus on career gap explanations than Germany",
                "Hobbies are fine to include",
              ],
        coverLetterStyle:
                "Similar to Germany but slightly warmer. Show genuine interest in Austrian company culture.",
        signOff: "Mit freundlichen Gr\u00fc\u00dfen",
        topTip:
                "Think of Austria as \u2018Germany-lite\u2019 \u2014 similar standards but a slightly warmer, less rigid culture.",
  },
  {
        code: "CH",
        name: "Switzerland",
        flag: "\ud83c\udde8\ud83c\udded",
        photoExpectation: "Expected",
        cvLength: "2 pages, thorough and precise",
        language: "Match region: German (Z\u00fcrich/Bern), French (Geneva/Lausanne), Italian (Lugano)",
        formality: "Very formal",
        keyNorms: [
                "Very high standards \u2014 precision and thoroughness are Swiss values",
                "Work permit status is critical (B, C, G permits)",
                "Nationality and languages must be prominent",
                "International experience highly valued",
                "Salary expectations are common to include",
                "Photo common across all language regions",
              ],
        coverLetterStyle:
                "Precise and structured. Mention permit status. Show understanding of multilingual environment.",
        signOff: "Mit freundlichen Gr\u00fc\u00dfen / Avec mes meilleures salutations",
        topTip:
                "Always state your work permit type \u2014 Swiss permits are complex and employers need to know upfront.",
  },
  {
        code: "IT",
        name: "Italy",
        flag: "\ud83c\uddee\ud83c\uddf9",
        photoExpectation: "Expected",
        cvLength: "1\u20132 pages",
        language: "Italian strongly preferred",
        formality: "Formal",
        keyNorms: [
                "Include a professional photo",
                "Personal details: DOB, nationality, Codice Fiscale if available",
                "Education: university, faculty, and specialisation are important",
                "Language skills highly important \u2014 list with CEFR levels",
                "References common to include or offer",
                "Motivation letter (Lettera di motivazione) is traditional",
              ],
        coverLetterStyle:
                "Elegant and formal. Show passion for the role. Emphasise academic credentials and language skills.",
        signOff: "Cordiali saluti",
        topTip:
                "Italian applications are formal and polished \u2014 include a photo, CEFR language levels, and a motivation letter.",
  },
  ];
