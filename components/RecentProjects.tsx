"use client"

import React from 'react'
import { PinContainer } from './ui/3d-pin';
import {projects} from '@/data/';
import {FaLocationArrow} from "react-icons/fa";

/**
 * RecentProjections Section
 * Displays a curated list of recent development projects using a 3d hover effect
 * Each project includes a title, description, technology stack icons, and a live site link
 */

const RecentProjects = () => {
    return (
        <div className="py-20" id="projects" >
            <h1 className="heading flex justify-center text-5xl font-bold mb-10">
                A small selection of{" "}
                <span className="text-purple-300">&nbsp;recent projects</span>
            </h1>

            {/* Project grid layout */}
            <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
                {projects.map(({id, title, des, img, iconLists, link}) => (
                    <div key={id} className="lg:min-h-[32.5rem] h-[25rem] flex items-ceter justify-center sm:w-96 w-[80vw]">
                        {/* Animated 3D container with external project link */}
                        <PinContainer title={link} href={link}>
                            {/* Project thumbnail with background image and floating */}
                            <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh]">
                                <div className="relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162d]">
                                    <img src="/bg.png" alt="bg-img"/>
                                </div>
                                <img
                                  src={img}
                                  alt={title}
                                  className="z-10 absolute bottom-0"
                                />
                            </div>

                            {/* Project title */}
                            <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                                {title}
                            </h1>
                            {/* Project Description */}
                            <p className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2">
                                {des}
                            </p>

                            {/* Tech stack icons and CTA link */}
                            <div className="flex items-center justify-between mt-7 mb-3">
                                <div className="flex items-center">
                                    {iconLists.map((icon, index) => (
                                        <div key={icon} className="border border-white/[0.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                                             style={{
                                                 transform: `translateX(-${5 * index + 2}px)`,
                                             }}
                                        >
                                            <img src={icon} alt={icon} className="p-2"/>
                                        </div>
                                    ))}
                                </div>

                                {/* Live site link with arrow icon */}
                                <div className="flex justify-center items-center">
                                    <p className="flex lg:text-xl md:text-xs text-sm text-purple-300">Check Out Live Site</p>
                                    <FaLocationArrow className="ms-3" color="#CBACF9" />
                                </div>
                            </div>
                        </PinContainer>

                    </div>
                ))}
            </div>
        </div>
    )
}
export default RecentProjects
