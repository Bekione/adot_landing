"use client";

import { FC } from "react";
import { motion } from "framer-motion";

interface CardProps {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  delay: number;
  className?: string;
}

const Card: FC<CardProps> = ({ icon: Icon, title, description, delay, className }) => (
  <motion.div
    className={`bg-white p-8 py-4 rounded-3xl shadow-xl transform transition-transform hover:scale-105 hover:shadow-2xl hover:shadow-primary/20 ${className}`}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay }}
  >
    <div className="text-center mb-6">
      <Icon className="h-12 w-12 text-primary mb-4 mx-auto" />
    </div>
    <h3 className="text-2xl font-semibold font-ubuntuBold text-center text-primary mb-3">
      {title}
    </h3>
    <p className="text-gray-500 text-center">{description}</p>
  </motion.div>
);

export default Card;
