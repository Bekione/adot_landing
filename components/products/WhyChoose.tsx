import { FC } from "react";
import { motion } from "framer-motion";
import GradientWord from "../ui/GradientWord";

interface CardProps {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  delay: number;
}

const Card: FC<CardProps> = ({ icon: Icon, title, description, delay }) => (
  <motion.div
    className="bg-white p-8 py-4 rounded-3xl shadow-xl transform transition-transform hover:scale-105 hover:shadow-2xl hover:shadow-primary/20"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay }}
  >
    <div className="text-center mb-6">
      <Icon className="h-12 w-12 text-primary mb-4 mx-auto" />
    </div>
    <h3 className="text-2xl font-semibold font-ubuntuBold text-center text-primary mb-3">{title}</h3>
    <p className="text-gray-500">{description}</p>
  </motion.div>
);

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
    className="container mx-auto px-6 flex flex-col items-center py-12"
  >
    <GradientWord word={title} />
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 mt-6 mb-12">
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
