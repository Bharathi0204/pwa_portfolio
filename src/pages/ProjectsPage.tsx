import React, { useState } from 'react';
import { FolderGit2, Sparkles, Filter, Trophy, ArrowUpRight } from 'lucide-react';
import { PROJECTS, Project } from '../data/portfolioData';
import { ProjectCard } from '../components/ProjectCard';

interface ProjectsPageProps {
  onOpenCaseStudy: (project: Project) => void;
}

export const ProjectsPage: React.FC<ProjectsPageProps> = ({ onOpenCaseStudy }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'IoT & Hardware', 'AI / Voice', 'Systems', 'Full Stack'];

  const filteredProjects = selectedCategory === 'All'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === selectedCategory);

  return (
    <section id="projects" className="py-20 relative">
      
      {/* Background glow */}
      <div className="glow-orb glow-orb-emerald w-[450px] h-[450px] top-40 right-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header & Filters */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-mono font-bold uppercase tracking-wider mb-3">
              <FolderGit2 className="w-3.5 h-3.5" />
              <span>Deep-Dive Project Case Studies</span>
            </div>
            <h2 className="font-heading font-black text-3xl sm:text-5xl text-white tracking-tight">
              Real Systems, Hardware & <br />
              <span className="gradient-text-emerald">AI Architectures</span>
            </h2>
            <p className="text-slate-300 text-sm sm:text-base mt-2">
              Every project is documented with end-to-end architecture diagrams, direct engineering contributions, challenges solved, and measurable outcomes.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                  selectedCategory === cat
                    ? 'bg-emerald-500 text-slate-950 font-bold shadow-lg shadow-emerald-500/20'
                    : 'bg-slate-900 border border-white/10 text-slate-300 hover:border-white/20'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Case Study Hero Banner: AGRIMISTRO */}
        {selectedCategory === 'All' && (
          <div className="mb-10 rounded-2xl p-6 sm:p-8 bg-gradient-to-br from-slate-900 via-slate-900/90 to-emerald-950/40 border border-emerald-500/40 shadow-2xl relative overflow-hidden group">
            
            {/* Glow decoration */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4">
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="px-3 py-1 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-300 text-xs font-bold flex items-center gap-1.5">
                    <Trophy className="w-4 h-4 text-amber-400" />
                    1st Prize — AI & Generative AI @ SRM Project Day 2026 (₹50,000 Cash Prize)
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full bg-cyan-500/15 text-cyan-300 text-[11px] font-mono">
                    IoT + FastAPI + 22 Indian Languages
                  </span>
                </div>

                <h3 className="font-heading font-black text-2xl sm:text-4xl text-white">
                  AGRIMISTRO: IoT Agricultural Telemetry Intelligence
                </h3>

                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed max-w-2xl">
                  Vertical aeroponic farming prototype solving acute water scarcity. Connects an ESP32 with 5 environmental sensors (soil moisture, water level, temperature, humidity, pH), real-time FastAPI ingestion, Supabase persistence, and automated AI diagnosis in 22 Indian languages.
                </p>

                <div className="flex flex-wrap gap-2 pt-1">
                  {['ESP32', 'Python / FastAPI', 'React', 'Supabase', 'OpenAI', 'IoT Sensors'].map((tech, idx) => (
                    <span key={idx} className="px-2.5 py-0.5 rounded-md bg-slate-950 border border-white/10 text-xs font-mono text-emerald-300">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-4 flex flex-col justify-center space-y-3">
                <div className="p-4 rounded-xl bg-slate-950/80 border border-white/10 text-center">
                  <div className="text-xs text-slate-400 font-mono">Telemetry Savings</div>
                  <div className="font-heading font-black text-2xl text-emerald-400 mt-0.5">+45% Water Saved</div>
                </div>

                <button
                  onClick={() => onOpenCaseStudy(PROJECTS[0])}
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-400 hover:to-cyan-400 text-slate-950 font-bold text-xs flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20 transition-all"
                >
                  <span>Launch Full Case Study Architecture</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpenCaseStudy={onOpenCaseStudy}
            />
          ))}
        </div>

      </div>
    </section>
  );
};
