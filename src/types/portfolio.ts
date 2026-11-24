export type ProjectCategory = 
  | 'Brand & Visual Systems' 
  | 'UI & Interaction Design' 
  | 'Motion & After Effects' 
  | 'Design Systems';

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
  type: string;
  focus: string;
  tools: string[];
  achievements: string[];
  companyUrl?: string;
}

export interface Education {
  institution: string;
  degree: string;
  field: string;
  location: string;
  details: string;
}

export type SkillCategory = 'Industry Knowledge' | 'Tools & Technologies';

export interface SkillItem {
  id: string;
  name: string;
  category: SkillCategory;
  associatedRole?: string;
  proficiencyLevel: string;
  initialEndorsements: number;
  description: string;
  accentColor: string;
  visualType: 'graphic' | 'motion' | 'video' | 'after-effects' | 'photoshop' | 'illustrator' | 'video-editing' | 'premiere-pro';
}
