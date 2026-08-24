import React, { useState } from 'react';
import { Code, CheckCircle2, ChevronRight, Sparkles, Terminal, Flame } from 'lucide-react';
import { DSA_PATTERNS, DSA_STATS } from '../data/portfolioData';

export const DsaVisualizer: React.FC = () => {
  const [selectedPattern, setSelectedPattern] = useState<number>(0);

  return (
    <div className="glass-panel p-4 sm:p-8 space-y-5 sm:space-y-6">
      
      {/* Top Banner & Stats Overview */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-5 border-b border-white/10">
        <div>
          <div className="flex flex-wrap items-center gap-2 mb-1">
            <span className="px-2.5 py-0.5 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300 text-[11px] sm:text-xs font-mono font-bold uppercase flex items-center gap-1.5">
              <Flame className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              100 Milestone
            </span>
            <span className="text-[11px] sm:text-xs text-slate-400 font-mono">
              Acceptance: <strong className="text-emerald-400">{DSA_STATS.acceptanceRate}</strong>
            </span>
          </div>
          <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-white">
            DSA & Algorithmic Problem Solving
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl">
            {DSA_STATS.corePhilosophy}
          </p>
        </div>

        {/* LeetCode Difficulty Breakdown Bar */}
        <div className="grid grid-cols-4 sm:flex items-center gap-2 sm:gap-3 bg-slate-950/80 p-2.5 sm:p-3 rounded-xl border border-white/5">
          <div className="text-center px-1.5 sm:px-3 sm:border-r border-white/10">
            <div className="text-[9px] sm:text-[10px] text-slate-400 uppercase font-mono">Total</div>
            <div className="font-heading font-black text-base sm:text-xl text-white">{DSA_STATS.totalSolved}</div>
          </div>
          <div className="text-center px-1 sm:px-2 sm:border-r border-white/10">
            <div className="text-[9px] sm:text-[10px] text-emerald-400 uppercase font-mono">Easy</div>
            <div className="font-heading font-bold text-sm sm:text-base text-emerald-400">{DSA_STATS.easy}</div>
          </div>
          <div className="text-center px-1 sm:px-2 sm:border-r border-white/10">
            <div className="text-[9px] sm:text-[10px] text-amber-400 uppercase font-mono">Med</div>
            <div className="font-heading font-bold text-sm sm:text-base text-amber-400">{DSA_STATS.medium}</div>
          </div>
          <div className="text-center px-1 sm:px-2">
            <div className="text-[9px] sm:text-[10px] text-rose-400 uppercase font-mono">Hard</div>
            <div className="font-heading font-bold text-sm sm:text-base text-rose-400">{DSA_STATS.hard}</div>
          </div>
        </div>
      </div>

      {/* Interactive Pattern Grid & Detail Viewer */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6">
        
        {/* Pattern List (Left 5 Cols) */}
        <div className="lg:col-span-5 space-y-2">
          <div className="text-[11px] sm:text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">
            Practiced Algorithmic Patterns:
          </div>
          {DSA_PATTERNS.map((pattern, idx) => {
            const isSelected = selectedPattern === idx;
            return (
              <button
                key={idx}
                onClick={() => setSelectedPattern(idx)}
                className={`w-full p-2.5 sm:p-3 rounded-xl text-left transition-all flex items-center justify-between border ${
                  isSelected
                    ? 'bg-cyan-950/50 border-cyan-500/50 shadow-md shadow-cyan-500/10'
                    : 'bg-slate-950/50 border-white/5 hover:border-white/20 hover:bg-slate-900/60'
                }`}
              >
                <div className="min-w-0 pr-2">
                  <div className={`font-semibold text-xs sm:text-sm truncate ${isSelected ? 'text-cyan-300 font-bold' : 'text-slate-200'}`}>
                    {pattern.name}
                  </div>
                  <div className="text-[10px] sm:text-[11px] text-slate-400 font-mono mt-0.5">
                    {pattern.count} Problems Mastered
                  </div>
                </div>
                <div className="flex items-center gap-1.5 shrink-0">
                  <span className={`px-2 py-0.5 rounded text-[10px] font-mono ${
                    isSelected ? 'bg-cyan-500/20 text-cyan-300' : 'bg-slate-900 text-slate-400'
                  }`}>
                    {Math.round((pattern.count / DSA_STATS.totalSolved) * 100)}%
                  </span>
                  <ChevronRight className={`w-4 h-4 shrink-0 ${isSelected ? 'text-cyan-400' : 'text-slate-600'}`} />
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Pattern Deep-Dive & Rule Card (Right 7 Cols) */}
        <div className="lg:col-span-7 bg-slate-950/90 rounded-2xl border border-cyan-500/30 p-4 sm:p-6 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-1.5 text-cyan-400 font-mono text-xs">
                <Terminal className="w-3.5 h-3.5 shrink-0" />
                <span>Pattern Breakdown:</span>
              </div>
              <span className="px-2.5 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 font-mono text-xs">
                {DSA_PATTERNS[selectedPattern].count} Problems
              </span>
            </div>

            <h4 className="font-heading font-bold text-lg sm:text-xl text-white mb-2">
              {DSA_PATTERNS[selectedPattern].name}
            </h4>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
              {DSA_PATTERNS[selectedPattern].description}
            </p>

            {/* Core Pattern Heuristic / Rule Formula */}
            <div className="p-3 sm:p-3.5 rounded-xl bg-slate-900 border border-cyan-500/20 mb-3.5">
              <div className="text-[10px] sm:text-[11px] font-mono font-bold text-cyan-400 uppercase tracking-wide mb-1 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span>Core Algorithmic Heuristic:</span>
              </div>
              <div className="font-mono text-xs text-emerald-300 bg-slate-950 p-2.5 rounded-lg border border-white/5 break-words">
                {DSA_PATTERNS[selectedPattern].coreRule}
              </div>
            </div>

            {/* Example Classic LeetCode Problem */}
            <div className="p-3 rounded-xl bg-slate-900/60 border border-white/5">
              <div className="text-[10px] sm:text-[11px] font-mono text-slate-400 uppercase tracking-wide mb-1">
                Representative Problems:
              </div>
              <div className="text-xs text-slate-200 font-semibold flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                <span>{DSA_PATTERNS[selectedPattern].exampleProblem}</span>
              </div>
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-white/10 flex flex-wrap items-center justify-between gap-2 text-[11px] sm:text-xs text-slate-400 font-mono">
            <span>Pattern {selectedPattern + 1} of {DSA_PATTERNS.length}</span>
            <span className="text-cyan-400">Time Complexity Optimized</span>
          </div>
        </div>

      </div>

    </div>
  );
};
