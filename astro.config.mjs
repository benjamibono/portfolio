// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  // Configuración de Astro
  publicDir: 'public', // Asegúrate de que esta configuración esté correcta
  integrations: [tailwind()],
  site: 'https://benjaminbono.com',
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto',
  },
  vite: {
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
