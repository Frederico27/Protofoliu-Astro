import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";
import vercel from '@astrojs/vercel/serverless';

// https://astro.build/config
export default defineConfig({
  site: 'https://protofoliu-astro.vercel.app/',
  output: 'hybrid',
  adapter: vercel(),
  integrations: [mdx(), sitemap(), tailwind()]
});