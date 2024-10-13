import { BASE_URL, DESCRIPTION, TITLE } from "./constants";
import type { Metadata } from "next";

export const metadata: Metadata = {
  description: DESCRIPTION,
  metadataBase: new URL(BASE_URL),
  title: {
    default: TITLE,
    template: "%s | Durk Steed Jr.",
  },
  openGraph: {
    description: DESCRIPTION,
    images: [
      {
        height: 1080,
        url: "/og.png",
        width: 1920,
      },
    ],
    locale: "en-US",
    siteName: TITLE,
    title: TITLE,
    type: "website",
    url: BASE_URL,
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
  },
  icons: {
    shortcut: "/favicon.ico",
  },
};
