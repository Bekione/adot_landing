'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Hero() {
  return (
    <motion.header
      className="relative h-screen flex items-center justify-center text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/adot-office.png')",
          filter: 'brightness(0.5)',
        }}
      />
      <div className="relative z-10 text-center">
        <motion.h1
          className="text-5xl font-bold font-ubuntuBold mb-4"
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          style={{
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.25)",
          }}
        >
          Web Development
        </motion.h1>
        <motion.p
          className="text-xl mb-8"
          initial={{ y: 50 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Building modern, scalable, and high-performing websites for your business success.
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <Link href="/services" className="w-[25ch] inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-[#503c3c] bg-[linear-gradient(110deg,#503c3c,45%,#704d4d,55%,#503c3c)] bg-[length:200%_100%] px-6 font-medium text-white transition-colors hover:shadow-2xl hover:shadow-[#d5cea3]/[0.3]">
              Contact Us
            </Link>
        </motion.div>
      </div>
    </motion.header>
  )
}

