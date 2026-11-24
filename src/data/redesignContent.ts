export interface ProjectItem {
  id: string;
  index: string;
  client: string;
  title: string;
  category: string;
  tagline: string;
  image: string;
  videoUrl?: string;
  link: string;
  deliverables: string[];
}

export interface ServiceItem {
  number: string;
  name: string;
  description: string;
  tags: string[];
}

export const content = {
  name: "Anurag K",
  role: "Graphic Designer & Video Editor",
  location: "Kozhikode, Kerala, India",
  tagline: [
    "GRAPHIC DESIGNER &",
    "VIDEO EDITOR",
    "TURNING IDEAS INTO IMPACTFUL VISUALS"
  ],
  mascotWords: {
    first: "GO",
    second: "OD",
    mascotLabel: "Craft"
  },
  introParagraph: [
    { text: "For years, I've been ", style: "normal" },
    { text: "designing", style: "bold" },
    { text: ", ", style: "normal" },
    { text: "animating", style: "italic" },
    { text: ", ", style: "normal" },
    { text: "directing", style: "red" },
    { text: ", and ", style: "normal" },
    { text: "editing", style: "bold" },
    { text: " high-impact content for ", style: "normal" },
    { text: "technology products and forward-thinking brands.", style: "red" }
  ],
  badgeText: "ANURAG K · GRAPHIC DESIGN & VIDEO · KOZHIKODE · ",
  about: {
    headline: "COMBINING CREATIVITY WITH STRATEGIC THINKING.",
    paragraphs: [
      "Creative and detail-oriented Graphic Designer and Video Editor with a passion for delivering high-quality visual content. Skilled in creating engaging social media creatives, branding materials, and dynamic video edits that effectively communicate ideas.",
      "Currently serving as Graphic Designer at BufferBytes Technologies on-site, producing comprehensive brand identities and product visual collaterals. Previously engineered high-frequency motion graphics and kinetic typography campaigns at Haris&Co. in Kozhikode.",
      "Backed by a Computer Science degree from Calicut University, Thenhipalem. This technical foundation brings mathematical precision, asset optimization, and seamless developer empathy to every visual asset I craft."
    ]
  },
  projects: [
    {
      id: "bufferbytes",
      index: "01",
      client: "BUFFERBYTES TECHNOLOGIES",
      title: "TECH BRAND SYSTEM",
      category: "Brand & Visual Identity",
      tagline: "Comprehensive visual identity, product marketing banners, and modular 12-column grid system.",
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80",
      link: "#",
      deliverables: ["Brand Identity Manual", "Marketing Decks", "Vector Asset Library"]
    },
    {
      id: "haris",
      index: "02",
      client: "HARIS&CO. AGENCY",
      title: "KINETIC MOTION LAB",
      category: "Motion & After Effects",
      tagline: "High-retention social motion campaigns, cubic-bezier kinetic typography, and video choreography.",
      image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1200&q=80",
      link: "#",
      deliverables: ["After Effects Templates", "Kinetic Type", "Campaign Cutdowns"]
    },
    {
      id: "video-edits",
      index: "03",
      client: "CREATIVE CLIENTS",
      title: "DYNAMIC VIDEO EDITS",
      category: "Video Editing & Post",
      tagline: "Multi-track sequence editing in Premiere Pro with Lumetri color grading and rhythmic sound sync.",
      image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=1200&q=80",
      link: "#",
      deliverables: ["Premiere Pro Multi-Cam", "Sound Design Sync", "Social Carousels"]
    },
    {
      id: "coreflow",
      index: "04",
      client: "COREFLOW SYSTEMS",
      title: "DEVELOPER CONSOLE UI",
      category: "UI/UX & Design Systems",
      tagline: "CS-grounded monospaced data grids, accessible color state tokens, and terminal dashboards.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
      link: "#",
      deliverables: ["Figma Variables", "Contrast Specification", "Interactive Prototype"]
    },
    {
      id: "view-all",
      index: "05",
      client: "PORTFOLIO ARCHIVE",
      title: "VIEW ALL WORK",
      category: "Full Showcase",
      tagline: "Explore 40+ client collaterals, motion reels, and brand books.",
      image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80",
      link: "#contact",
      deliverables: ["Motion Reel 2025", "Brand Guidelines PDF", "Figma Community Kit"]
    }
  ] as ProjectItem[],
  services: [
    {
      number: "01",
      name: "BRANDING & VISUAL IDENTITY",
      description: "Distinctive logo systems, brand manuals, typography guidelines, and scalable marketing collateral for print and digital.",
      tags: ["Adobe Illustrator", "Photoshop", "Brand Books", "Vector Assets"]
    },
    {
      number: "02",
      name: "MOTION GRAPHICS & KINETIC TYPE",
      description: "High-retention typography choreography in After Effects, brand stings, and audio-synchronized video animations.",
      tags: ["After Effects", "Kinetic Typography", "Lottie", "Ease Curves"]
    },
    {
      number: "03",
      name: "DYNAMIC VIDEO EDITING",
      description: "Rhythm-matched cuts, multi-camera sequencing, sound mixing, Lumetri color correction, and social media reels.",
      tags: ["Premiere Pro", "Multi-Cam", "Sound Sync", "Color Grading"]
    },
    {
      number: "04",
      name: "UI/UX & DESIGN SYSTEMS",
      description: "Computer science-grounded digital interfaces, modular Figma component libraries, and design token pipelines.",
      tags: ["Figma", "Design Tokens", "WCAG AAA", "Frontend Handoff"]
    }
  ] as ServiceItem[],
  contact: {
    email: "anurag.designsystems@gmail.com",
    linkedin: "https://www.linkedin.com/in/anurag-k-63a9b434a/",
    bufferbytesCompany: "https://www.linkedin.com/company/104448861/",
    harisCompany: "https://www.linkedin.com/company/76888825/",
    university: "https://www.linkedin.com/school/15105611/",
    github: "https://github.com",
    availability: "Open to new opportunities and professional collaborations"
  }
};
