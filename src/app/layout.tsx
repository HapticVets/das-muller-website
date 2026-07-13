import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://patriotk9kennel.com"),
  title:
    "Patriot K9 Command | German Shepherd Breeding and Structured Training",
  description:
    "Purpose-raised German Shepherd puppies, structured puppy placement, and practical in-person training for serious homes in Leetonia, Ohio.",
  openGraph: {
    title:
      "Patriot K9 Command | German Shepherd Breeding and Structured Training",
    description:
      "Purpose-raised German Shepherd puppies, structured puppy placement, and practical in-person training for serious homes in Leetonia, Ohio.",
    url: "https://patriotk9kennel.com",
    siteName: "Patriot K9 Command",
    images: [
      {
        url: "/share-image.jpg",
        width: 1200,
        height: 630,
        alt: "Patriot K9 Command",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Patriot K9 Command | German Shepherd Breeding and Structured Training",
    description:
      "Purpose-raised German Shepherd puppies, structured puppy placement, and practical in-person training for serious homes in Leetonia, Ohio.",
    images: ["/share-image.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
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
