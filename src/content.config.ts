import { defineCollection, reference } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const seo = z.object({
    title: z.string().optional(),
    description: z.string().max(160).optional(),
    image: z.string().optional()
});

const blog = defineCollection({
    loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
    schema: z.object({
        title: z.string(),
        description: z.string().max(160),
        pubDate: z.coerce.date(),
        updatedDate: z.coerce.date().optional(),
        cover: z.string().optional(),
        tags: z.array(z.string()).default([]),
        category: z.enum(['web', 'app', 'notes', 'news']).default('notes'),
        draft: z.boolean().default(false),
        authors: z.array(reference('authors')).default([]),
        seo: seo.optional()
    })
});

const authors = defineCollection({
    loader: glob({ pattern: '**/*.json', base: './src/content/authors' }),
    schema: z.object({
        name: z.string(),
        avatar: z.string().optional(),
        role: z.string().optional(),
        bio: z.string().optional(),
        links: z.array(z.object({ label: z.string(), url: z.url() })).default([])
    })
});

const portfolio = defineCollection({
    loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/portfolio' }),
    schema: z.object({
        title: z.string(),
        summary: z.string().max(200),
        date: z.coerce.date(),
        client: z.string().optional(),
        role: z.string().optional(),
        website: z.url().optional(),
        cover: z.string().optional(),
        gallery: z.array(z.string()).default([]),
        tags: z.array(z.string()).default([]),
        seo: seo.optional()
    })
});

export const collections = { blog, authors, portfolio };
