"use client";

import { motion } from "framer-motion";
import { ShieldAlert, FileText, GitPullRequest, XCircle, FileJson } from "lucide-react";

export function HeroAnimation() {
  const LOOP_DURATION = 14;

  return (
    <div className="relative w-full max-w-xl aspect-[4/3] mx-auto bg-[#0D1117] rounded-2xl shadow-2xl border border-gray-800 flex items-center justify-center overflow-hidden font-mono text-xs text-gray-300" aria-hidden="true">
      
      {/* Background dots/grid */}
      <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#4F46E5 1.5px, transparent 1.5px)', backgroundSize: '24px 24px' }}></div>

      {/* GitHub PR Line connecting left and right */}
      <motion.div 
        className="absolute top-1/2 left-8 right-8 h-0.5 bg-gray-700 z-0"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: [0, 1, 1, 0] }}
        transition={{ duration: LOOP_DURATION, times: [0, 0.1, 0.9, 1], repeat: Infinity }}
        style={{ originX: 0 }}
      />
      <motion.div 
        className="absolute top-1/2 left-1/2 w-8 h-8 -ml-4 -mt-4 bg-[#0D1117] rounded-full border-2 border-gray-600 z-0 flex items-center justify-center shadow-lg"
        animate={{ borderColor: ['#4b5563', '#4b5563', '#ef4444', '#ef4444', '#4b5563'] }}
        transition={{ duration: LOOP_DURATION, times: [0, 0.5, 0.52, 0.9, 1], repeat: Infinity }}
      >
        <GitPullRequest className="w-4 h-4 text-gray-400" />
      </motion.div>

      {/* Baseline Spec Card (Left) */}
      <motion.div 
        className="absolute left-6 top-10 bottom-10 w-[42%] bg-[#161B22] border border-gray-700 rounded-lg p-4 z-10 shadow-xl flex flex-col overflow-hidden"
        animate={{ opacity: [0, 1, 1, 0], x: [-20, 0, 0, -20] }}
        transition={{ duration: LOOP_DURATION, times: [0, 0.05, 0.9, 1], repeat: Infinity }}
      >
        <div className="flex items-center text-gray-300 mb-3 border-b border-gray-700 pb-2 font-semibold bg-[#161B22] sticky top-0">
          <FileJson className="w-4 h-4 mr-2 text-indigo-400" />
          baseline.yaml
        </div>
        <div className="space-y-1.5 text-[11px] sm:text-xs">
          <span className="text-pink-400">paths:</span>
          <div className="pl-3 border-l border-gray-700/50 ml-1 mt-1">
            <span className="text-blue-300">/users:</span>
            <div className="pl-3 border-l border-gray-700/50 ml-1 mt-1">
              <span className="text-blue-300">get:</span>
              <div className="pl-3 border-l border-gray-700/50 ml-1 mt-1">
                <span className="text-pink-400">responses:</span>
                <div className="pl-3 text-gray-400 mt-1">
                  '200': ...<br/>
                  <span className="text-pink-400">type:</span> <span className="text-green-300">integer</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* PR Spec Card (Right) */}
      <motion.div 
        className="absolute right-6 top-10 bottom-10 w-[42%] bg-[#161B22] border border-gray-700 rounded-lg p-4 z-10 shadow-xl flex flex-col overflow-hidden"
        animate={{ opacity: [0, 0, 1, 1, 0], x: [20, 20, 0, 0, 20] }}
        transition={{ duration: LOOP_DURATION, times: [0, 0.1, 0.15, 0.9, 1], repeat: Infinity }}
      >
        <div className="flex items-center text-gray-300 mb-3 border-b border-gray-700 pb-2 font-semibold bg-[#161B22] sticky top-0 z-10">
          <FileJson className="w-4 h-4 mr-2 text-blue-400" />
          current.yaml <span className="ml-auto text-[9px] bg-blue-900/50 text-blue-300 px-1.5 py-0.5 rounded border border-blue-800">PR</span>
        </div>
        <div className="space-y-1.5 text-[11px] sm:text-xs relative">
          <span className="text-pink-400">paths:</span>
          <div className="pl-3 border-l border-gray-700/50 ml-1 mt-1">
            <span className="text-blue-300">/users:</span>
            <div className="pl-3 border-l border-gray-700/50 ml-1 mt-1">
              <span className="text-blue-300">get:</span>
              <div className="pl-3 border-l border-gray-700/50 ml-1 mt-1">
                <span className="text-pink-400">responses:</span>
                <div className="pl-3 text-gray-400 mt-1">
                  '200': ...<br/>
                  <span className="text-pink-400">type:</span> 
                  <motion.span 
                    animate={{ color: ['#86efac', '#86efac', '#f87171', '#f87171'] }}
                    transition={{ duration: LOOP_DURATION, times: [0, 0.25, 0.28, 1], repeat: Infinity }}
                    className="ml-1 font-bold"
                  >
                    <motion.span animate={{ display: ['inline', 'inline', 'none', 'none'] }} transition={{ duration: LOOP_DURATION, times: [0, 0.25, 0.28, 1], repeat: Infinity }}>integer</motion.span>
                    <motion.span animate={{ display: ['none', 'none', 'inline', 'inline'] }} transition={{ duration: LOOP_DURATION, times: [0, 0.25, 0.28, 1], repeat: Infinity }}>string</motion.span>
                  </motion.span>
                </div>
              </div>
            </div>
            
            {/* Added Endpoint */}
            <motion.div 
              className="mt-3 text-green-400 bg-green-900/20 px-2 py-1.5 rounded border border-green-900/50 relative overflow-hidden"
              animate={{ opacity: [0, 0, 1, 1] }}
              transition={{ duration: LOOP_DURATION, times: [0, 0.25, 0.28, 1], repeat: Infinity }}
            >
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-green-500/50"></div>
              + <span className="text-blue-300">post:</span><br/>
              &nbsp;&nbsp;<span className="text-gray-500">summary: "Create"</span>
            </motion.div>
          </div>

          {/* Breaking Change Highlight Box */}
          <motion.div
            className="absolute top-[80px] -left-2 -right-2 h-7 border-2 border-red-500 rounded bg-red-500/20 z-10 pointer-events-none"
            animate={{ opacity: [0, 0, 1, 1, 0], scale: [1.1, 1.1, 1, 1, 1] }}
            transition={{ duration: LOOP_DURATION, times: [0, 0.45, 0.48, 0.9, 1], repeat: Infinity }}
          />
        </div>
        
        {/* Scanner Laser */}
        <motion.div 
          className="absolute left-0 right-0 h-1.5 bg-indigo-500 shadow-[0_0_15px_4px_rgba(99,102,241,0.9)] z-20"
          animate={{ top: ['0%', '0%', '100%', '0%', '0%'], opacity: [0, 0, 1, 1, 0] }}
          transition={{ duration: LOOP_DURATION, times: [0, 0.35, 0.38, 0.45, 0.48], repeat: Infinity, ease: "linear" }}
        />
        
      </motion.div>

      {/* SpecSentry Guard Action */}
      <motion.div 
        className="absolute top-[15%] left-1/2 -ml-16 w-32 flex flex-col items-center z-30"
        animate={{ y: [-50, -50, 0, 0, -50], opacity: [0, 0, 1, 1, 0] }}
        transition={{ duration: LOOP_DURATION, times: [0, 0.3, 0.35, 0.9, 0.95], repeat: Infinity }}
      >
        <motion.div
          className="bg-[#0D1117] rounded-full p-3 border-2 shadow-[0_0_30px_rgba(79,70,229,0.3)]"
          animate={{ 
            borderColor: ['#4f46e5', '#4f46e5', '#ef4444', '#ef4444'],
            boxShadow: ['0 0 30px rgba(79,70,229,0.3)', '0 0 30px rgba(79,70,229,0.3)', '0 0 40px rgba(239,68,68,0.5)', '0 0 40px rgba(239,68,68,0.5)']
          }}
          transition={{ duration: LOOP_DURATION, times: [0, 0.45, 0.48, 1], repeat: Infinity }}
        >
          <motion.div animate={{ color: ['#818cf8', '#818cf8', '#f87171', '#f87171'] }} transition={{ duration: LOOP_DURATION, times: [0, 0.45, 0.48, 1], repeat: Infinity }}>
            <ShieldAlert className="w-10 h-10" />
          </motion.div>
        </motion.div>
        <motion.div 
          className="mt-3 bg-red-900/90 text-red-100 text-xs px-3 py-1.5 rounded-md shadow-xl border border-red-500 font-bold whitespace-nowrap tracking-wider flex items-center"
          animate={{ opacity: [0, 0, 1, 1, 0], scale: [0.8, 0.8, 1, 1, 0.8], y: [10, 10, 0, 0, 10] }}
          transition={{ duration: LOOP_DURATION, times: [0, 0.48, 0.5, 0.9, 0.95], repeat: Infinity }}
        >
          <XCircle className="w-3 h-3 mr-1.5" />
          CI FAILED
        </motion.div>
      </motion.div>

      {/* Changelog Factory Output */}
      <motion.div
        className="absolute bottom-6 left-1/2 -ml-[90px] w-[180px] bg-white text-gray-900 rounded-lg shadow-2xl z-40 overflow-hidden border border-gray-200"
        animate={{ y: [60, 60, 0, 0, 60], opacity: [0, 0, 1, 1, 0], scale: [0.8, 0.8, 1, 1, 0.8] }}
        transition={{ duration: LOOP_DURATION, times: [0, 0.55, 0.6, 0.9, 0.95], repeat: Infinity }}
      >
        <div className="bg-gray-100 border-b border-gray-200 px-3 py-2 flex items-center gap-2 shadow-sm">
          <FileText className="w-4 h-4 text-indigo-600" />
          <span className="text-[11px] font-bold tracking-tight">changelog.md</span>
        </div>
        <div className="p-3 space-y-2 text-[9px] leading-relaxed">
          <div className="font-bold text-red-700 bg-red-50 border border-red-100 rounded px-1.5 py-1 mb-1 flex items-center gap-1.5">
            <XCircle className="w-3 h-3" />
            1 Breaking Change
          </div>
          <div className="text-gray-700 pl-1">
            <span className="font-semibold text-gray-900">• /users (GET)</span><br/>
            `id` type changed from <span className="bg-gray-200 px-1 rounded font-mono">int</span> to <span className="bg-red-100 text-red-800 px-1 rounded font-mono">string</span>.
          </div>
          <div className="font-bold text-blue-700 bg-blue-50 border border-blue-100 rounded px-1.5 py-1 mt-2 flex items-center gap-1.5">
            <span className="text-[12px] leading-none">+</span>
            1 Minor Change
          </div>
          <div className="text-gray-700 pl-1">
            <span className="font-semibold text-gray-900">• Added /users (POST)</span>
          </div>
        </div>
      </motion.div>

    </div>
  );
}
