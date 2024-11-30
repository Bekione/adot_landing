"use client";

import GradientWord from "./ui/GradientWord";
import GlareCard from "./ui/GlareCard";
import { motion } from "framer-motion";
import Image from "next/image";

const WhoWeAreSection = () => {
  return (
    <section className="py-16 w-full overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-8">
          <motion.div
            className="w-full lg:w-2/5"
            initial={{ x: -1000, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] }}
          >
              <GlareCard className="flex flex-col items-center justify-center">
                <Image
                  src="/ai.svg"
                  alt="Adot office jpg"
                  fill
                  className="object-cover"
                />
              </GlareCard>
          </motion.div>
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
            <GradientWord word="Who We Are" />
            <p className="text-lg text-gray-600 mb-6">
              At Adot Solution, we are on a mission to transform Ethiopia&apos;s
              tech landscape. Our vision is to become the leading innovator in
              the region, providing cutting-edge solutions that address local
              challenges while meeting global standards. Our goal is to empower
              businesses and individuals with technology that drives growth and
              fosters innovation.
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Advanced AI-powered analytics</li>
              <li>Seamless cross-platform integration</li>
            </ul>
            <button className="px-8 py-2 mt-4 rounded-md bg-primary text-white font-bold font-sans transition duration-200 hover:bg-white hover:text-primary border-2 border-transparent hover:border-primary">
              See more
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAreSection;
