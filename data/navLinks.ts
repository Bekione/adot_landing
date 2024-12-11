export type SubLink = {
  title: string;
  description?: string; // Optional for cases like Services
  href: string;
  src?: string; // Optional image for sub-links
};

export type NavLink = {
  title: string;
  href?: string; // Optional if there are sub-links
  subLinks?: SubLink[]; // Array of sub-links for dropdowns
};

export const navLinks: NavLink[] = [
  { title: "Home", href: "/" },
  { title: "About Us", href: "/about" },
  {
    title: "Services",
    href: "/services",
    subLinks: [
      { title: "Web Development", href: "/services/web-development" },
      { title: "App Development", href: "/services/app-development" },
      { title: "Custom Software", href: "/services/custom-software" },
      { title: "Web Design", href: "/services/web-design" },
    ],
  },
  {
    title: "Products",
    href: "/products",
    subLinks: [
      { title: "Adot ERP", description: "Manage your enterprise efficiently.", href: "/products/adot-erp", src: "/images/products/adot-erp/adot-erp.svg" },
      { title: "Youthopia", description: "Kids number one choice.", href: "/products/youthopia", src: "/images/products/youthopia/youthopia-snap-1.png" },
      { title: "Comming Soon", description: "Something exciting on it's way.", href: "/products/coming-soon", src: "/images/products/coming-soon.avif" },
    ],
  },
  { title: "Labs", href: "/adot-labs" },
  { title: "Blog", href: "/blog" },
  { title: "Contact Us", href: "/contact" },
];

