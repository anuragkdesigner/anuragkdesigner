import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

interface IntroSequenceProps {
  onComplete: () => void;
}

export const IntroSequence: React.FC<IntroSequenceProps> = ({ onComplete }) => {
  const overlayRef = useRef<HTMLDivElement>(null);
  const anuTextRef = useRef<HTMLSpanElement>(null);
  const ragTextRef = useRef<HTMLSpanElement>(null);
  const mascotRef = useRef<HTMLDivElement>(null);
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

      // "ANU" [Mascot] "RAG" Entrance
      tl.fromTo(
        anuTextRef.current,
        { opacity: 0, scale: 0.6, y: 35 },
        { opacity: 1, scale: 1, y: 0, duration: 0.5, ease: "back.out(1.7)" },
        0.15
      )
      .fromTo(
        mascotRef.current,
        { opacity: 0, scale: 0, rotation: -25 },
        { opacity: 1, scale: 1, rotation: 0, duration: 0.55, ease: "back.out(2)" },
        0.25
      )
      .fromTo(
        ragTextRef.current,
        { opacity: 0, scale: 0.6, y: 35 },
        { opacity: 1, scale: 1, y: 0, duration: 0.5, ease: "back.out(1.7)" },
        0.35
      )
      .fromTo(
        subtitleRef.current,
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" },
        "-=0.1"
      )
      .to([anuTextRef.current, ragTextRef.current, mascotRef.current], {
        scale: 1.04,
        duration: 0.25,
        yoyo: true,
        repeat: 1,
        ease: "power1.inOut"
      })
      // Slide overlay upward to reveal website
      .to(overlayRef.current, {
        yPercent: -100,
        duration: 0.7,
        delay: 0.5,
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

      {/* Main Brand Splash: "ANU" [Mascot] "RAG" */}
      <div className="flex flex-col items-center gap-4">
        <div className="flex items-center gap-2 sm:gap-5 font-display leading-none">
          <span
            ref={anuTextRef}
            className="text-6xl sm:text-8xl md:text-9xl lg:text-[140px] text-cream opacity-0 tracking-tight"
          >
            ANU
          </span>

          {/* Cartoon Mascot Face */}
          <div
            ref={mascotRef}
            className="w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 rounded-full bg-accent-red flex items-center justify-center opacity-0 shadow-2xl"
          >
            <svg viewBox="0 0 100 100" className="w-12 h-12 sm:w-18 sm:h-18 md:w-24 md:h-24">
              {/* Eyes */}
              <circle cx="36" cy="42" r="10" fill="#f3efe4" />
              <circle cx="38" cy="42" r="4.5" fill="#1f2430" />
              <circle cx="64" cy="42" r="10" fill="#f3efe4" />
              <circle cx="66" cy="42" r="4.5" fill="#1f2430" />
              {/* Smile */}
              <path
                d="M 32 64 Q 50 82 68 64"
                fill="none"
                stroke="#f3efe4"
                strokeWidth="5"
                strokeLinecap="round"
              />
            </svg>
          </div>

          <span
            ref={ragTextRef}
            className="text-6xl sm:text-8xl md:text-9xl lg:text-[140px] text-cream opacity-0 tracking-tight"
          >
            RAG
          </span>
        </div>

        {/* Subtitle tag */}
        <div
          ref={subtitleRef}
          className="font-mono text-xs sm:text-sm uppercase tracking-[0.2em] text-accent-red font-semibold opacity-0"
        >
          Graphic Designer & Video Editor
        </div>
      </div>
    </div>
  );
};
