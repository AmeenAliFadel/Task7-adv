import Image, { StaticImageData } from 'next/image';

interface TestimonialCardProps {
    name: string;
    content: string;
    img: StaticImageData;
    icon: StaticImageData;
}

export default function TestimonialCard({ name, content, img, icon }: TestimonialCardProps) {
    return (
        <div
            data-aos="flip-right"
            className="p-6 rounded-3xl border border-gray-200 shadow bg-white h-full"
        >
            <div className="flex flex-col justify-center items-center mb-4">
                <Image src={img} alt="user" width={80} height={80} className="rounded-full" />
                <h4 className="mt-2 text-lg font-bold">{name}</h4>
            </div>
            <Image src={icon} alt="icon" className="mb-2" />
            <p className="text-lg text-black font-normal">{content}</p>
            <div className="flex justify-end mt-4">
                <Image src={icon} alt="icon" />
            </div>
        </div>
    );
}
