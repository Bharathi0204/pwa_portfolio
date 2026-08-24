import React from 'react';
import { 
  ArrowRight, 
  Bot, 
  Sparkles, 
  Terminal, 
  Trophy, 
  Download, 
  CheckCircle2,
  Code2,
  Cpu,
  Layers
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../components/SocialIcons';
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
  return (
    <section id="home" className="relative pt-28 sm:pt-36 pb-16 sm:pb-24 overflow-hidden">
      
      {/* Dynamic Background Glows */}
      <div className="glow-orb glow-orb-cyan w-[500px] h-[500px] -top-32 -left-32" />
      <div className="glow-orb glow-orb-emerald w-[450px] h-[450px] top-64 -right-32" />
      <div className="glow-orb glow-orb-violet w-[350px] h-[350px] bottom-10 left-1/3" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Headline & Action CTAs */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Top Academic Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-cyan-500/30 text-cyan-300 text-xs font-mono backdrop-blur-md shadow-lg shadow-cyan-500/10">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
              <span>MCA @ SRM IST • 9.90 / 10 CGPA</span>
              <span className="text-slate-600">|</span>
              <span className="text-emerald-400 flex items-center gap-1">
                <Trophy className="w-3.5 h-3.5 text-amber-400" /> ₹50k 1st Prize Winner
              </span>
            </div>

            {/* Main Headline */}
            <div>
              <h1 className="font-heading font-black text-4xl sm:text-6xl lg:text-7xl text-white tracking-tight leading-[1.1]">
                Hi, I'm <br />
                <span className="gradient-text-cyan">{PERSONAL_INFO.name}</span>
              </h1>
              
              <h2 className="text-lg sm:text-2xl text-slate-300 font-semibold mt-3 font-heading flex flex-wrap items-center gap-2">
                <span>Full Stack Python Developer</span>
                <span className="text-cyan-400 font-bold">•</span>
                <span className="text-emerald-400">AI/ML & Voice AI Engineer</span>
              </h2>
            </div>

            {/* Sub-headline / Core Bio */}
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-xl">
              I learn by building. My journey spans full-stack Python & Django, asynchronous FastAPI microservices, real-time Voice AI concierges (ULAVI VOCIS), and award-winning IoT agronomy platforms (AGRIMISTRO).
            </p>

            {/* CTAs Button Row */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <button
                onClick={() => onNavigateTo('projects')}
                className="btn-primary"
              >
                <span>Explore Case Studies</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenAssistant}
                className="btn-secondary flex items-center gap-2 border-violet-500/40 text-violet-300 hover:border-violet-400"
              >
                <Bot className="w-4 h-4 text-violet-400" />
                <span>Ask Portfolio AI</span>
              </button>

              {!isInstalled && (
                <button
                  onClick={onInstallClick}
                  className="px-4 py-3 rounded-xl bg-slate-900 border border-white/10 hover:border-emerald-500/40 text-slate-300 hover:text-emerald-300 text-xs font-semibold flex items-center gap-2 transition-all"
                  title="Install Progressive Web App"
                >
                  <Download className="w-4 h-4 text-emerald-400" />
                  <span>Install App</span>
                </button>
              )}
            </div>

            {/* Social Proof & Profiles */}
            <div className="flex items-center gap-4 pt-4 text-xs text-slate-400 font-mono">
              <span>Verified Profiles:</span>
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-slate-300 hover:text-cyan-400 transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
                <span>GitHub</span>
              </a>
              <span className="text-slate-700">•</span>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-slate-300 hover:text-cyan-400 transition-colors"
              >
                <LinkedinIcon className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>
            </div>

          </div>

          {/* Right Column: Cybernetic Live Terminal Card */}
          <div className="lg:col-span-5">
            <div className="terminal-window shadow-2xl shadow-cyan-500/10 border border-cyan-500/30">
              
              {/* Terminal Title Bar */}
              <div className="terminal-header">
                <div className="terminal-dots">
                  <div className="dot dot-red" />
                  <div className="dot dot-yellow" />
                  <div className="dot dot-green" />
                </div>
                <div className="text-[11px] text-slate-400 font-mono flex items-center gap-1.5">
                  <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                  <span>bharathi@dev-env: ~/portfolio-pwa</span>
                </div>
                <span className="text-[10px] text-emerald-400 font-mono font-bold">ONLINE</span>
              </div>

              {/* Terminal Body Content */}
              <div className="p-4 sm:p-5 text-xs font-mono space-y-3 bg-[#080c14]">
                <div>
                  <span className="text-cyan-400">root@srm-ist:~$</span>{' '}
                  <span className="text-white font-semibold">neofetch --profile bharathi</span>
                </div>

                <div className="p-3 rounded-lg bg-slate-950/80 border border-white/5 space-y-1.5 text-[11px]">
                  <div className="flex justify-between">
                    <span className="text-slate-400">Profile:</span>
                    <span className="text-cyan-300 font-bold">Bharathi E</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Current Role:</span>
                    <span className="text-slate-200">Full Stack Intern @ Savyasasy</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Primary Language:</span>
                    <span className="text-emerald-400 font-bold">Python (Expert)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Backend Core:</span>
                    <span className="text-slate-200">FastAPI, Django, Express</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Frontend Stack:</span>
                    <span className="text-slate-200">React, Angular, TypeScript</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">AI / Voice Systems:</span>
                    <span className="text-violet-300">OpenAI, Whisper STT, ML</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Hardware / IoT:</span>
                    <span className="text-amber-300">ESP32 + 5 Sensor Rig</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">DSA Milestone:</span>
                    <span className="text-cyan-400 font-bold">100 Solved (88.6% Acc)</span>
                  </div>
                </div>

                <div className="text-slate-400 text-[11px] pt-1">
                  <span className="text-cyan-400">&gt;</span> PWA Standalone Service Worker: <span className="text-emerald-400 font-bold">ACTIVE (Cache-First)</span>
                </div>

                <div className="pt-2">
                  <button
                    onClick={onOpenAssistant}
                    className="w-full py-2 rounded-lg bg-violet-600/20 hover:bg-violet-600/30 border border-violet-500/40 text-violet-300 text-[11px] font-bold flex items-center justify-center gap-1.5 transition-all"
                  >
                    <Bot className="w-3.5 h-3.5 text-violet-400" />
                    <span>Run Interactive Grounded Assistant CLI</span>
                  </button>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* 4 Hero Stats Strip */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-12 sm:mt-16">
          {PERSONAL_INFO.stats.map((stat, idx) => (
            <div
              key={idx}
              className="glass-panel p-4 sm:p-5 relative overflow-hidden group"
            >
              <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider mb-1">
                {stat.label}
              </div>
              <div className="font-heading font-black text-2xl sm:text-3xl text-white group-hover:text-cyan-400 transition-colors">
                {stat.value}
              </div>
              <div className="text-xs text-cyan-300/80 mt-0.5">
                {stat.subtitle}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
