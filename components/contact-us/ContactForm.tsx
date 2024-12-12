"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import GradientWord from "../ui/GradientWord";
import { Input } from "../ui/Input";
import { TextArea } from "../ui/TextArea";
import { Label } from "../ui/Label";
import { subjectPlaceholders } from "@/data/placeholder";
import { z } from "zod";
import { cn } from "@/lib/utils";

const contactFormSchema = z.object({
  fullname: z
    .string()
    .min(1, "Please enter your full name")
    .refine((value) => value.trim().split(/\s+/).length >= 2, {
      message: "Full name must contain at least two words.",
    })
    .refine(
      (value) =>
        value
          .trim()
          .split(/\s+/)
          .every((word) => word.length >= 2),
      { message: "Each word in the full name must have at least 2 letters." }
    ),
  email: z.string().email("Please enter a valid email"),
  subject: z.string().min(1, "Subject is required"),
  message: z
    .string()
    .min(1, "Please enter a message")
    .refine((value) => value.trim().split(/\s+/).length >= 5, {
      message: "Message must contain at least 5 words.",
    })
    .refine((value) => !/^(hi|hello|hey|test)$/i.test(value.trim()), {
      message: "Message is too generic. Please provide more details.",
    }),
});

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

    // Reset previous errors
    setErrors({});
    setGlobalMessage("");

    try {
      // Validate form data
      contactFormSchema.parse(formData);

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
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors: Partial<Record<string, string>> = {};
        error.errors.forEach((err) => {
          newErrors[err.path[0]] = err.message;
        });
        setErrors(newErrors);
      } else {
        setGlobalMessage("Something went wrong. Please try again!");
      }
    } finally {
      setIsLoading(false);
      setTimeout(() => setGlobalMessage(""), 3000);
    }
  };

  return (
    <motion.div
      className="bg-white flex flex-col"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <GradientWord
        word="Get in Touch"
        size="sm"
        className="ml-2 lg:ml-0 lg:mx-auto"
      />
      <form
        className="space-y-2 mt-6 shadow-xl rounded-lg p-2 md:p-8 md:pb-6"
        onSubmit={handleSubmit}
      >
        <LabelInputContainer>
          <Label htmlFor="fullname">Full Name</Label>
          <Input
            id="fullname"
            placeholder="John Doe"
            type="text"
            value={formData.fullname}
            onChange={(e) =>
              setFormData({ ...formData, fullname: e.target.value })
            }
          />
          <ErrorMessage message={errors.fullname} />
        </LabelInputContainer>

        <LabelInputContainer>
          <Label htmlFor="email">Email Address</Label>
          <Input
            id="email"
            placeholder="john.doe@example.com"
            type="email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
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
            onChange={(e) =>
              setFormData({ ...formData, subject: e.target.value })
            }
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
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
          />
          <ErrorMessage message={errors.message} />
        </LabelInputContainer>

        <button
          type="submit"
          className="w-full px-8 py-3 rounded-md flex items-center justify-center relative text-white bg-[#503c3c] hover:bg-[#d5cea3] hover:text-primary transition-all duration-300 overflow-hidden z-50"
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
