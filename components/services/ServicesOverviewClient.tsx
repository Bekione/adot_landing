"use client";

import { services } from "@/data/serviceOffers";
import Button from "@/components/ui/Button";
import MotionWrapper from "@/components/MotionWrapper";
import { iconMap } from "@/lib/icon-map";
import { CardSpotlight } from "@/components/ui/CardSpotlight";

export default function ServicesOverviewClient() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
      {services.map((service, index) => {
        const IconComponent = iconMap[service.icon];

        return (
          <MotionWrapper
            key={service.title}
            className="relative"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: index * 0.2,
            }}
          >
            <CardSpotlight className="p-8 shadow-xl group">
              <div className="w-16 h-16 mb-4 flex items-center justify-center rounded-full bg-[#f2ebe3] text-primary relative z-20">
                <IconComponent className="w-8 h-8" />
              </div>
              <h2 className="text-2xl font-bold font-ubuntuBold mb-4 text-primary group-hover:text-white relative z-20">
                {service.title}
              </h2>
              <p className="text-gray-600 group-hover:text-white leading-relaxed mb-6 relative z-20">
                {service.description}
              </p>
              <Button text="Learn More" to={service.link} className="!z-20" />
            </CardSpotlight>
          </MotionWrapper>
        );
      })}
    </div>
  );
} 