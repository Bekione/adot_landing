"use client";

import { motion } from "framer-motion";
import { EvervaultCard, Icon } from "../ui/EvervalutCard";
import GradientWord from "../ui/GradientWord";
import { teams } from "@/data/teams";
import { Noise } from "../ui/WobbleCard";

interface TeamMemberProps {
  name: string;
  role: string;
  image: string;
  index: number;
}

export default function MeetTheTeam() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.8 }}
      className="mb-8 flex flex-col items-center"
    >
      <GradientWord word="Meet The Team" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-4 mx-auto">
        {teams.map((member, index) => (
          <TeamMember key={index} index={index} {...member} />
        ))}
      </div>
    </motion.div>
  );
}

function TeamMember({ name, role, image, index }: TeamMemberProps) {
  const direction = index % 2 === 0 ? -1000 : 1000; // Cards alternate direction (left or right)

  return (
    <motion.div
      initial={{ x: direction, opacity: 0 }} // Start from far left or right
      animate={{ x: 0, opacity: 1 }} // Animate to center and become visible
      transition={{
        duration: 0.8,
        ease: [0.43, 0.13, 0.23, 0.96],
        delay: index * 0.2, // Add delay based on index
      }}
      className="border border-black/[0.2] bg-secondary flex flex-col items-start max-w-sm mx-auto p-4 relative h-[20rem] mb-6"
    >
      <Noise />
      <Icon className="absolute h-6 w-6 -top-3 -left-3 text-primary" />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 text-primary" />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 text-primary" />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 text-primary" />

      <EvervaultCard name={name} img={image} />

      <p className="font-semibold mt-6">{role}</p>
    </motion.div>
  );
}
