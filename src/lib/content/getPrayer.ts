import { getPrayers } from "./getPrayers";

export const getPrayer = (slug: string) =>
  getPrayers().find((prayer) => prayer.slug === slug);
