"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { navLinks, NavLink, SubLink } from "@/data/navLinks";
import Link from "next/link";
import { Menu, X, ChevronRight } from "lucide-react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  // Sidebar animation variants
  const sidebarVariants = {
    closed: {
      x: "100%", // Slide out of view (right)
      transition: { duration: 0.5, ease: "easeInOut" },
    },
    open: {
      x: 0, // Slide into view
      transition: { duration: 0.5, ease: "easeInOut" },
    },
  };

  return (
    <>
      {/* Hamburger Icon */}
      <button
        className="p-2 rounded-md text-[#d5cea3] flex md:hidden"
        onClick={() => setIsOpen(true)}
        aria-label="Open Menu"
      >
        <Menu size={32} />
      </button>

      {/* Sidebar */}
      <motion.div
        className="fixed top-0 right-0 h-screen w-3/4 max-w-sm bg-gradient-to-b from-[#503c3c] to-[#443232] text-white z-40 shadow-lg md:hidden flex flex-col overflow-hidden"
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        variants={sidebarVariants}
      >
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 p-2 bg-[#503c3c7c] rounded-full"
          onClick={() => setIsOpen(false)}
          aria-label="Close Menu"
        >
          <X size={24} />
        </button>

        {/* Sidebar Links */}
        <nav
          className="mt-16 px-6 flex-1 overflow-y-auto"
        >
          {navLinks.map((link: NavLink) => (
            <div key={link.title} className="mb-4">
              <div
                className="flex justify-between items-center text-lg font-sans hover:bg-[#d5cea381] px-3 py-2 rounded-lg cursor-pointer transition"
                onClick={() =>
                  link.subLinks
                    ? setOpenDropdown(openDropdown === link.title ? null : link.title)
                    : setIsOpen(false)
                }
              >
                <Link
                  href={link.href || "#"}
                  className={link.subLinks ? "w-full" : ""}
                >
                  {link.title}
                </Link>
                {link.subLinks && (
                  <motion.div
                    initial={{ rotate: 0 }}
                    animate={{ rotate: openDropdown === link.title ? 90 : 0 }}
                    className="text-sm"
                  >
                    <ChevronRight />
                  </motion.div>
                )}
              </div>

              {/* Dropdown for Sublinks */}
              {link.subLinks && openDropdown === link.title && (
                <motion.ul
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="pl-4 mt-2 space-y-2 overflow-hidden"
                >
                  {link.subLinks.map((subLink: SubLink) => (
                    <li key={subLink.title}>
                      <Link
                        href={subLink.href}
                        className="block text-sm text-slate-300 font-sans hover:bg-[#d5cea381] px-3 py-1 rounded-lg transition"
                        onClick={() => setIsOpen(false)}
                      >
                        {subLink.title}
                      </Link>
                    </li>
                  ))}
                </motion.ul>
              )}
            </div>
          ))}
        </nav>
      </motion.div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-30"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default Sidebar;
