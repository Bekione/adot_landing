"use client";

import { motion } from "framer-motion";
import GradientWord from "../ui/GradientWord";
import { BentoGrid, BentoGridItem } from "../ui/BentoGrid";
import Image from "next/image";
import { offers } from "@/data/serviceOffers";

const WhatWeOfferSection = () => {
  return (
    <motion.div
      className="flex flex-col items-center w-full sm:w-10/12 px-4 py-8 md:py-12 md:w-11/12 lg:w-10/12 mx-auto"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      {/* Section Title */}
      <GradientWord word="What We Offer" />

      {/* BentoGrid */}
      <BentoGrid className="max-w-5xl mx-8 md:mx-0 mt-6 ">
        {offers.map((offer, i) => (
         
            <BentoGridItem
              title={offer.title}
              description={offer.description}
              key={offer.title}
              idx={i}
              header={
                <div className="flex w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-primary to-[#7c662e] overflow-hidden">
                  <Image
                    src={offer.header}
                    alt={offer.title}
                    width={1000}
                    height={1000}
                    className="object-cover w-full h-full aspect-video"
                  />
                </div>
              }
              icon={<offer.icon className="h-6 w-6 text-neutral-200" />}
              className={i === 3 || i === 6 ? "md:col-span-2" : ""}
            />
        ))}
      </BentoGrid>
    </motion.div>
  );
};

export default WhatWeOfferSection;
