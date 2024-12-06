'use client'

import { motion } from 'framer-motion'

export default function Vision() {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="text-primary"
    >
      <h3 className="text-2xl font-semibold mb-4">Our Vision</h3>
      <p className="">
        We aspire to become Africa's most trusted technology partner, shaping the future of innovation. 
        Our aim is to make modern technology and software accessible and affordable for everyone, 
        breaking down barriers to entry for digital solutions. We envision building the continent's 
        largest research center, empowering youth to drive change, and expanding globally.
      </p>
    </motion.div>
  )
}

