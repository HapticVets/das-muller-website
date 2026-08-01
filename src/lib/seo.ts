import type { TrainingService } from "@/lib/trainingServices";

export const SITE_URL = "https://www.patriotk9kennel.com";
export const SITE_NAME = "Patriot K9 Command";
export const SITE_DESCRIPTION =
  "German Shepherd breeding and professional dog training based in Leetonia, Ohio, serving clients throughout Ohio and the surrounding tri-state region.";
export const OG_IMAGE_PATH = "/images/branding/og-image.jpg";
export const OG_IMAGE_URL = `${SITE_URL}${OG_IMAGE_PATH}`;
export const LOGO_PATH = "/logos/das-muller-icon.png";
export const LOGO_URL = `${SITE_URL}${LOGO_PATH}`;
export const CONTACT_EMAIL = "jreese@hapticvets.com";
export const CONTACT_PHONE = "+1-813-299-6905";
export const CONTACT_PHONE_DISPLAY = "(813) 299-6905";
export const STREET_ADDRESS = "4277 Lisbon Rd";
export const ADDRESS_LOCALITY = "Leetonia";
export const ADDRESS_REGION = "OH";
export const POSTAL_CODE = "44431";
export const ADDRESS_COUNTRY = "US";
export const SERVICE_AREA_TEXT = "Ohio and the surrounding tri-state region";

type OfferShape = {
  "@type": "Offer";
  name?: string;
  description?: string;
  price?: string;
  priceCurrency?: "USD";
  url: string;
};

function normalizeSeoText(text: string) {
  return text
    .replaceAll("â€™", "'")
    .replaceAll("â€”", "-")
    .replaceAll("Â", "")
    .trim();
}

export function toJsonLd(data: unknown) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

export function getTrainingMetadata(service: TrainingService) {
  const metadataBySlug: Record<
    TrainingService["slug"],
    { title: string; description: string }
  > = {
    evaluation: {
      title: "Dog Training Evaluation in Leetonia, Ohio",
      description:
        "Structured dog training evaluation in Leetonia, Ohio to identify behavior, obedience gaps, owner goals, and the right next training step.",
    },
    "puppy-foundation": {
      title: "Puppy Foundation Training in Leetonia, Ohio",
      description:
        "Early puppy foundation training in Leetonia, Ohio focused on routines, manners, engagement, confidence, and foundational obedience.",
    },
    "private-lessons": {
      title: "Private Dog Training Lessons in Leetonia, Ohio",
      description:
        "Private dog training lessons in Leetonia, Ohio for owners who want hands-on coaching, better leash handling, obedience, and homework between sessions.",
    },
    "day-training": {
      title: "Day Training for Dogs in Leetonia, Ohio",
      description:
        "Structured day training in Leetonia, Ohio for dogs that need more repetition, calm behavior, leash manners, and supervised progress without overnight boarding.",
    },
    "board-and-train": {
      title: "Board & Train for Dogs in Leetonia, Ohio",
      description:
        "Board and train in Leetonia, Ohio for dogs that need immersive daily structure, obedience work, calmer behavior, and owner handoff support.",
    },
    "behavior-modification": {
      title: "Behavior Modification Dog Training in Leetonia, Ohio",
      description:
        "Behavior modification dog training in Leetonia, Ohio for reactivity, fear, impulse issues, overexcitement, and unsafe habits requiring structured work.",
    },
    "service-dog-foundations": {
      title: "Service Dog Foundations Training in Leetonia, Ohio",
      description:
        "Service dog foundations training in Leetonia, Ohio focused on obedience reliability, public neutrality, handler focus, and realistic suitability assessment.",
    },
  };

  return metadataBySlug[service.slug];
}

