import React from 'react';
import { CustomCursor } from './components/redesign/CustomCursor';
import { NoiseOverlay } from './components/redesign/NoiseOverlay';
import { IntroSequence } from './components/redesign/IntroSequence';
import { Navigation } from './components/redesign/Navigation';
import { HeroSection } from './components/redesign/HeroSection';
import { WorkSection } from './components/redesign/WorkSection';
import { AboutSection } from './components/redesign/AboutSection';
import { ServicesSection } from './components/redesign/ServicesSection';
import { SkillsSection } from './components/skills/SkillsSection';
import { ContactSection } from './components/redesign/ContactSection';
import { Footer } from './components/redesign/Footer';

export const App: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-[#1f2430] text-[#f3efe4] font-sans selection:bg-[#e0373a] selection:text-[#f3efe4] overflow-x-hidden">
      {/* 1. Subtle 1px Grain / Noise Overlay (4% opacity) */}
      <NoiseOverlay />

      {/* 2. Interactive Smooth Custom Cursor */}
      <CustomCursor />

      {/* 3. Opening Intro Sequence */}
      <IntroSequence onComplete={() => {}} />

      {/* 4. Fixed Top Navigation */}
      <Navigation />

      {/* 5. Main Content Assembly */}
      <main className="relative z-10">
        <HeroSection />
        <WorkSection />
        <AboutSection />
        <ServicesSection />
        <SkillsSection />
        <ContactSection />
      </main>

      {/* 6. Footer */}
      <Footer />
    </div>
  );
};

export default App;
