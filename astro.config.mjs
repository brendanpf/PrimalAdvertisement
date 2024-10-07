import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  site: 'https://brendanpf.github.io/Brendan-Final-Project/',
  base: '/Brendan-Final-Project/',
  integrations: [
    tailwind(),
    react() 
  ],
});
