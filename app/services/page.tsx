"use client";

import Button from "@/components/ui/Button";
import { motion } from "framer-motion";
import { Code, Smartphone, PenTool, Database } from "lucide-react";
import { services } from "@/data/serviceOffers";
import CTABlock from "@/components/ui/CTABlock";

type IconNames = "Code" | "Smartphone" | "PenTool" | "Database";

const iconMap: Record<IconNames, React.FC<React.SVGProps<SVGSVGElement>>> = {
  Code,
  Smartphone,
  PenTool,
  Database,
};

export default function ServicesOverview() {
  return (
    <div className="min-h-screen font-ubuntuReg">
      <header className="bg-primary text-white py-20 min-h-96 flex items-center justify-center">
        <div className="container mx-auto px-4">
          <motion.h1
            className="text-4xl md:text-5xl font-bold font-ubuntuBold mb-4 text-center"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Our Services
          </motion.h1>
          <motion.p
            className="text-xl text-center max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Empowering your digital journey with cutting-edge solutions
          </motion.p>
        </div>
      </header>

      <main className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const IconComponent = iconMap[service.icon as IconNames];

              return (
                <motion.div
                  key={service.title}
                  className="bg-white p-6 rounded-lg shadow-lg border border-[#d5cea3]"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <IconComponent className="w-12 h-12 text-[#503c3c] mb-4" />
                  <h2 className="text-2xl font-bold mb-2 text-[#503c3c]">
                    {service.title}
                  </h2>
                  <p className="text-gray-600 mb-12">{service.description}</p>
                  <Button text="Learn More" to={service.link} />
                </motion.div>
              );
            })}
          </div>
        </div>
      </main>

      <CTABlock
        title="Ready to Start Your Project?"
        description="Let's discuss how we can help bring your ideas to life."
        linkText="Contact Us"
        link="/contact"
      />
    </div>
  );
}
