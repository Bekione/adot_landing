'use client'

import { motion } from 'framer-motion'
import { socialLinks } from '@/data/socialLinks' // Import the socialLinks data
import GradientWord from '../ui/GradientWord';

export default function SocialLinks() {
  return (
    <div className="mt-12 flex flex-col items-center mx-auto">
      <GradientWord word='Stay Connected' size='sm' />
      <div className="flex space-x-4">
        {socialLinks.map((social) => (
          <SocialIcon 
            key={social.name}
            icon={<social.icon className="h-5 w-5" />} 
            href={social.href} 
            ariaLabel={social.name}
          />
        ))}
      </div>
    </div>
  )
}

function SocialIcon({ icon, href, ariaLabel }: { icon: React.ReactNode; href: string; ariaLabel: string }) {
  return (
    <motion.a 
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
      className="bg-[#503c3c] p-3 rounded-full text-white hover:hero-bg transition duration-300"
      whileHover={{ scale: 1.1, rotate: 5 }}
      transition={{ duration: 0.2 }}
    >
      {icon}
    </motion.a>
  )
}
