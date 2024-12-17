"use client";

import React from "react";
import GradientWord from "../ui/GradientWord";
import Button from "../ui/Button";
import { motion } from "framer-motion";
import Image from "next/image";
import cloudinaryLoader, { cloudinaryBlurPlaceholder } from "@/lib/image-loader";

const AdotLabsSection = () => {
  const variants = {
    hiddenLeft: { x: "-100%", opacity: 0 },
    hiddenRight: { x: "100%", opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };

  return (
    <section className="my-10 pt-16 pb-10 w-full overflow-hidden">
      <div className="container mx-auto px-4 md:w-11/12 lg:w-10/12">
        <div className="flex flex-col lg:flex-row items-center gap-12 mx-8 md:mx-0">
          {/* Left Section */}
          <motion.div
            className="w-full lg:w-3/5"
            initial="hiddenRight"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={variants}
            transition={{
              duration: 0.8,
              ease: [0.43, 0.13, 0.23, 0.96],
              delay: 0.2,
            }}
          >
            <GradientWord word="Adot Labs" />
            <p className="text-lg text-gray-600 mb-6 text-justify">
              At ADOT Labs, we support innovation through incubation and
              funding, helping startups and tech enthusiasts bring their ideas
              to life. Our goal is to foster creativity and drive
              forward-thinking solutions.
            </p>
            <Button text="See more" to="/about" className="mt-4" />
          </motion.div>

          {/* Right Section */}
          <motion.div
            className="w-full lg:w-2/5"
            initial="hiddenLeft"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={variants}
            transition={{ duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] }}
          >
            <div className="w-full flex justify-center">
              <Image
                loader={cloudinaryLoader}
                src="/images/adot-labs/adot-lab.avif"
                alt="Adot Labs"
                width={500}
                height={300}
                placeholder="blur"
                blurDataURL={cloudinaryBlurPlaceholder(
                  "/images/adot-labs/adot-lab.avif"
                )}
                className="w-full max-w-md h-auto aspect-video rounded-md shadow-lg"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AdotLabsSection;
