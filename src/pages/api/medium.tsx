import {NextApiRequest, NextApiResponse} from 'next';
import Parser from 'rss-parser';

const parser = new Parser();
const feedCache = {
    data: "{}",
    timestamp: 0,
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        const { limit = 3, offset = 0 } = req.query;
        const CACHE_TTL = 1000 * 60 * 60; // 1 hour
        if (feedCache.data && Date.now() - feedCache.timestamp < CACHE_TTL) {
            const slicedFeed = JSON.parse(feedCache.data).slice(parseInt(offset as string), parseInt(offset as string) + parseInt(limit as string));
            return res.status(200).json(slicedFeed);
        }
        const feed = await parser.parseURL('https://medium.com/feed/@yayandwicaksono');
        feedCache.data = JSON.stringify(feed.items);
        feedCache.timestamp = Date.now();
        const slicedFeed = feed.items.slice(parseInt(offset as string), parseInt(offset as string) + parseInt(limit as string));
        res.status(200).json(slicedFeed);
    } catch (error) {
        console.error('Error fetching feed:', error);
        res.status(500).json({error: 'Failed to fetch Medium posts'});
    }
}