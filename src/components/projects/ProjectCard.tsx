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
      case 'bufferbytes-brand-system':
        return (
          <div className="relative w-full h-48 bg-canvas-subtle border-b border-stroke flex items-center justify-center p-4 overflow-hidden">
            <svg viewBox="0 0 400 180" className="w-full h-full text-ink">
              {/* Construction grid background */}
              <defs>
                <pattern id="brandGrid" width="20" height="20" patternUnits="userSpaceOnUse">
                  <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#E8E7E0" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect width="400" height="180" fill="url(#brandGrid)" />
              
              {/* Geometric Brand Logo Construction */}
              <circle cx="120" cy="90" r="45" fill="none" stroke="#C0532E" strokeWidth="1.5" strokeDasharray="3 3" />
              <rect x="95" y="65" width="50" height="50" rx="6" fill="#17191C" />
              <path d="M107 77 L133 77 L120 103 Z" fill="#FBFBF9" />
              <circle cx="120" cy="95" r="3" fill="#C0532E" />
              
              {/* Dimension lines */}
              <line x1="75" y1="65" x2="75" y2="115" stroke="#767E87" strokeWidth="1" />
              <line x1="70" y1="65" x2="80" y2="65" stroke="#767E87" strokeWidth="1" />
              <line x1="70" y1="115" x2="80" y2="115" stroke="#767E87" strokeWidth="1" />
              <text x="50" y="93" fontFamily="monospace" fontSize="8" fill="#767E87">50px</text>

              {/* Brand Typography & Color Spec */}
              <rect x="190" y="45" width="180" height="90" rx="4" fill="#FFFFFF" stroke="#DDDBD2" />
              <text x="205" y="68" fontFamily="monospace" fontSize="11" fontWeight="bold" fill="#17191C">BUFFERBYTES TECH</text>
              <text x="205" y="82" fontFamily="monospace" fontSize="8" fill="#767E87">Visual Identity & Design System</text>
              
              {/* Color swatches */}
              <circle cx="212" cy="110" r="8" fill="#17191C" />
              <circle cx="235" cy="110" r="8" fill="#C0532E" />
              <circle cx="258" cy="110" r="8" fill="#1E4750" />
              <circle cx="281" cy="110" r="8" fill="#F3F2ED" stroke="#DDDBD2" />
              <text x="300" y="114" fontFamily="monospace" fontSize="8" fill="#767E87">Hex Swatches</text>
            </svg>
          </div>
        );

      case 'haris-motion-campaigns':
        return (
          <div className="relative w-full h-48 bg-[#17191C] border-b border-stroke flex items-center justify-center p-4 overflow-hidden">
            <svg viewBox="0 0 400 180" className="w-full h-full">
              {/* After Effects Timeline UI */}
              <rect x="15" y="15" width="370" height="150" rx="4" fill="#1F2328" stroke="#383F47" strokeWidth="1" />
              
              {/* Timeline Header */}
              <rect x="15" y="15" width="370" height="24" fill="#17191C" />
              <text x="28" y="31" fontFamily="monospace" fontSize="9" fill="#9EA7B4">HARIS&CO. // AE_COMP_KINETIC_01</text>
              <text x="320" y="31" fontFamily="monospace" fontSize="9" fill="#C0532E">00:01:14:08</text>

              {/* Track 1: Kinetic Type Layer */}
              <rect x="25" y="48" width="110" height="20" rx="2" fill="#2E343E" />
              <text x="32" y="62" fontFamily="monospace" fontSize="8" fill="#FFFFFF">T [TYPOGRAPHY_HERO]</text>
              
              {/* Keyframe bezier interpolation */}
              <line x1="145" y1="58" x2="365" y2="58" stroke="#383F47" strokeWidth="1" />
              <polygon points="170,58 175,53 180,58 175,63" fill="#FFDB58" />
              <path d="M 175 58 Q 210 40 245 58" fill="none" stroke="#C0532E" strokeWidth="1.5" />
              <polygon points="245,58 250,53 255,58 250,63" fill="#FFDB58" />
              <text x="180" y="48" fontFamily="monospace" fontSize="7" fill="#FFDB58">EASE-OUT (0.85)</text>

              {/* Track 2: Video Asset & Cut */}
              <rect x="25" y="76" width="110" height="20" rx="2" fill="#2E343E" />
              <text x="32" y="90" fontFamily="monospace" fontSize="8" fill="#48E592">V [VIDEO_LAYER_01]</text>
              <rect x="145" y="78" width="160" height="16" rx="2" fill="#3B6B55" opacity="0.6" />

              {/* Track 3: Audio Waveform track */}
              <rect x="25" y="104" width="110" height="20" rx="2" fill="#2E343E" />
              <text x="32" y="118" fontFamily="monospace" fontSize="8" fill="#9EA7B4">A [AUDIO_SYNC_WAV]</text>
              <path d="M 145 114 Q 155 106 165 114 T 185 114 T 205 114 T 225 114 T 245 114 T 265 114 T 285 114 T 305 114 T 325 114 T 345 114" fill="none" stroke="#767E87" strokeWidth="1" />

              {/* Playhead */}
              <line x1="210" y1="15" x2="210" y2="165" stroke="#C0532E" strokeWidth="1.5" />
              <polygon points="205,15 215,15 210,24" fill="#C0532E" />
            </svg>
          </div>
        );

      case 'cs-digital-product-ui':
        return (
          <div className="relative w-full h-48 bg-canvas-subtle border-b border-stroke flex items-center justify-center p-4 overflow-hidden">
            <svg viewBox="0 0 400 180" className="w-full h-full">
              {/* Developer Console layout */}
              <rect x="20" y="15" width="360" height="150" rx="4" fill="#FFFFFF" stroke="#DDDBD2" strokeWidth="1" />
              
              {/* Sidebar navigation */}
              <rect x="20" y="15" width="90" height="150" fill="#F3F2ED" />
              <text x="32" y="35" fontFamily="monospace" fontSize="8" fontWeight="bold" fill="#17191C">COREFLOW</text>
              <text x="32" y="55" fontFamily="monospace" fontSize="8" fill="#C0532E">● Nodes</text>
              <text x="32" y="72" fontFamily="monospace" fontSize="8" fill="#767E87">  Logs</text>
              <text x="32" y="89" fontFamily="monospace" fontSize="8" fill="#767E87">  Telemetry</text>

              {/* Monospaced Data Grid */}
              <text x="125" y="38" fontFamily="monospace" fontSize="9" fontWeight="bold" fill="#17191C">CLUSTER HEALTH // ASIA-SOUTH-1</text>
              <line x1="120" y1="46" x2="370" y2="46" stroke="#E8E7E0" />
              
              <rect x="125" y="56" width="235" height="24" rx="2" fill="#FBFBF9" stroke="#E8E7E0" />
              <text x="135" y="71" fontFamily="monospace" fontSize="8" fill="#17191C">node-01: 99.98% OK [32ms latency]</text>
              
              <rect x="125" y="86" width="235" height="24" rx="2" fill="#FBFBF9" stroke="#E8E7E0" />
              <text x="135" y="101" fontFamily="monospace" fontSize="8" fill="#17191C">node-02: 99.94% OK [41ms latency]</text>

              {/* Status footer */}
              <rect x="125" y="122" width="70" height="18" rx="2" fill="#1E4750" />
              <text x="135" y="134" fontFamily="monospace" fontSize="7" fill="#FFFFFF">REST API 200</text>
              <rect x="205" y="122" width="80" height="18" rx="2" fill="#3B6B55" />
              <text x="215" y="134" fontFamily="monospace" fontSize="7" fill="#FFFFFF">WS CONNECTED</text>
            </svg>
          </div>
        );

      case 'kinetic-typography-lab':
        return (
          <div className="relative w-full h-48 bg-[#14181B] border-b border-stroke flex items-center justify-center p-4 overflow-hidden">
            <svg viewBox="0 0 400 180" className="w-full h-full">
              {/* Motion curve coordinate graph */}
              <line x1="40" y1="150" x2="360" y2="150" stroke="#383F47" strokeWidth="1" />
              <line x1="40" y1="30" x2="40" y2="150" stroke="#383F47" strokeWidth="1" />
              <text x="40" y="22" fontFamily="monospace" fontSize="8" fill="#9EA7B4">VALUE (PROGRESS 1.0)</text>
              <text x="310" y="165" fontFamily="monospace" fontSize="8" fill="#9EA7B4">TIME (ms)</text>

              {/* Snappy Curve (150ms) */}
              <path d="M 40 150 C 70 80, 80 50, 140 50" fill="none" stroke="#C0532E" strokeWidth="2" />
              <circle cx="140" cy="50" r="3" fill="#C0532E" />
              <text x="145" y="48" fontFamily="monospace" fontSize="8" fill="#C0532E">Snappy (150ms)</text>

              {/* Smooth Curve (300ms) */}
              <path d="M 40 150 C 100 130, 160 50, 240 50" fill="none" stroke="#48E592" strokeWidth="2" strokeDasharray="3 3" />
              <circle cx="240" cy="50" r="3" fill="#48E592" />
              <text x="245" y="65" fontFamily="monospace" fontSize="8" fill="#48E592">Smooth (300ms)</text>

              {/* Expressive Curve (500ms) */}
              <path d="M 40 150 C 140 150, 220 50, 340 50" fill="none" stroke="#FFDB58" strokeWidth="1.5" />
              <circle cx="340" cy="50" r="3" fill="#FFDB58" />
              <text x="280" y="100" fontFamily="monospace" fontSize="8" fill="#FFDB58">Hero (500ms)</text>
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
