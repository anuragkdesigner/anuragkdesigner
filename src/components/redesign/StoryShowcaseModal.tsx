import React, { useEffect, useState } from 'react';
import { X, ArrowLeft } from 'lucide-react';

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
  const [activeImage, setActiveImage] = useState<string | null>(null);

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
          onClose();
        }
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, activeImage, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-md p-4 transition-opacity animate-in fade-in duration-200"
      onClick={onClose}
    >
      {/* 70% Sized Popup Container */}
      <div
        className="relative w-[92vw] md:w-[70vw] h-[85vh] md:h-[70vh] bg-[#0d0e12]/95 border border-white/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Control Bar (Icons only - no text) */}
        <div className="absolute top-4 right-4 z-20 flex items-center gap-2">
          {activeImage && (
            <button
              onClick={() => setActiveImage(null)}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-md transition-all cursor-pointer hover:scale-110 active:scale-95"
              aria-label="Back"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
          )}
          <button
            onClick={onClose}
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-md transition-all cursor-pointer hover:scale-110 active:scale-95"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body: Only Pictures */}
        {activeImage ? (
          <div
            className="w-full h-full flex items-center justify-center p-6 cursor-zoom-out select-none"
            onClick={() => setActiveImage(null)}
          >
            <img
              src={activeImage}
              alt=""
              className="max-w-full max-h-full object-contain rounded-xl shadow-2xl transition-transform duration-300 hover:scale-[1.02]"
            />
          </div>
        ) : (
          <div className="w-full h-full overflow-y-auto p-4 sm:p-6 sm:pt-14 scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {STORY_IMAGES.map((src, index) => (
                <div
                  key={index}
                  onClick={() => setActiveImage(src)}
                  className="group relative aspect-[9/16] sm:aspect-[4/5] rounded-xl overflow-hidden bg-white/5 border border-white/10 shadow-lg cursor-pointer transform transition-all duration-300 ease-out hover:scale-[1.04] hover:shadow-2xl hover:border-white/30 hover:z-10"
                >
                  <img
                    src={src}
                    alt=""
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
