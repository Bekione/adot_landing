'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import GradientWord from '../ui/GradientWord'
import { Loader } from 'lucide-react'

export default function OfficeLocation() {
  const [mapLoaded, setMapLoaded] = useState(false)

  useEffect(() => {
    const iframe = document.getElementById('google-map') as HTMLIFrameElement

    const handleLoad = () => setMapLoaded(true)
    iframe?.addEventListener('load', handleLoad)

    return () => iframe?.removeEventListener('load', handleLoad)
  }, [])

  return (
    <motion.section
      className="mt-16 flex flex-col items-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <GradientWord word="Office Location" size="sm" />

      <div className="relative w-full max-w-4xl h-96 mt-4 rounded-lg overflow-hidden shadow-lg">
        {!mapLoaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-secondary/90 text-gray-500">
            <Loader className="animate-spin text-primary/90" size={40} />
          </div>
        )}
        <iframe
          id="google-map"
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d769.7427125528976!2d38.78630520327709!3d9.015031407217252!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zOcKwMDAnNTQuMCJOIDM4wrA0NycxMC44IkU!5e1!3m2!1sen!2set!4v1734286995493!5m2!1sen!2set"
          className="w-full h-full"
          style={{ border: 'none' }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </motion.section>
  )
}
