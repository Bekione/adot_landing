"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail } from "lucide-react";
import GradientWord from "../ui/GradientWord";

export default function ContactInfo() {
  return (
    <div className="mb-12">
      <GradientWord word="Contact Information" />
      <div className="grid gap-6">
        <ContactCard
          icon={<MapPin />}
          title="Address"
          content="123 Tech Street, Silicon Valley, CA 94000"
        />
        <ContactCard
          icon={<Phone />}
          title="Phone"
          content="+1 (555) 123-4567"
        />
        <ContactCard
          icon={<Mail />}
          title="Email"
          content="info@adottechnologies.com"
        />
      </div>
    </div>
  );
}

interface ContactCardProps {
  icon: React.ReactNode;
  title: string;
  content: string;
}

function ContactCard({ icon, title, content }: ContactCardProps) {
  return (
    <motion.div
      className="bg-white shadow-md rounded-lg p-6 flex items-start space-x-4"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      <div className="bg-[#d5cea3] p-3 rounded-full text-[#503c3c]">{icon}</div>
      <div>
        <h3 className="font-semibold text-lg text-[#503c3c] mb-1">{title}</h3>
        <p className="text-gray-600">{content}</p>
      </div>
    </motion.div>
  );
}
