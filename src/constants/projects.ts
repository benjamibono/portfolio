import type { Project } from "../types/Project";

export const projects: Project[] = [
  {
    title: "Ultramarinos El Calvo",
    description:
      "Developed a responsive website for a Michelin Star Chef's restaurant.",
    url: "https://ultramarinoselcalvo.com/",
    technologies: ["Astro", "Tailwind"],
  },
  {
    title: "Dental Barcelo",
    description:
      "Designed a new website for a dental clinic to showcase services.",
    url: "https://www.dentalbarcelo.com/",
    technologies: ["Astro", "Tailwind"],
  },
  {
    title: "Siam May Xerez",
    description:
      "Created a new website for a Muay Thai and MMA gym to highlight their offerings.",
    url: "https://siammay.vercel.app/",
    technologies: ["Astro", "Tailwind"],
  },
  {
    title: "My Study Buddy",
    description:
      "AI-generated flashcards designed to enhance your study sessions with interactive quizzes.",
    url: "https://mystudybuddy.vercel.app/",
    technologies: ["Next.js"],
  },
  {
    title: "E-commerce Shop",
    description: "Coming Soon!",
    url: "/shop",
    technologies: ["Next.js"],
    isComingSoon: true,
  },
  {
    title: "Workout Tracker",
    description: "Coming Soon!",
    url: "/shop",
    technologies: ["Next.js"],
    isComingSoon: true,
  },
];
