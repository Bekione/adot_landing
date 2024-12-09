"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence, useMotionTemplate, useMotionValue } from "framer-motion";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  placeholders?: string[];
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, placeholders = [], value, onChange, ...props }, ref) => {
    const radius = 100; // Radius for hover effect
    const [visible, setVisible] = React.useState(false);
    const [currentPlaceholder, setCurrentPlaceholder] = React.useState(0);
    const [internalValue, setInternalValue] = React.useState("");

    // Controlled value handling
    const inputValue = value !== undefined ? value : internalValue;
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setInternalValue(e.target.value);
      onChange?.(e); // Call the onChange prop if provided
    };

    // State for Framer hover effect
    let mouseX = useMotionValue(0);
    let mouseY = useMotionValue(0);

    function handleMouseMove({ currentTarget, clientX, clientY }: any) {
      let { left, top } = currentTarget.getBoundingClientRect();
      mouseX.set(clientX - left);
      mouseY.set(clientY - top);
    }

    // Placeholder cycling logic
    React.useEffect(() => {
      if (placeholders.length === 0) return;

      const interval = setInterval(() => {
        setCurrentPlaceholder((prev) => (prev + 1) % placeholders.length);
      }, 3000); // Switch placeholder every 3 seconds

      return () => clearInterval(interval);
    }, [placeholders]);

    return (
      <motion.div
        style={{
          background: useMotionTemplate`
            radial-gradient(
              ${visible ? radius + "px" : "0px"} circle at ${mouseX}px ${mouseY}px,
              #503c3c,
              transparent 80%
            )
          `,
        }}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setVisible(true)}
        onMouseLeave={() => setVisible(false)}
        className="p-[2px] rounded-lg transition duration-300 group/input"
      >
        <div className="relative w-full">
          {/* Input Field */}
          <input
            type={type}
            className={cn(
              `flex h-[3.25rem] w-full border-none bg-gray-50 text-black/90 shadow-input rounded-md px-3 py-2 text-md file:border-0 file:bg-transparent 
              file:text-sm file:font-medium placeholder:text-neutral-400 
              focus-visible:outline-none focus-visible:ring-[2px] focus-visible:ring-secondary
              disabled:cursor-not-allowed disabled:opacity-50
              group-hover/input:shadow-none transition duration-400`,
              className
            )}
            ref={ref}
            value={inputValue}
            onChange={handleInputChange}
            {...props}
          />

          {/* Placeholder Animation */}
          <AnimatePresence mode="wait">
            {!inputValue && (
              <motion.span
                key={currentPlaceholder}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5 }}
                className="absolute top-1/2 left-3 transform -translate-y-1/2 text-neutral-400 pointer-events-none text-sm"
              >
                {placeholders[currentPlaceholder]}
              </motion.span>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    );
  }
);

Input.displayName = "Input";

export { Input };
