"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, MenuItem, ProductItem, HoveredLink } from "./ui/Menu";
import { navLinks, NavLink, SubLink } from "@/data/navLinks";
import Logo from "./Logo";
import Sidebar from "./Sidebar";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [active, setActive] = useState<string | null>(null);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  
  // Check if the screen is small
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768); // Adjust the breakpoint as needed
    };

    handleResize(); // Run on initial load
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      // setScrollY(currentScrollY);
      setIsScrolled(currentScrollY > 50); // Add class if scrolled more than 50px
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      className="fixed w-full z-50 rounded-md"
      style={{ left: 0, right: 0, marginLeft: "auto", marginRight: "auto" }}
      initial={{
        width: "100%",
        top: 0,
        backgroundColor: "transparent",
        boxShadow: "none",
      }}
      animate={{
        width: isScrolled ? (isSmallScreen ? "90%" : "85%") : "100%",
        top: isScrolled ? (isSmallScreen ? "0.5rem" : "1rem") : 0,
        backgroundColor: isScrolled ? "rgba(80, 60, 60, 0.9)" : "transparent",
        boxShadow: isScrolled ? "0 2px 10px rgba(0, 0, 0, 0.1)" : "none",
      }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
    >
      <div className="p-2 sm:px-4 flex justify-between items-center">
        {/* Logo */}
        <Logo />
      
        {/* Navigation Menu */}
        <Menu setActive={setActive}>
          {navLinks.map((navLink: NavLink) => (
            <MenuItem
              key={navLink.title}
              setActive={setActive}
              active={active}
              item={navLink.title}
              href={navLink.href}
              hasDropdown={["Products", "Careers"].includes(navLink.title)} // Enable dropdown only for specific links
            >
              {/* Render sub-links if hasDropdown is true */}
              {navLink.subLinks?.map((subLink: SubLink) =>
                subLink.src ? (
                  <ProductItem
                    key={subLink.title}
                    title={subLink.title}
                    description={subLink.description || ""}
                    href={subLink.href}
                    src={subLink.src}
                  />
                ) : (
                  <HoveredLink key={subLink.title} href={subLink.href}>
                    {subLink.title}
                  </HoveredLink>
                )
              )}
            </MenuItem>
          ))}
        </Menu>
        <Sidebar />
      
      </div>
    </motion.header>
  );
};

export default Header;
