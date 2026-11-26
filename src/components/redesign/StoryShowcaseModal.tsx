import React, { useEffect, useRef, useState, useLayoutEffect } from 'react';
import { X, ArrowLeft } from 'lucide-react';
import gsap from 'gsap';

interface StoryShowcaseModalProps {
  isOpen: boolean;
  onClose: () => void;
  triggerRect?: DOMRect | null;
}

const STORY_IMAGES = [
  '/project_work/story_type/WhatsApp Image 2026-11-24 at 6.06.19 PM(1).jpeg',
  '/project_work/story_type/WhatsApp Image 2026-11-24 at 6.06.20 PM(1).jpeg',
  '/project_work/story_type/WhatsApp Image 2026-11-24 at 6.06.20 PM(2).jpeg',
  '/project_work/story_type/WhatsApp Image 2026-11-24 at 6.06.20 PM(3).jpeg',
  '/project_work/story_type/WhatsApp Image 2026-11-24 at 6.06.20 PM(4).jpeg',
  '/project_work/story_type/WhatsApp Image 2026-11-24 at 6.06.20 PM.jpeg',
  '/project_work/story_type/WhatsApp Image 2026-11-24 at 6.06.21 PM(1).jpeg',
  '/project_work/story_type/WhatsApp Image 2026-11-24 at 6.06.21 PM(2).jpeg',
  '/project_work/story_type/WhatsApp Image 2026-11-24 at 6.06.21 PM(3).jpeg',
  '/project_work/story_type/WhatsApp Image 2026-11-24 at 6.06.21 PM(4).jpeg',
  '/project_work/story_type/WhatsApp Image 2026-11-24 at 6.06.21 PM(5).jpeg',
  '/project_work/story_type/WhatsApp Image 2026-11-24 at 6.06.21 PM.jpeg',
  '/project_work/story_type/task..2.png',
  '/project_work/story_type/task2.jpg.jpeg',
];

