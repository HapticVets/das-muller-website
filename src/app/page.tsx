import type { Metadata } from "next";
import HomePageClient from "@/components/HomePageClient";

export const metadata: Metadata = {
  title:
    "Patriot K9 Command | German Shepherd Breeding and Structured Training",
  description:
    "Patriot K9 Command provides purpose-raised German Shepherd puppies, puppy placement, and structured in-person dog training in Leetonia, Ohio.",
};

export default function Home() {
  return <HomePageClient />;
}
