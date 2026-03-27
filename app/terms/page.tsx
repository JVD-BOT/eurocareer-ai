import Link from "next/link";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white">
      <nav className="border-b px-6 py-3.5 flex items-center justify-between">
        <Link href="/" className="text-indigo-600 font-bold text-lg">★ EuroCareer AI</Link>
        <Link href="/auth/login" className="text-sm text-gray-600 hover:text-gray-900">Sign in</Link>
      </nav>

      <main className="max-w-2xl mx-auto px-6 py-12 prose prose-gray prose-sm">
        <h1>Terms of Service</h1>
        <p className="text-gray-500">Last updated: {new Date().toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}</p>

        <h2>1. Acceptance</h2>
        <p>By creating an account or using EuroCareer AI ("the Service"), you agree to these Terms. If you do not agree, do not use the Service.</p>

        <h2>2. Description of service</h2>
        <p>EuroCareer AI provides an AI-powered job application management platform including an application tracker, AI CV adapter, cover letter generator, and follow-up email tools, targeted at European job seekers.</p>

        <h2>3. Accounts</h2>
        <p>You must provide a valid email address and keep your password secure. You are responsible for all activity under your account. You must be at least 16 years old to use the Service.</p>

        <h2>4. Acceptable use</h2>
        <p>You agree not to:</p>
        <ul>
          <li>Use the Service to generate misleading, fraudulent, or discriminatory content.</li>
          <li>Attempt to reverse-engineer, scrape, or overload the Service.</li>
          <li>Share your account credentials with others.</li>
          <li>Use the Service for any unlawful purpose.</li>
        </ul>

        <h2>5. AI-generated content</h2>
        <p>AI-generated CVs, cover letters, and emails are provided as a starting point. You are responsible for reviewing, editing, and submitting any content. We make no guarantee of accuracy, suitability, or employment outcomes.</p>

        <h2>6. Subscription and payments</h2>
        <p>Free accounts receive 3 AI generations per month. Pro accounts (€9/month) receive unlimited generations. Payments are processed by Stripe. Subscriptions renew automatically and can be cancelled at any time via the billing portal — cancellation takes effect at the end of the current billing period. No refunds are issued for partial months.</p>

        <h2>7. Intellectual property</h2>
        <p>The EuroCareer AI platform, branding, and proprietary algorithms are owned by us. Content you create (applications, CVs, cover letters) remains yours. You grant us a limited licence to process your content solely to provide the Service.</p>

        <h2>8. Availability</h2>
        <p>We aim for high availability but do not guarantee uninterrupted access. We may suspend the Service for maintenance or updates with reasonable notice where possible.</p>

        <h2>9. Limitation of liability</h2>
        <p>To the maximum extent permitted by law, EuroCareer AI is not liable for indirect, incidental, or consequential damages. Our total liability to you for any claim shall not exceed the amount you paid us in the three months preceding the claim.</p>

        <h2>10. Termination</h2>
        <p>We may suspend or terminate accounts that violate these Terms. You may delete your account at any time. Upon termination, your data will be deleted in accordance with our Privacy Policy.</p>

        <h2>11. Governing law</h2>
        <p>These Terms are governed by the laws of the European Union and the jurisdiction in which the company is registered. Any disputes shall be resolved in the competent courts of that jurisdiction.</p>

        <h2>12. Changes</h2>
        <p>We may update these Terms. Continued use of the Service after changes constitutes acceptance. We will notify you of material changes by email or in-app notice.</p>

        <h2>13. Contact</h2>
        <p>For questions about these Terms: <strong>legal@eurocareer.ai</strong></p>
      </main>

      <footer className="border-t py-6 text-center text-sm text-gray-400">
        <Link href="/" className="hover:text-gray-600">← Back to home</Link>
        {" · "}
        <Link href="/privacy" className="hover:text-gray-600">Privacy Policy</Link>
      </footer>
    </div>
  );
}
