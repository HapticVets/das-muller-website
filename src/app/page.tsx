import type { Metadata } from "next";
import HomePageClient from "@/components/HomePageClient";

export const metadata: Metadata = {
  title: "Das Muller German Shepherds | Structured Training and Puppy Placement",
  description:
    "Purpose-bred German Shepherds, structured puppy placement, and training support for serious homes.",
};

export default function Home() {
  return <HomePageClient />;
}
