import { createMetadata } from "@/lib/create-metadata";
import About from "@/components/About";
import Features from "@/components/services/Features";
import Process from "@/components/services/Process";
import Testimonials from "@/components/services/Testimonial";
import Hero from "@/components/Hero";
import { webDesignFeatureData, webFeatureData } from "@/data/features";
import { webDesignProcess } from "@/data/process";
import CTABlock from "@/components/ui/CTABlock";
import MotionWrapper from "@/components/MotionWrapper";

export const metadata = createMetadata({
  title: "Website Design",
  description: "Stand out with our clean, modern, and visually appealing website designs.",
  path: "/services/website-design",
  image: "/images/og-banners/og-web-design.jpg",
});

const page = () => {
  return (
    <MotionWrapper
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
    </MotionWrapper>
  );
};

export default page;
