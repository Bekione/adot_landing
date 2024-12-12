"use client";

import { BackgroundBeams } from "@/components/ui/BackgroundBeams";
import Button from "@/components/ui/Button";
import GradientWord from "@/components/ui/GradientWord";
import { motion } from "framer-motion";

const NotFound = () => {
  return (
    <div className="h-screen w-full overflow-hidden py-4 bg-primary flex flex-col items-center justify-around">
      <div className="max-w-2xl mx-auto flex-1 flex flex-col items-center justify-around z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center flex flex-col justify-center"
        >
          <div className="max-w-md w-full text-center">
            <GradientWord word="404" type="secondary" className="" />
            <h2 className="text-3xl font-semibold font-ubuntuBold text-white mb-4">
              Page Not Found
            </h2>
            <p className="text-lg text-secondary mb-8">
              Oops! The page you're looking for doesn't exist or has been moved.
            </p>
            <Button
              text="Return To Home"
              to="/"
              className="!bg-secondary !hover:bg-white/80"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="absolute inset-0"
        >
          <BackgroundBeams />
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;
