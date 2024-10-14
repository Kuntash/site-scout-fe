import { z } from "zod";

export const formSchema = z
  .object({
    name: z.string({ required_error: "Competitor name is required" }).min(1),
    shouldCreateFirstUrl: z.boolean().optional(),
    url: z.string().optional(),
  })
  .refine(
    (data) => {
      if (data.shouldCreateFirstUrl === true) {
        return data.url != null && data.url.trim() !== "";
      }
      return true;
    },
    {
      message: "URL is required when creating the first URL",
      path: ["url"],
    }
  )
  .refine(
    (data) => {
      /* Check if the URL is valid */
      if (data.shouldCreateFirstUrl === true && data.url != null) {
        try {
          new URL(data.url);
          return true;
        } catch (error) {
          return false;
        }
      }
      return true;
    },
    {
      message: "URL is not valid",
      path: ["url"],
    }
  );

export type FormValues = z.infer<typeof formSchema>;
