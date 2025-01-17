'use client'

import { motion } from 'framer-motion'
import { iconMap } from '@/lib/icon-map'
import { values } from '@/data/values'

export default function CoreValues() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className=""
    >
      <h3 className="text-3xl font-semibold font-ubuntuBold mb-8 text-center text-white">Our Core Values</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {values.map((value, index) => {
          const Icon = iconMap[value.icon];
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }} // Trigger once
              transition={{
                duration: 0.6,
                delay: index * 0.2, // Staggered delay
                ease: 'easeOut',
              }}
              whileHover={{ scale: 1.05 }}
              className="flex items-start text-white p-4 bg-white/5 rounded-lg shadow-lg"
            >
              <div className="flex-shrink-0 mr-4">
                <Icon size={32} className="text-white" />
              </div>
              <div>
                <h4 className="text-xl font-bold font-ubuntuReg mb-2">{value.title}</h4>
                <p className="">{value.description}</p>
              </div>
            </motion.div>
          )
        })}
      </div>
    </motion.div>
  )
}
