"use client"

import React from 'react'
import Hero from "@/components/Hero";
import {FloatingNav} from "@/components/ui/FloatingNav";
import Grid from "@/components/Grid";
import {navItems} from "@/data";
import Clients from "@/components/Clients";
import Experience from "@/components/Experience";
import Approach from "@/components/Approach";
import Footer from "@/components/Footer";
import RecentProjects from "@/components/RecentProjects";


/**
 * Page Component
 *
 * The main page layout that combines various sections to create the homepage
 * It includes a floating navigation, a hero section, recent projects, client logos
 * work experience, approach details and the footer.  All sections are wrapped inside a responsive container
 */
const Page = () => {
    return (
        <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-clip mx-auto sm:px-10 px-5">
            <div className="max-w-7xl w-full">
                <FloatingNav navItems={navItems} />
                <Hero />
                <Grid />
                <RecentProjects/>
                <Clients/>
                <Experience/>
                <Approach />
                <Footer  />
            </div>
        </main>

    )
}
export default Page
