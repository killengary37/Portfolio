"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

/**
 * PinContainer component.
 * This component is responsible for creating a visually interactive "pin" element
 * it reacts to mouse hover events by transforming th "pin" containers positions and scale.
 * The container includes a child element, a title and a link.
 */
export const PinContainer = ({
                                 children,
                                 title,
                                 href,
                                 className,
                                 containerClassName,
                             }: {
    children: React.ReactNode;
    title?: string;
    href?: string;
    className?: string;
    containerClassName?: string;
}) => {
    // State for managing the transform property of the pin on mouse events
    const [transform, setTransform] = useState(
        "translate(-50%,-50%) rotateX(0deg)"
    );

    // Mouse Leave event handler: resets the scale and rotation of the pin
    const onMouseEnter = () => {
        setTransform("translate(-50%,-50%) rotateX(40deg) scale(0.8)");
    };
    const onMouseLeave = () => {
        setTransform("translate(-50%,-50%) rotateX(0deg) scale(1)");
    };

    return (
        <div
            className={cn(
                "relative group/pin z-50 cursor-pointer",
                containerClassName
            )}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        >
            {/* Pin's inner visual effect with perspective and 3D transformations */}
            <div
                style={{
                    perspective: "1000px",
                    transform: "rotateX(70deg) translateZ(0deg)",
                }}
                className="absolute left-1/2 top-1/2 ml-[0.09375rem] mt-4 -translate-x-1/2 -translate-y-1/2"
            >
                <div
                    style={{ transform }}
                    className="absolute left-1/2 p-4 top-1/2 flex justify-start items-start rounded-2xl shadow-[0_8px_16px_rgb(0_0_0/0.4)]  border border-white/[0.1] group-hover/pin:border-white/[0.2] transition duration-700 overflow-hidden"
                >
                    {/* The actual pin content (children) */}
                    <div className={cn("relative z-50", className)}>{children}</div>
                </div>
            </div>
            {/* Pin perspective section, shows the title and link */}
            <PinPerspective title={title} href={href} />
        </div>
    );
};

/**
 * PinPerspective component
 * Renders the hover effect including the title and link
 * The perspective and animations make the title and link appear in 3d space.
 */
export const PinPerspective = ({
                                   title,
                                   href,
                               }: {
    title?: string;
    href?: string;
}) => {
    return (
        <motion.div className="pointer-events-none  w-full h-80 flex items-center justify-center opacity-0 group-hover/pin:opacity-100 z-[60] transition duration-500">
            <div className=" w-full h-full -mt-7 flex-none  inset-0">
                {/* Title and link container */}
                <div className="absolute top-0 inset-x-0  flex justify-center">
                    <a
                        href={href}
                        target={"_blank"}
                        className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10 "
                    >
            <span className="relative z-20 text-white text-xs font-bold inline-block py-0.5">
              {title}
            </span>
                        {/* Decorative gradient line below the title */}
                        <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover/btn:opacity-40"></span>
                    </a>
                </div>
                {/* Pin's inner perspective effect */}
                <div
                    style={{
                        perspective: "1000px",
                        transform: "rotateX(70deg) translateZ(0)",
                    }}
                    className="absolute left-1/2 top-1/2 ml-[0.09375rem] mt-4 -translate-x-1/2 -translate-y-1/2"
                >
                    {/* Rotating and animating background circles */}
                    <>
                        <motion.div
                            initial={{
                                opacity: 0,
                                scale: 0,
                                x: "-50%",
                                y: "-50%",
                            }}
                            animate={{
                                opacity: [0, 1, 0.5, 0],
                                scale: 1,

                                z: 0,
                            }}
                            transition={{
                                duration: 6,
                                repeat: Infinity,
                                delay: 0,
                            }}
                            className="absolute left-1/2 top-1/2  h-[11.25rem] w-[11.25rem] rounded-[50%] bg-sky-500/[0.08] shadow-[0_8px_16px_rgb(0_0_0/0.4)]"
                        ></motion.div>
                        <motion.div
                            initial={{
                                opacity: 0,
                                scale: 0,
                                x: "-50%",
                                y: "-50%",
                            }}
                            animate={{
                                opacity: [0, 1, 0.5, 0],
                                scale: 1,

                                z: 0,
                            }}
                            transition={{
                                duration: 6,
                                repeat: Infinity,
                                delay: 2,
                            }}
                            className="absolute left-1/2 top-1/2  h-[11.25rem] w-[11.25rem] rounded-[50%] bg-sky-500/[0.08] shadow-[0_8px_16px_rgb(0_0_0/0.4)]"
                        ></motion.div>
                        <motion.div
                            initial={{
                                opacity: 0,
                                scale: 0,
                                x: "-50%",
                                y: "-50%",
                            }}
                            animate={{
                                opacity: [0, 1, 0.5, 0],
                                scale: 1,

                                z: 0,
                            }}
                            transition={{
                                duration: 6,
                                repeat: Infinity,
                                delay: 4,
                            }}
                            className="absolute left-1/2 top-1/2  h-[11.25rem] w-[11.25rem] rounded-[50%] bg-sky-500/[0.08] shadow-[0_8px_16px_rgb(0_0_0/0.4)]"
                        ></motion.div>
                    </>
                </div>
                {/* Decorative gradient blur and small moving elements */}
                <>
                    <motion.div className="absolute right-1/2 bottom-1/2 bg-gradient-to-b from-transparent to-cyan-500 translate-y-[14px] w-px h-20 group-hover/pin:h-40 blur-[2px]" />
                    <motion.div className="absolute right-1/2 bottom-1/2 bg-gradient-to-b from-transparent to-cyan-500 translate-y-[14px] w-px h-20 group-hover/pin:h-40  " />
                    <motion.div className="absolute right-1/2 translate-x-[1.5px] bottom-1/2 bg-cyan-600 translate-y-[14px] w-[4px] h-[4px] rounded-full z-40 blur-[3px]" />
                    <motion.div className="absolute right-1/2 translate-x-[0.5px] bottom-1/2 bg-cyan-300 translate-y-[14px] w-[2px] h-[2px] rounded-full z-40 " />
                </>
            </div>
        </motion.div>
    );
};
