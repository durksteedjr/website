import { z } from "zod";

export const link = z.object({
  href: z.string(),
  text: z.string(),
});

export type Link = z.TypeOf<typeof link>;
