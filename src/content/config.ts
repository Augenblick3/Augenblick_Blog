import { defineCollection, z } from 'astro:content';

// Films, TV, Music, Albums — single review/note per item
const mediaCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    type: z.enum(['film', 'tv', 'music', 'album', 'book']),
    // Film/TV: 导演 | Music: 演唱者 | Book: 作者
    creator: z.string().optional(),
    yearCreated: z.number().optional(),
    dateConsumed: z.coerce.date(),
    rating: z.number().min(1).max(5).optional(),
    cover: z.string().optional(),
    tags: z.array(z.string()).optional(),
    draft: z.boolean().default(false),

    // Film / TV extras
    screenwriter: z.string().optional(),           // 编剧
    cast: z.array(z.string()).optional(),           // 主演，格式: ["演员 (角色)", ...]

    // Book extras
    translator: z.string().optional(),             // 译者

    // Music / Album extras
    lyricist: z.string().optional(),               // 作词
    composer: z.string().optional(),               // 作曲
    arranger: z.string().optional(),               // 编曲
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
    isRestDay: z.boolean().default(false),
    summary: z.string().optional(),
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
