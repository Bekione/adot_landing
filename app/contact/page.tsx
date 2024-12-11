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
    <div className="min-h-screen w-full">
      <GradientHeader
        title="Contact Us"
        subtitle="We are here to help you with any questions you may have. Reach out to us and we will get back to you as soon as possible."
      />

      <main className="flex flex-col  px-4 py-8 md:py-16 md:w-11/12 lg:w-10/12 mx-4 md:mx-auto">
      <motion.div 
          className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-16"
          variants={fadeIn}
          initial="initial"
          animate="animate"
        >
          <div className="lg:col-span-3">
            <ContactForm />
          </div>
          <div className="lg:col-span-2 mx-auto w-full">
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
