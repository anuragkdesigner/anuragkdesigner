import { DesignPrinciple } from '../types/portfolio';

export const PRINCIPLES: DesignPrinciple[] = [
  {
    number: '01',
    title: 'Friction Is an Intentional Safety Mechanism',
    thesis: 'In consumer software, designers obsess over "zero-click" and frictionless flows. In high-stakes environments—ICUs, electrical switchyards, financial clearing—friction is a deliberate safety guard. Destructive actions must demand physical, conscious confirmation.',
    antiPattern: 'Disguising destructive confirmations as routine single-tap popups that users click through on reflex.'
  },
  {
    number: '02',
    title: 'Ergonomics Before Aesthetics',
    thesis: 'Real people use interfaces with cold hands, sweaty fingertips, nitrile gloves, cracked screens, and glare from midday sun or fluorescent bulbs. If a button cannot be reliably struck by a thumb during motion, its visual styling is irrelevant.',
    antiPattern: 'Low-contrast 12px gray text, 28px tap targets, and floating buttons placed outside the natural thumb arc.'
  },
  {
    number: '03',
    title: 'Typography Is the Primary User Interface',
    thesis: '90% of complex software is reading numbers, labels, states, and system feedback. Tabular numerals, proportional spacing, strict hierarchy, and deliberate optical sizes do more heavy lifting than decorative illustrations or background gradients.',
    antiPattern: 'Decorative serif headlines paired with unreadable cramped sans body text and non-tabular numerical data.'
  },
  {
    number: '04',
    title: 'Tokens Are the Contract Between Design & Code',
    thesis: 'A design system is not a static Figma file of rectangles. It is a living taxonomy of mathematical tokens—spacing scales, color roles, and state matrices—shared identically by design and production code without manual translation.',
    antiPattern: 'Exporting flat PNG redlines and hardcoding arbitrary pixel values in CSS files.'
  }
];

export const TOOLKIT = {
  interaction: ['Figma Variables', 'Protopie Hardware Rig', 'Touch Arc Ergonomics', 'State Machine Diagrams', 'Paper Wireframing'],
  systems: ['W3C Design Tokens', 'Style Dictionary', 'Storybook', 'WCAG 2.2 AAA Auditing', 'Tailwind CSS / CSS Variables'],
  research: ['In-situ Field Observation', 'Cognitive Workload Index (NASA-TLX)', 'Usability Task Benchmarking', 'Friction Mapping']
};
