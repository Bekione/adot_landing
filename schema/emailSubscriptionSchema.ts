import z from "zod";

export const emailSchema = z
  .string()
  .trim()
  .min(1, "Email is required")
  .email("Please enter a valid email!")
  .refine((email) => email.endsWith(".com") || email.endsWith(".net"), {
    message: "Email must end with .com or .net",
  });
