import React, { useEffect, useRef, useState } from 'react';
import { content } from '../../data/redesignContent';
import { ArrowUpRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { StoryShowcaseModal } from './StoryShowcaseModal';

gsap.registerPlugin(ScrollTrigger);

export const WorkSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const [isStoryModalOpen, setIsStoryModalOpen] = useState(false);

  const projects = content.projects;

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
            <span className="w-2.5 h-2.5 rounded-full bg-[#0d0e12] animate-pulse" />
            <span className="font-mono text-xs uppercase tracking-widest text-[#0d0e12] font-bold">
              Selected Client Highlights (01—0{projects.length})
            </span>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-[#525866]">
            <span className="hidden sm:inline">HORIZONTAL SCROLL</span>
            <span className="text-[#0d0e12] font-bold animate-pulse">SCROLL TO EXPLORE →</span>
          </div>
        </div>

        {/* Horizontal Sliding Track */}
        <div
          ref={trackRef}
          className="flex items-center gap-6 sm:gap-10 pl-6 sm:pl-10 pr-16 sm:pr-24 will-change-transform my-auto py-2"
        >
          {/* Track Items: Individual Project Cards */}
          {projects.map((proj) => {
            const isSocialMedia = proj.id === 'social-media-posts';

            return (
              <div
                key={proj.id}
                onClick={isSocialMedia ? () => setIsStoryModalOpen(true) : undefined}
                className={`w-[320px] xs:w-[380px] sm:w-[480px] lg:w-[540px] shrink-0 bg-white border border-[#e2dfd7] rounded-xl p-5 sm:p-6 shadow-xl flex flex-col justify-between group hover:border-[#0d0e12]/60 hover:shadow-2xl transition-all ${
                  isSocialMedia ? 'cursor-pointer' : ''
                }`}
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

                  <div className="absolute top-3 right-3 bg-[#0d0e12] text-white font-mono text-[10px] font-bold px-2 py-0.5 rounded shadow">
                    {proj.index} / 0{projects.length}
                  </div>
                </div>

                {/* Client & Title */}
                <div className="space-y-2 mb-3">
                  <div className="font-mono text-xs uppercase tracking-widest text-[#525866]">
                    {proj.client}
                  </div>
                  <div>
                    <div className="inline-block bg-[#0d0e12] text-white font-display font-bold text-base sm:text-lg px-2.5 py-1 rounded tracking-tight uppercase shadow-xs">
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

                  {isSocialMedia ? (
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setIsStoryModalOpen(true);
                      }}
                      className="text-xs font-mono font-bold uppercase tracking-wider text-[#0d0e12] hover:text-[#525866] flex items-center gap-1 transition-colors cursor-pointer"
                    >
                      <span>Showcase</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-[#0d0e12]" />
                    </button>
                  ) : (
                    <a
                      href="#contact"
                      className="text-xs font-mono font-bold uppercase tracking-wider text-[#0d0e12] hover:text-[#525866] flex items-center gap-1 transition-colors"
                    >
                      <span>Discuss</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-[#0d0e12]" />
                    </a>
                  )}
                </div>
              </div>
            );
          })}

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
              className="h-full bg-[#0d0e12] w-0 origin-left transition-all duration-75"
            />
          </div>
        </div>

      </div>

      {/* 70% Sized Visual Showcase Popup */}
      <StoryShowcaseModal
        isOpen={isStoryModalOpen}
        onClose={() => setIsStoryModalOpen(false)}
      />
    </section>
  );
};

