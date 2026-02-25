"use client";

import Link from 'next/link';
import { GitPullRequest, Search, FileText } from 'lucide-react';
import { motion, Variants } from 'framer-motion';
import { Logo } from '@/components/Logo';
import { HeroAnimation } from '@/components/HeroAnimation';

const fadeIn: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen font-sans bg-gray-50">
      {/* Header */}
      <header className="px-6 py-4 flex justify-between items-center bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
        <Link href="/" className="flex items-center space-x-2 text-indigo-900 group focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded" aria-label="SpecSentry Home">
          <Logo className="w-8 h-8 text-indigo-600 group-hover:text-indigo-700 transition-colors" />
          <span className="font-bold text-xl tracking-tight">SpecSentry</span>
        </Link>
        <nav className="flex space-x-4 items-center">
          <Link href="/login" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded px-2 py-1">
            Sign in
          </Link>
          <Link href="/login" className="text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 shadow-md hover:shadow-lg px-5 py-2.5 rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Get Started
          </Link>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="flex-1 overflow-x-hidden">
        <section className="relative px-6 py-20 lg:py-32 overflow-hidden bg-gradient-to-b from-white to-gray-50">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
            <motion.div 
              className="flex-1 space-y-8 text-center lg:text-left z-10"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.h1 variants={fadeIn} className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight leading-[1.1]">
                API Contract Guard & <br className="hidden lg:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-500">
                  Changelog Factory
                </span>
              </motion.h1>
              <motion.p variants={fadeIn} className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto lg:mx-0">
                Never ship a breaking change silently. SpecSentry guards your pull requests and continuously monitors external APIs for unexpected mutations.
              </motion.p>
              <motion.div variants={fadeIn} className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
                <Link href="/login" className="w-full sm:w-auto px-8 py-3.5 bg-indigo-600 text-white font-medium rounded-full shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all text-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 text-center">
                  Start Guarding Free
                </Link>
                <Link href="#features" className="w-full sm:w-auto px-8 py-3.5 bg-white text-indigo-600 border border-indigo-100 font-medium rounded-full shadow-sm hover:shadow hover:bg-indigo-50 transition-all text-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 text-center">
                  View Features
                </Link>
              </motion.div>
            </motion.div>
            
            <motion.div 
              className="flex-1 w-full max-w-lg lg:max-w-none relative z-10"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <HeroAnimation />
            </motion.div>
          </div>
          
          {/* Subtle Parallax Background Shapes */}
          <motion.div 
            className="absolute top-20 left-10 w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
            animate={{ x: [0, 30, 0], y: [0, -30, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            aria-hidden="true"
          />
          <motion.div 
            className="absolute top-40 right-20 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
            animate={{ x: [0, -40, 0], y: [0, 40, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            aria-hidden="true"
          />
        </section>

        {/* Features Section */}
        <section id="features" className="px-6 py-24 bg-white relative">
          <div className="max-w-7xl mx-auto relative z-10">
            <motion.div 
              className="text-center mb-20"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">How SpecSentry Works</h2>
              <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">Automate your OpenAPI spec governance directly in GitHub with zero friction.</p>
            </motion.div>
            
            <motion.div 
              className="grid md:grid-cols-3 gap-8 lg:gap-12"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={staggerContainer}
            >
              {/* Feature 1 */}
              <motion.div variants={fadeIn} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow group">
                <div className="w-14 h-14 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-600 mb-6 group-hover:scale-110 transition-transform duration-300">
                  <GitPullRequest className="w-7 h-7" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">PR Guard</h3>
                <p className="text-gray-600 leading-relaxed text-base">
                  Catch breaking changes before they merge. Our GitHub Action fails your CI builds automatically if the API contract is violated, ensuring backward compatibility.
                </p>
              </motion.div>
              
              {/* Feature 2 */}
              <motion.div variants={fadeIn} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow group">
                <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 mb-6 group-hover:scale-110 transition-transform duration-300">
                  <FileText className="w-7 h-7" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Changelog Factory</h3>
                <p className="text-gray-600 leading-relaxed text-base">
                  Stop writing release notes by hand. SpecSentry generates human-readable markdown summaries detailing every endpoint, parameter, and schema change.
                </p>
              </motion.div>
              
              {/* Feature 3 */}
              <motion.div variants={fadeIn} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow group">
                <div className="w-14 h-14 bg-teal-50 rounded-xl flex items-center justify-center text-teal-600 mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Search className="w-7 h-7" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Scheduled Monitoring</h3>
                <p className="text-gray-600 leading-relaxed text-base">
                  Watch external or third-party OpenAPI URLs. We'll automatically open a PR in your repo alerting you the moment upstream dependencies change.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 py-12 px-6 text-gray-300">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 border-t border-gray-800 pt-8">
          <div className="flex items-center space-x-3">
            <Logo className="w-6 h-6 text-indigo-400" />
            <span className="font-semibold text-lg tracking-tight text-white">SpecSentry</span>
          </div>
          <div className="flex space-x-6 text-sm">
            <Link href="#" className="hover:text-white transition-colors focus:outline-none focus:underline rounded">Terms</Link>
            <Link href="#" className="hover:text-white transition-colors focus:outline-none focus:underline rounded">Privacy</Link>
            <Link href="https://github.com" className="hover:text-white transition-colors focus:outline-none focus:underline rounded">GitHub</Link>
          </div>
          <p className="text-sm text-gray-500">© {new Date().getFullYear()} SpecSentry. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
