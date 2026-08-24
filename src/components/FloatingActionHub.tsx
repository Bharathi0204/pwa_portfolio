import React, { useState, useEffect } from 'react';
import { Bot, ArrowUp } from 'lucide-react';

interface FloatingActionHubProps {
  onOpenAssistant: () => void;
}

export const FloatingActionHub: React.FC<FloatingActionHubProps> = ({ onOpenAssistant }) => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const shouldShow = window.scrollY > 350;
          setShowScrollTop((prev) => (prev !== shouldShow ? shouldShow : prev));
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <aside 
      aria-label="Quick Actions"
      className="fixed right-4 md:right-6 bottom-[4.8rem] md:bottom-6 z-40 flex flex-col items-end gap-2.5 pointer-events-none"
    >
      
      {/* Scroll to Top Floating Button */}
      <button
        onClick={scrollToTop}
        aria-label="Back to top"
        title="Scroll to top of page"
        className={`pointer-events-auto p-3 rounded-2xl bg-slate-900/95 border border-white/15 text-slate-300 hover:text-cyan-300 hover:border-cyan-500/40 shadow-xl transition-all duration-200 hover:scale-105 active:scale-95 group flex items-center justify-center ${
          showScrollTop
            ? 'opacity-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
      >
        <ArrowUp className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400 group-hover:-translate-y-0.5 transition-transform" />
      </button>

      {/* Grounded AI Assistant Floating Action Button */}
      <button
        onClick={onOpenAssistant}
        aria-label="Ask Portfolio AI"
        title="Ask Portfolio AI Assistant"
        className="pointer-events-auto p-3 sm:p-3.5 rounded-2xl bg-gradient-to-br from-violet-600 via-sky-600 to-cyan-500 text-white shadow-2xl shadow-violet-500/30 hover:scale-105 active:scale-95 transition-all duration-200 group flex items-center gap-2 border border-white/20"
      >
        <div className="relative">
          <Bot className="w-5 h-5 sm:w-6 sm:h-6 text-white group-hover:rotate-12 transition-transform" />
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-emerald-400 rounded-full ring-2 ring-slate-950 animate-pulse" />
        </div>
        <span className="text-xs font-bold font-mono tracking-wide hidden sm:inline pr-1">
          Ask Portfolio AI
        </span>
      </button>

    </aside>
  );
};
