import { z } from "zod";

export const profileUpdateRequestSchema = z.object({
  name: z
    .string()
    .min(3, "Name must be at least 3 characters")
    .max(20, "Name must be at most 20 characters"),
});

export const passwordUpdateRequestSchema = z
  .object({
    oldPassword: z.string().min(1, "Old password is required"),
    newpassword: z
      .string()
      .min(6, "Password must be at least 6 characters long")
      .regex(/[a-zA-Z]/, "Password must contain at least one letter")
      .regex(/[0-9]/, "Password must contain at least one number")
      .regex(
        /[@$!%*?&]/,
        "Password must contain at least one special character",
      ),
    confirmPassword: z
      .string()
      .min(6, "Password must be at least 6 characters long")
      .regex(/[a-zA-Z]/, "Password must contain at least one letter")
      .regex(/[0-9]/, "Password must contain at least one number")
      .regex(
        /[@$!%*?&]/,
        "Password must contain at least one special character",
      ),
  })
  .refine((data) => data.newpassword === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export type ProfileUpdateInput = z.infer<typeof profileUpdateRequestSchema>;
export type PasswordUpdateInput = z.infer<typeof passwordUpdateRequestSchema>;
