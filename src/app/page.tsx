import Link from 'next/link';
import { ShieldAlert, GitPullRequest, Search, FileText } from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="px-6 py-4 flex justify-between items-center bg-white border-b border-gray-100">
        <div className="flex items-center space-x-2 text-gray-900">
          <ShieldAlert className="w-6 h-6 text-red-600" />
          <span className="font-bold text-xl tracking-tight">SpecSentry</span>
        </div>
        <nav className="flex space-x-4 items-center">
          <Link href="/login" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
            Sign in
          </Link>
          <Link href="/login" className="text-sm font-medium text-white bg-black hover:bg-gray-800 px-4 py-2 rounded-md transition-colors">
            Get Started
          </Link>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="flex-1">
        <section className="px-6 py-24 md:py-32 bg-gray-50 border-b border-gray-100">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 tracking-tight leading-tight">
              API Contract Guard & <br className="hidden md:block" />
              <span className="text-red-600">Changelog Factory</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Never ship a breaking change silently. SpecSentry guards your pull requests and continuously monitors external APIs for unexpected mutations.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link href="/login" className="w-full sm:w-auto px-8 py-3 bg-black text-white font-medium rounded-md hover:bg-gray-800 transition-colors text-lg">
                Start Guarding Free
              </Link>
              <Link href="#features" className="w-full sm:w-auto px-8 py-3 bg-white text-gray-900 border border-gray-200 font-medium rounded-md hover:bg-gray-50 transition-colors text-lg">
                View Features
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="px-6 py-24 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900">How SpecSentry Works</h2>
              <p className="mt-4 text-lg text-gray-600">Automate your OpenAPI spec governance directly in GitHub.</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-12">
              <div className="space-y-4">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center text-red-600">
                  <GitPullRequest className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">PR Guard</h3>
                <p className="text-gray-600 leading-relaxed">
                  Catch breaking changes before they merge. Our GitHub Action fails your CI builds automatically if the API contract is violated.
                </p>
              </div>
              <div className="space-y-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600">
                  <FileText className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Changelog Factory</h3>
                <p className="text-gray-600 leading-relaxed">
                  Stop writing release notes by hand. SpecSentry generates human-readable markdown summaries detailing every endpoint and schema change.
                </p>
              </div>
              <div className="space-y-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center text-green-600">
                  <Search className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Scheduled Monitoring</h3>
                <p className="text-gray-600 leading-relaxed">
                  Watch external or third-party OpenAPI URLs. We'll automatically open a PR in your repo alerting you the moment upstream dependencies change.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 py-12 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center text-gray-400">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <ShieldAlert className="w-5 h-5 text-gray-500" />
            <span className="font-semibold text-gray-300">SpecSentry</span>
          </div>
          <p className="text-sm">© {new Date().getFullYear()} SpecSentry. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
