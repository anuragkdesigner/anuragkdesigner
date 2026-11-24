import React, { useEffect, useRef } from 'react';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface EditorialSpread {
  number: string;
  category: string;
  title: string;
  subtitle: string;
  editorialIntro: string;
  leftPageNum: string;
  rightPageNum: string;
  leftImage: {
    url: string;
    caption: string;
  };
  rightHeroImage: {
    url: string;
    caption: string;
  };
  rightDetailImage: {
    url: string;
    caption: string;
  };
  deliverables: string[];
  tools: string[];
  scope: string;
  year: string;
}

const EDITORIAL_SPREADS: EditorialSpread[] = [
  {
    number: "01",
    category: "BRANDING & VISUAL IDENTITY",
    title: "BRAND IDENTITY & SYSTEMS",
    subtitle: "Geometric Marks, Typography Standards & Packaging Manuals",
    editorialIntro: "Engineered for timeless recognition across digital and tactile touchpoints. Every identity system begins with mathematical grid discipline, vector clarity, and physical stationery ergonomics.",
    leftPageNum: "04",
    rightPageNum: "05",
    leftImage: {
      url: "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&w=700&q=80",
      caption: "Stationery & Tactile Print Standards"
    },
    rightHeroImage: {
      url: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1000&q=80",
      caption: "Architectural Visual Identity Space"
    },
    rightDetailImage: {
      url: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&w=600&q=80",
      caption: "Color Theory & Abstract Palette System"
    },
    deliverables: ["Brand Guidelines", "Vector Mark Geometries", "Packaging Collateral", "Typography Standards"],
    tools: ["Illustrator", "Photoshop", "Figma"],
    scope: "Identity Architecture",
    year: "2024–2025"
  },
  {
    number: "02",
    category: "SOCIAL MEDIA CREATIVES & ADS",
    title: "HIGH-CONVERSION ADS & FEEDS",
    subtitle: "Scroll-Stopping Visual Hierarchy, Retouching & Kinetic Feed Stories",
    editorialIntro: "Designed specifically for modern 1080x1350 vertical canvas. Combining striking pop-art aesthetics, high-retention typography, and culinary/product retouching that drives direct click-throughs.",
    leftPageNum: "06",
    rightPageNum: "07",
    leftImage: {
      url: "https://images.unsplash.com/photo-1528825871115-3581a5387919?auto=format&fit=crop&w=700&q=80",
      caption: "Pop Art Prop & Color Calibration"
    },
    rightHeroImage: {
      url: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&w=1000&q=80",
      caption: "Pastel Studio Lighting & Product Hero"
    },
    rightDetailImage: {
      url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80",
      caption: "Minimalist Environmental Still Life"
    },
    deliverables: ["1080x1350 Feed Architecture", "Promotional Adverts", "Multi-Slide Carousels", "Product Retouching"],
    tools: ["Photoshop", "After Effects", "Illustrator"],
    scope: "Campaign Direction",
    year: "2024–2025"
  },
  {
    number: "03",
    category: "COMMERCIAL POSTERS & KEY ART",
    title: "THEATRICAL POSTERS & KEY ART",
    subtitle: "Cinematic Movie Key Art, Vogue Editorial & Splash Art Compositing",
    editorialIntro: "Dramatic lighting, multi-layer liquid physics, and bold editorial layouts. Honoring cultural cinema, high-fashion typography, and automotive commercial posters built with CMYK print precision.",
    leftPageNum: "08",
    rightPageNum: "09",
    leftImage: {
      url: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=700&q=80",
      caption: "Vogue Cover & Editorial Framing"
    },
    rightHeroImage: {
      url: "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?auto=format&fit=crop&w=1000&q=80",
      caption: "Cinematic Atmospheric Key Art"
    },
    rightDetailImage: {
      url: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80",
      caption: "Macro Texture & Precision Detail"
    },
    deliverables: ["Movie Key Art", "Liquid Splash Art", "Fashion Editorial Spreads", "Prepress CMYK"],
    tools: ["Photoshop", "Lightroom", "Camera Raw"],
    scope: "Editorial & Cinema",
    year: "2024–2025"
  },
  {
    number: "04",
    category: "DYNAMIC VIDEO EDITING",
    title: "KINETIC MOTION & VIDEO EDITING",
    subtitle: "Rhythm-Cut Sequences, Sound Foley Sync & Kinetic Typography",
    editorialIntro: "Every cut timed to the beat. Seamless transitions, sound design synchronization, multi-camera pacing in Premiere Pro, and dynamic motion graphic titling calibrated for maximum retention.",
    leftPageNum: "10",
    rightPageNum: "11",
    leftImage: {
      url: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=700&q=80",
      caption: "Multi-Track NLE Video Suite"
    },
    rightHeroImage: {
      url: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=1000&q=80",
      caption: "Cinematic Projection & Rhythm Pacing"
    },
    rightDetailImage: {
      url: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=600&q=80",
      caption: "Optical Bokeh & Lens Aesthetics"
    },
    deliverables: ["Rhythm & Speed Ramps", "Multi-Track Foley Sync", "Kinetic Title Graphics", "Cinematic Color LUTs"],
    tools: ["Premiere Pro", "After Effects", "DaVinci Resolve"],
    scope: "Post-Production",
    year: "2024–2025"
  }
];

