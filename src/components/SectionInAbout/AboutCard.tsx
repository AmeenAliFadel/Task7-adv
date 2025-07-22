import Image, { StaticImageData } from 'next/image';

interface AboutCardProps {
    icon: StaticImageData;
    text: string;
    index?: number;
}

export default function AboutCard({ icon, text, index }: AboutCardProps) {
    return (
        <div
            data-aos="flip-right"
            className="
            bg-[#FFFFFF4D]
            flex flex-col justify-center items-center
            p-6 sm:p-8 gap-4
            rounded-3xl
            w-full sm:w-[250px] md:w-[220px] lg:w-[250px] xl:w-[260px]
            h-auto min-h-[160px]
            "
        >
            <Image src={icon} alt={index !== undefined ? `icon-${index}` : 'icon'} width={60} height={60} />
            <p className="text-base sm:text-lg lg:text-xl text-black font-semibold text-center">
                {text}
            </p>
        </div>
    );
}
