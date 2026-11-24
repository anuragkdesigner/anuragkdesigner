import React, { useState } from 'react';
import { ThumbsUp, Check } from 'lucide-react';

interface LookbookTool {
  id: string;
  prefix: string;
  title: string;
  category: 'Industry Knowledge' | 'Tools & Technologies';
  level: string;
  desc: string;
  role: string;
  image: string;
  endorsements: number;
}

const LOOKBOOK_TOOLS: LookbookTool[] = [
  {
    id: 'graphic-design',
    prefix: 'craft',
    title: 'GRAPHIC DESIGN',
    category: 'Industry Knowledge',
    level: 'Core Discipline',
    desc: 'Spatial grid discipline, compositional balance, and print collateral.',
    role: 'BufferBytes & Haris&Co.',
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=600&q=80',
    endorsements: 14
  },
  {
    id: 'motion-graphics',
    prefix: 'motion',
    title: 'MOTION GRAPHICS',
    category: 'Industry Knowledge',
    level: 'Specialist',
    desc: 'Kinetic choreography, rhythm-driven pacing, and 60 FPS retention.',
    role: 'Haris&Co.',
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=600&q=80',
    endorsements: 12
  },
  {
    id: 'videography',
    prefix: 'visual',
    title: 'VIDEOGRAPHY',
    category: 'Industry Knowledge',
    level: 'Production',
    desc: 'Cinematic lighting, camera choreography, and visual direction.',
    role: 'Visual Strategy',
    image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=600&q=80',
    endorsements: 9
  },
  {
    id: 'video-editing',
    prefix: 'timeline',
    title: 'VIDEO EDITING',
    category: 'Industry Knowledge',
    level: 'Agency Tested',
    desc: 'Dynamic pacing, multi-track audio sync, and narrative cuts.',
    role: 'Haris&Co.',
    image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=600&q=80',
    endorsements: 11
  },
  {
    id: 'after-effects',
    prefix: 'kinetic',
    title: 'AFTER EFFECTS',
    category: 'Tools & Technologies',
    level: 'Power User',
    desc: 'Nonlinear velocity curves, expressions, and shape morphing.',
    role: 'Haris&Co.',
    image: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=600&q=80',
    endorsements: 16
  },
  {
    id: 'photoshop',
    prefix: 'raster',
    title: 'PHOTOSHOP',
    category: 'Tools & Technologies',
    level: 'Expert',
    desc: 'Pixel-level compositing, non-destructive masks, and color grades.',
    role: 'Haris&Co.',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80',
    endorsements: 18
  },
  {
    id: 'illustrator',
    prefix: 'vector',
    title: 'ILLUSTRATOR',
    category: 'Tools & Technologies',
    level: 'Expert',
    desc: 'Bezier pen precision, geometric vector marks, and SVG assets.',
    role: 'Haris&Co.',
    image: 'https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&w=600&q=80',
    endorsements: 15
  },
  {
    id: 'premiere-pro',
    prefix: 'sequence',
    title: 'PREMIERE PRO',
    category: 'Tools & Technologies',
    level: 'Expert',
    desc: 'Multi-camera cutting, Lumetri grading, and social reel exports.',
    role: 'Graphic & Video Lead',
    image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=600&q=80',
    endorsements: 14
  }
];

