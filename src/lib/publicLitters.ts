import { dogProfiles } from "@/lib/dogs";
import { SITE_URL } from "@/lib/seo";
import { ONLINE_TRAINING_APP_URL } from "@/lib/siteUrls";

export const PUBLIC_LITTERS_REVALIDATE_SECONDS = 60;
const PUBLIC_LITTERS_API_URL = `${ONLINE_TRAINING_APP_URL}/api/public/litters`;

export type PublicMediaType = "image" | "video";

export type PublicMediaItem = {
  url: string;
  altText: string;
  type: PublicMediaType;
};

export type PublicDevelopmentEntry = {
  weekLabel: string;
  title: string;
  summary: string;
  media: PublicMediaItem[];
};

export type PublicPuppy = {
  slug: string;
  publicName: string;
  collarColor?: string;
  sex?: string;
  color?: string;
  status: string;
  price?: string;
  summary?: string;
  primaryPhoto?: PublicMediaItem;
  development: PublicDevelopmentEntry[];
};

export type PublicLitter = {
  slug: string;
  title: string;
  sire?: string;
  dam?: string;
  status: string;
  birthDate?: string;
  goHomeDate?: string;
  availablePuppyCount?: number;
  summary?: string;
  coverImage?: PublicMediaItem;
  puppies: PublicPuppy[];
};

type FetchResult<T> = {
  data: T;
  error: boolean;
  notFound?: boolean;
};

type UnknownRecord = Record<string, unknown>;

function isPresent<T>(value: T | null | undefined): value is T {
  return value !== null && value !== undefined;
}

function asRecord(value: unknown): UnknownRecord | null {
  return value && typeof value === "object" && !Array.isArray(value)
    ? (value as UnknownRecord)
    : null;
}

function getArray(record: UnknownRecord | null, keys: string[]) {
  if (!record) {
    return [];
  }

  for (const key of keys) {
    const value = record[key];

    if (Array.isArray(value)) {
      return value;
    }
  }

  return [];
}

function getString(record: UnknownRecord | null, keys: string[]) {
  if (!record) {
    return undefined;
  }

  for (const key of keys) {
    const value = record[key];

    if (typeof value === "string") {
      const trimmed = value.trim();

      if (trimmed) {
        return trimmed;
      }
    }

    if (typeof value === "number" && Number.isFinite(value)) {
      return String(value);
    }
  }

  return undefined;
}

function getNumber(record: UnknownRecord | null, keys: string[]) {
  if (!record) {
    return undefined;
  }

  for (const key of keys) {
    const value = record[key];

    if (typeof value === "number" && Number.isFinite(value)) {
      return value;
    }

    if (typeof value === "string") {
      const parsed = Number(value);

      if (Number.isFinite(parsed)) {
        return parsed;
      }
    }
  }

  return undefined;
}

function getRecord(record: UnknownRecord | null, keys: string[]) {
  if (!record) {
    return null;
  }

  for (const key of keys) {
    const value = asRecord(record[key]);

    if (value) {
      return value;
    }
  }

  return null;
}

