'use client'

import { motion } from 'framer-motion'

export default function CallToAction() {
  return (
    <section className="py-20 bg-primary text-white">
      <div className="container mx-auto px-4 text-center">
        <motion.h2 
          className="text-3xl font-bold mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Let's Innovate Together
        </motion.h2>
        <motion.p 
          className="text-xl mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Whether you're a student, developer, or industry partner, there's a place for you at Adot Labs. Join us in shaping the future of technology and innovation.
        </motion.p>
        <motion.div 
          className="flex justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <button className="bg-secondary text-primary hover:bg-secondary/90">
            <a href="/contact">Contact Us</a>
          </button>
          <button className="border-white text-white hover:bg-white hover:text-primary">
            <a href="/collaborate">Collaborate with Adot Labs</a>
          </button>
        </motion.div>
      </div>
    </section>
  )
}

