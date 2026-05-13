import { z } from "zod";

export const waitlistSchema = z.object({
  email: z.string().trim().toLowerCase().email().max(254),
  hp_field: z.string().max(0).optional(),
  source: z.string().max(32).optional(),
});

export type WaitlistInput = z.infer<typeof waitlistSchema>;
