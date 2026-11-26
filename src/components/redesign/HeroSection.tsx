import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Sparkles, ArrowUpRight } from 'lucide-react';
import TechText from './TechText';
import Lanyard from './Lanyard';

export const HeroSection: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const textColumnRef = useRef<HTMLDivElement>(null);
  const lanyardContainerRef = useRef<HTMLDivElement>(null);
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
        lanyardContainerRef.current,
        { opacity: 0, scale: 0.95 },
        { opacity: 1, scale: 1, duration: 1, ease: 'power2.out' },
        "-=0.6"
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen pt-24 sm:pt-28 pb-16 flex flex-col justify-between max-w-site mx-auto px-6 sm:px-10 overflow-visible"
    >
      {/* Full Hero Viewport 3D Physics Lanyard Canvas (hangs down right from the very top of the page) */}
      <div
        ref={lanyardContainerRef}
        className="absolute inset-0 top-0 left-0 right-0 bottom-0 pointer-events-none z-20 flex justify-end"
      >
        <div className="w-full h-full lg:w-3/5 lg:ml-auto pointer-events-auto">
          <Lanyard
            frontImage="/anurag-portrait.png"
            backImage="/anurag-portrait.png"
            imageFit="cover"
            cardColor="#ffffff"
            orientation="portrait"
            finish="glossy"
            cornerRadius={0.3}
            size={0.68}
            anchor="center"
            strapLength={0.42}
            strapColor="#111111"
            strapWidth={0.65}
            metal="silver"
            gravity={1}
            damping={0.5}
            elasticity={0.5}
            breeze={0.5}
            interactive
            intro
          />
        </div>
      </div>

      {/* Ambient Lighting Halo Behind Portrait */}
      <div 
        className="absolute top-1/4 right-0 lg:right-12 w-80 sm:w-96 h-80 sm:h-96 rounded-full bg-[#0d0e12]/[0.03] dark:bg-white/[0.03] blur-[100px] pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="my-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center relative z-10 pointer-events-none">
        
        {/* LEFT COLUMN: Typography & Headlines (7 Cols) */}
        <div ref={textColumnRef} className="lg:col-span-7 space-y-6 pointer-events-auto">
          
          {/* 2-Line Headline Stack with TechText */}
          <div className="space-y-0.5 sm:space-y-1">
            
            {/* Line 1: GRAPHIC DESIGNER & */}
            <div
              ref={line1Ref}
              className="w-full h-[36px] xs:h-[44px] sm:h-[56px] md:h-[68px] lg:h-[78px] relative"
            >
              <TechText
                text="GRAPHIC DESIGNER &"
                fontWeight={800}
                fontSize={85}
                reveal="letter"
                dashLength={4}
                dashGap={2}
                specks={15}
                intro="none"
                introDuration={2}
                clickKick
                guides={false}
                fontFamily="Poppins, sans-serif"
                letterSpacing={-0.03}
                accentColor="currentColor"
                reach={200}
                softness={0.7}
                lineStyle="dashed"
                strokeWidth={1.5}
                speed={1}
                bounce={0.4}
                selection
                labels
                color="currentColor"
                align="left"
                draggable
                sweep
              />
            </div>

            {/* Line 2: VIDEO EDITOR */}
            <div
              ref={line2Ref}
              className="w-full h-[36px] xs:h-[44px] sm:h-[56px] md:h-[68px] lg:h-[78px] relative"
            >
              <TechText
                text="VIDEO EDITOR"
                fontWeight={800}
                fontSize={85}
                reveal="letter"
                dashLength={4}
                dashGap={2}
                specks={15}
                intro="none"
                introDuration={2}
                clickKick
                guides={false}
                fontFamily="Poppins, sans-serif"
                letterSpacing={-0.03}
                accentColor="currentColor"
                reach={200}
                softness={0.7}
                lineStyle="dashed"
                strokeWidth={1.5}
                speed={1}
                bounce={0.4}
                selection
                labels
                color="currentColor"
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
              <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#0d0e12] dark:text-white tracking-tight uppercase">
                ANURAG
              </span>
              <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#0d0e12] dark:bg-white inline-block mb-1" />
            </div>
          </div>

          {/* Actions / Bio Callout */}
          <div className="pt-2 flex flex-wrap items-center gap-4">
            <a
              href="#work"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded bg-[#0d0e12] text-white dark:bg-white dark:text-black font-mono text-xs font-bold uppercase tracking-wider hover:bg-[#242833] dark:hover:bg-white/80 transition-colors shadow-md"
            >
              <span>Explore Selected Work</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            <a
              href="#about"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded bg-white dark:bg-black border border-[#e2dfd7] dark:border-[#262626] hover:border-[#0d0e12] dark:hover:border-white text-[#0d0e12] dark:text-white font-mono text-xs uppercase tracking-wider transition-colors shadow-xs"
            >
              <span>About & Credentials</span>
            </a>
          </div>

        </div>

        {/* RIGHT COLUMN: Spacer placeholder & HUD badges */}
        <div className="lg:col-span-5 relative flex items-center justify-center lg:justify-end min-h-[460px] sm:min-h-[540px]">
          {/* Floating Editorial Badge (HUD) */}
          <div className="absolute bottom-4 left-0 sm:left-4 z-30 bg-white/95 dark:bg-black/90 backdrop-blur-md p-3 sm:p-3.5 rounded-lg border border-[#e2dfd7] dark:border-[#262626] shadow-xl space-y-1 max-w-[260px] pointer-events-none">
            <div className="flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-wider text-[#0d0e12] dark:text-white font-bold">
              <Sparkles className="w-3 h-3 shrink-0" />
              <span className="truncate">Visual & Motion Lead</span>
            </div>
            <div className="font-display text-sm sm:text-base text-[#0d0e12] dark:text-white uppercase tracking-tight">
              ANURAG K
            </div>
            <div className="text-[11px] font-mono text-[#525866] dark:text-[#a3a3a3] truncate">
              Drag anywhere • Physics lanyard
            </div>
          </div>

          {/* Top-Right Badge: Location */}
          <div className="absolute top-2 right-2 sm:right-4 z-30 bg-[#0d0e12] text-white dark:bg-white dark:text-black font-mono text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded shadow-md whitespace-nowrap pointer-events-none">
            Kozhikode, India
          </div>
        </div>

      </div>
    </section>
  );
};
