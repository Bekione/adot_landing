'use client'

import { motion } from 'framer-motion'
import GradientWord from '../ui/GradientWord'

export default function OfficeLocation() {
  return (
    <motion.div 
      className="mt-16 flex flex-col items-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
        <GradientWord word='Office Location' />
      <div className="bg-gray-200 rounded-lg shadow-md h-96 w-full flex items-center justify-center">
        <p className="text-gray-500">Interactive Map Coming Soon</p>
      </div>
    </motion.div>
  )
}

