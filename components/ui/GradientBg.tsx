"use client";
import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";

/**
 * BackgroundGradientAnimation
 *
 * A React component that renders a dynamic, animated multi-layered radial gradient background
 * Supports interactive pointer-based animation to create a subtle parallax effect
 */
export const BackgroundGradientAnimation = ({
                                                gradientBackgroundStart = "rgb(108, 0, 162)",
                                                gradientBackgroundEnd = "rgb(0, 17, 82)",
                                                firstColor = "18, 113, 255",
                                                secondColor = "221, 74, 255",
                                                thirdColor = "100, 220, 255",
                                                fourthColor = "200, 50, 50",
                                                fifthColor = "180, 180, 50",
                                                pointerColor = "140, 100, 255",
                                                size = "80%",
                                                blendingValue = "hard-light",
                                                children,
                                                className,
                                                interactive = true,
                                                containerClassName,
                                            }: {
    gradientBackgroundStart?: string;
    gradientBackgroundEnd?: string;
    firstColor?: string;
    secondColor?: string;
    thirdColor?: string;
    fourthColor?: string;
    fifthColor?: string;
    pointerColor?: string;
    size?: string;
    blendingValue?: string;
    children?: React.ReactNode;
    className?: string;
    interactive?: boolean;
    containerClassName?: string;
}) => {
    // Ref to the interactive pointer div for applying transform styles
    const interactiveRef = useRef<HTMLDivElement>(null);

    // State to track current and target X, Y coordinates for smooth pointer movement animation
    const [curX, setCurX] = useState(0);
    const [curY, setCurY] = useState(0);
    const [tgX, setTgX] = useState(0);
    const [tgY, setTgY] = useState(0);

    // On component mount, set CSS variables on the document body control gradient colors and styling
    useEffect(() => {
        document.body.style.setProperty(
            "--gradient-background-start",
            gradientBackgroundStart
        );
        document.body.style.setProperty(
            "--gradient-background-end",
            gradientBackgroundEnd
        );
        document.body.style.setProperty("--first-color", firstColor);
        document.body.style.setProperty("--second-color", secondColor);
        document.body.style.setProperty("--third-color", thirdColor);
        document.body.style.setProperty("--fourth-color", fourthColor);
        document.body.style.setProperty("--fifth-color", fifthColor);
        document.body.style.setProperty("--pointer-color", pointerColor);
        document.body.style.setProperty("--size", size);
        document.body.style.setProperty("--blending-value", blendingValue);
    }, []);
    /**
     * Animate the interactive pointer element by smoothly transitioning
     * its current position (curX, curY) towards the target position (tgX, tgY)
     */
    useEffect(() => {
        function move() {
            if (!interactiveRef.current) {
                return;
            }
            // Easing calculation: move current position 1/20th of the way towards target position
            setCurX(curX + (tgX - curX) / 20);
            setCurY(curY + (tgY - curY) / 20);

            // Apply CSS transform to translate the interactive element smoothly
            interactiveRef.current.style.transform = `translate(${Math.round(
                curX
            )}px, ${Math.round(curY)}px)`;
        }

        move();
    }, [tgX, tgY]);

    /**
     * Mouse move handler to update target pointer coordinates
     * relative to the interactive element's bounding rectangle
     */
    const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
        if (interactiveRef.current) {
            const rect = interactiveRef.current.getBoundingClientRect();
            setTgX(event.clientX - rect.left);
            setTgY(event.clientY - rect.top);
        }
    };

    // Detect if the current browser is Safari to apply different blur styles due to filter support
    const [isSafari, setIsSafari] = useState(false);
    useEffect(() => {
        setIsSafari(/^((?!chrome|android).)*safari/i.test(navigator.userAgent));
    }, []);

    return (
        <div
            className={cn(
                "h-full w-full absolute overflow-hidden top-0 left-0 bg-[linear-gradient(40deg,var(--gradient-background-start),var(--gradient-background-end))]",
                containerClassName
            )}
        >
            {/* Hidden SVG filter definitions for custom blue + color effects */}
            <svg className="hidden">
                <defs>
                    <filter id="blurMe">
                        <feGaussianBlur
                            in="SourceGraphic"
                            stdDeviation="10"
                            result="blur"
                        />
                        <feColorMatrix
                            in="blur"
                            mode="matrix"
                            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
                            result="goo"
                        />
                        <feBlend in="SourceGraphic" in2="goo" />
                    </filter>
                </defs>
            </svg>

            {/* Container for rendering children content */}
            <div className={cn("", className)}>{children}</div>
            <div
                className={cn(
                    "gradients-container h-full w-full blur-lg",
                    isSafari ? "blur-2xl" : "[filter:url(#blurMe)_blur(40px)]"
                )}
            >
                {/* Each div represents a gradient circle with different colors, blend modes, sizes, animations, and opacity */}
                <div
                    className={cn(
                        `absolute [background:radial-gradient(circle_at_center,_var(--first-color)_0,_var(--first-color)_50%)_no-repeat]`,
                        `[mix-blend-mode:var(--blending-value)] w-[var(--size)] h-[var(--size)] top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)]`,
                        `[transform-origin:center_center]`,
                        `animate-first`,
                        `opacity-100`
                    )}
                ></div>
                <div
                    className={cn(
                        `absolute [background:radial-gradient(circle_at_center,_rgba(var(--second-color),_0.8)_0,_rgba(var(--second-color),_0)_50%)_no-repeat]`,
                        `[mix-blend-mode:var(--blending-value)] w-[var(--size)] h-[var(--size)] top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)]`,
                        `[transform-origin:calc(50%-400px)]`,
                        `animate-second`,
                        `opacity-100`
                    )}
                ></div>
                <div
                    className={cn(
                        `absolute [background:radial-gradient(circle_at_center,_rgba(var(--third-color),_0.8)_0,_rgba(var(--third-color),_0)_50%)_no-repeat]`,
                        `[mix-blend-mode:var(--blending-value)] w-[var(--size)] h-[var(--size)] top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)]`,
                        `[transform-origin:calc(50%+400px)]`,
                        `animate-third`,
                        `opacity-100`
                    )}
                ></div>
                <div
                    className={cn(
                        `absolute [background:radial-gradient(circle_at_center,_rgba(var(--fourth-color),_0.8)_0,_rgba(var(--fourth-color),_0)_50%)_no-repeat]`,
                        `[mix-blend-mode:var(--blending-value)] w-[var(--size)] h-[var(--size)] top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)]`,
                        `[transform-origin:calc(50%-200px)]`,
                        `animate-fourth`,
                        `opacity-70`
                    )}
                ></div>
                <div
                    className={cn(
                        `absolute [background:radial-gradient(circle_at_center,_rgba(var(--fifth-color),_0.8)_0,_rgba(var(--fifth-color),_0)_50%)_no-repeat]`,
                        `[mix-blend-mode:var(--blending-value)] w-[var(--size)] h-[var(--size)] top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)]`,
                        `[transform-origin:calc(50%-800px)_calc(50%+800px)]`,
                        `animate-fifth`,
                        `opacity-100`
                    )}
                ></div>

                {/* Optional interactive pointer radial gradient that moves with mouse */}
                {interactive && (
                    <div
                        ref={interactiveRef}
                        onMouseMove={handleMouseMove}
                        className={cn(
                            `absolute [background:radial-gradient(circle_at_center,_rgba(var(--pointer-color),_0.8)_0,_rgba(var(--pointer-color),_0)_50%)_no-repeat]`,
                            `[mix-blend-mode:var(--blending-value)] w-full h-full -top-1/2 -left-1/2`,
                            `opacity-70`
                        )}
                    ></div>
                )}
            </div>
        </div>
    );
};
