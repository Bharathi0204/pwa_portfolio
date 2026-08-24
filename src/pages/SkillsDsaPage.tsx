import React, { useState } from 'react';
import { Sparkles, Code2, Server, Layout, Bot, Database, Flame, CheckCircle } from 'lucide-react';
import { SKILLS_DATA } from '../data/portfolioData';
import { DsaVisualizer } from '../components/DsaVisualizer';

export const SkillsDsaPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'languages' | 'backend' | 'frontend' | 'ai' | 'devops'>('languages');

  const tabList = [
    { id: 'languages', label: 'Languages', icon: Code2 },
    { id: 'backend', label: 'Backend & APIs', icon: Server },
    { id: 'frontend', label: 'Frontend & UI', icon: Layout },
    { id: 'ai', label: 'AI & Voice Systems', icon: Bot },
    { id: 'devops', label: 'Databases & Systems', icon: Database }
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
    <section id="skills" className="py-20 relative">
      
      {/* Glow */}
      <div className="glow-orb glow-orb-violet w-[400px] h-[400px] top-10 left-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/30 text-violet-300 text-xs font-mono font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Technical Mastery & Algorithms</span>
          </div>
          <h2 className="font-heading font-black text-3xl sm:text-5xl text-white tracking-tight">
            Skill Matrix & <br />
            <span className="gradient-text-violet">100 DSA Milestone</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mt-2">
            Structured competency across Python backend systems, enterprise Angular/React, Voice AI pipelines, cloud databases, and pattern-based algorithmic problem solving.
          </p>
        </div>

        {/* Interactive Skill Category Switcher */}
        <div className="glass-panel p-6 mb-12">
          
          <div className="flex flex-wrap gap-2 pb-6 border-b border-white/10 mb-6">
            {tabList.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-2 transition-all ${
                    isActive
                      ? 'bg-violet-600 text-white shadow-lg shadow-violet-600/30'
                      : 'bg-slate-950/60 border border-white/5 text-slate-400 hover:text-white hover:bg-slate-900'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Skill Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {getActiveSkills().map((skill: any, idx: number) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-slate-950/70 border border-white/5 hover:border-violet-500/30 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-sm text-white group-hover:text-violet-300 transition-colors">
                        {skill.name}
                      </span>
                      {skill.tag && (
                        <span className="px-2 py-0.5 rounded-full bg-violet-500/20 text-violet-300 text-[10px] font-mono font-semibold">
                          {skill.tag}
                        </span>
                      )}
                    </div>
                    <span className="text-xs font-mono font-bold text-slate-400">
                      {skill.level}%
                    </span>
                  </div>

                  {/* Skill Progress Meter */}
                  <div className="w-full h-1.5 bg-slate-900 rounded-full overflow-hidden mb-3">
                    <div
                      className="h-full bg-gradient-to-r from-violet-500 via-cyan-400 to-emerald-400 rounded-full transition-all duration-500"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>

                  <p className="text-xs text-slate-400 leading-relaxed">
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
