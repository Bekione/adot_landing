"use client"
import { motion } from 'framer-motion'
import { CheckCircle, ArrowRight } from 'lucide-react'

export default function AdotERP() {
  return (
    <div className="container mx-auto px-4 py-8">
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold text-[#503c3c] mb-4">Adot ERP</h1>
        <p className="text-xl text-gray-600">Empowering Ethiopian businesses with tailored ERP solutions</p>
      </motion.section>

      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
      >
        <div>
          <h2 className="text-2xl font-bold text-[#503c3c] mb-4">Features</h2>
          <ul className="space-y-2">
            {[
              "Seamless integration with Ethiopian tax and regulatory systems",
              "Comprehensive modules for HR, finance, and inventory management",
              "User-friendly interfaces for smooth adoption",
              "Real-time reporting and analytics"
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
          <h2 className="text-2xl font-bold text-[#503c3c] mb-4">Why Choose Adot ERP?</h2>
          <p className="text-gray-700 mb-4">
            Adot ERP is meticulously tailored to align with the unique needs of Ethiopian businesses. 
            Designed to handle the complexities of the local economic landscape, Adot ERP empowers 
            enterprises to manage their operations efficiently and stay ahead in the competitive market.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="bg-[#503c3c] text-white px-6 py-2 rounded-full inline-flex items-center"
          >
            Get Started <ArrowRight size={16} className="ml-2" />
          </motion.button>
        </div>
      </motion.section>
    </div>
  )
}

