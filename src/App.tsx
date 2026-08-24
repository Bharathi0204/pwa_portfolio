import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { InstallPromptModal } from './components/InstallPrompt';
import { OfflineBadge } from './components/OfflineBadge';
import { ArchitectureModal } from './components/ArchitectureModal';
import { AiAssistant } from './components/AiAssistant';
import { ThreeDimensionalCanvas } from './components/ThreeDimensionalCanvas';
import { MobileBottomNav } from './components/MobileBottomNav';
import { FloatingActionHub } from './components/FloatingActionHub';
import { HomePage } from './pages/HomePage';
import { ExperiencePage } from './pages/ExperiencePage';
import { ProjectsPage } from './pages/ProjectsPage';
import { SkillsDsaPage } from './pages/SkillsDsaPage';
import { AchievementsPage } from './pages/AchievementsPage';
import { ContactPage } from './pages/ContactPage';
import { Project } from './data/portfolioData';

export const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [isInstalled, setIsInstalled] = useState<boolean>(false);
  const [installModalOpen, setInstallModalOpen] = useState<boolean>(false);
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<Project | null>(null);
  const [aiAssistantOpen, setAiAssistantOpen] = useState<boolean>(false);

  // Register PWA Install listener & standalone detection
  useEffect(() => {
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

  // Update active section on scroll with optimized observer/listener
  useEffect(() => {
    const sections = ['home', 'experience', 'projects', 'skills', 'achievements', 'contact'];
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 220;
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
      const yOffset = -70;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-cyber-grid bg-[#0b0f19] text-slate-100 relative selection:bg-cyan-500 selection:text-white">
      
      {/* 3D Particle Mesh Background */}
      <ThreeDimensionalCanvas />

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
      <main className="relative z-10">
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

      {/* Floating Action Hub: Coordinated AI Assistant & Back to Top (Zero Overlap) */}
      <FloatingActionHub
        onOpenAssistant={() => setAiAssistantOpen(true)}
      />

      {/* Mobile App Bottom Navigation Dock */}
      <MobileBottomNav
        activeSection={activeSection}
        onNavigateTo={handleNavigateTo}
        onOpenAssistant={() => setAiAssistantOpen(true)}
      />

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
