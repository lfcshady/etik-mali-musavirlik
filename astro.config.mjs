// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// Static frontend, no adapter, no SSR — deployable to any static host.
// TODO(brief): replace `site` with the client's real domain before publishing.
export default defineConfig({
  site: 'https://etikmusavirlik.com.tr',
  output: 'static',
  trailingSlash: 'never',
  build: { format: 'directory' },
  integrations: [sitemap()],
  vite: { plugins: [tailwindcss()] },
});
