import React, { useEffect, useRef } from 'react';
import { content } from '../../data/redesignContent';
import gsap from 'gsap';
import { Sparkles, ArrowUpRight } from 'lucide-react';

export const HeroSection: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const textColumnRef = useRef<HTMLDivElement>(null);
  const imageColumnRef = useRef<HTMLDivElement>(null);
  const line1Ref = useRef<HTMLDivElement>(null);
  const line2Ref = useRef<HTMLDivElement>(null);
  const line3Ref = useRef<HTMLDivElement>(null);
  const nameRowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.15 });

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
      )
      .fromTo(
        imageColumnRef.current,
        { opacity: 0, scale: 0.92, y: 30 },
        { opacity: 1, scale: 1, y: 0, duration: 0.9, ease: 'power2.out' },
        "-=0.6"
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen pt-28 sm:pt-36 pb-16 flex flex-col justify-between max-w-site mx-auto px-6 sm:px-10 overflow-hidden"
    >
      {/* Ambient Red Lighting Halo Behind Portrait */}
      <div 
        className="absolute top-1/4 right-0 lg:right-12 w-80 sm:w-96 h-80 sm:h-96 rounded-full bg-accent-red/15 blur-[100px] pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="my-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
        
        {/* LEFT COLUMN: Typography & Headlines (7 Cols) */}
        <div ref={textColumnRef} className="lg:col-span-7 space-y-6 z-10">
          
          {/* Eyebrow Status */}
          <div className="overflow-hidden">
            <div className="flex items-center gap-2.5 text-xs font-mono uppercase tracking-[0.1em] text-cream-muted">
              <span className="w-2.5 h-2.5 rounded-full bg-accent-red animate-pulse" />
              <span>BufferBytes Tech • Haris&Co. Alum • Kozhikode</span>
            </div>
          </div>

          {/* 3-Line Headline Stack */}
          <div className="space-y-1 sm:space-y-2">
            
            {/* Line 1: Cream Medium Display */}
            <div className="mask-line">
              <div
                ref={line1Ref}
                className="font-display text-3xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight text-cream uppercase leading-none"
              >
                {content.tagline[0]}
              </div>
            </div>

            {/* Line 2: Red Very Large Display */}
            <div className="mask-line">
              <div
                ref={line2Ref}
                className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl tracking-tight text-accent-red uppercase leading-none select-none"
              >
                {content.tagline[1]}
              </div>
            </div>

            {/* Line 3: Cream Small Display */}
            <div className="mask-line">
              <div
                ref={line3Ref}
                className="font-sans font-semibold text-sm sm:text-lg md:text-xl text-cream-muted tracking-wide uppercase pt-1"
              >
                {content.tagline[2]}
              </div>
            </div>

          </div>

          {/* Main "ANURAG" Display Statement */}
          <div className="mask-line pt-2 sm:pt-4">
            <div
              ref={nameRowRef}
              className="flex items-baseline gap-2 sm:gap-4 font-display select-none leading-none"
            >
              <span className="text-6xl sm:text-8xl md:text-9xl lg:text-[130px] text-cream tracking-tight uppercase">
                ANURAG
              </span>
              <span className="w-3 h-3 sm:w-4 sm:h-4 md:w-6 md:h-6 rounded-full bg-accent-red inline-block mb-1 sm:mb-2" />
            </div>
          </div>

          {/* Actions / Bio Callout */}
          <div className="pt-2 flex flex-wrap items-center gap-4">
            <a
              href="#work"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded bg-accent-red text-cream font-mono text-xs font-bold uppercase tracking-wider hover:bg-accent-red-hover transition-colors shadow-lg"
            >
              <span>Explore Selected Work</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            <a
              href="#about"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded bg-charcoal border border-charcoal-border hover:border-accent-red text-cream font-mono text-xs uppercase tracking-wider transition-colors"
            >
              <span>About & Credentials</span>
            </a>
          </div>

        </div>

        {/* RIGHT COLUMN: Cut-out Transparent Portrait Composite (5 Cols) */}
        <div
          ref={imageColumnRef}
          className="lg:col-span-5 relative flex items-center justify-center lg:justify-end"
        >
          <div className="relative w-full max-w-[340px] sm:max-w-[420px] lg:max-w-[460px]">
            
            {/* Background Editorial Graphic Frame */}
            <div className="absolute inset-x-4 top-8 bottom-0 rounded-2xl border border-charcoal-border bg-[#181c26]/60 backdrop-blur-xs -z-10" />

            {/* Red Accent Decorative Geometry (Photoshop aesthetic) */}
            <div className="absolute top-4 -left-4 w-12 h-12 border-t-2 border-l-2 border-accent-red pointer-events-none" />
            <div className="absolute bottom-12 -right-3 w-12 h-12 border-b-2 border-r-2 border-accent-red pointer-events-none" />

            {/* Cut-out Transparent Portrait Image */}
            <div className="relative overflow-hidden rounded-b-2xl">
              <img
                src="./anurag-portrait.png"
                alt="Anurag K — Graphic Designer & Video Editor"
                className="w-full h-auto object-cover relative z-10 drop-shadow-[0_20px_35px_rgba(0,0,0,0.6)]"
              />

              {/* Bottom Gradient Fade to seamlessly blend into charcoal page background */}
              <div 
                className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#1f2430] via-[#1f2430]/70 to-transparent z-20 pointer-events-none"
              />
            </div>

            {/* Floating Editorial Badge (Photoshop Composited Feel) */}
            <div className="absolute -bottom-2 -left-2 sm:left-4 z-30 bg-[#161922]/95 backdrop-blur-md p-3.5 sm:p-4 rounded-lg border border-charcoal-border shadow-2xl space-y-1">
              <div className="flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-wider text-accent-red font-bold">
                <Sparkles className="w-3 h-3" />
                <span>Visual & Motion Lead</span>
              </div>
              <div className="font-display text-sm sm:text-base text-cream uppercase tracking-tight">
                ANURAG K
              </div>
              <div className="text-[11px] font-mono text-cream-muted">
                BufferBytes Tech • Haris&Co.
              </div>
            </div>

            {/* Top-Right Badge: Open for Work */}
            <div className="absolute top-2 right-2 sm:right-6 z-30 bg-accent-red text-cream font-mono text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded shadow-md">
              Kozhikode, India
            </div>

          </div>
        </div>

      </div>

      {/* Bottom Tool Bar */}
      <div className="pt-8 flex items-center justify-between text-xs font-mono text-cream-muted border-t border-charcoal-border">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-accent-red" />
          <span className="uppercase tracking-widest text-[11px]">Core Production Stack</span>
        </div>

        <div className="flex items-center gap-3 sm:gap-6 flex-wrap">
          <span>AFTER EFFECTS</span>
          <span>•</span>
          <span>PHOTOSHOP</span>
          <span>•</span>
          <span>PREMIERE PRO</span>
          <span>•</span>
          <span>ILLUSTRATOR</span>
          <span>•</span>
          <span>FIGMA</span>
        </div>
      </div>
    </section>
  );
};
