"use server";

import EmailTemplate from "@/components/email/template";
import { Resend } from "resend";

// TODO: switch from to new domain after purchase

const resend = new Resend(process.env.RESEND_API_KEY || "");

export const sendEmail = async ({
  name,
  email,
  message,
}: {
  name: string;
  email: string;
  message: string;
}) => {
  const { error } = await resend.emails.send({
    from: "info@polo-swim.com",
    to: ["milanpavlovic02@icloud.com"],
    subject: "Portfolio Contact",

    react: EmailTemplate({ senderName: name, email, letterContent: message }),
  });

  if (error) {
    console.log(error.message);
    throw new Error("Error while sending a message!");
  }

  return { message: "Your message has been sent successfully!" };
};
