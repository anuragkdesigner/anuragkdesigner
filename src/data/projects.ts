import { Project } from '../types/portfolio';

export const PROJECTS: Project[] = [
  {
    id: 'kite-health',
    slug: 'kite-health-icu-dosage',
    title: 'Kite ICU Dosage Engine',
    client: 'Kite Health Systems',
    year: '2025',
    role: 'Lead Interaction & Systems Designer',
    category: 'Critical Systems',
    tagline: 'Fail-safe medication calculator for pediatric intensive care nurses under cognitive fatigue.',
    problemStatement: 'Pediatric dosing calculations in pediatric ICUs require 3-point mathematical cross-checks between patient weight, infusion rate, and diluent concentration. During 12-hour shifts, numerical entry slips accounted for 18% of near-miss safety logs.',
    ergonomicConstraint: 'Nurses wear nitrile gloves, operate tablets with single hand under fluorescent hospital lighting, and cannot afford multi-level nested modal dialogs.',
    solutionNarrative: 'Engineered a progressive single-screen flow with tactile thumb-arc dial inputs, real-time dosage boundary visualizers, and a dual-nurse verification signature protocol that reduces input confirmation cycle time while eliminating rounding ambiguity.',
    outcomes: [
      { metric: '0 calculation slips', context: 'Simulated trial across 42 acute care registered nurses' },
      { metric: '2.4s to verify', context: 'Down from 8.7s across legacy multi-page EMR dialogs' },
      { metric: '100% WCAG AAA', context: 'Contrast verified for washed-out low-spec ward tablets' }
    ],
    deliverables: [
      'Single-screen Dosage Flow Architecture',
      'Tactile Thumb Dial Interaction Component',
      'High-Contrast Emergency Warning Token Spec',
      'Figma Variable Math Prototype with live bounds checking'
    ],
    toolsUsed: ['Figma', 'Protopie (Hardware Dial Testing)', 'React Native Token Map', 'Stark Accessibility Suite'],
    keyDecisions: [
      {
        decision: 'Replaced freeform numerical keyboards with constrained stepped digit wheels',
        rationale: 'Freeform text inputs allow inadvertent decimal point misses (e.g. 1.0 vs 10). Stepped bounds physically prevent entering off-label orders.',
        tradeoff: 'Slightly slower for veteran nurses on familiar round numbers; vastly safer against catastrophic outlier entries.'
      },
      {
        decision: 'Persistent peripheral ambient status border instead of popup alerts',
        rationale: 'Alert modals cause habituation ("modal blindness"). A chromatic peripheral frame warns of near-maximum thresholds without interrupting thumb focus.',
        tradeoff: 'Requires strict tablet orientation locking in bedside dock.'
      }
    ],
    accentColor: '#C0532E',
    featured: true,
    wireframeHighlight: {
      label: 'Single-Hand Thumb Arc Interface',
      description: 'Controls mapped to lower 35% of tablet viewport so clinicians never have to reach top corners while holding intravenous tubing.'
    }
  },
  {
    id: 'chronos-field-os',
    slug: 'chronos-field-os',
    title: 'Chronos Field Inspector',
    client: 'Chronos Energy Infrastructure',
    year: '2024',
    role: 'Staff Product Designer',
    category: 'Field & Hardware',
    tagline: 'Offline-first diagnostic interface for substation engineers in direct sunlight and sub-zero gear.',
    problemStatement: 'High-voltage inspectors operate in rural switchyards where cell reception is nonexistent. Technicians were abandoning digital forms in favor of paper clipboards due to tiny touchscreen tap targets, unreadable contrast under direct 10,000-lux midday sun, and cold-weather capacitive glove latency.',
    ergonomicConstraint: 'Thick insulated leather gloves, bright reflective sunlight, and damp touchscreen surfaces.',
    solutionNarrative: 'Designed a sunlight-optimized interface with 64px physical-equivalent tap zones, monochrome high-reflection contrast mode, and an offline-first state machine that auto-caches sensor reads via Bluetooth Low Energy without modal blocking.',
    outcomes: [
      { metric: '94% field completion', context: 'Eliminated secondary evening manual data re-entry' },
      { metric: '64px tap grid', context: 'Full touch accuracy while wearing Class 2 rubber lineman gloves' },
      { metric: 'Zero sync data loss', context: 'Tested over 120 switchyard sites with spotty connectivity' }
    ],
    deliverables: [
      'Direct-Sunlight Monochrome Display Token Set',
      'Glove-Calibrated Hit Target Spec (Minimum 64x64dp)',
      'Offline Conflict Resolution UI Flow',
      'Physical Hardware Push-to-Talk Companion Layout'
    ],
    toolsUsed: ['Figma', 'Touch-target Ergonomic Rig', 'Color Contrast Analyzer', 'Tailwind Field Tokens'],
    keyDecisions: [
      {
        decision: 'Swapped all micro-illustrations and icons for ISO 7000 safety symbol standard',
        rationale: 'Engineers are trained in electrical schematics, not consumer app iconography. Standardized glyphs prevented misinterpretation of phase voltage warnings.',
        tradeoff: 'Industrial aesthetic rather than slick consumer polish.'
      },
      {
        decision: 'Hardware volume-rocker shortcut mapping for sequential inspection check-offs',
        rationale: 'When screen is coated with light rain droplets, capacitive touch fails. Physical volume rocker advances inspection items.',
        tradeoff: 'Required native Android driver layer collaboration with firmware engineers.'
      }
    ],
    accentColor: '#1E4750',
    featured: true,
    wireframeHighlight: {
      label: 'Reflective Inversion UI Grid',
      description: '100% optical black on white with 2px solid structural boundaries; eliminates all subtle gray shadows that wash out under noon sky.'
    }
  },
  {
    id: 'relay-design-system',
    slug: 'relay-design-system',
    title: 'Relay Multi-Platform Tokens',
    client: 'Relay Cloud Platform',
    year: '2024',
    role: 'Design Systems Architect',
    category: 'Design Systems',
    tagline: 'Cross-functional token architecture and component guidelines powering 4 enterprise products.',
    problemStatement: 'Four separate product squads were duplicating table and data-viz components, resulting in conflicting accessibility scores, divergent keyboard navigation patterns, and fractured handoffs that slowed down release cycles.',
    ergonomicConstraint: 'Engineers use React + TypeScript and Swift; designers use Figma; marketing uses static CMS. The source of truth had to exist independent of any single tool.',
    solutionNarrative: 'Architected a 3-tier design token pipeline (Global, Semantic, Component) with automated Style Dictionary export into TypeScript types and CSS custom properties. Shipped 38 core accessible primitives with built-in ARIA state management.',
    outcomes: [
      { metric: '38 core primitives', context: 'Covering 92% of all enterprise UI patterns' },
      { metric: 'Zero manual handoff drift', context: 'Tokens compile directly from Git into npm packages' },
      { metric: '100% WCAG 2.2 AA', context: 'Automated CI linting on color contrast and focus rings' }
    ],
    deliverables: [
      'W3C Community Group Design Token Architecture',
      'Accessible Data Table with Virtualized Keyboard Nav',
      'Density Token System (Compact / Balanced / Relaxed)',
      'Documentation Site with live code playgrounds'
    ],
    toolsUsed: ['Style Dictionary', 'Figma Variables & Tokens Studio', 'TypeScript', 'Storybook', 'Axe Core'],
    keyDecisions: [
      {
        decision: 'Decoupled color role semantics from absolute hue names (e.g. `color.surface.critical` not `color.red.500`)',
        rationale: 'Allowed dark mode and high-contrast accessibility themes to remap instantly without touching a single component file.',
        tradeoff: 'Slightly higher initial onboarding curve for junior frontend engineers.'
      },
      {
        decision: 'Strict limit of three border-radius tokens across all 4 products',
        rationale: 'Prevents the visual fragmentation where buttons, modals, badges, and cards all have discordant corners.',
        tradeoff: 'Refused bespoke radius requests from individual marketing landing pages.'
      }
    ],
    accentColor: '#B46C1E',
    featured: true,
    wireframeHighlight: {
      label: 'Token Tier Architecture',
      description: 'Global primitives → Semantic aliases → Component bindings. Guaranteed zero hardcoded hex values in production frontend code.'
    }
  },
  {
    id: 'aura-sound-studio',
    slug: 'aura-sound-studio',
    title: 'Aura Spatial Audio Canvas',
    client: 'Aura Labs',
    year: '2023',
    role: 'Principal Interaction Designer',
    category: 'Creative Interfaces',
    tagline: 'Infinite node-graph and 3D sound positioning editor for live theatrical sound engineers.',
    problemStatement: 'Surround sound spatialization software historically forced audio engineers to manipulate separate X, Y, Z coordinate sliders for every speaker channel, breaking creative flow and making real-time actor tracking during live performances stressful.',
    ergonomicConstraint: 'Fast-paced live theater control rooms where audio operators have split visual attention between the stage and the laptop.',
    solutionNarrative: 'Created an intuitive canvas combining 2D plan-view spatial speaker grids with kinetic gesture physics, bezier audio attenuation curves, and haptic keyboard chords for blind channel routing.',
    outcomes: [
      { metric: '3x faster track routing', context: 'From 45s per scene change to 14s using gesture canvas' },
      { metric: 'Zero accidental mute bugs', context: 'Redesigned critical audio safety gates with two-finger confirm' },
      { metric: '60 FPS canvas redraw', context: 'Streamlined visual node footprint to reduce GPU overhead' }
    ],
    deliverables: [
      'Spatial Node-Graph Interaction Model',
      'Radial Audio Attenuation Visualizer',
      'Blind Keyboard Navigation System for FOH Operators',
      'Dark Auditorium Low-Luminance Color Theme'
    ],
    toolsUsed: ['Figma', 'Web Audio API Canvas Prototyping', 'Canvas 2D / WebGL', 'Midi Controller Rig'],
    keyDecisions: [
      {
        decision: 'Luminance floor capped at 12% across entire interface',
        rationale: 'FOH control booths in live theater sit in pitch darkness behind the audience; standard screens cast visible light into the house.',
        tradeoff: 'Requires strict attention to perceptual contrast without bright white glare.'
      },
      {
        decision: 'Chorded hotkeys for destructive commands (Solo / Mute all)',
        rationale: 'A single misclick on "mute all" during a live Broadway performance is fatal. Two-key simultaneous chord prevents accidental trigger.',
        tradeoff: 'Requires short 10-minute training session for sound interns.'
      }
    ],
    accentColor: '#3B6B55',
    featured: false,
    wireframeHighlight: {
      label: 'Kinetic Speaker Grid',
      description: 'Nodes snap to acoustic soundstage vectors with spring physics, giving tactile feedback to virtual spatial coordinates.'
    }
  }
];
