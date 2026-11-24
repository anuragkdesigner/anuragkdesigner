import React from 'react';
import { content } from '../../data/redesignContent';
import { ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 bg-[#0d0e12] border-t border-[#1c1f26] font-mono text-xs text-[#8e96a8]">
      <div className="max-w-site mx-auto px-6 sm:px-10 flex flex-col sm:flex-row items-center justify-between gap-6">
        
        {/* Left: Identity */}
        <div className="flex items-center gap-3 text-center sm:text-left">
          <span className="font-display text-lg text-white">ANURAG K</span>
          <span className="text-[#353c50]">•</span>
          <span className="tracking-wider uppercase text-white/80">GRAPHIC DESIGNER & VIDEO EDITOR</span>
        </div>

        {/* Center: Location */}
        <div>
          <span className="text-white/60">KOZHIKODE, KERALA, INDIA</span>
        </div>

        {/* Right: Social & Back to top button */}
        <div className="flex items-center gap-4 sm:gap-6 flex-wrap justify-center sm:justify-end">
          <a
            href={content.contact.behance}
            target="_blank"
            rel="noreferrer"
            className="hover:text-white/70 transition-colors uppercase text-white font-bold"
          >
            Behance
          </a>
          <a
            href={content.contact.instagram}
            target="_blank"
            rel="noreferrer"
            className="hover:text-white/70 transition-colors uppercase text-white/80"
          >
            Instagram
          </a>
          <a
            href={content.contact.linkedin}
            target="_blank"
            rel="noreferrer"
            className="hover:text-white/70 transition-colors uppercase text-white/80"
          >
            LinkedIn
          </a>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 hover:text-white/70 text-white transition-colors uppercase font-bold"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
