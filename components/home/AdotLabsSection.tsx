"use client"

import React from "react";
import GradientWord from "../ui/GradientWord";
import Button from "../ui/Button";
import { motion } from "framer-motion";
import Image from "next/image";

const AdotLabsSection = () => {
  return (
    <section className="py-16 w-full overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div
            className="w-full lg:w-3/5"
            initial={{ x: 1000, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              duration: 0.8,
              ease: [0.43, 0.13, 0.23, 0.96],
              delay: 0.2,
            }}
          >
            <GradientWord word="Adot Labs" />
            <p className="text-lg text-gray-600 mb-6">
              At ADOT Labs, we support innovation through incubation and
              funding, helping startups and tech enthusiasts bring their ideas
              to life. Our goal is to foster creativity and drive
              forward-thinking solutions.
            </p>
            <Button text="See more" to="/about" className="mt-4" />
          </motion.div>

          <motion.div
            className="w-full lg:w-2/5"
            initial={{ x: -1000, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] }}
          >
            <Image
              src="/images/adot-labs/adot-lab.avif"
              alt="Adot Labs"
              width={500}
              height={300}
              className="w-full h-auto aspect-video rounded-md shadow-lg"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AdotLabsSection;
