import { prayerWithSlug } from "../../types";
import { getSortedArray } from "../getSortedArray";
import { readdirSync } from "fs";
import { join } from "path";

export const getPrayers = async () => {
  const slugs = readdirSync(join(process.cwd(), "./src/app/prayers"), {
    withFileTypes: true,
  }).filter((value) => value.isDirectory());

  const prayers = await Promise.all(
    slugs.map(async ({ name }) =>
      prayerWithSlug.parse({
        ...(await import(`../../app/prayers/${name}/page.mdx`)).metadata,
        slug: name,
      }),
    ),
  );

  return getSortedArray({ array: prayers, key: "title" });
};
