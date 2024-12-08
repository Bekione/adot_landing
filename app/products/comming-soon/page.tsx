"use client";
import Hero from "@/components/Hero";
import { WobbleCard } from "@/components/ui/WobbleCard";
import { motion } from "framer-motion";
import { Clock, Bell } from "lucide-react";

export default function ComingSoon() {
  return (
    <section className="">
      <Hero
        title="Commign Soon"
        description="Our team is hard at work developing an innovative new product that will redefine the way you interact with technology."
        backgroundImage="/images/future.avif"
        noButton
      />

      <WobbleCard
        allowScale={false}
        containerClassName="relative max-w-2xl mx-auto my-6 bg-primary overflow-hidden"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col items-center"
        >
          <Clock size={64} className="mx-auto mb-4 text-white" />
          <h2 className="text-3xl font-bold font-ubuntuBold text-center mb-4 text-white">Something Big is Coming</h2>
          <p className="mb-6 text-white/80">
            Our team is hard at work developing an innovative new product that
            will redefine the way you interact with technology. Stay tuned for
            updates and be the first to experience what's next from Adot.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="bg-white/80 text-[#503c3c] px-6 py-2 rounded-full inline-flex items-center z-40 "
          >
            Get Notified <Bell size={16} className="ml-2" />
          </motion.button>
        </motion.div>
      </WobbleCard>
    </section>
  );
}
