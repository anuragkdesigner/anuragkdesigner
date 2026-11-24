import React from 'react';

export const FloatingVectorsBackground: React.FC = () => {
  return (
    <div 
      className="fixed inset-0 pointer-events-none overflow-hidden z-0 select-none opacity-80"
      aria-hidden="true"
    >
      {/* 1. Top-Left: Vector Bezier Pen Anchor & Tangent Handles */}
      <div className="absolute top-20 left-[6%] w-48 h-48 animate-vector-slow">
        <svg viewBox="0 0 160 160" fill="none" className="w-full h-full stroke-studio-rust/20">
          <path d="M 30 130 C 45 40, 115 40, 130 130" strokeWidth="1.5" />
          <line x1="30" y1="130" x2="45" y2="40" strokeWidth="1" strokeDasharray="3 3" />
          <circle cx="45" cy="40" r="3.5" fill="#C0532E" fillOpacity="0.25" stroke="#C0532E" strokeWidth="1" />
          <rect x="27" y="127" width="6" height="6" fill="#17191C" fillOpacity="0.2" />
          
          <line x1="130" y1="130" x2="115" y2="40" strokeWidth="1" strokeDasharray="3 3" />
          <circle cx="115" cy="40" r="3.5" fill="#C0532E" fillOpacity="0.25" stroke="#C0532E" strokeWidth="1" />
          <rect x="127" y="127" width="6" height="6" fill="#17191C" fillOpacity="0.2" />
        </svg>
      </div>

      {/* 2. Top-Right: Golden Ratio Framing Crop Corners & Ratio Spiral */}
      <div className="absolute top-36 right-[8%] w-56 h-56 animate-vector-reverse">
        <svg viewBox="0 0 180 180" fill="none" className="w-full h-full stroke-ink-secondary/15">
          {/* L-shaped crop corners */}
          <path d="M 20 45 L 20 20 L 45 20" strokeWidth="1.5" />
          <path d="M 160 45 L 160 20 L 135 20" strokeWidth="1.5" />
          <path d="M 20 135 L 20 160 L 45 160" strokeWidth="1.5" />
          <path d="M 160 135 L 160 160 L 135 160" strokeWidth="1.5" />
          
          {/* Subtle golden spiral arc */}
          <path d="M 50 130 A 80 80 0 0 1 130 50" strokeWidth="1" strokeDasharray="4 4" className="stroke-studio-ochre/25" />
          <circle cx="90" cy="90" r="4" fill="#B46C1E" fillOpacity="0.2" />
        </svg>
      </div>

      {/* 3. Middle-Left: After Effects Keyframe Diamonds & Velocity Track */}
      <div className="absolute top-[42%] left-[4%] w-44 h-44 animate-vector-pulse">
        <svg viewBox="0 0 150 150" fill="none" className="w-full h-full stroke-studio-petrol/20">
          <line x1="15" y1="75" x2="135" y2="75" strokeWidth="1" strokeDasharray="2 4" />
          
          {/* Keyframe Diamond 1 */}
          <polygon points="35,75 42,68 49,75 42,82" fill="#1E4750" fillOpacity="0.15" strokeWidth="1.2" />
          
          {/* Velocity curve */}
          <path d="M 42 75 Q 75 35 108 75" strokeWidth="1.5" className="stroke-studio-petrol/30" />
          
          {/* Keyframe Diamond 2 */}
          <polygon points="101,75 108,68 115,75 108,82" fill="#1E4750" fillOpacity="0.15" strokeWidth="1.2" />
        </svg>
      </div>

      {/* 4. Middle-Right: Camera Viewfinder Reticle & Audio Waveform */}
      <div className="absolute top-[52%] right-[5%] w-52 h-52 animate-vector-slow">
        <svg viewBox="0 0 160 160" fill="none" className="w-full h-full stroke-ink-secondary/15">
          {/* Aperture Reticle */}
          <circle cx="80" cy="80" r="36" strokeWidth="1" strokeDasharray="3 3" />
          <circle cx="80" cy="80" r="18" strokeWidth="1" />
          <line x1="80" y1="25" x2="80" y2="40" strokeWidth="1.2" />
          <line x1="80" y1="120" x2="80" y2="135" strokeWidth="1.2" />
          <line x1="25" y1="80" x2="40" y2="80" strokeWidth="1.2" />
          <line x1="120" y1="80" x2="135" y2="80" strokeWidth="1.2" />
          
          {/* Subtle audio blip */}
          <circle cx="80" cy="80" r="3" fill="#C0532E" fillOpacity="0.25" />
        </svg>
      </div>

      {/* 5. Bottom-Left: Isometric Graphic Cube & Axis Anchor */}
      <div className="absolute top-[75%] left-[8%] w-44 h-44 animate-vector-drift">
        <svg viewBox="0 0 140 140" fill="none" className="w-full h-full stroke-studio-sage/20">
          {/* Isometric Cube */}
          <path d="M 70 25 L 110 48 L 110 92 L 70 115 L 30 92 L 30 48 Z" strokeWidth="1.2" />
          <line x1="70" y1="25" x2="70" y2="70" strokeWidth="1.2" />
          <line x1="110" y1="48" x2="70" y2="70" strokeWidth="1.2" />
          <line x1="30" y1="48" x2="70" y2="70" strokeWidth="1.2" />
        </svg>
      </div>

      {/* 6. Bottom-Right: Geometric Alignment Crosshairs & 8pt Grid Markers */}
      <div className="absolute top-[86%] right-[10%] w-40 h-40 animate-vector-reverse">
        <svg viewBox="0 0 120 120" fill="none" className="w-full h-full stroke-ink/15">
          {/* Crosshair 1 */}
          <line x1="25" y1="20" x2="25" y2="30" strokeWidth="1.5" />
          <line x1="20" y1="25" x2="30" y2="25" strokeWidth="1.5" />

          {/* Crosshair 2 */}
          <line x1="95" y1="90" x2="95" y2="100" strokeWidth="1.5" />
          <line x1="90" y1="95" x2="100" y2="95" strokeWidth="1.5" />

          {/* Dotted link line */}
          <line x1="25" y1="25" x2="95" y2="95" strokeWidth="1" strokeDasharray="3 4" className="stroke-studio-rust/20" />
          <circle cx="60" cy="60" r="5" fill="#17191C" fillOpacity="0.1" />
        </svg>
      </div>
    </div>
  );
};
