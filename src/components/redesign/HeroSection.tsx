import React, { useEffect, useRef, useState } from 'react';
import { content } from '../../data/redesignContent';
import gsap from 'gsap';
import { ArrowDown } from 'lucide-react';

export const HeroSection: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const line1Ref = useRef<HTMLDivElement>(null);
  const line2Ref = useRef<HTMLDivElement>(null);
  const line3Ref = useRef<HTMLDivElement>(null);
  const mascotRowRef = useRef<HTMLDivElement>(null);
  const mascotEyePupils = useRef<SVGCircleElement[]>([]);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.2 });

      tl.fromTo(
        [line1Ref.current, line2Ref.current, line3Ref.current, mascotRowRef.current],
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

  // Mouse tilt interaction for cartoon mascot
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!heroRef.current) return;
    const rect = heroRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: x * 22, y: y * 22 });
  };

  return (
    <section
      ref={heroRef}
      onMouseMove={handleMouseMove}
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

        {/* The "GO" - [Mascot] - "OD" Hero Anchor Row */}
        <div className="mask-line pt-4 sm:pt-8">
          <div
            ref={mascotRowRef}
            className="flex items-center gap-3 sm:gap-6 font-display select-none leading-none"
          >
            {/* GO */}
            <span className="text-6xl sm:text-8xl md:text-9xl lg:text-[140px] text-cream">
              {content.mascotWords.first}
            </span>

            {/* Cartoon Mascot Character with Eyes & Tilt */}
            <div
              style={{
                transform: `rotate(${tilt.x * 0.6}deg) translate(${tilt.x * 0.4}px, ${tilt.y * 0.4}px)`,
                transition: 'transform 0.15s ease-out'
              }}
              className="relative w-20 h-20 sm:w-28 sm:h-28 md:w-36 md:h-36 rounded-full bg-accent-red flex items-center justify-center shadow-2xl animate-mascot-bounce cursor-pointer group"
              title="Anurag Mascot"
            >
              {/* Animated Face */}
              <svg viewBox="0 0 100 100" className="w-16 h-16 sm:w-24 sm:h-24 md:w-28 md:h-28">
                {/* Left Eye */}
                <circle cx="36" cy="42" r="11" fill="#f3efe4" stroke="#161922" strokeWidth="2" />
                <circle
                  cx={36 + tilt.x * 0.15}
                  cy={42 + tilt.y * 0.15}
                  r="5"
                  fill="#1f2430"
                  ref={(el) => { if (el) mascotEyePupils.current[0] = el; }}
                />
                
                {/* Right Eye */}
                <circle cx="64" cy="42" r="11" fill="#f3efe4" stroke="#161922" strokeWidth="2" />
                <circle
                  cx={64 + tilt.x * 0.15}
                  cy={42 + tilt.y * 0.15}
                  r="5"
                  fill="#1f2430"
                  ref={(el) => { if (el) mascotEyePupils.current[1] = el; }}
                />

                {/* Big Cartoon Smile */}
                <path
                  d="M 30 62 Q 50 84 70 62"
                  fill="none"
                  stroke="#f3efe4"
                  strokeWidth="6"
                  strokeLinecap="round"
                />

                {/* Cheek Blushes */}
                <circle cx="25" cy="58" r="4" fill="#ff7f7f" opacity="0.6" />
                <circle cx="75" cy="58" r="4" fill="#ff7f7f" opacity="0.6" />
              </svg>

              {/* Speech bubble on hover */}
              <div className="absolute -top-7 bg-cream text-charcoal font-mono text-[10px] font-bold px-2 py-0.5 rounded shadow opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                LET'S MAKE IT GOOD!
              </div>
            </div>

            {/* OD */}
            <span className="text-6xl sm:text-8xl md:text-9xl lg:text-[140px] text-cream">
              {content.mascotWords.second}
            </span>
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
