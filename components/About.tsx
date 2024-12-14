'use client'

import { motion } from 'framer-motion'
import { CardStack } from './ui/CardStack'
import GradientWord from './ui/GradientWord'

interface AboutProps {
  title: string
  description: string | string[] // Allow string or array of strings
  images: string[]
}

export default function About({ title, description, images }: AboutProps) {
  return (
    <section className="py-10 md:py-16">
      <div className="container mx-auto px-4 md:w-11/12 lg:w-10/12">
        <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-center justify-center relative">
          {/* Left Side Content */}
          <motion.div
            className="w-full md:w-7/12 flex flex-col mb- md:mb-0 px-4"
            initial={{ x: -30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <GradientWord word={title} size="sm" className='self-center md:self-start' />

            {/* Conditionally render description */}
            {Array.isArray(description) ? (
              description.map((desc, index) => (
                <p key={index} className="text-lg text-gray-600 mb-4 text-justify">
                  {desc}
                </p>
              ))
            ) : (
              <p className="text-lg text-gray-600 mb-6 text-justify">{description}</p>
            )}
          </motion.div>

          {/* Right Side Card Stack */}
          <motion.div
            className="w-full md:w-5/12 px-4 flex items-center justify-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <CardStack images={images} />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
