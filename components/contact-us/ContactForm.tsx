"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import GradientWord from "../ui/GradientWord";
import { Input } from "../ui/Input";
import { TextArea } from "../ui/TextArea";
import { Label } from "../ui/Label";
import { subjectPlaceholders } from "@/data/placeholder";
import { fullnameSchema, emailSchema, subjectSchema, messageSchema } from "@/schema/contactFormSchema";
import { cn } from "@/lib/utils";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<Partial<Record<string, string>>>({});
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [globalMessage, setGlobalMessage] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setErrors({});
    setGlobalMessage("");

    try {
      // Validate each field separately
      const fullnameError = fullnameSchema.safeParse(formData.fullname);
      const emailError = emailSchema.safeParse(formData.email);
      const subjectError = subjectSchema.safeParse(formData.subject);
      const messageError = messageSchema.safeParse(formData.message);

      const newErrors: Partial<Record<string, string>> = {};

      if (!fullnameError.success) newErrors.fullname = fullnameError.error.errors[0].message;
      if (!emailError.success) newErrors.email = emailError.error.errors[0].message;
      if (!subjectError.success) newErrors.subject = subjectError.error.errors[0].message;
      if (!messageError.success) newErrors.message = messageError.error.errors[0].message;

      if (Object.keys(newErrors).length > 0) {
        setErrors(newErrors);
        return;
      }

      setIsLoading(true);
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setGlobalMessage("Message sent successfully!");
        setFormData({ fullname: "", email: "", subject: "", message: "" });
      } else {
        throw new Error("Failed to send the message");
      }
    } catch {
      setGlobalMessage("Something went wrong. Please try again!");
    } finally {
      setIsLoading(false);
      setTimeout(() => setGlobalMessage(""), 3000);
    }
  };

  return (
    <motion.div
      className="bg-white flex flex-col"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <GradientWord word="Get in Touch" size="sm" className="ml-2 lg:ml-0 lg:mx-auto" />
      <form className="space-y-2 mt-6 shadow-xl rounded-lg p-2 md:p-8 md:pb-6" onSubmit={handleSubmit}>
        <LabelInputContainer>
          <Label htmlFor="fullname">Full Name</Label>
          <Input
            id="fullname"
            placeholder="John Doe"
            type="text"
            value={formData.fullname}
            onChange={(e) => setFormData({ ...formData, fullname: e.target.value })}
          />
          <ErrorMessage message={errors.fullname} />
        </LabelInputContainer>

        <LabelInputContainer>
          <Label htmlFor="email">Email Address</Label>
          <Input
            id="email"
            placeholder="john.doe@example.com"
            type="text"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
          <ErrorMessage message={errors.email} />
        </LabelInputContainer>

        <LabelInputContainer>
          <Label htmlFor="subject">Subject</Label>
          <Input
            id="subject"
            placeholders={subjectPlaceholders}
            type="text"
            value={formData.subject}
            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
          />
          <ErrorMessage message={errors.subject} />
        </LabelInputContainer>

        <LabelInputContainer>
          <Label htmlFor="message">Message</Label>
          <TextArea
            id="message"
            placeholder="Your message here..."
            className="!text-md"
            rows={5}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          />
          <ErrorMessage message={errors.message} />
        </LabelInputContainer>

        <button
          type="submit"
          className="w-full px-8 py-3 rounded-md flex items-center justify-center relative text-white bg-primary hover:bg-secondary hover:text-primary transition-all duration-300 overflow-hidden z-50"
          disabled={isLoading}
        >
          <Send className="mr-2 h-5 w-5" />
          <span>{isLoading ? "Sending..." : "Send Message"}</span>
        </button>
        <div
          className="mt-2 min-h-[20px] text-center text-sm"
          style={{
            color: globalMessage.includes("success") ? "green" : "red",
          }}
        >
          {globalMessage && globalMessage}
        </div>
      </form>
    </motion.div>
  );
}

const LabelInputContainer = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return <div className={cn("flex flex-col space-y-2 w-full", className)}>{children}</div>;
};

const ErrorMessage = ({ message }: { message?: string }) => {
  return (
    <div
      className="text-red-500 text-sm ml-2"
      style={{ minHeight: "20px", visibility: message ? "visible" : "hidden" }}
    >
      {message || " "}
    </div>
  );
};
