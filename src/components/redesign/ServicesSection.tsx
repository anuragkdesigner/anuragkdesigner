import React, { useState } from 'react';
import { ArrowUpRight, Sparkles, BookOpen } from 'lucide-react';

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
    aspect: string;
  };
  rightHeroImage: {
    url: string;
    caption: string;
    aspect: string;
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
      caption: "Stationery & Tactile Print Standards",
      aspect: "aspect-[4/3]"
    },
    rightHeroImage: {
      url: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1000&q=80",
      caption: "Architectural Visual Identity Space",
      aspect: "aspect-[16/10]"
    },
    rightDetailImage: {
      url: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&w=600&q=80",
      caption: "Color Theory & Abstract Palette System"
    },
    deliverables: ["Comprehensive Brand Guidelines", "Vector Mark Geometries", "Packaging Collateral", "Typography Standards", "Stationery Layouts"],
    tools: ["Adobe Illustrator", "Photoshop", "Figma"],
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
      caption: "Pop Art Prop & Color Calibration",
      aspect: "aspect-[4/3]"
    },
    rightHeroImage: {
      url: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&w=1000&q=80",
      caption: "Pastel Studio Lighting & Product Hero",
      aspect: "aspect-[16/10]"
    },
    rightDetailImage: {
      url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80",
      caption: "Minimalist Environmental Still Life"
    },
    deliverables: ["1080x1350 Feed Architecture", "High-CTR Promotional Adverts", "Multi-Slide Carousels", "Food Retouching & Color Grading"],
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
      caption: "Vogue Cover & Editorial Framing",
      aspect: "aspect-[4/3]"
    },
    rightHeroImage: {
      url: "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?auto=format&fit=crop&w=1000&q=80",
      caption: "Cinematic Atmospheric Key Art",
      aspect: "aspect-[16/10]"
    },
    rightDetailImage: {
      url: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80",
      caption: "Macro Texture & Precision Detail"
    },
    deliverables: ["Movie Poster Key Art", "Liquid Splash Compositing", "Fashion Editorial Spreads", "Print-Ready Prepress (CMYK)"],
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
      caption: "Multi-Track NLE Video Suite",
      aspect: "aspect-[4/3]"
    },
    rightHeroImage: {
      url: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=1000&q=80",
      caption: "Cinematic Projection & Rhythm Pacing",
      aspect: "aspect-[16/10]"
    },
    rightDetailImage: {
      url: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=600&q=80",
      caption: "Optical Bokeh & Lens Aesthetics"
    },
    deliverables: ["Rhythm & Speed Ramps", "Multi-Track Sound Design", "Kinetic Title Graphics", "Cinematic Color LUTs"],
    tools: ["Premiere Pro", "After Effects", "DaVinci Resolve"],
    scope: "Post-Production",
    year: "2024–2025"
  }
];

