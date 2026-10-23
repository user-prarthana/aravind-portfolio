/**
 * Aravind V — Portfolio Data
 * Source of truth: Verified Resume
 * 
 * NOTE: All personal details, experience, education, and skills are strictly
 * sourced from Aravind V's verified resume. Video titles use standard accessible
 * editorial naming ('Instagram Reel 01' - '10') without invented campaigns or stats.
 */

export const personalInfo = {
  name: 'Aravind V',
  title: 'Marketing × Creative × Content',
  tagline: 'Ideas that connect. Content that communicates.',
  shortIntro:
    'I bring ideas, storytelling, and brand communication together to create meaningful digital content.',
  location: 'Palakkad, Kerala, India',
  email: 'av972491@gmail.com',
  phone: '+91 70348 58639',
  phoneDisplay: '+91 70348 58639',
  linkedin: 'https://linkedin.com/in/aravind-vamadevan',
  languages: ['English', 'Malayalam', 'Hindi'],
  creativeMindset: 'Ideas are only valuable when they communicate.',
  workingStyle:
    'Creative thinking with a marketing mindset. Comfortable moving between idea generation, writing, planning, coordination, and execution while keeping the audience and brand objective at the centre.',
  aboutBio: [
    'Marketing-minded creative professional with an MBA in Marketing and hands-on experience across social media, content development, creative direction, and digital brand communication.',
    'I turn ideas, events, and brand messages into content people can understand, notice, and engage with. Currently working across creative and social media functions, with practical experience in content ideation, scripting, campaign communication, and digital execution.',
  ],
  highlights: [
    'Marketing & Creative Thinking',
    'Content Development',
    'Social Media Communication',
    'Creative Direction',
    'Scriptwriting & Content Ideation',
    'Turning Events & Brand Messages into Engaging Content',
  ],
};

export const currentExperience = {
  organization: 'Lead College Autonomous',
  designation: 'Creative Head | Social Media Marketing Head',
  period: '2025 – Present',
  location: 'Palakkad, Kerala',
  responsibilities: [
    'Lead creative development for digital marketing and social media communication.',
    'Develop concepts, content ideas, scripts, and marketing copy for digital platforms.',
    'Plan and execute content across Instagram, LinkedIn, and YouTube.',
    'Translate institutional events, student activities, and initiatives into engaging brand content.',
    'Work with internal teams on campaigns, promotional communication, and creative requirements.',
    'Contribute to digital brand visibility through consistent, audience-focused content.',
    'Develop video-led and visual content ideas based on audience interests and social media trends.',
    'Support creative execution from initial idea and scripting through final communication.',
  ],
};

export const educationList = [
  {
    degree: 'MBA in Marketing',
    institution: 'Calicut University',
    period: '2023 – 2025',
    focus: 'Strategic marketing, brand communications, and consumer behavior analysis.',
  },
  {
    degree: 'B.Com in Travel & Tourism',
    institution: 'Kerala University',
    period: '2020 – 2023',
    focus: 'Commerce fundamentals, destination marketing, and industry dynamics.',
  },
];

export const coreExpertise = [
  {
    id: 'content-strategy',
    title: 'Content Strategy',
    description: 'Planning intentional digital content pipelines aligned with audience attention and brand objectives.',
    iconName: 'Compass',
  },
  {
    id: 'creative-direction',
    title: 'Creative Direction',
    description: 'Guiding the visual, tonal, and storytelling identity across video formats and digital brand touchpoints.',
    iconName: 'Clapperboard',
  },
  {
    id: 'social-media-marketing',
    title: 'Social Media Marketing',
    description: 'Orchestrating platform-native distribution, audience growth, and community engagement.',
    iconName: 'Share2',
  },
  {
    id: 'content-script-writing',
    title: 'Content & Script Writing',
    description: 'Crafting compelling narrative hooks, video scripts, and copy that communicate with clarity.',
    iconName: 'PenTool',
  },
  {
    id: 'campaign-ideation',
    title: 'Campaign Ideation',
    description: 'Transforming institutional themes, events, and initiatives into high-impact creative campaigns.',
    iconName: 'Lightbulb',
  },
  {
    id: 'brand-communication',
    title: 'Brand Communication',
    description: 'Ensuring unified voice and consistent messaging across digital touchpoints and student communities.',
    iconName: 'Megaphone',
  },
  {
    id: 'digital-content-planning',
    title: 'Digital Content Planning',
    description: 'Structuring editorial calendars, cross-channel rollouts, and production schedules for timely delivery.',
    iconName: 'CalendarCheck',
  },
  {
    id: 'audience-focused-storytelling',
    title: 'Audience-focused Storytelling',
    description: 'Humanizing brand narratives to capture viewer attention and turn casual watchers into active advocates.',
    iconName: 'Eye',
  },
];

