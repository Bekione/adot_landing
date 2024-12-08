"use client";

import { motion } from "framer-motion";
import {
  MousePointerIcon,
  BarChartIcon,
  MapPinIcon,
} from "lucide-react";
import Hero from "@/components/Hero";
import About from "@/components/About";
import ErpFeatures from "@/components/products/ErpFeatures";
import Highlights from "@/components/products/Highlights";
import GradientWord from "@/components/ui/GradientWord";
import CTABlock from "@/components/ui/CTABlock";
import { erpHighlights } from "@/data/highlights";
import WhyChoose from "@/components/products/WhyChoose";
import { whyChooseERP } from "@/data/whyChoose";

export default function AdotERP() {
  return (
    <section>
      <Hero
        title="Adot ERP"
        description="All-in-One ERP Solution for Ethiopian Businesses"
        backgroundImage="/images/adot-erp-hd.jfif"
        ctaText="Request a Demo"
        ctaLink="https://erpnext-demo.frappe.cloud/app"
      />
      <About
        title="About Adot Erp"
        description="Adot ERP is a comprehensive business management solution designed to help Ethiopian businesses streamline their operations, improve efficiency, and drive growth. Our ERP software is tailored to meet the unique needs of Ethiopian businesses, providing powerful tools for accounting, inventory management, HR, and more."
        images={["/images/erp-snap-1.png", "/images/erp-snap-2.png", "/images/erp-snap-3.jpg"]}
      />
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex flex-col items-center gap-6 mt-6 mb-10 mx-auto"
      >
        <GradientWord word="Features" />
        <ErpFeatures />

        <Highlights highlights={erpHighlights}/>

        <WhyChoose title="Why Choose Adot ERP?" cards={whyChooseERP} />

        <div className="container mx-auto px-6 flex flex-col items-center">
            <GradientWord word="Why Choose Adot ERP?" />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 mt-6 mb-12">
              <motion.div
                className="bg-white p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:shadow-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="text-center mb-4">
                  <MapPinIcon className="h-12 w-12 text-primary mb-4 mx-auto" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Tailored for Ethiopian Businesses
                </h3>
                <p className="text-gray-600">
                  Custom-built to handle local tax systems and reporting
                  compliance for Ethiopian businesses.
                </p>
              </motion.div>

              <motion.div
                className="bg-white p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:shadow-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="text-center mb-4">
                  <BarChartIcon className="h-12 w-12 text-primary mb-4 mx-auto" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Automated Workflows
                </h3>
                <p className="text-gray-600">
                  Save time and reduce errors with powerful automated business
                  processes.
                </p>
              </motion.div>

              <motion.div
                className="bg-white p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:shadow-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <div className="text-center mb-4">
                  <MousePointerIcon className="h-12 w-12 text-primary mb-4 mx-auto" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  User-Friendly Interface
                </h3>
                <p className="text-gray-600">
                  Designed for simplicity, so even non-tech-savvy employees can
                  use it with ease.
                </p>
              </motion.div>
            </div>
          </div>
      </motion.section>

      <CTABlock
        title="Ready to Take Control of Your Business?"
       linkText="Request a Demo"
        link="https://erpnext-demo.frappe.cloud/app"
        type="secondary"
      />
    </section>
  );
}
