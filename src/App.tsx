import React from 'react';
import { CustomCursor } from './components/redesign/CustomCursor';
import { Crosshair } from './components/redesign/Crosshair';
import { IntroSequence } from './components/redesign/IntroSequence';
import { Navigation } from './components/redesign/Navigation';
import { HeroSection } from './components/redesign/HeroSection';
import { WorkSection } from './components/redesign/WorkSection';
import { AboutSection } from './components/redesign/AboutSection';
import { ServicesSection } from './components/redesign/ServicesSection';
import { SkillsSection } from './components/skills/SkillsSection';
import { ContactSection } from './components/redesign/ContactSection';
import { Footer } from './components/redesign/Footer';
import { ThemeProvider, useTheme } from './context/ThemeContext';

const MainLayout: React.FC = () => {
  const { theme } = useTheme();

  return (
    <div className="relative min-h-screen bg-white dark:bg-[#7F011F] text-[#7F011F] dark:text-white font-sans selection:bg-[#7F011F] selection:text-white dark:selection:bg-white dark:selection:text-[#7F011F] overflow-x-hidden transition-colors duration-300">
      {/* 2. Interactive Smooth Custom Cursor */}
      <CustomCursor />

      {/* 2b. Interactive Button 4-Corner Crosshair Lock */}
      <Crosshair
        color={theme === 'dark' ? '#ffffff' : '#7F011F'}
        targetEffect="lock"
        thickness={1.5}
        opacity={0.85}
        smoothing={0.35}
        showCoordinates={false}
        clickPulse={true}
        hideCursor={false}
        targetSelector="a, button, [role='button'], [data-crosshair-target]"
      />

      {/* 3. Opening Intro Sequence */}
      <IntroSequence onComplete={() => { }} />

      {/* 4. Fixed Top Navigation with Theme Toggle */}
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

export const App: React.FC = () => {
  return (
    <ThemeProvider>
      <MainLayout />
    </ThemeProvider>
  );
};

export default App;
