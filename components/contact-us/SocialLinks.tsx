'use client'

import { motion } from 'framer-motion'
import { Facebook, Twitter, Linkedin, Send } from 'lucide-react'
import GradientWord from '../ui/GradientWord';

export default function SocialLinks() {
  return (
    <div className="mt-12 flex flex-col items-center mx-auto">
      <GradientWord word='Stay Connected' size='sm' />
      <div className="flex space-x-4">
        <SocialIcon icon={<Facebook />} href="https://www.facebook.com/adot-tech" />
        <SocialIcon icon={<Twitter />} href="https://www.x.com/adot-tech" />
        <SocialIcon icon={<Linkedin />} href="https://www.linkedin.com/adot-tech" />
        <SocialIcon icon={<Send />} href="https://www.t.me/adot-tech" />
      </div>
    </div>
  )
}

function SocialIcon({ icon, href }: { icon: React.ReactNode; href: string }) {
  return (
    <motion.a 
      href={href}
      className="bg-[#503c3c] p-3 rounded-full text-white hover:hero-bg transition duration-300"
      whileHover={{ scale: 1.1, rotate: 5 }}
      transition={{ duration: 0.2 }}
    >
      {icon}
    </motion.a>
  )
}

