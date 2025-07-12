import {ReactNode} from "react";

export default function Section({title, children}: {title: string, children: ReactNode}) {
    return (
        <div>
            <h2 className="text-lg font-bold mb-2 text-[#111111] dark:text-[#E0E0E0]">{title}</h2>
            <div className="list-none grid grid-cols-1 gap-4">
                {children}
            </div>
        </div>
    )
}

