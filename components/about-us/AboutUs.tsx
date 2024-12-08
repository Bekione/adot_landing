"use client";

import { motion } from "framer-motion";
import Mission from "./Mission";
import Vision from "./Vision";
import CoreValues from "./CoreValues";
import OurStory from "./OurStory";
import MeetTheTeam from "./MeetTheTeam";
import GradientWord from "../ui/GradientWord";
import { WobbleCard } from "../ui/WobbleCard";
import { whyChooseUs } from "@/data/whyChoose";
import WhyChoose from "../products/WhyChoose";

export default function AboutUs() {
  return (
    <section className="py-16 pt-32 font-ubuntuReg">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="container mx-auto px-4 flex flex-col items-center"
      >
        <GradientWord word="About Us" />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full mt-6">
          <WobbleCard
            containerClassName="col-span-1 lg:col-span-2 h-full bg-primary min-h-[500px] lg:min-h-[300px]"
            className=""
          >
            <div className="max-w-2xl">
              <Mission />
            </div>
          </WobbleCard>
          <WobbleCard containerClassName="col-span-1 min-h-[300px] bg-secondary">
            <Vision />
          </WobbleCard>
          <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-[#7d672d] min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
            <CoreValues />
          </WobbleCard>
        </div>
        <OurStory />
        <MeetTheTeam />
        <WhyChoose title="Why Choose Us?" cards={whyChooseUs} />
      </motion.div>
    </section>
  );
}