export const digitalPlatforms = [
  {
    name: 'Instagram',
    role: 'Visual & Vertical Video Content',
    url: null, // Placeholder until verified profile link is supplied
    isVerifiedUrl: false,
    placeholderNote: 'Official Instagram profile link pending client confirmation',
  },
  {
    name: 'LinkedIn',
    role: 'Professional Brand & Thought Leadership',
    url: 'https://linkedin.com/in/aravind-vamadevan',
    isVerifiedUrl: true,
  },
  {
    name: 'YouTube',
    role: 'Long-form Video & Campus Showcases',
    url: null, // Placeholder until verified channel link is supplied
    isVerifiedUrl: false,
    placeholderNote: 'Official YouTube channel link pending client confirmation',
  },
];

export const portfolioMetrics = [
  {
    label: 'CATALOG ARCHIVES',
    value: '10',
    unit: 'Reels',
    detail: 'Curated 9:16 vertical videos',
    description: 'Direct clickable links to published campaign reels',
  },
  {
    label: 'CURRENT LEADERSHIP',
    value: 'Creative Head',
    unit: 'Lead College',
    detail: 'Social Media Marketing Head',
    description: 'Leading digital creative development (2025–Present)',
  },
  {
    label: 'ACADEMIC RIGOR',
    value: 'MBA',
    unit: 'Marketing',
    detail: 'Calicut University (2023–25)',
    description: 'Strategic brand communication & storytelling',
  },
  {
    label: 'WORKFLOW DELIVERY',
    value: 'End-to-End',
    unit: 'Pipeline',
    detail: 'Concept to Distribution',
    description: 'Scripting, creative direction, and digital rollout',
  },
];

/**
 * 10 Selected Instagram Reel Links
 * Authoritative destinations provided in prompt.
 * Reorder or update freely in this array.
 */