function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function inferMediaType(url: string): PublicMediaType {
  return /\.(mp4|mov|webm|m4v|ogg)(\?|#|$)/i.test(url) ? "video" : "image";
}

function normalizeStatus(value?: string) {
  if (!value) {
    return "Unknown";
  }

  const key = value.toLowerCase().replace(/[_-]+/g, " ").trim();
  const knownStatuses: Record<string, string> = {
    planned: "Planned",
    expected: "Expected",
    born: "Born",
    "accepting applications": "Accepting Applications",
    available: "Available",
    "fully reserved": "Fully Reserved",
    placed: "Placed",
    archived: "Archived",
    reserved: "Reserved",
    retained: "Retained",
    "not yet available": "Not Yet Available",
  };

  return knownStatuses[key] ?? value;
}

function normalizeMediaItem(value: unknown): PublicMediaItem | null {
  if (typeof value === "string") {
    const trimmed = value.trim();

    return trimmed
      ? {
          url: trimmed,
          altText: "Patriot K9 public litter media",
          type: inferMediaType(trimmed),
        }
      : null;
  }

  const record = asRecord(value);

  if (!record) {
    return null;
  }

  const url = getString(record, [
    "url",
    "src",
    "publicUrl",
    "public_url",
    "signedUrl",
    "signed_url",
    "fileUrl",
    "file_url",
    "imageUrl",
    "image_url",
    "videoUrl",
    "video_url",
  ]);

  if (!url) {
    return null;
  }

  const typeValue = getString(record, ["type", "mediaType", "media_type"]);
  const inferredType =
    typeValue?.toLowerCase() === "video" || typeValue?.toLowerCase() === "image"
      ? (typeValue.toLowerCase() as PublicMediaType)
      : inferMediaType(url);

  return {
    url,
    altText:
      getString(record, ["altText", "alt_text", "alt", "caption", "title"]) ??
      "Patriot K9 public litter media",
    type: inferredType,
  };
}

function normalizeMediaList(record: UnknownRecord | null, keys: string[]) {
  const directMedia = getArray(record, keys)
    .map((item) => normalizeMediaItem(item))
    .filter((item): item is PublicMediaItem => Boolean(item));

  if (directMedia.length > 0) {
    return directMedia;
  }

  const images = getArray(record, ["images", "photos", "gallery"]).map((item) =>
    normalizeMediaItem(item)
  );
  const videos = getArray(record, ["videos"]).map((item) => normalizeMediaItem(item));

  return [...images, ...videos].filter(
    (item): item is PublicMediaItem => Boolean(item)
  );
}

function normalizeDevelopmentEntry(
  value: unknown,
  index: number
): PublicDevelopmentEntry | null {
  const record = asRecord(value);

  if (!record) {
    return null;
  }

  const weekValue = getString(record, [
    "weekLabel",
    "week_label",
    "week",
    "label",
    "title",
  ]);
  const summary = getString(record, [
    "summary",
    "publicSummary",
    "public_summary",
    "description",
    "body",
    "notes",
  ]);

  if (!weekValue && !summary) {
    return null;
  }

  const normalizedWeek =
    weekValue && /^week\s+/i.test(weekValue) ? weekValue : `Week ${weekValue ?? index + 1}`;

  return {
    weekLabel: normalizedWeek,
    title:
      getString(record, ["heading", "title", "name"]) ?? "Development Update",
    summary: summary ?? "Updated development notes will be shared here when available.",
    media: normalizeMediaList(record, [
      "media",
      "publicMedia",
      "public_media",
      "attachments",
    ]),
  } satisfies PublicDevelopmentEntry;
}

function normalizePuppy(value: unknown): PublicPuppy | null {
  const record = asRecord(value);

  if (!record) {
    return null;
  }

  const publicName =
    getString(record, ["publicName", "public_name", "name", "title"]) ??
    "Unnamed Puppy";
  const collarColor = getString(record, [
    "collarColor",
    "collar_color",
    "collar",
    "collarName",
    "collar_name",
  ]);

  const primaryPhoto =
    normalizeMediaItem(
      getRecord(record, [
        "primaryPhoto",
        "primary_photo",
        "publicPrimaryPhoto",
        "public_primary_photo",
        "coverImage",
        "cover_image",
      ])
    ) ?? normalizeMediaList(record, ["media", "publicMedia", "public_media"])[0];

  return {
    slug:
      getString(record, ["slug", "publicSlug", "public_slug"]) ??
      slugify(`${publicName}-${collarColor ?? "puppy"}`),
    publicName,
    collarColor,
    sex: getString(record, ["sex", "gender"]),
    color: getString(record, ["color", "publicColor", "public_color"]),
    status: normalizeStatus(
      getString(record, ["status", "publicStatus", "public_status"])
    ),
    price: getString(record, ["price", "publicPrice", "public_price"]),
    summary: getString(record, [
      "summary",
      "publicSummary",
      "public_summary",
      "description",
      "shortSummary",
      "short_summary",
    ]),
    primaryPhoto,
    development: getArray(record, [
      "developmentTimeline",
      "development_timeline",
      "weeklyUpdates",
      "weekly_updates",
      "publicDevelopment",
      "public_development",
      "updates",
    ])
      .map((entry, index) => normalizeDevelopmentEntry(entry, index))
      .filter((entry): entry is PublicDevelopmentEntry => Boolean(entry)),
  } satisfies PublicPuppy;
}

function normalizeLitter(value: unknown): PublicLitter | null {
  const record = asRecord(value);

  if (!record) {
    return null;
  }

  const title =
    getString(record, ["title", "publicTitle", "public_title", "name"]) ??
    "Patriot K9 Litter";
  const puppies = getArray(record, [
    "puppies",
    "publicPuppies",
    "public_puppies",
    "publishedPuppies",
    "published_puppies",
  ])
    .map((puppy) => normalizePuppy(puppy))
    .filter(isPresent);
  const coverImage =
    normalizeMediaItem(
      getRecord(record, [
        "coverImage",
        "cover_image",
        "heroImage",
        "hero_image",
        "publicImage",
        "public_image",
        "featuredImage",
        "featured_image",
      ])
    ) ??
    normalizeMediaList(record, [
      "media",
      "publicMedia",
      "public_media",
      "gallery",
      "images",
    ])[0];

  return {
    slug: getString(record, ["slug", "publicSlug", "public_slug"]) ?? slugify(title),
    title,
    sire: getString(record, ["sire", "sireName", "sire_name"]),
    dam: getString(record, ["dam", "damName", "dam_name"]),
    status: normalizeStatus(
      getString(record, ["status", "publicStatus", "public_status"])
    ),
    birthDate: getString(record, [
      "birthDate",
      "birth_date",
      "dateOfBirth",
      "date_of_birth",
      "whelpDate",
      "whelp_date",
    ]),
    goHomeDate: getString(record, [
      "goHomeDate",
      "go_home_date",
      "expectedGoHomeDate",
      "expected_go_home_date",
      "estimatedGoHomeDate",
      "estimated_go_home_date",
    ]),
    availablePuppyCount:
      getNumber(record, [
        "availablePuppyCount",
        "available_puppy_count",
        "availableCount",
        "available_count",
      ]) ?? puppies.filter((puppy) => puppy.status === "Available").length,
    summary: getString(record, [
      "summary",
      "publicSummary",
      "public_summary",
      "description",
      "shortSummary",
      "short_summary",
    ]),
    coverImage,
    puppies,
  } satisfies PublicLitter;
}

async function fetchPublicJson(url: string) {
  const response = await fetch(url, {
    headers: {
      Accept: "application/json",
    },
    next: {
      revalidate: PUBLIC_LITTERS_REVALIDATE_SECONDS,
    },
  });

  if (response.status === 404) {
    return {
      json: null,
      notFound: true,
    };
  }

  if (!response.ok) {
    throw new Error(`Public litter API request failed with ${response.status}`);
  }

  return {
    json: (await response.json()) as unknown,
    notFound: false,
  };
}

export async function fetchPublicLitters(): Promise<
  FetchResult<PublicLitter[]>
> {
  try {
    const { json } = await fetchPublicJson(PUBLIC_LITTERS_API_URL);
    const record = asRecord(json);
    const litterValues = Array.isArray(json)
      ? json
      : getArray(record, ["litters", "data", "results"]);

    return {
      data: litterValues
        .map((value) => normalizeLitter(value))
        .filter(isPresent),
      error: false,
    };
  } catch (error) {
    console.error("[PublicLitters] failed to load litter list", error);

    return {
      data: [],
      error: true,
    };
  }
}

export async function fetchPublicLitter(
  slug: string
): Promise<FetchResult<PublicLitter | null>> {
  try {
    const { json, notFound } = await fetchPublicJson(
      `${PUBLIC_LITTERS_API_URL}/${encodeURIComponent(slug)}`
    );

    if (notFound) {
      return {
        data: null,
        error: false,
        notFound: true,
      };
    }

    const record = asRecord(json);
    const litter =
      normalizeLitter(getRecord(record, ["litter", "data"]) ?? json) ?? null;

    return {
      data: litter,
      error: false,
      notFound: !litter,
    };
  } catch (error) {
    console.error("[PublicLitters] failed to load litter detail", error);

    return {
      data: null,
      error: true,
      notFound: false,
    };
  }
}

export function formatPublicDate(value?: string) {
  if (!value) {
    return undefined;
  }

  const parsed = new Date(value);

  if (Number.isNaN(parsed.getTime())) {
    return value;
  }

  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(parsed);
}

function normalizeName(value?: string) {
  return value?.toLowerCase().replace(/[^a-z0-9]+/g, " ").trim() ?? "";
}

export function getDogProfileHref(name?: string) {
  if (!name) {
    return undefined;
  }

  const normalizedName = normalizeName(name);

  const dog = dogProfiles.find((profile) => {
    const names = [
      profile.name,
      profile.registeredName,
      profile.slug.replaceAll("-", " "),
    ].filter(Boolean);

    return names.some((candidate) => normalizeName(candidate) === normalizedName);
  });

  return dog ? `/our-dogs/${dog.slug}` : undefined;
}

export function buildLitterPageUrl(slug: string) {
  return `${SITE_URL}/litters/${slug}`;
}

export function buildPuppyApplicationHref(litter: PublicLitter, puppy?: PublicPuppy) {
  const params = new URLSearchParams({
    litter: litter.slug,
  });

  if (puppy?.slug) {
    params.set("puppy", puppy.slug);
  }

  if (puppy?.publicName) {
    params.set("name", puppy.publicName);
  }

  return `/apply?${params.toString()}`;
}
