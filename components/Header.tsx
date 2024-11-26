"use client";
import React, { useState } from "react";
import { Menu, MenuItem, ProductItem, HoveredLink } from "./Ui/Menu"; 
import Link from 'next/link'
import Image from 'next/image';

const Header = () => {
  const [active, setActive] = useState<string | null>(null);
 
  return (
    <header className="fixed top-0 w-full bg-foreground dark:bg-background z-50 shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" title="Adot Home" >
        <Image
          className="dark:invert"
          src="/logo.svg"
          alt="Next.js logo"
          width={200}
          height={75}
          priority
          />
        </Link>
      

        <Menu setActive={setActive}>
          <MenuItem setActive={setActive} active={active} item="Home">
            <HoveredLink href="/">Go to Home</HoveredLink>
          </MenuItem>

          <MenuItem setActive={setActive} active={active} item="About Us">
            <HoveredLink href="/about">Learn More About Us</HoveredLink>
          </MenuItem>

          <MenuItem setActive={setActive} active={active} item="Services">
            <HoveredLink href="/services">Explore Our Services</HoveredLink>
          </MenuItem>

          <MenuItem setActive={setActive} active={active} item="Our Products">
            {/* Sub-links for "Our Products" */}
            <div className="space-y-4">
              <ProductItem
                title="ERP Solution"
                description="Manage your enterprise efficiently."
                href="/products/erp"
                src="/images/erp.png" // Replace with actual image path
              />
              <ProductItem
                title="CRM Tool"
                description="Boost customer relationships."
                href="/products/crm"
                src="/images/crm.png" // Replace with actual image path
              />
              <ProductItem
                title="Inventory Management"
                description="Streamline your inventory."
                href="/products/inventory"
                src="/images/inventory.png" // Replace with actual image path
              />
            </div>
          </MenuItem>

          <MenuItem setActive={setActive} active={active} item="ADOT Labs">
            <HoveredLink href="/labs">Learn More About ADOT Labs</HoveredLink>
          </MenuItem>

          <MenuItem setActive={setActive} active={active} item="Careers">
            {/* Sub-links for "Careers" */}
            <div className="space-y-4">
              <HoveredLink href="/careers/frontend">Frontend Developer</HoveredLink>
              <HoveredLink href="/careers/backend">Backend Developer</HoveredLink>
              <HoveredLink href="/careers/uiux">UI/UX Designer</HoveredLink>
            </div>
          </MenuItem>

          <MenuItem setActive={setActive} active={active} item="Blog">
            <HoveredLink href="/blog">Read Our Latest Articles</HoveredLink>
          </MenuItem>

          <MenuItem setActive={setActive} active={active} item="Contact Us">
            <HoveredLink href="/contact">Reach Out to Us</HoveredLink>
          </MenuItem>
        </Menu>
      </div>
    </header>
  );
};

export default Header;
