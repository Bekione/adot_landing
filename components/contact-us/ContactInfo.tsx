"use client";

import { motion } from "framer-motion";
import { contactInformation } from "@/data/contactInformation";
import GradientWord from "../ui/GradientWord";

export default function ContactInfo() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className="mb-12"
    >
      <GradientWord word="Contact Information" size="sm" />
      <div className="grid gap-6 mt-6">
        {contactInformation.map((info, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 * index }}
            viewport={{ once: true }}
          >
          <ContactCard
            key={index}
            icon={info.icon}
            title={info.title}
            content={info.content}
          />
          </motion.div>
        ))}
      </div>
    </motion.div>
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
      <div className="bg-secondary p-3 rounded-full text-primary">
        <Icon className="h-6 w-6" /> {/* Render the icon dynamically */}
      </div>
      <div>
        <h3 className="font-semibold font-ubuntuBold text-lg text-primary mb-1">
          {title}
        </h3>
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
