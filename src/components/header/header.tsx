import Image from "next/image";

export default function Header() {
    return (
        <div className="flex items-center">
            <div className="relative w-32 h-32 sm:w-24 sm:h-24 md:w-20 md:h-20 rounded-full overflow-hidden mr-4 flex-shrink-0">
                <Image
                    src="/avatar.jpg"
                    alt="Yayan D. Wicaksono"
                    fill
                    sizes="(max-width: 768px) 5rem, 8rem"
                    className="w-32 h-32 object-cover"
                />
            </div>
            <div>
                <h1 className="text-2xl font-bold text-[#111111] dark:text-[#E0E0E0]">Yayan D. Wicaksono</h1>
                <p className="text-[#555555] dark:text-[#AAAAAA]">Programmer @easySoft Indonesia</p>
            </div>
        </div>
    )
}