import type { MetadataRoute } from "next";
import { headers } from "next/headers";
import { isVeteranHostname } from "@/lib/veteranRouting";
import { VETERAN_SITE_URL } from "@/lib/siteDomains";
import { MAIN_SITE_URL } from "@/lib/siteDomains";

export default async function robots(): Promise<MetadataRoute.Robots> {
  const h = await headers();
  const site = isVeteranHostname(h.get("x-forwarded-host") ?? h.get("host")) ? VETERAN_SITE_URL : MAIN_SITE_URL;
  return {
    rules: [
      {
        userAgent: "Googlebot",
        allow: "/",
        disallow: "/api/",
      },
      {
        userAgent: "Bingbot",
        allow: "/",
        disallow: "/api/",
      },
      {
        userAgent: "OAI-SearchBot",
        allow: "/",
        disallow: "/api/",
      },
      {
        userAgent: "*",
        allow: "/",
        disallow: "/api/",
      },
    ],
    sitemap: `${site}/sitemap.xml`,
    host: site,
  };
}
