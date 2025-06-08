import React from 'react'
import BorderMagicButton from "@/components/ui/BorderMagicButton";
import {FaLocationArrow} from "react-icons/fa";
import {socialMedia} from "@/data";

/**
 * Footer Component
 * A responsive footer section with CTA, Contact link, and social media icons
 */
const Footer = () => {
    return (
        <footer className="w-full mb-[100px] pb-10 md:mb-5" id="contact">
            <div className="flex flex-col items-center">
                <h1 className="heading text-xl md:text-2xl lg:text-3xl lg:max-w-[45vw]">
                    Ready to take <span className="text-purple-300">your</span> digital presence to the next level?
                </h1>

                {/* Supporting Paragraph */}
                <p className="text-white-100 md:mt-10 my-5 text-center">Reach out to me today and let&apos;s discuss how I can help you achieve your goals.</p>

                {/* Contact Button */}
                <a href="mailto:hello@crimsonpeaksstudio.com">
                    <BorderMagicButton title="Let's get in touch" icon={<FaLocationArrow />} position="right" />
                </a>
            </div>

            {/* Footer Bottom: CopyRight + Social Icons */}
            <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
                <p className="md:text-base text-sm md:font-normal font-light">Copyright © 2025 Gary Killen</p>

                {/* Social Media Icons */}
                <div className="flex items-center md:gap-3 gap-6">
                    {socialMedia.map((profile) => (
                        <div key={profile.id} className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-b-black-200" >
                            <img src={profile.img} alt="icons" width={20} height={20}/>
                        </div>
                    ))}
                </div>
            </div>
        </footer>
    )
}
export default Footer
