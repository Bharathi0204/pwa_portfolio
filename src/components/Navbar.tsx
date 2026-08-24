import React, { useState, useEffect } from 'react';
import { 
  Download, 
  Sparkles, 
  Code2, 
  Briefcase, 
  FolderGit2, 
  Award, 
  Mail, 
  Bot, 
  CheckCircle2,
  Share2
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
  onOpenAssistant: () => void;
  deferredPrompt: any;
  isInstalled: boolean;
  onInstallClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeSection,
  setActiveSection,
  onOpenAssistant,
  deferredPrompt,
  isInstalled,
  onInstallClick
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrolled = window.scrollY > 20;
          setIsScrolled((prev) => (prev !== scrolled ? scrolled : prev));
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Overview', icon: Code2 },
    { id: 'experience', label: 'Experience', icon: Briefcase },
    { id: 'projects', label: 'Projects', icon: FolderGit2 },
    { id: 'skills', label: 'Skills & DSA', icon: Sparkles },
    { id: 'achievements', label: 'Achievements', icon: Award },
    { id: 'contact', label: 'Contact', icon: Mail }
  ];

  const handleNavClick = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -70;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Bharathi E | Full Stack & AI Portfolio',
          text: 'Explore Bharathi E\'s PWA Portfolio — Python, Voice AI, IoT, & DSA.',
          url: window.location.href
        });
      } catch (err) {
        // user cancelled
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2500);
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-200 ${
        isScrolled 
          ? 'bg-slate-950/95 border-b border-white/10 shadow-xl py-2 sm:py-2.5' 
          : 'bg-slate-950/40 border-b border-white/5 py-2.5 sm:py-3.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 flex items-center justify-between gap-2">
        
        {/* Brand Monogram & Title */}
        <button 
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-2.5 group text-left focus:outline-none shrink-0"
        >
          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-cyan-500 via-sky-600 to-emerald-500 p-0.5 shadow-md shadow-cyan-500/20 shrink-0">
            <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center font-heading font-black text-cyan-400 text-xs sm:text-base tracking-wider">
              BE
            </div>
          </div>
          <div className="min-w-0">
            <div className="flex items-center gap-1.5">
              <span className="font-heading font-bold text-white text-xs sm:text-base tracking-tight truncate group-hover:text-cyan-400 transition-colors">
                {PERSONAL_INFO.name}
              </span>
              <span className="flex h-1.5 w-1.5 sm:h-2 sm:w-2 relative shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 sm:h-2 sm:w-2 bg-emerald-500"></span>
              </span>
            </div>
            <span className="text-[9px] sm:text-[11px] text-slate-400 block font-mono truncate">
              MCA @ SRM IST • 9.90 CGPA
            </span>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 bg-slate-900/80 p-1.5 rounded-xl border border-white/10">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors ${
                  isActive
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 shrink-0 ${isActive ? 'text-cyan-400' : 'text-slate-400'}`} />
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
          
          {/* AI Assistant Quick Trigger */}
          <button
            onClick={onOpenAssistant}
            className="flex items-center gap-1 sm:gap-1.5 px-2.5 py-1.5 rounded-lg bg-violet-950/60 border border-violet-500/40 hover:border-violet-400 text-violet-300 text-[11px] sm:text-xs font-semibold transition-colors"
            title="Ask Grounded Portfolio AI"
          >
            <Bot className="w-3.5 h-3.5 text-violet-400 shrink-0 animate-pulse" />
            <span className="hidden xs:inline">Portfolio AI</span>
          </button>

          {/* PWA Install / Ready Indicator */}
          {isInstalled ? (
            <div className="flex items-center gap-1 px-2 sm:px-2.5 py-1.5 rounded-lg bg-emerald-950/50 border border-emerald-500/30 text-emerald-300 text-[10px] sm:text-xs font-medium">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span className="hidden xs:inline">Installed</span>
            </div>
          ) : (
            <button
              onClick={onInstallClick}
              className="flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-lg bg-gradient-to-r from-sky-500 to-cyan-500 hover:from-sky-400 hover:to-cyan-400 text-slate-950 font-bold text-[11px] sm:text-xs shadow-md shadow-cyan-500/25 transition-all"
              title="Install PWA to Device"
            >
              <Download className="w-3.5 h-3.5 text-slate-950 shrink-0" />
              <span>Install</span>
            </button>
          )}

          {/* Share Button */}
          <button
            onClick={handleShare}
            className="p-1.5 sm:p-2 rounded-lg bg-slate-900/80 border border-white/10 hover:border-white/20 text-slate-300 hover:text-white transition-all text-xs shrink-0"
            title="Share Portfolio"
          >
            {copiedLink ? (
              <span className="text-[10px] text-emerald-400 font-mono">Copied!</span>
            ) : (
              <Share2 className="w-3.5 h-3.5" />
            )}
          </button>

        </div>

      </div>
    </header>
  );
};
