import Image, { StaticImageData } from 'next/image';

interface IconItem {
    icon: StaticImageData;
    text: string;
}

interface CardProps {
    img: StaticImageData;
    title: string;
    price: number | string;
    icons: IconItem[];
}

export default function MostPopularCard({ img, title, price, icons }: CardProps) {
    return (
        <div data-aos="flip-right" className="w-full">
            <Image
                src={img}
                alt="img"
                className="object-cover w-full h-[340px] rounded-t-3xl mb-[25px]"
            />
            <h3 className="mb-4 text-xl text-black font-extrabold">{title}</h3>
            <p className="mb-4 text-xl text-black font-normal">
                € <span className="text-5xl text-[#FA8B02] font-bold">{price}</span>/day
            </p>
            <ul className="mb-4 flex flex-col gap-4">
                {icons.map((item, idx) => (
                    <li key={idx} className="flex gap-2">
                        <Image src={item.icon} alt="icon" />
                        <span className="text-lg text-black font-normal">{item.text}</span>
                    </li>
                ))}
            </ul>
            <button className="w-full text-xl text-[#FA8B02] font-semibold border border-[#FA8B02] py-3 px-6 rounded-[50px]">
                Book Now
            </button>
        </div>
    );
}
