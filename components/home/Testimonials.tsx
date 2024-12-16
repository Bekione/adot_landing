"use client";

import { testimonials } from "@/data/testimonials";
import GradientWord from "../ui/GradientWord";
import { AnimatedTestimonials } from "../ui/AnimatedTestimonial";
import { motion } from "framer-motion";

const Testimonials = () => {
  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="flex flex-col items-center mt-6 md:w-11/12 lg:w-10/12 mx-auto"
    >
      <GradientWord word="Testimonials" />
      <AnimatedTestimonials testimonials={testimonials} autoplay />
    </motion.div>
  );
};

export default Testimonials;
