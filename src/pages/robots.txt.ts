import type { APIRoute } from "astro";

/**
 * Generated rather than static so the sitemap URL always matches the address
 * the site was actually built for (see the `site` option in astro.config.mjs).
 */
export const GET: APIRoute = ({ site }) =>
  new Response(
    `User-agent: *\nAllow: /\n\nSitemap: ${new URL("sitemap-index.xml", site).href}\n`,
    { headers: { "Content-Type": "text/plain; charset=utf-8" } },
  );
