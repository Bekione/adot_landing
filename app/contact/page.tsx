"use client";

import ContactForm from "@/components/contact-us/ContactForm";
import ContactInfo from "@/components/contact-us/ContactInfo";
import OfficeLocation from "@/components/contact-us/OfficeLocation";
import SocialLinks from "@/components/contact-us/SocialLinks";
import GradientHeader from "@/components/GradientHeader";
import NewsletterSection from "@/components/home/NewsletterSubscriptionSection";
import { motion } from "framer-motion";

const page = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  return (
    <div className="min-h-screen font-ubuntuReg">
      <GradientHeader
        title="Contact Us"
        subtitle="We are here to help you with any questions you may have. Reach out to us and we will get back to you as soon as possible."
      />

      <main className="container mx-auto px-4 py-16">
        <motion.div
          className="grid md:grid-cols-2 gap-16"
          variants={fadeIn}
          initial="initial"
          animate="animate"
        >
          <ContactForm />
          <div>
            <ContactInfo />
            <SocialLinks />
          </div>
        </motion.div>
        <OfficeLocation />
        <NewsletterSection />
      </main>
    </div>
  );
};

export default page;
