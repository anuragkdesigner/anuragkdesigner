import React, { useEffect, useRef, useState } from 'react';
import { content } from '../../data/redesignContent';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const WorkSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const eyePupilLeftRef = useRef<SVGCircleElement>(null);
  const eyePupilRightRef = useRef<SVGCircleElement>(null);
  const [blinking, setBlinking] = useState(false);

  const projects = content.projects;

  // Cartoon eye cursor tracking
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const pupils = [eyePupilLeftRef.current, eyePupilRightRef.current];
      pupils.forEach((pupil) => {
        if (!pupil) return;
        const rect = pupil.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const deltaX = e.clientX - centerX;
        const deltaY = e.clientY - centerY;
        const angle = Math.atan2(deltaY, deltaX);
        const distance = Math.min(5, Math.hypot(deltaX, deltaY) / 20);
        const moveX = Math.cos(angle) * distance;
        const moveY = Math.sin(angle) * distance;

        pupil.style.transform = `translate(${moveX}px, ${moveY}px)`;
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Eye blinking interval every 4.5 seconds
  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setBlinking(true);
      setTimeout(() => setBlinking(false), 200);
    }, 4500);

    return () => clearInterval(blinkInterval);
  }, []);

  // GSAP Horizontal Scroll Pinning
  useEffect(() => {
    const container = containerRef.current;
    const track = trackRef.current;
    if (!container || !track) return;

    const ctx = gsap.context(() => {
      const getScrollAmount = () => -(track.scrollWidth - window.innerWidth + 60);

      const horizontalTween = gsap.to(track, {
        x: getScrollAmount,
        ease: 'none'
      });

      ScrollTrigger.create({
        trigger: container,
        start: 'top top',
        end: () => `+=${Math.max(1200, track.scrollWidth - window.innerWidth + 200)}`,
        pin: true,
        animation: horizontalTween,
        scrub: 1,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          if (progressBarRef.current) {
            progressBarRef.current.style.width = `${Math.min(100, Math.max(0, self.progress * 100))}%`;
          }
        }
      });
    }, container);

    return () => ctx.revert();
  }, [projects]);

  return (
    <section
      id="work"
      ref={containerRef}
      className="relative bg-[#f9f9f8] border-t border-[#e2dfd7] select-none"
    >
      {/* Pinned 100vh Viewport */}
      <div className="h-screen w-full flex flex-col justify-between py-6 sm:py-8 overflow-hidden">
        
        {/* Top Section Header Strip */}
        <div className="max-w-site mx-auto w-full px-6 sm:px-10 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-accent-red animate-pulse" />
            <span className="font-mono text-xs uppercase tracking-widest text-[#0d0e12] font-bold">
              Selected Client Highlights (01—0{projects.length})
            </span>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-[#525866]">
            <span className="hidden sm:inline">HORIZONTAL SCROLL</span>
            <span className="text-accent-red font-bold animate-pulse">SCROLL TO EXPLORE →</span>
          </div>
        </div>

        {/* Horizontal Sliding Track */}
        <div
          ref={trackRef}
          className="flex items-center gap-6 sm:gap-10 pl-6 sm:pl-10 pr-16 sm:pr-24 will-change-transform my-auto py-2"
        >
          {/* Track Item 0: Editorial Intro Card */}
          <div className="w-[300px] xs:w-[360px] sm:w-[440px] lg:w-[480px] shrink-0 bg-white border border-[#e2dfd7] rounded-xl p-6 sm:p-8 shadow-xl flex flex-col justify-between">
            <div className="space-y-4">
              {/* Badge + Cartoon Eye */}
              <div className="flex items-center gap-4">
                <div className="relative w-20 h-20 sm:w-24 sm:h-24 shrink-0 flex items-center justify-center">
                  <svg
                    viewBox="0 0 200 200"
                    className="w-full h-full animate-spin-badge select-none"
                  >
                    <path
                      id="textCirclePathH"
                      d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
                      fill="none"
                    />
                    <text
                      fill="#0d0e12"
                      fontSize="11.5"
                      fontFamily="monospace"
                      fontWeight="bold"
                      letterSpacing="2.8px"
                    >
                      <textPath href="#textCirclePathH" startOffset="0%">
                        {content.badgeText}
                      </textPath>
                    </text>
                  </svg>

                  {/* Blinking cartoon eyes */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <svg viewBox="0 0 80 80" className="w-10 h-10 sm:w-12 sm:h-12">
                      <ellipse
                        cx="28" cy="40" rx="12" ry={blinking ? 1 : 14}
                        fill="#ffffff" stroke="#0d0e12" strokeWidth="2"
                        style={{ transition: 'ry 0.1s ease-in-out' }}
                      />
                      {!blinking && (
                        <circle ref={eyePupilLeftRef} cx="28" cy="40" r="5" fill="#0d0e12" />
                      )}
                      <ellipse
                        cx="52" cy="40" rx="12" ry={blinking ? 1 : 14}
                        fill="#ffffff" stroke="#0d0e12" strokeWidth="2"
                        style={{ transition: 'ry 0.1s ease-in-out' }}
                      />
                      {!blinking && (
                        <circle ref={eyePupilRightRef} cx="52" cy="40" r="5" fill="#0d0e12" />
                      )}
                    </svg>
                  </div>
                </div>

                <div>
                  <span className="text-[10px] font-mono uppercase tracking-[0.15em] text-accent-red font-bold block">
                    Featured Work
                  </span>
                  <h3 className="font-display text-xl sm:text-2xl text-[#0d0e12] tracking-tight uppercase leading-tight">
                    CLIENT HIGHLIGHTS
                  </h3>
                </div>
              </div>

              {/* Word-level styled narrative */}
              <p className="text-xs sm:text-sm text-[#0d0e12] leading-relaxed font-sans pt-2 border-t border-[#e2dfd7]">
                {content.introParagraph.map((part, idx) => {
                  if (part.style === 'bold') {
                    return (
                      <span key={idx} className="font-display font-bold text-[#0d0e12] underline decoration-accent-red decoration-2 underline-offset-4">
                        {part.text}
                      </span>
                    );
                  }
                  if (part.style === 'italic') {
                    return (
                      <span key={idx} className="font-script text-base sm:text-lg italic text-[#0d0e12]">
                        {part.text}
                      </span>
                    );
                  }
                  if (part.style === 'red') {
                    return (
                      <span key={idx} className="font-display text-accent-red uppercase tracking-tight">
                        {part.text}
                      </span>
                    );
                  }
                  return <span key={idx}>{part.text}</span>;
                })}
              </p>
            </div>

            <div className="pt-4 mt-4 border-t border-[#e2dfd7] flex items-center justify-between text-xs font-mono text-[#525866]">
              <span>0{projects.length} FEATURED WORKS</span>
              <span className="text-accent-red flex items-center gap-1 font-bold">
                SCROLL <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </div>

          {/* Track Items 1—N: Individual Project Cards */}
          {projects.map((proj) => (
            <div
              key={proj.id}
              className="w-[320px] xs:w-[380px] sm:w-[480px] lg:w-[540px] shrink-0 bg-white border border-[#e2dfd7] rounded-xl p-5 sm:p-6 shadow-xl flex flex-col justify-between group hover:border-accent-red/60 hover:shadow-2xl transition-all"
            >
              {/* Thumbnail 16:10 */}
              <div className="relative aspect-[16/10] w-full rounded-lg overflow-hidden bg-[#f2f1ed] mb-4">
                <img
                  src={proj.image}
                  alt={proj.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />

                <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-2.5 py-1 rounded text-[10px] font-mono uppercase tracking-wider text-[#0d0e12] border border-[#e2dfd7] shadow-xs">
                  {proj.category}
                </div>

                <div className="absolute top-3 right-3 bg-accent-red text-white font-mono text-[10px] font-bold px-2 py-0.5 rounded shadow">
                  {proj.index} / 0{projects.length}
                </div>
              </div>

              {/* Client & Title */}
              <div className="space-y-2 mb-3">
                <div className="font-mono text-xs uppercase tracking-widest text-[#525866]">
                  {proj.client}
                </div>
                <div>
                  <div className="inline-block bg-accent-red text-white font-display text-lg sm:text-xl px-3 py-1 rounded tracking-tight uppercase shadow-xs">
                    {proj.title}
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-[#525866] leading-relaxed line-clamp-2">
                  {proj.tagline}
                </p>
              </div>

              {/* Deliverables tags & Action */}
              <div className="pt-3 border-t border-[#e2dfd7] flex items-center justify-between">
                <div className="flex flex-wrap gap-1.5 max-w-[70%]">
                  {proj.deliverables.slice(0, 2).map((item, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded bg-[#f1f0ec] text-[10px] font-mono text-[#525866] border border-[#e2dfd7] truncate"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <a
                  href="#contact"
                  className="text-xs font-mono font-bold uppercase tracking-wider text-[#0d0e12] hover:text-accent-red flex items-center gap-1 transition-colors"
                >
                  <span>Discuss</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-accent-red" />
                </a>
              </div>
            </div>
          ))}

        </div>

        {/* Bottom Horizontal Scroll Progress Bar */}
        <div className="max-w-site mx-auto w-full px-6 sm:px-10 shrink-0">
          <div className="flex items-center justify-between text-[11px] font-mono text-[#525866] mb-2">
            <span>TRACK PROGRESS</span>
            <span>01 — 0{projects.length} FINISH → VERTICAL RESUME</span>
          </div>
          <div className="h-1 bg-[#e2dfd7] rounded-full overflow-hidden w-full">
            <div
              ref={progressBarRef}
              className="h-full bg-accent-red w-0 origin-left transition-all duration-75"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

