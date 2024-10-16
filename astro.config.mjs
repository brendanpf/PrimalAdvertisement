import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  site: 'http://www.primaladvertisement.com/',
  integrations: [
    tailwind(),
    react() 
  ],
});