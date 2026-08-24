import React from 'react';
import { Trophy, Award, GraduationCap, Sparkles, Star } from 'lucide-react';
import confetti from 'canvas-confetti';
import { ACHIEVEMENTS, PERSONAL_INFO } from '../data/portfolioData';
import { Tilt3DCard } from '../components/Tilt3DCard';

export const AchievementsPage: React.FC = () => {
  const triggerConfetti = () => {
    confetti({
      particleCount: 90,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  return (
    <section id="achievements" className="py-12 sm:py-20 relative">
      
      {/* Background glow */}
      <div className="glow-orb glow-orb-cyan w-[260px] sm:w-[400px] h-[260px] sm:h-[400px] top-20 right-10" />

      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-[10px] sm:text-xs font-mono font-bold uppercase tracking-wider mb-2.5 sm:mb-3">
            <Award className="w-3.5 h-3.5 shrink-0" />
            <span>Honors & Academics</span>
          </div>
          <h2 className="font-heading font-black text-2xl sm:text-4xl lg:text-5xl text-white tracking-tight">
            Awards, Honors & <br />
            <span className="gradient-text-amber">Academic Excellence</span>
          </h2>
          <p className="text-slate-300 text-xs sm:text-sm lg:text-base mt-2">
            Recognized with top state university project awards, consistent academic top rankings, and verifiable competitive programming milestones.
          </p>
        </div>

        {/* Grand Championship Card: SRM Project Day 1st Prize with 3D Tilt */}
        <Tilt3DCard maxTilt={6} className="w-full mb-8 sm:mb-10">
          <div 
            onClick={triggerConfetti}
            className="glass-panel p-4 sm:p-8 border-amber-500/40 bg-gradient-to-r from-slate-950 via-slate-900 to-amber-950/30 shadow-2xl shadow-amber-500/10 cursor-pointer group relative overflow-hidden"
          >
            {/* Confetti Trigger Badge */}
            <div className="flex sm:absolute sm:top-4 sm:right-4 mb-3 sm:mb-0 w-fit px-2.5 sm:px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/40 text-[10px] sm:text-[11px] font-mono font-bold items-center gap-1.5 animate-pulse">
              <Sparkles className="w-3.5 h-3.5 shrink-0" />
              <span>Tap to Celebrate!</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 items-center">
              <div className="lg:col-span-8 space-y-2.5 sm:space-y-3">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-full bg-amber-500 text-slate-950 text-[10px] sm:text-[11px] font-black uppercase tracking-wider font-mono shrink-0">
                    1st Place Winner
                  </span>
                  <span className="text-xs text-amber-300 font-mono">SRM Project Day 2026</span>
                </div>

                <h3 className="font-heading font-black text-lg sm:text-2xl lg:text-3xl text-white group-hover:text-amber-300 transition-colors">
                  ₹50,000 Cash Award • AI & Generative AI Category
                </h3>

                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed max-w-2xl">
                  Secured 1st Prize across the entire institution for <strong>AGRIMISTRO</strong> — an IoT Agricultural platform integrating ESP32 real-time telemetry with a multilingual Generative AI advisory engine in 22 Indian languages.
                </p>
              </div>

              <div className="lg:col-span-4 flex items-center justify-center lg:justify-end pt-1 lg:pt-0">
                <div className="w-20 h-20 sm:w-28 sm:h-28 rounded-2xl bg-gradient-to-br from-amber-400 to-orange-600 p-0.5 shadow-2xl shadow-amber-500/30 flex items-center justify-center group-hover:scale-105 transition-transform shrink-0">
                  <div className="w-full h-full bg-slate-950 rounded-[14px] flex flex-col items-center justify-center text-center p-2">
                    <Trophy className="w-6 h-6 sm:w-8 sm:h-8 text-amber-400 mb-0.5 sm:mb-1 shrink-0 animate-bounce" />
                    <span className="font-heading font-black text-[9px] sm:text-xs text-white">1ST PRIZE</span>
                    <span className="text-[9px] sm:text-[10px] text-amber-400 font-mono">₹50,000</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Tilt3DCard>

        {/* Education & Academic Honors Grid with 3D Tilt */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-10">
          {PERSONAL_INFO.education.map((edu, idx) => (
            <Tilt3DCard key={idx} maxTilt={5} className="w-full">
              <div className="glass-panel p-4 sm:p-6 relative overflow-hidden h-full border-white/10 hover:border-cyan-500/40">
                <div className="flex items-center justify-between gap-2 mb-2.5">
                  <span className="px-2.5 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-[10px] sm:text-[11px] font-mono font-bold">
                    {edu.badge}
                  </span>
                  <span className="text-[10px] sm:text-xs text-slate-400 font-mono">{edu.duration}</span>
                </div>

                <div className="flex items-start gap-3 mb-2">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center shrink-0">
                    <GraduationCap className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-sm sm:text-lg text-white">
                      {edu.degree}
                    </h4>
                    <div className="text-xs text-slate-300">{edu.institution}</div>
                  </div>
                </div>

                <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="text-xs text-slate-400 font-mono">Cumulative Grade:</span>
                  <span className="font-heading font-black text-base sm:text-xl text-emerald-400">
                    {edu.cgpa}
                  </span>
                </div>
              </div>
            </Tilt3DCard>
          ))}
        </div>

        {/* Other Notable Milestones Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
          {ACHIEVEMENTS.slice(2).map((item) => (
            <Tilt3DCard key={item.id} maxTilt={3} className="w-full">
              <div className="p-4 sm:p-5 rounded-2xl bg-slate-950/70 border border-white/10 hover:border-cyan-500/30 transition-all flex items-start gap-3 sm:gap-4 h-full">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-slate-900 border border-white/10 text-cyan-400 flex items-center justify-center shrink-0">
                  <Star className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div className="space-y-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="px-2 py-0.5 rounded bg-slate-900 text-slate-300 text-[9px] sm:text-[10px] font-mono">
                      {item.tag}
                    </span>
                    <span className="text-[10px] text-slate-500 font-mono">{item.date}</span>
                  </div>
                  <h5 className="font-bold text-xs sm:text-sm text-white truncate">{item.title}</h5>
                  <p className="text-[11px] sm:text-xs text-slate-400 leading-relaxed">{item.description}</p>
                </div>
              </div>
            </Tilt3DCard>
          ))}
        </div>

      </div>
    </section>
  );
};
