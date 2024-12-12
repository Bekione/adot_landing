import nodemailer from "nodemailer";
import { z } from "zod";
import { NewsletterEmailTemplate } from "@/components/email-templates/NewsletterEmail";
import { NewsletterAdminEmailTemplate } from "@/components/email-templates/NewsletterAdminNotification";

const emailSchema = z.string().email("Please enter a valid email!");

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    emailSchema.parse(email);

    const emailHtml = NewsletterEmailTemplate();
    const adminEmailHtml = NewsletterAdminEmailTemplate({ email });

    const transporter = nodemailer.createTransport({
      host: "mail.adot-technologies.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Email to Adot (Notification)
    const mailOptionsToSelf = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_RECEIVER,
      subject: "New Newsletter Subscription",
      html: adminEmailHtml,
    };

    // Auto-reply email to the subscriber
    const autoReplyOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Thank You for Subscribing!",
      html: emailHtml,
    };

    await transporter.sendMail(mailOptionsToSelf);
    await transporter.sendMail(autoReplyOptions);

    return new Response(
      JSON.stringify({ message: "Subscribed successfully!" }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error in subscription API:", error);

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
