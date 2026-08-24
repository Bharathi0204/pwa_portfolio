import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { InstallPromptModal } from './components/InstallPrompt';
import { OfflineBadge } from './components/OfflineBadge';
import { ArchitectureModal } from './components/ArchitectureModal';
import { AiAssistant } from './components/AiAssistant';
import { HomePage } from './pages/HomePage';
import { ExperiencePage } from './pages/ExperiencePage';
import { ProjectsPage } from './pages/ProjectsPage';
import { SkillsDsaPage } from './pages/SkillsDsaPage';
import { AchievementsPage } from './pages/AchievementsPage';
import { ContactPage } from './pages/ContactPage';
import { Project } from './data/portfolioData';
import { Bot, Sparkles, Download } from 'lucide-react';

export const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [isInstalled, setIsInstalled] = useState<boolean>(false);
  const [installModalOpen, setInstallModalOpen] = useState<boolean>(false);
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<Project | null>(null);
  const [aiAssistantOpen, setAiAssistantOpen] = useState<boolean>(false);

  // Register PWA Install listener
  useEffect(() => {
    // Check if launched in standalone mode (already installed)
    if (window.matchMedia('(display-mode: standalone)').matches || (window.navigator as any).standalone) {
      setIsInstalled(true);
    }

    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e);
    };

    const handleAppInstalled = () => {
      setIsInstalled(true);
      setDeferredPrompt(null);
      setInstallModalOpen(false);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    window.addEventListener('appinstalled', handleAppInstalled);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
      window.removeEventListener('appinstalled', handleAppInstalled);
    };
  }, []);

  // Update active section on scroll
  useEffect(() => {
    const sections = ['home', 'experience', 'projects', 'skills', 'achievements', 'contact'];
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleTriggerNativeInstall = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      if (outcome === 'accepted') {
        setIsInstalled(true);
      }
      setDeferredPrompt(null);
      setInstallModalOpen(false);
    }
  };

  const handleNavigateTo = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-cyber-grid bg-[#0b0f19] text-slate-100 relative">
      
      {/* Offline Status Listener */}
      <OfflineBadge />

      {/* Navigation Header */}
      <Navbar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        onOpenAssistant={() => setAiAssistantOpen(true)}
        deferredPrompt={deferredPrompt}
        isInstalled={isInstalled}
        onInstallClick={() => setInstallModalOpen(true)}
      />

      {/* Main Content Sections */}
      <main>
        <HomePage
          onOpenAssistant={() => setAiAssistantOpen(true)}
          onNavigateTo={handleNavigateTo}
          onInstallClick={() => setInstallModalOpen(true)}
          isInstalled={isInstalled}
        />

        <ExperiencePage />

        <ProjectsPage
          onOpenCaseStudy={(project) => setSelectedCaseStudy(project)}
        />

        <SkillsDsaPage />

        <AchievementsPage />

        <ContactPage />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Action Button: Grounded AI Assistant */}
      <button
        onClick={() => setAiAssistantOpen(true)}
        className="fixed bottom-6 right-6 z-40 p-3.5 rounded-2xl bg-gradient-to-br from-violet-600 via-sky-600 to-cyan-500 text-white shadow-2xl shadow-violet-500/40 hover:scale-110 active:scale-95 transition-all duration-200 group flex items-center gap-2 border border-white/20"
        title="Ask Portfolio AI Assistant"
      >
        <div className="relative">
          <Bot className="w-6 h-6 text-white group-hover:rotate-12 transition-transform" />
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-emerald-400 rounded-full ring-2 ring-slate-950 animate-pulse" />
        </div>
        <span className="hidden sm:inline text-xs font-bold font-mono tracking-wide pr-1">
          Ask Portfolio AI
        </span>
      </button>

      {/* PWA Installation Modal */}
      <InstallPromptModal
        isOpen={installModalOpen}
        onClose={() => setInstallModalOpen(false)}
        deferredPrompt={deferredPrompt}
        onTriggerNativeInstall={handleTriggerNativeInstall}
      />

      {/* Project Case Study Architecture Modal */}
      <ArchitectureModal
        isOpen={!!selectedCaseStudy}
        project={selectedCaseStudy}
        onClose={() => setSelectedCaseStudy(null)}
      />

      {/* Grounded Portfolio AI Assistant Modal */}
      <AiAssistant
        isOpen={aiAssistantOpen}
        onClose={() => setAiAssistantOpen(false)}
      />

    </div>
  );
};
