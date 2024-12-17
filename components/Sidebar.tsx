"use client";

import * as React from "react";
import { usePathname, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronDown, ChevronUp } from "lucide-react";
import { cn } from "@/lib/utils";
import { NavLink, SubLink, navLinks } from "@/data/navLinks";

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
  const router = useRouter();

  const handleLinkClick = (href: string) => {
    setIsOpen(false);
    router.push(href);
  };

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
            transition={transition}
            className="fixed top-0 right-0 h-full w-full max-w-[22rem] bg-gradient-to-br from-primary via-[#3d2e2e] to-[#2d2222] shadow-lg z-[9999] flex flex-col overflow-y-hidden"
          >
            <div className="p-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="p-2 rounded-md text-secondary float-right"
                onClick={() => setIsOpen(false)}
                aria-label="Close Menu"
              >
                <X size={24} />
              </motion.button>
            </div>
            <nav className="flex-grow overflow-y-auto my-10 pb-4 pl-2 mr-2">
              <div className="px-4">
                {navLinks.map((link, index) => (
                  <SidebarItem
                    key={index}
                    link={link}
                    pathname={pathname}
                    onLinkClick={handleLinkClick}
                  />
                ))}
              </div>
            </nav>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

function SidebarItem({
  link,
  pathname,
  onLinkClick,
}: {
  link: NavLink;
  pathname: string;
  onLinkClick: (href: string) => void;
}) {
  const [isOpen, setIsOpen] = React.useState(false);
  const isActive =
    pathname === link.href ||
    (link.subLinks &&
      link.subLinks.some((subLink) => pathname === subLink.href));

  // Maintain expanded state
  React.useEffect(() => {
    if (isActive && link.subLinks) {
      setIsOpen(true);
    }
  }, [isActive, link.subLinks]);

  const handleItemClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (link.subLinks) {
      setIsOpen(!isOpen);
    } else if (link.href) {
      onLinkClick(link.href);
    }
  };

  return (
    <motion.div
      className="mb-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ ...transition, delay: 0.1 }}
    >
      <motion.div
        className={cn(
          "flex items-center justify-between px-3 py-2 text-md font-medium font-ubuntuReg rounded-md transition-colors cursor-pointer",
          isActive
            ? "bg-secondary/40 text-white font-bold font-ubuntuBold"
            : "text-secondary hover:bg-secondary/40 hover:text-white"
        )}
        onClick={handleItemClick}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <div className="flex items-center space-x-2 flex-grow">
          <span
            onClick={(e) => {
              e.stopPropagation();
              if (link.href) {
                onLinkClick(link.href);
              }
            }}
          >
            {link.title}
          </span>
          {link.badge && (
            <span className="px-2 py-1 text-xs font-semibold rounded-full bg-secondary text-primary">
              {link.badge}
            </span>
          )}
        </div>
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
            className="ml-4 space-y-2 overflow-hidden p-2"
          >
            {link.subLinks.map((subLink, index) => (
              <motion.div
                key={index}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ ...transition, delay: index * 0.1 }}
              >
                <SubLinkItem
                  subLink={subLink}
                  pathname={pathname}
                  onLinkClick={onLinkClick}
                />
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

function SubLinkItem({
  subLink,
  pathname,
  onLinkClick,
}: {
  subLink: SubLink;
  pathname: string;
  onLinkClick: (href: string) => void;
}) {
  const isActive = pathname === subLink.href;

  return (
    <motion.div
      className={cn(
        "flex items-center justify-between px-3 py-2 text-sm font-ubuntuReg rounded-md transition-colors cursor-pointer",
        isActive
          ? "bg-secondary/60 text-white font-bold"
          : "text-secondary hover:bg-secondary/40 hover:text-white"
      )}
      onClick={() => onLinkClick(subLink.href)}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={{ x: -20, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ ...transition, delay: 0.1 }}
    >
      <span>{subLink.title}</span>
      {subLink.badge && (
        <span className="px-2 py-1 text-xs font-semibold rounded-full bg-secondary text-primary">
          {subLink.badge}
        </span>
      )}
    </motion.div>
  );
}
