import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

interface IntroSequenceProps {
  onComplete: () => void;
}

export const IntroSequence: React.FC<IntroSequenceProps> = ({ onComplete }) => {
  const overlayRef = useRef<HTMLDivElement>(null);
  const scriptTextRef = useRef<HTMLDivElement>(null);
  const goTextRef = useRef<HTMLSpanElement>(null);
  const odTextRef = useRef<HTMLSpanElement>(null);
  const mascotRef = useRef<HTMLDivElement>(null);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    // Only play if not skipped
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          setHidden(true);
          onComplete();
        }
      });

      // Step 1: Script logo draws / fades in
      tl.fromTo(
        scriptTextRef.current,
        { opacity: 0, y: 15, scale: 0.95 },
        { opacity: 1, y: 0, scale: 1, duration: 0.8, ease: "power2.out" }
      )
      .to(scriptTextRef.current, {
        opacity: 0,
        scale: 1.1,
        duration: 0.4,
        delay: 0.3,
        ease: "power2.in"
      })
      
      // Step 2: "GO ... OD" with Mascot builds up
      .fromTo(
        goTextRef.current,
        { opacity: 0, scale: 0.5, y: 30 },
        { opacity: 1, scale: 1, y: 0, duration: 0.45, ease: "back.out(1.7)" },
        "-=0.1"
      )
      .fromTo(
        mascotRef.current,
        { opacity: 0, scale: 0, rotation: -20 },
        { opacity: 1, scale: 1, rotation: 0, duration: 0.45, ease: "back.out(2)" },
        "-=0.2"
      )
      .fromTo(
        odTextRef.current,
        { opacity: 0, scale: 0.5, y: 30 },
        { opacity: 1, scale: 1.15, y: 0, duration: 0.45, ease: "back.out(1.8)" },
        "-=0.2"
      )
      .to([goTextRef.current, odTextRef.current, mascotRef.current], {
        scale: 1,
        duration: 0.2,
        ease: "power1.inOut"
      })

      // Step 3: Slide overlay upward (yPercent -100)
      .to(overlayRef.current, {
        yPercent: -100,
        duration: 0.75,
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
      duration: 0.4,
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

      {/* 1. Script Logo */}
      <div
        ref={scriptTextRef}
        className="font-script text-5xl sm:text-7xl text-cream italic tracking-wide"
      >
        Anurag
      </div>

      {/* 2. GO - [Mascot] - OD Build Up */}
      <div className="flex items-center gap-2 sm:gap-4 font-display leading-none">
        <span
          ref={goTextRef}
          className="text-6xl sm:text-9xl text-cream opacity-0"
        >
          GO
        </span>

        {/* Mascot Face */}
        <div
          ref={mascotRef}
          className="w-16 h-16 sm:w-28 sm:h-28 rounded-full bg-accent-red flex items-center justify-center opacity-0 shadow-lg"
        >
          <svg viewBox="0 0 100 100" className="w-12 h-12 sm:w-20 sm:h-20">
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
          ref={odTextRef}
          className="text-6xl sm:text-9xl text-cream opacity-0"
        >
          OD
        </span>
      </div>
    </div>
  );
};
