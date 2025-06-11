import {NextApiRequest, NextApiResponse} from 'next';
import Parser from 'rss-parser';

const parser = new Parser();
const feedCache = {
    data: "{}",
    timestamp: 0,
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        const CACHE_TTL = 1000 * 60 * 60; // 1 hour
        if (feedCache.data && Date.now() - feedCache.timestamp < CACHE_TTL) {
            return res.status(200).json(JSON.parse(feedCache.data));
        }
        const feed = await parser.parseURL('https://medium.com/feed/@yayandwicaksono');
        feedCache.data = JSON.stringify(feed.items);
        feedCache.timestamp = Date.now();
        res.status(200).json(feed.items);
    } catch (error) {
        console.error('Error fetching feed:', error);
        res.status(500).json({error: 'Failed to fetch Medium posts'});
    }
}