// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// TODO(domain): PRD §4 leaves the domain open. Until a domain is purchased the
// site lives on a Cloudflare Pages subdomain. Swap `site` when that is decided;
// it only affects sitemap/canonical URLs, not the build.
export default defineConfig({
  site: 'https://example.pages.dev',
  output: 'static',
  // Route reserved, deliberately not built (PRD §3): /writing.
  // Do not add src/pages/writing.astro in v1.
  integrations: [sitemap()],
  build: { inlineStylesheets: 'auto' },
});
