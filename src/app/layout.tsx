import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://patriotk9kennel.com"),
  manifest: "/site.webmanifest",
  title: {
    default: "Patriot K9 Command",
    template: "%s | Patriot K9 Command",
  },
  description:
    "German Shepherd breeding and professional dog training based in Leetonia, Ohio, serving clients throughout Ohio and the surrounding tri-state region.",
  openGraph: {
    title: "Patriot K9 Command",
    description:
      "German Shepherd breeding and professional dog training based in Leetonia, Ohio, serving clients throughout Ohio and the surrounding tri-state region.",
    url: "/",
    siteName: "Patriot K9 Command",
    images: [
      {
        url: "/images/branding/og-image.jpg",
        width: 1358,
        height: 1159,
        alt: "Patriot K9 Command German Shepherd breeding and training",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Patriot K9 Command",
    description:
      "German Shepherd breeding and professional dog training based in Leetonia, Ohio, serving clients throughout Ohio and the surrounding tri-state region.",
    images: ["/images/branding/og-image.jpg"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
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
