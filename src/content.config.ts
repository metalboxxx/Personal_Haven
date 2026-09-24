import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Shared by writeups and project hubs: everything the home index and a page
// header need.
const entry = {
  title: z.string(),
  // Short subject line, shown above the title and in the index. Optional.
  subject: z.string().optional(),
  // The one-line headline result shown on the home page (PRD §6).
  result: z.string(),
  date: z.date(),
  // Displayed date precision. Some source dates are only known to the month.
  datePrecision: z.enum(['day', 'month', 'range']).default('day'),
  // Optional; without it the month and year of `date` are shown (src/lib/date.ts).
  dateLabel: z.string().optional(),
  // Ordering on the home page. Lower first.
  order: z.number(),
  // null => renders the deliberate "code not public" line (PRD §7.5).
  code: z.object({ href: z.string(), label: z.string() }).nullable().default(null),
  codeNote: z.string().default('Code not public.'),
  description: z.string(),
};

// A writeup. Nested under a folder (e.g. `quantitative-trading/pead`) it is a
// study inside a project and is listed on that project's page, not on home.
const work = defineCollection({
  loader: glob({ base: './src/content/work', pattern: '**/*.md' }),
  schema: z.object(entry),
});

// A project hub: one page describing the whole project, listing the writeups
// nested under the folder of the same name in `work`.
const projects = defineCollection({
  loader: glob({ base: './src/content/projects', pattern: '*.md' }),
  schema: z.object(entry),
});

export const collections = { work, projects };
