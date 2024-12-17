"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState, useCallback } from "react";
import Image from "next/image";

export const InfiniteMovingCards = ({
    items,
    direction = "left",
    speed = "fast",
    pauseOnHover = true,
    className,
}: {
    items: {
        logoUrl: string;
        hoverTitle: string;
        name: string;
    }[];
    direction?: "left" | "right";
    speed?: "fast" | "normal" | "slow";
    pauseOnHover?: boolean;
    className?: string;
}) => {
    const containerRef = React.useRef<HTMLDivElement>(null);
    const scrollerRef = React.useRef<HTMLUListElement>(null);
    const [start, setStart] = useState(false);

    const addAnimation = useCallback(() => {
        if (containerRef.current && scrollerRef.current) {
            const scrollerContent = Array.from(scrollerRef.current.children);

            scrollerContent.forEach((item) => {
                const duplicatedItem = item.cloneNode(true);
                if (scrollerRef.current) {
                    scrollerRef.current.appendChild(duplicatedItem);
                }
            });

            if (containerRef.current) {
                if (direction === "left") {
                    containerRef.current.style.setProperty(
                        "--animation-direction",
                        "forwards"
                    );
                } else {
                    containerRef.current.style.setProperty(
                        "--animation-direction",
                        "reverse"
                    );
                }

                if (speed === "fast") {
                    containerRef.current.style.setProperty("--animation-duration", "20s");
                } else if (speed === "normal") {
                    containerRef.current.style.setProperty("--animation-duration", "40s");
                } else {
                    containerRef.current.style.setProperty("--animation-duration", "80s");
                }
            }

            setStart(true);
        }
    }, [direction, speed]);

    useEffect(() => {
        addAnimation();
    }, [addAnimation]);

    return (
        <div
            ref={containerRef}
            className={cn(
                "scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
                className
            )}
        >
            <ul
                ref={scrollerRef}
                className={cn(
                    "flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap",
                    start && "animate-scroll ",
                    pauseOnHover && "hover:[animation-play-state:paused]"
                )}
            >
                {items.map(item => (
                    <li
                        className="w-[200px] md:w-[250px] max-w-full [aspect-ratio: 16/5] p-3 relative rounded-lg flex-shrink-0 flex justify-center items-center bg-gradient-to-b from-secondary to-[#d5cea30c] hover:shadow-2xl"
                        key={item.name}
                        title={item.hoverTitle}
                    >
                        <div
                            className="relative min-w-[180px] md:w-[200px] h-[100px] outline-2 outline-red-500"
                        >
                            <Image
                                src={item.logoUrl}
                                alt={item.name}
                                fill
                                sizes="(max-width: 768px) 100vw, 200px"
                                className="object-contain"
                            />
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

