import React from 'react';
import { ArrowDown, Layers, ShieldCheck, Sliders } from 'lucide-react';

export const HeroSection: React.FC = () => {
  return (
    <section className="pt-16 pb-20 md:pt-24 md:pb-28 border-b border-stroke">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Availability & Discipline Tag */}
        <div className="flex items-center gap-2 mb-6">
          <span className="inline-block w-2 h-2 rounded-full bg-studio-rust"></span>
          <span className="text-xs font-mono uppercase tracking-wider text-ink-secondary">
            Senior Product & Interaction Designer • Available for 2025 Engagements
          </span>
        </div>

        {/* Hero Title & Subtitle */}
        <div className="max-w-4xl">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-semibold tracking-tight text-ink leading-[1.08] mb-8">
            Designing interfaces where human friction and error are not an option.
          </h1>
          <p className="text-lg sm:text-xl text-ink-secondary leading-relaxed max-w-3xl mb-12">
            I craft high-stakes software, medical dosage systems, offline field tools, and cross-platform design token architectures. My work focuses on ergonomics, cognitive load reduction, and precision handoffs between design and production code.
          </p>
        </div>

        {/* Architectural Pillars / Quick Specs Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 border-t border-stroke">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono text-studio-rust uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4" />
              <span>Critical Software Ergonomics</span>
            </div>
            <p className="text-sm text-ink-secondary leading-normal">
              Clinical ICUs, utility substations, and industrial cockpits where physical context (gloves, sunlight, fatigue) dictates UI constraints.
            </p>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono text-studio-petrol uppercase tracking-wider">
              <Layers className="w-4 h-4" />
              <span>Token Architectures</span>
            </div>
            <p className="text-sm text-ink-secondary leading-normal">
              Mathematical design token pipelines connecting Figma variables directly with React, TypeScript, and CSS custom properties.
            </p>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono text-studio-ochre uppercase tracking-wider">
              <Sliders className="w-4 h-4" />
              <span>Interaction Fidelity</span>
            </div>
            <p className="text-sm text-ink-secondary leading-normal">
              High-fidelity tactile prototypes, thumb-reach heatmaps, keyboard-chord routing, and 100% WCAG 2.2 AAA color verification.
            </p>
          </div>
        </div>

        {/* Scroll affordance */}
        <div className="mt-12 flex items-center gap-2 text-xs font-mono text-ink-tertiary">
          <ArrowDown className="w-4 h-4 animate-bounce" />
          <span>Explore Selected Case Studies</span>
        </div>

      </div>
    </section>
  );
};
