import type { APIRoute } from "astro";
import { searchIndex } from "~/lib/search";

/**
 * The search index is served as its own file rather than inlined into every
 * page, and is fetched only when a visitor actually opens search.
 */
export const GET: APIRoute = () =>
  new Response(JSON.stringify(searchIndex), {
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
