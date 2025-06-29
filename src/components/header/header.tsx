import Image from "next/image";

export default function Header() {
    return (
        <div className="flex items-center">
            <div className="w-24 h-24 rounded-full overflow-hidden mr-4">
                <Image
                    src="/avatar.jpg"
                    alt="Yayan D. Wicaksono"
                    width="100"
                    height="100"
                    className="object-cover"
                />
            </div>
            <div>
                <h1 className="text-2xl font-bold text-[#111111]">Yayan D. Wicaksono</h1>
                <p className="text-[#555555]">Programmer @easySoft Indonesia</p>
            </div>
        </div>
    )
}