export const StoryShowcaseModal: React.FC<StoryShowcaseModalProps> = ({
  isOpen,
  onClose,
  triggerRect,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const [activeImage, setActiveImage] = useState<string | null>(null);

  // Mouse hover preview tracking (Clement Grellier style: clientX / 3, clientY)
  const previewRef = useRef<HTMLDivElement>(null);
  const [hoveredImage, setHoveredImage] = useState<string | null>(null);
  const mousePos = useRef({ x: 0, y: 0 });
  const previewPos = useRef({ x: 0, y: 0 });
  const animFrameId = useRef<number | null>(null);

  // Smooth mouse follow loop
  useEffect(() => {
    if (!isOpen) return;

    const onMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
    };

    const updatePreview = () => {
      // Damped horizontal translation: clientX / 3 + vertical clientY
      previewPos.current.x += (mousePos.current.x / 3 - previewPos.current.x) * 0.15;
      previewPos.current.y += (mousePos.current.y - previewPos.current.y) * 0.15;

      if (previewRef.current) {
        previewRef.current.style.transform = `translate3d(${previewPos.current.x}px, ${previewPos.current.y}px, 0)`;
      }

      animFrameId.current = requestAnimationFrame(updatePreview);
    };

    window.addEventListener('mousemove', onMouseMove);
    animFrameId.current = requestAnimationFrame(updatePreview);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      if (animFrameId.current) cancelAnimationFrame(animFrameId.current);
    };
  }, [isOpen]);

  // Handle escape & lock scroll
  useEffect(() => {
    if (!isOpen) {
      setActiveImage(null);
      return;
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (activeImage) {
          setActiveImage(null);
        } else {
          handleClose();
        }
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, activeImage]);

  // Entrance shared-element zoom animation from trigger card
  useLayoutEffect(() => {
    if (!isOpen || !containerRef.current) return;

    const container = containerRef.current;
    const cards = gridRef.current?.querySelectorAll('.clement-card');

    if (triggerRect) {
      const startX = triggerRect.left - (window.innerWidth - container.offsetWidth) / 2;
      const startY = triggerRect.top - (window.innerHeight - container.offsetHeight) / 2;
      const scaleX = triggerRect.width / container.offsetWidth;
      const scaleY = triggerRect.height / container.offsetHeight;

      gsap.fromTo(
        container,
        {
          x: startX,
          y: startY,
          scaleX,
          scaleY,
          opacity: 0.6,
          borderRadius: '16px',
        },
        {
          x: 0,
          y: 0,
          scaleX: 1,
          scaleY: 1,
          opacity: 1,
          borderRadius: '24px',
          duration: 0.65,
          ease: 'power3.inOut',
        }
      );
    } else {
      gsap.fromTo(
        container,
        { scale: 0.88, opacity: 0, y: 30 },
        { scale: 1, opacity: 1, y: 0, duration: 0.5, ease: 'power3.out' }
      );
    }

    // Scrub/Stagger in the poster cards with Clement Grellier blur-up
    if (cards && cards.length > 0) {
      gsap.fromTo(
        cards,
        { opacity: 0, y: 40, filter: 'blur(12px)', scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
          scale: 1,
          stagger: 0.04,
          duration: 0.6,
          delay: 0.2,
          ease: 'power3.out',
        }
      );
    }
  }, [isOpen, triggerRect]);

  const handleClose = () => {
    if (!containerRef.current || !modalRef.current) {
      onClose();
      return;
    }

    const container = containerRef.current;
    const modal = modalRef.current;

    gsap.to(container, {
      scale: 0.85,
      opacity: 0,
      y: 20,
      filter: 'blur(10px)',
      duration: 0.35,
      ease: 'power2.in',
    });

    gsap.to(modal, {
      opacity: 0,
      duration: 0.35,
      ease: 'power2.in',
      onComplete: onClose,
    });
  };

  const handleCardClick = (src: string) => {
    setActiveImage(src);
  };

  if (!isOpen) return null;

  return (
    <div
      ref={modalRef}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 backdrop-blur-xl p-3 sm:p-6 select-none"
      onClick={handleClose}
    >
      {/* Clement Grellier Floating Cursor Preview (desktop) */}
      {hoveredImage && !activeImage && (
        <div
          ref={previewRef}
          className="hidden lg:block fixed top-0 left-0 pointer-events-none z-[120] w-64 h-80 rounded-xl overflow-hidden shadow-2xl border border-white/20 will-change-transform transition-opacity duration-300"
          style={{ opacity: hoveredImage ? 0.9 : 0 }}
        >
          <img
            src={hoveredImage}
            alt=""
            className="w-full h-full object-cover scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        </div>
      )}

      {/* 70% Clement Grellier Work Showcase Canvas */}
      <div
        ref={containerRef}
        className="relative w-[95vw] md:w-[72vw] h-[88vh] md:h-[72vh] bg-[#0b0c10] border border-white/10 rounded-2xl sm:rounded-3xl shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] overflow-hidden flex flex-col will-change-transform"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Floating Top Bar with Grellier Nested Letter Roll Header + Icons */}
        <div className="relative z-30 flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#0b0c10]/80 backdrop-blur-md">
          {/* Rolling Multiple Text Header */}
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-white animate-pulse" />
            <div className="title-multiple flex items-center overflow-hidden h-6 font-mono text-xs uppercase tracking-widest text-white/90 font-bold">
              <span className="inline-block transform transition-transform duration-500 hover:-translate-y-full cursor-default">
                <span className="block text-white">WORKS GALLERY</span>
                <span className="block text-white/50">ARCHIVE 01—14</span>
              </span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-2">
            {activeImage && (
              <button
                onClick={() => setActiveImage(null)}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-md transition-all cursor-pointer hover:scale-110 active:scale-95"
                aria-label="Back to grid"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>
            )}
            <button
              onClick={handleClose}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-md transition-all cursor-pointer hover:scale-110 active:scale-95"
              aria-label="Close"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Modal Body: Clement Grellier Work Showcase */}
        {activeImage ? (
          /* Single Expanded Case View */
          <div
            className="w-full h-full flex items-center justify-center p-4 sm:p-8 cursor-zoom-out select-none bg-black/40"
            onClick={() => setActiveImage(null)}
          >
            <div className="relative max-w-full max-h-full rounded-2xl overflow-hidden shadow-2xl border border-white/15 animate-in fade-in zoom-in-95 duration-300">
              <img
                src={activeImage}
                alt=""
                className="max-w-[85vw] md:max-w-[65vw] max-h-[75vh] md:max-h-[60vh] object-contain rounded-xl"
              />
            </div>
          </div>
        ) : (
          /* Posters Grid with Clement Grellier Card Interaction */
          <div
            ref={gridRef}
            className="w-full h-full overflow-y-auto p-4 sm:p-6 scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent"
          >
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-5">
              {STORY_IMAGES.map((src, index) => {
                const itemNum = index < 9 ? `0${index + 1}` : `${index + 1}`;
                return (
                  <div
                    key={index}
                    onClick={() => handleCardClick(src)}
                    onMouseEnter={() => setHoveredImage(src)}
                    onMouseLeave={() => setHoveredImage(null)}
                    className="clement-card group relative aspect-[9/16] sm:aspect-[4/5] rounded-xl overflow-hidden bg-white/5 border border-white/10 shadow-lg cursor-pointer transition-all duration-500 ease-out hover:border-white/40 hover:shadow-2xl hover:scale-[1.02]"
                  >
                    {/* Background poster image with Clement scale effect */}
                    <img
                      src={src}
                      alt=""
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.15,0.9,0.34,0.95)] group-hover:scale-110"
                    />

                    {/* Dark gradient overlay (fades in on hover) */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-40 group-hover:opacity-70 transition-opacity duration-500 pointer-events-none" />

                    {/* Card Label revealing with blur-to-sharp like Clement Grellier */}
                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white font-mono text-[10px] tracking-wider uppercase opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 filter blur-[4px] group-hover:blur-none pointer-events-none">
                      <span className="font-bold bg-white/20 backdrop-blur-md px-2 py-0.5 rounded">
                        ITEM // {itemNum}
                      </span>
                      <span className="text-white/70">VIEW ↗</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
