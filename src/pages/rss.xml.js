import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
    const posts = (await getCollection('blog', ({ data }) => !data.draft))
        .sort((a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime())
        .slice(0, 50);

    return rss({
        title: 'Site Blog',
        description: 'Latest posts',
        site: context.site,
        items: posts.map(({ data, slug }) => ({
            title: data.title,
            description: data.description,
            pubDate: data.pubDate,
            link: `/blog/${slug}/`
        }))
    });
}


