"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, MenuItem, ProductItem, HoveredLink } from "./ui/Menu";
import Link from "next/link";
import Image from "next/image";
import { navLinks, NavLink, SubLink } from "@/data/navLinks";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [active, setActive] = useState<string | null>(null);

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
        width: isScrolled ? "70%" : "100%",
        top: isScrolled ? "1rem" : 0,
        backgroundColor: isScrolled ? "rgba(80, 60, 60, 0.9)" : "transparent",
        boxShadow: isScrolled ? "0 2px 10px rgba(0, 0, 0, 0.1)" : "none",
      }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
    >
      <div className="px-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" title="Adot Home" className="ml-4">
          <Image
            className=""
            src="/logo-lyt.svg"
            alt="Next.js logo"
            width={200}
            height={75}
            priority
          />
        </Link>

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
      </div>
    </motion.header>
  );
};

export default Header;
