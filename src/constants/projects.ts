import type { ImageMetadata } from 'astro';
import nexbuyImage from '../assets/images/nexbuy.webp';
import siamImage from '../assets/images/thai.webp';
import studyImage from '../assets/images/study.webp';
import recipeImage from '../assets/images/recipe.webp';

export interface Project {
  title: string;
  description: string;
  url: string;
  projectUrl: string;
  technologies: string[];
  image?: ImageMetadata;
  isComingSoon?: boolean;
}

export const projects: Project[] = [
  {
    title: 'Recipe Master',
    description:
      "A social platform for sharing cooking and cleaning recipes, inspired by X's dynamics. Users can post, share and discover recipes from others.",
    url: 'https://recipe-master-opal.vercel.app/',
    projectUrl: 'https://github.com/benjamibono/recipe-master',
    technologies: ['Next.js', 'Tailwind'],
    image: recipeImage,
  },
  {
    title: 'NexBuy Ecommerce',
    description:
      'Modern e-commerce platform with product catalog, advanced search, secure payments and user management.',
    url: 'https://ecom-mockup.vercel.app/',
    projectUrl: 'https://github.com/benjamibono/ecommerce',
    technologies: ['Next.js', 'Tailwind'],
    image: nexbuyImage,
  },
  {
    title: 'My Study Buddy',
    description:
      'Revolutionized study sessions with AI-powered flashcards and interactive quizzes, making learning more engaging and effective than ever.',
    url: 'https://mystudybuddy.vercel.app/',
    projectUrl: 'https://github.com/benjamibono/study-buddy',
    technologies: ['Next.js'],
    image: studyImage,
  },
  {
    title: 'Siam May',
    description:
      'A full-stack web application for modern gym management, it offers real-time class scheduling, payment management, user roles and more.',
    url: 'https://siammay.com/',
    projectUrl: 'https://github.com/benjamibono/siam-may',
    technologies: ['Next.js', 'Tailwind'],
    image: siamImage,
  },
];
