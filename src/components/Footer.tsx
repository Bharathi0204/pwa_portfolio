import React from 'react';
import { Mail, ShieldCheck, ArrowUp, Terminal, Cpu } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/10 bg-slate-950/95 text-slate-400 pt-10 pb-28 md:pb-12 relative overflow-hidden">
      
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-80 sm:w-96 h-28 sm:h-32 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 mb-8 pb-8 border-b border-white/10">
          
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-2.5 sm:gap-3">
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-gradient-to-br from-cyan-500 to-emerald-500 p-0.5 shadow-md shadow-cyan-500/20 shrink-0">
                <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center font-heading font-black text-cyan-400 text-xs sm:text-sm">
                  BE
                </div>
              </div>
              <span className="font-heading font-bold text-base sm:text-lg text-white">
                {PERSONAL_INFO.name}
              </span>
            </div>

            <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
              Full Stack Python Developer & AI/ML Engineer with proven experience across 4 internships, IoT platforms, Voice AI concierges, and 100+ LeetCode algorithmic milestones.
            </p>

            <div className="flex items-center gap-2 pt-1">
              <span className="px-2.5 py-1 rounded-lg bg-emerald-950/50 border border-emerald-500/30 text-emerald-400 text-[10px] sm:text-[11px] font-mono flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 shrink-0" />
                <span>PWA Certified • Offline Ready</span>
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-2">
            <div className="text-[11px] sm:text-xs font-mono font-bold text-white uppercase tracking-wider mb-2 sm:mb-3">
              Key Sections
            </div>
            <ul className="space-y-1.5 sm:space-y-2 text-xs">
              <li>
                <a href="#experience" className="hover:text-cyan-400 transition-colors">Career Timeline & 4 Internships</a>
              </li>
              <li>
                <a href="#projects" className="hover:text-cyan-400 transition-colors">AGRIMISTRO & ULAVI VOCIS</a>
              </li>
              <li>
                <a href="#skills" className="hover:text-cyan-400 transition-colors">Technical Stack & 100 DSA Patterns</a>
              </li>
              <li>
                <a href="#achievements" className="hover:text-cyan-400 transition-colors">SRM 1st Prize & 9.90 CGPA</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-cyan-400 transition-colors">Get in Touch</a>
              </li>
            </ul>
          </div>

          {/* Social & Contact Column */}
          <div className="md:col-span-4 space-y-3">
            <div className="text-[11px] sm:text-xs font-mono font-bold text-white uppercase tracking-wider mb-2 sm:mb-3">
              Connect & Verify
            </div>
            <div className="flex flex-wrap gap-2">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 sm:p-2.5 rounded-xl bg-slate-900 border border-white/10 hover:border-cyan-400 text-slate-300 hover:text-cyan-400 transition-all flex items-center gap-1.5 text-xs"
              >
                <GithubIcon className="w-3.5 h-3.5 shrink-0" />
                <span>GitHub Profile</span>
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 sm:p-2.5 rounded-xl bg-slate-900 border border-white/10 hover:border-cyan-400 text-slate-300 hover:text-cyan-400 transition-all flex items-center gap-1.5 text-xs"
              >
                <LinkedinIcon className="w-3.5 h-3.5 shrink-0" />
                <span>LinkedIn</span>
              </a>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="p-2 sm:p-2.5 rounded-xl bg-slate-900 border border-white/10 hover:border-cyan-400 text-slate-300 hover:text-cyan-400 transition-all flex items-center gap-1.5 text-xs"
              >
                <Mail className="w-3.5 h-3.5 shrink-0" />
                <span>Email</span>
              </a>
            </div>
            <p className="text-[10px] sm:text-[11px] text-slate-500 font-mono break-all">
              Repo: <a href="https://github.com/Bharathi0204/pwa_portfolio" target="_blank" rel="noreferrer" className="text-cyan-400 hover:underline">Bharathi0204/pwa_portfolio</a>
            </p>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] sm:text-xs text-center sm:text-left">
          <div className="text-slate-400">
            <span>© {new Date().getFullYear()} {PERSONAL_INFO.name}. Built with React, TypeScript & PWA.</span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1 text-cyan-400 hover:text-cyan-300 font-mono transition-colors p-1"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 shrink-0" />
          </button>
        </div>

      </div>
    </footer>
  );
};
