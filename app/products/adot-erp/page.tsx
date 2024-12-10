"use client";

import { motion } from "framer-motion";
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
        backgroundImage="/images/products/adot-erp/adot-erp-header.jfif"
        ctaText="Request a Demo"
        ctaLink="https://erpnext-demo.frappe.cloud/app"
      />
      <About
        title="About Adot Erp"
        description="Adot ERP is a comprehensive business management solution designed to help Ethiopian businesses streamline their operations, improve efficiency, and drive growth. Our ERP software is tailored to meet the unique needs of Ethiopian businesses, providing powerful tools for accounting, inventory management, HR, and more."
        images={[
          "/images/products/adot-erp/erp-snap-1.png",
          "/images/products/adot-erp/erp-snap-2.png",
          "/images/products/adot-erp/erp-snap-3.jpg",
        ]}
      />
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex flex-col items-center gap-6 mt-6 mb-10 mx-auto"
      >
        <div className="flex flex-col items-center">
          <GradientWord word="Features" size="sm" />
          <ErpFeatures />
        </div>

        <Highlights highlights={erpHighlights} />

        <WhyChoose title="Why Choose Adot ERP?" cards={whyChooseERP} />
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
