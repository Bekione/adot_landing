'use client'

import { motion } from 'framer-motion'
import { DollarSign, Award, Lightbulb } from 'lucide-react'
import GradientWord from '../ui/GradientWord'

const reasons = [
  { title: 'Affordability', description: 'We offer competitive pricing without compromising on quality.', icon: DollarSign },
  { title: 'Quality', description: 'Our solutions are built to the highest standards, ensuring reliability and performance.', icon: Award },
  { title: 'Innovation', description: 'We stay at the forefront of technology, bringing cutting-edge solutions to our clients.', icon: Lightbulb },
]

export default function WhyAdot() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 1 }}
      className="my-16 flex flex-col items-center"
    >
        <GradientWord word="Why Choose Us?" />
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        {reasons.map((reason, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center text-center"
          >
            <reason.icon className="w-12 h-12 text-[#503c3c] mb-4" />
            <h4 className="text-xl font-semibold mb-2 text-[#503c3c]">{reason.title}</h4>
            <p className="text-gray-700">{reason.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

