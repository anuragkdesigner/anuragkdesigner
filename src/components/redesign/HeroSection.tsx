import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Sparkles, ArrowUpRight } from 'lucide-react';

export const HeroSection: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const textColumnRef = useRef<HTMLDivElement>(null);
  const imageColumnRef = useRef<HTMLDivElement>(null);
  const line1Ref = useRef<HTMLDivElement>(null);
  const line2Ref = useRef<HTMLDivElement>(null);
  const nameRowRef = useRef<HTMLDivElement>(null);
  const wordsRef = useRef<(HTMLSpanElement | null)[]>([]);

  const line1Words = ['GRAPHIC', 'DESIGNER', '&'];
  const line2Words = ['VIDEO', 'EDITOR'];

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.15 });

      tl.fromTo(
        [line1Ref.current, line2Ref.current, nameRowRef.current],
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

      // Constant floating animation for each word
      wordsRef.current.forEach((wordEl, index) => {
        if (!wordEl) return;
        gsap.to(wordEl, {
          y: -7,
          duration: 1.8 + (index % 3) * 0.35,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
          delay: 0.85 + index * 0.12
        });
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen pt-28 sm:pt-36 pb-16 flex flex-col justify-between max-w-site mx-auto px-6 sm:px-10 overflow-hidden"
    >
      {/* Ambient Lighting Halo Behind Portrait */}
      <div 
        className="absolute top-1/4 right-0 lg:right-12 w-80 sm:w-96 h-80 sm:h-96 rounded-full bg-[#0d0e12]/[0.03] blur-[100px] pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="my-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
        
        {/* LEFT COLUMN: Typography & Headlines (7 Cols) */}
        <div ref={textColumnRef} className="lg:col-span-7 space-y-6 z-10">
          
          {/* 2-Line Headline Stack */}
          <div className="space-y-1 sm:space-y-2">
            
            {/* Line 1: GRAPHIC DESIGNER & */}
            <div className="mask-line py-1 overflow-visible">
              <div
                ref={line1Ref}
                className="font-display font-extrabold text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl tracking-tight text-[#dc2626] uppercase leading-none select-none whitespace-nowrap flex items-center gap-[0.25em]"
              >
                {line1Words.map((word, i) => (
                  <span
                    key={i}
                    ref={(el) => (wordsRef.current[i] = el)}
                    className="inline-block will-change-transform"
                  >
                    {word}
                  </span>
                ))}
              </div>
            </div>

            {/* Line 2: VIDEO EDITOR - Exact same font size as Line 1 */}
            <div className="mask-line py-1 overflow-visible">
              <div
                ref={line2Ref}
                className="font-display font-extrabold text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl tracking-tight text-[#dc2626] uppercase leading-none select-none whitespace-nowrap flex items-center gap-[0.25em]"
              >
                {line2Words.map((word, i) => (
                  <span
                    key={i}
                    ref={(el) => (wordsRef.current[line1Words.length + i] = el)}
                    className="inline-block will-change-transform"
                  >
                    {word}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* Main "ANURAG" Display Statement */}
          <div className="mask-line pt-2">
            <div
              ref={nameRowRef}
              className="flex items-baseline gap-2 font-display font-extrabold select-none leading-none"
            >
              <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#0d0e12] tracking-tight uppercase">
                ANURAG
              </span>
              <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#0d0e12] inline-block mb-1" />
            </div>
          </div>

          {/* Actions / Bio Callout */}
          <div className="pt-2 flex flex-wrap items-center gap-4">
            <a
              href="#work"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded bg-[#0d0e12] text-white font-mono text-xs font-bold uppercase tracking-wider hover:bg-[#242833] transition-colors shadow-md"
            >
              <span>Explore Selected Work</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            <a
              href="#about"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded bg-white border border-[#e2dfd7] hover:border-[#0d0e12] text-[#0d0e12] font-mono text-xs uppercase tracking-wider transition-colors shadow-xs"
            >
              <span>About & Credentials</span>
            </a>
          </div>

        </div>

        {/* RIGHT COLUMN: Cut-out Transparent Portrait Composite (Photoshop style) */}
        <div
          ref={imageColumnRef}
          className="lg:col-span-5 relative flex items-center justify-center lg:justify-end"
        >
          <div className="relative w-full max-w-[280px] sm:max-w-[340px] lg:max-w-[380px]">
            
            {/* Ambient Radial Backlight behind silhouette */}
            <div 
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 sm:w-80 h-64 sm:h-80 rounded-full bg-[#0d0e12]/[0.04] blur-3xl pointer-events-none -z-10"
              aria-hidden="true"
            />

            {/* Graphic Registration Crosshairs (Photoshop composition markers) */}
            <span className="absolute -top-3 -left-3 text-[#0d0e12] font-mono text-xs select-none pointer-events-none">+</span>
            <span className="absolute -top-3 -right-3 text-[#0d0e12] font-mono text-xs select-none pointer-events-none">+</span>
            <span className="absolute -bottom-3 -right-3 text-[#0d0e12] font-mono text-xs select-none pointer-events-none">+</span>

            {/* Cut-out Transparent Portrait Image */}
            <div className="relative z-10">
              <img
                src="/anurag-portrait.png?v=2"
                alt="Anurag K — Graphic Designer & Video Editor"
                className="w-full h-auto object-cover relative z-10 drop-shadow-[0_20px_35px_rgba(0,0,0,0.16)]"
              />

              {/* Bottom Gradient Fade to seamlessly melt into light page background */}
              <div 
                className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#f9f9f8] via-[#f9f9f8]/85 to-transparent z-20 pointer-events-none"
              />
            </div>

            {/* Floating Editorial Badge (Photoshop Composited HUD) */}
            <div className="absolute bottom-2 -left-2 sm:left-2 z-30 bg-white/95 backdrop-blur-md p-3 sm:p-3.5 rounded-lg border border-[#e2dfd7] shadow-xl space-y-1 max-w-[260px]">
              <div className="flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-wider text-[#0d0e12] font-bold">
                <Sparkles className="w-3 h-3 shrink-0" />
                <span className="truncate">Visual & Motion Lead</span>
              </div>
              <div className="font-display text-sm sm:text-base text-[#0d0e12] uppercase tracking-tight">
                ANURAG K
              </div>
              <div className="text-[11px] font-mono text-[#525866] truncate">
                BufferBytes Tech • Haris&Co.
              </div>
            </div>

            {/* Top-Right Badge: Open for Work / Location */}
            <div className="absolute top-2 right-2 sm:right-4 z-30 bg-[#0d0e12] text-white font-mono text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded shadow-md whitespace-nowrap">
              Kozhikode, India
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
