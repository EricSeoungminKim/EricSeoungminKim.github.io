import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  // site: Set this to your final GitHub Pages URL if you want absolute URLs in sitemap, e.g.
  // site: 'https://<username>.github.io/<repo>',
  integrations: [mdx(), sitemap(), tailwind()]
});