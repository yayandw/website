import React, {ReactNode, useEffect, useRef} from "react";

export default function Carousel({children}: { children: ReactNode }) {
    const innerRef = useRef<HTMLDivElement>(null);
    const styleRef = useRef<HTMLStyleElement | null>(null);
    useEffect(() => {
        if (!innerRef.current) return;

        const items = Array.from(innerRef.current.children) as HTMLElement[];
        if (items.length === 0) return;

        const totalWidth = items.reduce((sum, el) => sum + el.offsetWidth, 0);
        const halfWidth = totalWidth / 2;

        const animationName = `autoplay_${Math.random().toString(36).slice(2, 11)}`;

        const keyframes = `@keyframes ${animationName} { 0% { transform: translateX(0); } 100% { transform: translateX(-${halfWidth}px); } }`;

        if (styleRef.current) {
            styleRef.current.remove();
        }

        const style = document.createElement('style');
        style.textContent = keyframes;
        document.head.appendChild(style);
        styleRef.current = style;

        const carouselInner = innerRef.current;
        carouselInner.style.animation = `${animationName} 10s linear infinite`;
    }, [children]);

    return (
        <div className="carousel">
            <div className="carouselInner" ref={innerRef}>
                {React.Children.map(children, (child, index) => (
                    <div className="carouselItem" key={index}>
                        {child}
                    </div>
                ))}
                {React.Children.map(children, (child, index) => (
                    <div className="carouselItem" key={`duplicate-${index}`}>
                        {child}
                    </div>
                ))}
            </div>
        </div>
    )
}