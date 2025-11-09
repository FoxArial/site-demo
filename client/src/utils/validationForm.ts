import { z } from "zod";

export const ContactFormSchema = z.object({
  name: z.string().min(3, "Name must be at least 2 characters"),
  email: z.string().min(3, "Email must be at least 3 characters"),
  phone: z
    .string()
    .min(6, "Phone must be at least 6 characters")
    .max(15, "Phone must be less than 15 characters"),
  message: z.string().min(1, "Message cannot be empty"),
});

export type ContactFormValues = z.infer<typeof ContactFormSchema>;

export type FormState = {
  success?: boolean;
  messageInfo?: string;
  data?: {
    name?: string;
    email?: string;
    phone?: string;
    message?: string;
  };
  strapiErrors?: {
    status: number;
    name: string;
    message: string;
    details?: Record<string, string[]>;
  } | null;
  zodErrors?: {
    name?: string[];
    email?: string[];
    phone?: string[];
    message?: string[];
  } | null;
};
