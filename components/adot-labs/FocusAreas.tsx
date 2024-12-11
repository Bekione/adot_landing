'use client'

import { motion } from 'framer-motion'
import GradientWord from '../ui/GradientWord'
import Card from '../ui/Card'
import { focusAreas } from '@/data/focusAreas'

export default function FocusAreas() {
  return (
    <section className="pb-20">
      <div className="container mx-auto px-6 md:w-11/12 lg:w-10/12">
        <motion.div
          className="mb-6 md:mb-12 flex flex-col items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <GradientWord word="What We Do at Adot Labs" size='sm' />
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center mx-4 md:mx-auto">
          {focusAreas.map((area, index) => (
            <div
              className=""
              key={area.title}
            >
              <div className="h-full">
                <Card
                  icon={area.icon}
                  title={area.title}
                  description={area.description}
                  delay={index * 0.1}
                  className='h-full w-full' 
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
