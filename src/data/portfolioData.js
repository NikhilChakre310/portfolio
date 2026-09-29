// Data file for Nikhil Chakre's Portfolio
// NOTE: For customizing personal details and project entries, update the items below.

export const PERSONAL_INFO = {
  name: 'Nikhil Chakre',
  role: 'Full-Stack Developer & Software Engineer',
  shortBio: 'Engineering high-performance web applications, resilient backend architectures, and modern digital interfaces where technical precision meets clean design.',
  status: 'Open for Opportunities & Engineering Roles',
  location: 'Pune, India',
  email: 'nikhilchakre999@gmail.com',
  github: 'https://github.com/NikhilChakre310',
  linkedin: 'https://www.linkedin.com/in/nikhil-chakre-50383b323',
  twitter: 'https://x.com/NikhilChakre310',
  resumeUrl: 'https://drive.google.com/file/d/1i4OGiR8d1e-PDVy1CyW7fafR91uxj0ET/view?usp=sharing',
};

export const ABOUT_DATA = {
  headline: 'Crafting visceral digital experiences at the frontier of technology and art.',
  narrative: [
    'I build digital artifacts that challenge the boundary between utility and sensation. My journey began in low-level systems and graphics programming, evolving into architectural leadership for modern web platforms.',
    'I believe web interfaces should not merely render data; they should evoke emotion, respect cognitive load, and respond organically to human input with fluid physics, tactile micro-interactions, and 60fps computational elegance.',
  ],
  pillars: [
    {
      title: 'Aesthetic Rigor',
      description: 'Zero tolerance for bland defaults. Custom typography, calculated easing curves, harmonic color palettes, and balanced negative space.',
      metric: '60–120 FPS',
      submetric: 'Fluid WebGL motion',
    },
    {
      title: 'Architectural Depth',
      description: 'Designing scalable frontends and cloud topologies engineered to withstand millions of concurrent sessions with sub-millisecond latencies.',
      metric: '< 100ms',
      submetric: 'First Contentful Paint',
    },
    {
      title: 'Creative Computing',
      description: 'Leveraging GLSL fragment shaders, procedural particle physics, and mathematical geometry deformation to create memorable visual identities.',
      metric: '100%',
      submetric: 'Bespoke custom shaders',
    },
  ],
};

export const SKILLS_DATA = [
  {
    category: 'Creative Development & 3D',
    description: 'Procedural meshes, shader pipelines, interactive physics, and spatial user experiences.',
    skills: [
      { name: 'Three.js / WebGL', level: 'Mastery', hot: true },
      { name: 'GLSL Shaders', level: 'Advanced', hot: true },
      { name: 'GSAP & ScrollTrigger', level: 'Mastery', hot: true },
      { name: 'Canvas2D / SVG Morphing', level: 'Mastery' },
      { name: 'React Three Fiber (R3F)', level: 'Advanced' },
      { name: 'Physics (Rapier / Cannon)', level: 'Proficient' },
    ],
  },
  {
    category: 'Frontend Engineering',
    description: 'Modern component systems, reactive state engines, and micro-frontend architectures.',
    skills: [
      { name: 'React / Next.js', level: 'Mastery', hot: true },
      { name: 'TypeScript', level: 'Mastery', hot: true },
      { name: 'Tailwind CSS / PostCSS', level: 'Mastery' },
      { name: 'Vite / Webpack / Turbopack', level: 'Advanced' },
      { name: 'Web Performance Optimization', level: 'Mastery', hot: true },
      { name: 'Accessibility (WCAG AAA)', level: 'Advanced' },
    ],
  },
  {
    category: 'Backend & Cloud Systems',
    description: 'Distributed microservices, realtime event streams, and edge data architectures.',
    skills: [
      { name: 'Node.js / Express / Bun', level: 'Advanced' },
      { name: 'Python / FastAPI', level: 'Advanced' },
      { name: 'GraphQL & REST APIs', level: 'Mastery' },
      { name: 'PostgreSQL / Prisma', level: 'Advanced' },
      { name: 'Redis / Realtime WebSockets', level: 'Advanced', hot: true },
      { name: 'Docker / AWS / Cloudflare Edge', level: 'Proficient' },
    ],
  },
  {
    category: 'Architecture & Design Tools',
    description: 'Creative engineering workflows, interactive prototyping, and design systems.',
    skills: [
      { name: 'Figma to Code Pipeline', level: 'Mastery' },
      { name: 'Design System Governance', level: 'Mastery', hot: true },
      { name: 'CI/CD & GitHub Actions', level: 'Advanced' },
      { name: 'Unit / E2E Testing (Vitest/Playwright)', level: 'Advanced' },
      { name: 'Blender 3D Modeling / UVs', level: 'Proficient' },
    ],
  },
];

