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
    extend: {
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out forwards',
        'slide-up': 'slideUp 0.5s ease-in-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
    colors: {
      white: '#fafafa',
      black: '#0a0a0a',
      transparent: 'transparent',
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
