import Image from "next/image";
import React from "react";
import img1 from "../../assets/user1.webp";
import img2 from "../../assets/page2Img.webp";

interface BestCompanyProps {
    isPrimary?: boolean;
}

export default function BestCompany({ isPrimary = true }: BestCompanyProps) {
    const stats = [
        { value: "20+", label: "Years Experience" },
        { value: "100+", label: "Happy Customer" },
        { value: "15+", label: "Choice of Services" },
        { value: "10+", label: "Professional Guides" },
    ];

    const image = isPrimary ? img1 : img2;
    const heading = isPrimary
        ? "We are the best company for your visit"
        : "We Are The Center Of Lucca To Offer You The Best";
    const paragraph = isPrimary
        ? `After decades of experience, and a whole life in Lucca, we offer you
        the most complete tourism service in the city. In addition to having
        bikes and rickshaws to have as much fun as you want, you have the
        choice of tour guides with whom to tour and drivers for your every
        need! We offer packages in the way that you get the most at the
        lowest price. Book with us and we will always be available for you!`
        : `We are right in the center of Lucca to offer you the real city life! With years of experience in practically every tourism sector, with us you can find complete packages at the lowest price, to travel and learn and have fun all without worries and without stress. What are you waiting for, book a bright evening, a trip to beautiful Tuscany or a personal tour for you!`;

    return (
        <section className="px-5 lg:px-[13.02%] mt-20">
            <div className="w-full flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10">
                <div className={`w-full lg:w-1/2 flex justify-center  `}>
                    <div className={`  ${isPrimary ? "" : "w-[84.56%] border border-[#EFEFEF] p-6 rounded-xl"}`}>
                        <Image
                            src={image}
                            alt="Best company"
                            className={` rounded-xl object-cover ${isPrimary ? "h-auto " : " w-full h-[516px]"}`}
                        />
                    </div>
                </div>
                <div className="w-full lg:w-[48%]">
                    <span className="block text-base font-semibold text-black mb-2">
                        WELCOME TO OUR SITE!
                    </span>
                    <h3 className="text-2xl md:text-3xl font-extrabold text-black mb-6 leading-snug">
                        {heading}
                    </h3>
                    <p className="text-base md:text-lg text-black font-normal mb-8 leading-relaxed">
                        {paragraph}
                    </p>

                    <div className="flex flex-wrap gap-[50px]">
                        {stats.map((item, index) => (
                            <div key={index} className="w-[80px]">
                                <h4 className="text-[#FA8B02] text-3xl font-bold">{item.value}</h4>
                                <span className="text-sm md:text-base text-black font-normal">
                                    {item.label}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
