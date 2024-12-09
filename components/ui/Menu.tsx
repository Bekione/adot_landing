"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from 'next/navigation'
import Image from "next/image";

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
  href?: string;
  hasDropdown?: boolean;
  children?: React.ReactNode;
}) => {
  const pathname = usePathname();

  const isActive = href && pathname === href; // Check if the link is active

  return (
    <div
      onMouseEnter={() => setActive(hasDropdown ? item : null)}
      onMouseLeave={() => setActive(null)} // Reset state when leaving
      className="relative"
    >
      {/* Menu Link */}
      {href ? (
        <Link
          href={href}
          className={`flex items-center space-x-1 cursor-pointer hover:opacity-[0.9] hover:!text-foregroundtext-white ${
            isActive ? "font-bold !text-foreground" : ""
          }`}
        >
          <span>{item}</span>
      
          {hasDropdown && <span className="!-ml-[0.025rem]">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" strokeWidth={1.5} stroke="currentColor" className="size-3">
              <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
            </svg>
            </span>}
        </Link>
        
      ) : (
        <p
          className={`flex items-center space-x-1 cursor-pointer hover:opacity-[0.9] hover:!text-foreground text-red-500 ${
            isActive ? "font-bold !text-foreground" : ""
          }`}
        >
          <span>{item}</span>
          {hasDropdown && <span className="!-ml-[0.025rem]">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" strokeWidth={1.5} stroke="currentColor" className="size-3">
              <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
            </svg>
            </span>}
        </p>
      )}

      {/* Invisible Div for Smooth Hover */}
      <div className="absolute -bottom-[100%] left-0 w-full h-8"></div>

      {/* Submenu */}
      {active === item && hasDropdown && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 5 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 5 }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
          className="absolute top-[calc(100%_+_1.2rem)] left-1/2 transform -translate-x-1/2 z-10 w-max"
        >
          <div className="bg-[#d5cea371] backdrop-blur-sm rounded-2xl overflow-hidden border border-white/[0.2] shadow-xl">
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
      onMouseLeave={() => setActive(null)} // resets the state
      className="hidden md:flex relative font-ubuntuReg justify-center space-x-4 px-8 py-6"
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
        <h4 className="text-xl font-bold mb-1 text-white">
          {title}
        </h4>
        <p className="text-sm max-w-[10rem] text-neutral-300">
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
      className="text-neutral-200 hover:text-secondary"
    >
      {children}
    </Link>
  );
};
