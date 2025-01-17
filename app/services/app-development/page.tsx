import { createMetadata } from "@/lib/create-metadata";
import React from "react";
import About from "@/components/About";
import Features from "@/components/services/Features";
import Process from "@/components/services/Process";
import Testimonials from "@/components/services/Testimonial";
import Hero from "@/components/Hero";
import { appFeatureData } from "@/data/features";
import { appDevelopmentProcess } from "@/data/process";
import CTABlock from "@/components/ui/CTABlock";
import MotionWrapper from "@/components/MotionWrapper";

export const metadata = createMetadata({
  title: "App Development",
  description: "We build high-quality mobile applications that drive user engagement and growth.",
  path: "/services/app-development",
  image: "/images/og-banners/og-app-development.jpg",
});

const page = () => {
  return (
    <MotionWrapper
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen overflow-hidden"
    >
      <Hero
        title="App Development"
        description="Custom apps that deliver seamless experiences for your users."
        backgroundImage="/images/services/app-development.avif"
      />
      <About
        title="About The Service"
        description="We specialize in building mobile and web apps tailored to your needs. Whether it’s a startup idea or an enterprise solution, our apps are designed for performance, scalability, and user satisfaction."
        images={["/images/services/app-development-2.avif"]}
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
    </MotionWrapper>
  );
};

export default page;
