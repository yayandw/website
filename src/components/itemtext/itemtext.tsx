import Link from "next/link";
import Image from "next/image";

export default function ItemText({icon, year, thumbnail, title, description, url}: {
    icon?: string;
    year: string,
    thumbnail?: string;
    title: string,
    description: string,
    url: string
}) {
    return (
        <div className="mb-4 grid grid-cols-5 items-start">
            <div className="mr-4 flex gap-2">
                {icon !== undefined && (
                    <Image src={icon} width={24} height={24} alt=""/>
                )}
                <span className="text-[#999999]">{year}</span>
            </div>
            <div className="col-span-4 flex flex-row gap-2">
                {thumbnail !== undefined && (
                    <Image src={thumbnail} width={48} height={48} alt=""/>
                )}
                <div>
                    <Link className="text-base font-medium text-[#111111] hover:underline" href={url} target="_blank">
                        {`${title} `}
                    </Link>
                    <p className="text-[#555555] line-clamp-3 overflow-hidden max-w-full">{description}</p>
                </div>
            </div>
        </div>
    )
}