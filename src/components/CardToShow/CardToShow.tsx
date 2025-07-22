import React from 'react'
import image1 from '../../assets/section2/image1.webp'
import image2 from '../../assets/section2/image2.webp'
import image3 from '../../assets/section2/image3.webp'
import image4 from '../../assets/section2/image4.webp'
import ShowCard from './ShowCard'

const cards = [
    { image: image1, title: 'Bike and rickshaw rental', desc: 'Book your quality vehicle quickly for an hour or all day!' },
    { image: image2, title: 'Guided tour of the countryside', desc: 'Live the real Lucchese experience by visiting the suburbs by bike!' },
    { image: image3, title: 'Taxi and NCC service', desc: 'Do you need not only a bike but also a driver? Then you have found the right place!' },
    { image: image4, title: 'Bus Package', desc: 'Do you need not only a bike but also a driver? Then you have found the right place!' },
]
export default function CardToShow() {
    return (
        <>
            <div className=' w-full px-[5.12%] lg:px-[13.02%] grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-4 gap-6 mt-[120px]'>
                {cards.map((card, index) => (
                    <ShowCard
                        key={index}
                        image={card.image}
                        title={card.title}
                        desc={card.desc}
                    />
                ))}

            </div>
        </>
    )
}
