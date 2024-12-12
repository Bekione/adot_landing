import { FC } from "react";
import { motion } from "framer-motion";
import GradientWord from "../ui/GradientWord";
import Card from "../ui/Card";

interface WhyChooseProps {
  title: string;
  cards: Array<{
    icon: React.ComponentType<{ className?: string }>;
    title: string;
    description: string;
  }>;
}

const WhyChoose: FC<WhyChooseProps> = ({ title, cards }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.6, delay: 1 }}
    className="container mx-auto px-6 flex flex-col items-center py-8 md:py-12"
  >
    <GradientWord word={title} size="sm" />
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 mt-6 mb-12 mx-4 md:mx-auto">
      {cards.map((card, index) => (
        <Card
          key={index}
          icon={card.icon}
          title={card.title}
          description={card.description}
          delay={index * 0.2}
        />
      ))}
    </div>
  </motion.div>
);

export default WhyChoose;