export const portfolioReels = [
  {
    id: 'reel-01',
    reelCode: 'DVlUeCwk4xA',
    number: '01',
    collection: '01',
    title: 'Instagram Reel 01',
    category: 'Vertical Content',
    format: '9:16 Reel',
    url: 'https://www.instagram.com/reel/DVlUeCwk4xA/?obrf=MWx1d3IzeHVxcG9pMw==',
    thumbnail: null, // Uses designed editorial placeholder
    aspectRatio: '9:16',
    theme: {
      gradient: 'from-amber-500/20 via-sky-500/10 to-transparent',
      accentColor: '#2563EB',
    },
  },
  {
    id: 'reel-02',
    reelCode: 'DU0HdZ8Ecln',
    number: '02',
    collection: '01',
    title: 'Instagram Reel 02',
    category: 'Vertical Content',
    format: '9:16 Reel',
    url: 'https://www.instagram.com/reel/DU0HdZ8Ecln/?vrfl=NnFxNWpjYXZqZDNy',
    thumbnail: null,
    aspectRatio: '9:16',
    theme: {
      gradient: 'from-blue-500/20 via-indigo-500/10 to-transparent',
      accentColor: '#2563EB',
    },
  },
  {
    id: 'reel-03',
    reelCode: 'DWIGhvSEnpE',
    number: '03',
    collection: '01',
    title: 'Instagram Reel 03',
    category: 'Vertical Content',
    format: '9:16 Reel',
    url: 'https://www.instagram.com/reel/DWIGhvSEnpE/?exln=OWc2NjQwd3hmNjlx',
    thumbnail: null,
    aspectRatio: '9:16',
    theme: {
      gradient: 'from-emerald-500/20 via-teal-500/10 to-transparent',
      accentColor: '#2563EB',
    },
  },
  {
    id: 'reel-04',
    reelCode: 'DXeV7-zkhAp',
    number: '04',
    collection: '01',
    title: 'Instagram Reel 04',
    category: 'Vertical Content',
    format: '9:16 Reel',
    url: 'https://www.instagram.com/reel/DXeV7-zkhAp/?vrfl=MXNlZjgxczVqcndlcg==',
    thumbnail: null,
    aspectRatio: '9:16',
    theme: {
      gradient: 'from-violet-500/20 via-purple-500/10 to-transparent',
      accentColor: '#2563EB',
    },
  },
  {
    id: 'reel-05',
    reelCode: 'DYR56BoMj_8',
    number: '05',
    collection: '01',
    title: 'Instagram Reel 05',
    category: 'Vertical Content',
    format: '9:16 Reel',
    url: 'https://www.instagram.com/reel/DYR56BoMj_8/?psln=MWtyb2ZuZ2hvcWd4dA==',
    thumbnail: null,
    aspectRatio: '9:16',
    theme: {
      gradient: 'from-cyan-500/20 via-blue-500/10 to-transparent',
      accentColor: '#2563EB',
    },
  },
  {
    id: 'reel-06',
    reelCode: 'DYMilosOSYb',
    number: '06',
    collection: '02',
    title: 'Instagram Reel 06',
    category: 'Vertical Content',
    format: '9:16 Reel',
    url: 'https://www.instagram.com/reel/DYMilosOSYb/?exln=MXBkZnRrMzR1MjB3dw==',
    thumbnail: null,
    aspectRatio: '9:16',
    theme: {
      gradient: 'from-rose-500/20 via-orange-500/10 to-transparent',
      accentColor: '#2563EB',
    },
  },
  {
    id: 'reel-07',
    reelCode: 'DWG0I_7BG4P',
    number: '07',
    collection: '02',
    title: 'Instagram Reel 07',
    category: 'Vertical Content',
    format: '9:16 Reel',
    url: 'https://www.instagram.com/reel/DWG0I_7BG4P/?obrf=MW9yc3o4NmJ0OWJxcQ==',
    thumbnail: null,
    aspectRatio: '9:16',
    theme: {
      gradient: 'from-teal-500/20 via-sky-500/10 to-transparent',
      accentColor: '#2563EB',
    },
  },
  {
    id: 'reel-08',
    reelCode: 'DcQtJLOAhTZ',
    number: '08',
    collection: '02',
    title: 'Instagram Reel 08',
    category: 'Vertical Content',
    format: '9:16 Reel',
    url: 'https://www.instagram.com/reel/DcQtJLOAhTZ/?psln=M3B1bW9nd3dmejVz',
    thumbnail: null,
    aspectRatio: '9:16',
    theme: {
      gradient: 'from-indigo-500/20 via-blue-500/10 to-transparent',
      accentColor: '#2563EB',
    },
  },
  {
    id: 'reel-09',
    reelCode: 'DVYKVxrk6Fy',
    number: '09',
    collection: '02',
    title: 'Instagram Reel 09',
    category: 'Vertical Content',
    format: '9:16 Reel',
    url: 'https://www.instagram.com/reel/DVYKVxrk6Fy/?psln=MW0zemJzYWxvaXh5cw==',
    thumbnail: null,
    aspectRatio: '9:16',
    theme: {
      gradient: 'from-amber-500/20 via-rose-500/10 to-transparent',
      accentColor: '#2563EB',
    },
  },
  {
    id: 'reel-10',
    reelCode: 'DVTvl6bju0R',
    number: '10',
    collection: '02',
    title: 'Instagram Reel 10',
    category: 'Vertical Content',
    format: '9:16 Reel',
    url: 'https://www.instagram.com/reel/DVTvl6bju0R/?xtok=MTdpcW9wdDJ1djA4dQ==',
    thumbnail: null,
    aspectRatio: '9:16',
    theme: {
      gradient: 'from-sky-500/20 via-indigo-500/10 to-transparent',
      accentColor: '#2563EB',
    },
  },
];
