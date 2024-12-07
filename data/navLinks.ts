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
    subLinks: [
      { title: "Web Development", href: "/services/web-development" },
      { title: "App Development", href: "/services/app-development" },
      { title: "Custom Software", href: "/services/custom-software" },
      { title: "Web Design", href: "/services/web-design" },
    ],
  },
  {
    title: "Products",
    subLinks: [
      { title: "Adot ERP", description: "Manage your enterprise efficiently.", href: "/products/adot-erp", src: "/images/adot-erp.svg" },
      { title: "Youthopia", description: "Kids number one choice.", href: "/products/youthopia", src: "/images/youthopia.avif" },
      { title: "Comming Soon", description: "Something exciting on it way.", href: "/products/comming-soon", src: "/images/coming-soon.avif" },
    ],
  },
  { title: "Adot Labs", href: "/adot-labs" },
  { title: "Blog", href: "/blog" },
  { title: "Contact Us", href: "/contact" },
];








