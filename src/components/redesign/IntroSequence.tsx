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
        yPercent: -100,
        duration: 0.7,
        delay: 0.4,
        ease: "power3.inOut"
      });
    }, overlayRef);

    return () => ctx.revert();
  }, [onComplete]);

  const handleSkip = () => {
    gsap.killTweensOf(overlayRef.current);
    gsap.to(overlayRef.current, {
      yPercent: -100,
      duration: 0.35,
      ease: "power3.inOut",
      onComplete: () => {
        setHidden(true);
        onComplete();
      }
    });
  };

  if (hidden) return null;

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-50 bg-[#161922] flex flex-col items-center justify-center select-none"
    >
      {/* Skip Button */}
      <button
        onClick={handleSkip}
        className="absolute top-6 right-8 text-xs font-mono tracking-widest uppercase text-cream-muted hover:text-cream px-3 py-1.5 rounded border border-charcoal-border hover:border-accent-red transition-colors"
      >
        Skip Intro ✕
      </button>

      {/* Main Clean Brand Splash: "ANURAG" */}
      <div className="flex flex-col items-center gap-3 sm:gap-4 px-6 text-center">
        <div
          ref={nameTextRef}
          className="flex items-baseline justify-center gap-2 font-display text-7xl sm:text-9xl md:text-[130px] lg:text-[150px] text-cream tracking-tight leading-none uppercase opacity-0"
        >
          <span>ANURAG</span>
          <span className="w-3.5 h-3.5 sm:w-5 sm:h-5 md:w-6 md:h-6 rounded-full bg-accent-red inline-block mb-1 sm:mb-2" />
        </div>

        {/* Subtitle tag */}
        <div
          ref={subtitleRef}
          className="font-mono text-xs sm:text-sm uppercase tracking-[0.25em] text-accent-red font-semibold opacity-0"
        >
          Graphic Designer & Video Editor
        </div>
      </div>
    </div>
  );
};
