"use client";

import Link from 'next/link';
import { Github } from 'lucide-react';
import { motion } from 'framer-motion';
import { Logo } from '@/components/Logo';

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 py-12 sm:px-6 lg:px-8 font-sans relative overflow-hidden">
      {/* Background Ornaments */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-indigo-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 pointer-events-none" aria-hidden="true" />

      <motion.div 
        className="max-w-md w-full relative z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        {/* Logo Header */}
        <div className="flex justify-center mb-10">
          <Link href="/" className="flex items-center space-x-2 text-indigo-900 group focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded" aria-label="Back to SpecSentry Home">
            <Logo className="w-10 h-10 text-indigo-600 group-hover:text-indigo-700 transition-colors" />
            <span className="font-bold text-3xl tracking-tight">SpecSentry</span>
          </Link>
        </div>

        {/* Login Card */}
        <div className="bg-white rounded-2xl shadow-xl shadow-indigo-100/50 border border-gray-100 p-8 sm:p-10 space-y-8">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 tracking-tight">Welcome back</h1>
            <p className="mt-3 text-base text-gray-600 leading-relaxed">
              Sign in to manage your API Contract Guard and view changelogs.
            </p>
          </div>
          
          <div className="space-y-6 pt-2">
            <Link
              href="/dashboard"
              className="w-full flex items-center justify-center py-3.5 px-4 border border-transparent rounded-xl shadow-md text-sm font-semibold text-white bg-gray-900 hover:bg-black hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 transition-all transform hover:-translate-y-0.5"
              aria-label="Sign in with GitHub"
            >
              <Github className="w-5 h-5 mr-3" aria-hidden="true" />
              Sign in with GitHub
            </Link>
            
            <div className="relative my-8">
              <div className="absolute inset-0 flex items-center" aria-hidden="true">
                <div className="w-full border-t border-gray-200"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-white text-gray-500 font-medium tracking-wide text-xs uppercase rounded-full border border-gray-200">Demo Environment</span>
              </div>
            </div>
            
            <div className="text-center text-sm text-gray-600 bg-indigo-50/50 p-4 rounded-xl border border-indigo-100/50" role="note">
              This is a template simulation. Production authentication can be seamlessly integrated using <strong className="font-semibold text-indigo-900">NextAuth.js</strong>.
            </div>
          </div>
        </div>

        {/* Footer links */}
        <div className="mt-8 text-center text-sm">
          <Link href="/" className="text-gray-500 hover:text-indigo-600 font-medium transition-colors focus:outline-none focus:underline rounded">
            &larr; Back to home
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
