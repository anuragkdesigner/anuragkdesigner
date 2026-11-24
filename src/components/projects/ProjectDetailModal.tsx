import React, { useEffect } from 'react';
import { Project } from '../../types/portfolio';
import { X, CheckCircle, ShieldAlert, Cpu, Sparkles } from 'lucide-react';
import { Badge } from '../common/Badge';

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-ink/60 backdrop-blur-sm overflow-y-auto">
      <div 
        className="relative w-full max-w-4xl bg-canvas border border-stroke rounded-xl shadow-2xl overflow-hidden my-8 max-h-[90vh] flex flex-col"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        {/* Sticky Header */}
        <div className="sticky top-0 z-20 bg-canvas/95 backdrop-blur-md px-6 py-4 border-b border-stroke flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Badge variant="accent">{project.category}</Badge>
            <span className="text-xs font-mono text-ink-tertiary">{project.year} • {project.client}</span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg border border-stroke hover:bg-canvas-subtle text-ink-secondary hover:text-ink transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-10">
          
          {/* Title & Tagline */}
          <div>
            <h2 id="modal-title" className="text-2xl sm:text-4xl font-semibold tracking-tight text-ink mb-3">
              {project.title}
            </h2>
            <p className="text-lg text-ink-secondary leading-relaxed">
              {project.tagline}
            </p>
          </div>

          {/* Key Metrics / Outcomes */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-5 bg-canvas-subtle rounded-lg border border-stroke">
            {project.outcomes.map((item, idx) => (
              <div key={idx} className="space-y-1">
                <div className="text-xl sm:text-2xl font-mono font-bold text-ink">
                  {item.metric}
                </div>
                <div className="text-xs text-ink-tertiary leading-snug">
                  {item.context}
                </div>
              </div>
            ))}
          </div>

          {/* Problem & Ergonomic Constraints */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-studio-rust">
                <ShieldAlert className="w-4 h-4" />
                <span>The Core Problem</span>
              </div>
              <p className="text-sm text-ink-secondary leading-relaxed">
                {project.problemStatement}
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-studio-petrol">
                <Cpu className="w-4 h-4" />
                <span>Ergonomic & Hardware Constraints</span>
              </div>
              <p className="text-sm text-ink-secondary leading-relaxed">
                {project.ergonomicConstraint}
              </p>
            </div>
          </div>

          {/* Solution Narrative */}
          <div className="space-y-3 pt-6 border-t border-stroke">
            <h3 className="text-lg font-semibold text-ink">System Solution & Interaction Architecture</h3>
            <p className="text-sm text-ink-secondary leading-relaxed">
              {project.solutionNarrative}
            </p>
          </div>

          {/* Key Architectural Decisions & Trade-Offs */}
          <div className="space-y-4 pt-6 border-t border-stroke">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-studio-ochre" />
              <h3 className="text-lg font-semibold text-ink">Deliberate Design Trade-Offs</h3>
            </div>
            <p className="text-xs text-ink-tertiary">
              Real design involves conscious sacrifice. Every decision prioritized safety, clarity, or speed over decorative polish.
            </p>

            <div className="space-y-4">
              {project.keyDecisions.map((item, idx) => (
                <div key={idx} className="p-4 rounded border border-stroke bg-canvas-card space-y-2">
                  <div className="text-sm font-semibold text-ink">
                    Decision: {item.decision}
                  </div>
                  <div className="text-xs text-ink-secondary leading-relaxed">
                    <span className="font-semibold text-ink">Why:</span> {item.rationale}
                  </div>
                  <div className="text-xs text-studio-rust leading-relaxed">
                    <span className="font-semibold">Trade-off Accepted:</span> {item.tradeoff}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Deliverables & Tooling */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-stroke">
            <div>
              <span className="block text-xs font-mono uppercase tracking-wider text-ink-tertiary mb-3">
                Key Deliverables
              </span>
              <ul className="space-y-2 text-xs text-ink-secondary">
                {project.deliverables.map((d, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-studio-sage flex-shrink-0 mt-0.5" />
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <span className="block text-xs font-mono uppercase tracking-wider text-ink-tertiary mb-3">
                Design Stack & Validation
              </span>
              <div className="flex flex-wrap gap-1.5">
                {project.toolsUsed.map((tool, i) => (
                  <Badge key={i} variant="outline">{tool}</Badge>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="sticky bottom-0 bg-canvas-subtle px-6 py-4 border-t border-stroke flex items-center justify-between">
          <span className="text-xs font-mono text-ink-tertiary">
            Role: {project.role}
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded text-xs font-mono uppercase tracking-wider bg-ink text-canvas hover:bg-ink-secondary transition-colors"
          >
            Close Case Study
          </button>
        </div>

      </div>
    </div>
  );
};
