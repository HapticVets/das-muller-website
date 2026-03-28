import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Patriot K9 Kennel | German Shepherds",
  description:
    "Patriot K9 Kennel offers purpose-bred German Shepherd puppies, structured placement, and a veteran-driven mission.",
  keywords: [
    "Patriot K9 Kennel",
    "German Shepherd puppies",
    "German Shepherd breeder",
    "working line German Shepherd",
    "puppy application",
    "dog kennel",
  ],
  openGraph: {
    title: "Patriot K9 Kennel | German Shepherds",
    description:
      "Purpose-bred German Shepherd puppies, structured placement, and a veteran-driven mission.",
    url: "https://patriotk9kennel.com",
    siteName: "Patriot K9 Kennel",
    images: [
      {
        url: "/share-image.jpg",
        width: 1200,
        height: 630,
        alt: "Patriot K9 Kennel",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Patriot K9 Kennel | German Shepherds",
    description:
      "Purpose-bred German Shepherd puppies, structured placement, and a veteran-driven mission.",
    images: ["/share-image.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}