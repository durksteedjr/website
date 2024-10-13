import { slug } from "./slug.types";
import { z } from "zod";

export const prayer = z.object({
  author: z.string().optional(),
  title: z.string(),
});

export type Prayer = z.TypeOf<typeof prayer>;

export const prayerWithSlug = prayer.merge(slug);

export type PrayerWithSlug = z.TypeOf<typeof prayerWithSlug>;
