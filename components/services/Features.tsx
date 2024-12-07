'use client';

import { motion } from 'framer-motion';
import GradientWord from '../ui/GradientWord';

interface Feature {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

interface FeaturesProps {
  features: Feature[]; // Array of features
}

export default function Features({ features }: FeaturesProps) {
  return (
    <section className="py-10 pb-16 bg-secondary">
      <div className="container mx-auto px-4 flex flex-col items-center">
        <GradientWord word="Features" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <feature.icon className="w-12 h-12 mb-4 text-[#503c3c]" />
              <h3 className="text-xl font-semibold mb-2 text-[#503c3c]">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
