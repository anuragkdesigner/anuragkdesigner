import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Sun, Moon } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

export const Navigation: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

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
          ? 'bg-white/90 dark:bg-[#7F011F]/90 backdrop-blur-md border-b border-[#7F011F]/15 dark:border-white/15 py-4 shadow-sm'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-site mx-auto px-6 sm:px-10 flex items-center justify-between">
        
        {/* Left: Theme Switcher */}
        <div className="flex items-center">
          <button
            onClick={toggleTheme}
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#7F011F]/20 dark:border-white/30 bg-white/80 dark:bg-[#7F011F]/80 backdrop-blur-sm text-[#7F011F] dark:text-white font-mono text-[11px] font-bold tracking-widest uppercase hover:border-[#7F011F] dark:hover:border-white transition-all shadow-xs cursor-pointer select-none"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? (
              <>
                <Sun className="w-3.5 h-3.5 text-white" />
                <span>LIGHT</span>
              </>
            ) : (
              <>
                <Moon className="w-3.5 h-3.5 text-[#7F011F]" />
                <span>WINE RED</span>
              </>
            )}
          </button>
        </div>

        {/* Right: Desktop Links */}
        <nav className="hidden md:flex items-center gap-9">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-xs font-mono font-medium tracking-[0.08em] uppercase text-[#7F011F] dark:text-white hover:opacity-75 nav-link-hover transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded bg-[#7F011F] text-white dark:bg-white dark:text-[#7F011F] font-mono text-xs font-bold uppercase tracking-wider hover:bg-[#630018] dark:hover:bg-white/80 transition-colors shadow-sm"
          >
            <span>Let's Talk</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </nav>

        {/* Mobile Hamburger Toggle & Theme Switcher */}
        <div className="flex md:hidden items-center gap-3">
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="p-2 text-[#7F011F] dark:text-white"
            aria-label="Open mobile menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

      </div>

      {/* Full-Screen Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-white dark:bg-[#7F011F] flex flex-col justify-between p-8 sm:p-12 animate-in fade-in duration-200">
          <div className="flex items-center justify-between">
            <button
              onClick={toggleTheme}
              className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#7F011F]/20 dark:border-white/30 text-[#7F011F] dark:text-white font-mono text-[11px] font-bold tracking-widest uppercase"
            >
              {theme === 'dark' ? <Sun className="w-3.5 h-3.5 text-white" /> : <Moon className="w-3.5 h-3.5 text-[#7F011F]" />}
              <span>{theme === 'dark' ? 'LIGHT' : 'WINE RED'}</span>
            </button>

            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 text-[#7F011F] dark:text-white"
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
                className="font-display font-bold text-3xl sm:text-5xl text-[#7F011F] dark:text-white hover:opacity-75 transition-colors tracking-tight uppercase"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-6 border-t border-[#7F011F]/20 dark:border-white/20 flex items-center justify-between text-xs font-mono text-[#7F011F]/70 dark:text-white/70">
            <span>KOZHIKODE, KERALA</span>
            <a 
              href="mailto:anuragkthusharam123@gmail.com"
              className="text-[#7F011F] dark:text-white font-bold underline underline-offset-4"
            >
              Get In Touch
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
