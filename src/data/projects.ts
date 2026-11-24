import { Project } from '../types/portfolio';

export const PROJECTS: Project[] = [
  {
    id: 'bufferbytes-brand-system',
    slug: 'bufferbytes-brand-system',
    title: 'BufferBytes Brand & Visual Identity',
    client: 'BufferBytes Technologies',
    year: '2025',
    role: 'Graphic Designer',
    category: 'Brand & Visual Systems',
    tagline: 'Tech-focused visual identity system and marketing collateral built for software products.',
    problemStatement: 'Technology solutions often struggle to communicate complex engineering value propositions through visual mediums, leading to disengaged prospects and generic corporate presentation.',
    ergonomicConstraint: 'Visual assets needed to scale seamlessly across physical tech conference banners, digital social channels, and high-density software dashboards without visual degradation.',
    solutionNarrative: 'Engineered a cohesive brand language combining geometric vector marks, high-contrast typographic scales in Photoshop and Illustrator, and modular social marketing templates that maintain consistency across all tech product releases.',
    outcomes: [
      { metric: '100% Brand Consistency', context: 'Unified marketing and product collaterals across all company touchpoints' },
      { metric: '40+ Visual Assets', context: 'Delivered for tech product announcements, banners, and digital collateral' },
      { metric: 'On-Site Collaboration', context: 'Real-time feedback cycles with engineering and leadership teams' }
    ],
    deliverables: [
      'Comprehensive Brand Identity Guidelines',
      'Tech Product Presentation Decks & Banners',
      'Social Media Campaign Visual Architecture',
      'Vector Asset Library in Illustrator & Figma'
    ],
    toolsUsed: ['Adobe Photoshop', 'Adobe Illustrator', 'Figma', 'Visual Identity Architecture'],
    keyDecisions: [
      {
        decision: 'Built modular 12-column grid templates for all digital collateral',
        rationale: 'Allowed marketing team to adapt layouts quickly while preserving strict typographic alignments.',
        tradeoff: 'Enforces strict margin boundaries, limiting arbitrary decorative placement.'
      },
      {
        decision: 'Selected high-contrast dual-tone palettes paired with crisp grotesque typography',
        rationale: 'Ensures graphics remain sharp on low-resolution mobile feeds and large trade show displays alike.',
        tradeoff: 'Avoided subtle gradients that print poorly or wash out on mobile screens.'
      }
    ],
    accentColor: '#0d0e12',
    featured: true,
    wireframeHighlight: {
      label: 'Modular Brand Grid System',
      description: 'Parametric 8pt spatial grid governing typography scale, icon bounding boxes, and asset compositions.'
    }
  },
  {
    id: 'haris-motion-campaigns',
    slug: 'haris-motion-campaigns',
    title: 'Haris&Co. Dynamic Motion Campaigns',
    client: 'Haris&Co. (Kozhikode, Kerala)',
    year: '2024 — 2025',
    role: 'Graphic Designer (Intern)',
    category: 'Motion & After Effects',
    tagline: 'Kinetic typography, After Effects motion graphics, and high-retention marketing creatives.',
    problemStatement: 'Social feeds require capturing viewer attention within the first 1.5 seconds. Static graphics were seeing declining click-through rates against competitive algorithmic video feeds.',
    ergonomicConstraint: 'Motion graphics must deliver complete brand messages even when viewed with audio muted on high-speed mobile feeds.',
    solutionNarrative: 'Designed rhythmically paced kinetic typography and motion storyboards in Adobe After Effects. Integrated bold typographic choreography and audio-synchronized text reveals that maximize retention across Instagram and digital campaign channels.',
    outcomes: [
      { metric: '8 Months of Production', context: 'High-frequency creative asset delivery in agency setting' },
      { metric: 'Kinetic Pacing', context: 'Optimized keyframe velocity curves for maximum visual retention' },
      { metric: 'Multi-Brand Adaptability', context: 'Executed tailored motion styles across diverse client accounts' }
    ],
    deliverables: [
      'After Effects Kinetic Typography Templates',
      'Animated Campaign Creatives & Video Graphics',
      'Motion Storyboards & Keyframe Timing Specs',
      'Composite Visuals in Adobe Photoshop'
    ],
    toolsUsed: ['Adobe After Effects', 'Adobe Photoshop', 'Motion Design', 'Typography Choreography'],
    keyDecisions: [
      {
        decision: 'Applied custom cubic-bezier velocity curves to all typographic entrance animations',
        rationale: 'Linear keyframes look amateurish; custom easing gives text physical weight and snappy presence.',
        tradeoff: 'Requires manual keyframe graphing instead of one-click preset animations.'
      },
      {
        decision: 'Prioritized high-legibility bold display type over decorative scripts',
        rationale: 'Viewers scroll past in fractions of a second; instant word recognition is paramount.',
        tradeoff: 'Limits use of delicate serif flourishes.'
      }
    ],
    accentColor: '#1E4750',
    featured: true,
    wireframeHighlight: {
      label: 'Keyframe Velocity Easing Curve',
      description: 'Exponential acceleration (0.85 ease-out) ensuring text snaps into legibility within the initial 400ms.'
    }
  },
  {
    id: 'cs-digital-product-ui',
    slug: 'cs-digital-product-ui',
    title: 'CoreFlow Developer Console UI',
    client: 'Product Concept & Systems Lab',
    year: '2024',
    role: 'UI/UX & Visual Designer',
    category: 'UI & Interaction Design',
    tagline: 'High-density developer dashboard applying Computer Science logic to ergonomic UI layouts.',
    problemStatement: 'Modern developer platforms present vast telemetry streams, log outputs, and deployment statuses, often causing visual fatigue and cluttered screen real estate.',
    ergonomicConstraint: 'Engineers spend 8+ hours continuously viewing the interface; requires strict eye-strain reduction and intuitive visual grouping.',
    solutionNarrative: 'Leveraged Computer Science background to design a logical information hierarchy with monospaced data grids, accessible color state indicators, and keyboard-first navigation patterns.',
    outcomes: [
      { metric: '100% WCAG AA', context: 'Contrast verified across dark and light console themes' },
      { metric: 'Tabular Precision', context: 'Aligned monospaced typography for zero visual scanning drift' },
      { metric: 'CS-Grounded IA', context: 'Structured data hierarchies matching REST and WebSocket mental models' }
    ],
    deliverables: [
      'Interactive Figma UI Prototype & Component Library',
      'Monospaced Data Grid & State Indicators Spec',
      'Dark & Light Mode Contrast Tokens',
      'Responsive Mobile & Desktop Dashboard Layouts'
    ],
    toolsUsed: ['Figma', 'Design Tokens', 'Computer Science Principles', 'Photoshop'],
    keyDecisions: [
      {
        decision: 'Utilized monospaced tabular numerals for all telemetry and resource meters',
        rationale: 'Prevents numerical jitter during real-time value updates and simplifies horizontal eye scanning.',
        tradeoff: 'Monospace glyphs occupy slightly more horizontal width than proportional numerals.'
      },
      {
        decision: 'Grouped server states by semantic border accents rather than filled colored cards',
        rationale: 'Filled colored blocks create visual noise; fine structural borders preserve quiet focus.',
        tradeoff: 'Demands calibrated monitor contrast ratios.'
      }
    ],
    accentColor: '#B46C1E',
    featured: true,
    wireframeHighlight: {
      label: 'Tabular Information Architecture',
      description: 'Strict column alignment and semantic status indicators allowing rapid debugging scans.'
    }
  },
  {
    id: 'kinetic-typography-lab',
    slug: 'kinetic-typography-lab',
    title: 'Kinetic Motion Design System',
    client: 'Creative Motion Exploration',
    year: '2024',
    role: 'Motion & Visual Designer',
    category: 'Design Systems',
    tagline: 'Parametric motion design tokens and After Effects keyframe standards for digital brands.',
    problemStatement: 'Design teams frequently have comprehensive Figma UI libraries but zero formal motion guidelines, leading to erratic animations across video and web.',
    ergonomicConstraint: 'Animations must respect reduced-motion user preferences and maintain 60 FPS rendering standards.',
    solutionNarrative: 'Formulated a comprehensive motion token architecture defining standard durations (150ms micro, 300ms transition, 500ms hero), easing curves, and After Effects expression templates.',
    outcomes: [
      { metric: '3 Standard Motion Durations', context: 'Eliminated arbitrary random animation timings' },
      { metric: 'AE Expression Library', context: 'Reusable motion math formulas for spring physics' },
      { metric: 'Cross-Discipline Alignment', context: 'Bridges graphic design, video editing, and UI interaction' }
    ],
    deliverables: [
      'Motion Token Reference Matrix (Time + Easing)',
      'After Effects Reusable Rig Presets',
      'Kinetic Typography Video Demonstrations',
      'Handoff Guidelines for Front-End Developers'
    ],
    toolsUsed: ['Adobe After Effects', 'Motion Tokens', 'Figma', 'Photoshop'],
    keyDecisions: [
      {
        decision: 'Standardized 3 core easing curves: Snappy, Smooth, and Mechanical',
        rationale: 'Creates an identifiable brand rhythm across all video collaterals and web transitions.',
        tradeoff: 'Restricts animators from inventing novel easing curves on a whim.'
      },
      {
        decision: 'Embedded exact millisecond values alongside frame numbers (at 60fps & 24fps)',
        rationale: 'Enables web engineers to translate After Effects motion directly into CSS animation timings.',
        tradeoff: 'Requires dual documentation for video editors and web developers.'
      }
    ],
    accentColor: '#3B6B55',
    featured: false,
    wireframeHighlight: {
      label: 'Motion Curve Architecture',
      description: 'Standardized bezier profiles linking video frames in After Effects to CSS timing functions.'
    }
  }
];
