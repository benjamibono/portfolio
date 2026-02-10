# Portfolio Project - Concept and Architecture

## Overview

This is a modern, performant personal portfolio website built with Astro 5 and Tailwind CSS 4. The site showcases professional experience, projects, skills, and provides contact information for Benjami Bono, a Full Stack Developer.

## Architecture

### Technology Stack

- **Framework**: Astro 5.17.1
  - Static Site Generation (SSG)
  - Component-based architecture
  - Built-in image optimization with Sharp
  - View Transitions API for smooth theme switching

- **Styling**: Tailwind CSS 4.1.18
  - CSS-based configuration (new in v4)
  - Custom theme with dark mode support
  - Utility-first approach
  - Self-hosted theme-toggles CSS

- **Build Tool**: Vite 6.4+
  - Fast HMR during development
  - Optimized production builds
  - CSS minification and bundling

- **Deployment**: Vercel
  - Automatic deployments from Git
  - Edge network CDN
  - Security headers configured

### Project Structure

```
portfolio/
├── public/                    # Static assets
│   ├── certificates/         # Certificate images
│   ├── CV.pdf               # Resume
│   ├── favicon.svg          # Site icon
│   ├── preview.webp         # Social preview image
│   └── robots.txt           # SEO crawler instructions
├── src/
│   ├── assets/
│   │   ├── images/          # Optimized project images
│   │   └── switchbutton.astro # Theme toggle component
│   ├── components/          # Reusable UI components
│   │   ├── icons/           # SVG icon components
│   │   ├── About.astro
│   │   ├── CertificateCarousel.astro
│   │   ├── Education.astro
│   │   ├── Experience.astro
│   │   ├── ProjectCard.astro
│   │   ├── Projects.astro
│   │   ├── SEO.astro
│   │   ├── SideCard.astro
│   │   ├── SkipLink.astro
│   │   ├── Skills.astro
│   │   └── SoftSkills.astro
│   ├── constants/           # Configuration and data
│   │   ├── metadata.ts      # Site metadata
│   │   └── projects.ts      # Project data
│   ├── layouts/
│   │   └── Layout.astro     # Base page layout
│   ├── pages/               # Route pages
│   │   ├── index.astro      # Homepage
│   │   ├── aboutme.astro    # About page
│   │   ├── certificates.astro
│   │   └── coming-soon.astro
│   ├── styles/
│   │   ├── global.css       # Global styles and Tailwind config
│   │   └── theme-toggles.min.css # Self-hosted theme toggle styles
│   └── types/
│       └── global.d.ts      # TypeScript type declarations
├── astro.config.mjs         # Astro configuration
├── package.json             # Dependencies and scripts
├── tailwind.config.mjs.bak  # Backup of old Tailwind v3 config
├── tsconfig.json            # TypeScript configuration
└── vercel.json              # Vercel deployment and security headers
```

## Key Features

### 1. Performance Optimization

- **Static Site Generation**: All pages pre-rendered at build time
- **Image Optimization**: Automatic WebP conversion, responsive images, lazy loading
- **CSS Optimization**: Tailwind CSS purging, minification, critical CSS inlining
- **Self-hosted Assets**: No external CDN dependencies (theme-toggles CSS)
- **Font Optimization**: Inter Variable font with proper loading strategy

### 2. Accessibility

- **Semantic HTML**: Proper use of landmarks (`<main>`, `<nav>`, etc.)
- **Skip Link**: Keyboard navigation support
- **ARIA Labels**: Descriptive labels for interactive elements
- **Focus Management**: Visible focus indicators
- **Screen Reader Support**: Proper heading hierarchy and alt text

### 3. SEO

- **Sitemap**: Auto-generated XML sitemap via @astrojs/sitemap
- **robots.txt**: Crawler instructions
- **Meta Tags**: Complete Open Graph and Twitter Card metadata
- **JSON-LD**: Structured data for Person and WebSite schemas
- **Canonical URLs**: Proper URL canonicalization
- **Semantic HTML**: Proper document structure

### 4. Dark Mode

- **System Preference Detection**: Respects user's OS theme preference
- **Manual Toggle**: Theme switcher with smooth transitions
- **Persistent State**: Theme preference saved to localStorage
- **View Transitions API**: Animated theme switching with clip-path reveal

### 5. Security

- **Content Security Policy**: Restricts resource loading
- **X-Frame-Options**: Prevents clickjacking
- **X-Content-Type-Options**: Prevents MIME sniffing
- **Referrer Policy**: Controls referrer information
- **Permissions Policy**: Restricts browser features
- **No Vulnerabilities**: All npm audit issues resolved

## Component Architecture

### Layout Component

The base layout (`Layout.astro`) provides:

- Global styles and fonts
- SEO meta tags via `<SEO>` component
- Skip link for accessibility
- Theme initialization script
- View Transitions API setup

### Page Components

- **Homepage** (`index.astro`): Grid layout with sidebar (profile, skills) and main content (about, projects, experience, education)
- **About Me** (`aboutme.astro`): Extended journey and biography
- **Certificates** (`certificates.astro`): Certificate carousel
- **Coming Soon** (`coming-soon.astro`): Placeholder for work-in-progress projects

### Reusable Components

- **SideCard**: Profile card with photo, bio, CTA buttons
- **Experience**: Work history with company logos and descriptions
- **Projects**: Project grid with cards
- **ProjectCard**: Individual project display with hover preview
- **Skills/SoftSkills**: Categorized skill pills
- **CertificateCarousel**: CSS scroll-snap carousel (no external dependencies)
- **SEO**: Centralized meta tag management with JSON-LD

## Data Management

### Constants

- **metadata.ts**: Site-wide configuration (title, description, URLs, social links)
- **projects.ts**: Project data with TypeScript interfaces

### Images

- Stored in `src/assets/images/` for optimization
- Processed by Astro's Image component
- Automatic WebP conversion and responsive srcsets

## Styling Approach

### Tailwind CSS v4

- **CSS-based Configuration**: Theme defined in `@theme` block in global.css
- **Custom Colors**: Brand colors defined as CSS variables
- **Custom Animations**: fadeIn and slideUp keyframes
- **Dark Mode**: Class-based dark mode with `.dark` prefix
- **Utility Classes**: Extensive use of Tailwind utilities

### Custom CSS

- **Global Styles**: Base styles, view transitions, component utilities
- **Scoped Styles**: Component-specific styles where needed
- **CSS Variables**: Theme colors defined as CSS custom properties

## Build Process

1. **Development**: `npm run dev` - Astro dev server with HMR
2. **Build**: `npm run build` - Static site generation
3. **Preview**: `npm run preview` - Preview production build locally
4. **Format**: `npm run format` - Prettier code formatting
5. **Lint**: `npm run lint` - ESLint code linting

## Deployment

- **Platform**: Vercel
- **Trigger**: Automatic on Git push to main branch
- **Build Command**: `npm run build`
- **Output Directory**: `dist/`
- **Security Headers**: Configured in `vercel.json`

## Future Enhancements

- Blog section with MDX support
- Contact form with backend integration
- Analytics integration
- Performance monitoring
- A/B testing for CTAs
- More interactive project showcases
