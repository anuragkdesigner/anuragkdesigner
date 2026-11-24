import React from 'react';
import { Navbar } from './components/common/Navbar';
import { HeroSection } from './components/hero/HeroSection';
import { ProjectsGrid } from './components/projects/ProjectsGrid';
import { DesignTokenSandbox } from './components/interactive/DesignTokenSandbox';
import { PhilosophySection } from './components/philosophy/PhilosophySection';
import { ExperienceSection } from './components/experience/ExperienceSection';
import { ContactSection } from './components/contact/ContactSection';
import { Footer } from './components/common/Footer';
import { PROJECTS } from './data/projects';

export const App: React.FC = () => {
  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-canvas text-ink flex flex-col font-sans selection:bg-stroke selection:text-ink">
      {/* Sticky Header */}
      <Navbar onContactClick={scrollToContact} />

      {/* Main Content Layout */}
      <main className="flex-1">
        <HeroSection />
        <ProjectsGrid projects={PROJECTS} />
        <DesignTokenSandbox />
        <PhilosophySection />
        <ExperienceSection />
        <ContactSection />
      </main>

      {/* Colophon & Footer */}
      <Footer />
    </div>
  );
};

export default App;
