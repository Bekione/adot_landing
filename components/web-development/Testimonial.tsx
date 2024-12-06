'use client'

import { testimonials } from '@/data/testimonials'
import { InfiniteMovingCardsVarient } from '../ui/InfiniteMovingCardsVarient'
import GradientWord from '../ui/GradientWord'

export default function Testimonials() {

  return (
    <section className="py-20 mb-8">
      <div className="container mx-auto px-4 flex flex-col items-center gap-8">
        <GradientWord word="What Our Clients Say" />
        <InfiniteMovingCardsVarient items={testimonials} speed='slow'/>
      </div>
    </section>
  )
}

