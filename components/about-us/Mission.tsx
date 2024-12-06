'use client'

import { motion } from 'framer-motion'

export default function Mission() {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="text-white"
    >
      <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
      <p className="w-full">
        At Adot Technologies, we are committed to driving the tech revolution in Ethiopia and Africa. 
        We solve community challenges by creating innovative products and harnessing modern software 
        technology to empower society. Our goal is to serve the people, build transformative technologies, 
        and provide accessible solutions that empower businesses and individuals.
      </p>
    </motion.div>
  )
}

