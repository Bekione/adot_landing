"use client";

import { motion } from "framer-motion";
import { Send } from "lucide-react";
import GradientWord from "../ui/GradientWord";
import { Input } from "../ui/Input";
import { TextArea } from "../ui/TextArea";
import { Label } from "../ui/Label";
import { cn } from "@/lib/utils";
import { subjectPlaceholders } from "@/data/placeholder";

export default function ContactForm() {
  function handlesubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log("Form submitted");
  }

  return (
    <motion.div
      className="bg-white flex flex-col"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <GradientWord word="Get in Touch" size="sm" className="ml-2 lg:ml-0 lg:mx-auto"/>
      <form className="space-y-6 mt-6 shadow-xl rounded-lg p-8" onSubmit={handlesubmit}>
  
          <LabelInputContainer>
            <Label htmlFor="fullname">First name</Label>
            <Input id="fullname" placeholder="John Doe" type="text" />
          </LabelInputContainer>
       
          <LabelInputContainer className="mb-4">
            <Label htmlFor="email">Email Address</Label>
            <Input id="email" placeholder="John@yahoo.com" type="email" />
          </LabelInputContainer>

          <LabelInputContainer>
            <Label htmlFor="subject">Subject</Label>
            <Input id="subject" placeholders={subjectPlaceholders} type="text" />
          </LabelInputContainer>

          <LabelInputContainer>
            <Label htmlFor="message">Message</Label>
            <TextArea id="message" placeholder="Your message here..." rows={5}/>
          </LabelInputContainer>
                    
        <button
          type="submit"
          className="w-full px-8 py-2 rounded-md flex items-center justify-center bg-primary text-white font-bold font-sans transition duration-200 hover:bg-white hover:text-primary border-2 border-transparent hover:border-primary"
        >
          <Send className="mr-2 h-5 w-5" />
          <span>Send Message</span>
        </button>
      </form>
    </motion.div>
  );
}

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
