import type { Metadata } from "next";

const description = "Catholic, Holistic";
const title = "Durk Steed Jr. (@durksteedjr)";
const url = "https://durksteedjr.com";

export const metadata: Metadata = {
  description,
  metadataBase: new URL(url),
  title: {
    default: title,
    template: "%s | Durk Steed Jr."
  },
  openGraph: {
    description,
    images: [
      {
        height: 1080,
        url: "/og.png",
        width: 1920
      }
    ],
    locale: "en-US",
    siteName: title,
    title,
    type: "website",
    url
  },
  robots: {
    index: true,
    follow: true
  },
  twitter: {
    card: "summary_large_image",
    title
  },
  icons: {
    shortcut: "/favicon.ico"
  }
};
