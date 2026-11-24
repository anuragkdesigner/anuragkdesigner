import React from 'react';

export const FloatingStudioBackground: React.FC = () => {
  return (
    <div 
      className="fixed inset-0 pointer-events-none overflow-hidden z-0 select-none"
      aria-hidden="true"
    >
      {/* 1. TOP-LEFT: Cinema Camera Rig (Floating Slow) */}
      <div className="absolute top-24 left-[3%] sm:left-[5%] w-48 sm:w-60 h-40 sm:h-48 animate-float-slow opacity-25 hover:opacity-40 transition-opacity">
        <svg viewBox="0 0 200 160" fill="none" className="w-full h-full stroke-[#0d0e12]/30">
          {/* Top Handle Rig */}
          <path d="M 60 40 L 60 22 L 130 22 L 130 40" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="85" y1="22" x2="85" y2="35" strokeWidth="1.2" />
          <line x1="110" y1="22" x2="110" y2="35" strokeWidth="1.2" />
          {/* Viewfinder / Monitor */}
          <rect x="25" y="15" width="28" height="20" rx="2" strokeWidth="1.5" fill="#ffffff" fillOpacity="0.8" />
          <line x1="39" y1="35" x2="45" y2="45" strokeWidth="1.2" />
          {/* Camera Main Body */}
          <rect x="50" y="40" width="85" height="70" rx="6" strokeWidth="1.5" fill="#ffffff" fillOpacity="0.8" />
          {/* Lens Mount & Cinema Lens */}
          <path d="M 135 55 L 165 48 L 175 48 L 175 102 L 165 102 L 135 95 Z" strokeWidth="1.5" fill="#ffffff" fillOpacity="0.8" />
          <line x1="150" y1="51" x2="150" y2="99" strokeWidth="1" strokeDasharray="2 3" />
          <line x1="165" y1="48" x2="165" y2="102" strokeWidth="1.2" />
          {/* Lens Glass Elements */}
          <circle cx="175" cy="75" r="22" strokeWidth="1.2" className="stroke-[#0d0e12]/30" />
          <circle cx="175" cy="75" r="14" strokeWidth="1" strokeDasharray="3 3" className="stroke-accent-red/60" />
          {/* Side Ventilation / Audio Jack */}
          <line x1="62" y1="55" x2="80" y2="55" strokeWidth="1.2" />
          <line x1="62" y1="62" x2="80" y2="62" strokeWidth="1.2" />
          <line x1="62" y1="69" x2="80" y2="69" strokeWidth="1.2" />
          <circle cx="115" cy="85" r="8" strokeWidth="1.2" />
          {/* Blinking REC LED Tally */}
          <circle cx="120" cy="52" r="3" fill="#e0373a" className="animate-pulse" />
          {/* HUD Label */}
          <text x="60" y="100" fill="#0d0e12" fillOpacity="0.5" fontSize="7" fontFamily="monospace" letterSpacing="1">
            4K • 24FPS
          </text>
        </svg>
      </div>

      {/* 2. TOP-RIGHT: DaVinci Resolve Color Grading Wheel (Float Reverse) */}
      <div className="absolute top-28 right-[4%] sm:right-[7%] w-44 sm:w-56 h-44 sm:h-56 animate-float-reverse opacity-20">
        <svg viewBox="0 0 180 180" fill="none" className="w-full h-full stroke-[#0d0e12]/30">
          {/* Outer Wheel Notches */}
          <circle cx="90" cy="90" r="72" strokeWidth="1.2" strokeDasharray="2 6" className="stroke-[#0d0e12]/20" />
          <circle cx="90" cy="90" r="62" strokeWidth="1.5" />
          {/* Inner Tint Rings */}
          <circle cx="90" cy="90" r="40" strokeWidth="1" strokeDasharray="3 3" className="stroke-accent-red/40" />
          <circle cx="90" cy="90" r="18" strokeWidth="1" />
          {/* Balance Reticle Crosshair */}
          <line x1="90" y1="20" x2="90" y2="160" strokeWidth="0.8" strokeDasharray="3 4" className="stroke-[#0d0e12]/20" />
          <line x1="20" y1="90" x2="160" y2="90" strokeWidth="0.8" strokeDasharray="3 4" className="stroke-[#0d0e12]/20" />
          {/* Color Balance Puck (Moved off-center like active grade) */}
          <circle cx="98" cy="82" r="4.5" fill="#e0373a" fillOpacity="0.8" stroke="#ffffff" strokeWidth="1.2" />
          {/* Angle Degrees */}
          <text x="90" y="16" fill="#0d0e12" fillOpacity="0.5" fontSize="7" textAnchor="middle" fontFamily="monospace">0°</text>
          <text x="172" y="93" fill="#0d0e12" fillOpacity="0.5" fontSize="7" textAnchor="middle" fontFamily="monospace">90°</text>
          <text x="90" y="174" fill="#0d0e12" fillOpacity="0.5" fontSize="7" textAnchor="middle" fontFamily="monospace">180°</text>
          <text x="8" y="93" fill="#0d0e12" fillOpacity="0.5" fontSize="7" textAnchor="middle" fontFamily="monospace">270°</text>
          {/* Resolve Label */}
          <text x="90" y="93" fill="#0d0e12" fillOpacity="0.6" fontSize="8" textAnchor="middle" fontFamily="monospace" fontWeight="bold">
            GAMMA
          </text>
        </svg>
      </div>

      {/* 3. MIDDLE-LEFT: Photoshop Pen Tool & Tangent Vector Curve (Float Drift) */}
      <div className="absolute top-[40%] left-[2%] sm:left-[4%] w-48 sm:w-60 h-48 sm:h-60 animate-float-drift opacity-25">
        <svg viewBox="0 0 190 180" fill="none" className="w-full h-full stroke-[#0d0e12]/30">
          {/* Smooth Cubic Bezier Curve */}
          <path d="M 30 140 C 45 30, 140 40, 160 140" strokeWidth="1.8" className="stroke-[#0d0e12]/40" />
          {/* Tangent Control Lines */}
          <line x1="30" y1="140" x2="45" y2="30" strokeWidth="1" strokeDasharray="3 3" className="stroke-accent-red/60" />
          <circle cx="45" cy="30" r="4" fill="#e0373a" fillOpacity="0.5" stroke="#e0373a" strokeWidth="1.2" />
          <line x1="160" y1="140" x2="140" y2="40" strokeWidth="1" strokeDasharray="3 3" className="stroke-accent-red/60" />
          <circle cx="140" cy="40" r="4" fill="#e0373a" fillOpacity="0.5" stroke="#e0373a" strokeWidth="1.2" />
          {/* Anchor Points */}
          <rect x="26" y="136" width="8" height="8" fill="#ffffff" stroke="#0d0e12" strokeWidth="1.5" />
          <rect x="156" y="136" width="8" height="8" fill="#ffffff" stroke="#0d0e12" strokeWidth="1.5" />
          {/* Pen Tool Nib Icon Floating */}
          <g transform="translate(75, 48) rotate(-35)">
            <path d="M 0 0 L 14 18 L 8 28 L -8 28 L -14 18 Z" strokeWidth="1.3" fill="#ffffff" fillOpacity="0.9" />
            <line x1="0" y1="0" x2="0" y2="18" strokeWidth="1" />
            <circle cx="0" cy="18" r="2" fill="#e0373a" />
          </g>
          <text x="30" y="165" fill="#0d0e12" fillOpacity="0.5" fontSize="7" fontFamily="monospace">
            P // BEZIER ANCHOR
          </text>
        </svg>
      </div>

      {/* 4. MIDDLE-RIGHT: DaVinci Resolve Node Tree Graph (Float Slow) */}
      <div className="absolute top-[48%] right-[3%] sm:right-[5%] w-52 sm:w-64 h-36 sm:h-44 animate-float-slow opacity-25">
        <svg viewBox="0 0 220 140" fill="none" className="w-full h-full stroke-[#0d0e12]/30">
          {/* Input Dot */}
          <circle cx="20" cy="70" r="4" fill="#0d0e12" strokeWidth="1.2" />
          {/* Wire 1 to Node 01 */}
          <path d="M 24 70 C 45 70, 50 45, 65 45" strokeWidth="1.2" className="stroke-[#0d0e12]/30" />
          {/* Node 01 Box (Primary Color) */}
          <rect x="65" y="25" width="46" height="40" rx="3" strokeWidth="1.4" fill="#ffffff" fillOpacity="0.8" />
          <line x1="65" y1="37" x2="111" y2="37" strokeWidth="0.8" className="stroke-[#0d0e12]/15" />
          <text x="70" y="34" fill="#e0373a" fontSize="6.5" fontFamily="monospace" fontWeight="bold">01 PRIMARY</text>
          {/* Mini curve inside node 01 */}
          <path d="M 72 58 Q 88 50, 104 42" strokeWidth="1" className="stroke-[#0d0e12]/40" />

          {/* Wire 2 from Node 01 to Node 02 */}
          <path d="M 111 45 C 125 45, 130 75, 145 75" strokeWidth="1.2" className="stroke-[#0d0e12]/30" />
          {/* Node 02 Box (LUT / Grade) */}
          <rect x="145" y="55" width="46" height="40" rx="3" strokeWidth="1.4" fill="#ffffff" fillOpacity="0.8" className="stroke-accent-red/70" />
          <line x1="145" y1="67" x2="191" y2="67" strokeWidth="0.8" className="stroke-[#0d0e12]/15" />
          <text x="150" y="64" fill="#0d0e12" fontSize="6.5" fontFamily="monospace" fontWeight="bold">02 GRADE</text>
          {/* Mini waveform inside node 02 */}
          <path d="M 152 86 L 157 78 L 163 88 L 170 76 L 178 84 L 184 75" strokeWidth="0.9" className="stroke-accent-red/60" />

          {/* Wire to Output */}
          <path d="M 191 75 L 206 75" strokeWidth="1.2" />
          <circle cx="210" cy="75" r="4" fill="#e0373a" strokeWidth="1.2" />
          <text x="65" y="115" fill="#0d0e12" fillOpacity="0.5" fontSize="7" fontFamily="monospace">
            RESOLVE // SERIAL NODE PIPELINE
          </text>
        </svg>
      </div>

      {/* 5. BOTTOM-LEFT: Photoshop Layers Panel & Clipping Mask (Float Reverse) */}
      <div className="absolute top-[72%] left-[4%] sm:left-[6%] w-48 sm:w-56 h-44 sm:h-52 animate-float-reverse opacity-20">
        <svg viewBox="0 0 180 160" fill="none" className="w-full h-full stroke-[#0d0e12]/30">
          {/* Layer 3 (Background) */}
          <rect x="25" y="85" width="130" height="34" rx="4" strokeWidth="1.2" fill="#ffffff" fillOpacity="0.7" />
          <circle cx="40" cy="102" r="4" strokeWidth="1" className="stroke-[#0d0e12]/20" />
          <text x="52" y="105" fill="#0d0e12" fillOpacity="0.6" fontSize="8" fontFamily="monospace">BG_PLATE.RAW</text>

          {/* Layer 2 (Cutout Subject) */}
          <rect x="25" y="50" width="130" height="32" rx="4" strokeWidth="1.4" fill="#ffffff" fillOpacity="0.9" className="stroke-[#0d0e12]/40" />
          <circle cx="40" cy="66" r="4" fill="#0d0e12" fillOpacity="0.2" strokeWidth="1" />
          <text x="52" y="69" fill="#0d0e12" fontSize="8" fontFamily="monospace" fontWeight="bold">SUBJECT_CUTOUT</text>
          <rect x="135" y="59" width="12" height="14" strokeWidth="0.8" strokeDasharray="2 2" />

          {/* Layer 1 (Clipping Mask with arrow down) */}
          <rect x="42" y="16" width="113" height="30" rx="4" strokeWidth="1.4" fill="#ffffff" fillOpacity="0.9" className="stroke-accent-red/60" />
          {/* Clipping mask elbow arrow ↳ */}
          <path d="M 32 30 L 32 38 L 40 38" strokeWidth="1.5" className="stroke-accent-red" />
          <path d="M 37 35 L 40 38 L 37 41" strokeWidth="1.2" className="stroke-accent-red" />
          <text x="54" y="34" fill="#e0373a" fontSize="7.5" fontFamily="monospace" fontWeight="bold">CURVES ADJUSTMENT</text>
          
          <text x="25" y="142" fill="#0d0e12" fillOpacity="0.5" fontSize="7" fontFamily="monospace">
            PS // LAYER_STACK [CLIPPING]
          </text>
        </svg>
      </div>

      {/* 6. BOTTOM-RIGHT: Photoshop Crop / Marching Ants Selection & Curves (Float Drift) */}
      <div className="absolute top-[82%] right-[5%] sm:right-[8%] w-48 sm:w-56 h-48 sm:h-56 animate-float-drift opacity-25">
        <svg viewBox="0 0 170 170" fill="none" className="w-full h-full stroke-[#0d0e12]/30">
          {/* Animated Marching Ants Selection Box */}
          <rect 
            x="25" y="25" width="120" height="120" 
            strokeWidth="1.2" 
            strokeDasharray="4 4" 
            className="stroke-[#0d0e12]/60 animate-marching-ants"
          />
          {/* 8 Bounding Box Transform Grips */}
          <rect x="22" y="22" width="6" height="6" fill="#ffffff" stroke="#0d0e12" strokeWidth="1" />
          <rect x="82" y="22" width="6" height="6" fill="#ffffff" stroke="#0d0e12" strokeWidth="1" />
          <rect x="142" y="22" width="6" height="6" fill="#ffffff" stroke="#0d0e12" strokeWidth="1" />
          <rect x="22" y="82" width="6" height="6" fill="#ffffff" stroke="#0d0e12" strokeWidth="1" />
          <rect x="142" y="82" width="6" height="6" fill="#ffffff" stroke="#0d0e12" strokeWidth="1" />
          <rect x="22" y="142" width="6" height="6" fill="#ffffff" stroke="#0d0e12" strokeWidth="1" />
          <rect x="82" y="142" width="6" height="6" fill="#ffffff" stroke="#0d0e12" strokeWidth="1" />
          <rect x="142" y="142" width="6" height="6" fill="#ffffff" stroke="#0d0e12" strokeWidth="1" />
          
          {/* Rule of Thirds Grid Lines inside Marquee */}
          <line x1="65" y1="25" x2="65" y2="145" strokeWidth="0.8" strokeDasharray="2 3" className="stroke-[#0d0e12]/15" />
          <line x1="105" y1="25" x2="105" y2="145" strokeWidth="0.8" strokeDasharray="2 3" className="stroke-[#0d0e12]/15" />
          <line x1="25" y1="65" x2="145" y2="65" strokeWidth="0.8" strokeDasharray="2 3" className="stroke-[#0d0e12]/15" />
          <line x1="25" y1="105" x2="145" y2="105" strokeWidth="0.8" strokeDasharray="2 3" className="stroke-[#0d0e12]/15" />

          {/* Center Target Crosshair */}
          <circle cx="85" cy="85" r="4" strokeWidth="1" className="stroke-accent-red" />
          <line x1="85" y1="78" x2="85" y2="92" strokeWidth="1" className="stroke-accent-red" />
          <line x1="78" y1="85" x2="92" y2="85" strokeWidth="1" className="stroke-accent-red" />

          <text x="25" y="162" fill="#0d0e12" fillOpacity="0.5" fontSize="7" fontFamily="monospace">
            SELECT // 16:9 ASPECT LOCK
          </text>
        </svg>
      </div>
    </div>
  );
};
