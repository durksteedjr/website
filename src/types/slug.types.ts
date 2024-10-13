import { z } from "zod";

export const slug = z.object({
  slug: z.string(),
});

export type Slug = z.TypeOf<typeof slug>;
