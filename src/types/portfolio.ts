export type ProjectCategory = 
  | 'Critical Systems' 
  | 'Field & Hardware' 
  | 'Design Systems' 
  | 'Creative Interfaces';

export interface ProjectOutcome {
  metric: string;
  context: string;
}

export interface DesignArtifact {
  title: string;
  description: string;
  type: 'wireframe' | 'flow' | 'component-spec' | 'state-matrix';
  svgData?: string;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  client: string;
  year: string;
  role: string;
  category: ProjectCategory;
  tagline: string;
  problemStatement: string;
  ergonomicConstraint: string;
  solutionNarrative: string;
  outcomes: ProjectOutcome[];
  deliverables: string[];
  toolsUsed: string[];
  keyDecisions: {
    decision: string;
    rationale: string;
    tradeoff: string;
  }[];
  accentColor: string;
  featured: boolean;
  wireframeHighlight?: {
    label: string;
    description: string;
  };
}

export interface WorkExperience {
  period: string;
  role: string;
  company: string;
  location: string;
  focus: string;
  achievements: string[];
}

export interface DesignPrinciple {
  number: string;
  title: string;
  thesis: string;
  antiPattern: string;
}

export interface SandboxTokenState {
  density: 'compact' | 'balanced' | 'relaxed';
  radius: 'sharp' | 'subtle' | 'rounded';
  contrastMode: 'aa' | 'aaa' | 'high-contrast';
  gridVisible: boolean;
}
