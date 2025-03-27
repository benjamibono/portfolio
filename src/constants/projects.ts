import type { ImageMetadata } from 'astro';
import nexbuyImage from '../assets/images/nexbuy.webp';
import calvoImage from '../assets/images/calvo.webp';
import studyImage from '../assets/images/study.webp';
import dentalImage from '../assets/images/dental.webp';
import thaiImage from '../assets/images/thai.webp';

export interface Project {
  title: string;
  description: string;
  url: string;
  technologies: string[];
  image?: ImageMetadata;
  isComingSoon?: boolean;
}

export const projects: Project[] = [
  {
    title: 'NexBuy Ecommerce',
    description:
      'Modern e-commerce platform with product catalog, advanced search, secure payments and user management.',
    url: 'https://ecom-mockup.vercel.app/',
    technologies: ['Next.js', 'Tailwind'],
    image: nexbuyImage,
  },
  {
    title: 'Ultramarinos El Calvo',
    description:
      "Crafted an easy-to-use, responsive website for a Michelin Star Chef's restaurant, featuring stunning food photography and seamless dining experience.",
    url: 'https://ultramarinoselcalvo.com/',
    technologies: ['Astro', 'Tailwind'],
    image: calvoImage,
  },
  {
    title: 'My Study Buddy',
    description:
      'Revolutionized study sessions with AI-powered flashcards and interactive quizzes, making learning more engaging and effective than ever.',
    url: 'https://mystudybuddy.vercel.app/',
    technologies: ['Next.js'],
    image: studyImage,
  },
  {
    title: 'Dental Barcelo',
    description:
      "Transformed a dental clinic's online presence with a modern, user-friendly website that showcases their services and builds patient trust.",
    url: 'https://www.dentalbarcelo.com/',
    technologies: ['Astro', 'Tailwind'],
    image: dentalImage,
  },
  {
    title: 'Siam May Xerez',
    description:
      'Created a welcoming online space for a neighborhood martial arts gym, helping new students discover Muay Thai and MMA training options.',
    url: 'https://siammay.vercel.app/',
    technologies: ['Astro', 'Tailwind'],
    image: thaiImage,
  },
  {
    title: 'Nexus Corporate',
    description:
      '⚠️ Work in progress: Modern corporate website mockup with sleek animations and responsive design.',
    url: 'https://nexus-app-gray.vercel.app/',
    technologies: ['React & Tailwind'],
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
  // {
  //   title: 'Movie Match',
  //   description:
  //     "A fun and interactive movie selector app that helps you decide what to watch. Swipe right and left and match with friends to find the perfect movie night pick!",
  //   url: '/coming-soon',
  //   technologies: ['Next.js'],
  //   isComingSoon: true,
  // },
];
