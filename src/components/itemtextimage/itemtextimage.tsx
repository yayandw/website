'use client';

import {Swiper, SwiperSlide} from 'swiper/react';
import {Autoplay} from 'swiper/modules';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/navigation';
import Link from 'next/link';

export default function ItemTextImage({year, title, works = undefined, reverseDirection = false, url = ""}: {year: string, title: string, works?: string[], reverseDirection?: boolean, url?: string}) {
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
                        <Swiper
                            spaceBetween={16}
                            slidesPerView={3}
                            modules={[Autoplay]}
                            autoplay={{delay: 1500, disableOnInteraction: false, reverseDirection: reverseDirection, pauseOnMouseEnter: true}}
                            loop={true}
                        >
                            {works.map((src, index) => (
                                <SwiperSlide key={index}>
                                    <Link href={url} target={url === "" ? "" : "_blank"}>
                                        <Image
                                            src={src}
                                            alt={`Slide ${index}`}
                                            width={128}
                                            height={128}
                                            className="object-cover rounded-2xl"
                                        />
                                    </Link>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                )}
            </div>
        </div>
    )
}