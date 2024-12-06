'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { EvervaultCard, Icon } from '../ui/EvervalutCard';
import GradientWord from '../ui/GradientWord';

interface TeamMemberProps {
    name: string;
    role: string;
    image: string;
  }

const team = [
  { name: 'Dagmawi Yohannes', role: 'Co-Founder & CEO', image: '/images/team-1.jpg' },
  { name: 'Bereket Kinfe', role: 'Co-founder & CTO', image: '/images/team-2.jfif' },
]

export default function MeetTheTeam() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.8 }}
      className="my-16 mb-20 flex flex-col items-center"
    >
      <GradientWord word="Meet The Team" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4 mx-auto">
        {team.map((member, index) => (
          <TeamMember key={index} {...member} />
        ))}
      </div>
    </motion.div>
  )
}

function TeamMember({ name, role, image }: TeamMemberProps) {

  return (
    <div className="border border-black/[0.2] bg-secondary flex flex-col items-start max-w-sm mx-auto p-4 relative h-[20rem]">
      <Icon className="absolute h-6 w-6 -top-3 -left-3  text-primary" />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 text-primary" />
      <Icon className="absolute h-6 w-6 -top-3 -right-3  text-primary" />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 text-primary" />
 
      <EvervaultCard name={name} img={image} />
 
     
      <p className="font-semibold mt-6">
        {role}
      </p>
    </div>
  )
}

