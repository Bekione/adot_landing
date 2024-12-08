"use client";
import { motion } from "framer-motion";
import React from "react";
import About from "@/components/About";
import Features from "@/components/services/Features";
import Process from "@/components/services/Process";
import Testimonials from "@/components/services/Testimonial";
import Hero from "@/components/Hero";
import { appFeatureData } from "@/data/features";
import { appDevelopmentProcess } from "@/data/process";
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
        title="App Development"
        description="Custom apps that deliver seamless experiences for your users."
        backgroundImage="/images/app-development.avif"
      />
      <About
        title="About Our Application Development Service"
        description="We specialize in building mobile and web apps tailored to your needs. Whether it’s a startup idea or an enterprise solution, our apps are designed for performance, scalability, and user satisfaction."
        images={["/images/app-development.avif"]}
      />
      <Features features={appFeatureData} />
      <Process steps={appDevelopmentProcess} />
      <Testimonials />
      <CTABlock
        title="Discuss Your App Idea With Us."
        description="Turn your app vision into reality with our expert team."
        linkText="Contact Us Now"
        link="/contact"
        className="mb-32"
      />
    </motion.div>
  );
};

export default page;
