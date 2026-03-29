import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Das Müller German Shepherds",
  description:
    "Purpose-bred German Shepherds, structured placement, and a veteran-driven mission.",
  openGraph: {
    title: "Das Müller German Shepherds",
    description:
      "Purpose-bred German Shepherds, structured placement, and a veteran-driven mission.",
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
    title: "Das Müller German Shepherds",
    description:
      "Purpose-bred German Shepherds, structured placement, and a veteran-driven mission.",
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