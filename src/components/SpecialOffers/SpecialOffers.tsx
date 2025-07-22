import Image from 'next/image'
import React from 'react'
import img from '../../assets/user2.webp'

export default function SpecialOffers() {
    return (
        <>
            <div className=' w-full  bg-[#ffb47b] mt-[220px]'>
                <div className=' flex flex-col-reverse md:flex-row justify-between w-full px-[5.12%] lg:px-[13.02%] '>
                    <div className=' text-center flex flex-col justify-center items-center my-[60px] w-full lg:w-[60.09%] bg-[#FFFFFF4D] p-[30px] rounded-3xl '>
                        <h2 className=' text-[32px] text-black font-extrabold mb-8 '>Get Special Offers for Organizations</h2>
                        <p className=' text-lg text-black font-normal mb-8'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                        <button className=' w-[212px] bg-[#FA8B02] px-6 py-2.5 rounded-[50px] text-white text-xl font-semibold '>Contact Us</button>
                    </div>
                    <Image src={img} alt='img' className=' hidden lg:block w-full md:mb-[-58px] md:mt-[-100px]' />
                </div>
            </div>
        </>
    )
}
