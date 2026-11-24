import React, { useEffect, useRef } from 'react';
import { content } from '../../data/redesignContent';
import gsap from 'gsap';
import { ArrowDown } from 'lucide-react';

export const HeroSection: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const line1Ref = useRef<HTMLDivElement>(null);
  const line2Ref = useRef<HTMLDivElement>(null);
  const line3Ref = useRef<HTMLDivElement>(null);
  const nameRowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.2 });

      tl.fromTo(
        [line1Ref.current, line2Ref.current, line3Ref.current, nameRowRef.current],
        { y: '100%', opacity: 0 },
        {
          y: '0%',
          opacity: 1,
          duration: 0.85,
          stagger: 0.12,
          ease: 'power3.out'
        }
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen pt-32 pb-20 flex flex-col justify-between max-w-site mx-auto px-6 sm:px-10 overflow-hidden"
    >
      <div className="my-auto space-y-6">
        
        {/* Availability Eyebrow */}
        <div className="overflow-hidden">
          <div className="flex items-center gap-2.5 text-xs font-mono uppercase tracking-[0.1em] text-cream-muted">
            <span className="w-2.5 h-2.5 rounded-full bg-accent-red animate-pulse" />
            <span>BufferBytes Tech • Haris&Co. Alum • Kozhikode</span>
          </div>
        </div>

        {/* 3-Line Headline Stack */}
        <div className="space-y-1 sm:space-y-2">
          
          {/* Line 1: Cream medium display */}
          <div className="mask-line">
            <div
              ref={line1Ref}
              className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-cream uppercase leading-none"
            >
              {content.tagline[0]}
            </div>
          </div>

          {/* Line 2: Red Very Large display */}
          <div className="mask-line">
            <div
              ref={line2Ref}
              className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl tracking-tight text-accent-red uppercase leading-none select-none"
            >
              {content.tagline[1]}
            </div>
          </div>

          {/* Line 3: Cream small display */}
          <div className="mask-line">
            <div
              ref={line3Ref}
              className="font-sans font-semibold text-base sm:text-xl md:text-2xl text-cream-muted tracking-wide uppercase pt-2"
            >
              {content.tagline[2]}
            </div>
          </div>

        </div>

        {/* Main "ANURAG" Display Statement */}
        <div className="mask-line pt-4 sm:pt-8">
          <div
            ref={nameRowRef}
            className="flex items-baseline gap-2 sm:gap-4 font-display select-none leading-none"
          >
            <span className="text-6xl sm:text-8xl md:text-9xl lg:text-[140px] text-cream tracking-tight uppercase">
              ANURAG
            </span>
            <span className="w-3.5 h-3.5 sm:w-5 sm:h-5 md:w-7 md:h-7 rounded-full bg-accent-red inline-block mb-1 sm:mb-3" />
          </div>
        </div>

      </div>

      {/* Bottom Scroll Indicator */}
      <div className="pt-8 flex items-center justify-between text-xs font-mono text-cream-muted border-t border-charcoal-border">
        <a href="#work" className="flex items-center gap-2 hover:text-accent-red transition-colors">
          <ArrowDown className="w-4 h-4 animate-bounce text-accent-red" />
          <span>SCROLL FOR SELECTED WORK</span>
        </a>

        <div className="hidden sm:flex items-center gap-6">
          <span>AFTER EFFECTS</span>
          <span>•</span>
          <span>PHOTOSHOP</span>
          <span>•</span>
          <span>PREMIERE PRO</span>
          <span>•</span>
          <span>FIGMA</span>
        </div>
      </div>
    </section>
  );
};
