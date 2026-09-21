// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.balbux.com',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()]
  },
  i18n: {
    defaultLocale: 'fr',
    locales: ['fr', 'es', 'en'],
    routing: {
      prefixDefaultLocale: false
    }
  }
});