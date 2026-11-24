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
  integrations: [sitemap()],
});
