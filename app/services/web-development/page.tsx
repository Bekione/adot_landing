import { createMetadata } from "@/lib/create-metadata";
import React from "react";
import About from "@/components/About";
import Features from "@/components/services/Features";
import Process from "@/components/services/Process";
import Testimonials from "@/components/services/Testimonial";
import Hero from "@/components/Hero";
import { webFeatureData } from "@/data/features";
import { webDevelopmentProcess } from "@/data/process";
import CTABlock from "@/components/ui/CTABlock";
import MotionWrapper from "@/components/MotionWrapper";

export const metadata = createMetadata({
  title: "Web Development",
  description: "Create fast, responsive, and modern websites with our web development services.",
  path: "/services/web-development",
  image: "/images/og-banners/og-web-development.jpg",
});

const page = () => {
  return (
    <MotionWrapper
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className=""
    >
      <Hero
        title="Web Development"
        description="Building modern, scalable, and high-performing websites for your business success."
        backgroundImage="/images/services/web-development.avif"
      />
      <About
        title="About The Service"
        description="We build websites that are fast, secure, and easy to manage. Our team of experts will help you build a website that will help you achieve your business goals."
        images={["/images/services/web-development-2.avif"]}
      />
      <Features features={webFeatureData} />
      <Process steps={webDevelopmentProcess} />
      <Testimonials />
      <CTABlock
        title="Start Your Project with Us Today!"
        description="Let's build a website that drives your business forward."
        linkText="Contact Us Now"
        link="/contact"
      />
    </MotionWrapper>
  );
};

export default page;
