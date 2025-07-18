import Image from 'next/image'
import React from 'react'

import img1 from '../../assets/section3/image1.webp'
import img2 from '../../assets/section3/image2.webp'
import img3 from '../../assets/section3/image3.webp'
import img4 from '../../assets/section3/image4.webp'

import icon1_1 from '../../assets/section3/icon1-1.svg'
import icon1_2 from '../../assets/section3/icon1-2.svg'
import icon1_3 from '../../assets/section3/icon1-3.svg'
import icon1_4 from '../../assets/section3/icon1-4.svg'

import icon2_1 from '../../assets/section3/icon2-1.svg'
import icon2_2 from '../../assets/section3/icon2-2.svg'
import icon2_3 from '../../assets/section3/icon2-3.svg'
import icon2_4 from '../../assets/section3/icon2-4.svg'

import icon3_1 from '../../assets/section3/icon3-1.svg'
import icon3_2 from '../../assets/section3/icon3-2.svg'
import icon3_3 from '../../assets/section3/icon3-3.svg'
import icon3_4 from '../../assets/section3/icon3-4.svg'

import icon4_1 from '../../assets/section3/icon4-1.svg'
import icon4_2 from '../../assets/section3/icon4-2.svg'
import icon4_3 from '../../assets/section3/icon4-3.svg'
import icon4_4 from '../../assets/section3/icon4-4.svg'

export default function MostPopular() {
    const data = [
        {
            img: img1,
            title: 'BIKE / RICKSHAW',
            price: 10,
            icons: [
                { icon: icon1_1, text: 'Your bike for a day' },
                { icon: icon1_2, text: 'City App' },
                { icon: icon1_3, text: 'Discount on Rickshaw' },
                { icon: icon1_4, text: 'Guaranteed Support' },
            ]
        },
        {
            img: img2,
            title: 'BIKE TOURS',
            price: 30,
            icons: [
                { icon: icon2_1, text: 'A Mountain Bike Included' },
                { icon: icon2_2, text: 'A Guide For You' },
                { icon: icon2_3, text: 'Bottle of water' },
                { icon: icon2_4, text: 'Guaranteed Support' },
            ]
        },
        {
            img: img3,
            title: 'BUS TRIPS',
            price: 45,
            icons: [
                { icon: icon3_1, text: 'Park ticket' },
                { icon: icon3_2, text: 'Return bus' },
                { icon: icon3_3, text: 'Companion' },
                { icon: icon3_4, text: 'Guaranteed Support' },
            ]
        },
        {
            img: img4,
            title: 'TRANSFER',
            price: 10,
            icons: [
                { icon: icon4_1, text: 'Personal Driver' },
                { icon: icon4_2, text: 'Wherever You Want' },
                { icon: icon4_3, text: 'At the best price' },
                { icon: icon4_4, text: 'Guaranteed Support' },
            ]
        },
    ]

    return (
        <div className='w-full px-[5.12%] lg:px-[13.02%] mt-[120px]'>
            <h2 className='text-[32px] text-black font-extrabold'>The Most Popular Packages</h2>
            <div className='mt-[60px] grid gap-8 grid-cols-1 md:grid-cols-2 2xl:grid-cols-4'>
                {data.map((card, index) => (
                    <div key={index} className='w-full'>
                        <Image
                            src={card.img}
                            alt=''
                            className='object-cover w-full h-[340px] rounded-t-3xl mb-[25px]'
                        />
                        <h3 className='mb-4 text-xl text-black font-extrabold'>{card.title}</h3>
                        <p className='mb-4 text-xl text-black font-normal'>
                            € <span className='text-5xl text-[#FA8B02] font-bold'>{card.price}</span>/day
                        </p>
                        <ul className='mb-4 flex flex-col gap-4'>
                            {card.icons.map((item, idx) => (
                                <li key={idx} className='flex gap-2'>
                                    <Image src={item.icon} alt='icon' />
                                    <span className='text-lg text-black font-normal'>{item.text}</span>
                                </li>
                            ))}
                        </ul>
                        <button className='w-full text-xl text-[#FA8B02] font-semibold border border-[#FA8B02] py-3 px-6 rounded-[50px]'>
                            Book Now
                        </button>
                    </div>
                ))}
            </div>
        </div>

    )
}