export const SkillsSection: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<'All' | 'Industry Knowledge' | 'Tools & Technologies'>('All');
  const [endorsedMap, setEndorsedMap] = useState<Record<string, { count: number; endorsed: boolean }>>(() => {
    const init: Record<string, { count: number; endorsed: boolean }> = {};
    LOOKBOOK_TOOLS.forEach(t => {
      init[t.id] = { count: t.endorsements, endorsed: false };
    });
    return init;
  });

  const handleEndorse = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setEndorsedMap(prev => {
      const cur = prev[id] || { count: 0, endorsed: false };
      return {
        ...prev,
        [id]: {
          count: cur.endorsed ? cur.count - 1 : cur.count + 1,
          endorsed: !cur.endorsed
        }
      };
    });
  };

  const filteredTools = selectedFilter === 'All'
    ? LOOKBOOK_TOOLS
    : LOOKBOOK_TOOLS.filter(t => t.category === selectedFilter);

  return (
    <section 
      id="skills" 
      className="relative bg-[#f9f9f8] border-t border-[#e2dfd7] select-none min-h-screen lg:h-screen lg:max-h-screen flex flex-col justify-between overflow-hidden"
    >
      <div className="max-w-site w-full mx-auto px-6 sm:px-10 h-full flex flex-col justify-between py-6 sm:py-8 lg:py-6">
        
        {/* Top Lookbook Header (Strict Minimal Height) */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-4 border-b border-[#e2dfd7] shrink-0">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="w-2 h-2 rounded-full bg-[#0d0e12] animate-pulse" />
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#0d0e12] font-bold">
                LOOKBOOK ARCHIVE · 08 CORE DISCIPLINES
              </span>
            </div>
            
            {/* Stacked Asymmetric Editorial Headline */}
            <div className="leading-none">
              <span className="font-sans font-light text-sm sm:text-base text-[#525866] lowercase tracking-widest block mb-0.5">
                tools &
              </span>
              <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl text-[#0d0e12] uppercase tracking-tight">
                INDUSTRY CRAFT.
              </h2>
            </div>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-1.5 font-mono text-[11px] self-start sm:self-end">
            <button
              onClick={() => setSelectedFilter('All')}
              className={`px-3 py-1.5 rounded uppercase tracking-wider transition-all ${
                selectedFilter === 'All'
                  ? 'bg-[#0d0e12] text-white font-bold shadow-xs'
                  : 'bg-white text-[#525866] hover:text-[#0d0e12] border border-[#e2dfd7]'
              }`}
            >
              All (08)
            </button>
            <button
              onClick={() => setSelectedFilter('Industry Knowledge')}
              className={`px-3 py-1.5 rounded uppercase tracking-wider transition-all ${
                selectedFilter === 'Industry Knowledge'
                  ? 'bg-[#0d0e12] text-white font-bold shadow-xs'
                  : 'bg-white text-[#525866] hover:text-[#0d0e12] border border-[#e2dfd7]'
              }`}
            >
              Industry (04)
            </button>
            <button
              onClick={() => setSelectedFilter('Tools & Technologies')}
              className={`px-3 py-1.5 rounded uppercase tracking-wider transition-all ${
                selectedFilter === 'Tools & Technologies'
                  ? 'bg-[#0d0e12] text-white font-bold shadow-xs'
                  : 'bg-white text-[#525866] hover:text-[#0d0e12] border border-[#e2dfd7]'
              }`}
            >
              Tools (04)
            </button>
          </div>
        </div>

        {/* 4x2 Editorial Slide Grid (Fits strictly inside 100vh on Desktop) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-3.5 my-auto py-3 max-h-[calc(100vh-175px)] overflow-y-auto lg:overflow-visible">
          {filteredTools.map((tool, idx) => {
            const current = endorsedMap[tool.id] || { count: tool.endorsements, endorsed: false };

            return (
              <div
                key={tool.id}
                className="group relative bg-white border border-[#e2dfd7] rounded-md p-3.5 sm:p-4 shadow-sm hover:shadow-xl hover:border-[#0d0e12] transition-all duration-300 flex flex-col justify-between hover:-translate-y-1"
              >
                {/* Slide Top Bar: Asymmetric Typography + Index */}
                <div className="flex items-start justify-between gap-2 border-b border-[#e2dfd7] pb-2 mb-2.5">
                  <div className="leading-tight">
                    <span className="font-sans font-light text-[10px] text-[#525866] lowercase tracking-widest block">
                      {tool.prefix}
                    </span>
                    <h3 className="font-display text-sm sm:text-base text-[#0d0e12] uppercase tracking-tight truncate">
                      {tool.title}
                    </h3>
                  </div>
                  <span className="font-mono text-[10px] text-[#858c9b] font-bold">
                    0{idx + 1}
                  </span>
                </div>

                {/* Card Middle: Split Photo & Editorial Paragraph */}
                <div className="grid grid-cols-12 gap-2.5 items-center mb-3">
                  {/* Aspect Crop Photo */}
                  <div className="col-span-5 relative aspect-[4/3] rounded overflow-hidden bg-[#f2f1ed] border border-[#e2dfd7]">
                    <img
                      src={tool.image}
                      alt={tool.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
                  </div>

                  {/* Narrative details */}
                  <div className="col-span-7 space-y-1">
                    <p className="text-[11px] font-sans text-[#525866] leading-tight line-clamp-2">
                      {tool.desc}
                    </p>
                    <span className="block text-[9px] font-mono text-[#858c9b] truncate">
                      {tool.role}
                    </span>
                  </div>
                </div>

                {/* Card Bottom: Proficiency Tag & Live Endorsement Action */}
                <div className="pt-2 border-t border-[#e2dfd7] flex items-center justify-between mt-auto">
                  <span className="px-1.5 py-0.5 rounded bg-[#f1f0ec] text-[9px] font-mono uppercase tracking-wider text-[#0d0e12] border border-[#e2dfd7]">
                    {tool.level}
                  </span>

                  <button
                    onClick={(e) => handleEndorse(tool.id, e)}
                    className={`flex items-center gap-1 px-2 py-1 rounded text-[10px] font-mono uppercase transition-all ${
                      current.endorsed
                        ? 'bg-[#0d0e12] text-white font-bold shadow-xs scale-105'
                        : 'bg-[#f9f9f8] hover:bg-[#0d0e12] text-[#525866] hover:text-white border border-[#e2dfd7]'
                    }`}
                    title="Click to endorse verified craft"
                  >
                    {current.endorsed ? (
                      <Check className="w-3 h-3 text-white" />
                    ) : (
                      <ThumbsUp className="w-3 h-3" />
                    )}
                    <span>{current.count}</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Editorial Strip (Compact Folio) */}
        <div className="flex items-center justify-between text-[10px] font-mono uppercase tracking-wider text-[#858c9b] pt-3 border-t border-[#e2dfd7] shrink-0">
          <span>FIG. 01—08 · ALL 8 CORE PRODUCTION CAPABILITIES</span>
          <span className="font-bold text-[#0d0e12]">100% STUDIO TESTED · CALICUT UNIVERSITY CS ALUM</span>
        </div>

      </div>
    </section>
  );
};
