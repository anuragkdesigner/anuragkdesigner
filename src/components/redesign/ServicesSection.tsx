import React from 'react';
import { content } from '../../data/redesignContent';
import { ArrowUpRight } from 'lucide-react';

export const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="py-24 sm:py-32 bg-[#181c26] border-t border-charcoal-border">
      <div className="max-w-site mx-auto px-6 sm:px-10">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16">
          <div>
            <span className="text-xs font-mono uppercase tracking-[0.15em] text-accent-red font-bold block mb-2">
              Capabilities & Offerings
            </span>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-cream tracking-tight uppercase">
              WHAT I DO
            </h2>
          </div>
          <p className="text-sm font-mono text-cream-muted max-w-sm">
            Proven execution across agency speed and technology product visual standards.
          </p>
        </div>

        {/* 4 Services Rows with Red Hover Transition */}
        <div className="divide-y divide-charcoal-border border-y border-charcoal-border">
          {content.services.map((service) => (
            <div
              key={service.number}
              className="group py-8 sm:py-10 px-4 sm:px-8 transition-colors duration-200 cursor-pointer hover:bg-accent-red"
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                
                {/* Number */}
                <div className="md:col-span-2">
                  <span className="font-mono text-xl sm:text-2xl font-bold text-accent-red group-hover:text-charcoal transition-colors">
                    /{service.number}
                  </span>
                </div>

                {/* Service Name */}
                <div className="md:col-span-5">
                  <h3 className="font-display text-2xl sm:text-3xl text-cream group-hover:text-charcoal transition-colors uppercase tracking-tight">
                    {service.name}
                  </h3>
                </div>

                {/* Description */}
                <div className="md:col-span-4">
                  <p className="text-xs sm:text-sm text-cream-muted group-hover:text-charcoal-dark font-sans transition-colors leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Hover Arrow Icon */}
                <div className="md:col-span-1 flex justify-end">
                  <ArrowUpRight className="w-6 h-6 text-cream-muted group-hover:text-charcoal transition-colors transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>

              </div>

              {/* Tags */}
              <div className="mt-4 flex flex-wrap gap-2 md:pl-28">
                {service.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-charcoal border border-charcoal-border text-cream-muted group-hover:bg-charcoal group-hover:text-cream group-hover:border-charcoal transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
