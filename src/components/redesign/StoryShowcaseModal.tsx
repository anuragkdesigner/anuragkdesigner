import React, { useEffect, useState, useRef, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight, Grid, Layers, ArrowLeft } from 'lucide-react';

interface StoryShowcaseModalProps {
  isOpen: boolean;
  onClose: () => void;
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

export const StoryShowcaseModal: React.FC<StoryShowcaseModalProps> = ({ isOpen, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [viewMode, setViewMode] = useState<'coverflow' | 'grid'>('coverflow');
  const [zoomedImage, setZoomedImage] = useState<string | null>(null);

  const dragStartX = useRef<number | null>(null);
  const isDragging = useRef(false);
  const total = STORY_IMAGES.length;

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % total);
  }, [total]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  // Keyboard navigation & body scroll lock
  useEffect(() => {
    if (!isOpen) {
      setZoomedImage(null);
      return;
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (zoomedImage) {
          setZoomedImage(null);
        } else {
          onClose();
        }
      } else if (e.key === 'ArrowRight') {
        nextSlide();
      } else if (e.key === 'ArrowLeft') {
        prevSlide();
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, zoomedImage, nextSlide, prevSlide, onClose]);

  // Wheel navigation with debounce
  const lastWheelTime = useRef(0);
  const handleWheel = (e: React.WheelEvent) => {
    if (viewMode !== 'coverflow' || zoomedImage) return;
    const now = performance.now();
    if (now - lastWheelTime.current < 260) return;

    if (Math.abs(e.deltaX) > 20 || Math.abs(e.deltaY) > 20) {
      if (e.deltaX > 20 || e.deltaY > 20) {
        nextSlide();
      } else {
        prevSlide();
      }
      lastWheelTime.current = now;
    }
  };

  // Drag / Swipe handling
  const handlePointerDown = (e: React.PointerEvent) => {
    if (viewMode !== 'coverflow' || zoomedImage) return;
    dragStartX.current = e.clientX;
    isDragging.current = true;
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    if (!isDragging.current || dragStartX.current === null) return;
    const deltaX = e.clientX - dragStartX.current;
    if (Math.abs(deltaX) > 40) {
      if (deltaX < 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }
    dragStartX.current = null;
    isDragging.current = false;
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 backdrop-blur-xl p-3 sm:p-6 select-none animate-in fade-in duration-300"
      onClick={onClose}
    >
      {/* 70% Sized Popup Window */}
      <div
        className="relative w-[96vw] md:w-[70vw] h-[88vh] md:h-[72vh] bg-[#0c0d10]/95 border border-white/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col justify-between"
        onClick={(e) => e.stopPropagation()}
        onWheel={handleWheel}
        onPointerDown={handlePointerDown}
        onPointerUp={handlePointerUp}
      >
        {/* Top Control Bar with Clement Grellier blur pills */}
        <div className="absolute top-4 left-4 right-4 z-30 flex items-center justify-between pointer-events-auto">
          {/* Left: View Mode Toggle */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                if (zoomedImage) setZoomedImage(null);
                setViewMode((prev) => (prev === 'coverflow' ? 'grid' : 'coverflow'));
              }}
              className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-md transition-all cursor-pointer hover:scale-105 active:scale-95 border border-white/10"
              title={viewMode === 'coverflow' ? 'Switch to Grid' : 'Switch to 3D Coverflow'}
            >
              {viewMode === 'coverflow' ? (
                <Grid className="w-4 h-4 text-white" />
              ) : (
                <Layers className="w-4 h-4 text-white" />
              )}
            </button>
            <span className="font-mono text-[11px] uppercase tracking-widest text-white/60 hidden sm:inline">
              {viewMode === 'coverflow' ? '3D COVERFLOW' : 'POSTER GRID'}
            </span>
          </div>

          {/* Right: Close & Back Buttons */}
          <div className="flex items-center gap-2">
            {zoomedImage && (
              <button
                onClick={() => setZoomedImage(null)}
                className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-md transition-all cursor-pointer hover:scale-105 active:scale-95 border border-white/10"
                aria-label="Back"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>
            )}
            <button
              onClick={onClose}
              className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-md transition-all cursor-pointer hover:scale-105 active:scale-95 border border-white/10"
              aria-label="Close"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Modal Center Content */}
        {zoomedImage ? (
          /* Maximized Zoom View */
          <div
            className="w-full h-full flex items-center justify-center p-6 sm:p-12 cursor-zoom-out"
            onClick={() => setZoomedImage(null)}
          >
            <img
              src={zoomedImage}
              alt=""
              className="max-w-full max-h-full object-contain rounded-xl shadow-2xl transition-transform duration-500 ease-out hover:scale-[1.02]"
            />
          </div>
        ) : viewMode === 'coverflow' ? (
          /* 3D Coverflow / Cylinder Carousel (Clément Grellier Style) */
          <div className="relative w-full h-full flex items-center justify-center overflow-hidden [perspective:1200px]">
            <div className="relative w-full h-[75%] max-h-[520px] flex items-center justify-center [transform-style:preserve-3d]">
              {STORY_IMAGES.map((src, idx) => {
                // Calculate circular offset
                let offset = idx - currentIndex;
                if (offset > total / 2) offset -= total;
                if (offset < -total / 2) offset += total;

                const isCenter = offset === 0;
                const isImmediateSide = Math.abs(offset) === 1;
                const isVisible = Math.abs(offset) <= 2;

                if (!isVisible) return null;

                // 3D parameters matching clementgrellier.fr perspective transforms
                const rotateY = offset * -36;
                const translateX = offset * 210;
                const translateZ = -Math.abs(offset) * 160;
                const scale = isCenter ? 1 : isImmediateSide ? 0.86 : 0.72;
                const opacity = isCenter ? 1 : isImmediateSide ? 0.75 : 0.4;
                const blur = isCenter ? 0 : isImmediateSide ? 2 : 5;
                const zIndex = 30 - Math.abs(offset) * 10;

                return (
                  <div
                    key={idx}
                    onClick={() => {
                      if (isCenter) {
                        setZoomedImage(src);
                      } else {
                        setCurrentIndex(idx);
                      }
                    }}
                    className={`absolute top-0 bottom-0 aspect-[9/16] rounded-xl overflow-hidden cursor-pointer will-change-transform group transition-all duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] ${
                      isCenter
                        ? 'shadow-[0_30px_70px_rgba(0,0,0,0.8)] ring-1 ring-white/20'
                        : 'shadow-xl'
                    }`}
                    style={{
                      transform: `translateX(${translateX}px) translateZ(${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`,
                      opacity,
                      filter: `blur(${blur}px)`,
                      zIndex,
                    }}
                  >
                    {/* Image with Clement Grellier scale & smooth bezier */}
                    <img
                      src={src}
                      alt=""
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.15,0.9,0.34,0.95)] group-hover:scale-108"
                    />

                    {/* Darkening vignette overlay */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out pointer-events-none" />

                    {/* Subtle click indicator on center card */}
                    {isCenter && (
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none">
                        <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white font-mono text-[10px] uppercase tracking-wider scale-90 group-hover:scale-100 transition-transform">
                          Expand View
                        </span>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Left / Right Arrow Navigation Buttons */}
            <div className="absolute inset-y-0 left-4 right-4 flex items-center justify-between pointer-events-none z-30">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  prevSlide();
                }}
                className="w-11 h-11 rounded-full bg-black/60 hover:bg-white text-white hover:text-black border border-white/20 backdrop-blur-md flex items-center justify-center pointer-events-auto transition-all duration-300 hover:scale-110 active:scale-90 cursor-pointer shadow-xl"
                aria-label="Previous"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  nextSlide();
                }}
                className="w-11 h-11 rounded-full bg-black/60 hover:bg-white text-white hover:text-black border border-white/20 backdrop-blur-md flex items-center justify-center pointer-events-auto transition-all duration-300 hover:scale-110 active:scale-90 cursor-pointer shadow-xl"
                aria-label="Next"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        ) : (
          /* Grid View Mode */
          <div className="w-full h-full overflow-y-auto p-4 sm:p-8 pt-16 scrollbar-thin scrollbar-thumb-white/20">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6">
              {STORY_IMAGES.map((src, index) => (
                <div
                  key={index}
                  onClick={() => setZoomedImage(src)}
                  className="group relative aspect-[9/16] rounded-xl overflow-hidden bg-white/5 border border-white/10 shadow-lg cursor-pointer transform transition-all duration-500 ease-[cubic-bezier(0.15,0.9,0.34,0.95)] hover:scale-105 hover:shadow-2xl hover:border-white/30 hover:z-10"
                >
                  <img
                    src={src}
                    alt=""
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.15,0.9,0.34,0.95)] group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-400 ease-out pointer-events-none" />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Bottom Pagination & Index Indicator */}
        <div className="p-4 sm:p-5 flex items-center justify-between border-t border-white/10 z-20 bg-black/40 backdrop-blur-md">
          <div className="font-mono text-xs text-white/50 tracking-widest">
            <span className="text-white font-bold">
              {String(currentIndex + 1).padStart(2, '0')}
            </span>
            <span> / {String(total).padStart(2, '0')}</span>
          </div>

          {/* Dots Indicator */}
          <div className="flex items-center gap-1.5 max-w-[60%] overflow-x-auto no-scrollbar py-1">
            {STORY_IMAGES.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`h-1.5 rounded-full transition-all duration-400 cursor-pointer ${
                  i === currentIndex
                    ? 'w-6 bg-white'
                    : 'w-1.5 bg-white/20 hover:bg-white/40'
                }`}
                aria-label={`Slide ${i + 1}`}
              />
            ))}
          </div>

          <div className="font-mono text-[10px] text-white/40 uppercase tracking-widest hidden sm:block">
            DRAG · WHEEL · ARROWS
          </div>
        </div>
      </div>
    </div>
  );
};
