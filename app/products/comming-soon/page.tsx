"use client"
import { motion } from 'framer-motion'
import { Clock, Bell } from 'lucide-react'

export default function ComingSoon() {
  return (
    <div className="container mx-auto px-4 py-8">
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold text-[#503c3c] mb-4">Coming Soon</h1>
        <p className="text-xl text-gray-600">Exciting Innovations Await</p>
      </motion.section>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="max-w-2xl mx-auto bg-gradient-to-r from-[#503c3c] to-[#d5cea3] p-8 rounded-lg text-white text-center"
      >
        <Clock size={64} className="mx-auto mb-4" />
        <h2 className="text-3xl font-bold mb-4">Something Big is Coming</h2>
        <p className="mb-6">
          Our team is hard at work developing an innovative new product that will redefine 
          the way you interact with technology. Stay tuned for updates and be the first to 
          experience what's next from Adot.
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          className="bg-white text-[#503c3c] px-6 py-2 rounded-full inline-flex items-center"
        >
          Get Notified <Bell size={16} className="ml-2" />
        </motion.button>
      </motion.div>
    </div>
  )
}

