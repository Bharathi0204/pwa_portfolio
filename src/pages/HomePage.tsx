import React, { useState } from 'react';
import { 
  ArrowRight, 
  Bot, 
  Sparkles, 
  Trophy, 
  Download, 
  Terminal as TerminalIcon,
  Cuboid as CubeIcon
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../components/SocialIcons';
import { Tilt3DCard } from '../components/Tilt3DCard';
import { Interactive3DHeroTalisman } from '../components/Interactive3DHeroTalisman';
import { CyberTerminalHUD } from '../components/CyberTerminalHUD';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HomePageProps {
  onOpenAssistant: () => void;
  onNavigateTo: (sectionId: string) => void;
  onInstallClick: () => void;
  isInstalled: boolean;
}

export const HomePage: React.FC<HomePageProps> = ({
  onOpenAssistant,
  onNavigateTo,
  onInstallClick,
  isInstalled
}) => {
  const [activeHeroView, setActiveHeroView] = useState<'talisman' | 'terminal'>('talisman');

  return (
    <section id="home" className="relative pt-20 sm:pt-32 pb-10 sm:pb-20 overflow-hidden">
      
      {/* Dynamic Background Glows */}
      <div className="glow-orb glow-orb-cyan w-[260px] sm:w-[500px] h-[260px] sm:h-[500px] -top-20 -left-20" />
      <div className="glow-orb glow-orb-emerald w-[240px] sm:w-[450px] h-[240px] sm:h-[450px] top-64 -right-20" />

      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-10 items-center">
          
          {/* Left Column: Headline & Action CTAs */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-6">
            
            {/* Top Academic Status Pill */}
            <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 py-1.5 rounded-full bg-slate-900/90 border border-cyan-500/30 text-cyan-300 text-[10px] sm:text-xs font-mono backdrop-blur-md shadow-lg shadow-cyan-500/10">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping shrink-0" />
              <span>MCA @ SRM IST • 9.90 CGPA</span>
              <span className="text-slate-600 hidden sm:inline">|</span>
              <span className="text-emerald-400 flex items-center gap-1">
                <Trophy className="w-3.5 h-3.5 text-amber-400 shrink-0" /> ₹50k 1st Prize
              </span>
            </div>

            {/* Main Headline */}
            <div>
              <h1 className="font-heading font-black text-2.5xl xs:text-3xl sm:text-5xl lg:text-6.5xl text-white tracking-tight leading-[1.12]">
                Hi, I'm <br />
                <span className="gradient-text-cyan">{PERSONAL_INFO.name}</span>
              </h1>
              
              <h2 className="text-sm sm:text-xl lg:text-2xl text-slate-300 font-semibold mt-2 sm:mt-3 font-heading flex flex-wrap items-center gap-1 sm:gap-2">
                <span>Full Stack Python Developer</span>
                <span className="text-cyan-400 font-bold">•</span>
                <span className="text-emerald-400">AI/ML & Voice AI Engineer</span>
              </h2>
            </div>

            {/* Sub-headline / Core Bio */}
            <p className="text-slate-300 text-xs sm:text-sm lg:text-base leading-relaxed max-w-xl">
              I learn by building. My journey spans full-stack Python & Django, asynchronous FastAPI microservices, real-time Voice AI concierges (ULAVI VOCIS), and award-winning IoT agronomy platforms (AGRIMISTRO).
            </p>

            {/* CTAs Button Row */}
            <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-2.5 sm:gap-3.5 pt-1">
              <button
                onClick={() => onNavigateTo('projects')}
                className="btn-primary py-3 px-5 text-xs sm:text-sm w-full sm:w-auto shadow-lg shadow-cyan-500/25"
              >
                <span>Explore Case Studies</span>
                <ArrowRight className="w-4 h-4 shrink-0" />
              </button>

              <button
                onClick={onOpenAssistant}
                className="btn-secondary py-3 px-5 text-xs sm:text-sm flex items-center justify-center gap-2 border-violet-500/40 text-violet-300 hover:border-violet-400 w-full sm:w-auto"
              >
                <Bot className="w-4 h-4 text-violet-400 shrink-0" />
                <span>Ask Portfolio AI</span>
              </button>

              {!isInstalled && (
                <button
                  onClick={onInstallClick}
                  className="px-4 py-3 rounded-xl bg-slate-900 border border-white/10 hover:border-emerald-500/40 text-slate-300 hover:text-emerald-300 text-xs font-semibold flex items-center justify-center gap-2 transition-all w-full sm:w-auto"
                  title="Install Progressive Web App"
                >
                  <Download className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Install PWA App</span>
                </button>
              )}
            </div>

            {/* Social Proof & Profiles */}
            <div className="flex flex-wrap items-center gap-3 pt-1 text-xs text-slate-400 font-mono">
              <span className="text-[11px] text-slate-500">Profiles:</span>
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-slate-300 hover:text-cyan-400 transition-colors"
              >
                <GithubIcon className="w-3.5 h-3.5 shrink-0" />
                <span>GitHub</span>
              </a>
              <span className="text-slate-700">•</span>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-slate-300 hover:text-cyan-400 transition-colors"
              >
                <LinkedinIcon className="w-3.5 h-3.5 shrink-0" />
                <span>LinkedIn</span>
              </a>
            </div>

          </div>

          {/* Right Column: 3D Interactive Talisman & Cyber Terminal Switcher */}
          <div className="lg:col-span-5 space-y-3">
            
            {/* View Mode Toggle Strip */}
            <div className="flex items-center justify-between p-1 rounded-xl bg-slate-950/80 border border-white/10 text-xs">
              <button
                onClick={() => setActiveHeroView('talisman')}
                className={`flex-1 py-1.5 px-3 rounded-lg font-bold flex items-center justify-center gap-1.5 transition-all ${
                  activeHeroView === 'talisman'
                    ? 'bg-gradient-to-r from-cyan-500 to-sky-500 text-slate-950 shadow-md shadow-cyan-500/20'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <CubeIcon className="w-3.5 h-3.5 shrink-0" />
                <span>3D Physics Talismans</span>
              </button>

              <button
                onClick={() => setActiveHeroView('terminal')}
                className={`flex-1 py-1.5 px-3 rounded-lg font-bold flex items-center justify-center gap-1.5 transition-all ${
                  activeHeroView === 'terminal'
                    ? 'bg-gradient-to-r from-violet-600 to-sky-600 text-white shadow-md shadow-violet-600/20'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <TerminalIcon className="w-3.5 h-3.5 shrink-0" />
                <span>Live Dev Terminal</span>
              </button>
            </div>

            {/* View A: 3D Physical Spring Talisman Canvas */}
            {activeHeroView === 'talisman' ? (
              <div className="animate-fadeIn">
                <Interactive3DHeroTalisman />
              </div>
            ) : (
              /* View B: 3D Live Cybernetic Terminal with Web Audio */
              <div className="animate-fadeIn">
                <CyberTerminalHUD onOpenAssistant={onOpenAssistant} />
              </div>
            )}

          </div>

        </div>

        {/* 4 Hero Stats Strip with 3D Tilt */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4 mt-6 sm:mt-12">
          {PERSONAL_INFO.stats.map((stat, idx) => (
            <Tilt3DCard key={idx} maxTilt={6} className="w-full">
              <div className="glass-panel p-3.5 sm:p-5 relative overflow-hidden group h-full flex flex-col justify-between border-white/10 hover:border-cyan-500/50">
                <div className="text-[10px] sm:text-[11px] font-mono text-slate-400 uppercase tracking-wider mb-1 truncate">
                  {stat.label}
                </div>
                <div className="font-heading font-black text-lg sm:text-2xl lg:text-3xl text-white group-hover:text-cyan-400 transition-colors">
                  {stat.value}
                </div>
                <div className="text-[10px] sm:text-xs text-cyan-300/80 mt-0.5 truncate">
                  {stat.subtitle}
                </div>
              </div>
            </Tilt3DCard>
          ))}
        </div>

      </div>
    </section>
  );
};
