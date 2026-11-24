import { WorkExperience } from '../types/portfolio';

export const EXPERIENCES: WorkExperience[] = [
  {
    period: '2023 — Present',
    role: 'Staff Product & Interaction Designer',
    company: 'Kite Health Systems',
    location: 'Remote / Boston, MA',
    focus: 'Clinical software ergonomics, fail-safe dosage calculations, and critical care bedside UI.',
    achievements: [
      'Led the end-to-end interface architecture of the pediatric ICU medication dosage calculator deployed across 14 hospital systems.',
      'Created the hospital system design tokens and audited 180+ clinical screens for WCAG 2.2 AAA legibility under fluorescent glare.',
      'Collaborated daily with pediatric intensive care physicians, staff nurses, and biomedical safety compliance leads.'
    ]
  },
  {
    period: '2021 — 2023',
    role: 'Senior Design Systems Lead',
    company: 'Relay Platforms',
    location: 'San Francisco, CA',
    focus: 'Cross-platform design token architecture, accessible data table primitives, and developer handoff tooling.',
    achievements: [
      'Standardized 38 accessible component primitives adopted across 4 business units, cutting design-to-PR cycle time by 40%.',
      'Built automated CI token validation pipeline in GitHub Actions, preventing unapproved color tokens from shipping to production.',
      'Authored the Relay Accessibility Playbook, training 30+ product designers and front-end engineers.'
    ]
  },
  {
    period: '2019 — 2021',
    role: 'Product Designer (Hardware & Field Software)',
    company: 'Chronos Energy',
    location: 'Denver, CO',
    focus: 'Ruggedized mobile tablet applications for utility substation inspectors in offline switchyards.',
    achievements: [
      'Designed sunlight-readable Android tablet interface used by 600+ field technicians with thick safety glove ergonomics.',
      'Conducted 45+ hours of in-field observational research in active utility substations in freezing and high-heat conditions.',
      'Replaced paper inspection workflows with an offline-first Bluetooth sync engine that achieved 94% daily field completion.'
    ]
  },
  {
    period: '2017 — 2019',
    role: 'UI/UX Designer',
    company: 'Studio Form & Craft',
    location: 'Chicago, IL',
    focus: 'Information architecture, typography systems, and interaction design for specialized enterprise tools.',
    achievements: [
      'Delivered bespoke design systems, web dashboards, and interaction prototypes for client software products.',
      'Established the agency’s user testing lab and ergonomic prototyping standards using tactile hardware rigs.'
    ]
  }
];
