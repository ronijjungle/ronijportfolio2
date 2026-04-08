// ─────────────────────────────────────────────────────────
// Astro Configuration — the "master control panel" for the site
// Think of this as the brand's operating manual:
//   - Which tools (integrations) we use
//   - How the site gets built and served
// ─────────────────────────────────────────────────────────

import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: "https://ronijbarahi.com",
  integrations: [
    tailwind(),
  ],
});
