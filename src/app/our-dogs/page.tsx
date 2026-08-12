import type { Metadata } from "next";
import OurDogsPage from "@/components/dogs/OurDogsPage";
import { OG_IMAGE_PATH } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Our German Shepherds",
  description:
    "Meet the sires and dams behind Patriot K9 Command's German Shepherd breeding program in Leetonia, Ohio.",
  alternates: {
    canonical: "/our-dogs",
  },
  openGraph: {
    title: "Our German Shepherds",
    description:
      "Meet the sires and dams behind Patriot K9 Command's German Shepherd breeding program in Leetonia, Ohio.",
    url: "/our-dogs",
    images: [
      {
        url: OG_IMAGE_PATH,
        width: 1358,
        height: 1159,
        alt: "Patriot K9 Command German Shepherd breeding and training",
      },
    ],
  },
  twitter: {
    title: "Our German Shepherds",
    description:
      "Meet the sires and dams behind Patriot K9 Command's German Shepherd breeding program in Leetonia, Ohio.",
    images: [OG_IMAGE_PATH],
  },
};

export default function OurDogsRoute() {
  return <OurDogsPage />;
}
