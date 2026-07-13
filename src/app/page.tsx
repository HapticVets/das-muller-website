import type { Metadata } from "next";
import HomePageClient from "@/components/HomePageClient";

export const metadata: Metadata = {
  title: "German Shepherd Breeding & Dog Training",
  description:
    "German Shepherd breeding and professional dog training in Leetonia, Ohio.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Patriot K9 Command",
    description:
      "German Shepherd breeding and professional dog training in Leetonia, Ohio.",
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
      "German Shepherd breeding and professional dog training in Leetonia, Ohio.",
    images: ["/images/branding/og-image.jpg"],
  },
};

export default function Home() {
  return <HomePageClient />;
}
