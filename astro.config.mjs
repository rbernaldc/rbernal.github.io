import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';
import siteConfig from './src/data/site-config';

export default defineConfig({
  site: 'https://rbernal.github.io',
  output: 'static', // 🔧 ESTA LÍNEA ES CLAVE
  vite: {
    plugins: [tailwindcss()]
  },
  integrations: [mdx(), sitemap()]
});
