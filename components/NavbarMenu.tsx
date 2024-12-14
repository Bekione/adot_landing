'use client';

import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { NavLink, SubLink, navLinks } from '@/data/navLinks';
import Image from 'next/image';
import { Noise } from './ui/WobbleCard';

const springTransition = {
  type: 'spring',
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

export function NavbarMenu() {
  const pathname = usePathname();

  return (
    <nav className="hidden md:flex items-center space-x-4">
      {navLinks.map((link, index) => (
        <NavItem key={index} link={link} pathname={pathname} />
      ))}
    </nav>
  );
}

function NavItem({ link, pathname }: { link: NavLink; pathname: string }) {
  const [isOpen, setIsOpen] = React.useState(false);

  const isActive =
    pathname === link.href ||
    (link.subLinks && link.subLinks.some((subLink) => pathname === subLink.href));

    const isProductMenu = link.title.toLowerCase() === 'products';

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <Link
        href={link.href || '#'}
        className={cn(
          'px-3 py-2 text-md font-medium rounded-md transition-colors',
          isActive ? 'text-secondary font-bold bg-white/10 font-ubuntuBold' : 'text-secondary hover:text-secondary/70'
        )}
      >
        {link.title}
      </Link>
      {link.subLinks && (
        <motion.div
          initial={{ opacity: 0, scaleY: 0.8, y: 10 }}
          animate={{
            opacity: isOpen ? 1 : 0,
            scaleY: isOpen ? 1 : 0.8,
            y: isOpen ? 0 : 10,
          }}
          exit={{ opacity: 0, scaleY: 0.8 }}
          transition={springTransition}
          className={cn(
            'absolute left-1/2 !transform -translate-x-1/2 mt-3 rounded-md shadow-lg bg-primary/90 ring-1 ring-primary ring-opacity-5 invisible',
            isProductMenu ? 'w-[350px] p-2' : 'w-56',
            isOpen && 'visible'
          )}
        >
          {/* Invisible div to fix hover gap */}
          <div className="absolute top-0 left-0 w-full h-4 -translate-y-full" />

          <div className="py-1 relative overflow-hidden p-2">
            <Noise />
            {link.subLinks.map((subLink, index) => (
              <SubLinkItem key={index} subLink={subLink} pathname={pathname} isProductMenu={false} />
            ))}
          </div>
        </motion.div>
      )}
    </div>
  );
}

function SubLinkItem({
  subLink,
  pathname,
  isProductMenu,
}: {
  subLink: SubLink;
  pathname: string;
  isProductMenu: boolean;
}) {
  const isActive = pathname === subLink.href;

  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      transition={springTransition}
      className="flex h-full items-stretch z-20"
    >
      <Link
        href={subLink.href}
        className={cn(
          'flex w-full h-full p-4 rounded-md hover:bg-secondary/40 z-10 hover:z-40 hover:text-primary hover:shadow-md transition-all',
          isActive && 'bg-secondary/40 text-primary font-bold font-ubuntuBold',
        )}
      >
        <div className="flex items-start space-x-4">
          {subLink.src && (
            <div className="w-28 h-20 relative">
              <Image
                src={subLink.src}
                alt={subLink.title}
                fill
                sizes="(max-width: 768px) 100vw, 200px"
                className="rounded-lg h-auto w-auto max-h-[4.5rem] object-cover"
              />
            </div>
          )}
          <div className="flex-1 space-y-1">
            <div className={cn("text-md font-medium text-white", isProductMenu && 'font-ubuntuBold')}>
              {subLink.title}
            </div>
            {subLink.description && (
              <p className="text-sm text-gray-300 leading-tight">
                {subLink.description}
              </p>
            )}
            {subLink.badge && (
              <span className="inline-block text-xs font-bold text-primary bg-secondary px-2 py-1 rounded-md mt-1">
                {subLink.badge}
              </span>
            )}
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

  