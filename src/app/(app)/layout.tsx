import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../globals.css';
import Link from 'next/link';
import { Logo } from '@/components/Logo';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'SpecSentry - Dashboard',
};

export default function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen overflow-hidden bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-900 text-white flex flex-col">
        <div className="h-16 flex items-center px-6 border-b border-gray-800">
          <Logo className="w-6 h-6 text-indigo-400 mr-2" />
          <span className="font-bold text-xl tracking-tight">SpecSentry</span>
        </div>
        <nav className="flex-1 px-4 py-6 space-y-2">
          <Link href="/dashboard" className="block px-4 py-2 rounded-md hover:bg-gray-800 transition-colors">
            Dashboard
          </Link>
          <Link href="/projects/new" className="block px-4 py-2 rounded-md hover:bg-gray-800 transition-colors">
            New Project
          </Link>
          <Link href="/settings" className="block px-4 py-2 rounded-md hover:bg-gray-800 transition-colors">
            Settings
          </Link>
        </nav>
        <div className="p-4 border-t border-gray-800">
          <Link href="/login" className="block text-center px-4 py-2 text-sm text-gray-400 hover:text-white transition-colors">
            Sign Out
          </Link>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 overflow-y-auto">
        <div className="p-8 max-w-7xl mx-auto text-gray-900">
          {children}
        </div>
      </main>
    </div>
  );
}
