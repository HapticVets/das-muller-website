import type { Metadata } from "next";
import Script from "next/script";
import {
  OG_IMAGE_PATH,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_URL,
  buildBusinessJsonLd,
  toJsonLd,
} from "@/lib/seo";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  manifest: "/site.webmanifest",
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    url: "/",
    siteName: SITE_NAME,
    images: [
      {
        url: OG_IMAGE_PATH,
        width: 1358,
        height: 1159,
        alt: `${SITE_NAME} German Shepherd breeding and training`,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    images: [OG_IMAGE_PATH],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: toJsonLd(buildBusinessJsonLd()) }}
        />
        <Script
          id="google-ads-base-tag"
          src="https://www.googletagmanager.com/gtag/js?id=AW-18273570871"
          strategy="afterInteractive"
        />
        <Script id="google-ads-base-tag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-18273570871');
          `}
        </Script>
      </body>
    </html>
  );
}
