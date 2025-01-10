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
            '2xl': '1536px',
        },
        extend: {
            colors: {
                primary: 'var(--primary-text-color)',
                secondary: 'var(--secondary-text-color)',
                muted: 'var(--muted-text-color)',
                accent: 'var(--accent-text-color)',
                background: 'var(--background-color)',
            },
        },
    },
    plugins: [],
}

