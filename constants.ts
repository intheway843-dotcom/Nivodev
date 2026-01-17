import { Project, ExperienceItem, Skill } from './types';

export const NAV_LINKS = [
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export const SKILLS: Skill[] = [
  { name: 'React', category: 'frontend' },
  { name: 'TypeScript', category: 'frontend' },
  { name: 'Tailwind CSS', category: 'frontend' },
  { name: 'Next.js', category: 'frontend' },
  { name: 'Node.js', category: 'backend' },
  { name: 'PostgreSQL', category: 'backend' },
  { name: 'GraphQL', category: 'backend' },
  { name: 'Gemini API', category: 'tools' },
  { name: 'Docker', category: 'tools' },
  { name: 'AWS', category: 'tools' },
  { name: 'Git', category: 'tools' },
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    id: '1',
    role: 'Senior Frontend Engineer',
    company: 'TechFlow Solutions',
    period: '2021 - Present',
    description: 'Leading the frontend migration to React 18. Architected a reusable component library used across 5 products. Improved site performance metrics by 40%.'
  },
  {
    id: '2',
    role: 'Full Stack Developer',
    company: 'Creative Pulse',
    period: '2019 - 2021',
    description: 'Developed full-stack web applications using Node.js and React. Integrated payment gateways and managed database optimization for high-traffic e-commerce clients.'
  },
  {
    id: '3',
    role: 'Junior Web Developer',
    company: 'StartUp Inc',
    period: '2018 - 2019',
    description: 'Collaborated with design teams to implement pixel-perfect UIs. Assisted in API development and documentation.'
  }
];

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Nebula Dashboard',
    description: 'A real-time analytics dashboard visualizing complex data streams for SaaS businesses.',
    technologies: ['React', 'D3.js', 'TypeScript', 'Firebase'],
    imageUrl: 'https://picsum.photos/600/400?random=1',
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    id: '2',
    title: 'Echo Chat',
    description: 'An AI-powered messaging application leveraging LLMs for real-time translation and summarization.',
    technologies: ['Next.js', 'Gemini API', 'Tailwind', 'Socket.io'],
    imageUrl: 'https://picsum.photos/600/400?random=2',
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    id: '3',
    title: 'Vantage E-com',
    description: 'A headless e-commerce storefront designed for speed and conversion optimization.',
    technologies: ['Vue.js', 'Shopify API', 'Nuxt'],
    imageUrl: 'https://picsum.photos/600/400?random=3',
    liveUrl: '#',
    githubUrl: '#'
  }
];

export const SYSTEM_INSTRUCTION = `You are "Nivo", an AI assistant for a portfolio website.
Your goal is to answer questions about the developer Nivo Dev based on the following information:
- Senior Frontend Engineer with full-stack capabilities.
- Expert in React, TypeScript, and Node.js.
- Passionate about clean UI, performance, and AI integration.
- Currently working at TechFlow Solutions.
- Contact: hello@nivodev.com
- Available for freelance: Yes.

Keep answers concise, professional, yet friendly. If asked about something not in this context, politely say you only have information about Nivo's professional background.
`;