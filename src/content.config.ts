import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const cityContent = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/cityContent' }),
  schema: z.object({
    city: z.string(),
    citySlug: z.string(),
    intent: z.string(),
    intentSlug: z.string(),
    region: z.string().optional(),
    indexable: z.boolean().default(false),
    metaTitle: z.string(),
    metaDescription: z.string(),
    generatedAt: z.string().optional(),
    generatedBy: z.enum(['llm', 'manual']).default('manual'),
  }),
});

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    slug: z.string(),
    publishDate: z.string(),
    author: z.string().default('Legacy Windows editorial'),
    category: z.enum([
      'Cost & Quotes',
      'Energy & Regulations',
      'Product Comparison',
      'Period Properties',
    ]),
    readingTime: z.number().int().positive(),
    heroKeyword: z.string(),
  }),
});

export const collections = { cityContent, blog };
