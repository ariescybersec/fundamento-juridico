import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://fundamentojuridico.netlify.app', // ← cámbialo por tu dominio
  integrations: [sitemap()],
  markdown: {
    shikiConfig: { theme: 'github-light' },
  },
});