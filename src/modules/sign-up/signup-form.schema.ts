"use client";

import { z } from "zod";

export const formSchema = z.object({
  firstName: z
    .string({ required_error: "First name is required" })
    .max(100, "First name can't exceed 100 characters")
    .min(1, "First name is required"),
  lastName: z
    .string({ required_error: "Last name is required" })
    .max(100, "Last name can't exceed 100 characters")
    .min(1, "Last name is required"),
  email: z
    .string({ required_error: "Email is required" })
    .email("Invalid email address")
    .min(1, "Email is required"),
  password: z
    .string({ required_error: "Password is required" })
    .min(1, "Password is required"),
});

export type FormValues = z.infer<typeof formSchema>;
