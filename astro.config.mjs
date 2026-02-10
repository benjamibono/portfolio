// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // Configuración de Astro
  publicDir: 'public',
  integrations: [sitemap()],
  site: 'https://benjamibono.dev',
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto',
  },
  vite: {
    plugins: [tailwindcss()],
    build: {
      cssMinify: true,
      rollupOptions: {
        output: {
          manualChunks: {
            'inter-font': ['@fontsource-variable/inter'],
          },
        },
      },
    },
  },
});
