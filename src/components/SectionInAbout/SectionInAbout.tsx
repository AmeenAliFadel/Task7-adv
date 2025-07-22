import React from 'react'
import icon1 from '../../assets/section4/icon1.svg'
import icon2 from '../../assets/section4/icon2.svg'
import icon3 from '../../assets/section4/icon3.svg'
import icon4 from '../../assets/section4/icon4.svg'
import AboutCard from './AboutCard'

export default function SectionInAbout() {
    const cards = [
        {
            icon: icon1,
            text: 'Complete Packages For All Your Wishes',
        },
        {
            icon: icon2,
            text: 'Over 30 Years Of Experience',
        },
        {
            icon: icon3,
            text: 'Expert Guides For You',
        },
        {
            icon: icon4,
            text: 'Guaranteed fun at the best price!',
        },
    ];

    return (
        <div
            className="w-full bg-[#ffb47b] mt-[220px]
                        py-[60px] px-6
                        md:px-12 lg:px-[100px] xl:px-[180px] 2xl:px-[250px]
                        flex justify-between flex-wrap gap-6">
            {cards.map((card, index) => (
                <AboutCard key={index} icon={card.icon} text={card.text} index={index} />
            ))}

        </div>
    );
}
