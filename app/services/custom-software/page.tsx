"use client";
import { motion } from "framer-motion";
import React from "react";
import About from "@/components/About";
import Features from "@/components/services/Features";
import Process from "@/components/services/Process";
import Testimonials from "@/components/services/Testimonial";
import Header from "@/components/Hero";
import { softwareFeatureData } from "@/data/features";
import { customSoftwareProcess } from "@/data/process";
import CTABlock from "@/components/ui/CTABlock";

const page = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="font-ubuntuReg"
    >
      <Header
        title="Custom Software Development"
        description="Solutions tailored to your unique business challenges."
        backgroundImage="/images/software-development.avif"
      />
      <About
        title="About Our Custom Software Development Service"
        description="From automation tools to enterprise systems, we develop custom software designed to solve your business-specific problems. Experience innovation with our cutting-edge solutions."
        imgSrc="/images/software-development.avif"
      />
      <Features features={softwareFeatureData} />
      <Process steps={customSoftwareProcess} />
      <Testimonials />
      <CTABlock
        title="Let’s Build Your Custom Software Together."
        description="Partner with us to create software that transforms your business."
        linkText="Contact Us Now"
        link="/contact"
        className="mb-32"
      />
    </motion.div>
  );
};

export default page;
