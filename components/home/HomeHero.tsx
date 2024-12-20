"use client";
import React, { useEffect, useState } from "react";
import { BackgroundBeamsWithCollision } from "@/components/ui/BeamBackground";
import { FlipWords } from "../ui/FlipWords";
import { motion } from "framer-motion";
import Link from "next/link";
import { heroServices } from "@/data/serviceOffers";

const HomeHero = () => {
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShouldAnimate(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="hero-section relative cursor-custom hero-bg row-span-full col-span-full w-full h-screen flex flex-col">
      <BackgroundBeamsWithCollision>
        <motion.div
          initial={{ opacity: shouldAnimate ? 0 : 1, y: shouldAnimate ? 20 : 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center flex flex-col justify-center"
        >
          <h2 className="mx-4 mt-8 md:mt-0 relative techniq z-20 font-ubuntuBold text-3xl sm:text-5xl lg:text-7xl font-extrabold md:font-bold text-center text-white tracking-tight">
            <span className="block">Your one stop solution for</span>
            {shouldAnimate ? (
              <FlipWords 
                words={heroServices} 
                duration={3000}
              />
            ) : (
              <span className="text-primary px-2">{heroServices[0]}</span>
            )}
          </h2>
          <p className="text-lg mx-8 text-white text-center mt-6 sm:mt-10 z-1">
            We are revolutionizing Ethiopia&apos;s Tech Industry with Quality
            and Innovation.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 font-sans mt-8 sm:mt-12 mx-auto z-1">
            <Link
              href="/services"
              className="w-[25ch] inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-primary bg-[linear-gradient(110deg,#503c3c,45%,#704d4d,55%,#503c3c)] bg-[length:200%_100%] px-6 font-medium text-white transition-colors hover:shadow-2xl hover:shadow-secondary/[0.3]"
            >
              Explore our Services
            </Link>

            <Link
              href="/contact"
              className="w-[25ch] inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-secondary bg-[linear-gradient(110deg,#d5cea3,45%,#e2dcc1,55%,#d5cea3)] bg-[length:200%_100%] px-6 font-medium text-primary transition-colors hover:shadow-2xl hover:shadow-secondary/[0.3]"
            >
              Contact Us
            </Link>
          </div>
        </motion.div>
      </BackgroundBeamsWithCollision>
      <div className="absolute bottom-0 sm:bottom-4 left-1/2 transform -translate-x-1/2">
        <motion.div
          initial={{ opacity: 0.5, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
          className="cursor-pointer  text-secondary hover:text-white duration-200"
          title="Scroll to see more"
          onClick={() =>
            window.scrollBy({ top: window.innerHeight, behavior: "smooth" })
          }
        >
          <svg
            version="1.0"
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            viewBox="0 0 512 512"
            fill="currentColor"
          >
            <path d="M235.5 47.7c-26.1 3.6-50.2 22.2-60.4 46.6-6.2 15-6.2 15.4-5.8 98.7.2 65.3.5 76.2 1.9 80.5 7.2 22.9 20.4 39.3 39.6 49.4 12.5 6.4 20.2 8.2 39.2 8.8 19.4.7 30.7-.6 42-4.6 11.2-3.9 18.3-8.5 27.6-17.6 12.3-12.1 19.7-26.3 22.3-42.5.7-4.1 1.1-33 1.1-78.3 0-61.6-.2-72.9-1.6-79.5-6.3-30.5-29.6-54.1-59.9-60.3-6.9-1.4-12.9-1.8-26-1.7-9.3 0-18.3.3-20 .5zm45.7 16.7c15.9 4.3 32.8 17.7 39.5 31.7 7.1 14.8 6.8 10.1 6.8 93.4 0 70-.1 75.4-1.8 81-5.4 17.3-17.6 32.1-32.7 39.3-11.9 5.7-17.1 6.4-41.1 6-20.4-.3-20.4-.4-28.3-3.6-9.5-3.9-18.9-10.4-24.6-16.9-5-5.8-12.4-20.8-13.9-28.1-.7-3.5-1.1-29.6-1.1-78 0-77.7.1-78.3 5.1-89.7 8.7-19.7 27.8-33.9 49.4-36.6 9.3-1.2 36.1-.2 42.7 1.5z" />
            <path d="M250.4 108.1c-1.8 2-1.9 4-1.9 32.5 0 29.9 0 30.4 2.2 32.5 2.9 2.9 7.7 2.9 10.6 0 2.2-2.1 2.2-2.6 2.2-32.5 0-28.5-.1-30.5-1.9-32.5-1.3-1.4-3.1-2.1-5.6-2.1-2.5 0-4.3.7-5.6 2.1zM251.9 363.3c-3.7 2.8-3.9 4.9-3.9 40.4v34.8l-12.3-12.4c-6.8-6.8-13.2-12.7-14.2-13.1-2.6-.9-7.3.8-8.5 3-2.8 5.2-1.8 6.6 19.2 27.7 18.6 18.7 20.5 20.3 23.7 20.3 3.3 0 5.2-1.6 23.8-20.3 18-18 20.3-20.6 20.3-23.5 0-4.3-3-7.2-7.6-7.2-3.2 0-4.8 1.2-16 12.2L264 437.3v-34.2c0-34.9-.2-37-3.9-39.8-2-1.6-6.2-1.6-8.2 0z" />
          </svg>
        </motion.div>
      </div>
    </div>
  );
};

export default HomeHero;
