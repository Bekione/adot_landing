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
      title: "Products",
      subLinks: [
        { title: "Adot ERP", description: "Manage your enterprise efficiently.", href: "/products/erp", src: "/images/Adot erp.svg" },
        { title: "CRM Tool", description: "Boost customer relationships.", href: "/products/crm", src: "/images/crm.png" },
        { title: "Adot Ai", description: "Custom ai for Ethiopia", href: "/products/adot-ai", src: "/images/Adot ai.svg" },
      ],
    },
    { title: "Adot Labs", href: "/adot-labs" },
    {
      title: "Careers",
      subLinks: [
        { title: "Frontend Developer", href: "/careers/frontend" },
        { title: "Backend Developer", href: "/careers/backend" },
        { title: "UI/UX Designer", href: "/careers/uiux" },
      ],
    },
    { title: "Blog", href: "/blog" },
    { title: "Contact Us", href: "/contact" },
  ];
  