import { checkLicense } from '@/lib/license';
import Link from 'next/link';

export default async function DashboardPage() {
  const license = await checkLicense();

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Dashboard</h1>

      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
        <h2 className="text-xl font-semibold mb-4">License Status</h2>
        <div className="flex items-center space-x-4">
          <span className={`px-3 py-1 rounded-full text-sm font-medium ${license.isValid && license.tier === 'paid' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
            {license.tier.toUpperCase()} MODE
          </span>
          {license.tier === 'demo' && (
            <p className="text-sm text-gray-500">
              Demo mode allows 1 spec project (baseline vs current local diff). No PR automation.
            </p>
          )}
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Projects</h2>
          {license.tier === 'paid' ? (
            <Link href="/projects/new" className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors shadow-sm">
              + New Project
            </Link>
          ) : (
            <button disabled className="bg-gray-200 text-gray-400 px-4 py-2 rounded-md cursor-not-allowed" title="Upgrade to Paid to add more projects">
              + New Project (Paid Only)
            </button>
          )}
        </div>
        
        <div className="border border-gray-200 rounded-md overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Project</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last Check</th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Demo Local Spec</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                    Breaking Changes
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Just now</td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <Link href="/projects/demo" className="text-blue-600 hover:text-blue-900">View Diffs</Link>
                </td>
              </tr>
              {license.tier === 'paid' && (
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Stripe API (Scheduled)</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                      Healthy
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">2 days ago</td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <Link href="/projects/stripe-api" className="text-blue-600 hover:text-blue-900">View Diffs</Link>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
          {license.tier === 'demo' && (
            <div className="p-4 bg-gray-50 text-center text-sm text-gray-500 border-t border-gray-200">
              Upgrade to PAID tier to monitor unlimited remote OpenAPI specs via scheduled GitHub Actions.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
