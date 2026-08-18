import type { MetadataRoute } from "next";
import { MAIN_SITE_URL, buildMainSiteUrl } from "@/lib/siteDomains";

export default function robots(): MetadataRoute.Robots {
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
    sitemap: buildMainSiteUrl("/sitemap.xml"),
    host: MAIN_SITE_URL,
  };
}
