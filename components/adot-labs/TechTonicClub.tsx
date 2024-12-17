"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import GradientWord from "../ui/GradientWord";
import cloudinaryLoader, {
  cloudinaryBlurPlaceholder,
} from "@/lib/image-loader";
import { iconMap } from "@/lib/icon-map";
import { techtonicBenefits } from "@/data/benefits";

export default function TechTonicClub() {
  return (
    <section className="py-10 md:py-16">
      <div className="container mx-auto px-4 md:w-11/12 lg:w-10/12">
        {/* Title Section */}
        <motion.div
          className="mb-6 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <GradientWord
            word="Empowering TechTonic Club"
            size="sm"
            className="text-center"
          />
        </motion.div>

        {/* Content Section */}
        <div className="flex flex-col md:flex-row items-center gap-8 lg:gap-12 mx-6 md:mx-auto">
          {/* Image Section */}
          <motion.div
            className="w-full md:w-1/2 flex justify-center"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Image
              loader={cloudinaryLoader}
              src="/images/adot-labs/techtonic-logo.jpg"
              alt="TechTonic Club activities"
              width={500}
              height={300}
              sizes="(max-width: 768px) 80vw, 50vw"
              placeholder="blur"
              blurDataURL={cloudinaryBlurPlaceholder(
                "/images/adot-labs/techtonic-logo.jpg"
              )}
              className="rounded-xl shadow-xl object-cover w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg"
            />
          </motion.div>

          {/* Text Content Section */}
          <motion.div
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-lg text-gray-700 mb-6 leading-relaxed text-justify">
              Adot Labs is proud to partner with and support the TechTonic Club
              at DBU. Our collaboration aims to foster innovation and technical
              excellence among students.
            </p>

            {/* Benefits List with Icons */}
            <div className="space-y-4 mb-6 ml-4 md:ml-0">
              {techtonicBenefits.map((benefit, index) => {
                const Icon = iconMap[benefit.icon];
                return (
                  <motion.div
                    key={index}
                    className="flex items-start gap-4"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.3 }}
                    viewport={{ once: true }}
                  >
                    <Icon className="h-6 w-6 text-primary flex-shrink-0" />
                    <p className="text-gray-700 text-base leading-relaxed">
                      {benefit.text}
                    </p>
                  </motion.div>
                );
              })}
            </div>

            {/* Call-to-Action */}
            <p className="text-lg text-gray-700 leading-relaxed text-justify">
              Together, we&apos;re building a strong foundation for the next
              generation of tech innovators.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
