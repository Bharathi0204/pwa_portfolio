import React from 'react';
import { Briefcase, ArrowRight, CheckCircle2, Award, Sparkles } from 'lucide-react';
import { EXPERIENCES } from '../data/portfolioData';
import { TimelineItem } from '../components/TimelineItem';

export const ExperiencePage: React.FC = () => {
  const careerPath = [
    { title: 'Python & Django', label: 'Backend Foundations (DLK)' },
    { title: 'React & FastAPI', label: 'Full Stack & RBAC (Infosys)' },
    { title: 'Whisper & Voice AI', label: 'Multilingual Systems (Ulavi)' },
    { title: 'IoT & Telemetry', label: 'Sensors & GenAI (AGRIMISTRO)' },
    { title: 'Angular & TypeScript', label: 'Enterprise ERP (Savyasasy)' }
  ];

  return (
    <section id="experience" className="py-12 sm:py-20 relative">
      
      {/* Background glow */}
      <div className="glow-orb glow-orb-cyan w-[260px] sm:w-[400px] h-[260px] sm:h-[400px] top-20 -left-20" />

      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-8 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-[10px] sm:text-xs font-mono font-bold uppercase tracking-wider mb-2.5 sm:mb-3">
            <Briefcase className="w-3.5 h-3.5 shrink-0" />
            <span>Work History & Impact</span>
          </div>
          <h2 className="font-heading font-black text-2xl sm:text-4xl lg:text-5xl text-white tracking-tight">
            Career Timeline & <br />
            <span className="gradient-text-cyan">4 Industry Internships</span>
          </h2>
          <p className="text-slate-300 text-xs sm:text-sm lg:text-base mt-2 sm:mt-3 leading-relaxed">
            Every internship expanded my engineering capabilities — progressing from backend web foundations and enterprise security to real-time Voice AI concierges and Angular ERP development.
          </p>
        </div>

        {/* Career Progression Flow Strip */}
        <div className="glass-panel p-3.5 sm:p-6 mb-8 sm:mb-12 overflow-hidden">
          <div className="text-[10px] sm:text-xs font-mono text-slate-400 uppercase tracking-wider mb-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
              <span>Technical Evolution Path</span>
            </div>
            <span className="text-[10px] text-cyan-400 font-mono sm:hidden">Swipe →</span>
          </div>

          <div className="flex items-center gap-2 sm:gap-4 overflow-x-auto pb-2 custom-scrollbar snap-x snap-mandatory">
            {careerPath.map((step, idx) => (
              <React.Fragment key={idx}>
                <div className="min-w-[160px] sm:min-w-[180px] p-3 rounded-xl bg-slate-950/80 border border-white/10 flex-1 hover:border-cyan-500/40 transition-all snap-start">
                  <div className="text-[9px] sm:text-[10px] font-mono text-cyan-400 font-bold">Step 0{idx + 1}</div>
                  <div className="font-bold text-xs sm:text-sm text-white truncate">{step.title}</div>
                  <div className="text-[10px] sm:text-[11px] text-slate-400 mt-0.5 truncate">{step.label}</div>
                </div>
                {idx < careerPath.length - 1 && (
                  <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-slate-600 shrink-0" />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Internships Timeline List */}
        <div className="max-w-4xl mx-auto space-y-1">
          {EXPERIENCES.map((exp, idx) => (
            <TimelineItem
              key={exp.id}
              experience={exp}
              isLast={idx === EXPERIENCES.length - 1}
            />
          ))}
        </div>

      </div>
    </section>
  );
};
