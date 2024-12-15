"use client";

import { useState } from "react";
import { z } from "zod";
import { WobbleCard } from "../ui/WobbleCard";
import { motion } from "framer-motion";
import { emailSchema } from "@/schema/emailSubscriptionSchema";

const LoaderIcon = () => (
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

      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const result = await response.json();

      if (response.ok) {
        setMessage(result.message);
      } else {
        throw new Error(result.error);
      }
    } catch (error) {
      if (error instanceof z.ZodError) {
        // Always display the first validation error message
        setMessage(error.errors[0].message);
      } else if (error instanceof Error) {
        setMessage(error.message);
      } else {
        setMessage("Something went wrong. Please try again!");
      }
      setIsError(true);
    } finally {
      setIsLoading(false);
      setTimeout(() => setMessage(""), 3000);
      setEmail("");
    }
  };

  return (
    <WobbleCard
      allowScale={false}
      containerClassName="relative w-11/12 mx-auto my-10 bg-primary overflow-hidden"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="h-full flex flex-col justify-between md:flex-row mx-auto gap-4 px-4 relative z-10"
      >
        {/* Title and Description */}
        <div>
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

        {/* Input and Button */}
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
              style={{ minWidth: "140px" }}
            >
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-primary group-hover:bg-white group-hover:text-primary transition duration-200 text-sm font-medium text-white px-3">
                {isLoading ? <LoaderIcon /> : "Subscribe"}
              </span>
            </button>

            {message && (
              <div
                className={`absolute top-20 left-1/2 w-fit transform -translate-x-1/2 font-bold text-sm text-center py-2 bg-white/40 px-4 rounded-lg whitespace-nowrap ${
                  isError ? "text-red-500" : "text-green-600"
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
