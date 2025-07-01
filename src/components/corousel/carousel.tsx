import React, {ReactNode, useEffect, useRef} from "react";

export default function Carousel({ children }: { children: ReactNode }) {
    const innerRef = useRef<HTMLDivElement>(null);
    const styleRef = useRef<HTMLStyleElement | null>(null);

    useEffect(() => {
        const updateAnimation = () => {
            if (!innerRef.current) return;

            const items = Array.from(innerRef.current.children) as HTMLElement[];
            if (items.length === 0) return;

            const totalWidth = items.reduce((sum, el) => sum + el.offsetWidth, 0);
            const halfWidth = totalWidth / 2;

            const animationName = `autoplay_${Math.random().toString(36).slice(2, 11)}`;
            const keyframes = `@keyframes ${animationName} { 
                0% { transform: translateX(0); } 
                100% { transform: translateX(-${halfWidth}px); } 
            }`;

            if (styleRef.current) {
                styleRef.current.remove();
            }

            const style = document.createElement('style');
            style.textContent = keyframes;
            document.head.appendChild(style);
            styleRef.current = style;

            const carouselInner = innerRef.current;
            carouselInner.style.animation = `${animationName} 20s linear infinite`;
        };

        updateAnimation();

        const observer = new ResizeObserver(updateAnimation);
        const current = innerRef.current;

        if (current) {
            observer.observe(current);
        }

        window.addEventListener('resize', updateAnimation);

        return () => {
            observer.disconnect();
            window.removeEventListener('resize', updateAnimation);
            if (styleRef.current) {
                styleRef.current.remove();
            }
        };
    }, [children]);

    return (
        <div className="overflow-hidden whitespace-nowrap">
            <div
                ref={innerRef}
                className="whitespace-nowrap"
                style={{ willChange: 'transform', backfaceVisibility: 'hidden' }}
            >
                {React.Children.map(children, (child, index) => (
                    <div className="inline-flex flex-none h-full items-center mr-4" key={index}>
                        {child}
                    </div>
                ))}
                {/* Duplicate items for seamless loop */}
                {React.Children.map(children, (child, index) => (
                    <div className="inline-flex flex-none h-full items-center mr-4" key={`duplicate-${index}`}>
                        {child}
                    </div>
                ))}
            </div>
        </div>
    );
}