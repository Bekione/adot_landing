'use client'

import { motion } from 'framer-motion'
import { CheckCircle, Users, Briefcase, Globe } from 'lucide-react'
import GradientWord from '../ui/GradientWord'
import Button from '../ui/Button'

const benefits = [
  { 
    icon: Briefcase, 
    text: 'Hands-on experience in cutting-edge tech projects' 
  },
  { 
    icon: Users, 
    text: 'Mentorship from industry professionals' 
  },
  { 
    icon: Globe, 
    text: 'Contribution to real-world open-source projects' 
  },
  { 
    icon: CheckCircle, 
    text: 'Networking opportunities within the tech community' 
  },
]

export default function Internships() {
  return (
    <section className="py-10 md:py-16" id="get-involved">
      <div className="container mx-auto px-4 flex flex-col items-center md:w-11/12 lg:w-10/12">
        {/* Title */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <GradientWord 
            word="Join Us: Internships and Collaborations" 
            size="sm" 
            className="text-center" 
          />
        </motion.div>

        {/* Description & Benefits */}
        <motion.div
          className="max-w-3xl text-justify md:text-center mx-6 md:mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            Adot Labs is dedicated to nurturing the next generation of innovators. Join our internship programs to gain hands-on experience, collaborate on exciting projects, and grow your technical and creative skills. Our interns benefit from:
          </p>

          {/* Benefits Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left mb-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="flex items-start gap-4"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <benefit.icon className="h-6 w-6 text-primary flex-shrink-0" />
                <p className="text-gray-700 text-base leading-relaxed">
                  {benefit.text}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Call to Action */}
          <Button text="Apply to Internship" to="/contact" />
        </motion.div>
      </div>
    </section>
  )
}
