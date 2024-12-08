'use client'

import { motion } from 'framer-motion'
import { Send } from 'lucide-react'
import GradientWord from '../ui/GradientWord'

export default function ContactForm() {
  return (
    <motion.div 
      className="bg-white shadow-lg rounded-lg p-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
        <GradientWord word='Get in Touch' />
      <form className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
          <input 
            id="name"
            type="text" 
            placeholder="Your Name" 
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#503c3c] focus:border-transparent"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
          <input 
            id="email"
            type="email" 
            placeholder="your@email.com" 
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#503c3c] focus:border-transparent"
          />
        </div>
        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
          <input 
            id="subject"
            type="text" 
            placeholder="How can we help?" 
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#503c3c] focus:border-transparent"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
          <textarea 
            id="message"
            placeholder="Your message here..." 
            rows={4} 
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#503c3c] focus:border-transparent"
          ></textarea>
        </div>
        <button 
          type="submit" 
          className="w-full px-8 py-2 rounded-md flex items-center justify-center bg-primary text-white font-bold font-sans transition duration-200 hover:bg-white hover:text-primary border-2 border-transparent hover:border-primary"
        >
          <Send className="mr-2 h-5 w-5" />
          <span>Send Message</span>
        </button>
      </form>
    </motion.div>
  )
}

