import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://astro-first-pr.zeabur.app',
  integrations: [tailwind({ applyBaseStyles: false })],
});