import { DesignPrinciple } from '../types/portfolio';

export const PRINCIPLES: DesignPrinciple[] = [
  {
    number: '01',
    title: 'Visual Hierarchy Directs Cognitive Attention',
    thesis: 'Good visual design is not decoration; it is information routing. In both graphic collaterals and software UI, deliberate scale contrast, optical weight, and spatial grouping tell the viewer what matters before they read a single line.',
    antiPattern: 'Cluttered layouts with competing visual weights, uncalibrated gradients, and decorative noise that distracts from the core message.'
  },
  {
    number: '02',
    title: 'Motion Must Clarify Spatial Relationships',
    thesis: 'Kinetic design in After Effects and interface micro-interactions should communicate state changes and physics, not just show off animation skills. Ease curves and timing must feel physical, intentional, and effortless.',
    antiPattern: 'Gratuitous spinning transitions and bouncy animations that delay user interaction and disorient viewers.'
  },
  {
    number: '03',
    title: 'Graphic Precision Grounded in Computer Science',
    thesis: 'Having a computer science foundation transforms how a designer builds. Assets are prepared with exact raster densities, vector mathematical cleanliness, token reuse, and rendering performance in mind.',
    antiPattern: 'Exporting unoptimized 20MB uncompressed assets with no regard for frontend rendering or layout shifts.'
  },
  {
    number: '04',
    title: 'Brand Cohesion Across Every Touchpoint',
    thesis: 'A brand lives simultaneously across social carousels, campaign video motion, marketing landing pages, and production product interfaces. Design systems must unify typography, color contrast, and tone across all mediums.',
    antiPattern: 'Fragmented brand assets where marketing graphics look completely disconnected from the actual software product.'
  }
];

export const TOOLKIT = {
  motion: ['Adobe After Effects', 'Motion Graphics', 'Kinetic Typography', 'Lottie / Micro-interactions', 'Storyboarding'],
  visual: ['Adobe Photoshop', 'Adobe Illustrator', 'Brand Identity Systems', 'Typography Hierarchies', 'Social Campaign Design'],
  uiAndTech: ['Figma UI/UX', 'Design Tokens', 'Computer Science Principles', 'Responsive Grids', 'WCAG Contrast Standards']
};
