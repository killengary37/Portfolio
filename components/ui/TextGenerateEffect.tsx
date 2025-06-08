"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "motion/react";
import { cn } from "@/lib/utils";

/**
 * TextGenerateEffect
 *
 * A dynamic text animation component that progressively reveals each work with an opacity and optional blur effect
 * This is useful for headers, hero text, or key phrases where emphasis and entrance animation are desired
 *
 * @param words - The full string of text to animate word-by-word
 * @param className - Optional additional styles for the wrapper
 * @param filter - Whether to apply a blur effect that transitions to clear
 * @param duration - Duration (in seconds) for each word's animation
 * @constructor
 */
export const TextGenerateEffect = ({
                                       words,
                                       className,
                                       filter = true,
                                       duration = 0.5,
                                   }: {
    words: string;
    className?: string;
    filter?: boolean;
    duration?: number;
}) => {
    // Animation hook from Motion One: returns ref (scope) and animate function
    const [scope, animate] = useAnimate();
    // Split the incoming string into individual words
    let wordsArray = words.split(" ");

    // Animate each <span> inside the component when it mounts
    useEffect(() => {
        animate(
            "span",  // Target all span elements inside the scope
            {
                opacity: 3,
                filter: filter ? "blur(0px)" : "none",
            },
            {
                duration: duration ? duration : 1,
                delay: stagger(0.11),  // Stagger each word by 0.11s
            }
        );
    }, [scope.current]);

    /**
     * Renders each word as a separate <motion.span> to allow staggered animation
     * Applies an initial blue and zero opacity that gets animated in
     */
    const renderWords = () => {
        return (
            <motion.div ref={scope}>
                {wordsArray.map((word, idx) => {
                    return (
                        <motion.span
                            key={word + idx}
                            className={`${
                                idx > 4 ? "text-purple-400" : "dark:text-white text-black"
                            } opacity-0`}
                            style={{
                                filter: filter ? "blur(10px)" : "none",
                            }}
                        >
                            {word}{" "}
                        </motion.span>
                    );
                })}
            </motion.div>
        );
    };

    // Final rendered output with optional wrapper className
    return (
        <div className={cn("font-bold", className)}>
            <div className="my-4">
                <div className= "dark:text-white text-black  leading-snug tracking-wide">
                    {renderWords()}
                </div>
            </div>
        </div>
    );
};
