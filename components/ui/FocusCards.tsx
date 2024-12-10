"use client";
import Image from "next/image";
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { ExternalLink, Github } from "lucide-react";

export const Card = React.memo(
  ({
    card,
    index,
    hovered,
    setHovered,
  }: {
    card: any;
    index: number;
    hovered: number | null;
    setHovered: React.Dispatch<React.SetStateAction<number | null>>;
  }) => (
    <div
      onMouseEnter={() => setHovered(index)}
      onMouseLeave={() => setHovered(null)}
      className={cn(
        "relative h-52 md:h-64 w-full rounded-lg overflow-hidden transition-all duration-300 bg-primary/40",
        hovered !== null && hovered !== index && "blur-sm scale-[0.98]"
      )}
    >
      <Image
        src={card.src}
        alt={card.title}
        fill
        className="absolute inset-0 object-cover"
      />
      <div
        className={cn(
          "absolute inset-0 bg-black/60 flex flex-col items-center justify-center text-white opacity-0 transition-opacity duration-300",
          hovered === index && "opacity-100"
        )}
      >
        <h3 className="text-lg font-bold">{card.title}</h3>
        <div className="flex space-x-4 mt-2">
          <a href={card.liveLink} target="_blank" rel="noopener noreferrer">
            <ExternalLink className="w-6 h-6 text-white hover:text-secondary" />
          </a>
          <a href={card.githubLink} target="_blank" rel="noopener noreferrer">
            <Github className="w-6 h-6 text-white hover:text-secondary" />
          </a>
        </div>
      </div>
    </div>
  )
);

Card.displayName = "Card";

type Card = {
  title: string;
  src: string;
  liveLink: string;
  githubLink: string;
};

export function FocusCards({ cards }: { cards: Card[] }) {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
      {cards.map((card, index) => (
        <Card
          key={card.title}
          card={card}
          index={index}
          hovered={hovered}
          setHovered={setHovered}
        />
      ))}
    </div>
  );
}
