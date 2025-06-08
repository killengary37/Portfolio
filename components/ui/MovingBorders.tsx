"use client";
import React from "react";
import {
    motion,
    useAnimationFrame,
    useMotionTemplate,
    useMotionValue,
    useTransform,
} from "motion/react";
import { useRef } from "react";
import { cn } from "@/lib/utils";

/**
 * Reusable Button component with animated border effect
 * @param borderRadius - Radius for the buttons rounded corners
 * @param children - Inner content of the button
 * @param Component - Optional custom HTML element or component to render as
 * @param containerClassName - Additional classes for the outer container
 * @param borderClassName - Additional classes for the animated border layer
 * @param duration - Duration (ms) for border animation loop
 * @param className
 */
export function Button({
                           borderRadius = "1.75rem",
                           children,
                           as: Component = "button",
                           containerClassName,
                           borderClassName,
                           duration,
                           className,
                           ...otherProps
                       }: {
    borderRadius?: string;
    children: React.ReactNode;
    as?: any;
    containerClassName?: string;
    borderClassName?: string;
    duration?: number;
    className?: string;
    [key: string]: any;
}) {
    return (
        <Component
            className={cn(
                "relative overflow-hidden bg-transparent p-[1px] text-xl md:col-span-2",
                containerClassName,
            )}
            style={{
                borderRadius: borderRadius,
            }}
            {...otherProps}
        >
            {/* Layer that contains the animated glowing border */}
            <div
                className="absolute inset-0"
                style={{ borderRadius: `calc(${borderRadius} * 0.96)` }}
            >
                <MovingBorder duration={duration} rx="30%" ry="30%">
                    <div
                        className={cn(
                            "h-20 w-20 bg-[radial-gradient(#0ea5e9_40%,transparent_60%)] opacity-[0.8]",
                            borderClassName,
                        )}
                    />
                </MovingBorder>
            </div>

            {/* Inner button content with background, text and styling */}
            <div
                className={cn(
                    "relative flex h-full w-full items-center justify-center border border-slate-800 bg-slate-900/[0.8] text-sm text-white antialiased backdrop-blur-xl",
                    className,
                )}
                style={{
                    borderRadius: `calc(${borderRadius} * 0.96)`,
                }}
            >
                {children}
            </div>
        </Component>
    );
}

/**
 * Component that creates a moving glowing element that follows a rectangular SVG path
 * @param children - The animated visual element (e.g., glowing dot
 * @param duration - How long one loop around the border should take  (in ms)
 * @param rx - Horizontal border radius for the SVG path
 * @param ry - Vertical border radius for the SVG path
 */
export const MovingBorder = ({
                                 children,
                                 duration = 3000,
                                 rx,
                                 ry,
                                 ...otherProps
                             }: {
    children: React.ReactNode;
    duration?: number;
    rx?: string;
    ry?: string;
    [key: string]: any;
}) => {
    // @ts-ignore
    const pathRef = useRef<any>();  // Ref to the SVG (rect> used as the animation
    const progress = useMotionValue<number>(0);  // Tracks the animation's progress around the border

    // Update the progress value on every animation frame
    useAnimationFrame((time) => {
        const length = pathRef.current?.getTotalLength();  // Total path length
        if (length) {
            const pxPerMillisecond = length / duration;
            progress.set((time * pxPerMillisecond) % length);  // Lopping animation
        }
    });

    // Get the current x/y coordinates along the path
    const x = useTransform(
        progress,
        (val) => pathRef.current?.getPointAtLength(val).x,
    );
    const y = useTransform(
        progress,
        (val) => pathRef.current?.getPointAtLength(val).y,
    );

    // Combine x and y into a CSS transform string
    const transform = useMotionTemplate`translateX(${x}px) translateY(${y}px) translateX(-50%) translateY(-50%)`;

    return (
        <>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                className="absolute h-full w-full"
                width="100%"
                height="100%"
                {...otherProps}
            >
                <rect
                    fill="none"
                    width="100%"
                    height="100%"
                    rx={rx}
                    ry={ry}
                    ref={pathRef}
                />
            </svg>

            {/* The animated element that follows the SVG path */}
            <motion.div
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    display: "inline-block",
                    transform,
                }}
            >
                {children}
            </motion.div>
        </>
    );
};
