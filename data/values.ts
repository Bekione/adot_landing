import { iconMap } from "@/lib/icon-map";

export const values: Array<{
  icon: keyof typeof iconMap;
  title: string;
  description: string;
}> = [
  {
    title: "Innovation",
    description:
      "Creating breakthrough technologies that solve real-world problems.",
    icon: "Lightbulb",
  },
  {
    title: "Integrity",
    description:
      "Operating with transparency and honesty in all our endeavors.",
    icon: "ShieldCheck",
  },
  {
    title: "Excellence",
    description:
      "Striving for the highest quality in every aspect of our work.",
    icon: "Award",
  },
  {
    title: "Collaboration",
    description: "Enabling shared success with our clients and partners.",
    icon: "Users",
  },
  {
    title: "Sustainability",
    description: "Guiding our efforts for long-term impact.",
    icon: "Leaf",
  },
  {
    title: "Empowerment",
    description:
      "Helping individuals and communities thrive through technology.",
    icon: "Rocket",
  },
];
