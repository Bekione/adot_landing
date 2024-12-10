"use client";

import { motion } from "framer-motion";
import { Code, Smartphone, PenTool, Database } from "lucide-react";
import GradientHeader from "@/components/GradientHeader";
import CTABlock from "@/components/ui/CTABlock";
import { services } from "@/data/serviceOffers";
import Button from "@/components/ui/Button";

type IconNames = "Code" | "Smartphone" | "PenTool" | "Database";

const iconMap: Record<IconNames, React.FC<React.SVGProps<SVGSVGElement>>> = {
  Code,
  Smartphone,
  PenTool,
  Database,
};

export default function ServicesOverview() {
  return (
    <div className="min-h-screen font-ubuntuReg bg-[#f5f5f5]">
      {/* Page Header */}
      <GradientHeader
        title="Our Services"
        subtitle="Empowering your digital journey with cutting-edge solutions"
      />

      {/* Services Grid */}
      <main className="py-16 md:w-11/12 lg:w-10/12 mx-auto">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
            {services.map((service, index) => {
              const IconComponent = iconMap[service.icon as IconNames];

              return (
                <motion.div
                  key={service.title}
                  className="relative group overflow-hidden rounded-3xl shadow-xl bg-white border border-gray-200 hover:scale-105 transition-transform duration-300"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  {/* Background Gradient on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#d5cea3] to-[#503c3c] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Service Content */}
                  <div className="relative z-10 p-8">
                    {/* Icon */}
                    <div className="w-16 h-16 mb-4 flex items-center justify-center rounded-full bg-[#f2ebe3] text-[#503c3c]  transition-all duration-500">
                      <IconComponent className="w-8 h-8" />
                    </div>

                    <h2 className="text-2xl font-bold font-ubuntuBold mb-4 text-[#503c3c]">
                      {service.title}
                    </h2>
                    <p className="text-gray-600 group-hover:text-white leading-relaxed mb-6">
                      {service.description}
                    </p>

                    {/* Button */}
                    <Button text="Learn More" to={service.link} />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </main>

      {/* CTA Section */}
      <CTABlock
        title="Ready to Start Your Project?"
        description="Let's discuss how we can help bring your ideas to life."
        linkText="Contact Us"
        link="/contact"
      />
    </div>
  );
}
