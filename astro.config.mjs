import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import react from '@astrojs/react';
import github from '@astrojs/github-pages';

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    [github()],
    react()],
  site: "https://brendanpf.github.io/Brendan-Final-Project/",
  base: "/Brendan-Final-Project/", // GitHub Pages repository name
  vite: {
    // Explicitly replace deprecated 'as: "raw"' usage if found
    build: {
      rollupOptions: {
        output: {
          globals: {
            query: '?raw',
            import: 'default'
          }
        }
      }
    }
  }
});