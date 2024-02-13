import rss, { pagesGlobToRssItems } from '@astrojs/rss';
import type { RSSFeedItem } from '@astrojs/rss';
import { getAllPosts } from 'src/utils.astro';

export async function GET(context: any) {
    const title = 'Astro Learner | Blog';
    const description = 'My journey learning Astro';

    const items = await getAllPosts();
    const itemsFixed: RSSFeedItem[] = items.map((item) => {
        const fixedItem = {
            ...item,
            link: item.url,
            title: item.title,
            pubDate: item.pubDate,
            description: item.description ? item.description : description,
        };
        return fixedItem;
    });

    return rss({
        title: title,
        description: description,
        site: context.site,
        items: itemsFixed,
        customData: `<language>en-us</language>`,
    });
}