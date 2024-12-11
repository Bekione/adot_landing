"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Noise } from "./WobbleCard";

interface ButtonProps {
  text: string;
  to: string;
  type?: "default" | "secondary";
  className?: string;
  target?: "_blank" | "_self" | "_parent" | "_top"; 
}

const Button = ({
  text,
  to,
  type = "default",
  className,
  target,
}: ButtonProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
    >
      <Link
        href={to}
        target={target} 
        rel={target ? "noopener noreferrer" : undefined}
        className={cn(
          className,
          type === "default"
            ? "relative inline-block px-6 py-2 rounded-lg text-white bg-[#503c3c] hover:bg-[#d5cea3] hover:text-primary transition-all duration-300 overflow-hidden z-50"
            : "relative inline-flex w-fit h-12 animate-shimmer items-center justify-center rounded-md border border-[#503c3c] bg-[linear-gradient(110deg,#503c3c,45%,#704d4d,55%,#503c3c)] bg-[length:200%_100%] px-6 font-medium text-white transition-colors hover:shadow-2xl hover:shadow-[#d5cea3]/[0.3] overflow-hidden z-50"
        )}
      >
        <Noise />
        {text}
      </Link>
    </motion.div>
  );
};

export default Button;
