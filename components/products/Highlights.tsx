"use client";

import { LayoutGrid } from "../ui/LayoutGrid";
import GradientWord from "../ui/GradientWord";
import { Noise } from "../ui/WobbleCard";
import { motion } from "framer-motion";

interface Highlight {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
  className: string;
}

interface HighlightsProps {
  highlights: Highlight[];
}

export default function Highlights({ highlights }: HighlightsProps) {
  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      viewport={{ once: true }}
      className="h-screen w-full pt-6 pb-8 bg-primary flex flex-col items-center relative overflow-hidden"
    >
      <Noise />
      <GradientWord word="Highlights" type="secondary" />
      <LayoutGrid cards={highlights} />
    </motion.div>
  );
}
