"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import cloudinaryLoader, { cloudinaryBlurPlaceholder } from "@/lib/image-loader";

type Testimonial = {
  quote: string;
  name: string;
  designation: string;
  src: string;
};

interface AnimatedTestimonialsProps {
  testimonials: Testimonial[];
  autoplay?: boolean;
}

export const AnimatedTestimonials = ({
  testimonials,
  autoplay = false,
}: AnimatedTestimonialsProps) => {
  const [active, setActive] = useState(0);
  const [isClient, setIsClient] = useState(false); // Flag to track if the component is mounted on the client

  const handleNext = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const isActive = (index: number) => {
    return index === active;
  };

  const randomRotateY = () => {
    if (!isClient) return 0; // Avoid running this on SSR
    return Math.floor(Math.random() * 21) - 10;
  };

  useEffect(() => {
    setIsClient(true); // Set the flag to true once the component mounts
  }, []);

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, 5000);
      return () => clearInterval(interval);
    }
  }, [autoplay]);

  return (
    <div className="w-10/12 md:max-w-4xl mx-auto antialiased px-4 md:px-8 lg:px-12 pt-12 pb-4 overflow-hidden">
      <div className="relative grid grid-cols-1 md:grid-cols-2 gap-14">
        <div>
          <div className="relative h-80 w-full sm:w-8/12 md:w-full mx-auto">
            <AnimatePresence>
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.src}
                  initial={{
                    opacity: 0,
                    scale: 0.9,
                    z: -100,
                    rotate: randomRotateY(), // Ensure this is only called after the client mounts
                  }}
                  animate={{
                    opacity: isActive(index) ? 1 : 0.7,
                    scale: isActive(index) ? 1 : 0.95,
                    z: isActive(index) ? 0 : -100,
                    rotate: isActive(index) ? 0 : randomRotateY(),
                    zIndex: isActive(index)
                      ? 99
                      : testimonials.length + 2 - index,
                    y: isActive(index) ? [0, -80, 0] : 0,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.9,
                    z: 100,
                    rotate: randomRotateY(),
                  }}
                  transition={{
                    duration: 0.4,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 origin-bottom"
                >
                  <Image
                    loader={cloudinaryLoader}
                    src={testimonial.src}
                    alt={testimonial.name}
                    width={500}
                    height={500}
                    draggable={false}
                    placeholder="blur"
                    blurDataURL={cloudinaryBlurPlaceholder(testimonial.src)}
                    className="w-full h-full max-w-full rounded-3xl bg-secondary object-cover object-center"
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
        <div className="flex justify-between flex-col py-4">
          <motion.div
            key={active}
            initial={{
              y: 20,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            exit={{
              y: -20,
              opacity: 0,
            }}
            transition={{
              duration: 0.2,
              ease: "easeInOut",
            }}
          >
            <h3 className="text-2xl font-bold font-ubuntuBold text-primary">
              {testimonials[active].name}
            </h3>
            <p className="text-sm text-gray-500">
              {testimonials[active].designation}
            </p>
            <motion.p className="text-lg text-gray-500 mt-8 !text-justify">
              {testimonials[active].quote.split(" ").map((word, index) => (
                <motion.span
                  key={index}
                  initial={{
                    filter: "blur(10px)",
                    opacity: 0,
                    y: 5,
                  }}
                  animate={{
                    filter: "blur(0px)",
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.2,
                    ease: "easeInOut",
                    delay: 0.02 * index,
                  }}
                  className="inline-block"
                >
                  {word}&nbsp;
                </motion.span>
              ))}
            </motion.p>
          </motion.div>
          <div className="flex gap-4 mt-2 pt-6 md:pt-0">
            <button
              onClick={handlePrev}
              className="h-7 w-7 rounded-full bg-primary flex items-center justify-center group/button"
            >
              <ArrowLeft className="h-5 w-5 text-white group-hover/button:rotate-12 transition-transform duration-300" />
            </button>
            <button
              onClick={handleNext}
              className="h-7 w-7 rounded-full bg-primary flex items-center justify-center group/button"
            >
              <ArrowRight className="h-5 w-5 text-white group-hover/button:-rotate-12 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
