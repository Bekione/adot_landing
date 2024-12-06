'use client'

import { motion } from 'framer-motion'
import { Lightbulb, Code, Rocket } from 'lucide-react'
import GradientWord from '../ui/GradientWord'

const steps = [
  { icon: Lightbulb, title: 'Discovery & Planning', description: 'We analyze your needs and create a roadmap.' },
  { icon: Code, title: 'Design & Development', description: 'Our team brings your vision to life.' },
  { icon: Rocket, title: 'Launch & Maintenance', description: 'We deploy your site and provide ongoing support.' },
]

export default function Process() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 flex flex-col items-center">
        <GradientWord word="Our Process" />
        <div className="flex flex-wrap justify-center mt-10">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="w-full md:w-1/3 px-4 mb-8"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="text-center">
                <div className="inline-block p-4 rounded-full bg-[#d5cea3] mb-4">
                  <step.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold font-ubuntuBold mb-2 text-primary">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

