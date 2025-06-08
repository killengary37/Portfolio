"use client";
import React from "react";

import { AnimatePresence, motion } from "motion/react";
import {CanvasRevealEffect} from "@/components/ui/CanvasRevealEffect";

/**
 * Main Approach Section
 * Displays a three-step "blueprint" journey using animated cards
 */
const Approach = () => {
    return (
        <section className="w-full py-20">
            <h1 className="heading flex justify-center text-5xl font-bold mb-10">
                My <span className="text-purple-300">&nbsp;Blueprint</span>
            </h1>
            {/* Card Group Container */}
            <div className="my-20 flex flex-col lg:flex-row items-center justify-center w-full gap-4">
                <Card
                    title="Blueprint Phase"
                    icon={<AceternityIcon order="The Jumpstart" />}
                    des="Every great site starts with a plan — we’ll design yours by aligning vision,
                    audience, and functionality with smart structure and meaningful content.">
                    <CanvasRevealEffect
                        animationSpeed={5.1}
                        containerClassName="bg-emerald-900 rounded-3xl overflow-hidden"/>
                </Card>

                {/* Step 2 */}
                <Card
                    title="Build Mode: Activated"
                    icon={<AceternityIcon order="Momentum" />}
                    des="With the plan approved, I shift into build mode — turning ideas
                    into code while keeping you in the loop from concept to completion.">
                    <CanvasRevealEffect
                        animationSpeed={3}
                        containerClassName="bg-pink-900 rounded-3xl overflow-hidden"
                        colors={[
                            [255, 166, 158],
                            [221, 255, 247],
                        ]}
                        dotSize={2}
                    />
                </Card>

                {/* Step 3 */}
                <Card
                    title="Ready, Set, Launch!"
                    icon={<AceternityIcon order="The Final Push" />}
                    des="Design meets code! I take the blueprint and build your site from the ground up
                     — this is where the vision becomes reality.">
                    <CanvasRevealEffect
                        animationSpeed={3}
                        containerClassName="bg-sky-600 rounded-3xl overflow-hidden"
                        colors={[[125, 211, 252]]}/>
                </Card>
            </div>
        </section>
    );
};

export default Approach;

/**
 * Card Component
 * Represents each phase of the blueprint with hover animations and background effects
 */
const Card = ({
                  title,
                  icon,
                  children,
                  des,
              }: {
    title: string;
    icon: React.ReactNode;
    children?: React.ReactNode;
    des: string;
}) => {
    const [hovered, setHovered] = React.useState(false); // state to track hover interaction
    return (
        <div
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            // change h-[30rem] to h-[35rem], add rounded-3xl
            className="border border-black/[0.2] group/canvas-card flex items-center justify-center
            dark:border-white/[0.2]  max-w-sm w-full mx-auto p-4 relative lg:h-[35rem] rounded-3xl "
            style={{
                background: "rgb(4,7,29)",
                backgroundColor:
                    "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
            }}
        >
            {/* Decorative corner icons */}
            <Icon className="absolute h-10 w-10 -top-3 -left-3 dark:text-white text-black opacity-30" />
            <Icon className="absolute h-10 w-10 -bottom-3 -left-3 dark:text-white text-black opacity-30" />
            <Icon className="absolute h-10 w-10 -top-3 -right-3 dark:text-white text-black opacity-30" />
            <Icon className="absolute h-10 w-10 -bottom-3 -right-3 dark:text-white text-black opacity-30" />

            {/* Hover-based canvas animation layer */}
            <AnimatePresence>
                {hovered && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="h-full w-full absolute inset-0"
                    >
                        {children}
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Card Content */}
            <div className="relative z-20 px-10">
                <div
                    className="text-center group-hover/canvas-card:-translate-y-4 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]
                    group-hover/canvas-card:opacity-0 transition duration-200 min-w-40 mx-auto flex items-center justify-center">
                    {icon}
                </div>

                {/* Title shown on hover */}
                <h2
                    className="dark:text-white text-center text-3xl opacity-0 group-hover/canvas-card:opacity-100
                    relative z-10 text-black mt-4  font-bold group-hover/canvas-card:text-white
                    group-hover/canvas-card:-translate-y-2 transition duration-200">
                    {title}
                </h2>

                {/* Description shown on hover */}
                <p
                    className="text-sm opacity-0 group-hover/canvas-card:opacity-100
                    relative z-10 mt-4 group-hover/canvas-card:text-white text-center
                    group-hover/canvas-card:-translate-y-2 transition duration-200"
                    style={{ color: "#E4ECFF" }}>
                    {des}
                </p>
            </div>
        </div>
    );
};


/**
 * AcernityIcon
 * Displays a spinnning conic-gradient background with the current phase name
 */
const AceternityIcon = ({ order }: { order: string }) => {
    return (
        <div>
            <button className="relative inline-flex overflow-hidden rounded-full p-[1px] ">
                {/* Animated conic background */}
        <span
            className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite]
             bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]"/>
                {/* Label text */}
                <span
                    className="inline-flex h-full w-full cursor-pointer items-center
                    justify-center rounded-full bg-slate-950 px-5 py-2 text-purple-300 backdrop-blur-3xl font-bold text-2xl">
                    {order}
                </span>
            </button>
        </div>
    );
};

/**
 * Icon
 * Reusable corner decoration SVG (plus icon)
 */
export const Icon = ({ className, ...rest }: any) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className={className}
            {...rest}
        >
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
        </svg>
    );
};
