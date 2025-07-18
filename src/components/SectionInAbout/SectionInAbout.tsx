import Image from 'next/image'
import React from 'react'
import icon1 from '../../assets/section4/icon1.svg'
import icon2 from '../../assets/section4/icon2.svg'
import icon3 from '../../assets/section4/icon3.svg'
import icon4 from '../../assets/section4/icon4.svg'

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
                <div
                    key={index}
                    className="bg-[#FFFFFF4D]
                                flex flex-col justify-center items-center
                                p-6 sm:p-8 gap-4
                                rounded-3xl
                                w-full sm:w-[250px] md:w-[220px] lg:w-[250px] xl:w-[260px]
                                h-auto min-h-[160px]">
                    <Image src={card.icon} alt={`icon-${index}`} width={60} height={60} />
                    <p className="text-base sm:text-lg lg:text-xl text-black font-semibold text-center">
                        {card.text}
                    </p>
                </div>
            ))}
        </div>
    );
}
