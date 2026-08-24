import React from 'react';
import { Mail, Heart, ShieldCheck, ArrowUp, Cpu, Terminal } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/10 bg-slate-950/90 text-slate-400 py-12 relative overflow-hidden">
      
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-10 pb-10 border-b border-white/10">
          
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-500 to-emerald-500 p-0.5 shadow-md shadow-cyan-500/20">
                <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center font-heading font-black text-cyan-400 text-sm">
                  BE
                </div>
              </div>
              <span className="font-heading font-bold text-lg text-white">
                {PERSONAL_INFO.name}
              </span>
            </div>

            <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
              Full Stack Python Developer & AI/ML Engineer with proven experience across 4 internships, IoT platforms, Voice AI concierges, and 100+ LeetCode algorithmic milestones.
            </p>

            <div className="flex items-center gap-2 pt-1">
              <span className="px-2.5 py-1 rounded-lg bg-emerald-950/50 border border-emerald-500/30 text-emerald-400 text-[11px] font-mono flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5" />
                PWA Certified • Offline Ready
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-2">
            <div className="text-xs font-mono font-bold text-white uppercase tracking-wider mb-3">
              Key Sections
            </div>
            <ul className="space-y-2 text-xs">
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

          {/* Social & Contact Col */}
          <div className="md:col-span-4 space-y-3">
            <div className="text-xs font-mono font-bold text-white uppercase tracking-wider mb-3">
              Connect & Verify
            </div>
            <div className="flex flex-wrap gap-2.5">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-slate-900 border border-white/10 hover:border-cyan-400 text-slate-300 hover:text-cyan-400 transition-all flex items-center gap-2 text-xs"
              >
                <GithubIcon className="w-4 h-4" />
                <span>GitHub Profile</span>
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-slate-900 border border-white/10 hover:border-cyan-400 text-slate-300 hover:text-cyan-400 transition-all flex items-center gap-2 text-xs"
              >
                <LinkedinIcon className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="p-2.5 rounded-xl bg-slate-900 border border-white/10 hover:border-cyan-400 text-slate-300 hover:text-cyan-400 transition-all flex items-center gap-2 text-xs"
              >
                <Mail className="w-4 h-4" />
                <span>Email</span>
              </a>
            </div>
            <p className="text-[11px] text-slate-500 font-mono">
              Repository: <a href="https://github.com/Bharathi0204/pwa_portfolio" target="_blank" rel="noreferrer" className="text-cyan-400 hover:underline">Bharathi0204/pwa_portfolio</a>
            </p>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-1.5 text-slate-400">
            <span>© {new Date().getFullYear()} {PERSONAL_INFO.name}. Built with React, TypeScript & PWA Standalone.</span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-cyan-400 hover:text-cyan-300 font-mono transition-colors p-1"
          >
            <span>Back to top</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
};
