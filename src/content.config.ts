import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const work = defineCollection({
  loader: glob({ base: './src/content/work', pattern: '**/*.md' }),
  schema: z.object({
    title: z.string(),
    // Short subject line, used under the title on the writeup page.
    subject: z.string(),
    // The one-line headline result shown on the home page (PRD §6).
    result: z.string(),
    date: z.date(),
    // Displayed date precision. Some source dates are only known to the month.
    datePrecision: z.enum(['day', 'month', 'range']).default('day'),
    dateLabel: z.string(),
    // Ordering on the home page. Lower first.
    order: z.number(),
    // null => renders the deliberate "code not public" line (PRD §7.5).
    code: z.object({ href: z.string(), label: z.string() }).nullable().default(null),
    codeNote: z.string().default('Code not public.'),
    description: z.string(),
  }),
});

export const collections = { work };
