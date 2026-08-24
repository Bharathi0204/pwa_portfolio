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
    <section id="experience" className="py-20 relative">
      
      {/* Background glow */}
      <div className="glow-orb glow-orb-cyan w-[400px] h-[400px] top-20 -left-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono font-bold uppercase tracking-wider mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Work History & Industry Impact</span>
          </div>
          <h2 className="font-heading font-black text-3xl sm:text-5xl text-white tracking-tight">
            Career Timeline & <br />
            <span className="gradient-text-cyan">4 Industry Internships</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mt-3 leading-relaxed">
            Every internship expanded my engineering capabilities — progressing from backend web foundations and enterprise security to real-time Voice AI concierges and Angular ERP development.
          </p>
        </div>

        {/* Career Progression Flow Strip */}
        <div className="glass-panel p-5 sm:p-6 mb-12 overflow-x-auto">
          <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-3 flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Technical Evolution Path</span>
          </div>

          <div className="flex items-center gap-2 sm:gap-4 min-w-[700px]">
            {careerPath.map((step, idx) => (
              <React.Fragment key={idx}>
                <div className="p-3 rounded-xl bg-slate-950/80 border border-white/10 flex-1 hover:border-cyan-500/40 transition-all">
                  <div className="text-[10px] font-mono text-cyan-400 font-bold">Step 0{idx + 1}</div>
                  <div className="font-bold text-xs text-white">{step.title}</div>
                  <div className="text-[11px] text-slate-400 mt-0.5">{step.label}</div>
                </div>
                {idx < careerPath.length - 1 && (
                  <ArrowRight className="w-4 h-4 text-slate-600 shrink-0" />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Internships Timeline List */}
        <div className="max-w-4xl mx-auto space-y-2">
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
