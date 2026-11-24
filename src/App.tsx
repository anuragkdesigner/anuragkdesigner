import React from 'react';
import { Navbar } from './components/common/Navbar';
import { FloatingVectorsBackground } from './components/common/FloatingVectorsBackground';
import { HeroSection } from './components/hero/HeroSection';
import { AboutSection } from './components/about/AboutSection';
import { ProjectsGrid } from './components/projects/ProjectsGrid';
import { SkillsSection } from './components/skills/SkillsSection';
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
    <div className="relative min-h-screen bg-canvas text-ink flex flex-col font-sans selection:bg-stroke selection:text-ink">
      {/* Ambient Floating Vector Graphic Backdrop */}
      <FloatingVectorsBackground />

      {/* Sticky Header */}
      <Navbar onContactClick={scrollToContact} />

      {/* Main Content Layout */}
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <ProjectsGrid projects={PROJECTS} />
        <SkillsSection />
        <ExperienceSection />
        <ContactSection />
      </main>

      {/* Colophon & Footer */}
      <Footer />
    </div>
  );
};

export default App;
