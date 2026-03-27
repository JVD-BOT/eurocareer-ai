import Link from "next/link";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white">
      <nav className="border-b px-6 py-3.5 flex items-center justify-between">
        <Link href="/" className="text-indigo-600 font-bold text-lg">★ EuroCareer AI</Link>
        <Link href="/auth/login" className="text-sm text-gray-600 hover:text-gray-900">Sign in</Link>
      </nav>

      <main className="max-w-2xl mx-auto px-6 py-12 prose prose-gray prose-sm">
        <h1>Privacy Policy</h1>
        <p className="text-gray-500">Last updated: {new Date().toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}</p>

        <h2>1. Who we are</h2>
        <p>EuroCareer AI ("we", "us", "our") operates the EuroCareer AI platform at this domain. We are the data controller for the personal data described in this policy.</p>

        <h2>2. What data we collect</h2>
        <ul>
          <li><strong>Account data:</strong> email address and password hash, collected when you register.</li>
          <li><strong>Profile data:</strong> name, nationality, work authorisation status, languages, and CV/resume text — provided voluntarily to power AI features.</li>
          <li><strong>Application data:</strong> job application records you create (company, role, status, notes).</li>
          <li><strong>AI-generated content:</strong> CVs and cover letters generated on your behalf, stored against your application records.</li>
          <li><strong>Usage data:</strong> AI credit usage, subscription plan, and generation history.</li>
          <li><strong>Payment data:</strong> handled entirely by Stripe — we store only your Stripe customer ID, not card details.</li>
          <li><strong>Technical data:</strong> IP address, browser type, and access logs retained for security purposes.</li>
        </ul>

        <h2>3. Legal basis (GDPR)</h2>
        <p>We process your data under the following legal bases:</p>
        <ul>
          <li><strong>Contract performance:</strong> to provide the service you signed up for.</li>
          <li><strong>Legitimate interests:</strong> security, fraud prevention, and service improvement.</li>
          <li><strong>Consent:</strong> for optional cookies and marketing communications.</li>
        </ul>

        <h2>4. How we use your data</h2>
        <ul>
          <li>To provide and personalise the EuroCareer AI service.</li>
          <li>To generate AI-adapted CVs and cover letters using your resume text and job details.</li>
          <li>To process subscription payments via Stripe.</li>
          <li>To enforce fair-use limits and detect abuse.</li>
          <li>To communicate service updates and (with consent) marketing messages.</li>
        </ul>

        <h2>5. AI processing</h2>
        <p>Your resume text and job details are sent to Anthropic&apos;s Claude API to generate career documents. Anthropic processes this data as a sub-processor under their API terms. We do not use your data to train AI models.</p>

        <h2>6. Data sharing</h2>
        <p>We share data only with the following sub-processors:</p>
        <ul>
          <li><strong>Supabase</strong> — database and authentication (EU-hosted).</li>
          <li><strong>Anthropic</strong> — AI generation.</li>
          <li><strong>Stripe</strong> — payment processing.</li>
        </ul>
        <p>We do not sell your data to third parties.</p>

        <h2>7. Data retention</h2>
        <p>We retain your data for as long as your account is active. When you delete your account, all personal data is deleted within 30 days. AI generation logs are retained for 90 days for abuse prevention.</p>

        <h2>8. Your rights (GDPR)</h2>
        <p>You have the right to: access your data, rectify inaccurate data, erase your data ("right to be forgotten"), restrict processing, data portability, and object to processing. To exercise any right, contact us at the email below.</p>

        <h2>9. Cookies</h2>
        <p>We use strictly necessary cookies for authentication (Supabase session token). We use no third-party advertising or tracking cookies. You can manage cookie preferences via the banner shown on first visit.</p>

        <h2>10. Security</h2>
        <p>All data is encrypted in transit (TLS) and at rest. Database access is protected by Row Level Security — only you can access your data. We conduct regular security reviews.</p>

        <h2>11. Contact</h2>
        <p>For privacy enquiries or to exercise your rights: <strong>privacy@eurocareer.ai</strong></p>
      </main>

      <footer className="border-t py-6 text-center text-sm text-gray-400">
        <Link href="/" className="hover:text-gray-600">← Back to home</Link>
        {" · "}
        <Link href="/terms" className="hover:text-gray-600">Terms of Service</Link>
      </footer>
    </div>
  );
}
