"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type PuppyListingImage = {
  id: string;
  publicUrl: string;
  altText: string;
};

type PuppyListing = {
  id: string;
  status: string;
  availability: "available" | "reserved" | "sold";
  puppyName: string;
  sex: string;
  age: string;
  litter: string;
  listingTitle: string;
  shortSummary: string;
  homepageCardCopy: string;
  priceOrDeposit?: string;
  suggestedSlug: string;
  images: PuppyListingImage[];
};

type PuppyListingResponse = {
  generatedAt: string;
  listings: PuppyListing[];
};

const availabilityLabels: Record<PuppyListing["availability"], string> = {
  available: "Available",
  reserved: "Reserved",
  sold: "Sold",
};

export default function AvailableLitters() {
  const [listings, setListings] = useState<PuppyListing[]>([]);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    let isMounted = true;

    async function loadPuppyListings() {
      try {
        const response = await fetch("/api/public/puppy-listings", {
          cache: "no-store",
        });

        if (!response.ok) {
          throw new Error("Unable to load puppy listings.");
        }

        const data = (await response.json()) as PuppyListingResponse;

        if (isMounted) {
          setListings(data.listings ?? []);
        }
      } catch (error) {
        console.error("[AvailableLitters] puppy listing load failed", error);

        if (isMounted) {
          setErrorMessage(
            "Puppy availability could not be loaded right now. Please check back shortly or submit an application to be considered for a future litter."
          );
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }

    void loadPuppyListings();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <section id="litters" className="border-b border-neutral-900 bg-neutral-900/35">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-12 lg:py-16">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-amber-400">
            Available Puppies
          </p>
          <h2 className="mt-4 text-3xl font-bold text-white md:text-5xl">
            Available Puppies &amp; Upcoming Litters
          </h2>
          <p className="mt-6 max-w-[62ch] text-lg leading-8 text-neutral-300">
            Current puppies and confirmed upcoming litters will appear here as
            details become available. Families interested in a future Patriot K9
            Command puppy are encouraged to submit an application.
          </p>
        </div>

        {loading ? (
          <p className="mt-10 text-neutral-300">Loading current puppy listings...</p>
        ) : null}

        {!loading && errorMessage ? (
          <div className="mt-12 rounded-[2rem] border border-neutral-800 bg-neutral-950 p-8">
            <p className="max-w-3xl leading-8 text-neutral-300">{errorMessage}</p>
            <Link
              href="/apply"
              className="mt-8 inline-flex items-center justify-center rounded-2xl bg-amber-500 px-6 py-3.5 font-semibold text-black transition hover:opacity-90"
            >
              Apply for a Puppy
            </Link>
          </div>
        ) : null}

        {!loading && !errorMessage && listings.length === 0 ? (
          <div className="mt-12 rounded-[2rem] border border-neutral-800 bg-neutral-950 p-8">
            <h3 className="text-2xl font-semibold text-white">
              No puppies are currently listed
            </h3>
            <p className="mt-4 max-w-2xl leading-8 text-neutral-300">
              Our next available litter or individual puppy will appear here
              once details are confirmed.
            </p>
            <Link
              href="/apply"
              className="mt-8 inline-flex items-center justify-center rounded-2xl bg-amber-500 px-6 py-3.5 font-semibold text-black transition hover:opacity-90"
            >
              Apply for a Puppy
            </Link>
          </div>
        ) : null}

        {!loading && !errorMessage && listings.length > 0 ? (
          <div className="mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {listings.map((listing) => {
              const primaryImage = listing.images[0];

              return (
                <article
                  className="overflow-hidden rounded-[2rem] border border-neutral-800 bg-neutral-950 shadow-[0_18px_48px_rgba(0,0,0,0.2)]"
                  key={listing.id}
                >
                  {primaryImage ? (
                    <img
                      alt={primaryImage.altText || listing.listingTitle}
                      className="h-72 w-full object-cover"
                      src={primaryImage.publicUrl}
                    />
                  ) : null}

                  <div className="p-8">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="rounded-full bg-amber-500 px-4 py-1 text-sm font-semibold text-black">
                        {availabilityLabels[listing.availability]}
                      </span>
                      <span className="rounded-full border border-neutral-700 px-4 py-1 text-sm text-neutral-300">
                        {listing.sex} - {listing.age}
                      </span>
                    </div>

                    <h3 className="mt-6 text-2xl font-semibold text-white">
                      {listing.listingTitle || listing.puppyName}
                    </h3>

                    {listing.priceOrDeposit ? (
                      <p className="mt-3 text-sm font-semibold uppercase tracking-[0.2em] text-amber-400">
                        {listing.priceOrDeposit}
                      </p>
                    ) : null}

                    <p className="mt-4 leading-8 text-neutral-300">
                      {listing.homepageCardCopy || listing.shortSummary}
                    </p>

                    <p className="mt-4 text-sm uppercase tracking-[0.2em] text-neutral-500">
                      {listing.litter}
                    </p>

                    <Link
                      href="/apply"
                      className="mt-8 inline-flex items-center justify-center rounded-2xl bg-amber-500 px-6 py-3.5 font-semibold text-black transition hover:opacity-90"
                    >
                      Ask About {listing.puppyName}
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        ) : null}
      </div>
    </section>
  );
}
