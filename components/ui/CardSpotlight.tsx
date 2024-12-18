"use client";

import { useMotionValue, motion, useMotionTemplate } from "framer-motion";
import React from "react";
import { cn } from "@/lib/utils";

export const CardSpotlight = ({
  children,
  radius = 950,
  color = "#503c3c",
  className,
  ...props
}: {
  radius?: number;
  color?: string;
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({
    currentTarget,
    clientX,
    clientY,
  }: React.MouseEvent<HTMLDivElement>) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div
      className={cn(
        "group/spotlight rounded-3xl relative border border-primary/10 bg-white",
        className
      )}
      onMouseMove={handleMouseMove}
      {...props}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 scale-110 transition duration-300 group-hover/spotlight:opacity-100 group-hover/spotlight:scale-100 mix-blend"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              ${radius}px circle at ${mouseX}px ${mouseY}px,
              ${color},
              transparent 100%
            )
          `,
        }}
      />
      {children}
    </div>
  );
};
