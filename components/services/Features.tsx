"use client";

import { motion } from "framer-motion";
import GradientWord from "../ui/GradientWord";
import { Noise } from "../ui/WobbleCard";
import { iconMap } from "@/lib/icon-map";

interface Feature {
  icon: keyof typeof iconMap;
  title: string;
  description: string;
}

interface FeaturesProps {
  features: Feature[];
}

export default function Features({ features }: FeaturesProps) {
  return (
    <motion.section
      className="py-10 pb-16 bg-primary relative overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <Noise />
      <div className="container mx-auto px-4 flex flex-col items-center">
        {/* Gradient Title */}
        <GradientWord word="Features" type="secondary" />

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8 md:w-11/12 lg:w-10/12 mx-6 md:mx-0">
          {features.map((feature, index) => {
            const Icon = iconMap[feature.icon];

            return (
              <motion.div
                key={index}
                className="relative bg-secondary/50 p-6 rounded-lg shadow-lg hover:bg-secondary/60 hover:scale-105 transition-transform duration-300 ease-out z-10"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {/* Icon */}
                <div className="w-12 h-12 mb-4 flex items-center justify-center text-white">
                  <Icon className="w-12 h-12" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold font-ubuntuBold mb-2 text-white">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-white/80">{feature.description}</p>

                {/* Background Hover Effect */}
                <motion.div
                  className="absolute inset-0 rounded-lg bg-secondary/80 scale-0 group-hover:scale-125 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out"
                  style={{ zIndex: -1 }}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
}
