import Image, { StaticImageData } from 'next/image';

interface ShowCardProps {
    image: StaticImageData;
    title: string;
    desc: string;
}

export default function ShowCard({ image, title, desc }: ShowCardProps) {
    return (
        <div data-aos="flip-right">
            <Image
                src={image}
                alt="img"
                className="w-full h-[303px] rounded-3xl mb-5 object-cover"
            />
            <h3 className="text-2xl text-black font-bold mb-3">{title}</h3>
            <p className="text-lg text-black font-normal">{desc}</p>
        </div>
    );
}
