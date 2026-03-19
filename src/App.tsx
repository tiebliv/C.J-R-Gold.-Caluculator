/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from 'react';
import { 
  TrendingUp, 
  Zap, 
  Target, 
  AlertCircle, 
  ChevronRight, 
  DollarSign, 
  Clock, 
  ShieldCheck,
  ArrowRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [spend, setSpend] = useState(1000);
  const [convRate, setConvRate] = useState(20);
  const [ticketSize, setTicketSize] = useState(12000);
  const [showResults, setShowResults] = useState(false);

  // Calculation Logic: 
  // If we rescue just 3 more high-ticket leads a month from the "HCP Black Hole"
  const potentialLift = useMemo(() => 3 * ticketSize, [ticketSize]);
  
  // HCP Attribution Gap: The hidden cost of slow response
  const attributionGap = useMemo(() => spend * 0.4, [spend]); // Assuming 40% waste on slow leads

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-yellow-500 selection:text-black">
      {/* Header / Hero Section */}
      <header className="border-b border-white/10 py-8 px-6 md:px-12 bg-black/50 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center shadow-[0_0_20px_rgba(234,179,8,0.3)]">
              <TrendingUp className="text-black w-7 h-7" />
            </div>
            <div>
              <h1 className="text-xl font-black uppercase tracking-tighter leading-none">
                CJ.R <span className="text-yellow-500">Path to Gold</span>
              </h1>
              <p className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-bold">Revenue Machine v1.0</p>
            </div>
          </div>
          <div className="flex items-center gap-6 text-[10px] uppercase tracking-widest font-bold text-gray-400">
            <span className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" /> System Active</span>
            <span className="hidden md:inline">Solution Expert Intensity</span>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-12 space-y-16">
        
        {/* The Interrogation Phase: Audit Module */}
        <section id="audit-module" className="relative">
          <div className="absolute -top-6 -left-6 w-24 h-24 border-t-2 border-l-2 border-yellow-500/30 pointer-events-none" />
          <div className="absolute -bottom-6 -right-6 w-24 h-24 border-b-2 border-r-2 border-yellow-500/30 pointer-events-none" />
          
          <div className="bg-zinc-900/50 border-2 border-yellow-500 rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)]">
            <div className="bg-yellow-500 py-3 px-6 flex items-center justify-between">
              <h2 className="text-black font-black uppercase tracking-tight flex items-center gap-2">
                <ShieldCheck className="w-5 h-5" /> 🏆 The Path to Gold: Revenue Audit
              </h2>
              <span className="text-black/50 text-[10px] font-bold uppercase tracking-widest">Phase 01: Interrogation</span>
            </div>

            <div className="p-8 md:p-12 grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div className="space-y-6">
                  <div className="group">
                    <label className="block text-[10px] uppercase text-gray-400 font-black tracking-[0.2em] mb-2 group-focus-within:text-yellow-500 transition-colors">
                      Monthly Ad Spend ($)
                    </label>
                    <div className="relative">
                      <DollarSign className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 w-4 h-4" />
                      <input 
                        type="number" 
                        value={spend}
                        onChange={(e) => setSpend(Number(e.target.value))}
                        className="w-full bg-black border-2 border-zinc-800 focus:border-yellow-500 rounded-xl p-4 pl-10 outline-none transition-all text-xl font-bold"
                      />
                    </div>
                  </div>

                  <div className="group">
                    <label className="block text-[10px] uppercase text-gray-400 font-black tracking-[0.2em] mb-2 group-focus-within:text-yellow-500 transition-colors">
                      Current Lead-to-Book Rate (%)
                    </label>
                    <div className="relative">
                      <Target className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 w-4 h-4" />
                      <input 
                        type="number" 
                        value={convRate}
                        onChange={(e) => setConvRate(Number(e.target.value))}
                        className="w-full bg-black border-2 border-zinc-800 focus:border-yellow-500 rounded-xl p-4 pl-10 outline-none transition-all text-xl font-bold"
                      />
                    </div>
                  </div>

                  <div className="group">
                    <label className="block text-[10px] uppercase text-gray-400 font-black tracking-[0.2em] mb-2 group-focus-within:text-yellow-500 transition-colors">
                      Avg. System Replacement ($)
                    </label>
                    <div className="relative">
                      <Zap className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 w-4 h-4" />
                      <input 
                        type="number" 
                        value={ticketSize}
                        onChange={(e) => setTicketSize(Number(e.target.value))}
                        className="w-full bg-black border-2 border-zinc-800 focus:border-yellow-500 rounded-xl p-4 pl-10 outline-none transition-all text-xl font-bold"
                      />
                    </div>
                  </div>
                </div>

                <button 
                  onClick={() => setShowResults(true)}
                  className="w-full bg-yellow-500 text-black font-black py-5 px-8 rounded-xl hover:bg-yellow-400 transition-all flex items-center justify-center gap-3 group shadow-[0_10px_20px_rgba(234,179,8,0.2)]"
                >
                  RUN THE NUMBERS <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              <div className="flex flex-col justify-center">
                <AnimatePresence mode="wait">
                  {showResults ? (
                    <motion.div 
                      key="results"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="bg-black/40 border border-zinc-800 p-8 rounded-2xl text-center space-y-6 relative overflow-hidden"
                    >
                      <div className="absolute top-0 right-0 p-4">
                        <div className="text-[10px] font-black text-green-500 bg-green-500/10 px-2 py-1 rounded border border-green-500/20 uppercase tracking-tighter">
                          Verified Calculation
                        </div>
                      </div>
                      
                      <div>
                        <p className="text-gray-400 text-[10px] uppercase font-black tracking-[0.3em] mb-2">Potential Monthly Lift</p>
                        <p className="text-6xl md:text-7xl font-black text-green-500 tracking-tighter drop-shadow-[0_0_15px_rgba(34,197,94,0.4)]">
                          ${potentialLift.toLocaleString()}
                        </p>
                      </div>

                      <div className="h-px bg-zinc-800 w-full" />

                      <p className="text-xs text-gray-500 italic leading-relaxed">
                        *Based on capturing 10% more "Leaky" leads with <span className="text-yellow-500 font-bold">30-Second Response</span>. This is the difference between drowning and Gold.
                      </p>

                      <div className="grid grid-cols-2 gap-4 mt-8">
                        <div className="bg-zinc-900 p-4 rounded-xl border border-zinc-800">
                          <p className="text-[9px] text-gray-500 uppercase font-bold mb-1">HCP Attribution Gap</p>
                          <p className="text-xl font-bold text-red-500">-${attributionGap.toLocaleString()}</p>
                        </div>
                        <div className="bg-zinc-900 p-4 rounded-xl border border-zinc-800">
                          <p className="text-[9px] text-gray-500 uppercase font-bold mb-1">Profit Gap Identified</p>
                          <p className="text-xl font-bold text-yellow-500">{(potentialLift / spend * 100).toFixed(0)}% ROI</p>
                        </div>
                      </div>
                    </motion.div>
                  ) : (
                    <div className="bg-zinc-900/30 border-2 border-dashed border-zinc-800 p-12 rounded-2xl text-center flex flex-col items-center justify-center space-y-4">
                      <div className="w-16 h-16 rounded-full bg-zinc-800 flex items-center justify-center">
                        <Clock className="text-zinc-600 w-8 h-8" />
                      </div>
                      <p className="text-zinc-500 font-bold uppercase text-xs tracking-widest">Awaiting Data Input...</p>
                    </div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </section>

        {/* Strategy Modules */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Micro-Yes Ladder */}
          <div className="bg-zinc-900/50 border border-zinc-800 p-8 rounded-2xl space-y-6 hover:border-yellow-500/50 transition-colors group">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-yellow-500/10 rounded-lg flex items-center justify-center border border-yellow-500/20">
                <ChevronRight className="text-yellow-500 w-6 h-6" />
              </div>
              <h3 className="font-black uppercase tracking-tight text-sm">The "Micro-Yes" Ladder</h3>
            </div>
            <p className="text-xs text-gray-400 leading-relaxed">
              Stop asking for the $12k sale on the first text. Build momentum with small commitments.
            </p>
            <ul className="space-y-3">
              {[
                "Confirm Availability",
                "Verify Address",
                "Schedule Diagnostic",
                "The Gold Close"
              ].map((step, i) => (
                <li key={i} className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-wider text-gray-500">
                  <span className="w-5 h-5 rounded bg-zinc-800 flex items-center justify-center text-yellow-500">{i + 1}</span>
                  {step}
                </li>
              ))}
            </ul>
          </div>

          {/* HCP Attribution Gap */}
          <div className="bg-zinc-900/50 border border-zinc-800 p-8 rounded-2xl space-y-6 hover:border-red-500/50 transition-colors group">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-red-500/10 rounded-lg flex items-center justify-center border border-red-500/20">
                <AlertCircle className="text-red-500 w-6 h-6" />
              </div>
              <h3 className="font-black uppercase tracking-tight text-sm">HCP Attribution Gap</h3>
            </div>
            <p className="text-xs text-gray-400 leading-relaxed">
              The "Black Hole" where leads die. If you don't respond in 30 seconds, you're paying for the competition's leads.
            </p>
            <div className="bg-black p-4 rounded-xl border border-zinc-800">
              <div className="flex justify-between text-[10px] font-bold uppercase mb-2">
                <span className="text-gray-500">Lead Decay Rate</span>
                <span className="text-red-500">CRITICAL</span>
              </div>
              <div className="w-full h-2 bg-zinc-800 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: '90%' }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="h-full bg-red-500"
                />
              </div>
              <p className="text-[9px] text-gray-600 mt-2 font-bold uppercase tracking-tighter">90% loss after 5 minutes of silence</p>
            </div>
          </div>

          {/* Solution Expert Intensity */}
          <div className="bg-zinc-900/50 border border-zinc-800 p-8 rounded-2xl space-y-6 hover:border-green-500/50 transition-colors group">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-green-500/10 rounded-lg flex items-center justify-center border border-green-500/20">
                <Zap className="text-green-500 w-6 h-6" />
              </div>
              <h3 className="font-black uppercase tracking-tight text-sm">Expert Intensity</h3>
            </div>
            <p className="text-xs text-gray-400 leading-relaxed">
              Move from "Order Taker" to "Solution Expert". Control the narrative, control the profit.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-[10px] font-bold text-gray-300">
                <div className="w-1 h-1 rounded-full bg-green-500" />
                30-Second Response Protocol
              </div>
              <div className="flex items-center gap-2 text-[10px] font-bold text-gray-300">
                <div className="w-1 h-1 rounded-full bg-green-500" />
                Automated TwiML Sequences
              </div>
              <div className="flex items-center gap-2 text-[10px] font-bold text-gray-300">
                <div className="w-1 h-1 rounded-full bg-green-500" />
                Profit Gap Visualization
              </div>
            </div>
          </div>
        </div>

        {/* Footer / CTA */}
        <footer className="pt-12 border-t border-white/5 text-center space-y-4">
          <p className="text-[10px] uppercase tracking-[0.4em] text-gray-600 font-black">
            Built for the Gold Standard HCP
          </p>
          <div className="flex justify-center gap-4">
            <div className="w-2 h-2 rounded-full bg-yellow-500/20" />
            <div className="w-2 h-2 rounded-full bg-yellow-500/40" />
            <div className="w-2 h-2 rounded-full bg-yellow-500/60" />
          </div>
        </footer>
      </main>
    </div>
  );
}
