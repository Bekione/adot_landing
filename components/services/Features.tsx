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
    <section className="py-10 pb-16 bg-primary relative overflow-hidden">
      <Noise />
      <div className="container mx-auto px-4 flex flex-col items-center">
        <GradientWord word="Features" type="secondary" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8 md:w-11/12 lg:w-10/12 mx-6 md:mx-0">
          {features.map((feature, index) => {
            const Icon = iconMap[feature.icon];
            return (
              <motion.div
                key={index}
                className="bg-secondary/50 p-6 rounded-lg shadow-lg hover:bg-secondary/60 transition-all duration-300 z-50"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Icon className="w-12 h-12 mb-4 text-white" />
                <h3 className="text-xl font-semibold font-ubuntuBold mb-2 text-white">
                  {feature.title}
                </h3>
                <p className="text-white/80">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
