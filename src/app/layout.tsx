import type { Metadata } from "next";
import "./globals.css";

// Merge Agent: approved SEO metadata updates.

export const metadata: Metadata = {
  title: "Das Muller German Shepherds | Structured Training and Puppy Placement",
  description:
    "Purpose-bred German Shepherds, structured puppy placement, and training support for serious homes.",
  openGraph: {
    title: "Das Muller German Shepherds | Structured Training and Puppy Placement",
    description:
      "Purpose-bred German Shepherds, structured puppy placement, and training support for serious homes.",
    url: "https://patriotk9kennel.com",
    siteName: "Das Müller German Shepherds",
    images: [
      {
        url: "/share-image.jpg",
        width: 1200,
        height: 630,
        alt: "Das Müller German Shepherds",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Das Muller German Shepherds | Structured Training and Puppy Placement",
    description:
      "Purpose-bred German Shepherds, structured puppy placement, and training support for serious homes.",
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