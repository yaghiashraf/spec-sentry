import Link from 'next/link';
import { Github, ShieldAlert } from 'lucide-react';

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
      <div className="max-w-md w-full">
        {/* Logo Header */}
        <div className="flex justify-center mb-8">
          <Link href="/" className="flex items-center space-x-2 text-gray-900 hover:text-gray-700 transition-colors">
            <ShieldAlert className="w-8 h-8 text-red-600" />
            <span className="font-bold text-3xl tracking-tight">SpecSentry</span>
          </Link>
        </div>

        {/* Login Card */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 space-y-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900">Welcome back</h2>
            <p className="mt-2 text-base text-gray-600">
              Sign in to manage your API Contract Guard
            </p>
          </div>
          
          <div className="space-y-4">
            <Link
              href="/dashboard"
              className="w-full flex items-center justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-semibold text-white bg-[#24292F] hover:bg-[#1b1f23] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#24292F] transition-all"
            >
              <Github className="w-5 h-5 mr-3" />
              Sign in with GitHub
            </Link>
            
            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500 font-medium">Demo Mode</span>
              </div>
            </div>
            
            <p className="text-center text-sm text-gray-600 bg-gray-50 p-3 rounded-lg border border-gray-100">
              This is a template simulation. Authentication can be wired up using <strong>NextAuth.js</strong>.
            </p>
          </div>
        </div>

        {/* Footer links */}
        <div className="mt-8 text-center text-sm">
          <Link href="/" className="text-gray-500 hover:text-gray-900 font-medium transition-colors">
            &larr; Back to home
          </Link>
        </div>
      </div>
    </div>
  );
}
