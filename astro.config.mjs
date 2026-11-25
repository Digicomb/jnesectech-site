// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Live at https://jnesectech.com (GitHub Pages custom domain, public/CNAME).
export default defineConfig({
  site: 'https://jnesectech.com',
  // Old WordPress URLs are redirect stubs (src/pages/*.astro); keep them out of the sitemap.
  integrations: [
    sitemap({ filter: (page) => !/\/(about-us|services|contact)\/$/.test(page) }),
  ],
});
