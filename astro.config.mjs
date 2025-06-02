// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import vercel from '@astrojs/vercel';

export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },
  output: 'server',

  i18n: {
    defaultLocale: "en",
    locales: ["es", "en", "lt"],
    routing: {
      prefixDefaultLocale: false,
      redirectToDefaultLocale: true,
    }
  },

  adapter: vercel()
});