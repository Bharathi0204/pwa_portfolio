import React from 'react';
import { 
  X, 
  Trophy, 
  ExternalLink, 
  Cpu, 
  Radio, 
  Zap, 
  Database, 
  Layout, 
  Bot, 
  Mic, 
  FileAudio, 
  Send, 
  Terminal, 
  Box, 
  Play, 
  Trash2, 
  UserCheck, 
  Activity, 
  ShoppingBag, 
  CreditCard,
  ArrowRight,
  AlertCircle,
  CheckCircle,
  Layers
} from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import { Project } from '../data/portfolioData';

interface ArchitectureModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

const iconMap: Record<string, React.FC<{ className?: string }>> = {
  Cpu, Radio, Zap, Database, Layout, Bot, Mic, FileAudio, Send,
  Terminal, Box, Play, Trash2, UserCheck, Activity, ShoppingBag, CreditCard
};

export const ArchitectureModal: React.FC<ArchitectureModalProps> = ({
  project,
  isOpen,
  onClose
}) => {
  if (!isOpen || !project) return null;

  return (
    <div className="modal-backdrop p-2.5 sm:p-4" onClick={onClose}>
      <div 
        className="relative w-full max-w-4xl max-h-[92vh] bg-slate-900 border border-cyan-500/30 rounded-2xl shadow-2xl shadow-cyan-500/20 text-slate-100 overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="p-4 sm:p-6 border-b border-white/10 flex items-start justify-between bg-slate-950/80 gap-3">
          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 mb-1.5">
              <span className="px-2.5 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 text-[10px] sm:text-[11px] font-mono font-bold uppercase border border-cyan-500/30">
                {project.category}
              </span>
              {project.award && (
                <span className="px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 text-[10px] sm:text-[11px] font-semibold flex items-center gap-1 border border-amber-500/30">
                  <Trophy className="w-3 h-3 text-amber-400 shrink-0" />
                  <span className="truncate">{project.award}</span>
                </span>
              )}
            </div>
            <h2 className="font-heading font-extrabold text-xl sm:text-3xl text-white truncate">
              {project.title}
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-0.5 line-clamp-1">{project.subtitle}</p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors shrink-0"
            aria-label="Close Case Study"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-5 sm:space-y-6 flex-1 custom-scrollbar">
          
          {/* Key Metrics Strip */}
          {project.metrics && (
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3">
              {project.metrics.map((metric, idx) => (
                <div key={idx} className="p-2.5 sm:p-3 rounded-xl bg-slate-950/80 border border-white/5 text-center">
                  <div className="text-[10px] sm:text-[11px] text-slate-400 font-mono uppercase tracking-wider truncate">{metric.label}</div>
                  <div className="font-heading font-extrabold text-base sm:text-lg text-cyan-400 mt-0.5 truncate">{metric.value}</div>
                </div>
              ))}
            </div>
          )}

          {/* Problem & Solution Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 sm:gap-4">
            <div className="p-3.5 sm:p-4 rounded-xl bg-rose-950/20 border border-rose-500/20">
              <div className="flex items-center gap-2 text-rose-300 font-bold text-xs sm:text-sm mb-1.5">
                <AlertCircle className="w-4 h-4 text-rose-400 shrink-0" />
                The Problem
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {project.problem}
              </p>
            </div>

            <div className="p-3.5 sm:p-4 rounded-xl bg-emerald-950/20 border border-emerald-500/20">
              <div className="flex items-center gap-2 text-emerald-300 font-bold text-xs sm:text-sm mb-1.5">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                The Solution
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Interactive Architecture Flow Pipeline */}
          <div className="p-3.5 sm:p-5 rounded-xl bg-slate-950/80 border border-cyan-500/20">
            <div className="flex items-center justify-between mb-3 sm:mb-4">
              <div className="flex items-center gap-2 text-cyan-300 font-bold text-xs sm:text-sm">
                <Layers className="w-4 h-4 text-cyan-400 shrink-0" />
                End-to-End Architecture Flow
              </div>
              <span className="text-[10px] sm:text-[11px] text-slate-400 font-mono">
                {project.architectureFlow.length} Stages
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-3">
              {project.architectureFlow.map((step) => {
                const IconComponent = iconMap[step.icon] || Cpu;
                return (
                  <div 
                    key={step.step}
                    className="relative p-3 rounded-xl bg-slate-900 border border-white/10 hover:border-cyan-500/40 transition-all group"
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-cyan-500/10 text-cyan-400 flex items-center justify-center border border-cyan-500/20 group-hover:scale-110 transition-transform shrink-0">
                        <IconComponent className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                      </div>
                      <span className="font-mono text-[11px] sm:text-xs font-bold text-slate-500 group-hover:text-cyan-400">
                        Step 0{step.step}
                      </span>
                    </div>
                    <div className="font-bold text-xs text-white group-hover:text-cyan-300 transition-colors">
                      {step.label}
                    </div>
                    <div className="text-[11px] text-slate-400 mt-0.5 leading-snug">
                      {step.desc}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Key Technical Contributions */}
          <div className="p-3.5 sm:p-5 rounded-xl bg-slate-950/50 border border-white/10">
            <h4 className="text-xs sm:text-sm font-bold text-white mb-2.5 flex items-center gap-2">
              <Zap className="w-4 h-4 text-amber-400 shrink-0" />
              Direct Engineering Contributions
            </h4>
            <ul className="space-y-1.5 sm:space-y-2">
              {project.contributions.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                  <ArrowRight className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Challenges & Measurable Outcome */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 sm:gap-4">
            <div className="p-3.5 sm:p-4 rounded-xl bg-slate-950/60 border border-white/5">
              <div className="text-xs font-bold text-slate-200 mb-1">Key Engineering Challenge:</div>
              <p className="text-xs text-slate-400 leading-relaxed">{project.challenges}</p>
            </div>
            <div className="p-3.5 sm:p-4 rounded-xl bg-slate-950/60 border border-white/5">
              <div className="text-xs font-bold text-emerald-300 mb-1">Measurable Project Outcome:</div>
              <p className="text-xs text-slate-400 leading-relaxed">{project.outcome}</p>
            </div>
          </div>

          {/* Technology Stack Tags */}
          <div>
            <div className="text-[10px] sm:text-xs font-bold text-slate-400 mb-2 uppercase tracking-wider font-mono">
              Technologies Used:
            </div>
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {project.technologies.map((tech, idx) => (
                <span 
                  key={idx}
                  className="px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-lg bg-slate-950 border border-white/10 text-[11px] sm:text-xs text-slate-300 font-mono"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer Links */}
        <div className="p-3 sm:p-4 border-t border-white/10 bg-slate-950 flex flex-wrap items-center justify-between gap-3">
          <div className="text-[11px] sm:text-xs text-slate-400 font-mono">
            ID: <span className="text-cyan-400">/{project.id}</span>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary text-xs py-2 px-3 flex items-center gap-1.5"
              >
                <GithubIcon className="w-3.5 h-3.5 shrink-0" />
                <span>GitHub Repo</span>
              </a>
            )}
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-xs py-2 px-3 flex items-center gap-1.5"
              >
                <ExternalLink className="w-3.5 h-3.5 shrink-0" />
                <span>Live Showcase</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
