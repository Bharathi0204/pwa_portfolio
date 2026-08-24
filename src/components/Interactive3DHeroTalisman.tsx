import React, { useState } from 'react';
import { 
  Sparkles, 
  RotateCw, 
  Cpu, 
  Mic, 
  Trophy, 
  Code2, 
  Zap, 
  CheckCircle2,
  ArrowRight,
  ShieldCheck
} from 'lucide-react';
import { AudioEngine } from '../utils/AudioEngine';

interface TalismanItem {
  id: string;
  name: string;
  shortName: string;
  tagline: string;
  badge: string;
  category: string;
  gradient: string;
  borderColor: string;
  accentColor: string;
  icon: React.ReactNode;
  highlight: string;
  backTitle: string;
  backDesc: string;
  specs: string[];
}

export const Interactive3DHeroTalisman: React.FC = () => {
  const [activeCharmId, setActiveCharmId] = useState<string>('python');
  const [flippedCharms, setFlippedCharms] = useState<Record<string, boolean>>({});

  const talismans: TalismanItem[] = [
    {
      id: 'python',
      name: 'Full-Stack Python Core',
      shortName: 'Python',
      tagline: 'FastAPI Microservices & Django ORM',
      badge: 'Core Expert',
      category: 'Backend Architecture',
      gradient: 'from-sky-500/20 via-cyan-500/10 to-slate-950',
      borderColor: 'border-cyan-500/40 hover:border-cyan-300',
      accentColor: 'text-cyan-400',
      icon: <Code2 className="w-5 h-5 text-cyan-400" />,
      highlight: 'Production APIs & Microservices',
      backTitle: 'FastAPI + Django',
      backDesc: 'High-throughput async endpoints & RBAC',
      specs: ['FastAPI Async', 'Django REST', 'PostgreSQL', 'Docker']
    },
    {
      id: 'iot',
      name: 'ESP32 IoT Telemetry',
      shortName: 'ESP32',
      tagline: 'AGRIMISTRO Aeroponic Platform',
      badge: '₹50k Winner',
      category: 'IoT & Telemetry',
      gradient: 'from-emerald-500/20 via-teal-500/10 to-slate-950',
      borderColor: 'border-emerald-500/40 hover:border-emerald-300',
      accentColor: 'text-emerald-400',
      icon: <Cpu className="w-5 h-5 text-emerald-400" />,
      highlight: '+45% Irrigation Telemetry Savings',
      backTitle: '5 Sensor Rig',
      backDesc: 'Real-time telemetry in 22 languages',
      specs: ['ESP32 C++', 'FastAPI Ingestion', 'Supabase', '22 Languages']
    },
    {
      id: 'voice',
      name: 'Voice AI Neural Concierge',
      shortName: 'Voice AI',
      tagline: 'ULAVI VOCIS Real-Time System',
      badge: '< 800ms',
      category: 'Generative AI',
      gradient: 'from-violet-500/20 via-purple-500/10 to-slate-950',
      borderColor: 'border-violet-500/40 hover:border-violet-300',
      accentColor: 'text-violet-400',
      icon: <Mic className="w-5 h-5 text-violet-400" />,
      highlight: 'Low-Latency Multilingual Speech',
      backTitle: 'Whisper STT',
      backDesc: 'WebSocket audio streaming & AI dialog',
      specs: ['Whisper STT', 'OpenAI Realtime', 'WebSockets', 'Low Latency']
    },
    {
      id: 'gold',
      name: 'SRM 1st Prize Gold Medal',
      shortName: 'Award',
      tagline: 'State-Level Grand Champion',
      badge: '₹50,000 Prize',
      category: 'Honors & Academics',
      gradient: 'from-amber-500/25 via-yellow-500/10 to-slate-950',
      borderColor: 'border-amber-500/50 hover:border-amber-300',
      accentColor: 'text-amber-400',
      icon: <Trophy className="w-5 h-5 text-amber-400" />,
      highlight: '1st Place out of entire SRM University',
      backTitle: '₹50,000 1st',
      backDesc: 'SRM Project Day Grand Prize Champion',
      specs: ['Rank 1 SRM IST', 'AI & GenAI Prize', '9.90 CGPA', 'Gold Medal']
    },
    {
      id: 'dsa',
      name: '100 DSA Algorithmic Prism',
      shortName: 'DSA 100',
      tagline: 'Pattern-Based Problem Solving',
      badge: '88.6% Acc',
      category: 'Data Structures',
      gradient: 'from-sky-500/20 via-blue-500/10 to-slate-950',
      borderColor: 'border-sky-500/40 hover:border-sky-300',
      accentColor: 'text-sky-400',
      icon: <Zap className="w-5 h-5 text-sky-400" />,
      highlight: 'Top 10% Problem Solving Consistency',
      backTitle: '100 Solved',
      backDesc: '88.6% submission acceptance rate',
      specs: ['50 Mediums', '40 Easy', '10 Hard', 'Optimal Big-O']
    }
  ];

  const handleCharmClick = (id: string) => {
    AudioEngine.playKeyClick();
    setActiveCharmId(id);
    setFlippedCharms((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const activeCharm = talismans.find((t) => t.id === activeCharmId) || talismans[0];

  return (
    <div className="w-full rounded-2xl bg-[#090d16] border border-cyan-500/30 p-3 sm:p-5 shadow-2xl space-y-3 sm:space-y-4">
      
      {/* Top HUD Title Bar */}
      <div className="flex items-center justify-between gap-2 border-b border-white/10 pb-2.5 sm:pb-3">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
          <span className="font-mono font-bold text-xs sm:text-sm text-white">
            3D Tech Talisman Matrix
          </span>
        </div>
        <div className="flex items-center gap-1.5 text-[10px] font-mono text-cyan-300 bg-cyan-950/60 px-2 py-0.5 rounded-md border border-cyan-500/30">
          <RotateCw className="w-3 h-3 text-cyan-400" />
          <span>Tap Card to Flip</span>
        </div>
      </div>

      {/* 5 Interactive 3D Charms Grid */}
      <div className="grid grid-cols-5 gap-1.5 sm:gap-2.5">
        {talismans.map((charm) => {
          const isSelected = activeCharmId === charm.id;
          const isFlipped = !!flippedCharms[charm.id];

          return (
            <div
              key={charm.id}
              style={{ perspective: '1000px' }}
              className="h-[95px] sm:h-[115px] w-full"
            >
              <div
                onClick={() => handleCharmClick(charm.id)}
                style={{
                  transformStyle: 'preserve-3d',
                  transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
                  transition: 'transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
                }}
                className={`w-full h-full relative cursor-pointer select-none rounded-xl border transition-all ${
                  isSelected ? 'ring-2 ring-cyan-400 shadow-lg shadow-cyan-500/20' : 'hover:border-white/30'
                }`}
              >
                {/* FRONT FACE (Default) */}
                <div
                  style={{
                    backfaceVisibility: 'hidden',
                    WebkitBackfaceVisibility: 'hidden',
                    transform: 'rotateY(0deg)'
                  }}
                  className={`absolute inset-0 rounded-xl p-2 sm:p-2.5 flex flex-col justify-between bg-gradient-to-b ${charm.gradient} ${charm.borderColor} border z-10`}
                >
                  <div className="flex items-center justify-between">
                    <div className="p-1 sm:p-1.5 rounded-lg bg-slate-950/90 border border-white/10 shadow-sm">
                      {charm.icon}
                    </div>
                    {isSelected && (
                      <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                    )}
                  </div>
                  <div>
                    <div className="text-[10px] sm:text-xs font-bold text-white leading-tight truncate">
                      {charm.shortName}
                    </div>
                    <div className="text-[8px] sm:text-[10px] font-mono text-cyan-300/90 truncate font-semibold">
                      {charm.badge}
                    </div>
                  </div>
                </div>

                {/* BACK FACE (Flipped - Crystal Clear & Never Mirrored) */}
                <div
                  style={{
                    backfaceVisibility: 'hidden',
                    WebkitBackfaceVisibility: 'hidden',
                    transform: 'rotateY(180deg)'
                  }}
                  className="absolute inset-0 rounded-xl p-2 sm:p-2.5 flex flex-col items-center justify-center text-center bg-slate-950 border border-cyan-400 shadow-md z-20"
                >
                  <Sparkles className="w-3.5 h-3.5 text-cyan-300 mb-0.5 shrink-0" />
                  <div className="text-[9px] sm:text-[10px] font-mono text-cyan-300 font-bold leading-tight">
                    {charm.backTitle}
                  </div>
                  <div className="text-[7px] sm:text-[8px] text-slate-300 mt-1 leading-tight line-clamp-2">
                    {charm.backDesc}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Selected Charm Superpower Inspector Card */}
      <div className="rounded-xl bg-slate-950/90 border border-white/15 p-3.5 sm:p-4 space-y-2.5 animate-fadeIn">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 shrink-0">
              {activeCharm.icon}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h4 className="font-heading font-bold text-xs sm:text-sm text-white">
                  {activeCharm.name}
                </h4>
                <span className="px-2 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-[9px] sm:text-[10px] font-mono font-bold">
                  {activeCharm.badge}
                </span>
              </div>
              <div className="text-[10px] sm:text-xs text-slate-400 font-mono mt-0.5">
                {activeCharm.tagline}
              </div>
            </div>
          </div>

          <div className="text-[10px] sm:text-xs font-semibold text-emerald-400 flex items-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
            <span>{activeCharm.highlight}</span>
          </div>
        </div>

        {/* Specs Pill Cloud */}
        <div className="flex flex-wrap gap-1.5 pt-2 border-t border-white/5">
          {activeCharm.specs.map((spec, idx) => (
            <span
              key={idx}
              className="px-2.5 py-1 rounded-lg bg-slate-900 border border-white/10 text-[10px] sm:text-[11px] font-mono text-slate-200 flex items-center gap-1.5 shadow-sm"
            >
              <CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0" />
              <span>{spec}</span>
            </span>
          ))}
        </div>
      </div>

    </div>
  );
};
