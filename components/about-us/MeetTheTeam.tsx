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
    <div className="mb-8 flex flex-col items-center overflow-visible">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center"
      >
        <GradientWord word="Meet The Team" />
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-4 mx-auto">
        {teams.map((member, index) => (
          <TeamMember key={index} index={index} {...member} />
        ))}
      </div>
    </div>
  );
}

function TeamMember({ name, role, image, index }: TeamMemberProps) {
  const direction = index % 2 === 0 ? -100 : 100; // Shorter movement to prevent rendering issues

  return (
    <motion.div
      className="border border-black/[0.2] bg-secondary flex flex-col items-start max-w-sm mx-auto p-4 relative h-[20rem] mb-6 overflow-visible"
      initial={{ x: direction, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.8,
        ease: "easeOut",
        delay: index * 0.2, // Staggered effect
      }}
    >
      <Noise />
      <Icon className="absolute h-6 w-6 -top-3 -left-3 text-primary" />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 text-primary" />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 text-primary" />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 text-primary" />

      {/* Ensure EvervaultCard renders the image properly */}
      <EvervaultCard name={name} img={image} />

      <p className="font-semibold mt-6">{role}</p>
    </motion.div>
  );
}
