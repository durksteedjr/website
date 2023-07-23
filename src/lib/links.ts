import type { Link } from "../types";

export const links = {
  contact: {
    href: "mailto:contact@durksteedjr.com",
    text: "Contact"
  },
  github: {
    href: "https://github.com/durksteedjr",
    text: "GitHub"
  },
  home: { href: "/", text: "Home" },
  instagram: {
    href: "https://instagram.com/durksteedjr",
    text: "Instagram"
  },
  linkedIn: {
    href: "https://linkedin.com/in/durksteedjr",
    text: "LinkedIn"
  },
  posts: {
    href: "/posts",
    text: "Posts"
  },
  prayers: {
    href: "/prayers",
    text: "Prayers"
  },
  robots: { href: "/robots.txt", text: "Robots" },
  sitemap: { href: "/sitemap.xml", text: "Sitemap" },
  work: {
    href: "/work",
    text: "Work"
  }
} satisfies { [K: string]: Link };
