"use client";

import * as React from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { AlignJustify } from "lucide-react";
import { NavbarMenu } from "./NavbarMenu";
import { Sidebar } from "./Sidebar";
import Logo from "./Logo";

const Header = () => {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 0);
  });

  return (
    <>
      <motion.header
        className="fixed w-full md:w-auto mx-auto rounded-md font-ubuntuReg"
        style={{ left: 0, right: 0, marginLeft: "auto", marginRight: "auto" }}
        initial={{
          backgroundColor: "transparent",
          backdropFilter: "none",
          zIndex: 998,
          opacity: 0, 
          y: -30, 
        }}
        animate={{
          y: 0,
          backgroundColor: isScrolled ? "rgba(80, 60, 60, 0.9)" : "transparent",
          backdropFilter: isScrolled ? "blur(8px)" : "none",
          boxShadow: isScrolled ? "0 2px 10px rgba(0, 0, 0, 0.1)" : "none",
          width: isScrolled ? "95%" : "100%",
          top: isScrolled ? "1rem" : 0,
          opacity: 1,
          
          zIndex: 9998,
        }}
        transition={{
          y: { duration: 0.6, ease: "easeInOut" },
          width: { duration: 0.6, ease: "easeInOut" },
          opacity: { duration: 0.6, ease: "easeInOut" },
          top: { duration: 0.6, ease: "easeInOut" },
          
        }}
        viewport={{ once: true }}
      >
        <div className="mx-auto px-4 py-2 flex justify-between items-center">
          <Logo />
          <NavbarMenu />
          <button
            className="p-2 rounded-md text-[#d5cea3] md:hidden"
            onClick={() => setIsSidebarOpen(true)}
            aria-label="Open Menu"
          >
            <AlignJustify size={32} />
          </button>
        </div>
      </motion.header>
      <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
    </>
  );
};

export default Header;
