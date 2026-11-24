import React, { useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onContactClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onContactClick }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Work', href: '#projects' },
    { label: 'Systems Sandbox', href: '#sandbox' },
    { label: 'Philosophy', href: '#philosophy' },
    { label: 'Experience', href: '#experience' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-canvas/90 backdrop-blur-md border-b border-stroke transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Identity & Status */}
        <div className="flex items-center gap-4">
          <a href="#" className="group flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-studio-rust ring-4 ring-studio-rust/20 animate-pulse" />
            <span className="font-semibold tracking-tight text-ink text-base">
              Anurag
            </span>
            <span className="hidden sm:inline text-xs font-mono text-ink-tertiary border-l border-stroke pl-2.5">
              UI/UX & Systems
            </span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-ink-secondary hover:text-ink font-medium transition-colors"
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={onContactClick}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded text-xs font-mono uppercase tracking-wider bg-ink text-canvas hover:bg-ink-secondary transition-colors"
          >
            <span>Get in touch</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </nav>

        {/* Mobile menu button */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={onContactClick}
            className="px-2.5 py-1 rounded text-xs font-mono bg-ink text-canvas"
          >
            Contact
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-ink-secondary hover:text-ink focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-stroke bg-canvas px-4 pt-2 pb-6 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-sm text-ink-secondary hover:text-ink font-medium"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};
