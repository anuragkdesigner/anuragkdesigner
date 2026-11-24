import { WorkExperience, Education } from '../types/portfolio';

export const EXPERIENCES: WorkExperience[] = [
  {
    period: 'Nov 2025 — Present',
    role: 'Graphic Designer',
    company: 'BufferBytes Technologies',
    location: 'On-site',
    type: 'Full-time',
    companyUrl: 'https://www.linkedin.com/company/104448861/',
    tools: ['Figma', 'Adobe Photoshop', 'Adobe Illustrator', 'Visual Design', 'UI Systems'],
    focus: 'Brand identity systems, digital product UI graphics, tech marketing collaterals, and design consistency.',
    achievements: [
      'Lead graphic and visual design for technology products, translating complex software capabilities into clear, high-impact visuals.',
      'Produce comprehensive visual assets including marketing collateral, product interface graphics, and brand identity guidelines.',
      'Work on-site alongside engineers and product managers to ensure visual fidelity from Figma to final product release.'
    ]
  },
  {
    period: 'Nov 2024 — Jun 2025',
    role: 'Graphic Designer',
    company: 'Haris&Co.',
    location: 'Kozhikode, Kerala, India',
    type: 'Internship',
    companyUrl: 'https://www.linkedin.com/company/76888825/',
    tools: ['Adobe After Effects', 'Adobe Photoshop', 'Motion Design', 'Creative Strategy'],
    focus: 'Kinetic typography, motion graphics, campaign visual identities, and social storytelling.',
    achievements: [
      'Engineered dynamic motion graphics and social campaign visuals using After Effects and Photoshop in a high-growth creative agency.',
      'Designed high-performing visual content, campaign carousels, and brand narratives driving measurable engagement.',
      'Collaborated with creative directors and video production leads to develop unified motion language and storyboards.'
    ]
  }
];

export const EDUCATION: Education = {
  institution: 'Calicut University',
  degree: 'Degree Program',
  field: 'Computer Science',
  location: 'Thenhipalem, Malappuram, Kerala, India',
  details: 'Strong computer science foundation covering algorithms, data structures, UI engineering principles, and web technologies. Enables seamless technical collaboration with software developers.'
};
