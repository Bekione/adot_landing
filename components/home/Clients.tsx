"use client";

import GradientWord from "../ui/GradientWord";
import { InfiniteMovingCards } from "../ui/InfiniteMovingCards";
import { clients } from "@/data/clients";
import { motion } from "framer-motion";

const Clients = () => {
  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="mt-18 flex flex-col items-center overflow-hidden"
    >
      <GradientWord word="Trusted By" />
      <InfiniteMovingCards
        items={clients}
        direction="left"
        speed="normal"
        pauseOnHover={true}
        className="mt-6 pb-12"
      />
    </motion.div>
  );
};

export default Clients;
