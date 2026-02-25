import Link from 'next/link';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6">
      <div className="max-w-3xl mx-auto bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100 text-gray-700 space-y-6">
        <div className="mb-8">
          <Link href="/" className="text-sm font-medium text-indigo-600 hover:text-indigo-800 transition-colors">
            &larr; Back to home
          </Link>
        </div>
        <h1 className="text-3xl font-bold text-gray-900">Privacy Policy</h1>
        <p className="text-gray-500 font-medium">Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">1. Information We Collect</h2>
        <p className="leading-relaxed">We collect information to provide better services to all our users. This may include:</p>
        <ul className="list-disc list-inside space-y-2 leading-relaxed">
          <li><strong className="text-gray-900">Account Information:</strong> When you sign up via GitHub, we receive basic profile information (such as your username and email).</li>
          <li><strong className="text-gray-900">Repository Metadata:</strong> Our application may access metadata related to the OpenAPI specifications you configure it to monitor, subject to the permissions you grant via GitHub.</li>
          <li><strong className="text-gray-900">Payment Information:</strong> If you purchase a paid license, your payment details are processed securely by Stripe. We do not store your credit card details on our servers.</li>
        </ul>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">2. How We Use Information</h2>
        <p className="leading-relaxed">We use the information we collect to:</p>
        <ul className="list-disc list-inside space-y-2 leading-relaxed">
          <li>Provide, maintain, and improve our services.</li>
          <li>Process transactions and send related information (e.g., license keys).</li>
          <li>Respond to your comments, questions, and requests.</li>
        </ul>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">3. Data Security</h2>
        <p className="leading-relaxed">We use commercially reasonable safeguards to help keep the information collected through the Service secure. However, no method of transmission over the Internet, or method of electronic storage, is 100% secure.</p>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">4. Third-Party Services</h2>
        <p className="leading-relaxed">We utilize third-party services, such as Vercel (for hosting), GitHub (for authentication and CI/CD), and Stripe (for payments). Please review their respective privacy policies to understand how they handle your data.</p>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">5. Your Choices</h2>
        <p className="leading-relaxed">You can manage your account and revoke our application's access to your GitHub repositories at any time through your GitHub settings.</p>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">6. Contact Us</h2>
        <p className="leading-relaxed">If you have any questions or concerns about this Privacy Policy, please contact us at privacy@specsentry.com.</p>
      </div>
    </div>
  );
}