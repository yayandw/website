'use client'

import {useEffect, useState} from 'react';
import ItemText from "@/components/itemtext/itemtext";
import Section from "@/components/section/section";

interface FeedItem {
    title: string;
    link: string;
    pubDate: string;
    ['content:encodedSnippet']: string;
}

interface Post {
    year: string;
    title: string;
    description: string;
    url: string;
}

export default function Writing() {
    const [posts, setPosts] = useState<Post[]>([]);
    const [limit] = useState(2);
    const [offset, setOffset] = useState(0);
    const [hasMore, setHasMore] = useState(true);

    const formatDate = (date: Date): string => {
        const options: Intl.DateTimeFormatOptions = {
            day: '2-digit',
            month: 'long',
            year: 'numeric'
        };
        return new Intl.DateTimeFormat('en-GB', options).format(date);
    };

    const loadPosts = async (loadOffset: number) => {
        const res = await fetch(`/api/medium?limit=${limit}&offset=${loadOffset}`);
        const data: FeedItem[] = await res.json();

        if (data.length === 0) {
            setHasMore(false);
            return [];
        }

        return data.map((item) => {
            const pubDate = new Date(item.pubDate);
            return {
                year: formatDate(pubDate),
                title: item.title,
                description: item['content:encodedSnippet'].substring(0, 500),
                url: item.link
            };
        });
    };

    useEffect(() => {
        loadPosts(offset).then((newPosts) => {
            setPosts((prev) => [...prev, ...newPosts]);
            setOffset((prev) => prev + limit);
        });
    }, []);

    const handleLoadMore = async () => {
        const newPosts = await loadPosts(offset);
        if (newPosts.length > 0) {
            setPosts((prev) => [...prev, ...newPosts]);
            setOffset((prev) => prev + limit);
        } else {
            setHasMore(false);
        }
    };

    return (
        <Section title="Writing">
            {posts.length > 0 ? (
                <>
                    {posts.map((post, index) => (
                        <ItemText
                            key={index}
                            year={post.year}
                            title={post.title}
                            description={post.description}
                            url={post.url}
                        />
                    ))}
                    {hasMore && (
                        <button
                            onClick={handleLoadMore}
                            className="mt-4 px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
                        >
                            Load More
                        </button>
                    )}
                </>
            ) : (
                <p className="text-gray-500">Loading...</p>
            )}
        </Section>
    );
}