// @ts-check
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  // Configuración de Astro
  publicDir: 'public', // Asegúrate de que esta configuración esté correcta
  integrations: [tailwind()]
});
