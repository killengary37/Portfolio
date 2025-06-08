import React from 'react'
import {BentoGrid, BentoGridItem} from "@/components/ui/BentoGrid";
import {gridItems} from "@/data";

/**
 * Displays a responsive, stylized "Bento Box"-style grid layout
 * used to showcase sections like "About", features, highlights or key content blocks
 */
const Grid = () => {
    return (
        <section id="about">
            <BentoGrid>
                {/* Render each grid item dynamically */}
                {gridItems.map(
                    ({
                         id,
                         title,
                         description,
                         className,
                         img,
                         imgClassName,
                         titleClassName,
                         spareImg,
                     }) => (
                        <BentoGridItem
                            id={id}
                            key={id}
                            title={title}
                            description={description}
                            className={className}
                            img={img}
                            imgClassName={imgClassName}
                            titleClassName={titleClassName}
                            spareImg={spareImg}
                        />
                    )
                )}
            </BentoGrid>
        </section>
    )
}
export default Grid
