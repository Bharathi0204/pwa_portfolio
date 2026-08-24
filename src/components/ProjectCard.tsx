import React from 'react';
import { Trophy, ArrowUpRight, Cpu, Layers } from 'lucide-react';
import { Project } from '../data/portfolioData';

interface ProjectCardProps {
  project: Project;
  onOpenCaseStudy: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onOpenCaseStudy }) => {
  return (
    <div className="glass-panel p-6 flex flex-col justify-between group relative overflow-hidden">
      
      {/* Glow highlight on hover */}
      <div className="absolute -right-12 -top-12 w-36 h-36 bg-cyan-500/10 rounded-full blur-2xl group-hover:bg-cyan-500/20 transition-all pointer-events-none" />

      <div>
        {/* Top Badges */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className="px-2.5 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-[11px] font-mono font-semibold uppercase tracking-wider">
            {project.category}
          </span>
          {project.award && (
            <span className="px-2.5 py-0.5 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300 text-[11px] font-semibold flex items-center gap-1">
              <Trophy className="w-3 h-3 text-amber-400" />
              <span>{project.award.split('—')[0]}</span>
            </span>
          )}
        </div>

        {/* Title & Subtitle */}
        <h3 className="font-heading font-bold text-xl sm:text-2xl text-white group-hover:text-cyan-300 transition-colors flex items-center justify-between">
          <span>{project.title}</span>
          <button 
            onClick={() => onOpenCaseStudy(project)}
            className="p-1.5 rounded-lg bg-white/5 group-hover:bg-cyan-500/20 text-slate-400 group-hover:text-cyan-300 transition-all"
            title="Open Architecture Case Study"
          >
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </h3>
        
        <p className="text-xs text-cyan-400/90 font-mono mt-1 mb-3">
          {project.subtitle}
        </p>

        <p className="text-slate-300 text-xs sm:text-sm line-clamp-3 leading-relaxed mb-4">
          {project.solution}
        </p>

        {/* Architecture Snapshot Strip */}
        <div className="p-2.5 rounded-lg bg-slate-950/60 border border-white/5 mb-4 flex items-center gap-2 text-[11px] text-slate-400">
          <Layers className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
          <span className="truncate">
            {project.architectureFlow.map(s => s.label).join(' → ')}
          </span>
        </div>
      </div>

      <div>
        {/* Technology Pills */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.technologies.slice(0, 4).map((tech, idx) => (
            <span
              key={idx}
              className="px-2 py-0.5 rounded bg-slate-950/80 border border-white/10 text-[11px] font-mono text-slate-300"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="px-2 py-0.5 rounded bg-slate-950/80 border border-white/10 text-[11px] font-mono text-cyan-400">
              +{project.technologies.length - 4} more
            </span>
          )}
        </div>

        {/* Case Study Action Button */}
        <button
          onClick={() => onOpenCaseStudy(project)}
          className="w-full py-2.5 rounded-xl bg-slate-900/90 hover:bg-cyan-950/50 border border-white/10 hover:border-cyan-500/40 text-cyan-300 text-xs font-bold flex items-center justify-center gap-2 transition-all shadow-sm group-hover:border-cyan-500/50"
        >
          <Cpu className="w-3.5 h-3.5 text-cyan-400" />
          <span>Explore Architecture & Deep-Dive</span>
        </button>
      </div>

    </div>
  );
};
