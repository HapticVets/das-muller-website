import type { Metadata } from "next";
import Script from "next/script";
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
