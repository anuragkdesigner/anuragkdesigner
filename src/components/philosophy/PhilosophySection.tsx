import React from 'react';
import { PRINCIPLES, TOOLKIT } from '../../data/principles';
import { Ban } from 'lucide-react';

export const PhilosophySection: React.FC = () => {
  return (
    <section id="philosophy" className="py-20 border-b border-stroke bg-canvas">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-mono uppercase tracking-wider text-studio-petrol block mb-2">
            Design Philosophy & Standards
          </span>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-ink mb-4">
            Four Operating Laws for High-Stakes UI
          </h2>
          <p className="text-base text-ink-secondary leading-relaxed">
            I avoid generic visual decoration. Every constraint, layout boundary, and typographic choice is anchored in how human attention behaves under stress.
          </p>
        </div>

        {/* 4 Operating Principles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {PRINCIPLES.map((principle) => (
            <div 
              key={principle.number}
              className="bg-canvas-card border border-stroke rounded-xl p-6 sm:p-8 flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-stroke pb-3">
                  <span className="font-mono text-xs text-studio-rust font-bold">
                    LAW {principle.number}
                  </span>
                  <span className="text-xs font-mono text-ink-tertiary">
                    System Law
                  </span>
                </div>

                <h3 className="text-xl font-semibold tracking-tight text-ink">
                  {principle.title}
                </h3>

                <p className="text-sm text-ink-secondary leading-relaxed">
                  {principle.thesis}
                </p>
              </div>

              {/* Anti-pattern callout */}
              <div className="p-4 bg-canvas-subtle rounded border border-stroke/80 space-y-1">
                <div className="flex items-center gap-1.5 text-xs font-mono text-studio-rust">
                  <Ban className="w-3.5 h-3.5" />
                  <span className="font-semibold uppercase tracking-wider">Flawed Default We Reject:</span>
                </div>
                <p className="text-xs text-ink-tertiary">
                  {principle.antiPattern}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Specialized Toolkit Breakdown */}
        <div className="p-8 bg-canvas-subtle rounded-xl border border-stroke">
          <div className="max-w-2xl mb-8">
            <h3 className="text-xl font-semibold text-ink mb-2">
              Tooling & Research Methodologies
            </h3>
            <p className="text-sm text-ink-secondary">
              Tools are selected for mathematical verification, ergonomic physical rigs, and code alignment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-3">
              <span className="text-xs font-mono uppercase tracking-wider text-ink font-semibold block border-b border-stroke pb-1">
                Interaction Prototyping
              </span>
              <ul className="space-y-2 text-xs text-ink-secondary">
                {TOOLKIT.interaction.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-studio-rust" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-3">
              <span className="text-xs font-mono uppercase tracking-wider text-ink font-semibold block border-b border-stroke pb-1">
                Systems & Code
              </span>
              <ul className="space-y-2 text-xs text-ink-secondary">
                {TOOLKIT.systems.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-studio-petrol" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-3">
              <span className="text-xs font-mono uppercase tracking-wider text-ink font-semibold block border-b border-stroke pb-1">
                Ergonomics & Research
              </span>
              <ul className="space-y-2 text-xs text-ink-secondary">
                {TOOLKIT.research.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-studio-ochre" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
