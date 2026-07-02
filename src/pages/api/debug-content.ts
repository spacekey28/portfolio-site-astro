import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

export const prerender = false;

export const GET: APIRoute = async () => {
    try {
        const posts = await getCollection('blog');
        const work = await getCollection('portfolio');
        return new Response(
            JSON.stringify({
                blogSlugs: posts.map((p) => p.id),
                portfolioSlugs: work.map((w) => w.id)
            }),
            { headers: { 'Content-Type': 'application/json' } }
        );
    } catch (e) {
        return new Response(String(e), { status: 500 });
    }
};



