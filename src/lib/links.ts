import type { Link } from "../types";

export const links = {
  contact: {
    href: "mailto:contact@durksteedjr.com",
    text: "Contact",
  },
  docs: {
    href: "/docs",
    text: "Documentation",
  },
  github: {
    href: "https://github.com/durksteedjr",
    text: "GitHub",
  },
  home: { href: "/", text: "Home" },
  instagram: {
    href: "https://instagram.com/durksteedjr",
    text: "Instagram",
  },
  linkedIn: {
    href: "https://linkedin.com/in/durksteedjr",
    text: "LinkedIn",
  },
  prayers: {
    href: "/prayers",
    text: "Prayers",
  },
  robots: { href: "/robots.txt", text: "Robots" },
  sitemap: { href: "/sitemap.xml", text: "Sitemap" },
  travel: {
    href: "/travel",
    text: "Travel",
  },
  work: {
    href: "/work",
    text: "Work",
  },
} satisfies { [K: string]: Link };
