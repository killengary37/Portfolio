import React from "react";
import { cn } from "@/lib/utils";

// Type definition for the SpotLight component props
type SpotlightProps = {
    className?: string;  // Optional additional class names
    fill?: string;       // Optional fill color for the spotlight ellipse
};

/**
 * Spotlight is an animated SVG-based visual effect
 * It renders a large blurred elliptical light shape, typically used as a background highlight.
 * The component is absolutely positioned and styled to animate in, usually paired with scroll or hover effects
 */
export const Spotlight = ({ className, fill }: SpotlightProps) => {
    return (
        <svg
            className={cn(
                "animate-spotlight pointer-events-none absolute z-[1]  h-[169%] w-[138%] lg:w-[84%] opacity-0",
                className
            )}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 3787 2842"
            fill="none"
        >
            <g filter="url(#filter)">
                {/* Elliptical shape that gets blurred by the defined filter */}
                <ellipse
                    cx="1924.71"
                    cy="273.501"
                    rx="1924.71"
                    ry="273.501"
                    transform="matrix(-0.822377 -0.568943 -0.568943 0.822377 3631.88 2291.09)"
                    fill={fill || "white"}
                    fillOpacity="0.21"
                ></ellipse>
            </g>
            {/* SVG filter definitions */}
            <defs>
                <filter
                    id="filter"
                    x="0.860352"
                    y="0.838989"
                    width="3785.16"
                    height="2840.26"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                >
                    {/* Clear the background to ensure only the spotlight is rendered*/}
                    <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                    {/* Blend original shape with background (no visible change here, just necessary setup */}
                    <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="BackgroundImageFix"
                        result="shape"
                    ></feBlend>
                    {/* Apply a strong blur to create a glowing spotlight effect */}
                    <feGaussianBlur
                        stdDeviation="151"
                        result="effect1_foregroundBlur_1065_8"
                    ></feGaussianBlur>
                </filter>
            </defs>
        </svg>
    );
};
