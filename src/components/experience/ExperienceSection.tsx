import React from 'react';
import { EXPERIENCES } from '../../data/experience';
import { MapPin } from 'lucide-react';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-20 border-b border-stroke">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-mono uppercase tracking-wider text-studio-rust block mb-2">
            Track Record
          </span>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-ink mb-4">
            8+ Years in High-Stakes Software
          </h2>
          <p className="text-base text-ink-secondary leading-relaxed">
            Collaborating alongside biomedical engineers, lineworkers, and systems architects to ship verified interfaces.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-12">
          {EXPERIENCES.map((exp, index) => (
            <div 
              key={index} 
              className="grid grid-cols-1 md:grid-cols-12 gap-6 pb-12 border-b border-stroke last:border-b-0 last:pb-0"
            >
              {/* Period & Location */}
              <div className="md:col-span-4 space-y-1.5">
                <div className="text-xs font-mono font-semibold text-ink">
                  {exp.period}
                </div>
                <div className="flex items-center gap-1.5 text-xs text-ink-tertiary">
                  <MapPin className="w-3.5 h-3.5 flex-shrink-0" />
                  <span>{exp.location}</span>
                </div>
              </div>

              {/* Role, Company, Achievements */}
              <div className="md:col-span-8 space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-ink tracking-tight">
                    {exp.role}
                  </h3>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-sm font-medium text-studio-rust">
                      {exp.company}
                    </span>
                    <span className="text-xs text-ink-tertiary">•</span>
                    <span className="text-xs text-ink-secondary">
                      {exp.focus}
                    </span>
                  </div>
                </div>

                <ul className="space-y-2 text-xs sm:text-sm text-ink-secondary leading-relaxed">
                  {exp.achievements.map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-stroke-strong mt-2 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
