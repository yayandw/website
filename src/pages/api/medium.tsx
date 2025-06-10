import {NextApiRequest, NextApiResponse} from 'next';
import Parser from 'rss-parser';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const parser = new Parser();
    try {
        const feed = await parser.parseURL('https://medium.com/feed/@yayandwicaksono');
        res.status(200).json(feed.items);
    } catch (error) {
        console.error('Error fetching feed:', error);
        res.status(500).json({error: 'Failed to fetch Medium posts'});
    }
}