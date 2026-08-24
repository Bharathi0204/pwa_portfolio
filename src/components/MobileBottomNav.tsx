import React from 'react';
import { 
  Code2, 
  Briefcase, 
  FolderGit2, 
  Sparkles, 
  Award, 
  Mail,
  Bot
} from 'lucide-react';

interface MobileBottomNavProps {
  activeSection: string;
  onNavigateTo: (sectionId: string) => void;
  onOpenAssistant: () => void;
}

export const MobileBottomNav: React.FC<MobileBottomNavProps> = ({
  activeSection,
  onNavigateTo,
  onOpenAssistant
}) => {
  const navItems = [
    { id: 'home', label: 'Home', icon: Code2 },
    { id: 'experience', label: 'Work', icon: Briefcase },
    { id: 'projects', label: 'Projects', icon: FolderGit2 },
    { id: 'skills', label: 'Skills', icon: Sparkles },
    { id: 'achievements', label: 'Honors', icon: Award },
    { id: 'contact', label: 'Contact', icon: Mail }
  ];

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 px-3 pb-[max(0.6rem,env(safe-area-inset-bottom))] pt-2 pointer-events-none">
      <div className="max-w-md mx-auto glass-dock rounded-2xl p-1.5 flex items-center justify-around shadow-2xl pointer-events-auto border border-white/15">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onNavigateTo(item.id)}
              className={`flex flex-col items-center justify-center py-1 px-2 rounded-xl transition-all duration-200 relative group flex-1 ${
                isActive 
                  ? 'text-cyan-400 font-bold' 
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              {/* Active Glow Pill Indicator */}
              {isActive && (
                <span className="absolute inset-0 bg-cyan-500/15 border border-cyan-400/30 rounded-xl -z-10 shadow-sm shadow-cyan-500/20" />
              )}
              
              <Icon className={`w-4 h-4 transition-transform duration-200 ${isActive ? 'scale-110 text-cyan-400' : 'group-hover:scale-105'}`} />
              <span className="text-[10px] font-heading tracking-tight mt-0.5 truncate">
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
