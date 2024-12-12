"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";

let interval: any;

type CardStackProps = {
  images: string[];
  offset?: number; // Offset between cards
  scaleFactor?: number; // Scale reduction for stacked cards
};

export const CardStack = ({
  images,
  offset = 20,
  scaleFactor = 0.08,
}: CardStackProps) => {
  const [cards, setCards] = useState<string[]>(images);

  useEffect(() => {
    startFlipping();
    return () => clearInterval(interval);
  }, []);

  const startFlipping = () => {
    interval = setInterval(() => {
      setCards((prevCards: string[]) => {
        const newArray = [...prevCards];
        newArray.unshift(newArray.pop()!); // Move the last image to the front
        return newArray;
      });
    }, 5000);
  };

  return (
    <div className={cn("relative w-10/12 sm:w-8/12 md:w-full aspect-video mx-auto", cards.length === 1 ? 'mb-4 md:mb-0' : 'mt-8')}>
      <AnimatePresence>
        {cards.map((image, index) => {
          const isTopCard = index === 0; // Identify the top card for exit animation
          return (
            <motion.div
              key={image} // Ensure each image has a unique key
              className="absolute w-full h-full rounded-lg md:rounded-3xl overflow-hidden shadow-xl border border-gray-300"
              style={{
                transformOrigin: "top center",
              }}
              initial={{
                opacity: 0,
                scale: 1.1, // Cards start slightly larger
                top: offset * -index,
                zIndex: cards.length - index,
              }}
              animate={{
                opacity: 1,
                scale: 1 - index * scaleFactor,
                top: offset * -index,
                zIndex: cards.length - index,
              }}
              exit={{
                opacity: isTopCard ? 0 : 1, // Fade out the top card only
                scale: 1.1, // Top card enlarges slightly on exit
                transition: { duration: 0.5 },
              }}
              transition={{
                duration: 0.7,
                ease: "easeInOut",
              }}
            >
              <Image
                src={image}
                alt={`Card ${index}`}
                layout="fill" 
                objectFit="cover" 
                quality={90} 
                priority={index === 0} // Load the top card image first
                className="bg-secondary"
              />
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
};
