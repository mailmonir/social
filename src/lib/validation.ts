import { z } from "zod";

export const signupSchema = z.object({
  email: z.string().min(1, "Required").email("Invalid email"),
  username: z
    .string()
    .min(1, "Required")
    .regex(/[a-zA-Z0-9_-]+$/, "Only number, letters, - and _ allowed"),
  password: z
    .string()
    .min(1, "Required")
    .min(8, "Must be 8 characters or more"),
});

export const loginSchema = z.object({
  email: z.string().min(1, "Required"),
  password: z.string().min(1, "Required"),
});

export type SignupSchemaType = z.infer<typeof signupSchema>;
export type LoginSchemaType = z.infer<typeof loginSchema>;
