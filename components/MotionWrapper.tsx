"use client";

import { motion, MotionProps } from "framer-motion";

interface MotionWrapperProps extends MotionProps {
  children: React.ReactNode;
  className?: string;
}

export default function MotionWrapper({
  children,
  className = "",
  ...motionProps
}: MotionWrapperProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      {...motionProps}
    >
      {children}
    </motion.div>
  );
}
