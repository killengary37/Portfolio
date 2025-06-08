"use client";
import React, {JSX, useState} from "react";
import {
    motion,
    AnimatePresence,
    useScroll,
    useMotionValueEvent,
} from "motion/react";
import { cn } from "@/lib/utils";
import Link from "next/link";

/**
 * FloatingNav Component
 *
 * A responsive, animated navigation bar that appears at the top of the screen
 * when the user scrolls upward and disappears when scrolling down
 *
 * Props:
 * -navItems: Array of navigation objects containing name, link and optional icon
 * -className: Optional additional classNames for styling the container
 */
export const FloatingNav = ({
                                navItems,
                                className,
                            }: {
    navItems: {
        name: string;
        link: string;
        icon?: JSX.Element;
    }[];
    className?: string;
}) => {
    const { scrollYProgress } = useScroll();  // Hook to track vertical scroll progress (0 to 1)

    const [visible, setVisible] = useState(false); // Navigation visibility state

    // Hoook to listen for changes in scroll position
    useMotionValueEvent(scrollYProgress, "change", (current) => {
        // Check if current is not undefined and is a number
        if (typeof current === "number") {
            let direction = current! - scrollYProgress.getPrevious()!;

            // Hide nav when near top of page
            if (scrollYProgress.get() < 0.05) {
                setVisible(false);
            } else {
                if (direction < 0) {
                    setVisible(true);
                } else {
                    // Show nav when scrolling up, hide when scrolling down
                    setVisible(false);
                }
            }
        }
    });

    return (
        <AnimatePresence mode="wait">
            <motion.div
                initial={{                  // Start hidden above view
                    opacity: 1,
                    y: -100,
                }}
                animate={{                  // Animate based on scroll direction
                    y: visible ? 0 : -100,
                    opacity: visible ? 1 : 0,
                }}
                transition={{               // Smooth transition
                    duration: 0.2,
                }}
                className={cn(
                    // Default styles with optional external classes
                    "flex max-w-fit  fixed top-10 inset-x-0 mx-auto border  rounded-full  shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] px-2 py-5 items-center justify-center space-x-4 border-white/[0.2] bg-black-100",
                    className
                )}
            >
                {/* Render each nav item as a link */}
                {navItems.map((navItem: any, idx: number) => (
                    <Link
                        key={`link=${idx}`}
                        href={navItem.link}
                        className={cn(
                            "relative dark:text-neutral-50 items-center flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500"
                        )}
                    >
                        {/* Icon shown only on small screens */}
                        <span className="block sm:hidden">{navItem.icon}</span>
                        {/* Nav label */}
                        <span className="text-sm !cursor-pointer">{navItem.name}</span>
                    </Link>
                ))}

            </motion.div>
        </AnimatePresence>
    );
};
