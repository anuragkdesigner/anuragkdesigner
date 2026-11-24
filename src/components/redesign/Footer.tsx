import React from 'react';
import { content } from '../../data/redesignContent';
import { ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 bg-[#161922] border-t border-charcoal-border font-mono text-xs text-cream-muted">
      <div className="max-w-site mx-auto px-6 sm:px-10 flex flex-col sm:flex-row items-center justify-between gap-6">
        
        {/* Left: Identity */}
        <div className="flex items-center gap-3 text-center sm:text-left">
          <span className="font-display text-lg text-cream">ANURAG K</span>
          <span className="text-charcoal-border">•</span>
          <span className="tracking-wider uppercase">GRAPHIC DESIGNER & VIDEO EDITOR</span>
        </div>

        {/* Center: Location */}
        <div>
          <span>KOZHIKODE, KERALA, INDIA</span>
        </div>

        {/* Right: Back to top button */}
        <div className="flex items-center gap-6">
          <a
            href={content.contact.linkedin}
            target="_blank"
            rel="noreferrer"
            className="hover:text-accent-red transition-colors uppercase"
          >
            LinkedIn
          </a>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 hover:text-cream text-accent-red transition-colors uppercase font-bold"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
