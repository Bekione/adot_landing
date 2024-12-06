"use client"

import { motion } from 'framer-motion'
import { CheckCircle, ArrowRight } from 'lucide-react'

export default function Youthopia() {
  return (
    <div className="container mx-auto px-4 py-8">
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold text-[#503c3c] mb-4">Youthopia</h1>
        <p className="text-xl text-gray-600">An all-in-one educational and social platform designed exclusively for kids</p>
      </motion.section>

      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
      >
        <div>
          <h2 className="text-2xl font-bold text-[#503c3c] mb-4">Key Features</h2>
          <ul className="space-y-2">
            {[
              "Subscription-based access to high-quality educational content",
              "Safe social media features tailored for kids",
              "Brain-growing activities and challenges to enhance cognitive development",
              "Social and collaborative features to build teamwork and communication skills"
            ].map((feature, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center"
              >
                <CheckCircle className="text-[#d5cea3] mr-2" size={20} />
                {feature}
              </motion.li>
            ))}
          </ul>
        </div>
        <div className="bg-[#f0ebe3] p-6 rounded-lg">
          <h2 className="text-2xl font-bold text-[#503c3c] mb-4">Why Choose Youthopia?</h2>
          <p className="text-gray-700 mb-4">
            Youthopia offers a safe and engaging environment for learning, socializing, and exploring 
            creativity through curated content and activities. It's designed to nurture young minds 
            while providing parents with peace of mind.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="bg-[#503c3c] text-white px-6 py-2 rounded-full inline-flex items-center"
          >
            Explore Youthopia <ArrowRight size={16} className="ml-2" />
          </motion.button>
        </div>
      </motion.section>
    </div>
  )
}

