"use client"

import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';
import GradientWord from './ui/GradientWord';

interface GradientHeaderProps {
  title: string;
  subtitle?: string;
  children?: ReactNode; 
}

const GradientHeader: React.FC<GradientHeaderProps> = ({ title, subtitle, children }) => {
  return (
    <header className="hero-bg text-white py-20 min-h-96 flex items-center justify-center">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-4xl md:text-5xl font-bold font-ubuntuBold mb-4 text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <GradientWord word={title} type="secondary" />
        </motion.div>
        {subtitle && (
          <motion.p
            className="text-xl text-center w-10/12 max-w-xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {subtitle}
          </motion.p>
        )}
        <motion.div
          className="flex flex-col items-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {children}
        </motion.div>
        
      </div>
    </header>
  );
};

export default GradientHeader;
