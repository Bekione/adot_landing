import { z } from "zod";

// Fullname validation schema
export const fullnameSchema = z
  .string()
  .min(1, "Full name is required.")
  .max(50, "Full name must be less than 50 characters")
  .regex(/^[a-zA-Z\s]*$/, "Full name can only contain letters and spaces")
  .refine((name) => name.trim().split(/\s+/).length >= 2, "Full name must contain at least two words.")
  .refine((name) => name.trim().split(/\s+/).every((word) => word.length >= 2), "Each word in the full name must have at least 2 letters.");

// Email validation schema
export const emailSchema = z
  .string()
  .min(1, "Email is required.")
  .email("Please enter a valid email address.")
  .refine((email) => email.toLocaleLowerCase().endsWith(".com") || email.toLowerCase().endsWith(".net"), { message: "Email must end with .com or .net" });

// Subject validation schema
export const subjectSchema = z
  .string()
  .min(1, "Subject is required.")
  .max(100, "Subject must be less than 100 characters")
  .min(3, "Subject must be at least 3 characters long.")
  .refine((subject) => subject.trim().length >= 3, "Subject must be meaningful.")
  .refine((subject) => !/^\s*(subject|test|dummy|placeholder)\s*$/i.test(subject), "Subject is too generic. Please provide a meaningful subject.");

// Message validation schema
export const messageSchema = z
  .string()
  .min(1, "Message is required.")
  .max(1000, "Message must be less than 1000 characters")
  .refine((message) => message.trim().split(/\s+/).length >= 5, "Message must contain at least 5 words.")
  .refine((message) => !message.toLowerCase().includes("lorem ipsum"), "Message cannot contain placeholder text like 'lorem ipsum'.");

// Combined contact form schema
export const contactFormSchema = z.object({
  fullname: fullnameSchema,
  email: emailSchema,
  subject: subjectSchema,
  message: messageSchema,
});
