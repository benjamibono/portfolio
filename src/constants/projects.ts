import type { ImageMetadata } from 'astro';
import nexbuyImage from '../assets/images/nexbuy.webp';
import calvoImage from '../assets/images/calvo.webp';
import studyImage from '../assets/images/study.webp';
import dentalImage from '../assets/images/dental.webp';
import thaiImage from '../assets/images/thai.webp';
import recipeImage from '../assets/images/recipe.webp'

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
    title: 'Siam May',
    description:
      'A full-stack web application for modern gym management, it offers real-time class scheduling, payment management, user roles and more.',
    url: 'https://siammay.com/',
    projectUrl: 'https://github.com/benjamibono/siam-may',
    technologies: ['Next.js', 'Tailwind'],
    image: thaiImage,
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
    title: 'Ultramarinos El Calvo',
    description:
      "Crafted an easy-to-use, responsive website for a Michelin Star Chef's restaurant, featuring stunning food photography and seamless dining experience.",
    url: 'https://ultramarinoselcalvo.com/',
    projectUrl: 'https://github.com/benjamibono/ultramarinos-el-calvo',
    technologies: ['Astro', 'Tailwind'],
    image: calvoImage,
  },
  {
    title: 'Dental Barcelo',
    description:
      "Transformed a dental clinic's online presence with a modern, user-friendly website that showcases their services and builds patient trust.",
    url: 'https://www.dentalbarcelo.com/',
    projectUrl: 'https://github.com/benjamibono/dental-barcelo',
    technologies: ['Astro', 'Tailwind'],
    image: dentalImage,
  },
  {
    title: 'Nexus Corporate',
    description:
      '⚠️ Work in progress: Modern corporate website mockup with sleek animations and responsive design.',
    url: 'https://nexus-app-gray.vercel.app/',
    projectUrl: 'https://github.com/benjamibono/nexus-app',
    technologies: ['React & Tailwind'],
  },
  {
    title: 'Workout Tracker',
    description:
      'A workout tracking Web App that analyzes your exercise data with AI to provide personalized insights and recommendations.',
    url: '/coming-soon',
    projectUrl: '/coming-soon',
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
