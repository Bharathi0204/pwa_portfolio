import React, { useState } from 'react';
import { 
  ArrowRight, 
  Bot, 
  Sparkles, 
  Terminal, 
  Trophy, 
  Download, 
  Code2,
  Cpu,
  Layers,
  CheckCircle2,
  ShieldCheck,
  Zap,
  Copy,
  Check
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../components/SocialIcons';
import { Tilt3DCard } from '../components/Tilt3DCard';
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
  const [terminalTab, setTerminalTab] = useState<'profile' | 'stack' | 'status'>('profile');
  const [copiedCmd, setCopiedCmd] = useState(false);

  const handleCopyCmd = () => {
    navigator.clipboard.writeText('neofetch --profile bharathi');
    setCopiedCmd(true);
    setTimeout(() => setCopiedCmd(false), 2000);
  };

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

          {/* Right Column: 3D Cybernetic Live Terminal Card */}
          <div className="lg:col-span-5">
            <Tilt3DCard maxTilt={8} className="w-full">
              <div className="terminal-window shadow-2xl shadow-cyan-500/15 border border-cyan-500/40 bg-[#090d16]">
                
                {/* Terminal Title Bar */}
                <div className="terminal-header flex items-center justify-between">
                  <div className="terminal-dots">
                    <div className="dot dot-red" />
                    <div className="dot dot-yellow" />
                    <div className="dot dot-green" />
                  </div>
                  <div className="text-[10px] sm:text-[11px] text-slate-400 font-mono flex items-center gap-1.5 truncate px-1">
                    <Terminal className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                    <span className="truncate">bharathi@dev-env: ~</span>
                  </div>
                  <div className="flex items-center gap-1.5 shrink-0">
                    <span className="text-[9px] text-emerald-400 font-mono font-bold px-1.5 py-0.5 rounded bg-emerald-950/60 border border-emerald-500/30">
                      ONLINE
                    </span>
                  </div>
                </div>

                {/* Mobile Terminal Tab Switcher */}
                <div className="flex sm:hidden border-b border-white/10 bg-slate-950/90 text-[10px] font-mono">
                  <button
                    onClick={() => setTerminalTab('profile')}
                    className={`flex-1 py-1.5 text-center font-bold transition-colors ${
                      terminalTab === 'profile' ? 'text-cyan-300 border-b border-cyan-400 bg-cyan-950/40' : 'text-slate-400'
                    }`}
                  >
                    Profile
                  </button>
                  <button
                    onClick={() => setTerminalTab('stack')}
                    className={`flex-1 py-1.5 text-center font-bold transition-colors ${
                      terminalTab === 'stack' ? 'text-cyan-300 border-b border-cyan-400 bg-cyan-950/40' : 'text-slate-400'
                    }`}
                  >
                    Stack Specs
                  </button>
                  <button
                    onClick={() => setTerminalTab('status')}
                    className={`flex-1 py-1.5 text-center font-bold transition-colors ${
                      terminalTab === 'status' ? 'text-cyan-300 border-b border-cyan-400 bg-cyan-950/40' : 'text-slate-400'
                    }`}
                  >
                    PWA Status
                  </button>
                </div>

                {/* Terminal Body Content */}
                <div className="p-3.5 sm:p-5 text-xs font-mono space-y-2.5 bg-[#080c14]">
                  <div className="flex items-center justify-between gap-1 text-[11px] sm:text-xs">
                    <div className="truncate">
                      <span className="text-cyan-400">root@srm-ist:~$</span>{' '}
                      <span className="text-white font-semibold">neofetch --profile bharathi</span>
                    </div>
                    <button
                      onClick={handleCopyCmd}
                      className="p-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors shrink-0"
                      title="Copy Command"
                    >
                      {copiedCmd ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                    </button>
                  </div>

                  {/* Responsive Tabbed / Desktop View */}
                  <div className="p-2.5 sm:p-3 rounded-lg bg-slate-950/85 border border-white/10 space-y-1.5 text-[10px] sm:text-[11px]">
                    
                    {/* Tab: Profile Overview */}
                    <div className={`${terminalTab === 'profile' ? 'block' : 'hidden sm:block'} space-y-1.5`}>
                      <div className="flex justify-between items-center gap-1 border-b border-white/5 pb-1">
                        <span className="text-slate-400">Profile:</span>
                        <span className="text-cyan-300 font-bold">Bharathi E (MCA @ SRM IST)</span>
                      </div>
                      <div className="flex justify-between items-center gap-1">
                        <span className="text-slate-400">Current Role:</span>
                        <span className="text-slate-200">Full Stack Intern @ Savyasasy</span>
                      </div>
                      <div className="flex justify-between items-center gap-1">
                        <span className="text-slate-400">Primary Core:</span>
                        <span className="text-emerald-400 font-bold">Python (Expert)</span>
                      </div>
                    </div>

                    {/* Tab: Stack Specs */}
                    <div className={`${terminalTab === 'stack' ? 'block' : 'hidden sm:block'} space-y-1.5`}>
                      <div className="flex justify-between items-center gap-1">
                        <span className="text-slate-400">Backend API:</span>
                        <span className="text-slate-200">FastAPI, Django, Express</span>
                      </div>
                      <div className="flex justify-between items-center gap-1">
                        <span className="text-slate-400">Frontend UI:</span>
                        <span className="text-slate-200">React, Angular, TypeScript</span>
                      </div>
                      <div className="flex justify-between items-center gap-1">
                        <span className="text-slate-400">AI / Voice:</span>
                        <span className="text-violet-300 font-semibold">OpenAI, Whisper STT, ML</span>
                      </div>
                      <div className="flex justify-between items-center gap-1">
                        <span className="text-slate-400">IoT Hardware:</span>
                        <span className="text-amber-300 font-semibold">ESP32 + 5 Sensor Rig</span>
                      </div>
                    </div>

                    {/* Tab: Status & DSA */}
                    <div className={`${terminalTab === 'status' ? 'block' : 'hidden sm:block'} space-y-1.5`}>
                      <div className="flex justify-between items-center gap-1">
                        <span className="text-slate-400">DSA Milestone:</span>
                        <span className="text-cyan-400 font-bold">100 Solved (88.6% Acc)</span>
                      </div>
                      <div className="flex justify-between items-center gap-1">
                        <span className="text-slate-400">Service Worker:</span>
                        <span className="text-emerald-400 font-bold">ACTIVE (Offline Ready)</span>
                      </div>
                    </div>

                  </div>

                  <div className="pt-1">
                    <button
                      onClick={onOpenAssistant}
                      className="w-full py-2.5 rounded-xl bg-violet-600/20 hover:bg-violet-600/30 border border-violet-500/40 text-violet-300 text-[11px] font-bold flex items-center justify-center gap-1.5 transition-all shadow-sm group"
                    >
                      <Bot className="w-4 h-4 text-violet-400 shrink-0 group-hover:scale-110 transition-transform" />
                      <span>Launch Grounded Assistant Terminal</span>
                    </button>
                  </div>
                </div>

              </div>
            </Tilt3DCard>
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
