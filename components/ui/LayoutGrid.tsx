"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Image from "next/image"; // Import Next.js Image

// Cloudinary Loader and placeholder for blur
import cloudinaryLoader, { cloudinaryBlurPlaceholder } from "@/lib/image-loader";

type Card = {
  id: number;
  title: string;
  description: string;
  className: string;
  thumbnail: string;
};

export const LayoutGrid = ({ cards }: { cards: Card[] }) => {
  const [selected, setSelected] = useState<Card | null>(null);
  const [lastSelected, setLastSelected] = useState<Card | null>(null);

  const handleClick = (card: Card) => {
    setLastSelected(selected);
    setSelected(card);
  };

  const handleOutsideClick = () => {
    setLastSelected(selected);
    setSelected(null);
  };

  return (
    <div className="w-full h-full p-10 grid grid-cols-1 md:grid-cols-3 max-w-7xl mx-auto gap-4 relative md:w-11/12 lg:w-10/12">
      {cards.map((card, i) => (
        <motion.div
          key={i}
          className={cn(card.className, "")}
          initial={{ opacity: 0, x: i % 2 === 0 ? -100 : 100 }} // Alternate slide direction
          whileInView={{ opacity: 1, x: 0 }} // Slide to original position
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }} 
        >
          <motion.div
            onClick={() => handleClick(card)}
            className={cn(
              card.className,
              "relative overflow-hidden",
              selected?.id === card.id
                ? "rounded-lg cursor-pointer absolute inset-0 h-1/2 w-full md:w-1/2 m-auto z-50 flex justify-center items-center flex-wrap flex-col"
                : lastSelected?.id === card.id
                ? "z-40 bg-secondary/90 rounded-xl h-full w-full"
                : "bg-secondary/90 rounded-xl h-full w-full"
            )}
            layoutId={`card-${card.id}`}
          >
            {selected?.id === card.id && <SelectedCard selected={selected} />}
            <ImageComponent card={card} />
          </motion.div>
        </motion.div>
      ))}
      <motion.div
        onClick={handleOutsideClick}
        className={cn(
          "absolute h-full w-full left-0 top-0 bg-black opacity-0 z-10 rounded-3xl",
          selected?.id ? "pointer-events-auto" : "pointer-events-none"
        )}
        animate={{ opacity: selected?.id ? 0.3 : 0 }}
      />
    </div>
  );
};

const ImageComponent = ({ card }: { card: Card }) => {
  return (
    <motion.div
      className="relative w-full h-full"
    >
      <Image
        loader={cloudinaryLoader}
        src={card.thumbnail}
        alt={card.title}
        height={500}
        width={500}
        className={cn("object-cover object-top absolute inset-0 h-full w-full transition duration-200")}
        placeholder="blur"
        blurDataURL={cloudinaryBlurPlaceholder(card.thumbnail)} // Blur placeholder
      />
    </motion.div>
  );
};

const SelectedCard = ({ selected }: { selected: Card | null }) => {
  return (
    <div
      className="bg-transparent h-full w-full flex flex-col justify-end rounded-lg overflow-hidden shadow-2xl relative z-[60]"
      style={{ backgroundImage: `url(${selected?.thumbnail})`, backgroundSize: "cover", backgroundPosition: "center" }}
    >
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 0.6,
        }}
        className="absolute inset-0 h-full w-full bg-black opacity-60 z-10"
      />
      <motion.div
        layoutId={`content-${selected?.id}`}
        initial={{
          opacity: 0,
          y: 100,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        exit={{
          opacity: 0,
          y: 100,
        }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
        }}
        className="relative px-8 pb-4 z-[70]"
      >
        <div>
          <p className="font-bold md:text-4xl text-xl text-white">
            {selected?.title}
          </p>
          <p className="font-normal text-base text-white"></p>
          <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
            {selected?.description}
          </p>
        </div>
      </motion.div>
    </div>
  );
};
