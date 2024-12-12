'use client'

import { motion } from 'framer-motion'
import GradientWord from '../ui/GradientWord'
import { Timeline } from '../ui/Timeline'
import { ourStory } from '@/data/ourStory'

export default function OurStory() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.6 }}
      className="my-16 flex flex-col items-center md:w-11/12"
    >
      <GradientWord word="Our Story" />
      <Timeline data={ourStory} />
    </motion.div>
  )
}