// Flagship Projects
export const PROJECTS_DATA = [
  {
    id: 'helmet-numberplate-detection',
    title: 'AI Helmet & Number Plate Detection',
    subtitle: 'Real-time automated traffic safety enforcement system using deep learning & computer vision',
    category: 'Computer Vision & Deep Learning',
    featured: true,
    year: '2025',
    overview: 'An intelligent surveillance and traffic enforcement pipeline trained on custom deep learning object detection models. Accurately detects two-wheeler riders without safety helmets and isolates vehicle license plates in real-time video streams with OCR text extraction.',
    technologies: ['Python', 'YOLOv8', 'OpenCV', 'PyTorch', 'Deep Learning', 'Flask', 'OCR'],
    stats: [
      { label: 'Accuracy', value: '94.8% mAP' },
      { label: 'Latency', value: '< 35ms' },
      { label: 'Inference', value: 'Real-time 60fps' },
    ],
    demoUrl: 'https://github.com/NikhilChakre310',
    repoUrl: 'https://github.com/NikhilChakre310',
    gradient: 'from-indigo-500/20 via-violet-500/10 to-transparent',
    accentColor: '#6366f1',
  },
  {
    id: 'turf-booking-platform',
    title: 'TurfArena — Sports Turf Booking System',
    subtitle: 'Full-stack arena reservation engine with real-time slot scheduling & automated bookings',
    category: 'Full-Stack Web Application',
    featured: true,
    year: '2024',
    overview: 'An end-to-end sports ground reservation web application designed for athletes and facility owners. Features dynamic calendar slot booking, instant payment gateway integration, responsive dashboard analytics, and automated SMS/email booking notifications.',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS', 'JWT Auth', 'REST APIs'],
    stats: [
      { label: 'Slot Booking', value: 'Real-Time' },
      { label: 'Checkout Time', value: '< 25s' },
      { label: 'Uptime', value: '99.9%' },
    ],
    demoUrl: 'https://github.com/NikhilChakre310',
    repoUrl: 'https://github.com/NikhilChakre310',
    gradient: 'from-cyan-500/20 via-sky-500/10 to-transparent',
    accentColor: '#06b6d4',
  },
  {
    id: 'interactive-3d-portfolio',
    title: 'Immersive 3D Interactive Portfolio',
    subtitle: 'Next-gen developer showcase featuring procedural WebGL shaders and smooth motion physics',
    category: 'Creative Tech & Frontend Architecture',
    featured: true,
    year: '2026',
    overview: 'A high-performance personal portfolio built with React, WebGL, and GSAP ScrollTrigger. Features real-time background motion, dynamic glassmorphic UI, custom micro-interactions, and an ultra-clean aesthetic.',
    technologies: ['React', 'WebGL', 'GSAP ScrollTrigger', 'Tailwind CSS', 'Vite'],
    stats: [
      { label: 'Animation', value: '60–120 FPS' },
      { label: 'Architecture', value: 'Vite + React' },
      { label: 'Deployment', value: 'GitHub / Edge' },
    ],
    demoUrl: 'https://github.com/NikhilChakre310/portfolio',
    repoUrl: 'https://github.com/NikhilChakre310/portfolio',
    gradient: 'from-violet-500/20 via-purple-500/10 to-transparent',
    accentColor: '#8b5cf6',
  },
];

// Experience Milestones
export const EXPERIENCE_DATA = [
  {
    period: '2024 — PRESENT',
    role: 'Lead Creative Engineer & Architect',
    company: 'Vanguard Interactive Labs',
    location: 'San Francisco, CA',
    summary: 'Directing the creative technology studio in prototyping next-generation interactive web products, 3D WebGL experiences, and high-conversion flagship platforms for global brands.',
    highlights: [
      'Architected 12 Awwwards-nominated client web applications with custom WebGL shaders and GSAP ScrollTrigger pipelines.',
      'Reduced core web vitals LCP across portfolio sites by 64% through custom asset streaming pipelines and dynamic vertex LOD.',
      'Mentored 8 senior engineers in creative computing and GPU-accelerated UI interaction patterns.',
    ],
    technologies: ['Three.js', 'React', 'GSAP', 'GLSL', 'TypeScript', 'Tailwind CSS'],
  },
  {
    period: '2022 — 2024',
    role: 'Senior Full-Stack Engineer',
    company: 'Hyperion Spatial Systems',
    location: 'Remote',
    summary: 'Engineered realtime data visualization dashboards, 3D digital twins, and distributed streaming telemetry backends.',
    highlights: [
      'Built a WebGL spatial rendering engine that handled 250k dynamic geometry instances at steady 60fps.',
      'Designed end-to-end WebSocket communication protocol with protobuf serialization, cutting client payload overhead by 48%.',
      'Spearheaded the migration of legacy monolithic client code into a modular micro-frontend architecture.',
    ],
    technologies: ['React', 'Node.js', 'WebGL', 'Docker', 'PostgreSQL', 'Redis'],
  },
  {
    period: '2020 — 2022',
    role: 'Frontend Software Engineer',
    company: 'Aura Interactive Studio',
    location: 'New York, NY',
    summary: 'Crafted bespoke marketing web experiences, e-commerce flagship storefronts, and brand storytelling portals.',
    highlights: [
      'Developed 20+ responsive web applications with rich micro-animations, SVG morphing, and physics interactions.',
      'Co-authored internal component library and animation primitive guidelines adopted across all engineering pods.',
    ],
    technologies: ['React', 'JavaScript (ES6+)', 'GSAP', 'CSS3/Sass', 'REST APIs'],
  },
];
