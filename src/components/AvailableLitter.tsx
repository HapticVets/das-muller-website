"use client";

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
  sold: "Sold"
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
          cache: "no-store"
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
          setErrorMessage("Puppy listings are temporarily unavailable.");
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
    <section
      id="litters"
      className="border-t border-neutral-900 bg-neutral-900/40"
    >
      <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 lg:px-12">
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.25em] text-amber-400">
            Available Puppies
          </p>

          <h2 className="mt-4 text-3xl font-bold md:text-5xl">
            Current puppy listings.
          </h2>

          <p className="mt-6 text-lg leading-8 text-neutral-300">
            Approved puppy listings are pulled directly from the kennel dashboard so this section stays aligned with current availability.
          </p>
        </div>

        {loading ? (
          <p className="mt-10 text-neutral-300">Loading current puppy listings...</p>
        ) : null}

        {!loading && errorMessage ? (
          <p className="mt-10 text-red-300">{errorMessage}</p>
        ) : null}

        {!loading && !errorMessage && listings.length === 0 ? (
          <div className="mt-12 rounded-3xl border border-neutral-800 bg-neutral-950 p-8">
            <h3 className="text-2xl font-semibold">No public puppy listings right now.</h3>
            <p className="mt-4 max-w-2xl leading-8 text-neutral-300">
              Submit the puppy application to ask about current and upcoming litters, timing, and placement fit.
            </p>
            <a
              href="#application"
              className="mt-8 inline-block rounded-2xl bg-amber-500 px-6 py-3 font-semibold text-black hover:opacity-90"
            >
              Start Your Puppy Application
            </a>
          </div>
        ) : null}

        {!loading && listings.length > 0 ? (
          <div className="mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {listings.map((listing) => {
              const primaryImage = listing.images[0];

              return (
                <article
                  className="overflow-hidden rounded-3xl border border-neutral-800 bg-neutral-950"
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

                    <h3 className="mt-6 text-2xl font-semibold">
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

                    <a
                      href="#application"
                      className="mt-8 inline-block rounded-2xl bg-amber-500 px-6 py-3 font-semibold text-black hover:opacity-90"
                    >
                      Ask About {listing.puppyName}
                    </a>
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
