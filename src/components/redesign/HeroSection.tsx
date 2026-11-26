import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Sparkles, ArrowUpRight } from 'lucide-react';
import TechText from './TechText';

export const HeroSection: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const textColumnRef = useRef<HTMLDivElement>(null);
  const imageColumnRef = useRef<HTMLDivElement>(null);
  const line1Ref = useRef<HTMLDivElement>(null);
  const line2Ref = useRef<HTMLDivElement>(null);
  const nameRowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.15 });

      tl.fromTo(
        [line1Ref.current, line2Ref.current, nameRowRef.current],
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
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
      className="relative min-h-screen pt-28 sm:pt-36 pb-16 flex flex-col justify-between overflow-hidden bg-white text-[#7F011F]"
    >
      <div className="my-auto max-w-site mx-auto px-6 sm:px-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center relative z-10 pointer-events-none">
        
        {/* LEFT COLUMN: Typography & Headlines (7 Cols) */}
        <div ref={textColumnRef} className="lg:col-span-7 space-y-6 pointer-events-auto">
          
          {/* 2-Line Headline Stack with TechText */}
          <div className="space-y-0.5 sm:space-y-1">
            
            {/* Line 1: GRAPHIC DESIGNER & */}
            <div
              ref={line1Ref}
              className="w-full h-[40px] xs:h-[50px] sm:h-[64px] md:h-[78px] lg:h-[90px] relative"
            >
              <TechText
                text="GRAPHIC DESIGNER &"
                fontWeight={700}
                fontSize={95}
                reveal="off"
                dashLength={4}
                dashGap={2}
                specks={15}
                intro="none"
                introDuration={2}
                clickKick
                guides={false}
                fontFamily='"Bebas Neue", sans-serif'
                letterSpacing={0.03}
                accentColor="#7F011F"
                reach={200}
                softness={0.7}
                lineStyle="dashed"
                strokeWidth={2}
                speed={1}
                bounce={0.4}
                selection
                labels
                color="#7F011F"
                align="left"
                draggable
                sweep
              />
            </div>

            {/* Line 2: VIDEO EDITOR */}
            <div
              ref={line2Ref}
              className="w-full h-[40px] xs:h-[50px] sm:h-[64px] md:h-[78px] lg:h-[90px] relative"
            >
              <TechText
                text="VIDEO EDITOR"
                fontWeight={700}
                fontSize={95}
                reveal="off"
                dashLength={4}
                dashGap={2}
                specks={15}
                intro="none"
                introDuration={2}
                clickKick
                guides={false}
                fontFamily='"Bebas Neue", sans-serif'
                letterSpacing={0.03}
                accentColor="#7F011F"
                reach={200}
                softness={0.7}
                lineStyle="dashed"
                strokeWidth={2}
                speed={1}
                bounce={0.4}
                selection
                labels
                color="#7F011F"
                align="left"
                draggable
                sweep
              />
            </div>

          </div>

          {/* Main "ANURAG" Display Statement */}
          <div className="pt-2 sm:pt-3">
            <div
              ref={nameRowRef}
              className="flex items-baseline gap-2 font-display font-extrabold select-none leading-none py-1"
            >
              <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#7F011F] tracking-tight uppercase">
                ANURAG
              </span>
              <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#7F011F] inline-block mb-1" />
            </div>
          </div>

          {/* Actions / Bio Callout */}
          <div className="pt-2 flex flex-wrap items-center gap-4">
            <a
              href="#work"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded bg-[#7F011F] text-white font-mono text-xs font-bold uppercase tracking-wider hover:bg-[#630018] transition-colors shadow-md"
            >
              <span>Explore Selected Work</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            <a
              href="#about"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded bg-white border border-[#7F011F]/30 hover:border-[#7F011F] text-[#7F011F] font-mono text-xs uppercase tracking-wider transition-colors shadow-xs"
            >
              <span>About & Credentials</span>
            </a>
          </div>

        </div>

        {/* RIGHT COLUMN: Clean Normal Sized Photo Portrait */}
        <div
          ref={imageColumnRef}
          className="lg:col-span-5 relative flex items-center justify-center lg:justify-end pointer-events-auto"
        >
          <div className="relative w-full max-w-[280px] sm:max-w-[340px] lg:max-w-[380px]">
            
            {/* Graphic Registration Crosshairs (Photoshop composition markers) */}
            <span className="absolute -top-3 -left-3 text-[#7F011F] font-mono text-xs select-none pointer-events-none">+</span>
            <span className="absolute -top-3 -right-3 text-[#7F011F] font-mono text-xs select-none pointer-events-none">+</span>
            <span className="absolute -bottom-3 -right-3 text-[#7F011F] font-mono text-xs select-none pointer-events-none">+</span>

            {/* Cut-out Transparent Portrait Image */}
            <div className="relative z-10">
              <img
                src="/anurag-portrait.png"
                alt="Anurag K — Graphic Designer & Video Editor"
                className="w-full h-auto object-cover relative z-10 drop-shadow-[0_20px_35px_rgba(127,1,31,0.25)]"
              />

              {/* Bottom Gradient Fade to seamlessly melt into background */}
              <div 
                className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white via-white/85 to-transparent z-20 pointer-events-none"
              />
            </div>

            {/* Floating Editorial Badge (HUD) */}
            <div className="absolute bottom-2 -left-2 sm:left-2 z-30 bg-white/95 backdrop-blur-md p-3 sm:p-3.5 rounded-lg border border-[#7F011F]/20 shadow-xl space-y-1 max-w-[260px]">
              <div className="flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-wider text-[#7F011F] font-bold">
                <Sparkles className="w-3 h-3 shrink-0" />
                <span className="truncate">Visual & Motion Lead</span>
              </div>
              <div className="font-display text-sm sm:text-base text-[#7F011F] uppercase tracking-tight font-bold">
                ANURAG K
              </div>
              <div className="text-[11px] font-mono text-[#7F011F]/70 truncate">
                BufferBytes Tech • Haris&Co.
              </div>
            </div>

            {/* Top-Right Badge: Location */}
            <div className="absolute top-2 right-2 sm:right-4 z-30 bg-[#7F011F] text-white font-mono text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded shadow-md whitespace-nowrap">
              Kozhikode, India
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
