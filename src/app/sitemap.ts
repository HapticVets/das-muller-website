import type { MetadataRoute } from "next";
import { dogProfiles } from "@/lib/dogs";
import { SITE_URL } from "@/lib/seo";
import { trainingServices } from "@/lib/trainingServices";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: SITE_URL,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/apply`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/ai-dog-trainer`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/our-dogs`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    ...dogProfiles.map((dog) => ({
      url: `${SITE_URL}/our-dogs/${dog.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...trainingServices.map((service) => ({
      url: `${SITE_URL}/training/${service.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: service.slug === "evaluation" ? 0.9 : 0.8,
    })),
  ];
}
