"use client";
import React, { useState } from "react";
import { Menu, MenuItem, ProductItem, HoveredLink } from "./ui/Menu";
import Link from "next/link";
import Image from "next/image";
import { navLinks, NavLink, SubLink } from "@/data/navLinks";

const Header = () => {
  const [active, setActive] = useState<string | null>(null);

  return (
    <header className="fixed top-0 w-full z-50 shadow-md">
      <div className="px-4 py-3 flex justify-between items-center">
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
    </header>
  );
};

export default Header;
