// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// Static frontend, no adapter, no SSR — deployable to any static host.
// TODO(brief): replace `site` with the client's real domain before publishing.
export default defineConfig({
  site: 'https://ornekfirma.com',
  output: 'static',
  trailingSlash: 'never',
  build: { format: 'directory' },
  // No sitemap while the site is a taslak (see _shared/taslak-mode.md §5).
  vite: { plugins: [tailwindcss()] },
});
