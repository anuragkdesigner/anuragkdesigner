import React from 'react';
import { content } from '../../data/redesignContent';
import { ArrowUpRight } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 sm:py-32 bg-[#1f2430] border-t border-charcoal-border">
      <div className="max-w-site mx-auto px-6 sm:px-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Large Display Headline */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs font-mono uppercase tracking-[0.15em] text-accent-red font-bold block">
              About Anurag
            </span>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-cream tracking-tight leading-[1.05] uppercase">
              {content.about.headline}
            </h2>
            <div className="pt-4">
              <a
                href={content.contact.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-cream hover:text-accent-red transition-colors underline underline-offset-4"
              >
                <span>View LinkedIn Profile</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Right Column: 3 Short Paragraphs of Body Text */}
          <div className="lg:col-span-7 space-y-6 text-cream-muted text-base sm:text-lg leading-relaxed font-sans">
            {content.about.paragraphs.map((para, idx) => (
              <p key={idx} className="border-l-2 border-charcoal-border pl-5 hover:border-accent-red transition-colors">
                {para}
              </p>
            ))}

            {/* Quick Experience Pills */}
            <div className="pt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 font-mono text-xs text-cream">
              <div className="p-4 rounded bg-[#181c26] border border-charcoal-border">
                <span className="block text-accent-red font-bold mb-1">CURRENT</span>
                <span className="font-semibold block">BufferBytes Tech</span>
                <span className="text-cream-muted text-[11px]">Graphic Designer (On-site)</span>
              </div>
              <div className="p-4 rounded bg-[#181c26] border border-charcoal-border">
                <span className="block text-accent-red font-bold mb-1">PREVIOUS</span>
                <span className="font-semibold block">Haris&Co.</span>
                <span className="text-cream-muted text-[11px]">Graphic Designer (8 mos)</span>
              </div>
              <div className="p-4 rounded bg-[#181c26] border border-charcoal-border">
                <span className="block text-accent-red font-bold mb-1">EDUCATION</span>
                <span className="font-semibold block">Calicut University</span>
                <span className="text-cream-muted text-[11px]">Computer Science</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
