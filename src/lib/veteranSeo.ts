import type { Metadata } from "next";
import { OG_IMAGE_PATH } from "@/lib/seo";
import { VETERAN_SITE_URL, buildVeteranSiteUrl } from "@/lib/siteDomains";

export const VETERAN_SITE_NAME = "Patriot K9 Command Veteran Outreach";
export const VETERAN_SITE_DESCRIPTION =
  "Veteran outreach information from Patriot K9 Command.";

type VeteranMetadataOptions = {
  title: string;
  description?: string;
  path?: string;
};

export function buildVeteranMetadata({
  title,
  description = VETERAN_SITE_DESCRIPTION,
  path = "/",
}: VeteranMetadataOptions): Metadata {
  const canonicalUrl = buildVeteranSiteUrl(path);

  return {
    title: {
      absolute: title,
    },
    description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: VETERAN_SITE_NAME,
      type: "website",
      images: [
        {
          url: OG_IMAGE_PATH,
          width: 1358,
          height: 1159,
          alt: "Patriot K9 Command Veteran Outreach",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [OG_IMAGE_PATH],
    },
  };
}

export const veteranMetadataBase = new URL(VETERAN_SITE_URL);
