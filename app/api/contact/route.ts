import nodemailer from "nodemailer";
import { z } from "zod";
import { ContactEmailTemplate } from "@/components/email-templates/ContactFormEmail";
import { ContactFormAdminEmailTemplate } from "@/components/email-templates/ContactFormAdminNotification";

const contactFormSchema = z.object({
  fullname: z.string().min(1, "Full name is required"),
  email: z.string().email("Please enter a valid email"),
  subject: z.string().min(1, "Subject is required"),
  message: z.string().min(1, "Message is required"),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // Validate form data
    const { fullname, email, subject, message } = contactFormSchema.parse(body);

    const emailHtml = ContactEmailTemplate({ fullname, email, subject });
    const adminEmailHtml = ContactFormAdminEmailTemplate({
      fullname,
      email,
      subject,
      message,
    });

    const transporter = nodemailer.createTransport({
        host: 'mail.adot-technologies.com',
        port: 465,
        secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Email to Adot (Notification)
    const mailOptionsToAdmin = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_RECEIVER,
      subject: `New Contact Form Submission: ${subject}`,
      html: adminEmailHtml,
    };

    // Auto-reply email to the user
    const autoReplyOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Thank You for Reaching Out!",
      html: emailHtml,
    };

    await transporter.sendMail(mailOptionsToAdmin);
    await transporter.sendMail(autoReplyOptions);

    return new Response(
      JSON.stringify({ message: "Message sent successfully!" }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error in contact API:", error);

    return new Response(
      JSON.stringify({
        error:
          error instanceof z.ZodError
            ? error.errors[0].message
            : error instanceof Error
            ? error.message
            : "Something went wrong!",
      }),
      { status: 400 }
    );
  }
}
