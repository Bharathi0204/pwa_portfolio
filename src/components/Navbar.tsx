import React, { useState, useEffect } from 'react';
import { 
  Download, 
  Menu, 
  X, 
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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
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
    setMobileMenuOpen(false);
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-slate-950/90 backdrop-blur-xl border-b border-white/10 shadow-2xl py-2.5 sm:py-3' 
          : 'bg-slate-950/40 backdrop-blur-md border-b border-white/5 py-3 sm:py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Logo & Monogram */}
        <button 
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-2.5 sm:gap-3 group text-left focus:outline-none shrink-0"
        >
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-cyan-500 via-sky-600 to-emerald-500 p-0.5 shadow-lg shadow-cyan-500/20 group-hover:scale-105 transition-transform duration-200 shrink-0">
            <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center font-heading font-black text-cyan-400 text-sm sm:text-base tracking-wider">
              BE
            </div>
          </div>
          <div className="min-w-0">
            <div className="flex items-center gap-1.5 sm:gap-2">
              <span className="font-heading font-bold text-white text-sm sm:text-base tracking-tight truncate group-hover:text-cyan-400 transition-colors">
                {PERSONAL_INFO.name}
              </span>
              <span className="flex h-2 w-2 relative shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
            </div>
            <span className="text-[10px] sm:text-[11px] text-slate-400 block font-mono truncate">
              MCA @ SRM IST • 9.90 CGPA
            </span>
          </div>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1 bg-slate-900/70 p-1.5 rounded-xl border border-white/10 backdrop-blur-md">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all duration-200 ${
                  isActive
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 shrink-0 ${isActive ? 'text-cyan-400' : 'text-slate-400'}`} />
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Action Buttons: AI Assistant, Install PWA, Share */}
        <div className="hidden sm:flex items-center gap-2">
          {/* AI Assistant Trigger */}
          <button
            onClick={onOpenAssistant}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-violet-950/60 border border-violet-500/40 hover:border-violet-400 text-violet-300 text-xs font-semibold shadow-sm hover:scale-[1.02] transition-all"
            title="Ask Grounded Portfolio AI"
          >
            <Bot className="w-3.5 h-3.5 text-violet-400 shrink-0 animate-pulse" />
            <span>AI Assistant</span>
          </button>

          {/* PWA Install Button */}
          {isInstalled ? (
            <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-emerald-950/50 border border-emerald-500/30 text-emerald-300 text-xs font-medium">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>Installed</span>
            </div>
          ) : (
            <button
              onClick={onInstallClick}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gradient-to-r from-sky-500 to-cyan-500 hover:from-sky-400 hover:to-cyan-400 text-slate-950 font-bold text-xs shadow-md shadow-cyan-500/25 hover:scale-[1.02] transition-all"
            >
              <Download className="w-3.5 h-3.5 text-slate-950 shrink-0" />
              <span>Install App</span>
            </button>
          )}

          {/* Share Button */}
          <button
            onClick={handleShare}
            className="p-2 rounded-lg bg-slate-900/80 border border-white/10 hover:border-white/20 text-slate-300 hover:text-white transition-all text-xs shrink-0"
            title="Share Portfolio"
          >
            {copiedLink ? (
              <span className="text-[10px] text-emerald-400 font-mono">Copied!</span>
            ) : (
              <Share2 className="w-3.5 h-3.5" />
            )}
          </button>
        </div>

        {/* Mobile Menu Trigger & Mobile AI shortcut */}
        <div className="flex lg:hidden items-center gap-1.5">
          <button
            onClick={onOpenAssistant}
            className="p-2 rounded-lg bg-violet-950/60 border border-violet-500/40 text-violet-300 text-xs flex items-center justify-center shrink-0"
            title="Ask Portfolio AI"
          >
            <Bot className="w-4 h-4 text-violet-400" />
          </button>

          {!isInstalled && (
            <button
              onClick={onInstallClick}
              className="px-2.5 py-1.5 rounded-lg bg-gradient-to-r from-sky-500 to-cyan-500 text-slate-950 text-xs font-bold flex items-center gap-1 shrink-0"
            >
              <Download className="w-3.5 h-3.5 text-slate-950 shrink-0" />
              <span className="text-[11px]">Install</span>
            </button>
          )}

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-slate-900 border border-white/10 text-slate-300 hover:text-white shrink-0"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-2 px-3 pt-3 pb-6 bg-slate-950/98 border-b border-white/15 backdrop-blur-2xl shadow-2xl animate-fadeIn">
          <div className="grid grid-cols-2 gap-2 mb-3">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`p-2.5 rounded-xl text-left text-xs font-semibold flex items-center gap-2 transition-all ${
                    isActive
                      ? 'bg-cyan-950/60 text-cyan-300 border border-cyan-500/40'
                      : 'bg-slate-900/70 text-slate-300 border border-white/5'
                  }`}
                >
                  <Icon className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span className="truncate">{item.label}</span>
                </button>
              );
            })}
          </div>

          <div className="flex flex-col gap-2 pt-2 border-t border-white/10">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAssistant();
              }}
              className="w-full py-2.5 rounded-xl bg-violet-600/20 border border-violet-500/40 text-violet-300 text-xs font-bold flex items-center justify-center gap-2"
            >
              <Bot className="w-4 h-4 text-violet-400 shrink-0" />
              Ask Grounded Portfolio AI
            </button>

            <button
              onClick={handleShare}
              className="w-full py-2 rounded-xl bg-slate-900 border border-white/10 text-slate-300 text-xs font-semibold flex items-center justify-center gap-2"
            >
              <Share2 className="w-3.5 h-3.5 shrink-0" />
              {copiedLink ? 'Link Copied to Clipboard!' : 'Share Portfolio Link'}
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
