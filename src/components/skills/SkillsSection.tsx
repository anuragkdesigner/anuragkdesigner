import React, { useState } from 'react';
import { SKILLS } from '../../data/skills';
import { SkillCategory, SkillItem } from '../../types/portfolio';
import { Badge } from '../common/Badge';
import { ThumbsUp, Check } from 'lucide-react';

export const SkillsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<'All' | SkillCategory>('All');
  
  // Track dynamic endorsement counts and endorsed status per skill
  const [endorsements, setEndorsements] = useState<Record<string, { count: number; endorsed: boolean }>>(() => {
    const initial: Record<string, { count: number; endorsed: boolean }> = {};
    SKILLS.forEach((s) => {
      initial[s.id] = { count: s.initialEndorsements, endorsed: false };
    });
    return initial;
  });

  const handleEndorse = (id: string) => {
    setEndorsements((prev) => {
      const current = prev[id];
      const isEndorsed = current.endorsed;
      return {
        ...prev,
        [id]: {
          count: isEndorsed ? current.count - 1 : current.count + 1,
          endorsed: !isEndorsed,
        },
      };
    });
  };

  const filteredSkills = selectedCategory === 'All'
    ? SKILLS
    : SKILLS.filter((s) => s.category === selectedCategory);

  const categories: ('All' | SkillCategory)[] = [
    'All',
    'Industry Knowledge',
    'Tools & Technologies'
  ];

  // Animated Visual Renderers for each skill
  const renderSkillVisual = (type: SkillItem['visualType']) => {
    switch (type) {
      case 'graphic':
        return (
          <div className="relative w-full h-32 bg-canvas-subtle border-b border-stroke flex items-center justify-center overflow-hidden">
            <svg viewBox="0 0 240 120" className="w-full h-full">
              {/* Layout grid lines */}
              <line x1="20" y1="20" x2="220" y2="20" stroke="#DDDBD2" strokeWidth="1" strokeDasharray="2 2" />
              <line x1="20" y1="60" x2="220" y2="60" stroke="#DDDBD2" strokeWidth="1" strokeDasharray="2 2" />
              <line x1="20" y1="100" x2="220" y2="100" stroke="#DDDBD2" strokeWidth="1" strokeDasharray="2 2" />
              
              {/* Typographic bounding boxes with animation */}
              <rect x="35" y="30" width="70" height="60" rx="3" fill="#FFFFFF" stroke="#17191C" strokeWidth="1.5" className="animate-pulse" />
              <text x="45" y="55" fontFamily="sans-serif" fontSize="16" fontWeight="bold" fill="#17191C">Aa</text>
              <line x1="45" y1="68" x2="90" y2="68" stroke="#C0532E" strokeWidth="2" />
              <line x1="45" y1="76" x2="80" y2="76" stroke="#DDDBD2" strokeWidth="1.5" />

              {/* Composition block */}
              <rect x="120" y="30" width="85" height="28" rx="2" fill="#17191C" />
              <text x="130" y="48" fontFamily="monospace" fontSize="8" fill="#FBFBF9">HERO HEADING</text>
              <rect x="120" y="66" width="85" height="24" rx="2" fill="#FFFFFF" stroke="#C0532E" strokeWidth="1" />
              <text x="130" y="81" fontFamily="monospace" fontSize="7" fill="#C0532E">GOLDEN RATIO</text>
            </svg>
          </div>
        );

      case 'motion':
        return (
          <div className="relative w-full h-32 bg-[#17191C] border-b border-stroke flex items-center justify-center overflow-hidden">
            <svg viewBox="0 0 240 120" className="w-full h-full">
              {/* Dynamic kinetic motion path */}
              <path d="M 20 80 Q 70 10, 120 70 T 220 30" fill="none" stroke="#C0532E" strokeWidth="2.5" />
              <circle cx="120" cy="70" r="5" fill="#FFDB58" className="animate-ping" style={{ animationDuration: '2s' }} />
              <circle cx="120" cy="70" r="4" fill="#FFDB58" />
              
              {/* Kinetic typography bounce markers */}
              <rect x="30" y="25" width="45" height="18" rx="2" fill="#1F2328" stroke="#383F47" />
              <text x="36" y="37" fontFamily="monospace" fontSize="7" fill="#FFFFFF">KINETIC</text>

              <rect x="145" y="75" width="55" height="18" rx="2" fill="#1F2328" stroke="#C0532E" />
              <text x="152" y="87" fontFamily="monospace" fontSize="7" fill="#FFDB58">60 FPS</text>
            </svg>
          </div>
        );

      case 'video':
        return (
          <div className="relative w-full h-32 bg-canvas-subtle border-b border-stroke flex items-center justify-center overflow-hidden">
            <svg viewBox="0 0 240 120" className="w-full h-full">
              {/* Camera viewfinder frame */}
              <rect x="25" y="15" width="190" height="90" rx="4" fill="#FFFFFF" stroke="#17191C" strokeWidth="1.5" />
              
              {/* Viewfinder corner brackets */}
              <path d="M 35 25 L 45 25 M 35 25 L 35 35" fill="none" stroke="#C0532E" strokeWidth="1.5" />
              <path d="M 205 25 L 195 25 M 205 25 L 205 35" fill="none" stroke="#C0532E" strokeWidth="1.5" />
              <path d="M 35 95 L 45 95 M 35 95 L 35 85" fill="none" stroke="#C0532E" strokeWidth="1.5" />
              <path d="M 205 95 L 195 95 M 205 95 L 205 85" fill="none" stroke="#C0532E" strokeWidth="1.5" />

              {/* Center focus reticle */}
              <circle cx="120" cy="60" r="16" fill="none" stroke="#B46C1E" strokeWidth="1" strokeDasharray="3 3" />
              <circle cx="120" cy="60" r="3" fill="#B46C1E" />

              {/* Rec indicator */}
              <circle cx="48" cy="35" r="3" fill="#C0532E" className="animate-pulse" />
              <text x="56" y="38" fontFamily="monospace" fontSize="8" fontWeight="bold" fill="#C0532E">REC [4K 24P]</text>
              <text x="155" y="38" fontFamily="monospace" fontSize="8" fill="#767E87">ISO 400</text>
            </svg>
          </div>
        );

      case 'video-editing':
        return (
          <div className="relative w-full h-32 bg-[#17191C] border-b border-stroke flex items-center justify-center overflow-hidden">
            <svg viewBox="0 0 240 120" className="w-full h-full">
              {/* NLE Timeline Tracks */}
              <rect x="20" y="20" width="200" height="80" rx="3" fill="#1F2328" stroke="#383F47" />
              
              {/* Video Track 1 */}
              <rect x="28" y="30" width="70" height="22" rx="2" fill="#3B6B55" />
              <text x="34" y="44" fontFamily="monospace" fontSize="7" fill="#FFFFFF">A-ROLL_SCENE</text>

              <rect x="104" y="30" width="105" height="22" rx="2" fill="#1E4750" />
              <text x="110" y="44" fontFamily="monospace" fontSize="7" fill="#48E592">B-ROLL_CUT_02</text>

              {/* Audio Wave Track */}
              <rect x="28" y="60" width="181" height="20" rx="2" fill="#17191C" />
              <path d="M 32 70 Q 40 64 48 70 T 64 70 T 80 70 T 96 70 T 112 70 T 128 70 T 144 70 T 160 70 T 176 70 T 192 70 T 205 70" fill="none" stroke="#C0532E" strokeWidth="1.5" />

              {/* Playhead cut line */}
              <line x1="101" y1="20" x2="101" y2="100" stroke="#FFDB58" strokeWidth="1.5" />
              <polygon points="98,20 104,20 101,26" fill="#FFDB58" />
            </svg>
          </div>
        );

      case 'after-effects':
        return (
          <div className="relative w-full h-32 bg-[#141526] border-b border-stroke flex items-center justify-center overflow-hidden">
            <svg viewBox="0 0 240 120" className="w-full h-full">
              {/* AE Badge */}
              <rect x="25" y="20" width="36" height="36" rx="6" fill="#00005B" stroke="#9999FF" strokeWidth="1" />
              <text x="32" y="44" fontFamily="sans-serif" fontSize="18" fontWeight="bold" fill="#9999FF">Ae</text>

              {/* Keyframe Graph Editor */}
              <path d="M 75 80 C 105 80, 115 25, 175 25" fill="none" stroke="#9999FF" strokeWidth="2" />
              
              {/* Keyframe Diamonds */}
              <polygon points="72,80 75,76 78,80 75,84" fill="#FFDB58" />
              <polygon points="172,25 175,21 178,25 175,29" fill="#FFDB58" />

              {/* Velocity Handles */}
              <line x1="75" y1="80" x2="105" y2="80" stroke="#9999FF" strokeWidth="1" strokeDasharray="2 2" />
              <circle cx="105" cy="80" r="3" fill="#FFFFFF" />

              <text x="80" y="105" fontFamily="monospace" fontSize="8" fill="#9999FF">Cubic-Bezier Easing</text>
            </svg>
          </div>
        );

      case 'photoshop':
        return (
          <div className="relative w-full h-32 bg-[#001D26] border-b border-stroke flex items-center justify-center overflow-hidden">
            <svg viewBox="0 0 240 120" className="w-full h-full">
              {/* Ps Badge */}
              <rect x="25" y="20" width="36" height="36" rx="6" fill="#001E36" stroke="#31A8FF" strokeWidth="1" />
              <text x="32" y="44" fontFamily="sans-serif" fontSize="18" fontWeight="bold" fill="#31A8FF">Ps</text>

              {/* Layer Stack Visual */}
              <rect x="80" y="25" width="130" height="20" rx="3" fill="#003152" stroke="#31A8FF" strokeWidth="1" />
              <text x="90" y="38" fontFamily="monospace" fontSize="8" fill="#FFFFFF">Adjustment: Curves</text>

              <rect x="80" y="52" width="130" height="20" rx="3" fill="#00223A" stroke="#383F47" strokeWidth="1" />
              <text x="90" y="65" fontFamily="monospace" fontSize="8" fill="#9EA7B4">Layer: Retouch & Masks</text>

              <rect x="80" y="79" width="130" height="20" rx="3" fill="#001829" stroke="#383F47" strokeWidth="1" />
              <text x="90" y="92" fontFamily="monospace" fontSize="8" fill="#767E87">Background (16-bit)</text>
            </svg>
          </div>
        );

      case 'illustrator':
        return (
          <div className="relative w-full h-32 bg-[#261300] border-b border-stroke flex items-center justify-center overflow-hidden">
            <svg viewBox="0 0 240 120" className="w-full h-full">
              {/* Ai Badge */}
              <rect x="25" y="20" width="36" height="36" rx="6" fill="#330000" stroke="#FF9A00" strokeWidth="1" />
              <text x="34" y="44" fontFamily="sans-serif" fontSize="18" fontWeight="bold" fill="#FF9A00">Ai</text>

              {/* Bezier Pen Vector Curve with Tangents */}
              <path d="M 80 85 C 110 20, 160 20, 195 85" fill="none" stroke="#FF9A00" strokeWidth="2" />
              
              {/* Anchor points */}
              <rect x="77" y="82" width="6" height="6" fill="#FFFFFF" stroke="#17191C" />
              <rect x="192" y="82" width="6" height="6" fill="#FFFFFF" stroke="#17191C" />

              {/* Tangent control handles */}
              <circle cx="110" cy="20" r="3" fill="#FFDB58" />
              <line x1="80" y1="85" x2="110" y2="20" stroke="#FF9A00" strokeWidth="1" strokeDasharray="2 2" />

              <circle cx="160" cy="20" r="3" fill="#FFDB58" />
              <line x1="195" y1="85" x2="160" y2="20" stroke="#FF9A00" strokeWidth="1" strokeDasharray="2 2" />

              <text x="100" y="105" fontFamily="monospace" fontSize="8" fill="#FF9A00">Vector Bezier Precision</text>
            </svg>
          </div>
        );

      case 'premiere-pro':
        return (
          <div className="relative w-full h-32 bg-[#1A0022] border-b border-stroke flex items-center justify-center overflow-hidden">
            <svg viewBox="0 0 240 120" className="w-full h-full">
              {/* Pr Badge */}
              <rect x="25" y="20" width="36" height="36" rx="6" fill="#330033" stroke="#EA77FF" strokeWidth="1" />
              <text x="33" y="44" fontFamily="sans-serif" fontSize="18" fontWeight="bold" fill="#EA77FF">Pr</text>

              {/* Multi-Track NLE Video Timeline */}
              <rect x="75" y="22" width="140" height="20" rx="3" fill="#5C2D91" />
              <text x="85" y="35" fontFamily="monospace" fontSize="7" fill="#FFFFFF">V1: MAIN_SEQUENCE_4K</text>

              <rect x="75" y="46" width="60" height="18" rx="2" fill="#8944AB" />
              <text x="82" y="58" fontFamily="monospace" fontSize="7" fill="#FFFFFF">V2: B-ROLL</text>

              <rect x="140" y="46" width="75" height="18" rx="2" fill="#D9534F" />
              <text x="146" y="58" fontFamily="monospace" fontSize="7" fill="#FFFFFF">TITLES_OVERLAY</text>

              <rect x="75" y="68" width="140" height="16" rx="2" fill="#17191C" />
              <path d="M 80 76 Q 90 70 100 76 T 120 76 T 140 76 T 160 76 T 180 76 T 200 76" fill="none" stroke="#EA77FF" strokeWidth="1.5" />

              {/* Playhead */}
              <line x1="135" y1="18" x2="135" y2="92" stroke="#FFDB58" strokeWidth="1.5" />
              <polygon points="132,18 138,18 135,24" fill="#FFDB58" />

              <text x="75" y="105" fontFamily="monospace" fontSize="8" fill="#EA77FF">Lumetri Color & Multi-Track</text>
            </svg>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section id="skills" className="py-20 border-b border-stroke bg-canvas">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-studio-rust" />
              <span className="text-xs font-mono uppercase tracking-wider text-studio-rust font-semibold">
                Skills & Endorsements
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-ink">
              Industry Knowledge, Tools & Technologies
            </h2>
          </div>

          <p className="text-sm text-ink-secondary max-w-md">
            Verified technical proficiencies across agency production at Haris&Co. and tech product visual systems at BufferBytes Technologies.
          </p>
        </div>

        {/* Category Tabs: All, Industry Knowledge, Tools & Technologies */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-4 border-b border-stroke">
          {categories.map((cat) => {
            const count = cat === 'All' 
              ? SKILLS.length 
              : SKILLS.filter((s) => s.category === cat).length;
            const isSelected = selectedCategory === cat;

            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`py-2 px-4 rounded text-xs font-mono transition-all flex items-center gap-2 ${
                  isSelected
                    ? 'bg-ink text-canvas font-semibold shadow-sm'
                    : 'bg-canvas-subtle text-ink-secondary hover:text-ink hover:bg-stroke-subtle border border-stroke'
                }`}
              >
                <span>{cat}</span>
                <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                  isSelected ? 'bg-canvas/20 text-canvas' : 'bg-stroke text-ink-tertiary'
                }`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill) => {
            const currentEndorsement = endorsements[skill.id] || { count: skill.initialEndorsements, endorsed: false };

            return (
              <div
                key={skill.id}
                className="group bg-canvas-card border border-stroke rounded-xl overflow-hidden hover:border-stroke-strong transition-all flex flex-col justify-between shadow-xs"
              >
                <div>
                  {/* Animated Visual Canvas */}
                  {renderSkillVisual(skill.visualType)}

                  <div className="p-5 space-y-4">
                    {/* Header Row */}
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <span className="text-[10px] font-mono uppercase tracking-wider text-ink-tertiary block mb-1">
                          {skill.category}
                        </span>
                        <h3 className="text-lg font-semibold tracking-tight text-ink group-hover:text-studio-rust transition-colors">
                          {skill.name}
                        </h3>
                      </div>

                      <Badge variant="subtle" className="text-[10px]">
                        {skill.proficiencyLevel}
                      </Badge>
                    </div>

                    {/* Associated Role Tag */}
                    {skill.associatedRole && (
                      <div className="p-2.5 rounded bg-canvas-subtle border border-stroke text-xs text-ink-secondary flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-studio-rust flex-shrink-0" />
                        <span className="truncate font-mono text-[11px]">{skill.associatedRole}</span>
                      </div>
                    )}

                    {/* Description */}
                    <p className="text-xs text-ink-secondary leading-relaxed">
                      {skill.description}
                    </p>
                  </div>
                </div>

                {/* Card Action Footer: Interactive Endorsement */}
                <div className="p-5 pt-0 border-t border-stroke mt-3 pt-4 flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-xs font-mono text-ink-tertiary">
                    <span className="font-bold text-ink text-sm">{currentEndorsement.count}</span>
                    <span>endorsements</span>
                  </div>

                  <button
                    onClick={() => handleEndorse(skill.id)}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-mono uppercase tracking-wider transition-all ${
                      currentEndorsement.endorsed
                        ? 'bg-studio-sage text-white font-semibold'
                        : 'border border-stroke hover:border-ink bg-canvas text-ink hover:bg-canvas-subtle'
                    }`}
                    aria-label={`Endorse ${skill.name}`}
                  >
                    {currentEndorsement.endorsed ? (
                      <>
                        <Check className="w-3.5 h-3.5" />
                        <span>Endorsed</span>
                      </>
                    ) : (
                      <>
                        <ThumbsUp className="w-3.5 h-3.5" />
                        <span>Endorse</span>
                      </>
                    )}
                  </button>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
