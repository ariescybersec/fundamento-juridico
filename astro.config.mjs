import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // Pon aquí tu futuro dominio personalizado. 
  // Si aún no lo compras, pon por ahora: 'https://ariescybersec.github.io'
  site: 'https://fundamentojuridico.pe', 
  
  // Si usas el dominio personalizado, el base es '/'. 
  // (Si lo pruebas con la URL de github.io, tendrías que poner base: '/fundamento-juridico')
  base: '/', 
  
  integrations: [sitemap()],
  markdown: {
    shikiConfig: { theme: 'github-light' },
  },
});