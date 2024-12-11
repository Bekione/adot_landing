'use client'

import { motion } from 'framer-motion'
import { Lightbulb, ShieldCheck, Award, Users, Leaf, Rocket } from 'lucide-react'

const values = [
  { title: 'Innovation', description: 'Creating breakthrough technologies that solve real-world problems.', icon: Lightbulb },
  { title: 'Integrity', description: 'Operating with transparency and honesty in all our endeavors.', icon: ShieldCheck },
  { title: 'Excellence', description: 'Striving for the highest quality in every aspect of our work.', icon: Award },
  { title: 'Collaboration', description: 'Enabling shared success with our clients and partners.', icon: Users },
  { title: 'Sustainability', description: 'Guiding our efforts for long-term impact.', icon: Leaf },
  { title: 'Empowerment', description: 'Helping individuals and communities thrive through technology.', icon: Rocket },
]

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
          const Icon = value.icon
          return (
            <motion.div
              key={index}
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
