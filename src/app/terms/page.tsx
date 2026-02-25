import Link from 'next/link';

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6">
      <div className="max-w-3xl mx-auto bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100 text-gray-700 space-y-6">
        <div className="mb-8">
          <Link href="/" className="text-sm font-medium text-indigo-600 hover:text-indigo-800 transition-colors">
            &larr; Back to home
          </Link>
        </div>
        <h1 className="text-3xl font-bold text-gray-900">Terms of Service</h1>
        <p className="text-gray-500 font-medium">Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">1. Agreement to Terms</h2>
        <p className="leading-relaxed">By accessing or using SpecSentry ("Service"), you agree to be bound by these Terms of Service. If you disagree with any part of the terms, you may not access the Service.</p>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">2. Description of Service</h2>
        <p className="leading-relaxed">SpecSentry is an API contract guard and changelog factory that integrates with GitHub to monitor OpenAPI specifications for breaking changes.</p>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">3. License and Subscriptions</h2>
        <ul className="list-disc list-inside space-y-2 leading-relaxed">
          <li><strong className="text-gray-900">Demo License:</strong> Provided "as is" with functional limitations.</li>
          <li><strong className="text-gray-900">Paid License:</strong> Grants a non-exclusive, non-transferable, revocable license to use the premium features of the Service according to your purchased tier.</li>
        </ul>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">4. User Responsibilities</h2>
        <p className="leading-relaxed">You are responsible for safeguarding your account credentials, license keys, and GitHub access tokens. You agree not to misuse the Service to cause harm or disruption to any third-party APIs.</p>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">5. Termination</h2>
        <p className="leading-relaxed">We may terminate or suspend your access to our Service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.</p>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">6. Limitation of Liability</h2>
        <p className="leading-relaxed">In no event shall SpecSentry, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service.</p>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">7. Contact Us</h2>
        <p className="leading-relaxed">If you have any questions about these Terms, please contact us at support@specsentry.com.</p>
      </div>
    </div>
  );
}