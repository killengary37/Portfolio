"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";

/**
 * Component: InfiniteMovingCards
 * Description: A horizontally scrolling list of testimonial cards
 * Props:
 * - items: list of card content
 * -direction: Scroll direction ("Left" or "Right")
 * -speed: Scroll speed("fast", "normal", "slow")
 * - pauseOnHover: Whether the animation should pause on hover
 */
export const InfiniteMovingCards = ({
                                        items,
                                        direction = "left",
                                        speed = "fast",
                                        pauseOnHover = true,
                                        className,
                                    }: {
    items: {
        quote: string;
        name: string;
        title: string;
    }[];
    direction?: "left" | "right";
    speed?: "fast" | "normal" | "slow";
    pauseOnHover?: boolean;
    className?: string;
}) => {
    // Refs to access DOM nodes directly
    const containerRef = React.useRef<HTMLDivElement>(null);
    const scrollerRef = React.useRef<HTMLUListElement>(null);

    // Setup effect: duplicate list items and initialize animation settings
    useEffect(() => {
        addAnimation();
    }, []);
    // Controls when to start the animation after duplication
    const [start, setStart] = useState(false);

    // Duplicate items and apply animation settings (speed and direction)
    function addAnimation() {
        if (containerRef.current && scrollerRef.current) {
            // Clone each list item and append to enable seamless infinite scroll
            const scrollerContent = Array.from(scrollerRef.current.children);

            scrollerContent.forEach((item) => {
                const duplicatedItem = item.cloneNode(true);
                if (scrollerRef.current) {
                    scrollerRef.current.appendChild(duplicatedItem);
                }
            });

            // Apply animation direction and speed
            getDirection();
            getSpeed();
            setStart(true);     // Start animation
        }
    }
    // Set scroll direction using a custom CSS property
    const getDirection = () => {
        if (containerRef.current) {
            if (direction === "left") {
                containerRef.current.style.setProperty(
                    "--animation-direction",
                    "forwards",
                );
            } else {
                containerRef.current.style.setProperty(
                    "--animation-direction",
                    "reverse",
                );
            }
        }
    };
    // Set scroll speed using a custom CSS property
    const getSpeed = () => {
        if (containerRef.current) {
            if (speed === "fast") {
                containerRef.current.style.setProperty("--animation-duration", "20s");
            } else if (speed === "normal") {
                containerRef.current.style.setProperty("--animation-duration", "40s");
            } else {
                containerRef.current.style.setProperty("--animation-duration", "80s");
            }
        }
    };
    return (
        <div
            ref={containerRef}
            className={cn(
                "scroller relative z-20 w-screen overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
                className,
            )}
        >
            <ul
                ref={scrollerRef}
                className={cn(
                    "flex w-max min-w-full shrink-0 flex-nowrap gap-16 py-4",
                    start && "animate-scroll",
                    pauseOnHover && "hover:[animation-play-state:paused]",
                )}
            >
                {items.map((item, idx) => (
                    <li
                        className="relative w-[90vw] max-w-full shrink-0 rounded-2xl border border-b-0 border-zinc-200 bg-[4,7,29] p-5 md:p-16 md:w-[60vw] dark:border-slate-800 bg-gradient-to-r from-[#04071D] to-[#0C0E23]"
                        key={item.name}
                    >
                        <blockquote>
                            {/* Background blue/highlight effect (optional visual styling) */}
                            <div
                                aria-hidden="true"
                                className="user-select-none pointer-events-none absolute -top-0.5 -left-0.5 -z-1 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]">

                            </div>
                            {/* Quote text */}
                            <span className="relative z-20 text-sm md:text-lg leading-[1.6] font-normal text-white dark:text-gray-100">
                              {item.quote}
                            </span>

                            {/* Author information */}
                            <div className="relative z-20 mt-6 flex flex-row items-center">
                              <span className="flex flex-col gap-1">

                                 <div className="flex flex-col gap-1">
                                  <span className="text-xl leading-[1.6] font-bold text-white dark:text-gray-400">
                                    {item.name}
                                  </span>
                                  <span className="text-sm leading-[1.6] font-normal text-white-100 dark:text-gray-400">
                                    {item.title}
                                  </span>
                                 </div>
                             </span>
                            </div>
                        </blockquote>
                    </li>
                ))}
            </ul>
        </div>
    );
};
