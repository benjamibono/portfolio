/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ['class'],
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
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
            muted: '#e5e5e5',
            muted1: '#f2f2f2',
            muted2: '#a3a3a3',
            muted3: '#262626',
        },
    },
    plugins: [],
}

