"use client";
import { motion } from "framer-motion";
import React from "react";
import About from "@/components/About";
import Features from "@/components/services/Features";
import Process from "@/components/services/Process";
import Testimonials from "@/components/services/Testimonial";
import Hero from "@/components/Hero";
import { webDesignFeatureData, webFeatureData } from "@/data/features";
import { webDesignProcess } from "@/data/process";
import CTABlock from "@/components/ui/CTABlock";

const page = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="font-ubuntuReg"
    >
      <Hero
        title="Web Design"
        description="Creative designs that captivate and convert."
        backgroundImage="/images/services/web-design.avif"
      />
      <About
        title="About The Service"
        description="Your website is your brand’s digital face. Our web design services ensure a visually stunning and user-friendly experience that communicates your brand effectively."
        images={["/images/services/web-design-2.avif"]}
      />
      <Features features={webFeatureData} />
      <Process steps={webDesignProcess} />
      <Testimonials />
      <CTABlock
        title="Transform Your Website With Us."
        description="Elevate your online presence with designs that captivate and convert."
        linkText="Contact Us Now"
        link="/contact"
        className="mb-32"
      />
    </motion.div>
  );
};

export default page;
