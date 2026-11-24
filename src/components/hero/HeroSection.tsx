import React from 'react';
import { ArrowDown, Layers, Sparkles, Film } from 'lucide-react';

export const HeroSection: React.FC = () => {
  return (
    <section className="pt-16 pb-20 md:pt-24 md:pb-28 border-b border-stroke">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Availability & Discipline Tag */}
        <div className="flex flex-wrap items-center gap-2 mb-6">
          <span className="inline-block w-2 h-2 rounded-full bg-studio-rust"></span>
          <span className="text-xs font-mono uppercase tracking-wider text-ink-secondary">
            Graphic Designer @ BufferBytes Technologies • Calicut University CS Alum
          </span>
        </div>

        {/* Hero Title & Subtitle */}
        <div className="max-w-4xl">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-semibold tracking-tight text-ink leading-[1.08] mb-8">
            Bridging graphic craft, kinetic motion, and Computer Science logic.
          </h1>
          <p className="text-lg sm:text-xl text-ink-secondary leading-relaxed max-w-3xl mb-12">
            I am Anurag K, a Graphic & UI/UX Designer based in Kerala, India. With a degree in Computer Science from Calicut University, I create brand identity systems, high-retention motion graphics in After Effects, and structured digital product interfaces at BufferBytes Technologies.
          </p>
        </div>

        {/* Core Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 border-t border-stroke">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono text-studio-rust uppercase tracking-wider">
              <Sparkles className="w-4 h-4" />
              <span>Brand & Visual Systems</span>
            </div>
            <p className="text-sm text-ink-secondary leading-normal">
              High-impact visual identity, marketing collateral, and scalable typography systems crafted in Adobe Photoshop, Illustrator, and Figma.
            </p>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono text-studio-petrol uppercase tracking-wider">
              <Film className="w-4 h-4" />
              <span>Motion & Kinetic Design</span>
            </div>
            <p className="text-sm text-ink-secondary leading-normal">
              Dynamic keyframe choreography, kinetic typography, and campaign animations built in After Effects to command instant attention.
            </p>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono text-studio-ochre uppercase tracking-wider">
              <Layers className="w-4 h-4" />
              <span>CS-Grounded UI/UX</span>
            </div>
            <p className="text-sm text-ink-secondary leading-normal">
              A computer science foundation enables seamless collaboration with developers, token-based design structures, and WCAG accessibility.
            </p>
          </div>
        </div>

        {/* Scroll affordance */}
        <div className="mt-12 flex items-center gap-2 text-xs font-mono text-ink-tertiary">
          <ArrowDown className="w-4 h-4 animate-bounce" />
          <span>Explore Featured Work & Experience</span>
        </div>

      </div>
    </section>
  );
};
