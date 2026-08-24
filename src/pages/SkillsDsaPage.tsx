import React, { useState } from 'react';
import { Sparkles, Code2, Server, Layout, Bot, Database } from 'lucide-react';
import { SKILLS_DATA } from '../data/portfolioData';
import { DsaVisualizer } from '../components/DsaVisualizer';

export const SkillsDsaPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'languages' | 'backend' | 'frontend' | 'ai' | 'devops'>('languages');

  const tabList = [
    { id: 'languages', label: 'Languages', icon: Code2 },
    { id: 'backend', label: 'Backend & APIs', icon: Server },
    { id: 'frontend', label: 'Frontend & UI', icon: Layout },
    { id: 'ai', label: 'AI & Voice', icon: Bot },
    { id: 'devops', label: 'Databases & Cloud', icon: Database }
  ];

  const getActiveSkills = () => {
    switch (activeTab) {
      case 'languages': return SKILLS_DATA.languages;
      case 'backend': return SKILLS_DATA.backend;
      case 'frontend': return SKILLS_DATA.frontend;
      case 'ai': return SKILLS_DATA.aiAndVoice;
      case 'devops': return SKILLS_DATA.databasesAndDevOps;
    }
  };

  return (
    <section id="skills" className="py-12 sm:py-20 relative ambient-glow-violet">
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/30 text-violet-300 text-[10px] sm:text-xs font-mono font-bold uppercase tracking-wider mb-2.5 sm:mb-3">
            <Sparkles className="w-3.5 h-3.5 shrink-0" />
            <span>Technical Mastery & Algorithms</span>
          </div>
          <h2 className="font-heading font-black text-2xl sm:text-4xl lg:text-5xl text-white tracking-tight">
            Skill Matrix & <br />
            <span className="gradient-text-violet">100 DSA Milestone</span>
          </h2>
          <p className="text-slate-300 text-xs sm:text-sm lg:text-base mt-2">
            Structured competency across Python backend systems, enterprise Angular/React, Voice AI pipelines, cloud databases, and pattern-based algorithmic problem solving.
          </p>
        </div>

        {/* Interactive Skill Category Switcher */}
        <div className="glass-panel p-3.5 sm:p-6 mb-8 sm:mb-12 border-white/10">
          
          {/* Scrollable tabs */}
          <div className="flex items-center gap-1.5 sm:gap-2 pb-3 sm:pb-5 border-b border-white/10 mb-4 sm:mb-6 overflow-x-auto no-scrollbar">
            {tabList.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`px-3 sm:px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 sm:gap-2 whitespace-nowrap transition-colors shrink-0 ${
                    isActive
                      ? 'bg-violet-600 text-white shadow-md'
                      : 'bg-slate-950/60 border border-white/5 text-slate-400 hover:text-white hover:bg-slate-900'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5 shrink-0" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Skill Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
            {getActiveSkills().map((skill: any, idx: number) => (
              <div
                key={idx}
                className="p-3.5 sm:p-4 rounded-xl bg-slate-950/70 border border-white/5 hover:border-violet-500/40 transition-colors flex flex-col justify-between group h-full"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <div className="flex flex-wrap items-center gap-1.5 min-w-0">
                      <span className="font-bold text-xs sm:text-sm text-white group-hover:text-violet-300 transition-colors truncate">
                        {skill.name}
                      </span>
                      {skill.tag && (
                        <span className="px-2 py-0.5 rounded-full bg-violet-500/20 text-violet-300 text-[9px] sm:text-[10px] font-mono font-semibold shrink-0">
                          {skill.tag}
                        </span>
                      )}
                    </div>
                    <span className="text-xs font-mono font-bold text-slate-400 shrink-0">
                      {skill.level}%
                    </span>
                  </div>

                  {/* Skill Progress Meter */}
                  <div className="w-full h-1.5 bg-slate-900 rounded-full overflow-hidden mb-2.5">
                    <div
                      className="h-full bg-gradient-to-r from-violet-500 via-cyan-400 to-emerald-400 rounded-full transition-all duration-300"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>

                  <p className="text-[11px] sm:text-xs text-slate-400 leading-relaxed">
                    {skill.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* DSA Pattern Explorer */}
        <DsaVisualizer />

      </div>
    </section>
  );
};
