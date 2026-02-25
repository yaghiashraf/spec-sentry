import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'SpecSentry | API Contract Guard & Changelog Factory',
  description: 'Never ship a breaking change silently. SpecSentry guards your pull requests and continuously monitors external APIs for unexpected mutations.',
  keywords: ['OpenAPI', 'Swagger', 'API Contract', 'Changelog', 'GitHub Actions', 'CI/CD', 'API Monitoring'],
  authors: [{ name: 'SpecSentry' }],
  creator: 'SpecSentry',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://spec-sentry.vercel.app',
    title: 'SpecSentry | API Contract Guard & Changelog Factory',
    description: 'Guard your pull requests and monitor external APIs for unexpected mutations.',
    siteName: 'SpecSentry',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SpecSentry | API Contract Guard & Changelog Factory',
    description: 'Guard your pull requests and monitor external APIs for unexpected mutations.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white text-gray-900 min-h-screen flex flex-col`}>
        {children}
      </body>
    </html>
  );
}
