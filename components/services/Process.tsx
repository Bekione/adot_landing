"use client";

import { motion } from "framer-motion";
import GradientWord from "../ui/GradientWord";
import { iconMap } from "@/lib/icon-map";

interface ProcessStep {
  icon: keyof typeof iconMap;
  title: string;
  description: string;
}

interface ProcessProps {
  steps: ProcessStep[];
}

export default function Process({ steps }: ProcessProps) {
  return (
    <motion.section
      className="py-8 bg-white md:w-11/12 lg:w-10/12 mx-auto"
      initial={{ opacity: 0 , y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-4 flex flex-col items-center">
        <GradientWord word="Our Process" size="sm" />
        <div className="flex flex-wrap justify-center mt-10 mx-6 md:mx-0">
          {steps.map((step, index) => {
            const Icon = iconMap[step.icon];
            return (
              <motion.div
                key={index}
                className="w-full md:w-1/3 px-4 mb-8"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.3 }}
                viewport={{ once: true }}
              >
                <div className="text-center">
                  <div className="inline-block p-4 rounded-full bg-secondary mb-4">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold font-ubuntuBold mb-2 text-primary">
                    {step.title}
                  </h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
}
