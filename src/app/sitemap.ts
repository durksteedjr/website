import { getPosts, getPrayers, links, metadata } from "../lib";

const sitemap = () =>
  [
    links.home.href,
    links.posts.href,
    ...getPosts().map((post) => `/posts/${post.slug}`),
    links.prayers.href,
    ...getPrayers().map((prayer) => `/prayers/${prayer.slug}`),
    links.work.href
  ].map((route) => ({
    url: `${metadata.openGraph?.url}${route}`,
    lastModified: new Date().toISOString().split("T")[0]
  }));

export default sitemap;
