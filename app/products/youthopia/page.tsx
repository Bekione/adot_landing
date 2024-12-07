"use client";
import { MacbookScroll } from "@/components/ui/MacbookScroll";
import { motion } from "framer-motion";
import {
  CheckCircle,
  ArrowRight,
  MousePointerIcon,
  BarChartIcon,
  MapPinIcon,
} from "lucide-react";
import Link from "next/link";
import Hero from "@/components/Hero";
import About from "@/components/About";
import ErpFeatures from "@/components/products/ErpFeatures";
import GradientWord from "@/components/ui/GradientWord";
import CTABlock from "@/components/ui/CTABlock";

export default function AdotERP() {
  return (
    <section>
      <Hero
        title="Youthopia"
        description="Learn, Play, and Grow Together – A Social Learning Platform for Children."
        backgroundImage="/images/youthopia-kid.avif"
        ctaText="Explore Now"
        ctaLink="https://youthopia.vercel.app/"
      />
      <About
        title="About Youthopia"
        description="Youthopia is a children’s media platform designed for both education and entertainment. It offers interactive courses, a social community for learning, and carefully crafted content to engage young minds in an immersive experience."
        imgSrc="/images/youthopia.avif"
      />
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="container flex flex-col items-center gap-6 mt-6 mb-10 mx-auto"
      >
        <GradientWord word="Features" />
      </motion.section>

      <CTABlock
        title="Let Your Child Explore a World of Learning and Fun!"
        linkText="Get Started Today"
        link="https://www.adot-erp.com/demo"
        type="secondary"
      />
    </section>
  );
}
