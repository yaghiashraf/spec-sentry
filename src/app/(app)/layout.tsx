import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../globals.css';
import Link from 'next/link';
import { Logo } from '@/components/Logo';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { redirect } from 'next/navigation';
import { SignOutButton } from '@/components/SignOutButton';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'SpecSentry - Dashboard',
};

export default async function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect('/login');
  }

  return (
    <div className="flex h-screen overflow-hidden bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-900 text-white flex flex-col">
        <div className="h-16 flex items-center px-6 border-b border-gray-800">
          <Logo className="w-6 h-6 text-indigo-400 mr-2" />
          <span className="font-bold text-xl tracking-tight">SpecSentry</span>
        </div>
        
        {/* User Profile */}
        <div className="px-6 py-4 border-b border-gray-800 flex items-center space-x-3">
          {session.user?.image ? (
            <img src={session.user.image} alt="Avatar" className="w-8 h-8 rounded-full border border-gray-700" />
          ) : (
            <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center font-bold text-xs">
              {session.user?.name?.charAt(0) || 'U'}
            </div>
          )}
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-white truncate">{session.user?.name}</p>
          </div>
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
          <SignOutButton />
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
