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

export function BentoGridDemo() {
  return (
    <BentoGrid className="max-w-5xl mx-auto">
      {items.map((item, i) => {
        const IconComponent = iconMap[item.icon as IconNames]; // Ensure `item.icon` is one of the valid IconNames
        return (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={
              <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100">
                <Image src={item.header} alt={item.title} fill />
              </div>
            }
            icon={<IconComponent className="h-4 w-4 text-neutral-500" />} // Render the icon dynamically
            className={i === 3 || i === 6 ? "md:col-span-2" : ""}
          />
        );
      })}
    </BentoGrid>
  );
}
