import type { MetadataRoute } from "next";
import { dogProfiles } from "@/lib/dogs";
import { fetchPublicLitters } from "@/lib/publicLitters";
import { MAIN_SITE_URL, buildMainSiteUrl } from "@/lib/siteDomains";
import { trainingServices } from "@/lib/trainingServices";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const lastModified = new Date();
  const { data: litters } = await fetchPublicLitters();

  return [
    {
      url: MAIN_SITE_URL,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: buildMainSiteUrl("/apply"),
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: buildMainSiteUrl("/ai-dog-trainer"),
      lastModified,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: buildMainSiteUrl("/our-dogs"),
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    ...dogProfiles.map((dog) => ({
      url: buildMainSiteUrl(`/our-dogs/${dog.slug}`),
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...trainingServices.map((service) => ({
      url: buildMainSiteUrl(`/training/${service.slug}`),
      lastModified,
      changeFrequency: "monthly" as const,
      priority: service.slug === "evaluation" ? 0.9 : 0.8,
    })),
    ...litters.map((litter) => ({
      url: buildMainSiteUrl(`/litters/${litter.slug}`),
      lastModified,
      changeFrequency: "daily" as const,
      priority: 0.85,
    })),
  ];
}
