import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-stroke bg-canvas-subtle py-12 px-4 sm:px-6 lg:px-8 mt-24">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6 text-xs text-ink-tertiary font-mono">
        <div>
          <p className="text-ink font-medium text-sm mb-1">Anurag — UI & UX Designer</p>
          <p>Handcrafted with React, TypeScript & Ergonomic Design Tokens.</p>
        </div>

        <div className="flex flex-wrap items-center gap-6">
          <a 
            href="#projects" 
            className="hover:text-ink transition-colors underline-offset-4 hover:underline"
          >
            Back to Top
          </a>
          <span className="text-stroke">•</span>
          <span>WCAG 2.2 AAA Verified</span>
          <span className="text-stroke">•</span>
          <span>Zero AI Slop Guarantee</span>
        </div>
      </div>
    </footer>
  );
};
