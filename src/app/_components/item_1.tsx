export default function ItemText({year, title, description, url}: {
    year: string,
    title: string,
    description: string,
    url: string
}) {
    return (
        <div className="mb-4 grid grid-cols-5 items-start">
            <div className="mr-4">
                <span className="text-[#999999]">{year}</span>
            </div>
            <div className="col-span-4">
                <h3 className="text-base font-medium text-[#111111]">
                    {`${title} `}
                    <a
                        href={url}
                        className="text-blue-500 text-sm"
                        title="Visit company website"
                    >
                        ↗
                    </a>
                </h3>
                <p className="text-[#555555] line-clamp-3 overflow-hidden max-w-full">{description}</p>
            </div>
        </div>
    )
}