// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// REVIEW: served at https://digicomb.github.io/jnesectech-site/ until DNS cutover.
// At cutover: set site to 'https://jnesectech.com', remove base, restore public/CNAME
// (jnesectech.com), drop the noindex (automatic once base is removed),
// restore public/robots.txt to Allow + sitemap, and set the Pages custom domain.
export default defineConfig({
  site: 'https://digicomb.github.io',
  base: '/jnesectech-site',
  // Old WordPress URLs are redirect stubs (src/pages/*.astro); keep them out of the sitemap.
  integrations: [
    sitemap({ filter: (page) => !/\/(about-us|services|contact)\/$/.test(page) }),
  ],
});
