import React, { useState } from 'react';
import { Project } from '../../types/portfolio';
import { ProjectCard } from './ProjectCard';
import { ProjectDetailModal } from './ProjectDetailModal';

interface ProjectsGridProps {
  projects: Project[];
}

export const ProjectsGrid: React.FC<ProjectsGridProps> = ({ projects }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const categories: string[] = [
    'All',
    'Critical Systems',
    'Field & Hardware',
    'Design Systems',
    'Creative Interfaces'
  ];

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="py-20 border-b border-stroke">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-studio-rust block mb-2">
              Selected Work (2023 — 2025)
            </span>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-ink">
              Engineered for Cognitive Demands
            </h2>
          </div>

          <p className="text-sm text-ink-secondary max-w-md">
            Every case study details real ergonomics, hardware limits, and the deliberate trade-offs accepted to achieve safety and speed.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-4 border-b border-stroke overflow-x-auto">
          {categories.map((cat) => {
            const count = cat === 'All' 
              ? projects.length 
              : projects.filter(p => p.category === cat).length;
            const isSelected = selectedCategory === cat;

            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`py-1.5 px-3.5 rounded text-xs font-mono transition-all flex items-center gap-2 ${
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

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpenDetails={(p) => setActiveProject(p)}
            />
          ))}
        </div>

        {/* Case Study Detail Modal */}
        <ProjectDetailModal
          project={activeProject}
          onClose={() => setActiveProject(null)}
        />

      </div>
    </section>
  );
};
