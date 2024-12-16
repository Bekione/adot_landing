"use client";

import { cn } from "@/lib/utils";
import { erpFeatures } from "@/data/features";
import { iconMap } from "@/lib/icon-map";
import { motion } from "framer-motion"; // Import framer-motion
import GradientWord from "../ui/GradientWord";

const ErpFeatures = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="flex flex-col items-center overflow-hidden"
    >
      <GradientWord word="Features" size="sm" />
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10 py-10 max-w-7xl md:w-11/12 lg:w-10/12 mx-auto"
        initial="hidden"
        whileInView="visible"
        variants={{
          visible: {
            transition: { staggerChildren: 0.2 },
          },
        }}
        viewport={{ once: true }}
      >
        {erpFeatures.map((feature, index) => {
          const Icon = iconMap[feature.icon];
          return (
            <Feature
              key={feature.title}
              {...feature}
              index={index}
              icon={Icon}
            />
          );
        })}
      </motion.div>
    </motion.div>
  );
};

export default ErpFeatures;

const Feature = ({
  title,
  description,
  icon: Icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  index: number;
}) => {
  // Check if the screen width is large enough to apply staggered animations
  const isLargeScreen = typeof window !== "undefined" && window.innerWidth >= 768;

  return (
    <motion.div
      className={cn(
        "flex flex-col lg:border-r py-10 relative group/feature dark:border-neutral-800 bg-secondary",
        (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
        index < 4 && "lg:border-b dark:border-neutral-800"
      )}
      initial={{ opacity: 0, x: 50 }} // Original slide-in from right for larger screens
      whileInView={{ opacity: 1, x: 0 }} // Slide into place when in view
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }} // Triggers the animation once per card when it enters the viewport
      variants={isLargeScreen ? {
        hidden: { opacity: 0, x: 50 }, // Start off-screen to the right
        visible: { opacity: 1, x: 0 }, // Slide into place with stagger effect for larger screens
      } : undefined}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-primary to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-primary to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-primary group-hover/feature:text-secondary">
        <Icon className="h-8 w-8" />
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-white group-hover/feature:bg-primary transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-primary group-hover/feature:text-secondary font-bold font-ubuntuBold">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-600 group-hover/feature:text-white/80 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </motion.div>
  );
};
