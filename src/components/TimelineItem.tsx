import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle, ArrowRight, Quote, Sparkles } from 'lucide-react';
import { Experience } from '../data/portfolioData';

interface TimelineItemProps {
  experience: Experience;
  isLast?: boolean;
}

export const TimelineItem: React.FC<TimelineItemProps> = ({ experience, isLast }) => {
  const isCurrent = experience.status === 'Current';

  return (
    <div className="relative flex gap-3 sm:gap-6 group">
      
      {/* Left Timeline Spine */}
      <div className="flex flex-col items-center shrink-0">
        {/* Node Dot */}
        <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center transition-all duration-300 border shrink-0 ${
          isCurrent 
            ? 'bg-cyan-500/20 border-cyan-400 text-cyan-300 shadow-lg shadow-cyan-500/30' 
            : 'bg-slate-900 border-white/10 text-slate-400 group-hover:border-cyan-500/40 group-hover:text-cyan-300'
        }`}>
          {isCurrent ? (
            <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 animate-pulse text-cyan-400" />
          ) : (
            <Briefcase className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          )}
        </div>

        {/* Vertical Line */}
        {!isLast && (
          <div className="w-0.5 grow bg-gradient-to-b from-cyan-500/40 via-white/10 to-transparent my-1.5 sm:my-2" />
        )}
      </div>

      {/* Right Content Card */}
      <div className="grow pb-6 sm:pb-8 min-w-0">
        <div className="glass-panel p-4 sm:p-6 relative overflow-hidden">
          
          {/* Top Status & Date Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 sm:gap-2 mb-2">
            <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
              <span className="font-heading font-extrabold text-base sm:text-xl text-white group-hover:text-cyan-300 transition-colors">
                {experience.company}
              </span>
              {isCurrent && (
                <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-[9px] sm:text-[10px] font-mono font-bold uppercase tracking-wider flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping shrink-0" />
                  Active
                </span>
              )}
            </div>

            <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-[11px] sm:text-xs text-slate-400 font-mono">
              <span className="flex items-center gap-1">
                <Calendar className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-cyan-400 shrink-0" />
                <span>{experience.period}</span>
              </span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-slate-400 shrink-0" />
                <span>{experience.location}</span>
              </span>
            </div>
          </div>

          {/* Role & Project Focus */}
          <div className="text-xs sm:text-sm font-semibold text-cyan-400 mb-2">
            {experience.role} {experience.projectFocus && <span className="text-slate-300 font-normal block sm:inline mt-0.5 sm:mt-0 sm:before:content-['•_']">{experience.projectFocus}</span>}
          </div>

          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-3 sm:mb-4">
            {experience.summary}
          </p>

          {/* Tech Stack Pills */}
          <div className="flex flex-wrap gap-1.5 mb-3 sm:mb-4">
            {experience.stack.map((tech, idx) => (
              <span
                key={idx}
                className="px-2 sm:px-2.5 py-0.5 rounded-md bg-slate-950/80 border border-white/10 text-[10px] sm:text-[11px] font-mono text-cyan-300"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Direct Technical Responsibilities */}
          <div className="mb-3 sm:mb-4">
            <div className="text-[10px] sm:text-xs font-bold text-slate-200 mb-1.5 uppercase tracking-wider font-mono">
              Technical Contributions & Impact:
            </div>
            <ul className="space-y-1 sm:space-y-1.5">
              {experience.responsibilities.map((resp, idx) => (
                <li key={idx} className="flex items-start gap-1.5 sm:gap-2 text-[11px] sm:text-xs text-slate-300">
                  <ArrowRight className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                  <span>{resp}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Interview Takeaway Quote Strip */}
          <div className="p-2.5 sm:p-3 rounded-xl bg-slate-950/60 border-l-2 border-cyan-400 text-[11px] sm:text-xs text-slate-300 italic flex items-start gap-2">
            <Quote className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5 opacity-70" />
            <span>"{experience.interviewTakeaway}"</span>
          </div>

        </div>
      </div>

    </div>
  );
};
