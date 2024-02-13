import rss from '@astrojs/rss';
import { getAllPosts } from 'src/utils.astro';

export async function GET(context: any) {
    const posts = await getAllPosts();
    return rss({
        title: 'Astro Learner | Blog',
        description: 'My journey learning Astro',
        site: context.site,
        items: posts.map((post) => ({
          title: post.title,
          pubDate: post.pubDate,
          description: post.description,
          link: post.url,
        })),
        customData: `<language>en-us</language>`,
    });
}