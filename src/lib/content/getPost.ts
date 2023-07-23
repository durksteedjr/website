import { getPosts } from "./getPosts";

export const getPost = (slug: string) =>
  getPosts().find((post) => post.slug === slug);
