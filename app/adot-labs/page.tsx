"use client"

import Hero from '@/components/Hero'
import { motion } from 'framer-motion'
import React from 'react'

const page = () => {
  return (
    <div className='min-h-screen'>
      <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="font-ubuntuReg"
    >
      <Hero
        title="Adot Labs"
        description=""
        backgroundImage="/images/adot-lab.avif"
        noButton
      />
      <div className="container mx-auto px-4">
        </div>
    </motion.div>
    </div>
  )
}

export default page
