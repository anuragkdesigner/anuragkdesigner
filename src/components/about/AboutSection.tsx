import React from 'react';
import { Sparkles, Palette, Video, Target, ArrowUpRight } from 'lucide-react';
import { Badge } from '../common/Badge';

export const AboutSection: React.FC = () => {
  const coreCompetencies = [
    {
      title: 'Branding Materials',
      description: 'Comprehensive brand identities, vector marks, stationery, marketing collateral, and scalable visual guidelines.',
      icon: <Palette className="w-4 h-4 text-studio-rust" />
    },
    {
      title: 'Social Media Creatives',
      description: 'High-conversion visual content, multi-slide carousels, and promotional campaign banners designed for digital engagement.',
      icon: <Sparkles className="w-4 h-4 text-studio-petrol" />
    },
    {
      title: 'Dynamic Video Edits',
      description: 'Rhythm-matched cuts, multi-camera sequencing, kinetic typography, and motion pacing in Premiere Pro and After Effects.',
      icon: <Video className="w-4 h-4 text-studio-ochre" />
    },
    {
      title: 'Strategic Thinking',
      description: 'Combining artistic intuition with Computer Science logic to produce purposeful, high-performing visual communication.',
      icon: <Target className="w-4 h-4 text-studio-sage" />
    }
  ];

  const tools = [
    { name: 'Adobe Photoshop', tag: 'Raster & Retouching' },
    { name: 'Adobe Illustrator', tag: 'Vector & Identity' },
    { name: 'Adobe Premiere Pro', tag: 'Video & Audio NLE' },
    { name: 'Adobe After Effects', tag: 'Motion & Kinetic Type' },
    { name: 'Figma', tag: 'UI/UX & Design Systems' }
  ];

  return (
    <section id="about" className="py-20 border-b border-stroke relative z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main About Card */}
        <div className="bg-canvas-card border border-stroke rounded-2xl p-8 sm:p-12 shadow-sm space-y-10">
          
          {/* Header & Status */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-stroke pb-6">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-studio-rust animate-pulse" />
              <span className="text-xs font-mono uppercase tracking-wider text-ink-secondary">
                About Anurag K • Graphic Designer & Video Editor
              </span>
            </div>

            <div className="flex items-center gap-2">
              <Badge variant="accent">Open to Collaborations</Badge>
              <span className="text-xs font-mono text-ink-tertiary">Kerala, India</span>
            </div>
          </div>

          {/* Official About Statement */}
          <div className="max-w-4xl space-y-4">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-ink leading-snug">
              "Creative and detail-oriented Graphic Designer and Video Editor with a passion for delivering high-quality visual content."
            </h2>
            <p className="text-base sm:text-lg text-ink-secondary leading-relaxed font-normal">
              Skilled in creating engaging social media creatives, branding materials, and dynamic video edits that effectively communicate ideas. Proficient in industry-standard tools including Adobe Photoshop, Illustrator, Premiere Pro, and After Effects. Focused on combining creativity with strategic thinking to produce impactful results. Open to new opportunities and professional collaborations.
            </p>
          </div>

          {/* 4 Pillars of Competency */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-6 border-t border-stroke">
            {coreCompetencies.map((item, idx) => (
              <div key={idx} className="p-4 rounded-lg bg-canvas-subtle border border-stroke space-y-2">
                <div className="flex items-center gap-2 text-xs font-mono font-semibold text-ink">
                  {item.icon}
                  <span>{item.title}</span>
                </div>
                <p className="text-xs text-ink-secondary leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* Core Tools Bar & Call to Action */}
          <div className="pt-6 border-t border-stroke flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <span className="block text-xs font-mono uppercase tracking-wider text-ink-tertiary mb-2">
                Proficient Industry-Standard Toolset
              </span>
              <div className="flex flex-wrap gap-2">
                {tools.map((tool, idx) => (
                  <Badge key={idx} variant="default" className="py-1">
                    <span className="font-semibold text-ink">{tool.name}</span>
                    <span className="text-[10px] text-ink-tertiary ml-1.5 font-normal">({tool.tag})</span>
                  </Badge>
                ))}
              </div>
            </div>

            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded bg-ink text-canvas hover:bg-ink-secondary transition-colors text-xs font-mono uppercase tracking-wider self-start md:self-auto flex-shrink-0"
            >
              <span>Discuss an Opportunity</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};
