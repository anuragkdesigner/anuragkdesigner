import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

interface IntroSequenceProps {
  onComplete: () => void;
}

export const IntroSequence: React.FC<IntroSequenceProps> = ({ onComplete }) => {
  const overlayRef = useRef<HTMLDivElement>(null);
  const nameTextRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLDivElement>(null);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          setHidden(true);
          onComplete();
        }
      });

      // Name entrance: clean, authoritative display reveal
      tl.fromTo(
        nameTextRef.current,
        { opacity: 0, scale: 0.85, y: 30 },
        { opacity: 1, scale: 1, y: 0, duration: 0.7, ease: "power3.out" },
        0.15
      )
      .fromTo(
        subtitleRef.current,
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.45, ease: "power2.out" },
        "-=0.2"
      )
      .to(nameTextRef.current, {
        scale: 1.02,
        duration: 0.3,
        yoyo: true,
        repeat: 1,
        ease: "power1.inOut"
      })
      // Slide overlay upward to reveal website
      .to(overlayRef.current, {
        yPercent: -120,
        opacity: 0,
        duration: 0.75,
        delay: 0.4,
        ease: "power3.inOut"
      });
    }, overlayRef);

    return () => ctx.revert();
  }, [onComplete]);

  if (hidden) return null;

  return (
    <div
      ref={overlayRef}
      className="fixed inset-3 sm:inset-6 z-50 rounded-[32px] sm:rounded-[44px] bg-white/20 backdrop-blur-3xl backdrop-saturate-150 border border-white/50 shadow-[0_30px_80px_rgba(0,0,0,0.15),inset_0_1px_1px_rgba(255,255,255,0.8)] flex flex-col items-center justify-center select-none overflow-hidden"
    >
      {/* Specular glass reflection layer */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-white/10 to-transparent pointer-events-none" />

      {/* Main Clean Brand Splash: "ANURAG" */}
      <div className="relative z-10 flex flex-col items-center gap-3 sm:gap-4 px-6 text-center">
        <div
          ref={nameTextRef}
          className="flex items-baseline justify-center gap-2 font-display font-extrabold text-5xl sm:text-7xl md:text-8xl lg:text-[100px] text-[#0d0e12] tracking-tight leading-none uppercase opacity-0"
        >
          <span>ANURAG</span>
          <span className="w-3.5 h-3.5 sm:w-5 sm:h-5 md:w-6 md:h-6 rounded-full bg-[#0d0e12] inline-block mb-1 sm:mb-2" />
        </div>

        {/* Subtitle tag */}
        <div
          ref={subtitleRef}
          className="font-mono text-xs sm:text-sm uppercase tracking-[0.25em] text-[#0d0e12] font-semibold opacity-0"
        >
          Graphic Designer & Video Editor
        </div>
      </div>
    </div>
  );
};