function getServiceOffers(
  service: TrainingService
): OfferShape | OfferShape[] | undefined {
  const url = `${SITE_URL}/training/${service.slug}`;

  switch (service.slug) {
    case "evaluation":
      return {
        "@type": "Offer",
        name: "Evaluation",
        price: "100",
        priceCurrency: "USD",
        url,
      };
    case "puppy-foundation":
      return {
        "@type": "Offer",
        name: "Puppy Foundation - 4 Sessions",
        price: "600",
        priceCurrency: "USD",
        url,
      };
    case "private-lessons":
      return [
        {
          "@type": "Offer",
          name: "Private Lesson - Single Session",
          price: "120",
          priceCurrency: "USD",
          url,
        },
        {
          "@type": "Offer",
          name: "Private Lessons - 6 Sessions",
          price: "700",
          priceCurrency: "USD",
          url,
        },
        {
          "@type": "Offer",
          name: "Private Lessons - 12 Sessions",
          price: "1200",
          priceCurrency: "USD",
          url,
        },
      ];
    case "day-training":
      return [
        {
          "@type": "Offer",
          name: "Day Training - Single Day",
          price: "80",
          priceCurrency: "USD",
          url,
        },
        {
          "@type": "Offer",
          name: "Day Training - 10 Days",
          price: "750",
          priceCurrency: "USD",
          url,
        },
        {
          "@type": "Offer",
          name: "Day Training - 12 Days",
          price: "900",
          priceCurrency: "USD",
          url,
        },
      ];
    case "board-and-train":
      return [
        {
          "@type": "Offer",
          name: "Board & Train - 2 Weeks",
          price: "2200",
          priceCurrency: "USD",
          url,
        },
        {
          "@type": "Offer",
          name: "Board & Train - 4 Weeks",
          price: "3800",
          priceCurrency: "USD",
          url,
        },
        {
          "@type": "Offer",
          name: "Board & Train - 6 Weeks",
          price: "5500",
          priceCurrency: "USD",
          url,
        },
      ];
    case "behavior-modification":
      return {
        "@type": "Offer",
        name: "Behavior Modification",
        description:
          "Starts with evaluation. Final pricing depends on severity, risk level, and training plan.",
        url,
      };
    case "service-dog-foundations":
      return {
        "@type": "Offer",
        name: "Service Dog Foundations",
        description: "Starts at $2,500+",
        url,
      };
    default:
      return undefined;
  }
}

export function buildBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: SITE_NAME,
        description: SITE_DESCRIPTION,
        publisher: {
          "@id": `${SITE_URL}/#organization`,
        },
      },
      {
        "@type": "Organization",
        "@id": `${SITE_URL}/#organization`,
        name: SITE_NAME,
        url: SITE_URL,
        logo: LOGO_URL,
        image: OG_IMAGE_URL,
        description: SITE_DESCRIPTION,
        email: CONTACT_EMAIL,
        telephone: CONTACT_PHONE,
      },
      {
        "@type": "LocalBusiness",
        "@id": `${SITE_URL}/#localbusiness`,
        name: SITE_NAME,
        url: SITE_URL,
        logo: LOGO_URL,
        image: OG_IMAGE_URL,
        description: SITE_DESCRIPTION,
        email: CONTACT_EMAIL,
        telephone: CONTACT_PHONE,
        address: {
          "@type": "PostalAddress",
          streetAddress: STREET_ADDRESS,
          addressLocality: ADDRESS_LOCALITY,
          addressRegion: ADDRESS_REGION,
          postalCode: POSTAL_CODE,
          addressCountry: ADDRESS_COUNTRY,
        },
        areaServed: {
          "@type": "Place",
          name: SERVICE_AREA_TEXT,
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Patriot K9 Command Services",
          itemListElement: [
            {
              "@type": "OfferCatalog",
              name: "German Shepherd Puppies",
              url: `${SITE_URL}/apply`,
            },
            {
              "@type": "OfferCatalog",
              name: "Private Dog Training",
              url: `${SITE_URL}/training/private-lessons`,
            },
            {
              "@type": "OfferCatalog",
              name: "Board & Train",
              url: `${SITE_URL}/training/board-and-train`,
            },
            {
              "@type": "OfferCatalog",
              name: "Puppy Foundation Training",
              url: `${SITE_URL}/training/puppy-foundation`,
            },
            {
              "@type": "OfferCatalog",
              name: "Behavior Modification",
              url: `${SITE_URL}/training/behavior-modification`,
            },
            {
              "@type": "OfferCatalog",
              name: "Day Training",
              url: `${SITE_URL}/training/day-training`,
            },
            {
              "@type": "OfferCatalog",
              name: "Service Dog Foundations",
              url: `${SITE_URL}/training/service-dog-foundations`,
            },
          ],
        },
      },
    ],
  };
}

export function buildTrainingServiceJsonLd(service: TrainingService) {
  const normalizedPurpose = normalizeSeoText(service.purpose);
  const normalizedShortDescription = normalizeSeoText(service.shortDescription);
  const normalizedPrice = normalizeSeoText(service.price);
  const serviceUrl = `${SITE_URL}/training/${service.slug}`;

  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${serviceUrl}#service`,
    name: `${service.title} | ${SITE_NAME}`,
    serviceType: service.title,
    description: `${normalizedShortDescription} ${normalizedPurpose}`.trim(),
    url: serviceUrl,
    provider: {
      "@id": `${SITE_URL}/#localbusiness`,
    },
    areaServed: {
      "@type": "Place",
      name: SERVICE_AREA_TEXT,
    },
    offers:
      getServiceOffers(service) ??
      ({
        "@type": "Offer",
        description: normalizedPrice,
        url: serviceUrl,
      } satisfies OfferShape),
  };
}
