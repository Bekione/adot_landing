"use client";

import { motion } from "framer-motion";
import { contactInformation } from "@/data/contactInformation";
import GradientWord from "../ui/GradientWord";

export default function ContactInfo() {
  return (
    <div className="mb-12">
      <GradientWord word="Contact Information" size="sm" />
      <div className="grid gap-6">
        {contactInformation.map((info, index) => (
          <ContactCard
            key={index}
            icon={info.icon}
            title={info.title}
            content={info.content}
          />
        ))}
      </div>
    </div>
  );
}

interface ContactCardProps {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  content: string[] | string;
}

function ContactCard({ icon: Icon, title, content }: ContactCardProps) {
  return (
    <motion.div
      className="bg-white shadow-md rounded-xl p-6 flex items-start space-x-4"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      <div className="bg-[#d5cea3] p-3 rounded-full text-[#503c3c]">
        <Icon className="h-6 w-6" /> {/* Render the icon dynamically */}
      </div>
      <div>
        <h3 className="font-semibold text-lg text-[#503c3c] mb-1">{title}</h3>
        {Array.isArray(content) ? (
          content.map((item, index) => (
            <p key={index} className="text-gray-600">
              {item}
            </p>
          ))
        ) : (
          <p className="text-gray-600">{content}</p>
        )}
      </div>
    </motion.div>
  );
}
