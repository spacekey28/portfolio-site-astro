import type { APIRoute } from 'astro';

export const prerender = true;

export const GET: APIRoute = async ({ site }) => {
    const isProduction = import.meta.env.PROD;
    const baseUrl = site?.toString().replace(/\/$/, '') || 'http://localhost:4321';

    // In production: allow all crawlers and include sitemap
    // In development/staging: disallow all crawlers
    const robotsTxt = isProduction
        ? `User-agent: *
Allow: /

# Sitemap
Sitemap: ${baseUrl}/sitemap.xml

# Crawl-delay for respectful crawling
Crawl-delay: 1
`
        : `User-agent: *
Disallow: /
`;

    return new Response(robotsTxt, {
        headers: {
            'Content-Type': 'text/plain; charset=utf-8',
        },
    });
};
