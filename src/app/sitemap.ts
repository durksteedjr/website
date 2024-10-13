import { links, metadata } from "../lib";
import { getPrayers, getTravels } from "../utils";

const sitemap = async () =>
  [
    links.home.href,
    links.prayers.href,
    ...(await getPrayers()).map((prayer) => `/prayers/${prayer.slug}`),
    links.travel.href,
    ...(await getTravels()).map((travel) => `/travel/${travel.slug}`),
    links.work.href,
  ].map((route) => ({
    url: `${metadata.openGraph?.url}${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

export default sitemap;
