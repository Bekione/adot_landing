'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

interface AboutProps {
  title: string;
  description: string;
  imgSrc: string;
}

export default function About({ title, description, imgSrc }: AboutProps) {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center">
          <motion.div
            className="w-full md:w-1/2 mb-12 md:mb-0 px-4"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold font-ubuntuBold mb-4 text-primary">{title}</h2>
            <p className="text-lg text-gray-600 mb-6">
              {description}
            </p>
          </motion.div>
          <motion.div
            className="w-full md:w-1/2 px-4"
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Image
              src={imgSrc}
              alt="Web Development"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

