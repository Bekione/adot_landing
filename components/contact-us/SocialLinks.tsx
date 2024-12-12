'use client';

import { motion } from 'framer-motion';
import { socialLinks } from '@/data/socialLinks';
import GradientWord from '../ui/GradientWord';

export default function SocialLinks() {
  return (
    <div className="mt-12 flex flex-col items-center mx-auto">
      <GradientWord word="Stay Connected" size="sm" />
      <div className="flex space-x-4">
        {socialLinks.map((social) => (
          <SocialIcon
            key={social.name}
            href={social.href}
            ariaLabel={social.name}
            icon={social.isImage ? social.icon : undefined}
            IconComponent={!social.isImage ? social.icon : undefined}
          />
        ))}
      </div>
    </div>
  );
}

function SocialIcon({
  icon,
  IconComponent,
  href,
  ariaLabel,
}: {
  icon?: string; // For image paths
  IconComponent?: React.ElementType; // For React components like Lucide
  href: string;
  ariaLabel: string;
}) {
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
      {icon ? (
        <img
          src={icon}
          alt={ariaLabel}
          className="h-5 w-5"
        />
      ) : (
        IconComponent && <IconComponent className="h-5 w-5" />
      )}
    </motion.a>
  );
}
