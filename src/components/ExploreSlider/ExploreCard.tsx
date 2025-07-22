import Image, { StaticImageData } from 'next/image';

interface ExploreCardProps {
    image: StaticImageData;
    title: string;
    price: string | number;
    day: string;
    date: string;
    desc: string;
    icon1: StaticImageData;
    icon2: StaticImageData;
    index?: number;
}

export default function ExploreCard({
    image,
    title,
    price,
    day,
    date,
    desc,
    icon1,
    icon2,
    index,
}: ExploreCardProps) {
    return (
        <div className="w-full p-4 bg-white rounded-xl" data-aos="flip-right">
            <Image
                src={image}
                alt={index !== undefined ? `img-${index}` : 'img'}
                className="mb-4 w-full h-[404px] rounded-3xl object-cover"
            />
            <h4 className="text-2xl font-bold text-black mb-3">{title}</h4>
            <p className="text-lg font-semibold text-black mb-2">
                from <span className="text-[#FA8B02] text-2xl font-extrabold">{price}</span>
            </p>
            <div className="flex justify-between mb-3">
                <div className="flex gap-1.5 items-center">
                    <Image src={icon1} alt="icon" />
                    <span className="text-[#FA8B02] text-base font-semibold">{day}</span>
                </div>
                <div className="flex gap-1.5 items-center">
                    <Image src={icon2} alt="icon" />
                    <span className="text-[#FA8B02] text-base font-semibold">{date}</span>
                </div>
            </div>
            <p className="text-lg text-black">{desc}</p>
        </div>
    );
}
