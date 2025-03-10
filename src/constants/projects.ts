import type { Project } from '../types/Project';

export const projects: Project[] = [
  {
    title: 'Ultramarinos El Calvo',
    description:
      "Crafted an easy-to-use, responsive website for a Michelin Star Chef's restaurant, featuring stunning food photography and seamless dining experience.",
    url: 'https://ultramarinoselcalvo.com/',
    technologies: ['Astro', 'Tailwind'],
  },
  {
    title: 'Dental Barcelo',
    description:
      "Transformed a dental clinic's online presence with a modern, user-friendly website that showcases their services and builds patient trust.",
    url: 'https://www.dentalbarcelo.com/',
    technologies: ['Astro', 'Tailwind'],
  },
  {
    title: 'My Study Buddy',
    description:
      'Revolutionized study sessions with AI-powered flashcards and interactive quizzes, making learning more engaging and effective than ever.',
    url: 'https://mystudybuddy.vercel.app/',
    technologies: ['Next.js'],
  },
  {
    title: 'Siam May Xerez',
    description:
      '⚠️ Work in progress: Creating a welcoming online space for a neighborhood martial arts gym, helping new students discover Muay Thai and MMA training options.',
    url: 'https://siammay.vercel.app/',
    technologies: ['Astro', 'Tailwind'],
  },
  {
    title: 'Nexus Corporate',
    description: 'Modern corporate website mockup with sleek animations and responsive design.',
    url: '/coming-soon',
    technologies: ['React & Tailwind'],
    isComingSoon: true,
  },
  {
    title: 'HomeCraft Social',
    description:
      "A social platform for sharing cooking and cleaning recipes, inspired by X's dynamics. Users can post, share and discover recipes from others.",
    url: '/coming-soon',
    technologies: ['React & Tailwind'],
    isComingSoon: true,
  },
  {
    title: 'Workout Tracker',
    description:
      'A workout tracking Web App that analyzes your exercise data with AI to provide personalized insights and recommendations.',
    url: '/coming-soon',
    technologies: ['Next.js'],
    isComingSoon: true,
  },
  {
    title: 'Movie Match',
    description:
      "A fun and interactive movie selector app that helps you decide what to watch. Swipe right and left and match with friends to find the perfect movie night pick!",
    url: '/coming-soon',
    technologies: ['Next.js'],
    isComingSoon: true,
  },
];
