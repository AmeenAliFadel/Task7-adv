'use client';

import React, { useState } from 'react';
import hero1 from '../../assets/hero1.webp';
import hero2 from '../../assets/hero2.webp';

import Image from 'next/image';
import svg1 from '../../assets/hero/baselinePublic.svg';
import svg2 from '../../assets/hero/people.svg';
import svg3 from '../../assets/hero/dark-people.svg';
import svg4 from '../../assets/hero/date.svg';
import svg5 from '../../assets/hero/clock.svg';
import svg6 from '../../assets/hero/tour.svg';
import svg7 from '../../assets/hero/car.svg';
import svg8 from '../../assets/hero/search.svg';
import svg9 from '../../assets/hero/downArrow.svg';

import { Pacifico } from 'next/font/google';
const pacifico = Pacifico({
    subsets: ['latin'],
    weight: '400',
});
const searchFields = [
    {
        id: 1,
        icon: svg3,
        title: 'Number of people',
        placeholder: 'Choose number',
    },
    {
        id: 2,
        icon: svg4,
        title: 'Date',
        placeholder: 'Choose Date',
    },
    {
        id: 3,
        icon: svg5,
        title: 'Time',
        placeholder: 'Choose Time',
    },
    {
        id: 4,
        icon: svg6,
        title: 'Tour',
        placeholder: 'Select Tour',
    },
    {
        id: 5,
        icon: svg7,
        title: 'Transportation',
        placeholder: 'Select Transportation',
    },
];

type HeroProps = {
    homeHero?: boolean;
};
export default function Hero({ homeHero }: HeroProps) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSearch = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className='w-full h-[100vh] relative overflow-hidden'>
            {homeHero &&
                <>
                    <Image src={hero1} alt='hero' className='w-full h-[94.44%] object-cover' />

                    <div data-aos="fade-up" className='mb-[60px] absolute top-[50%]  2xl:top-[300px] left-[50%] transform -translate-x-[50%] -translate-y-[50%] text-center text-white z-20'>
                        <h1 className={`${pacifico.className} text-5xl xl:text-7xl font-normal mb-4`} >
                            Enjoy in the best way!
                        </h1>
                        <h3 className='text-sm sm:text-2xl font-bold'>
                            Enjoy our services for your trip anytime
                        </h3>

                        <button
                            className='lg:hidden mt-6 px-4 py-2 bg-[#FA8B02] text-white rounded-md'
                            onClick={toggleSearch}
                        >
                            {isOpen ? 'Close Search' : 'Open Search'}
                        </button>
                    </div>

                    {isOpen && (
                        <div
                            className='fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden'
                            onClick={toggleSearch}
                        />
                    )}

                    <div
                        data-aos="fade-up"
                        className={`
            lg:absolute 2xl:top-[50%] lg:top-[60%] lg:left-[50%] lg:transform lg:-translate-x-[50%] lg:-translate-y-[50%]
            w-[90%] lg:w-[1383px] max-w-[95%] lg:max-w-[72.03%]
            flex flex-col justify-start rounded-xl bg-[#FFFFFF33]
            transition-all duration-500 ease-in-out
            z-50 lg:z-10 p-5

            ${isOpen ? 'fixed top-[50%] left-[50%] transform -translate-x-[50%] -translate-y-[50%] opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}
            lg:opacity-100 lg:scale-100 lg:pointer-events-auto
            `}
                    >
                        <div className='flex w-auto min-w-[25.66%]'>
                            <div className='flex rounded-tl-xl gap-1 p-4 bg-white text-[#FA8B02]'>
                                <Image src={svg1} alt='svg' />
                                <span className='text-sm md:text-lg'>Public Tours</span>
                            </div>
                            <div className='flex rounded-tr-xl gap-1 p-4 bg-[#FFFFFF66] text-white'>
                                <Image src={svg2} alt='svg' />
                                <span className='text-sm md:text-lg'>Private Tours</span>
                            </div>
                        </div>

                        <div
                            className="
                                        p-3 2xl:p-4
                                        rounded-b-xl rounded-tr-xl
                                        bg-white text-black
                                        grid gap-3
                                        grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6
                                        items-center
                                        "
                        >
                            {searchFields.map((field) => (
                                <div
                                    key={field.id}
                                    className="
                                                p-2 2xl:p-4
                                                flex flex-col gap-1
                                                min-w-[150px] 2xl:min-w-[197px]
                                                "
                                >
                                    <div className="flex items-center gap-1">
                                        <Image src={field.icon} alt="svg" />
                                        <h4 className="text-sm md:text-lg">{field.title}</h4>
                                    </div>
                                    <span className="text-[#b0b0b0] text-sm md:text-lg flex justify-between items-center gap-3 ms-6">
                                        {field.placeholder}
                                        <Image src={svg9} alt="arrow" />
                                    </span>
                                </div>
                            ))}

                            <div className="flex justify-center">
                                <button
                                    className="
                                            rounded-xl bg-[#FA8B02]
                                            p-3 2xl:p-6
                                            flex justify-center items-center
                                            "
                                >
                                    <Image src={svg8} alt="search" />
                                </button>
                            </div>
                        </div>

                    </div>
                </>
            }
            {!homeHero &&
                <>
                    <Image src={hero2} alt='hero' className='w-full h-[94.44%] object-cover' />
                    <div data-aos="fade-up" className='  absolute top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%] text-center  '>
                        <h1 className='text-5xl xl:text-6xl text-white font-normal mb-6' style={{ fontFamily: 'var(--font-pacifico)' }}>Our team cares about your full relax</h1>
                        <p className=' hidden lg:block text-xl  text-white font-bold mb-6'>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.</p>
                        <button className=' bg-inherit text-xl text-white font-semibold border-[1.5px] border-white px-6 py-3.5 rounded-[50px] '>View our Tour Packages</button>
                    </div>
                </>
            }
        </div>
    );
}
