import React from 'react';
import { EXPERIENCES, EDUCATION } from '../../data/experience';
import { MapPin, ArrowUpRight, GraduationCap, Building2 } from 'lucide-react';
import { Badge } from '../common/Badge';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-20 border-b border-stroke">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-mono uppercase tracking-wider text-studio-rust block mb-2">
            Career & Academic Foundation
          </span>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-ink mb-4">
            Professional Experience & Education
          </h2>
          <p className="text-base text-ink-secondary leading-relaxed">
            Hands-on visual, motion, and graphic design experience across fast-paced technology teams and creative agencies, backed by a technical Computer Science degree.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-12 mb-20">
          {EXPERIENCES.map((exp, index) => (
            <div 
              key={index} 
              className="grid grid-cols-1 md:grid-cols-12 gap-6 pb-12 border-b border-stroke last:border-b-0 last:pb-0"
            >
              {/* Period, Location & Type */}
              <div className="md:col-span-4 space-y-2">
                <div className="text-xs font-mono font-semibold text-ink">
                  {exp.period}
                </div>
                <div className="flex items-center gap-1.5 text-xs text-ink-tertiary">
                  <MapPin className="w-3.5 h-3.5 flex-shrink-0" />
                  <span>{exp.location}</span>
                </div>
                <div className="pt-1">
                  <Badge variant={exp.type === 'Full-time' ? 'accent' : 'default'}>
                    {exp.type}
                  </Badge>
                </div>
              </div>

              {/* Role, Company, Achievements & Tools */}
              <div className="md:col-span-8 space-y-4">
                <div>
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="text-xl font-semibold text-ink tracking-tight">
                      {exp.role}
                    </h3>
                    {exp.companyUrl && (
                      <a
                        href={exp.companyUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-mono text-ink-secondary hover:text-ink transition-colors"
                      >
                        <Building2 className="w-3.5 h-3.5" />
                        <span>Company Profile</span>
                        <ArrowUpRight className="w-3 h-3" />
                      </a>
                    )}
                  </div>

                  <div className="flex flex-wrap items-center gap-2 mt-1">
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

                {/* Tool Pills */}
                <div className="pt-2 flex flex-wrap gap-1.5">
                  {exp.tools.map((tool, ti) => (
                    <Badge key={ti} variant="subtle">{tool}</Badge>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Education Section */}
        <div className="p-8 bg-canvas-card rounded-xl border border-stroke shadow-sm">
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-studio-petrol">
                <GraduationCap className="w-4 h-4" />
                <span>Academic Education</span>
              </div>
              <h3 className="text-2xl font-semibold text-ink tracking-tight">
                {EDUCATION.institution}
              </h3>
              <p className="text-sm font-medium text-studio-rust">
                {EDUCATION.degree} in {EDUCATION.field}
              </p>
              <div className="flex items-center gap-1.5 text-xs text-ink-tertiary">
                <MapPin className="w-3.5 h-3.5" />
                <span>{EDUCATION.location}</span>
              </div>
            </div>

            <div className="max-w-md space-y-3">
              <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed">
                {EDUCATION.details}
              </p>
              <a
                href="https://www.linkedin.com/school/15105611/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-mono text-ink hover:text-studio-rust transition-colors"
              >
                <span>University Profile</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
