'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import React, { useRef, useEffect, useState } from 'react'

import icon1 from '../../assets/section1/icon1.svg'
import icon2 from '../../assets/section1/icon2.svg'
import image1 from '../../assets/section1/explore1.webp'
import image2 from '../../assets/section1/explore2.webp'
import image3 from '../../assets/section1/explore3.webp'
import image4 from '../../assets/section1/explore4.webp'
import image5 from '../../assets/section1/explore5.webp'
import ExploreCard from './ExploreCard'

const cards = [
    { image: image1, title: 'Lucca Bike Tour', price: '34 €', day: 'EVERY DAY', date: '3-10 PP', desc: 'A tour of the city and its surroundings led by a professional guide ...' },
    { image: image2, title: 'Wine tasting In Tuscany', price: '34 €', day: 'MONDAY', date: '10-30 PP', desc: 'The real magic is here where you can enjoy the best Tuscan wine and eat ...' },
    { image: image3, title: 'Cinque Terre Tour', price: '34 €', day: 'TO BE DECIDED', date: '10-50 PP', desc: 'Visiting the 5 Terre is a must, and you can never go there enough ...' },
    { image: image4, title: 'Siena and Surroundings', price: '34 €', day: 'TO BE DECIDED', date: '5-10 PP', desc: 'Taste the best of Florence on this food journey...' },
    { image: image5, title: 'Florence Food Tour', price: '39 €', day: 'EVERY DAY', date: '3-10 PP', desc: 'Visit the beautiful Siena and the cities that surround it to experience ...' },
]
const LeftArrow = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#555" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="15 18 9 12 15 6" />
    </svg>
)

const RightArrow = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#555" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="9 18 15 12 9 6" />
    </svg>
)

export default function Explore() {
    const prevRef = useRef<HTMLButtonElement | null>(null)
    const nextRef = useRef<HTMLButtonElement | null>(null)
    const [navigationReady, setNavigationReady] = useState(false)

    useEffect(() => {
        setNavigationReady(true)
    }, [])

    return (
        <>
            <div className=' px-[5.12%] lg:px-[13.02%]'>
                <div className="flex justify-between items-center gap-3 flex-wrap mb-6">
                    <h3 className="text-2xl font-bold">Explore Our Popular Destinations</h3>
                    <div className="flex gap-4">
                        <button
                            ref={prevRef}
                            className="w-12 h-12 rounded-full bg-gray-200 active:bg-[#FA8B02] flex items-center justify-center"
                        >
                            <LeftArrow />
                        </button>
                        <button
                            ref={nextRef}
                            className="w-12 h-12 rounded-full  bg-gray-200  active:bg-[#FA8B02] flex items-center justify-center"
                        >
                            <RightArrow />
                        </button>
                    </div>
                </div>

                {navigationReady && (
                    <Swiper
                        modules={[Navigation]}
                        navigation={{
                            prevEl: prevRef.current,
                            nextEl: nextRef.current,
                        }}
                        spaceBetween={20}
                        slidesPerGroup={1}
                        loop={true}
                        breakpoints={{
                            0: {
                                slidesPerView: 1,
                            },
                            768: {
                                slidesPerView: 2,
                            },
                            1536: {
                                slidesPerView: 4,
                            },
                        }}
                        className="w-full"
                    >
                        {cards.map((card, index) => (
                            <SwiperSlide key={index}>
                                <ExploreCard
                                    image={card.image}
                                    title={card.title}
                                    price={card.price}
                                    day={card.day}
                                    date={card.date}
                                    desc={card.desc}
                                    icon1={icon1}
                                    icon2={icon2}
                                    index={index}
                                />
                            </SwiperSlide>
                        ))}

                    </Swiper>
                )}
            </div>
        </>
    )
}
