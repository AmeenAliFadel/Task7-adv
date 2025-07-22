'use client'

import React, { useEffect, useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'

import icon from '../../assets/dots.svg'
import img from '../../assets/happyUser.png'
import TestimonialCard from './TestimonialCard'

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

const testimonials = [
    {
        name: 'Lyod Gomez',
        content:
            'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure',
    },
    {
        name: 'Sarah Johnson',
        content:
            'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure',
    },
    {
        name: 'Alex Turner',
        content:
            'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure',
    },
]

export default function HappyCustomers() {
    const prevRef = useRef<HTMLButtonElement | null>(null)
    const nextRef = useRef<HTMLButtonElement | null>(null)
    const [navigationReady, setNavigationReady] = useState(false)

    useEffect(() => {
        setNavigationReady(true)
    }, [])
    return (
        <>
            <div className=' px-[5.12%] lg:px-[13.02%]'>
                <div className="flex justify-between items-center gap-3 flex-wrap mb-6 mt-[120px]">
                    <h3 className="text-2xl font-bold">Happy Customers Says</h3>
                    <div className="flex gap-4">
                        <button
                            ref={prevRef}
                            className="w-12 h-12 rounded-full bg-gray-200 active:bg-[#FA8B02] flex items-center justify-center"
                        >
                            <LeftArrow />
                        </button>
                        <button
                            ref={nextRef}
                            className="w-12 h-12 rounded-full bg-gray-200 active:bg-[#FA8B02] flex items-center justify-center"
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
                        onBeforeInit={(swiper) => {
                            if (swiper.params.navigation && typeof swiper.params.navigation === 'object') {
                                swiper.params.navigation.prevEl = prevRef.current
                                swiper.params.navigation.nextEl = nextRef.current
                            }
                        }}
                        loop={true}
                        slidesPerGroup={1}
                        spaceBetween={20}
                        breakpoints={{
                            0: {
                                slidesPerView: 1,
                            },
                            768: {
                                slidesPerView: 2,
                            },
                        }}
                        className="w-full"
                    >
                        {testimonials.map((item, index) => (
                            <SwiperSlide key={index}>
                                <TestimonialCard
                                    name={item.name}
                                    content={item.content}
                                    img={img}
                                    icon={icon}
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                )}
            </div>

        </>
    )
}
