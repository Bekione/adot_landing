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
  target?: "_blank" | "_self" | "_parent" | "_top" | undefined; 
  rel?: "noopener" | "noreferrer" | "noopener noreferrer" | undefined;
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
          'font-ubuntuReg relative inline-block px-6 py-2 rounded-lg transition-all duration-300 overflow-hidden z-50',
          type === "default"
            ? "text-white bg-primary hover:bg-secondary hover:text-primary"
            : "w-fit h-12 animate-shimmer items-center justify-center rounded-md border border-primary bg-[linear-gradient(110deg,#503c3c,45%,#704d4d,55%,#503c3c)] bg-[length:200%_100%] text-white hover:shadow-2xl hover:shadow-primary/[0.3]",
          className
        )}
      >
        <Noise />
        {text}
      </Link>
    </motion.div>
  );
};

export default Button;
