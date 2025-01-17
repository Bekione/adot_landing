import { createMetadata } from "@/lib/create-metadata";
import About from "@/components/About";
import Features from "@/components/services/Features";
import Process from "@/components/services/Process";
import Testimonials from "@/components/services/Testimonial";
import Header from "@/components/Hero";
import { softwareFeatureData } from "@/data/features";
import { customSoftwareProcess } from "@/data/process";
import CTABlock from "@/components/ui/CTABlock";
import MotionWrapper from "@/components/MotionWrapper";

export const metadata = createMetadata({
  title: "Custom Software Development",
  description: "Get tailor-made software solutions that fit your unique business requirements.",
  path: "/services/custom-software",
  image: "/images/og-banners/og-software-development.jpg",
});

const page = () => {
  return (
    <MotionWrapper
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen overflow-hidden"
    >
      <Header
        title="Custom Software Development"
        description="Solutions tailored to your unique business challenges."
        backgroundImage="/images/services/software-development.avif"
      />
      <About
        title="About The Service"
        description="From automation tools to enterprise systems, we develop custom software designed to solve your business-specific problems. Experience innovation with our cutting-edge solutions."
        images={["/images/services/software-development-2.avif"]}
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
    </MotionWrapper>
  );
};

export default page;
