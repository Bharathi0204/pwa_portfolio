import React, { useState } from 'react';
import { 
  Sparkles, 
  RotateCw, 
  Cpu, 
  Mic, 
  Trophy, 
  Code2, 
  Zap, 
  Layers, 
  CheckCircle2,
  ChevronRight
} from 'lucide-react';
import { AudioEngine } from '../utils/AudioEngine';

interface TalismanItem {
  id: string;
  name: string;
  tagline: string;
  badge: string;
  category: string;
  gradient: string;
  borderColor: string;
  shadowColor: string;
  icon: React.ReactNode;
  specs: string[];
}

export const Interactive3DHeroTalisman: React.FC = () => {
  const [activeCharmId, setActiveCharmId] = useState<string>('python');
  const [flippedCharms, setFlippedCharms] = useState<Record<string, boolean>>({});

  const talismans: TalismanItem[] = [
    {
      id: 'python',
      name: 'Python Full Stack',
      tagline: 'FastAPI Microservices & Django',
      badge: 'Core Specialist',
      category: 'Backend Architecture',
      gradient: 'from-sky-500/20 via-cyan-500/10 to-slate-900',
      borderColor: 'border-cyan-500/40 hover:border-cyan-400',
      shadowColor: 'hover:shadow-cyan-500/20',
      icon: <Code2 className="w-5 h-5 text-cyan-400" />,
      specs: ['FastAPI Async', 'Django ORM', 'RESTful & GraphQL', 'PostgreSQL']
    },
    {
      id: 'iot',
      name: 'ESP32 IoT Telemetry',
      tagline: 'AGRIMISTRO Aeroponic Engine',
      badge: '₹50k 1st Prize',
      category: 'Hardware & Cloud',
      gradient: 'from-emerald-500/20 via-teal-500/10 to-slate-900',
      borderColor: 'border-emerald-500/40 hover:border-emerald-400',
      shadowColor: 'hover:shadow-emerald-500/20',
      icon: <Cpu className="w-5 h-5 text-emerald-400" />,
      specs: ['5 Sensor Rig', 'Real-Time Telemetry', '45% Water Saved', '22 Languages']
    },
    {
      id: 'voice',
      name: 'Voice AI Neural Orb',
      tagline: 'ULAVI VOCIS Concierge',
      badge: '< 800ms Latency',
      category: 'Generative AI',
      gradient: 'from-violet-500/20 via-purple-500/10 to-slate-900',
      borderColor: 'border-violet-500/40 hover:border-violet-400',
      shadowColor: 'hover:shadow-violet-500/20',
      icon: <Mic className="w-5 h-5 text-violet-400" />,
      specs: ['Whisper STT', 'OpenAI Realtime', 'Audio Streaming', 'Multi-turn Dialog']
    },
    {
      id: 'gold',
      name: 'SRM 1st Prize Gold',
      tagline: 'State-Level Grand Champion',
      badge: '₹50,000 Cash Award',
      category: 'Academics & Honors',
      gradient: 'from-amber-500/25 via-yellow-500/10 to-slate-900',
      borderColor: 'border-amber-500/50 hover:border-amber-400',
      shadowColor: 'hover:shadow-amber-500/25',
      icon: <Trophy className="w-5 h-5 text-amber-400" />,
      specs: ['Rank 1 SRM IST', 'AI/GenAI Category', '9.90 CGPA Contender', 'Gold Medallion']
    },
    {
      id: 'dsa',
      name: '100 DSA Milestone',
      tagline: 'Algorithmic Problem Solving',
      badge: '88.6% Acceptance',
      category: 'Data Structures',
      gradient: 'from-cyan-500/20 via-blue-500/10 to-slate-900',
      borderColor: 'border-sky-500/40 hover:border-sky-400',
      shadowColor: 'hover:shadow-sky-500/20',
      icon: <Zap className="w-5 h-5 text-sky-400" />,
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
    <div className="w-full rounded-2xl bg-[#090d16] border border-cyan-500/30 p-3.5 sm:p-5 shadow-xl space-y-3.5">
      
      {/* Top HUD Title Bar */}
      <div className="flex items-center justify-between gap-2 border-b border-white/10 pb-3">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
          <span className="font-mono font-bold text-xs text-white">
            3D Tech Talisman Matrix
          </span>
        </div>
        <div className="flex items-center gap-1.5 text-[10px] font-mono text-cyan-300 bg-cyan-950/50 px-2 py-0.5 rounded-md border border-cyan-500/30">
          <RotateCw className="w-3 h-3 text-cyan-400 animate-spin" style={{ animationDuration: '6s' }} />
          <span>Tap to Spin & Inspect</span>
        </div>
      </div>

      {/* 5 Interactive 3D Charms Deck (CSS 3D Transforms) */}
      <div className="grid grid-cols-5 gap-1.5 sm:gap-2.5">
        {talismans.map((charm) => {
          const isSelected = activeCharmId === charm.id;
          const isFlipped = !!flippedCharms[charm.id];

          return (
            <button
              key={charm.id}
              onClick={() => handleCharmClick(charm.id)}
              style={{ perspective: '600px' }}
              className="group focus:outline-none text-left w-full h-[88px] sm:h-[105px] relative"
              title={`Inspect ${charm.name}`}
            >
              <div
                style={{
                  transformStyle: 'preserve-3d',
                  transform: isFlipped ? 'rotateY(180deg)' : isSelected ? 'translateY(-3px)' : 'translateY(0px)',
                  transition: 'transform 0.4s cubic-bezier(0.2, 0.8, 0.2, 1)'
                }}
                className={`w-full h-full relative rounded-xl border p-2 sm:p-2.5 flex flex-col justify-between transition-all bg-gradient-to-b ${charm.gradient} ${charm.borderColor} ${
                  isSelected ? 'ring-1 ring-cyan-400 shadow-lg' : 'opacity-85 hover:opacity-100'
                }`}
              >
                {/* Front Side */}
                <div 
                  style={{ backfaceVisibility: 'hidden' }}
                  className="w-full h-full flex flex-col justify-between relative z-10"
                >
                  <div className="flex items-center justify-between">
                    <div className="p-1 rounded-lg bg-slate-950/80 border border-white/10 group-hover:scale-110 transition-transform">
                      {charm.icon}
                    </div>
                    {isSelected && (
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
                    )}
                  </div>
                  <div className="mt-1">
                    <div className="text-[9px] sm:text-[11px] font-bold text-white leading-tight line-clamp-1">
                      {charm.name.split(' ')[0]}
                    </div>
                    <div className="text-[8px] sm:text-[9px] font-mono text-cyan-300/80 truncate">
                      {charm.badge.split(' ')[0]}
                    </div>
                  </div>
                </div>

                {/* Back Side (3D Flipped View) */}
                <div
                  style={{ 
                    backfaceVisibility: 'hidden', 
                    transform: 'rotateY(180deg)' 
                  }}
                  className="absolute inset-0 rounded-xl bg-slate-950 p-2 flex flex-col items-center justify-center text-center border border-cyan-400/60"
                >
                  <Sparkles className="w-3.5 h-3.5 text-cyan-300 mb-1" />
                  <div className="text-[8px] sm:text-[9px] font-mono text-cyan-300 font-bold leading-tight">
                    {charm.specs[0]}
                  </div>
                  <div className="text-[7px] text-slate-400 mt-0.5">
                    {charm.specs[1]}
                  </div>
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {/* Selected Charm Superpower Inspector Card */}
      <div className="rounded-xl bg-slate-950/90 border border-white/10 p-3 sm:p-4 space-y-2.5 animate-fadeIn">
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <div className="p-1.5 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-cyan-300">
              {activeCharm.icon}
            </div>
            <div>
              <h4 className="font-heading font-bold text-xs sm:text-sm text-white">
                {activeCharm.name}
              </h4>
              <div className="text-[10px] sm:text-[11px] text-slate-400 font-mono">
                {activeCharm.tagline}
              </div>
            </div>
          </div>

          <span className="px-2 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-[10px] sm:text-[11px] font-mono font-bold shrink-0">
            {activeCharm.badge}
          </span>
        </div>

        {/* Specs Pill Cloud */}
        <div className="flex flex-wrap gap-1.5 pt-1 border-t border-white/5">
          {activeCharm.specs.map((spec, idx) => (
            <span
              key={idx}
              className="px-2 py-0.5 rounded-md bg-slate-900 border border-white/10 text-[10px] font-mono text-slate-300 flex items-center gap-1"
            >
              <CheckCircle2 className="w-2.5 h-2.5 text-emerald-400 shrink-0" />
              <span>{spec}</span>
            </span>
          ))}
        </div>
      </div>

    </div>
  );
};
