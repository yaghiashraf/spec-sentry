"use client";

import { motion, Variants } from "framer-motion";

export function HeroAnimation() {
  const containerVariants: Variants = {
    animate: {
      transition: {
        staggerChildren: 0.8,
        repeat: Infinity,
        repeatDelay: 2,
      },
    },
  };

  const codeBlockVariants: Variants = {
    initial: { y: -50, opacity: 0, scale: 0.9 },
    animate: {
      y: [null, 40, 120] as any,
      opacity: [0, 1, 0],
      scale: [0.9, 1, 0.9],
      transition: {
        duration: 3,
        ease: "easeInOut",
      },
    },
  };

  const scanLineVariants: Variants = {
    initial: { y: 20, opacity: 0 },
    animate: {
      y: [20, 100, 20],
      opacity: [0, 1, 0],
      transition: { duration: 2, ease: "linear", repeat: Infinity },
    },
  };

  return (
    <div
      className="relative w-full max-w-sm mx-auto aspect-square bg-white rounded-2xl shadow-2xl border border-indigo-50 flex items-center justify-center overflow-hidden"
      aria-hidden="true"
    >
      {/* Background Grid */}
      <svg className="absolute inset-0 w-full h-full text-indigo-50 opacity-50" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>

      {/* Sentry Shield */}
      <motion.div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 text-indigo-600">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-24 h-24 drop-shadow-lg">
          <path d="M12 2L3 7v6c0 5.5 4 10 9 11 5-1 9-5.5 9-11V7l-9-5z" />
        </svg>
      </motion.div>

      {/* Scanning Line */}
      <motion.div
        variants={scanLineVariants}
        initial="initial"
        animate="animate"
        className="absolute top-0 left-0 w-full h-1 bg-indigo-500 shadow-[0_0_8px_2px_rgba(99,102,241,0.6)] z-20"
      />

      {/* Floating Code Blocks / Payload */}
      <motion.div
        variants={containerVariants}
        initial="initial"
        animate="animate"
        className="absolute inset-0 flex flex-col items-center z-0"
      >
        {[1, 2, 3].map((i) => (
          <motion.div
            key={i}
            variants={codeBlockVariants}
            className="absolute top-0 flex flex-col items-start p-3 bg-white border border-gray-200 rounded shadow-md w-3/4"
          >
            <div className="w-16 h-2 bg-indigo-200 rounded mb-2"></div>
            <div className="w-full flex space-x-2 mb-1">
              <div className="w-8 h-2 bg-gray-200 rounded"></div>
              <div className="w-12 h-2 bg-gray-300 rounded"></div>
            </div>
            <div className="w-full flex space-x-2">
              <div className="w-6 h-2 bg-gray-200 rounded"></div>
              <div className="w-20 h-2 bg-red-300 rounded"></div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