export const ServicesSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);

  // Pinned GSAP Horizontal Scrolling
  useEffect(() => {
    const container = containerRef.current;
    const track = trackRef.current;
    if (!container || !track) return;

    const ctx = gsap.context(() => {
      const getScrollAmount = () => -(track.scrollWidth - window.innerWidth + 80);

      const horizontalTween = gsap.to(track, {
        x: getScrollAmount,
        ease: 'none'
      });

      ScrollTrigger.create({
        trigger: container,
        start: 'top top',
        end: () => `+=${Math.max(1400, track.scrollWidth - window.innerWidth + 300)}`,
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
  }, []);

  return (
    <section 
      id="services" 
      ref={containerRef}
      className="relative bg-[#f4f3ef] border-t border-[#e2dfd7] select-none"
    >
      {/* Pinned 100vh Viewport */}
      <div className="h-screen w-full flex flex-col justify-between py-6 sm:py-8 overflow-hidden">
        
        {/* Top Header Strip */}
        <div className="max-w-site mx-auto w-full px-6 sm:px-10 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[#0d0e12] animate-pulse" />
            <span className="font-mono text-xs uppercase tracking-widest text-[#0d0e12] font-bold">
              WHAT I DO · EDITORIAL PUBLICATION SPREADS (01—0{EDITORIAL_SPREADS.length})
            </span>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-[#525866]">
            <span className="hidden sm:inline">HORIZONTAL SCROLL</span>
            <span className="text-[#0d0e12] font-bold animate-pulse">SCROLL TO EXPLORE →</span>
          </div>
        </div>

        {/* Horizontal Sliding Track of Open Magazine Spreads */}
        <div
          ref={trackRef}
          className="flex items-center gap-8 sm:gap-12 pl-6 sm:pl-10 pr-16 sm:pr-24 will-change-transform my-auto py-2"
        >
          {EDITORIAL_SPREADS.map((spread) => (
            <article
              key={spread.number}
              className="w-[88vw] sm:w-[85vw] lg:w-[1080px] xl:w-[1180px] shrink-0 bg-white rounded-lg border border-[#e2dfd7] shadow-[0_20px_50px_-15px_rgba(0,0,0,0.12),0_4px_16px_rgba(0,0,0,0.05)] overflow-hidden my-auto"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 relative">
                
                {/* Center Spine Crease / Gutter Depth (Physical booklet binding effect) */}
                <div 
                  className="hidden lg:block absolute inset-y-0 left-1/2 -translate-x-1/2 w-8 pointer-events-none z-30 bg-gradient-to-r from-black/[0.06] via-black/[0.12] to-black/[0.06]"
                  aria-hidden="true"
                />
                <div 
                  className="hidden lg:block absolute inset-y-0 left-1/2 w-[1px] bg-black/15 z-40 pointer-events-none"
                  aria-hidden="true"
                />

                {/* LEFT PAGE (Editorial Typography, Narrative & Specs) */}
                <div className="lg:col-span-6 p-5 sm:p-7 lg:p-9 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-[#e2dfd7] bg-white relative">
                  
                  {/* Top Folio Header */}
                  <div className="flex items-center justify-between text-[10px] font-mono uppercase tracking-widest text-[#525866] border-b border-[#e2dfd7] pb-2.5 mb-4">
                    <span className="flex items-center gap-1.5 font-bold text-[#0d0e12]">
                      <Sparkles className="w-3 h-3" />
                      CAPABILITY {spread.number}
                    </span>
                    <span>LOOKBOOK · VOL. 2025</span>
                  </div>

                  {/* Main Editorial Header */}
                  <div className="space-y-2 mb-4">
                    <div className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#858c9b]">
                      {spread.category}
                    </div>
                    <h3 className="font-display text-xl sm:text-2xl lg:text-3xl text-[#0d0e12] tracking-tight uppercase leading-tight">
                      {spread.title}
                    </h3>
                    <p className="font-mono text-[11px] text-[#0d0e12] font-semibold tracking-wide">
                      {spread.subtitle}
                    </p>
                    <p className="text-xs text-[#525866] font-sans leading-relaxed pt-2 border-t border-[#e2dfd7] line-clamp-3">
                      {spread.editorialIntro}
                    </p>
                  </div>

                  {/* Inset Left Photo & Specs Layout */}
                  <div className="grid grid-cols-12 gap-3 items-end mb-4 pt-3 border-t border-[#e2dfd7]">
                    
                    {/* Left Inset Photography */}
                    <div className="col-span-5 space-y-1">
                      <div className="relative rounded overflow-hidden border border-[#e2dfd7] bg-[#f2f1ed] aspect-[4/3] group/img">
                        <img
                          src={spread.leftImage.url}
                          alt={spread.leftImage.caption}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover/img:scale-105"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
                      </div>
                      <span className="text-[9px] font-mono text-[#858c9b] uppercase tracking-wider block truncate">
                        FIG. 01 · {spread.leftImage.caption}
                      </span>
                    </div>

                    {/* Deliverables & Metadata List */}
                    <div className="col-span-7 space-y-2 text-xs font-mono">
                      <div>
                        <span className="text-[9px] uppercase text-[#858c9b] block mb-1">KEY DELIVERABLES</span>
                        <div className="flex flex-wrap gap-1">
                          {spread.deliverables.slice(0, 3).map((d, i) => (
                            <span
                              key={i}
                              className="px-1.5 py-0.5 rounded bg-[#f1f0ec] text-[9px] text-[#0d0e12] border border-[#e2dfd7] truncate max-w-full"
                            >
                              {d}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="pt-1.5 border-t border-[#e2dfd7] flex items-center justify-between text-[10px] text-[#525866]">
                        <span>TOOLS:</span>
                        <span className="font-bold text-[#0d0e12] truncate ml-1">{spread.tools.join(" · ")}</span>
                      </div>
                    </div>

                  </div>

                  {/* Bottom Folio Footer */}
                  <div className="flex items-center justify-between text-[9px] font-mono uppercase text-[#858c9b] pt-3 border-t border-[#e2dfd7] mt-auto">
                    <span>ANURAG K · EDITORIAL PUBLICATION</span>
                    <span className="font-bold text-[#0d0e12]">PAGE {spread.leftPageNum}</span>
                  </div>

                </div>

                {/* RIGHT PAGE (Aesthetic Imagery, Composition Grid & Mood) */}
                <div className="lg:col-span-6 p-5 sm:p-7 lg:p-9 flex flex-col justify-between bg-[#fcfbf9] relative">
                  
                  {/* Top Folio Header */}
                  <div className="flex items-center justify-between text-[10px] font-mono uppercase tracking-widest text-[#525866] border-b border-[#e2dfd7] pb-2.5 mb-4">
                    <span>STUDIO ARCHIVE · {spread.scope}</span>
                    <span className="font-bold text-[#0d0e12]">{spread.year}</span>
                  </div>

                  {/* Main Aesthetic Photo Showcase */}
                  <div className="space-y-3 mb-4">
                    
                    {/* Big Hero Visual Card */}
                    <div className="relative rounded-lg overflow-hidden border border-[#e2dfd7] bg-[#f2f1ed] aspect-[16/10] shadow-xs group/hero">
                      <img
                        src={spread.rightHeroImage.url}
                        alt={spread.rightHeroImage.caption}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover/hero:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent pointer-events-none" />
                      
                      <div className="absolute top-2.5 left-2.5 bg-white/95 backdrop-blur-md px-2 py-0.5 rounded text-[9px] font-mono uppercase tracking-wider text-[#0d0e12] border border-[#e2dfd7] shadow-xs">
                        PLATE 0{spread.number}A
                      </div>

                      <div className="absolute bottom-2.5 left-2.5 right-2.5 text-white text-[11px] font-mono drop-shadow truncate">
                        {spread.rightHeroImage.caption}
                      </div>
                    </div>

                    {/* Secondary Detail Row with Caption & Action Link */}
                    <div className="grid grid-cols-12 gap-3 items-center pt-1">
                      <div className="col-span-5 relative aspect-[16/9] rounded overflow-hidden border border-[#e2dfd7] bg-[#f2f1ed]">
                        <img
                          src={spread.rightDetailImage.url}
                          alt={spread.rightDetailImage.caption}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      </div>
                      
                      <div className="col-span-7 flex flex-col justify-between space-y-1.5">
                        <p className="text-[10px] font-mono text-[#525866] leading-tight line-clamp-2">
                          FIG. 02 · {spread.rightDetailImage.caption}. Precision grading & rhythm.
                        </p>
                        
                        <a
                          href="#contact"
                          className="inline-flex items-center gap-1 text-[11px] font-mono font-bold uppercase tracking-wider text-[#0d0e12] hover:text-[#525866] transition-colors"
                        >
                          <span>Commission Capability</span>
                          <ArrowUpRight className="w-3 h-3" />
                        </a>
                      </div>
                    </div>

                  </div>

                  {/* Bottom Folio Footer */}
                  <div className="flex items-center justify-between text-[9px] font-mono uppercase text-[#858c9b] pt-3 border-t border-[#e2dfd7] mt-auto">
                    <span>BUFFERBYTES TECH · HARIS&CO. ALUM</span>
                    <span className="font-bold text-[#0d0e12]">PAGE {spread.rightPageNum}</span>
                  </div>

                </div>

              </div>
            </article>
          ))}
        </div>

        {/* Bottom Horizontal Scroll Progress Bar */}
        <div className="max-w-site mx-auto w-full px-6 sm:px-10 shrink-0">
          <div className="flex items-center justify-between text-[11px] font-mono text-[#525866] mb-2">
            <span>SPREAD PROGRESS</span>
            <span>01 — 0{EDITORIAL_SPREADS.length} FINISH → VERTICAL RESUME</span>
          </div>
          <div className="h-1 bg-[#e2dfd7] rounded-full overflow-hidden w-full">
            <div
              ref={progressBarRef}
              className="h-full bg-[#0d0e12] w-0 origin-left transition-all duration-75"
            />
          </div>
        </div>

      </div>
    </section>
  );
};
