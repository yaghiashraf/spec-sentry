import { checkLicense } from '@/lib/license';
import { KeyIcon, Clock } from 'lucide-react';

export default async function SettingsPage() {
  const license = await checkLicense();

  return (
    <div className="max-w-4xl space-y-6">
      <h1 className="text-3xl font-bold">Settings</h1>

      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 space-y-6">
        <h2 className="text-xl font-semibold border-b pb-2 flex items-center">
          <KeyIcon className="w-5 h-5 mr-2" /> License & Billing
        </h2>
        
        <div className="flex items-center space-x-4">
          <div>
            <p className="text-sm font-medium text-gray-500">Current Tier</p>
            <p className={`inline-flex px-3 py-1 mt-1 rounded-full text-sm font-medium ${license.tier === 'paid' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
              {license.tier.toUpperCase()}
            </p>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500">Status</p>
            <p className={`mt-1 font-semibold ${license.isValid ? 'text-green-600' : 'text-red-600'}`}>
              {license.isValid ? 'Valid' : 'Invalid or Missing'}
            </p>
          </div>
        </div>

        {license.tier === 'paid' ? (
          <div className="bg-gray-50 p-4 rounded-md text-sm text-gray-700 space-y-2">
            <p><strong>Features Unlocked:</strong></p>
            <ul className="list-disc list-inside">
              {license.features.map(f => <li key={f} className="font-mono">{f}</li>)}
            </ul>
          </div>
        ) : (
          <div className="bg-yellow-50 p-4 rounded-md text-sm text-yellow-800 border border-yellow-200">
            <p><strong>Demo Limitations:</strong></p>
            <ul className="list-disc list-inside mt-2">
              <li>Limited to 1 project</li>
              <li>Only local baseline vs current diffs</li>
              <li>Changelogs watermarked with "DEMO"</li>
              <li>Scheduled watch disabled</li>
            </ul>
            <button className="mt-4 bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600 transition-colors">
              Upgrade Now
            </button>
          </div>
        )}
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 space-y-6">
        <h2 className="text-xl font-semibold border-b pb-2 flex items-center">
          <Clock className="w-5 h-5 mr-2" /> Schedule Configuration (Paid Only)
        </h2>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Check Frequency</label>
          <select 
            className="w-full md:w-1/2 border-gray-300 rounded-md shadow-sm border p-2 bg-gray-50 disabled:opacity-50"
            disabled={license.tier === 'demo'}
          >
            <option>Weekly (cron: 0 0 * * 0)</option>
            <option>Daily (cron: 0 0 * * *)</option>
            <option>Hourly (cron: 0 * * * *)</option>
          </select>
          <p className="text-xs text-gray-500 mt-2">
            Updates <code>.github/workflows/scheduled-watch.yml</code> trigger.
          </p>
        </div>
      </div>
    </div>
  );
}
