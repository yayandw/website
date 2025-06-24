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
    const formatDate = (date: Date): string => {
        const options: Intl.DateTimeFormatOptions = {
            day: '2-digit',
            month: 'long',
            year: 'numeric'
        };
        return new Intl.DateTimeFormat('en-GB', options).format(date);
    };
    useEffect(() => {
        fetch('/api/medium')
            .then(res => res.json())
            .then((posts: FeedItem[]) => {
                const parsedPosts = posts.map((item: FeedItem) => {
                    const pubDate = new Date(item.pubDate);
                    const post: Post = {
                        year: formatDate(pubDate),
                        title: item.title,
                        description: item["content:encodedSnippet"].substring(0, 500),
                        url: item.link
                    }
                    return post;
                });
                setPosts(parsedPosts);
            });
    }, []);

    return (
        <Section title="Writing">
            {posts.length > 0 ? (
                posts.map((post, index) => (
                    <ItemText
                        key={index}
                        year={post.year}
                        title={post.title}
                        description={post.description}
                        url={post.url}
                    />
                ))
            ) : (
                <p className="text-gray-500">Loading...</p>
            )}
        </Section>
    )
}