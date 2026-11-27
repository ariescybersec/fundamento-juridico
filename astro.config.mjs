import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://fundamentojuridico.com', 
  // base: '/fundamento-juridico',  <-- ELIMINA ESTA LÍNEA COMPLETAMENTE
  integrations: [sitemap()],
  markdown: {
    shikiConfig: { theme: 'github-light' },
  },
});