import { z } from "zod";

export const ContactSchema = z.object({
  name: z.string().min(2, "Please share your name"),
  email: z.string().email("Please use a valid email"),
  company: z.string().optional(),
  need: z.enum(["strategy", "geo", "build", "speaking", "other"], {
    required_error: "Pick the closest match",
  }),
  budget: z.enum(["under-10k", "10-25k", "25-50k", "50k-plus", "unsure"]).optional(),
  message: z.string().min(10, "A sentence or two about your project helps"),
  website: z.string().optional(),
});

export type ContactInput = z.infer<typeof ContactSchema>;
