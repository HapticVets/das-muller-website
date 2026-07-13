import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://patriotk9kennel.com"),
  title: {
    default: "Patriot K9 Command",
    template: "%s | Patriot K9 Command",
  },
  description:
    "German Shepherd breeding and professional dog training in Leetonia, Ohio.",
  openGraph: {
    title: "Patriot K9 Command",
    description:
      "German Shepherd breeding and professional dog training in Leetonia, Ohio.",
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
      "German Shepherd breeding and professional dog training in Leetonia, Ohio.",
    images: ["/images/branding/og-image.jpg"],
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
