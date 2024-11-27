"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

export const MenuItem = ({
  setActive,
  active,
  item,
  href,
  hasDropdown,
  children,
}: {
  setActive: (item: string | null) => void;
  active: string | null;
  item: string;
  href?: string; // Add href for navigation
  hasDropdown?: boolean;
  children?: React.ReactNode;
}) => {
  return (
    <div
      onMouseEnter={() => setActive(hasDropdown ? item : null)}
      onMouseLeave={() => setActive(null)}
      className="relative group"
    >
      <div className="absolute -top-[100%] left-0 w-full h-8 bg-red-500 hidden hover:flex"></div>
      {/* Menu Link */}
      {href ? (
        <Link
          href={href}
          className="cursor-pointer text-black hover:opacity-[0.9] dark:text-white"
        >
          {item}
        </Link>
      ) : (
        <p className="cursor-pointer text-black hover:opacity-[0.9] dark:text-white">
          {item}
        </p>
      )}

      {/* Submenu */}
      {active === item && hasDropdown && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 5 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 5 }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
          className="absolute top-full -left-1/2  mt-1 z-10 w-max"
        >
          <div className="bg-white dark:bg-black backdrop-blur-sm rounded-2xl overflow-hidden border border-black/[0.2] dark:border-white/[0.2] shadow-xl">
            <div className="p-4 flex flex-col space-y-2">{children}</div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export const Menu = ({
  setActive,
  children,
}: {
  setActive: (item: string | null) => void;
  children: React.ReactNode;
}) => {
  return (
    <nav
      onMouseLeave={() => setActive(null)} // Reset the state
      className="relative shadow-input flex justify-center space-x-4 px-8 py-6"
    >
      {children}
    </nav>
  );
};

export const ProductItem = ({
  title,
  description,
  href,
  src,
}: {
  title: string;
  description: string;
  href: string;
  src: string;
}) => {
  return (
    <Link href={href} className="flex space-x-2">
      <Image
        src={src}
        width={140}
        height={70}
        alt={title}
        className="flex-shrink-0 rounded-md shadow-2xl"
      />
      <div>
        <h4 className="text-xl font-bold mb-1 text-black dark:text-white">
          {title}
        </h4>
        <p className="text-neutral-700 text-sm max-w-[10rem] dark:text-neutral-300">
          {description}
        </p>
      </div>
    </Link>
  );
};

export const HoveredLink = ({ children, ...rest }: any) => {
  return (
    <Link
      {...rest}
      className="text-neutral-700 dark:text-neutral-200 hover:text-black"
    >
      {children}
    </Link>
  );
};
