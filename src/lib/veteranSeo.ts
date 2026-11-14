import type { Metadata } from "next";
import { VETERAN_SITE_URL, buildVeteranSiteUrl } from "@/lib/siteDomains";

export const VETERAN_SITE_NAME = "Haptic Veteran Outreach";
export const VETERAN_SITE_DESCRIPTION =
  "Haptic Veteran Outreach is an Ohio nonprofit developing veteran connection, practical resources, shared adventures, and future skills workshops.";
export const VETERAN_OG_IMAGE_PATH =
  "/images/veterans/branding/haptic-veteran-outreach-preview-v1.png";

type VeteranMetadataOptions = {
  title: string;
  description?: string;
  path?: string;
  imagePath?: string;
  imageAlt?: string;
};

export function buildVeteranMetadata({
  title,
  description = VETERAN_SITE_DESCRIPTION,
  path = "/",
  imagePath = VETERAN_OG_IMAGE_PATH,
  imageAlt = "Haptic Veteran Outreach",
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
          url: imagePath,
          width: 1734,
          height: 907,
          alt: imageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imagePath],
    },
  };
}

export const veteranMetadataBase = new URL(VETERAN_SITE_URL);
