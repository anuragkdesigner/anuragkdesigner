import React from 'react';
import { content } from '../../data/redesignContent';
import { ArrowUpRight } from 'lucide-react';

export const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="py-24 sm:py-32 bg-[#f4f3ef] border-t border-[#e2dfd7]">
      <div className="max-w-site mx-auto px-6 sm:px-10">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16">
          <div>
            <span className="text-xs font-mono uppercase tracking-[0.15em] text-[#0d0e12] font-bold block mb-2">
              Capabilities & Offerings
            </span>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-[#0d0e12] tracking-tight uppercase">
              WHAT I DO
            </h2>
          </div>
          <p className="text-sm font-mono text-[#525866] max-w-sm">
            Proven execution across agency speed and technology product visual standards.
          </p>
        </div>

        {/* 4 Services Rows with Dark Hover Transition */}
        <div className="divide-y divide-[#e2dfd7] border-y border-[#e2dfd7]">
          {content.services.map((service) => (
            <div
              key={service.number}
              className="group py-8 sm:py-10 px-4 sm:px-8 transition-colors duration-200 cursor-pointer hover:bg-[#0d0e12]"
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                
                {/* Number */}
                <div className="md:col-span-2">
                  <span className="font-mono text-xl sm:text-2xl font-bold text-[#0d0e12] group-hover:text-white transition-colors">
                    /{service.number}
                  </span>
                </div>

                {/* Service Name */}
                <div className="md:col-span-5">
                  <h3 className="font-display text-2xl sm:text-3xl text-[#0d0e12] group-hover:text-white transition-colors uppercase tracking-tight">
                    {service.name}
                  </h3>
                </div>

                {/* Description */}
                <div className="md:col-span-4">
                  <p className="text-xs sm:text-sm text-[#525866] group-hover:text-white/90 font-sans transition-colors leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Hover Arrow Icon */}
                <div className="md:col-span-1 flex justify-end">
                  <ArrowUpRight className="w-6 h-6 text-[#525866] group-hover:text-white transition-colors transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>

              </div>

              {/* Tags */}
              <div className="mt-4 flex flex-wrap gap-2 md:pl-28">
                {service.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-white border border-[#e2dfd7] text-[#525866] group-hover:bg-white/20 group-hover:text-white group-hover:border-white/30 transition-colors"
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
