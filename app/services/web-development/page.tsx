"use client"
import { motion } from 'framer-motion'
import React from 'react'
import About from '@/components/web-development/About'
import Features from '@/components/web-development/Features'
import Process from '@/components/web-development/Process'
import Testimonials from '@/components/web-development/Testimonial'
import CTA from '@/components/web-development/CTA'
import Header from '@/components/web-development/Hero'

const page = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className='font-ubuntuReg'
    >
      <Header />
      <About />
      <Features />
      <Process />
      <Testimonials />
      <CTA />
    </motion.div>
  )
}

export default page
