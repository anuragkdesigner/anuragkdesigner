import React from 'react';
import { content } from '../../data/redesignContent';
import { ArrowUpRight } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 sm:py-32 bg-[#f9f9f8] border-t border-[#e2dfd7]">
      <div className="max-w-site mx-auto px-6 sm:px-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Large Display Headline with Interactive Minimal Hover Animation */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs font-mono uppercase tracking-[0.15em] text-[#0d0e12] font-bold block">
              About Anurag
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-[#0d0e12] tracking-tight leading-[1.08] uppercase cursor-default select-none">
              {content.about.headline.split(" ").map((word, i) => (
                <span
                  key={i}
                  className="inline-block mr-2.5 sm:mr-3 transition-all duration-300 ease-out hover:-translate-y-1.5 hover:text-[#525866]"
                >
                  {word}
                </span>
              ))}
            </h2>
            <div className="pt-2">
              <a
                href={content.contact.linkedin}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-[#0d0e12] hover:text-[#0d0e12] px-3.5 py-2 -ml-3.5 rounded-lg hover:bg-black/[0.04] border border-transparent hover:border-[#e2dfd7] transition-all duration-300"
              >
                <span className="relative">
                  View LinkedIn Profile
                  <span className="absolute left-0 -bottom-0.5 w-0 h-[1.5px] bg-[#0d0e12] transition-all duration-300 group-hover:w-full" />
                </span>
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>
            </div>
          </div>

          {/* Right Column: 3 Short Paragraphs of Body Text */}
          <div className="lg:col-span-7 space-y-6 text-[#525866] text-base sm:text-lg leading-relaxed font-sans">
            {content.about.paragraphs.map((para, idx) => (
              <p key={idx} className="border-l-2 border-[#e2dfd7] pl-5 hover:border-[#0d0e12] transition-colors">
                {para}
              </p>
            ))}

            {/* Quick Experience & Education Grid */}
            <div className="pt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 font-mono text-xs text-[#0d0e12]">
              <div className="p-4 rounded-lg bg-white border border-[#e2dfd7] shadow-xs hover:border-[#0d0e12] hover:shadow-md transition-all">
                <span className="block text-[#0d0e12] font-bold text-[10px] uppercase mb-1">ON-SITE ROLE</span>
                <span className="font-semibold block text-sm">BufferBytes Tech</span>
                <span className="text-[#525866] text-[11px] block mt-0.5">Graphic Designer</span>
              </div>
              <div className="p-4 rounded-lg bg-white border border-[#e2dfd7] shadow-xs hover:border-[#0d0e12] hover:shadow-md transition-all">
                <span className="block text-[#0d0e12] font-bold text-[10px] uppercase mb-1">AGENCY</span>
                <span className="font-semibold block text-sm">Haris&Co.</span>
                <span className="text-[#525866] text-[11px] block mt-0.5">Motion & Creatives</span>
              </div>
              <div className="p-4 rounded-lg bg-white border border-[#e2dfd7] shadow-xs hover:border-[#0d0e12] hover:shadow-md transition-all">
                <span className="block text-[#0d0e12] font-bold text-[10px] uppercase mb-1">DESIGN SCHOOL</span>
                <span className="font-semibold block text-sm">HACA.Design</span>
                <span className="text-[#525866] text-[11px] block mt-0.5">Creative Design (2024–25)</span>
              </div>
              <div className="p-4 rounded-lg bg-white border border-[#e2dfd7] shadow-xs hover:border-[#0d0e12] hover:shadow-md transition-all">
                <span className="block text-[#0d0e12] font-bold text-[10px] uppercase mb-1">DEGREE</span>
                <span className="font-semibold block text-sm">Sree Narayana College</span>
                <span className="text-[#525866] text-[11px] block mt-0.5">BSc Computer Science</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
