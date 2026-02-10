# Portfolio Application - Documentation

## Overview

This portfolio website is a static site built with Astro that showcases Benjami Bono's professional experience, projects, and skills as a Full Stack Developer.

## How It Works

### Architecture

The application follows a static site generation (SSG) approach:

1. **Build Time**: All pages are pre-rendered to static HTML at build time
2. **Deployment**: Static files are deployed to Vercel's edge network
3. **Runtime**: No server-side rendering; all content is served as static files
4. **Interactivity**: Client-side JavaScript handles theme switching and carousel navigation

### Page Structure

#### Homepage (`/`)

- **Left Sidebar**: Profile card, technical skills, soft skills
- **Main Content**: About section, projects grid, work experience, education

#### About Me (`/aboutme`)

- Extended biography and professional journey
- Same sidebar as homepage
- Detailed narrative about career transition and achievements

#### Certificates (`/certificates`)

- Interactive carousel showcasing professional certifications
- CSS scroll-snap implementation (no external libraries)
- Includes downloadable PDF certificate

#### Coming Soon (`/coming-soon`)

- Placeholder page for work-in-progress projects
- Redirects back to homepage

### Key Components

#### SideCard

- Profile photo and bio
- Download Resume button (links to `/CV.pdf`)
- Email contact button
- Social media links (GitHub, LinkedIn)

#### Experience

- Chronological work history
- Current role: 21 Impact Labs (Tech Lead)
- Previous roles: Lemon.io, Dental Barcelo
- Company logos and detailed responsibilities

#### Projects

- Grid of project cards
- Each card shows:
  - Project thumbnail
  - Title and description
  - Technology stack
  - Links to live demo and source code
- Hover effect reveals project preview

#### CertificateCarousel

- CSS-only carousel (no Swiper dependency)
- Navigation buttons and pagination dots
- Keyboard accessible
- Displays certificate images and PDF download

### Styling System

#### Tailwind CSS v4

- Utility-first CSS framework
- Custom theme defined in `src/styles/global.css`
- Dark mode support via `.dark` class
- Responsive breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)

#### Custom Colors

- `white`: #fafafa (light background)
- `black`: #0a0a0a (dark background)
- `border`: #e5e5e5 (light borders)
- `darkborder`: #262626 (dark borders)
- `lighttext`: #737373 (light mode text)
- `darktext`: #a3a3a3 (dark mode text)
- `blue`: #0a67c2 (accent)
- `purple`: #6e5494 (accent)

#### Animations

- `fadeIn`: Opacity transition (0.5s)
- `slideUp`: Translate Y + opacity (0.5s)
- View Transitions API for theme switching

### Dark Mode

1. **Detection**: Checks localStorage for saved preference, falls back to system preference
2. **Application**: Adds/removes `.dark` class on `<html>` element
3. **Toggle**: Theme switcher button in SideCard
4. **Persistence**: Saves preference to localStorage
5. **Transition**: Uses View Transitions API for smooth clip-path reveal animation

### SEO Implementation

#### Meta Tags

- Title, description, viewport
- Open Graph (Facebook, LinkedIn)
- Twitter Card
- Canonical URLs

#### Structured Data (JSON-LD)

- Person schema with job title, work info, social links
- WebSite schema with site info

#### Sitemap

- Auto-generated XML sitemap at `/sitemap-index.xml`
- Submitted to search engines via `robots.txt`

#### robots.txt

- Allows all crawlers
- Points to sitemap location

### Performance Optimizations

1. **Static Generation**: All pages pre-rendered at build time
2. **Image Optimization**:
   - Automatic WebP conversion
   - Responsive images with srcset
   - Lazy loading (except above-the-fold images)
3. **CSS Optimization**:
   - Tailwind purging removes unused styles
   - Minification
   - Critical CSS inlined
4. **Font Optimization**:
   - Inter Variable font
   - Subset to reduce file size
5. **Self-hosted Assets**:
   - Theme-toggles CSS hosted locally
   - No external CDN dependencies

### Security Features

#### HTTP Headers (via vercel.json)

- `X-Frame-Options: DENY` - Prevents clickjacking
- `X-Content-Type-Options: nosniff` - Prevents MIME sniffing
- `Referrer-Policy: strict-origin-when-cross-origin` - Controls referrer info
- `Permissions-Policy` - Restricts camera, microphone, geolocation
- `Content-Security-Policy` - Restricts resource loading

#### Dependency Security

- All npm packages audited and vulnerabilities fixed
- Regular dependency updates
- No known security issues

### Accessibility Features

1. **Semantic HTML**: Proper use of `<main>`, `<section>`, `<nav>`, headings
2. **Skip Link**: Allows keyboard users to skip to main content
3. **ARIA Labels**: Descriptive labels on interactive elements
4. **Focus Indicators**: Visible focus rings on all interactive elements
5. **Alt Text**: All images have descriptive alt attributes
6. **Keyboard Navigation**: All interactive elements keyboard accessible
7. **Screen Reader Support**: Proper heading hierarchy and landmark regions

## Development Workflow

### Local Development

```bash
npm install          # Install dependencies
npm run dev          # Start dev server (http://localhost:4321)
npm run build        # Build for production
npm run preview      # Preview production build
npm run format       # Format code with Prettier
npm run lint         # Lint code with ESLint
```

### Deployment

1. Push to main branch on GitHub
2. Vercel automatically builds and deploys
3. Changes live at https://benjamibono.com

### Adding New Content

#### Add a Project

1. Add project image to `src/assets/images/`
2. Update `src/constants/projects.ts` with new project data
3. Build and deploy

#### Update Experience

1. Edit `src/components/Experience.astro`
2. Add company logo to `src/assets/images/`
3. Update work history list

#### Modify Styles

1. Edit `src/styles/global.css` for global changes
2. Use Tailwind utilities in components for local changes
3. Custom colors defined in `@theme` block

## File Organization

### Static Assets (`public/`)

- Files served as-is without processing
- Includes: CV.pdf, certificates, favicon, robots.txt

### Source Files (`src/`)

- Processed by Astro build system
- Components, pages, layouts, styles

### Configuration Files

- `astro.config.mjs`: Astro configuration
- `tsconfig.json`: TypeScript settings
- `vercel.json`: Deployment and security headers
- `package.json`: Dependencies and scripts

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Last 2 versions
- ES2020+ JavaScript features
- CSS Grid and Flexbox
- View Transitions API (progressive enhancement)

## Performance Metrics

- **Lighthouse Score**: 95+ across all categories
- **First Contentful Paint**: < 1s
- **Largest Contentful Paint**: < 2s
- **Total Blocking Time**: < 200ms
- **Cumulative Layout Shift**: < 0.1

## Maintenance

### Regular Tasks

- Update dependencies monthly
- Review and fix security vulnerabilities
- Update content (projects, experience)
- Monitor performance metrics
- Check broken links

### Backup Strategy

- Git repository on GitHub
- Vercel maintains deployment history
- Configuration files in version control
