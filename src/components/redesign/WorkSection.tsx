import React, { useState, useEffect, useRef } from 'react';
import { content } from '../../data/redesignContent';
import { ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';
import gsap from 'gsap';

export const WorkSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const cardRef = useRef<HTMLDivElement>(null);
  const eyePupilLeftRef = useRef<SVGCircleElement>(null);
  const eyePupilRightRef = useRef<SVGCircleElement>(null);
  const [blinking, setBlinking] = useState(false);

  const projects = content.projects;
  const currentProject = projects[activeIndex] || projects[0];

  const switchProject = (newIndex: number) => {
    if (newIndex === activeIndex || newIndex < 0 || newIndex >= projects.length) return;
    if (cardRef.current) {
      gsap.fromTo(
        cardRef.current,
        { opacity: 0.3, y: 16, scale: 0.98 },
        { opacity: 1, y: 0, scale: 1, duration: 0.35, ease: 'power2.out' }
      );
    }
    setActiveIndex(newIndex);
  };

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
        const distance = Math.min(6, Math.hypot(deltaX, deltaY) / 18);
        const moveX = Math.cos(angle) * distance;
        const moveY = Math.sin(angle) * distance;

        pupil.style.transform = `translate(${moveX}px, ${moveY}px)`;
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Eye blinking interval every 4 seconds
  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setBlinking(true);
      setTimeout(() => setBlinking(false), 220);
    }, 4000);

    return () => clearInterval(blinkInterval);
  }, []);

  return (
    <section
      id="work"
      className="py-20 sm:py-28 bg-[#1f2430] border-t border-charcoal-border"
    >
      <div className="max-w-site mx-auto px-6 sm:px-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* LEFT COLUMN: Vertical Index Strip + Project Card (45% width ~ 6 cols) */}
          <div className="lg:col-span-6 flex items-stretch gap-4 sm:gap-6">
            
            {/* Vertical Strip of Project Index Numbers (01, 02, 03, 04, 05) */}
            <div className="hidden sm:flex flex-col items-center justify-between py-4 select-none border-r border-charcoal-border pr-4">
              {projects.map((proj, idx) => (
                <button
                  key={proj.id}
                  onClick={() => switchProject(idx)}
                  className={`font-mono text-xs tracking-widest transition-all ${
                    activeIndex === idx
                      ? 'text-accent-red font-bold scale-125'
                      : 'text-cream-faint hover:text-cream'
                  }`}
                  aria-label={`Go to project ${proj.index}`}
                >
                  {proj.index}
                </button>
              ))}
            </div>

            {/* Project Card with Image / Thumbnail */}
            <div
              ref={cardRef}
              className="w-full bg-[#181c26] border border-charcoal-border rounded-lg p-5 sm:p-6 shadow-2xl flex flex-col justify-between"
            >
              {/* 16:10 Thumbnail */}
              <div className="relative aspect-[16/10] w-full rounded-[6px] overflow-hidden bg-charcoal-surface mb-4 group">
                <img
                  src={currentProject.image}
                  alt={currentProject.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#181c26]/80 via-transparent to-transparent pointer-events-none" />
                
                {/* Category Pill */}
                <div className="absolute top-3 left-3 bg-[#1f2430]/90 backdrop-blur-md px-2.5 py-1 rounded text-[10px] font-mono uppercase tracking-wider text-cream border border-charcoal-border">
                  {currentProject.category}
                </div>
              </div>

              {/* Caption: Client Name in small uppercase */}
              <div className="flex items-center justify-between mb-2">
                <span className="font-mono text-xs uppercase tracking-widest text-cream-muted">
                  {currentProject.client}
                </span>
                <span className="font-mono text-xs text-accent-red font-bold">
                  {currentProject.index} / 05
                </span>
              </div>

              {/* Red Rectangular Label with Project Title */}
              <div className="mb-3">
                <div className="inline-block bg-accent-red text-cream font-display text-xl sm:text-2xl px-3.5 py-1.5 rounded-[4px] tracking-tight uppercase shadow-sm">
                  {currentProject.title}
                </div>
              </div>

              {/* Tagline */}
              <p className="text-xs sm:text-sm text-cream-muted leading-relaxed mb-4">
                {currentProject.tagline}
              </p>

              {/* Deliverables tags */}
              <div className="flex flex-wrap gap-1.5 pt-3 border-t border-charcoal-border/70">
                {currentProject.deliverables.map((item, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-0.5 rounded bg-charcoal text-[10px] font-mono text-cream-muted border border-charcoal-border"
                  >
                    {item}
                  </span>
                ))}
              </div>

              {/* Project Card Footer: Prev / Next + Action Link */}
              <div className="mt-5 pt-4 border-t border-charcoal-border flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => switchProject(Math.max(0, activeIndex - 1))}
                    disabled={activeIndex === 0}
                    className="p-1.5 rounded border border-charcoal-border hover:border-accent-red text-cream disabled:opacity-30 disabled:hover:border-charcoal-border transition-colors"
                    aria-label="Previous project"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => switchProject(Math.min(projects.length - 1, activeIndex + 1))}
                    disabled={activeIndex === projects.length - 1}
                    className="p-1.5 rounded border border-charcoal-border hover:border-accent-red text-cream disabled:opacity-30 disabled:hover:border-charcoal-border transition-colors"
                    aria-label="Next project"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>

                <a
                  href="#contact"
                  className="text-xs font-mono font-bold uppercase tracking-wider text-cream hover:text-accent-red flex items-center gap-1.5 transition-colors"
                >
                  <span>{activeIndex === 4 ? "Contact Directly" : "Discuss Project"}</span>
                  <ArrowUpRight className="w-4 h-4 text-accent-red" />
                </a>
              </div>

            </div>
          </div>

          {/* RIGHT COLUMN: Rotating Circular Badge + Word-Level Intro Paragraph (55% width ~ 6 cols) */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-6 pl-0 lg:pl-6">
            
            {/* Rotating Circular Text Badge with Cartoon Eye Character */}
            <div className="flex items-center gap-6">
              <div className="relative w-32 h-32 sm:w-40 sm:h-40 flex-shrink-0 flex items-center justify-center">
                
                {/* Rotating Circular Text on Path */}
                <svg
                  viewBox="0 0 200 200"
                  className="w-full h-full animate-spin-badge select-none"
                >
                  <path
                    id="textCirclePath"
                    d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
                    fill="none"
                  />
                  <text
                    fill="#f3efe4"
                    fontSize="11.5"
                    fontFamily="monospace"
                    fontWeight="bold"
                    letterSpacing="2.8px"
                  >
                    <textPath href="#textCirclePath" startOffset="0%">
                      {content.badgeText}
                    </textPath>
                  </text>
                </svg>

                {/* Center Cartoon Eye with Pupils Following Cursor & Blinking */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <svg
                    viewBox="0 0 80 80"
                    className="w-14 h-14 sm:w-18 sm:h-18"
                  >
                    {/* Left Eye */}
                    <ellipse
                      cx="28"
                      cy="40"
                      rx="14"
                      ry={blinking ? 1 : 16}
                      fill="#f3efe4"
                      stroke="#1f2430"
                      strokeWidth="2.5"
                      style={{ transition: 'ry 0.1s ease-in-out' }}
                    />
                    {!blinking && (
                      <circle
                        ref={eyePupilLeftRef}
                        cx="28"
                        cy="40"
                        r="6"
                        fill="#e0373a"
                      />
                    )}

                    {/* Right Eye */}
                    <ellipse
                      cx="52"
                      cy="40"
                      rx="14"
                      ry={blinking ? 1 : 16}
                      fill="#f3efe4"
                      stroke="#1f2430"
                      strokeWidth="2.5"
                      style={{ transition: 'ry 0.1s ease-in-out' }}
                    />
                    {!blinking && (
                      <circle
                        ref={eyePupilRightRef}
                        cx="52"
                        cy="40"
                        r="6"
                        fill="#e0373a"
                      />
                    )}
                  </svg>
                </div>

              </div>

              <div className="space-y-1">
                <span className="text-[10px] font-mono uppercase tracking-[0.15em] text-accent-red font-bold">
                  Featured Work
                </span>
                <h3 className="font-display text-2xl sm:text-3xl text-cream tracking-tight">
                  SELECTED CLIENT HIGHLIGHTS
                </h3>
                <p className="text-xs font-mono text-cream-muted">
                  Interactive case studies 01 through 05.
                </p>
              </div>
            </div>

            {/* Intro Paragraph with Word-Level Styles */}
            <div className="p-6 sm:p-7 rounded-lg bg-[#181c26] border border-charcoal-border">
              <p className="text-base sm:text-lg text-cream leading-relaxed font-sans">
                {content.introParagraph.map((part, idx) => {
                  if (part.style === 'bold') {
                    return (
                      <span key={idx} className="font-display font-bold text-cream underline decoration-accent-red decoration-2 underline-offset-4">
                        {part.text}
                      </span>
                    );
                  }
                  if (part.style === 'italic') {
                    return (
                      <span key={idx} className="font-script text-xl sm:text-2xl italic text-cream">
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

              {/* Progress and switcher */}
              <div className="mt-4 pt-4 border-t border-charcoal-border flex items-center justify-between text-xs font-mono text-cream-muted">
                <div className="flex items-center gap-1.5">
                  {projects.map((p, dotIdx) => (
                    <button
                      key={p.id}
                      onClick={() => switchProject(dotIdx)}
                      className={`h-2 rounded-full transition-all ${
                        activeIndex === dotIdx
                          ? 'w-6 bg-accent-red'
                          : 'w-2 bg-charcoal-border hover:bg-cream-faint'
                      }`}
                      aria-label={`Project ${p.index}`}
                    />
                  ))}
                </div>

                <span className="text-accent-red font-bold">
                  PROJECT {currentProject.index} OF 05
                </span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
