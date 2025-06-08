import React from 'react'
import {Spotlight} from "@/components/ui/Spotlight";
import {cn} from "@/lib/utils";
import {TextGenerateEffect} from "@/components/ui/TextGenerateEffect";
import BorderMagicButton from "@/components/ui/BorderMagicButton";
import {FaLocationArrow} from "react-icons/fa";

/**
 * Hero Section
 * A full-screen introductory section with animated background spotlights,
 * dynamic text effects, and a call-to action button
 */
const Hero = () => {
    return (
        <div className="pb-20 pt-36">
            {/* Animated spotlights positioned absolutely on the page */}
            <div>
                <Spotlight
                    className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
                    fill="white"
                />
                <Spotlight
                    className="h-[80vh] w-[50vw] top-10 left-full"
                    fill="purple"
                />
                <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
            </div>

            {/* Main Content wrapper with full height and center alignment */}
            <div className="flex h-screen w-full items-center justify-center bg-white dark:bg-black relative ">
                {/* Grid pattern overlay */}
                <div
                    className={cn(
                        "absolute inset-0",
                        "[background-size:40px_40px]",
                        "[background-image:linear-gradient(to_right,transparent_1px,transparent_1px),linear-gradient(to_bottom,transparent_1px,transparent_1px)]",
                        "dark:[background-image:linear-gradient(to_right,transparent_1px,transparent_1px),linear-gradient(to_bottom,transparent_1px,transparent_1px)]",

                    )}
                />
                {/* Radial mask for a subtle spotlight center effect */}
                <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black-100"></div>

                <div className="flex justify-center relative my-20 z-10">
                    <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
                        <h2 className="uppercfase tracking-widest text-xs text-center text-blue-400 max-w-80">
                            The Magic Behind Dynamic Web Apps – Powered by Next.js
                        </h2>

                        {/* Animated headline text */}
                        <TextGenerateEffect
                            className="text-center text-[40px] md:text-5xl lg:text-6xl"
                            words="Designing Tomorrow’s Experiences from Today’s Ideas"
                        />

                        <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
                            Hey there! I'm Gary, crafting sleek web experiences with Next.js from the heart of Washington.
                        </p>

                        {/* Call-to-action button linking to the "About" section */}
                        <a href="#about">
                            <BorderMagicButton
                                title="Show my work"
                                icon={<FaLocationArrow />}
                                position='right'
                            />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Hero
