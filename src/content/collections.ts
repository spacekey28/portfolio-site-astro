import { defineCollection, z, reference, image } from "astro:content";

const seo = z.object({
    title: z.string().optional(),
    description: z.string().max(160).optional(),
    image: image().optional()
});

const blog = defineCollection({
    type: "content",
    schema: z.object({
        title: z.string(),
        description: z.string().max(160),
        pubDate: z.date(),
        updatedDate: z.date().optional(),
        cover: image().optional(),
        tags: z.array(z.string()).default([]),
        category: z.enum(["engineering", "design", "notes", "news"]).default("notes"),
        draft: z.boolean().default(false),
        authors: z.array(reference("authors")).default([]),
        seo: seo.optional()
    })
});

const authors = defineCollection({
    type: "data",
    schema: z.object({
        name: z.string(),
        avatar: image().optional(),
        role: z.string().optional(),
        bio: z.string().optional(),
        links: z.array(z.object({ label: z.string(), url: z.string().url() })).default([])
    })
});

const portfolio = defineCollection({
    type: "content",
    schema: z.object({
        title: z.string(),
        summary: z.string().max(200),
        date: z.date(),
        client: z.string().optional(),
        role: z.string().optional(),
        cover: image().optional(),
        gallery: z.array(image()).default([]),
        tags: z.array(z.string()).default([]),
        seo: seo.optional()
    })
});

export const collections = { blog, authors, portfolio };


