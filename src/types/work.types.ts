import { z } from "zod";

export const work = z.object({
  description: z.string(),
  title: z.string(),
  url: z.string(),
});

export type Work = z.TypeOf<typeof work>;
