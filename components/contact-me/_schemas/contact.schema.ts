import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email().min(1),
  message: z
    .string()
    .min(2, { message: "Message must be at least 2 characters." }),
});

export type ContactSchemaInput = z.infer<typeof contactSchema>;
