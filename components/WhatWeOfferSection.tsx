import GradientWord from "./ui/GradientWord"
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
import { Globe, Cog, BadgeDollarSign, Lightbulb, TabletSmartphone } from 'lucide-react';
import { items } from "@/data/serviceOffers";
import Image from "next/image";

type IconNames = 'Globe' | 'TabletSmartphone' | 'Cog' | 'Lightbulb' | 'BadgeDollarSign';

const iconMap: Record<IconNames, React.FC<React.SVGProps<SVGSVGElement>>> = {
    Globe,
    TabletSmartphone,
    Cog,
    Lightbulb,
    BadgeDollarSign,
};
const WhatWeOfferSection = () => {
    return (
        <div className="mt-4 mx-10 md:mx-16 flex flex-col items-center">
            <GradientWord word="What We Offer" />
            <BentoGrid className="max-w-5xl mx-auto mt-6">
                {items.map((item, i) => {
                    const IconComponent = iconMap[item.icon as IconNames];
                    return (
                        <BentoGridItem
                            key={i}
                            title={item.title}
                            description={item.description}
                            header={
                                <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-primary to-[#7c662e] overflow-hidden">
                                    <Image src={item.header} alt={item.title} width={1000} height={1000} className="object-cover" />
                                </div>
                            }
                            icon={<IconComponent className="h-4 w-4 text-neutral-500" />} // Render the icon dynamically
                            className={i === 3 || i === 6 ? "md:col-span-2" : ""}
                        />
                    );
                })}
            </BentoGrid>
        </div>

    )
}

export default WhatWeOfferSection
