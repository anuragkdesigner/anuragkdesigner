import React from 'react';
import { Project } from '../../types/portfolio';
import { Badge } from '../common/Badge';
import { ArrowUpRight } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  onOpenDetails: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onOpenDetails }) => {
  
  // Custom bespoke SVG schematic illustration based on project id
  const renderSchematic = () => {
    switch (project.id) {
      case 'kite-health':
        return (
          <div className="relative w-full h-48 bg-canvas-subtle border-b border-stroke flex items-center justify-center p-4 overflow-hidden">
            <svg viewBox="0 0 400 180" className="w-full h-full text-ink">
              {/* Tablet Outline */}
              <rect x="20" y="10" width="360" height="160" rx="8" fill="#FFFFFF" stroke="#DDDBD2" strokeWidth="1.5" />
              {/* Upper display (non-touch) */}
              <rect x="36" y="24" width="328" height="32" rx="4" fill="#F3F2ED" stroke="#E8E7E0" />
              <text x="48" y="44" fontFamily="monospace" fontSize="10" fill="#767E87">PATIENT: 14.2kg | DOPAMINE HCL</text>
              <circle cx="344" cy="40" r="4" fill="#C0532E" />
              
              {/* Ergonomic thumb reach arc */}
              <path d="M 280 170 A 110 110 0 0 0 100 170" fill="none" stroke="#C0532E" strokeWidth="1.5" strokeDasharray="3 3" />
              <text x="135" y="115" fontFamily="monospace" fontSize="9" fill="#C0532E">95% THUMB REACH ARC</text>

              {/* Stepped dial targets */}
              <circle cx="160" cy="140" r="16" fill="#FBFBF9" stroke="#17191C" strokeWidth="1.5" />
              <text x="156" y="144" fontFamily="monospace" fontSize="12" fontWeight="bold" fill="#17191C">-</text>

              <circle cx="210" cy="135" r="22" fill="#17191C" />
              <text x="201" y="139" fontFamily="monospace" fontSize="11" fill="#FBFBF9" fontWeight="bold">4.2</text>

              <circle cx="260" cy="140" r="16" fill="#FBFBF9" stroke="#17191C" strokeWidth="1.5" />
              <text x="256" y="144" fontFamily="monospace" fontSize="12" fontWeight="bold" fill="#17191C">+</text>
            </svg>
          </div>
        );

      case 'chronos-field-os':
        return (
          <div className="relative w-full h-48 bg-[#17191C] border-b border-stroke flex items-center justify-center p-4 overflow-hidden">
            <svg viewBox="0 0 400 180" className="w-full h-full">
              {/* High contrast sunlight grid */}
              <rect x="20" y="10" width="360" height="160" fill="#17191C" stroke="#FFFFFF" strokeWidth="2" />
              
              {/* 64px physical tap grid lines */}
              <line x1="20" y1="50" x2="380" y2="50" stroke="#FFFFFF" strokeWidth="1" />
              <line x1="20" y1="120" x2="380" y2="120" stroke="#FFFFFF" strokeWidth="1" />
              <line x1="200" y1="50" x2="200" y2="170" stroke="#FFFFFF" strokeWidth="1" />

              {/* High contrast ISO warning */}
              <polygon points="40,25 50,42 30,42" fill="#FFDB58" />
              <text x="60" y="38" fontFamily="monospace" fontSize="11" fontWeight="bold" fill="#FFFFFF">HIGH-VOLTAGE SUBSTATION 44kV</text>

              {/* Glove Target A */}
              <rect x="36" y="62" width="148" height="46" fill="#FFFFFF" rx="2" />
              <text x="50" y="88" fontFamily="monospace" fontSize="11" fontWeight="bold" fill="#17191C">PASS INSPECTION</text>
              <text x="50" y="101" fontFamily="monospace" fontSize="8" fill="#4D535A">MIN 64px GLOVE TARGET</text>

              {/* Glove Target B */}
              <rect x="216" y="62" width="148" height="46" fill="none" stroke="#FFDB58" strokeWidth="2" rx="2" />
              <text x="230" y="88" fontFamily="monospace" fontSize="11" fontWeight="bold" fill="#FFDB58">LOG FAULT (BLE)</text>
              <text x="230" y="101" fontFamily="monospace" fontSize="8" fill="#FFFFFF">OFFLINE BUFFERED</text>
            </svg>
          </div>
        );

      case 'relay-design-system':
        return (
          <div className="relative w-full h-48 bg-canvas-subtle border-b border-stroke flex items-center justify-center p-4 overflow-hidden">
            <svg viewBox="0 0 400 180" className="w-full h-full">
              {/* Token architecture tree */}
              {/* Tier 1: Global */}
              <rect x="30" y="25" width="90" height="34" rx="3" fill="#FFFFFF" stroke="#DDDBD2" strokeWidth="1" />
              <text x="40" y="42" fontFamily="monospace" fontSize="9" fontWeight="bold" fill="#17191C">global.blue.600</text>
              <text x="40" y="52" fontFamily="monospace" fontSize="8" fill="#767E87">#1D4ED8</text>

              {/* Tier 2: Semantic */}
              <line x1="120" y1="42" x2="160" y2="42" stroke="#B46C1E" strokeWidth="1.5" />
              <rect x="160" y="25" width="105" height="34" rx="3" fill="#FDF8F0" stroke="#B46C1E" strokeWidth="1" />
              <text x="170" y="42" fontFamily="monospace" fontSize="9" fontWeight="bold" fill="#B46C1E">color.action.primary</text>
              <text x="170" y="52" fontFamily="monospace" fontSize="8" fill="#767E87">Alias of global</text>

              {/* Tier 3: Component */}
              <line x1="265" y1="42" x2="295" y2="42" stroke="#B46C1E" strokeWidth="1.5" />
              <rect x="295" y="20" width="85" height="44" rx="4" fill="#17191C" />
              <text x="305" y="40" fontFamily="monospace" fontSize="9" fontWeight="bold" fill="#FBFBF9">Button.solid</text>
              <text x="305" y="54" fontFamily="monospace" fontSize="8" fill="#DDDBD2">WCAG 2.2 AAA</text>

              {/* Code token snippet */}
              <rect x="30" y="80" width="345" height="75" rx="4" fill="#FFFFFF" stroke="#E8E7E0" />
              <text x="42" y="100" fontFamily="monospace" fontSize="9" fill="#17191C">export const tokens = &#123;</text>
              <text x="56" y="116" fontFamily="monospace" fontSize="9" fill="#B46C1E">  density: &#123; compact: '32px', balanced: '44px' &#125;,</text>
              <text x="56" y="132" fontFamily="monospace" fontSize="9" fill="#4D535A">  surface: &#123; base: 'var(--canvas)', border: 'var(--stroke)' &#125;</text>
              <text x="42" y="146" fontFamily="monospace" fontSize="9" fill="#17191C">&#125; as const;</text>
            </svg>
          </div>
        );

      case 'aura-sound-studio':
        return (
          <div className="relative w-full h-48 bg-[#14181B] border-b border-stroke flex items-center justify-center p-4 overflow-hidden">
            <svg viewBox="0 0 400 180" className="w-full h-full">
              {/* Polar coordinate grid */}
              <circle cx="200" cy="90" r="75" fill="none" stroke="#252F38" strokeWidth="1" />
              <circle cx="200" cy="90" r="50" fill="none" stroke="#252F38" strokeWidth="1" />
              <circle cx="200" cy="90" r="25" fill="none" stroke="#252F38" strokeWidth="1" />
              <line x1="200" y1="15" x2="200" y2="165" stroke="#252F38" strokeWidth="1" />
              <line x1="125" y1="90" x2="275" y2="90" stroke="#252F38" strokeWidth="1" />

              {/* Center Listener */}
              <circle cx="200" cy="90" r="5" fill="#FFFFFF" />
              <text x="208" y="88" fontFamily="monospace" fontSize="8" fill="#767E87">SWEET SPOT</text>

              {/* Audio Node 1 */}
              <circle cx="240" cy="60" r="8" fill="#3B6B55" />
              <text x="252" y="64" fontFamily="monospace" fontSize="9" fill="#48E592" fontWeight="bold">VOX-LEAD (CH 01)</text>

              {/* Bezier wave propagation */}
              <path d="M 240 60 Q 210 75 200 90" fill="none" stroke="#3B6B55" strokeWidth="1.5" strokeDasharray="2 2" />

              {/* Node 2 */}
              <circle cx="150" cy="120" r="6" fill="#1E4750" stroke="#48E592" strokeWidth="1" />
              <text x="75" y="125" fontFamily="monospace" fontSize="9" fill="#9EA7B4">STRINGS L/R</text>
            </svg>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <article className="group bg-canvas-card border border-stroke rounded-xl overflow-hidden hover:border-stroke-strong transition-all flex flex-col justify-between">
      <div>
        {/* Schematic Viewport */}
        {renderSchematic()}

        <div className="p-6 sm:p-7">
          
          {/* Metadata Row */}
          <div className="flex items-center justify-between gap-4 mb-3">
            <div className="flex items-center gap-2">
              <Badge variant="accent">{project.category}</Badge>
              <span className="text-xs font-mono text-ink-tertiary">{project.year}</span>
            </div>
            <span className="text-xs font-mono text-ink-secondary">{project.client}</span>
          </div>

          {/* Title & Tagline */}
          <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-ink mb-2 group-hover:text-studio-rust transition-colors">
            {project.title}
          </h3>
          <p className="text-sm text-ink-secondary leading-relaxed mb-6">
            {project.tagline}
          </p>

          {/* Ergonomic Constraint Highlight */}
          <div className="p-3.5 bg-canvas-subtle rounded border border-stroke text-xs space-y-1 mb-6">
            <span className="font-mono text-ink-tertiary block uppercase tracking-wider text-[10px]">
              Ergonomic Condition
            </span>
            <p className="text-ink-secondary font-medium">
              {project.ergonomicConstraint}
            </p>
          </div>

          {/* Real Metrics Row */}
          <div className="grid grid-cols-2 gap-3 pt-4 border-t border-stroke">
            {project.outcomes.slice(0, 2).map((item, idx) => (
              <div key={idx}>
                <div className="font-mono text-base font-bold text-ink">
                  {item.metric}
                </div>
                <div className="text-[11px] text-ink-tertiary truncate" title={item.context}>
                  {item.context}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* Card Action Footer */}
      <div className="p-6 pt-0">
        <button
          onClick={() => onOpenDetails(project)}
          className="w-full flex items-center justify-between py-2.5 px-4 rounded border border-stroke hover:border-ink bg-canvas hover:bg-ink hover:text-canvas text-xs font-mono uppercase tracking-wider text-ink transition-colors"
        >
          <span>Deep Dive Case Study</span>
          <ArrowUpRight className="w-4 h-4" />
        </button>
      </div>
    </article>
  );
};
