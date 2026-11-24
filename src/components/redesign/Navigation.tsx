import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export const Navigation: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'WORK', href: '#work' },
    { label: 'ABOUT', href: '#about' },
    { label: 'SERVICES', href: '#services' },
    { label: 'CONTACT', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#1f2430]/95 backdrop-blur-md border-b border-charcoal-border py-4 shadow-md'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-site mx-auto px-6 sm:px-10 flex items-center justify-between">
        
        {/* Left: Script Logo */}
        <a href="#" className="group flex items-center gap-2">
          <span className="font-script text-3xl sm:text-4xl text-cream italic hover:text-accent-red transition-colors">
            Anurag
          </span>
          <span className="w-2 h-2 rounded-full bg-accent-red" />
        </a>

        {/* Right: Desktop Links */}
        <nav className="hidden md:flex items-center gap-9">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-xs font-mono font-medium tracking-[0.08em] uppercase text-cream hover:text-cream nav-link-hover"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded bg-accent-red text-cream font-mono text-xs font-bold uppercase tracking-wider hover:bg-accent-red-hover transition-colors shadow-sm"
          >
            <span>Let's Talk</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </nav>

        {/* Mobile Hamburger Toggle */}
        <div className="flex md:hidden items-center gap-3">
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="p-2 text-cream hover:text-accent-red"
            aria-label="Open mobile menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

      </div>

      {/* Full-Screen Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-[#161922] flex flex-col justify-between p-8 sm:p-12 animate-in fade-in duration-200">
          <div className="flex items-center justify-between">
            <span className="font-script text-4xl text-cream italic">Anurag</span>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 text-cream hover:text-accent-red"
              aria-label="Close menu"
            >
              <X className="w-7 h-7" />
            </button>
          </div>

          <div className="flex flex-col gap-8 my-auto">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="font-display text-4xl sm:text-6xl text-cream hover:text-accent-red transition-colors tracking-tight"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-6 border-t border-charcoal-border flex items-center justify-between text-xs font-mono text-cream-muted">
            <span>KOZHIKODE, KERALA</span>
            <a 
              href="mailto:anurag.designsystems@gmail.com"
              className="text-accent-red underline underline-offset-4"
            >
              Email Direct
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
