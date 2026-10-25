import type { Metadata } from "next";
import { buildBusinessJsonLd, toJsonLd } from "@/lib/seo";
import HomePageClient from "@/components/HomePageClient";

export const metadata: Metadata = {
  title: "German Shepherd Breeding & Dog Training",
  description:
    "German Shepherd breeding and professional dog training based in Leetonia, Ohio, serving clients throughout Ohio and the surrounding tri-state region.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Patriot K9 Command",
    description:
      "German Shepherd breeding and professional dog training based in Leetonia, Ohio, serving clients throughout Ohio and the surrounding tri-state region.",
    url: "/",
    images: [
      {
        url: "/images/branding/og-image.jpg",
        width: 1358,
        height: 1159,
        alt: "Patriot K9 Command German Shepherd breeding and training",
      },
    ],
  },
  twitter: {
    title: "Patriot K9 Command",
    description:
      "German Shepherd breeding and professional dog training based in Leetonia, Ohio, serving clients throughout Ohio and the surrounding tri-state region.",
    images: ["/images/branding/og-image.jpg"],
  },
};

export default function Home() {
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{__html:toJsonLd(buildBusinessJsonLd())}}/><HomePageClient /></>;
}
