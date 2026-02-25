import Link from 'next/link';

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-xl shadow-lg border border-gray-100">
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">SpecSentry</h2>
          <p className="mt-2 text-sm text-gray-600">
            Sign in to manage your API Contract Guard
          </p>
        </div>
        <div className="mt-8 space-y-6">
          <Link
            href="/dashboard"
            className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black transition-colors"
          >
            Sign in with GitHub
          </Link>
          <p className="text-center text-xs text-gray-500 mt-4">
            (This is a template simulation. Authentication can be added using NextAuth.js)
          </p>
        </div>
      </div>
    </div>
  );
}
