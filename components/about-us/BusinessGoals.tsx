'use client'

import { motion } from 'framer-motion'
import GradientWord from '../ui/GradientWord'

const goals = [
  'Achieve customer-centric growth',
  'Expand into new markets across Africa and beyond',
  'Prioritize technology leadership',
  'Build a skilled and diverse team',
  'Foster financial sustainability',
  'Create social impact through education and job creation',
]

export default function BusinessGoals() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="my-16"
    >
      <GradientWord word="Business Goals" />
      {/* <h3 className="text-3xl font-semibold mb-8 text-center text-[#503c3c]">Our Business Goals</h3> */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {goals.map((goal, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="bg-white p-6 rounded-lg shadow-lg flex items-center"
          >
            <span className="text-[#503c3c] text-2xl mr-4">•</span>
            <p className="text-gray-700">{goal}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

