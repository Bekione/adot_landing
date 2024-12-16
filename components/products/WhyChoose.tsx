"use client";

import { FC } from "react";
import { motion } from "framer-motion";
import GradientWord from "../ui/GradientWord";
import Card from "../ui/Card";
import { iconMap } from "@/lib/icon-map";

interface WhyChooseProps {
  title: string;
  cards: Array<{
    icon: keyof typeof iconMap;
    title: string;
    description: string;
  }>;
}

const WhyChoose: FC<WhyChooseProps> = ({ title, cards }) => {
  const getAnimationDelay = (index: number) => {
    if (cards.length === 3) {
      // If exactly 3 cards (for large screens), the middle comes first
      if (index === 1) return 0; // Middle card
      if (index === 0 || index === 2) return 0.3; // Side cards
    }
    return index * 0.2; // Default stagger for other card counts
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="container mx-auto px-6 flex flex-col items-center py-8 md:py-12"
    >
      <GradientWord word={title} size="sm" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 mt-6 mb-12 mx-4 md:mx-auto">
        {cards.map((card, index) => {
          const Icon = iconMap[card.icon];
          const delay = getAnimationDelay(index);

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.8,
                delay: delay,
                ease: "easeOut",
              }}
            >
              <Card
                icon={Icon}
                title={card.title}
                description={card.description}
              />
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default WhyChoose;
