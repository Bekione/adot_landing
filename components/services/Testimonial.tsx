'use client'

import { testimonials } from '@/data/testimonials'
import { InfiniteMovingCardsVarient } from '../ui/InfiniteMovingCardsVarient'
import GradientWord from '../ui/GradientWord'
import { motion } from 'framer-motion'

export default function Testimonials() {
  return (
    <section className="py-20 mb-8">
      <motion.div
        className="container mx-auto px-4 flex flex-col items-center gap-8"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <GradientWord word="What Our Clients Say" size='sm' />
        <InfiniteMovingCardsVarient items={testimonials} speed="slow" />
      </motion.div>
    </section>
  )
}
