'use client'

import { motion } from 'framer-motion'
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react'

export default function SocialLinks() {
  return (
    <div className="mt-12">
      <h2 className="text-3xl font-semibold mb-6 text-[#503c3c]">Stay Connected</h2>
      <div className="flex space-x-4">
        <SocialIcon icon={<Facebook />} href="#" />
        <SocialIcon icon={<Twitter />} href="#" />
        <SocialIcon icon={<Linkedin />} href="#" />
        <SocialIcon icon={<Instagram />} href="#" />
      </div>
    </div>
  )
}

function SocialIcon({ icon, href }: { icon: React.ReactNode; href: string }) {
  return (
    <motion.a 
      href={href}
      className="bg-[#503c3c] p-3 rounded-full text-white hover:bg-[#6b5050] transition duration-300"
      whileHover={{ scale: 1.1, rotate: 5 }}
      transition={{ duration: 0.2 }}
    >
      {icon}
    </motion.a>
  )
}

