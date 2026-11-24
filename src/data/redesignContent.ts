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
  introParagraph: [
    { text: "I'm Anurag, a ", style: "normal" },
    { text: "passionate graphic designer", style: "bold" },
    { text: ", creating ", style: "normal" },
    { text: "distinctive brand identities", style: "bold" },
    { text: ", ", style: "normal" },
    { text: "social media campaigns", style: "italic" },
    { text: ", and ", style: "normal" },
    { text: "high-impact advertising posters", style: "bold" },
    { text: " that connect with audiences and drive engagement.", style: "normal" }
  ],
  badgeText: "ANURAG K · GRAPHIC DESIGN & ART · KOZHIKODE · ",
  about: {
    headline: "CRAFTING VISUAL EXPERIENCES WITH PASSION AND PRECISION.",
    paragraphs: [
      "I'm Anurag, a passionate and creative graphic designer based in Kozhikode, Kerala. I'm excited to bring brands to life through bold visual identities, scroll-stopping social media creatives, and dynamic poster designs.",
      "Currently serving as Graphic Designer at BufferBytes Technologies on-site, producing comprehensive brand identities, social media creatives, and visual collaterals. Previously engineered high-frequency motion graphics and kinetic campaigns at Haris&Co.",
      "Educated at Sree Narayana College (BSc Computer Science, 2021–2024) and HACA.Design School (Creative Design & Communication, 2024–2025). This blend of computational logic and design mastery gives my work technical precision and aesthetic depth."
    ]
  },
  projects: [
    {
      id: "coffee-tale",
      index: "01",
      client: "COFFEE TALE · MALABAR PLANTATIONS",
      title: "COFFEE TALE BRAND IDENTITY",
      category: "Visual Identity & Packaging",
      tagline: "Premium coffee branding celebrating the art of coffee through lush Malabar heritage, coffee packaging, cup mockups, and rich earth palette.",
      image: "./projects/coffee-tale.png",
      link: "#contact",
      deliverables: ["Brand Identity", "Packaging Design", "Coffee Cup Mockups", "Color Palette (#AB7743, #4A2C21)"]
    },
    {
      id: "social-media-posts",
      index: "02",
      client: "FOOD & LIFESTYLE CLIENTS",
      title: "SOCIAL MEDIA FEEDS & STORIES",
      category: "Social Media & Advertising",
      tagline: "1080x1350 static feeds & dynamic stories engineered for viral conversion: burgers, chicken biryani, pizza, noodles, and Asian bowls.",
      image: "./projects/social-media-posts.png",
      link: "#contact",
      deliverables: ["Instagram Feeds (1080x1350)", "Story Creatives", "Food Retouching", "Typography Hierarchy"]
    },
    {
      id: "social-media-mockup",
      index: "03",
      client: "RESTAURANT & COMMERCE ADS",
      title: "PIZZA CAMPAIGN MOBILE SHOWCASE",
      category: "App & Mobile UX Presentation",
      tagline: "Photorealistic in-hand smartphone showcase demonstrating real-world user feed interaction, appetising visual hierarchy, and ad retention.",
      image: "./projects/social-media-mockup.png",
      link: "#contact",
      deliverables: ["3D Device Mockup", "Feed Engagement", "Visual Hierarchy", "Direct Conversion"]
    },
    {
      id: "posters-splash",
      index: "04",
      client: "HEINZ, 7UP & BEVERAGE BRANDS",
      title: "COMMERCIAL PRODUCT SPLASH ART",
      category: "Commercial Splash Advertising",
      tagline: "High-octane commercial product splash posters featuring Heinz Tomato Ketchup, 7UP refreshing lime chill, and Tropicana fresh orange juice.",
      image: "./projects/posters-splash.png",
      link: "#contact",
      deliverables: ["Liquid Splash Compositing", "Product Retouching", "Dynamic Lighting", "Print Advertising"]
    },
    {
      id: "posters-cinema",
      index: "05",
      client: "CINEMATIC & EDITORIAL CULTURE",
      title: "FURIOSA, VOGUE & PORSCHE 911",
      category: "Movie Key Art & Editorial",
      tagline: "High-impact cultural posters: Furiosa: A Mad Max Saga key art, Vogue fashion editorial featuring Margot Robbie, and Stars Porsche 911.",
      image: "./projects/posters-cinema.png",
      link: "#contact",
      deliverables: ["Movie Poster Key Art", "Vogue Cover Editorial", "Automotive Poster", "Color Grading"]
    },
    {
      id: "posters-editorial",
      index: "06",
      client: "AYURVE NATURAL WELLNESS",
      title: "BOTANICAL COSMETICS & WELLNESS",
      category: "Lifestyle & Skincare Posters",
      tagline: "Herbal botanical serum dropper poster, regional Malayalam dental & skin campaign, and 'Naturally Yours, Beautifully' luxury skincare jar.",
      image: "./projects/posters-editorial.png",
      link: "#contact",
      deliverables: ["Cosmetic Retouching", "Regional Malayalam Copy", "Botanical Lighting", "Luxury Key Art"]
    }
  ] as ProjectItem[],
  services: [
    {
      number: "01",
      name: "BRANDING & VISUAL IDENTITY",
      description: "Distinctive logo systems, brand manuals, packaging designs, and complete identity guidelines for modern brands.",
      tags: ["Adobe Illustrator", "Photoshop", "Packaging Design", "Brand Guidelines"]
    },
    {
      number: "02",
      name: "SOCIAL MEDIA CREATIVES & ADS",
      description: "High-conversion Instagram feeds, stories, carousels, and promotional graphics with thumb-stopping visual hierarchy.",
      tags: ["Photoshop", "Instagram 1080x1350", "Story Ads", "Food & Product Retouching"]
    },
    {
      number: "03",
      name: "COMMERCIAL POSTERS & KEY ART",
      description: "High-impact movie key art, fashion editorial layouts, liquid product splashes, and automotive advertising posters.",
      tags: ["Photoshop Composite", "Liquid Splash Art", "Key Art", "Print Ready CMYK"]
    },
    {
      number: "04",
      name: "DYNAMIC VIDEO EDITING",
      description: "Rhythm-matched cuts, sound sync, title graphics, and multi-track pacing in Premiere Pro for social reels and campaign assets.",
      tags: ["Premiere Pro", "Rhythmic Cuts", "Sound Sync", "Color Correction"]
    }
  ] as ServiceItem[],
  contact: {
    email: "anuragkthusharam123@gmail.com",
    phone: "8129963457",
    whatsapp: "https://wa.me/918129963457",
    instagram: "https://instagram.com/anurag___k",
    instagramHandle: "@anurag___k",
    behance: "https://www.behance.net/anuragk17",
    linkedin: "https://www.linkedin.com/in/anurag-k-63a9b434a/",
    bufferbytesCompany: "https://www.linkedin.com/company/104448861/",
    harisCompany: "https://www.linkedin.com/company/76888825/",
    education: [
      { institution: "Sree Narayana College", degree: "BSc Computer Science", period: "2021 - 2024" },
      { institution: "HACA.Design School", degree: "Creative Design & Communication", period: "2024 - 2025" }
    ],
    availability: "Available for freelance projects, full-time roles, and creative collaborations"
  }
};
