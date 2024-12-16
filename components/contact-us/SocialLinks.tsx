"use client";

import { motion } from "framer-motion";
import { socialLinks } from "@/data/socialLinks"; // Import the socialLinks data
import GradientWord from "../ui/GradientWord";

export default function SocialLinks() {
  return (
    <motion.div
      className="mt-12 flex flex-col items-center mx-auto"
      initial={{ opacity: 0, y: 20 }} 
      whileInView={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.8, ease: "easeInOut" }} 
      viewport={{ once: true }}
    >
      <GradientWord word="Stay Connected" size="sm" />
      <div className="flex space-x-4">
        {socialLinks.map((social, index) => (
          <motion.div
            key={social.name}
            initial={{ opacity: 0, scale: 0 }} 
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              opacity: { duration: 0.4 },
              scale: {
                type: "spring",
                stiffness: 300,
                damping: 15,
                delay: index * 0.2,
              }, // Stagger effect by delay
            }}
            viewport={{ once: true }}
            className="w-12 h-12 flex items-center justify-center" // Ensuring the circle size is fixed
          >
            <SocialIcon
              icon={<social.icon className="h-5 w-5" />}
              href={social.href}
              ariaLabel={social.name}
            />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

function SocialIcon({
  icon,
  href,
  ariaLabel,
}: {
  icon: React.ReactNode;
  href: string;
  ariaLabel: string;
}) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
      className="bg-primary p-3 rounded-full text-white hover:hero-bg transition-colors duration-300"
      whileHover={{ scale: 1.1, rotate: 5 }}
      transition={{ duration: 0.2 }}
    >
      {icon}
    </motion.a>
  );
}
