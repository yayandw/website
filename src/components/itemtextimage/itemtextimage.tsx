'use client';

import Image from 'next/image';
import Link from 'next/link';
import Carousel from "@/components/corousel/carousel";

export default function ItemTextImage({year, title, works = undefined, url = ""}: {year: string, title: string, works?: string[], url?: string}) {
    return (
        <div className="grid grid-cols-5 items-start">
            <div className="mr-4">
                <span className="text-[#999999]">{year}</span>
            </div>
            <div className="col-span-4">
                <Link className="text-base font-medium text-[#111111] hover:underline" href={"#"}>
                    {title}
                </Link>
                <p className="text-[#555555]">PT easySoft Indonesia</p>
                {works !== undefined && (
                    <div className="max-w-1/2 mt-4">
                        <Carousel>
                            {works.map((src, index) => (
                                <Link key={index} href={url} target={url === "" ? "" : "_blank"}>
                                    <Image
                                        src={src}
                                        alt={`Slide ${index}`}
                                        width={128}
                                        height={128}
                                        className="object-cover rounded-2xl"
                                    />
                                </Link>
                            ))}
                        </Carousel>
                    </div>
                )}
            </div>
        </div>
    )
}