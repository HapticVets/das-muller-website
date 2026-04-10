import { NextResponse } from "next/server";

type PuppyListingRow = {
  id: string;
  batch_id: string;
  status: string;
  created_at: string;
  updated_at: string;
  puppy_name: string;
  sex: string;
  age: string;
  litter: string;
  availability: "available" | "reserved" | "sold";
  temperament_notes: string;
  breeder_notes: string;
  price_or_deposit: string | null;
  listing_title: string;
  short_summary: string;
  full_description: string;
  homepage_card_copy: string;
  suggested_slug: string;
};

type PuppyListingImageRow = {
  id: string;
  listing_id: string;
  file_name: string;
  public_url: string;
  alt_text: string;
  created_at: string;
};

const publicStatuses = [
  "approved",
  "ready_for_placement",
  "active_on_site",
  "sold_or_reserved"
];

function getSupabaseRequestConfig() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseKey =
    process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseKey) {
    throw new Error("Supabase puppy listing environment variables are not configured.");
  }

  return {
    supabaseUrl: supabaseUrl.replace(/\/$/, ""),
    headers: {
      apikey: supabaseKey,
      authorization: `Bearer ${supabaseKey}`
    }
  };
}

async function fetchSupabaseJson<T>(url: string, headers: HeadersInit): Promise<T> {
  const response = await fetch(url, {
    headers,
    cache: "no-store"
  });

  if (!response.ok) {
    throw new Error(`Supabase request failed with ${response.status}`);
  }

  return (await response.json()) as T;
}

function mapListing(row: PuppyListingRow, images: PuppyListingImageRow[]) {
  return {
    id: row.id,
    batchId: row.batch_id,
    status: row.status,
    createdAt: row.created_at,
    updatedAt: row.updated_at,
    puppyName: row.puppy_name,
    sex: row.sex,
    age: row.age,
    litter: row.litter,
    availability: row.availability,
    temperamentNotes: row.temperament_notes,
    breederNotes: row.breeder_notes,
    priceOrDeposit: row.price_or_deposit ?? undefined,
    listingTitle: row.listing_title,
    shortSummary: row.short_summary,
    fullDescription: row.full_description,
    homepageCardCopy: row.homepage_card_copy,
    suggestedSlug: row.suggested_slug,
    images: images.map((image) => ({
      id: image.id,
      fileName: image.file_name,
      publicUrl: image.public_url,
      altText: image.alt_text,
      createdAt: image.created_at
    }))
  };
}

export async function GET() {
  try {
    const { supabaseUrl, headers } = getSupabaseRequestConfig();
    const listingQuery = new URL(`${supabaseUrl}/rest/v1/puppy_listings`);
    listingQuery.searchParams.set("select", "*");
    listingQuery.searchParams.set("status", `in.(${publicStatuses.join(",")})`);
    listingQuery.searchParams.set("order", "updated_at.desc");

    const listingRows = await fetchSupabaseJson<PuppyListingRow[]>(
      listingQuery.toString(),
      headers
    );
    const listingIds = listingRows.map((listing) => listing.id);
    let imageRows: PuppyListingImageRow[] = [];

    if (listingIds.length > 0) {
      const imageQuery = new URL(`${supabaseUrl}/rest/v1/puppy_listing_images`);
      imageQuery.searchParams.set(
        "select",
        "id,listing_id,file_name,public_url,alt_text,created_at"
      );
      imageQuery.searchParams.set("listing_id", `in.(${listingIds.join(",")})`);
      imageQuery.searchParams.set("order", "created_at.asc");
      imageRows = await fetchSupabaseJson<PuppyListingImageRow[]>(
        imageQuery.toString(),
        headers
      );
    }

    return NextResponse.json({
      generatedAt: new Date().toISOString(),
      listings: listingRows.map((listing) =>
        mapListing(
          listing,
          imageRows.filter((image) => image.listing_id === listing.id)
        )
      )
    });
  } catch (error) {
    console.error("[PublicPuppyListings] failed to load listings", error);
    return NextResponse.json(
      { generatedAt: new Date().toISOString(), listings: [], error: "Unable to load puppy listings." },
      { status: 500 }
    );
  }
}
