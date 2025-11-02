import { getCollection } from 'astro:content';
import type { APIRoute } from 'astro';

export const prerender = true;

export const GET: APIRoute = async ({ site }) => {
    const baseUrl = site?.toString().replace(/\/$/, '') || 'http://localhost:4321';

    // Get all blog posts (excluding drafts in production)
    const blogPosts = await getCollection('blog', ({ data }) => import.meta.env.DEV || !data.draft);

    // Get all portfolio/work items
    const portfolioItems = await getCollection('portfolio');

    // Get all unique tags from blog posts
    const tagSet = new Set<string>();
    for (const post of blogPosts) {
        for (const tag of post.data.tags || []) {
            tagSet.add(tag);
        }
    }

    // Static pages
    const staticPages = [
        { url: baseUrl, changefreq: 'weekly' as const, priority: 1.0, lastmod: undefined }, // Homepage
        { url: `${baseUrl}/work`, changefreq: 'monthly' as const, priority: 0.9, lastmod: undefined },
        { url: `${baseUrl}/blog`, changefreq: 'weekly' as const, priority: 0.9, lastmod: undefined },
        { url: `${baseUrl}/contact`, changefreq: 'monthly' as const, priority: 0.7, lastmod: undefined },
    ];

    // Blog posts
    const blogUrls = blogPosts.map((post) => ({
        url: `${baseUrl}/blog/${post.slug}/`,
        changefreq: 'monthly',
        priority: 0.8,
        lastmod: post.data.updatedDate || post.data.pubDate,
    }));

    // Portfolio/work items
    const workUrls = portfolioItems.map((item) => ({
        url: `${baseUrl}/work/${item.slug}/`,
        changefreq: 'monthly',
        priority: 0.8,
        lastmod: item.data.date,
    }));

    // Blog tag pages
    const tagUrls = Array.from(tagSet).map((tag) => ({
        url: `${baseUrl}/blog/tags/${tag}/`,
        changefreq: 'weekly' as const,
        priority: 0.6,
        lastmod: undefined,
    }));

    // Combine all URLs
    const allUrls = [...staticPages, ...blogUrls, ...workUrls, ...tagUrls];

    // Format date for sitemap
    const formatDate = (date: Date | undefined): string => {
        if (!date) return '';
        return date instanceof Date ? date.toISOString() : new Date(date).toISOString();
    };

    // Generate XML sitemap
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allUrls
            .map((item) => {
                const lastmod = formatDate(item.lastmod);
                return `  <url>
    <loc>${item.url}</loc>${lastmod ? `\n    <lastmod>${lastmod}</lastmod>` : ''}
    <changefreq>${item.changefreq}</changefreq>
    <priority>${item.priority}</priority>
  </url>`;
            })
            .join('\n')}
</urlset>`;

    return new Response(sitemap, {
        headers: {
            'Content-Type': 'application/xml; charset=utf-8',
        },
    });
};
