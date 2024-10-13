import { z } from "zod";

export const staticImageData = z.object({
  blurDataURL: z.string().optional(),
  blurHeight: z.number().optional(),
  blurWidth: z.number().optional(),
  height: z.number(),
  src: z.string(),
  width: z.number(),
});

export type StaticImageData = z.TypeOf<typeof staticImageData>;
