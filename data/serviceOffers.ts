import { iconMap } from '@/lib/icon-map';

export const offers: Array<{
  icon: keyof typeof iconMap;
  title: string;
  header: string;
  description: string;
}> = [
  {
    title: "Creative Website Design",
    description: "Modern, responsive, and visually stunning websites tailored to your brand.",
    header: "/images/home/web-design.avif", 
    icon: "Globe",
  },
  {
    title: "Mobile App Development",
    description:
      "Engage your audience on the go with intuitive and user-friendly mobile apps.",
    header: "/images/home/mobile.avif",
    icon: "TabletSmartphone",
  },
  {
    title: "Custom Software Development",
    description: "Flexible pricing tailored to your budget without compromising quality.",
    header: "/images/home/software.avif",
    icon: "Cog",
  },
  {
    title: "Lab for Incubating Ideas",
    description:
      "A creative hub for nurturing and transforming innovative ideas into reality.",
    header: "/images/home/lab.avif",
    icon: "Lightbulb",
  },
  {
    title: "Affordable Service Packages",
    description: "Discover the beauty of thoughtful and functional design.",
    header: "/images/home/package.avif",
    icon: "BadgeDollarSign",
  },
];

export const heroServices = [
  "creative websites",
  "custom software",
  "tailored services",
];

export const services: Array<{
  icon: keyof typeof iconMap;
  title: string;
  description: string;
  link: string;
}> = [
  {
    icon: "Code",
    title: 'Web Development',
    description: 'Create modern, responsive websites tailored to your business needs.',
    link: '/services/web-development'
  },
  {
    icon: "Smartphone",
    title: 'App Development',
    description: 'Build powerful mobile applications for iOS and Android platforms.',
    link: '/services/app-development'
  },
  {
    icon: "Database",
    title: 'Custom Software',
    description: 'Develop bespoke software solutions to streamline your business processes.',
    link: '/services/custom-software'
  },
  {
    icon: "PenTool",
    title: 'Web Design',
    description: 'Create stunning, user-friendly designs that captivate your audience.',
    link: '/services/web-design'
  }
]