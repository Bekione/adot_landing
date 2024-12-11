"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";
import emailjs from "emailjs-com";
import { z } from "zod";
import { WobbleCard } from "../ui/WobbleCard";

// Email validation schema using Zod
const emailSchema = z.string().email("Please enter a valid email!");

const LoaderIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-loader-circle animate-spin"
    >
      <path d="M21 12a9 9 0 1 1-6.219-8.56" />
    </svg>
  );
};

export default function NewsletterSection() {
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  const handleSubmit = async () => {
    try {
      // Validate email using Zod
      emailSchema.parse(email);

      setIsLoading(true);
      setIsError(false);

      // EmailJS parameters
      const templateParams = {
        email,
      };

      await emailjs.send(
        "service_whccme2", // Service ID
        "template_apt5x5s", // Template ID
        templateParams,
        "DPGDAD-VswlhMnw7_" // Public key
      );

      setMessage("Thanks for subscribing to our news letter!");
      setIsError(false);
      setTimeout(() => setMessage(""), 3000);
      setEmail("");
    } catch (error) {
      if (error instanceof z.ZodError) {
        // Show validation error
        setMessage(error.errors[0].message);
        setIsError(true);
        setTimeout(() => setMessage(""), 3000);
      } else {
        setMessage("Something went wrong. Please try again!");
        setIsError(true);
        setTimeout(() => setMessage(""), 3000);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <WobbleCard allowScale={false} containerClassName="relative w-11/12 mx-auto my-10 bg-primary overflow-hidden">
      {/* Decorative background patterns */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute right-0 top-0 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBzdHJva2U9IiNmZmYiIHN0cm9rZS13aWR0aD0iMC41Ij48Y2lyY2xlIGN4PSI1MCIgY3k9IjUwIiByPSI0MCIvPjxjaXJjbGUgY3g9IjUwIiBjeT0iNTAiIHI9IjMwIi8+PGNpcmNsZSBjeD0iNTAiIGN5PSI1MCIgcj0iMjAiLz48L2c+PC9zdmc+')] bg-no-repeat bg-cover rotate-45 transform translate-x-1/2 -translate-y-1/2" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="h-full flex flex-col justify-between md:flex-row mx-auto gap-4 px-4 relative z-10"
      >
        <div className="">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold font-ubuntuBold text-white mb-4"
          >
            Newsletter
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-gray-300 text-lg"
          >
            Subscribe to our newsletter to get notified when there are new
            updates about Adot.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="w-full flex items-center"
        >
          <div className="relative ml-auto h-16 w-full max-w-lg bg-white/30 rounded-full flex flex-wrap">
            <input
              type="email"
              placeholder="your email here"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 rounded-lg outline-none px-5 w-full h-full relative bg-transparent font-thin placeholder:text-white/60 text-white"
            />
            <button
              onClick={handleSubmit}
              className="group relative ml-auto inline-flex w-fit m-2 overflow-hidden rounded-full p-[1px] focus:outline-none border-2 border-primary"
              disabled={isLoading}
              style={{ minWidth: "140px" }} // Fix button width
            >
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-primary group-hover:bg-white group-hover:text-primary transition duration-200 text-sm font-medium text-white px-3">
                {isLoading ? <LoaderIcon /> : "Subscribe"}
              </span>
            </button>

            {message && (
              <div
                className={`absolute top-16 left-1/2 w-8/12 transform -translate-x-1/2 text-sm text-center py-2 px-4 rounded-lg ${
                  isError ? "text-red-500" : "text-white"
                }`}
              >
                {message}
              </div>
            )}
          </div>
        </motion.div>
      </motion.div>
    </WobbleCard>
  );
}
