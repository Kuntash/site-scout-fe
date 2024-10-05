"use client"

import { z } from "zod"

export const formSchema = z.object({
  email: z.string({ required_error: 'Email is required'}).email("Invalid email address").min(1, "Email is required"),
  password: z.string({ required_error: 'Password is required'}).min(1, "Password is required"),
});

export type FormValues = z.infer<typeof formSchema>