"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import GradientWord from "./ui/GradientWord";

interface HeroProps {
  title: string;
  description: string;
  backgroundImage: string;
  ctaText?: string;
  ctaLink?: string;
  noButton?: boolean;
}

export default function Hero({
  title,
  description,
  backgroundImage,
  ctaText,
  ctaLink,
  noButton,
}: HeroProps) {
  return (
    <motion.header
      className="relative min-h-96 hero-bg flex items-center justify-center text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          filter: "brightness(0.5)",
        }}
      />
      <div className="relative z-10 text-center">
        <motion.div
          className=""
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <GradientWord word={title} type="secondary" />
        </motion.div>
        <motion.p
          className="text-xl mb-8"
          initial={{ y: 50 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          {description}
        </motion.p>

        {!noButton && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <Link
              href={ctaLink ? ctaLink : "/contact"}
              className="w-[25ch] inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-[#503c3c] bg-[linear-gradient(110deg,#503c3c,45%,#704d4d,55%,#503c3c)] bg-[length:200%_100%] px-6 font-medium text-white transition-colors hover:shadow-2xl hover:shadow-[#d5cea3]/[0.3]"
            >
              {ctaText ? ctaText : "Contact Us"}
            </Link>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
}
