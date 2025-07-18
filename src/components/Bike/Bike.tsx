import React from 'react'
import Image from 'next/image'
import img from '../../assets/user3.webp'

export default function Bike() {
    const formRows = [
        [
            { label: 'Name and Surname', type: 'text', placeholder: 'Enter your name and surname' },
            { label: 'Email Address', type: 'email', placeholder: 'Enter your email address' },
        ],
        [
            { label: 'Telephone Number', type: 'number', placeholder: 'Enter your telephone number' },
            { label: 'Service Type', type: 'text', placeholder: 'Select the service types' },
        ],
        [
            { label: 'Date', type: 'date', placeholder: 'Select the date' },
            { label: 'Time', type: 'time', placeholder: 'Select the time' },
        ],
    ]

    return (
        <div className='w-full bg-[#ffb47b] mt-[220px]'>
            <div className='flex flex-col-reverse lg:flex-row justify-between items-center w-full px-6 lg:px-[13.02%] gap-10'>

                <div className='w-full lg:w-[734px] my-[40px] lg:my-[60px]'>
                    <h3 className='text-2xl sm:text-3xl lg:text-[32px] text-center text-black font-extrabold mb-9'>
                        Book Now Bike
                    </h3>
                    <form className='bg-[#FFFFFF4D] p-5 sm:p-8 rounded-3xl'>
                        {formRows.map((row, rowIndex) => (
                            <div key={rowIndex} className='flex flex-col sm:flex-row gap-5 mb-6'>
                                {row.map((field, i) => (
                                    <div key={i} className='flex flex-col flex-1'>
                                        <label className=' whitespace-nowrap text-base sm:text-lg text-black font-semibold mb-2'>
                                            {field.label}
                                        </label>
                                        <input
                                            type={field.type}
                                            placeholder={field.placeholder}
                                            className='w-full bg-white py-3 px-4 rounded-lg text-sm sm:text-base text-black font-normal'
                                        />
                                    </div>
                                ))}
                            </div>
                        ))}

                        <div className='flex justify-center items-center'>
                            <input
                                type='submit'
                                value='Book Now'
                                className='w-[160px] sm:w-[200px] bg-[#FA8B02] rounded-[50px] px-6 py-3 text-white text-base sm:text-xl font-semibold hover:bg-[#e07b00] transition-colors'
                            />
                        </div>
                    </form>
                </div>

                <div className='w-full  max-w-[734px]  flex justify-center'>
                    <Image
                        src={img}
                        alt='img'
                        className='w-full max-w-[500px] sm:max-w-[724px] lg:h-[542px] mt-0 lg:mt-[140px] mb-0 lg:mb-[-34px] object-contain'
                    />
                </div>

            </div>
        </div>
    )
}
