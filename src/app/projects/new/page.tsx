import { checkLicense } from '@/lib/license';
import { redirect } from 'next/navigation';

export default async function NewProjectPage() {
  const license = await checkLicense();
  
  if (license.tier === 'demo') {
    // Note: in a real app, you might show a paywall instead of redirecting
    return (
      <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-sm border border-yellow-200">
        <h1 className="text-2xl font-bold text-yellow-800 mb-4">Upgrade Required</h1>
        <p className="text-gray-700 mb-4">
          Demo mode is limited to 1 spec project (the local baseline vs current).
          To create new projects and monitor upstream URLs via scheduled checks, please upgrade to the PAID tier.
        </p>
        <div className="mt-6">
          <a href="#" className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600 font-medium transition-colors">
            Purchase License
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Create New Spec Project</h1>
      <form className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Project Name</label>
          <input type="text" className="w-full border-gray-300 rounded-md shadow-sm border p-2 focus:ring-black focus:border-black" placeholder="e.g., Stripe API" />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Source Type</label>
          <select className="w-full border-gray-300 rounded-md shadow-sm border p-2">
            <option>URL (Scheduled Monitoring)</option>
            <option>Local File (PR Guard)</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Path or URL</label>
          <input type="text" className="w-full border-gray-300 rounded-md shadow-sm border p-2 focus:ring-black focus:border-black" placeholder="https://api.example.com/openapi.yaml" />
        </div>

        <div>
          <button type="submit" className="w-full bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 font-medium transition-colors">
            Create Project
          </button>
        </div>
        <p className="text-sm text-gray-500 mt-4 text-center">
          In this template, creating a project modifies <code>config/specs.yml</code> via GitHub API.
        </p>
      </form>
    </div>
  );
}
