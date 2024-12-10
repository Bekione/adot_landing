"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronDown, ChevronUp } from "lucide-react";
import { cn } from "@/lib/utils";
import { NavLink, navLinks } from "@/data/navLinks";

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

export function Sidebar({ isOpen, setIsOpen }: SidebarProps) {
  const pathname = usePathname();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-50"
            onClick={() => setIsOpen(false)}
          />
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 120, damping: 15 }}
            className="fixed top-0 right-0 h-full w-full max-w-sm bg-gradient-to-br from-[#503c3c] via-[#3d2e2e] to-[#2d2222] shadow-lg z-[9999] overflow-y-auto"
          >
            <div className="p-4 z-20">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="p-2 rounded-md text-white float-right"
                onClick={() => setIsOpen(false)}
                aria-label="Close Menu"
              >
                <X size={24} />
              </motion.button>
              <nav className="mt-16">
                {navLinks.map((link, index) => (
                  <SidebarItem key={index} link={link} pathname={pathname} />
                ))}
              </nav>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

function SidebarItem({ link, pathname }: { link: NavLink; pathname: string }) {
  const [isOpen, setIsOpen] = React.useState(false);
  const isActive =
    pathname === link.href ||
    (link.subLinks &&
      link.subLinks.some((subLink) => pathname === subLink.href));

  return (
    <motion.div
      className="mb-4 z-20"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ ...transition, delay: 0.1 }}
    >
      <motion.div
        className={cn(
          "flex items-center justify-between px-3 py-3 text-md font-medium rounded-md transition-colors cursor-pointer",
          isActive
            ? "bg-secondary/40 text-white font-bold font-ubuntuBold"
            : "text-secondary hover:bg-secondary/40 hover:text-white"
        )}
        onClick={() => (link.subLinks ? setIsOpen(!isOpen) : null)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Link href={link.href || "#"}>{link.title}</Link>
        {link.subLinks && (
          <motion.div
            initial={{ rotate: 0 }}
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={transition}
          >
            {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </motion.div>
        )}
      </motion.div>
      <AnimatePresence>
        {link.subLinks && isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={transition}
            className="ml-4 mt-2 space-y-2 overflow-hidden"
          >
            {link.subLinks.map((subLink, index) => (
              <motion.div
                key={index}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ ...transition, delay: index * 0.1 }}
              >
                <Link
                  href={subLink.href}
                  className={cn(
                    "block px-3 py-2 text-sm rounded-md transition-colors",
                    pathname === subLink.href
                      ? "bg-secondary/40 text-white font-bold"
                      : "text-secondary hover:bg-secondary/40 hover:text-white"
                  )}
                >
                  {subLink.title}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
