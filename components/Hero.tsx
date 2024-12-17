"use client";

import { motion } from "framer-motion";
import GradientWord from "./ui/GradientWord";
import Button from "./ui/Button";

interface HeroProps {
  title: string;
  description: string;
  backgroundImage: string;
  ctaText?: string;
  ctaLink?: string;
  target?: "_blank" | "_self" | "_parent" | "_top" | undefined;
  noButton?: boolean;
}

export default function Hero({
  title,
  description,
  backgroundImage,
  ctaText,
  ctaLink,
  target,
  noButton,
}: HeroProps) {
  // External link functionality setup
  const isExternal = target === "_blank";

  return (
    <motion.header
      className="relative min-h-96 w-full hero-bg flex items-center justify-center text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          filter: "brightness(0.5)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center">
        {/* Title */}
        <motion.div
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <GradientWord word={title} type="secondary" />
        </motion.div>

        {/* Description */}
        <motion.p
          className="text-xl mb-8 w-10/12 max-w-2xl mx-auto"
          initial={{ y: 50 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          {description}
        </motion.p>

        {/* CTA Button */}
        {!noButton && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <Button
              text={ctaText || "Contact Us"}
              to={ctaLink || "/contact"}
              target={target}
              rel={isExternal ? "noopener noreferrer" : undefined}
              className="w-[25ch] "
              type="secondary"
            />
          </motion.div>
        )}
      </div>
    </motion.header>
  );
}
