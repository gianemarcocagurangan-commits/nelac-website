// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
/**
 * Canonical URLs and the sitemap are baked in at build time.
 *
 * On Netlify, `URL` is the site's primary address — it becomes the custom
 * domain automatically once one is attached — and `DEPLOY_PRIME_URL` is the
 * address of a branch or pull-request preview. Using them keeps preview
 * deploys from advertising the production domain as their canonical.
 */
const site =
  process.env.DEPLOY_PRIME_URL ||
  process.env.URL ||
  "https://nelacollege.edu.ph";

export default defineConfig({
  site,
  // Netlify serves directory-index files without a trailing slash, so canonical
  // URLs, internal links and the sitemap all agree on the no-slash form.
  trailingSlash: "never",
  integrations: [sitemap()],
  build: {
    inlineStylesheets: "auto",
  },
  image: {
    // Original NELAC photographs are optimised at build time; no remote images are used.
    responsiveStyles: true,
  },
});
