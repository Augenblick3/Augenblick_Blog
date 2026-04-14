import { defineCollection, z } from 'astro:content';

// Films, TV, Music, Albums — single review/note per item
const mediaCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    type: z.enum(['film', 'tv', 'music', 'album', 'book']),
    creator: z.string().optional(),
    yearCreated: z.number().optional(),
    dateConsumed: z.coerce.date(),
    rating: z.number().min(1).max(5).optional(),
    cover: z.string().optional(),
    tags: z.array(z.string()).optional(),
    draft: z.boolean().default(false),
    // For books: reading journal entries embedded in the Markdown body
    // Use headings like "## Chapter 3 · 2026-03-15" to separate reading sessions
  }),
});

// Research posts: project updates, paper notes, tech posts, weekly reports
const researchCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    type: z.enum(['project', 'paper-note', 'technical', 'weekly']),
    date: z.coerce.date(),
    tags: z.array(z.string()).optional(),
    draft: z.boolean().default(false),
  }),
});

// Personal musings / thoughts
const musingsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.string()).optional(),
    draft: z.boolean().default(false),
  }),
});

// Fitness log: one entry per day
const fitnessCollection = defineCollection({
  type: 'content',
  schema: z.object({
    date: z.coerce.date(),
    // Activities is a free-form list; details go in the Markdown body
    summary: z.string().optional(),    // e.g. "跑步 5km · 深蹲 3×10"
    totalMinutes: z.number().optional(),
    mood: z.enum(['great', 'good', 'okay', 'tired']).optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = {
  media: mediaCollection,
  research: researchCollection,
  musings: musingsCollection,
  fitness: fitnessCollection,
};
