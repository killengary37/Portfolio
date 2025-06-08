import React from "react";

import { workExperience } from "@/data";
import { Button } from "./ui/MovingBorders";

/**
 * Experience Component
 * Displays a responsive grid of professional work experience cards
 */
const Experience = () => {
    return (
        <div className="py-20 w-full">
            {/* Section Heading */}
            <h1 className="heading flex justify-center text-5xl font-bold mb-10">
                My <span className="text-purple-300">&nbsp;work experience</span>
            </h1>

            {/* Grid layout for Experience Cards */}
            <div className="w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10">
                {workExperience.map((card) => (
                    <Button
                        key={card.id}
                        duration={Math.floor(Math.random() * 10000) + 10000}
                        borderRadius="1.75rem"
                        style={{
                            background: "rgb(4,7,29)",
                            backgroundColor:
                                "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
                            borderRadius: `calc(1.75rem* 0.96)`,
                        }}
                        className="flex-1 text-black dark:text-white border-neutral-200 dark:border-slate-800"
                    >
                        {/* Card Content Wrapper */}
                        <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
                            {/* Company/Project Logo */}
                            <img
                                src={card.thumbnail}
                                alt={card.thumbnail}
                                className="lg:w-32 md:w-20 w-16"
                            />
                            {/* Job Title and Description */}
                            <div className="lg:ms-5">
                                <h1 className="text-start text-xl md:text-2xl font-bold">
                                    {card.title}
                                </h1>
                                <p className="text-start text-white-100 mt-3 font-semibold">
                                    {card.desc}
                                </p>
                            </div>
                        </div>
                    </Button>
                ))}
            </div>
        </div>
    );
};

export default Experience;