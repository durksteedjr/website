import { PrayerWithSlug } from "../../types";
import { getPrayers } from "./getPrayers";

export type GetPrayerProps = {
  slug: PrayerWithSlug["slug"];
};

export const getPrayer = async ({ slug }: GetPrayerProps) =>
  (await getPrayers()).find((prayer) => prayer.slug === slug);
