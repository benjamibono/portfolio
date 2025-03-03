/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    colors: {
      white: '#fafafa',
      black: '#0a0a0a',
      border: '#e5e5e5',
      darkborder: '#262626',
      darkgrey: '#171717',
      lighttext: '#737373',
      darktext: '#a3a3a3',
      pillbg: '#f5f5f5',
      blue: '#0a67c2',
      purple: '#6e5494',
      granate: '#7a1414',
      lightblue: '#007ace',
    },
  },
  plugins: [],
};
