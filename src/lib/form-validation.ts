import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().trim().min(1, "El nombre es obligatorio").max(100, "Máximo 100 caracteres"),
  phone: z.string().trim().max(30, "Máximo 30 caracteres").optional().or(z.literal("")),
  email: z.string().trim().email("Email no válido").max(255, "Máximo 255 caracteres"),
  message: z.string().trim().min(1, "El mensaje es obligatorio").max(5000, "Máximo 5000 caracteres"),
  promo: z.string().trim().max(50, "Máximo 50 caracteres").optional().or(z.literal("")),
});

export type ContactFormData = z.infer<typeof contactSchema>;
