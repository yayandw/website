'use client';

import {Swiper, SwiperSlide} from 'swiper/react';
import {Autoplay} from 'swiper/modules';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/navigation';
import Link from 'next/link';

const images = [
    '/cu.webp',
    '/ds.webp',
    '/oneapp.webp',
    '/cu.webp',
    '/ds.webp',
    '/oneapp.webp',
    '/cu.webp',
    '/ds.webp',
    '/oneapp.webp',
    '/cu.webp',
    '/ds.webp',
    '/oneapp.webp',
    '/cu.webp',
    '/ds.webp',
    '/oneapp.webp',
];

export default function ItemTextImage() {
    return (
        <div className="mb-4 grid grid-cols-5 items-start">
            <div className="mr-4">
                <span className="text-[#999999]">2008 — present</span>
            </div>
            <div className="col-span-4">
                <h3 className="text-base font-medium text-[#111111]">
                    Programmer{" "}
                    <a
                        href="#"
                        className="text-blue-500 text-sm"
                        title="Visit company website"
                    >
                        ↗
                    </a>
                </h3>
                <p className="text-[#555555]">PT easySoft Indonesia</p>
                <Swiper
                    className="mt-4"
                    spaceBetween={1}
                    slidesPerView={3}
                    modules={[Autoplay]}
                    autoplay={{delay: 1500, disableOnInteraction: false}}
                    loop={true}
                >
                    {images.map((src, index) => (
                        <SwiperSlide key={index}>
                            <Link href="https://play.google.com/store/apps/dev?id=6991340471823577106">
                                <Image
                                    src={src}
                                    alt={`Slide ${index}`}
                                    width={78}
                                    height={78}
                                    className="object-cover"
                                />
                            </Link>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    )
}