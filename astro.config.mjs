import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
    output: 'static',
    site: process.env.SITE || 'http://localhost:4321',
    vite: {
        plugins: [tailwindcss()]
    },
    integrations: [react()],
    // Only use adapter when building, not during dev to avoid Edge Functions error
    adapter: import.meta.env.PROD ? netlify() : undefined,
});