export const ServicesSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("all");

  const filteredSpreads = activeTab === "all" 
    ? EDITORIAL_SPREADS 
    : EDITORIAL_SPREADS.filter(s => s.number === activeTab);

  return (
    <section id="services" className="py-24 sm:py-32 bg-[#f4f3ef] border-t border-[#e2dfd7]">
      <div className="max-w-site mx-auto px-6 sm:px-10">
        
        {/* Section Header Strip */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#0d0e12] animate-pulse" />
              <span className="text-xs font-mono uppercase tracking-[0.15em] text-[#0d0e12] font-bold">
                Editorial Publication & Craft
              </span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-[#0d0e12] tracking-tight uppercase leading-none">
              WHAT I DO
            </h2>
          </div>

          <div className="max-w-md space-y-2">
            <p className="text-xs sm:text-sm font-sans text-[#525866] leading-relaxed">
              Open editorial spreads presenting design disciplines, brand identity architectures, advertising feeds, and video post-production.
            </p>
            <div className="flex items-center gap-2 text-[11px] font-mono text-[#858c9b]">
              <BookOpen className="w-3.5 h-3.5 text-[#0d0e12]" />
              <span>4 EDITORIAL SPREADS · PRINT-GRADE AESTHETIC</span>
            </div>
          </div>
        </div>

        {/* Spread Navigation Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-4 border-b border-[#e2dfd7]">
          <button
            onClick={() => setActiveTab("all")}
            className={`py-2 px-4 rounded text-xs font-mono uppercase tracking-wider transition-all ${
              activeTab === "all"
                ? "bg-[#0d0e12] text-white font-bold shadow-md"
                : "bg-white text-[#525866] hover:text-[#0d0e12] border border-[#e2dfd7] shadow-xs"
            }`}
          >
            All Spreads (04)
          </button>
          {EDITORIAL_SPREADS.map((s) => (
            <button
              key={s.number}
              onClick={() => setActiveTab(s.number)}
              className={`py-2 px-4 rounded text-xs font-mono uppercase tracking-wider transition-all flex items-center gap-2 ${
                activeTab === s.number
                  ? "bg-[#0d0e12] text-white font-bold shadow-md"
                  : "bg-white text-[#525866] hover:text-[#0d0e12] border border-[#e2dfd7] shadow-xs"
              }`}
            >
              <span>{s.number}</span>
              <span className="hidden sm:inline">· {s.category}</span>
            </button>
          ))}
        </div>

        {/* Editorial Spreads Showcase */}
        <div className="space-y-16 sm:space-y-24">
          {filteredSpreads.map((spread) => (
            <article
              key={spread.number}
              className="group bg-white rounded-lg border border-[#e2dfd7] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.12),0_4px_16px_rgba(0,0,0,0.05)] overflow-hidden transition-all duration-300 hover:shadow-[0_30px_70px_-12px_rgba(0,0,0,0.16)]"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 relative">
                
                {/* Authentic Center Spine Crease / Gutter Depth (Simulating physical booklet binding) */}
                <div 
                  className="hidden lg:block absolute inset-y-0 left-1/2 -translate-x-1/2 w-10 pointer-events-none z-30 bg-gradient-to-r from-black/[0.06] via-black/[0.12] to-black/[0.06]"
                  aria-hidden="true"
                />
                <div 
                  className="hidden lg:block absolute inset-y-0 left-1/2 w-[1px] bg-black/15 z-40 pointer-events-none"
                  aria-hidden="true"
                />

                {/* LEFT PAGE (Editorial Typography, Narrative & Specs) */}
                <div className="lg:col-span-6 p-6 sm:p-10 lg:p-12 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-[#e2dfd7] bg-white relative">
                  
                  {/* Top Folio Header */}
                  <div className="flex items-center justify-between text-[11px] font-mono uppercase tracking-widest text-[#525866] border-b border-[#e2dfd7] pb-3 mb-6">
                    <span className="flex items-center gap-1.5 font-bold text-[#0d0e12]">
                      <Sparkles className="w-3 h-3" />
                      CAPABILITY {spread.number}
                    </span>
                    <span>LOOKBOOK · VOL. 2025</span>
                  </div>

                  {/* Main Editorial Header */}
                  <div className="space-y-3 mb-6">
                    <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#858c9b]">
                      {spread.category}
                    </div>
                    <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl text-[#0d0e12] tracking-tight uppercase leading-[1.05]">
                      {spread.title}
                    </h3>
                    <p className="font-mono text-xs text-[#0d0e12] font-semibold tracking-wide">
                      {spread.subtitle}
                    </p>
                    <p className="text-xs sm:text-sm text-[#525866] font-sans leading-relaxed pt-2 border-t border-[#e2dfd7]">
                      {spread.editorialIntro}
                    </p>
                  </div>

                  {/* Inset Left Photo & Specs Layout (Editorial Magazine Grid) */}
                  <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-end mb-8 pt-4 border-t border-[#e2dfd7]">
                    
                    {/* Left Inset Photography */}
                    <div className="sm:col-span-6 space-y-1.5">
                      <div className="relative rounded overflow-hidden border border-[#e2dfd7] bg-[#f2f1ed] aspect-[4/3] group/img">
                        <img
                          src={spread.leftImage.url}
                          alt={spread.leftImage.caption}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover/img:scale-105"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
                      </div>
                      <span className="text-[10px] font-mono text-[#858c9b] uppercase tracking-wider block truncate">
                        FIG. 01 · {spread.leftImage.caption}
                      </span>
                    </div>

                    {/* Deliverables & Metadata List */}
                    <div className="sm:col-span-6 space-y-3 text-xs font-mono">
                      <div>
                        <span className="text-[10px] uppercase text-[#858c9b] block mb-1">KEY DELIVERABLES</span>
                        <div className="flex flex-wrap gap-1">
                          {spread.deliverables.slice(0, 3).map((d, i) => (
                            <span
                              key={i}
                              className="px-2 py-0.5 rounded bg-[#f1f0ec] text-[10px] text-[#0d0e12] border border-[#e2dfd7] truncate max-w-full"
                            >
                              {d}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="pt-2 border-t border-[#e2dfd7] flex items-center justify-between text-[11px] text-[#525866]">
                        <span>PRIMARY TOOLS:</span>
                        <span className="font-bold text-[#0d0e12]">{spread.tools.join(" · ")}</span>
                      </div>
                    </div>

                  </div>

                  {/* Bottom Folio Footer */}
                  <div className="flex items-center justify-between text-[10px] font-mono uppercase text-[#858c9b] pt-4 border-t border-[#e2dfd7] mt-auto">
                    <span>ANURAG K · EDITORIAL PUBLICATION</span>
                    <span className="font-bold text-[#0d0e12]">PAGE {spread.leftPageNum}</span>
                  </div>

                </div>

                {/* RIGHT PAGE (Aesthetic Imagery, Composition Grid & Mood) */}
                <div className="lg:col-span-6 p-6 sm:p-10 lg:p-12 flex flex-col justify-between bg-[#fcfbf9] relative">
                  
                  {/* Top Folio Header */}
                  <div className="flex items-center justify-between text-[11px] font-mono uppercase tracking-widest text-[#525866] border-b border-[#e2dfd7] pb-3 mb-6">
                    <span>STUDIO ARCHIVE · {spread.scope}</span>
                    <span className="font-bold text-[#0d0e12]">{spread.year}</span>
                  </div>

                  {/* Main Aesthetic Photo Showcase (Multi-Image Composition) */}
                  <div className="space-y-4 mb-6">
                    
                    {/* Big Hero Visual Card */}
                    <div className="relative rounded-lg overflow-hidden border border-[#e2dfd7] bg-[#f2f1ed] aspect-[16/10] shadow-sm group/hero">
                      <img
                        src={spread.rightHeroImage.url}
                        alt={spread.rightHeroImage.caption}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover/hero:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent pointer-events-none" />
                      
                      <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-2.5 py-1 rounded text-[10px] font-mono uppercase tracking-wider text-[#0d0e12] border border-[#e2dfd7] shadow-xs">
                        PLATE 0{spread.number}A
                      </div>

                      <div className="absolute bottom-3 left-3 right-3 text-white text-xs font-mono drop-shadow truncate">
                        {spread.rightHeroImage.caption}
                      </div>
                    </div>

                    {/* Secondary Detail Row with Caption & Action Link */}
                    <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 items-center pt-2">
                      <div className="sm:col-span-5 relative aspect-[16/9] rounded overflow-hidden border border-[#e2dfd7] bg-[#f2f1ed]">
                        <img
                          src={spread.rightDetailImage.url}
                          alt={spread.rightDetailImage.caption}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      </div>
                      
                      <div className="sm:col-span-7 flex flex-col justify-between space-y-2">
                        <p className="text-[11px] font-mono text-[#525866] leading-tight">
                          FIG. 02 · {spread.rightDetailImage.caption}. Engineered with pixel-precise color grading and layout rhythm.
                        </p>
                        
                        <a
                          href="#contact"
                          className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-[#0d0e12] hover:text-[#525866] transition-colors pt-1"
                        >
                          <span>Commission Capability</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </a>
                      </div>
                    </div>

                  </div>

                  {/* Bottom Folio Footer */}
                  <div className="flex items-center justify-between text-[10px] font-mono uppercase text-[#858c9b] pt-4 border-t border-[#e2dfd7] mt-auto">
                    <span>BUFFERBYTES TECH · HARIS&CO. ALUM</span>
                    <span className="font-bold text-[#0d0e12]">PAGE {spread.rightPageNum}</span>
                  </div>

                </div>

              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};
