import Link from "next/link";
import PuppyDevelopmentTimeline from "@/components/litters/PuppyDevelopmentTimeline";
import PublicMediaFrame from "@/components/litters/PublicMediaFrame";
import PublicStatusBadge from "@/components/litters/PublicStatusBadge";
import {
  buildPuppyApplicationHref,
  fetchPublicLitter,
  fetchPublicLitters,
  formatPublicDate,
  type PublicLitter,
  type PublicPuppy,
} from "@/lib/publicLitters";
import { siteMediaById } from "@/lib/siteMedia";

type HomePagePuppyCard = {
  litter: PublicLitter;
  puppy: PublicPuppy;
};

function getLitterContext(litter: PublicLitter) {
  if (litter.sire && litter.dam) {
    return `${litter.sire} x ${litter.dam}`;
  }

  if (litter.sire) {
    return `Sire: ${litter.sire}`;
  }

  if (litter.dam) {
    return `Dam: ${litter.dam}`;
  }

  return `From: ${litter.title}`;
}

export default async function AvailableLitters() {
  const { data: litters, error } = await fetchPublicLitters();
  const fallbackImage = siteMediaById["puppy-early-socialization-training"];
  const homepageItems = await Promise.all(
    litters.map(async (litter) => {
      if ((litter.publicPuppyCount ?? 0) <= 0) {
        return {
          litter,
          puppies: [] as PublicPuppy[],
          detailFailed: false,
        };
      }

      const detail = await fetchPublicLitter(litter.slug);

      if (detail.error || !detail.data) {
        return {
          litter,
          puppies: [] as PublicPuppy[],
          detailFailed: true,
        };
      }

      return {
        litter: detail.data,
        puppies: detail.data.puppies,
        detailFailed: false,
      };
    })
  );
  const publishedPuppies: HomePagePuppyCard[] = homepageItems.flatMap((item) =>
    item.puppies.map((puppy) => ({
      litter: item.litter,
      puppy,
    }))
  );
  const upcomingLitters = homepageItems
    .filter((item) => item.puppies.length === 0)
    .map((item) => item.litter);

  return (
    <section id="litters" className="border-b border-neutral-900 bg-neutral-900/35">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-12 lg:py-16">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-amber-400">
            Available Puppies
          </p>
          <h2 className="mt-4 text-3xl font-bold text-white md:text-5xl">
            Published Puppies &amp; Upcoming Litters
          </h2>
          <p className="mt-6 max-w-[62ch] text-lg leading-8 text-neutral-300">
            Once individual puppies are publicly published, they appear here
            directly with their approved photos, status, and buyer-safe
            summaries. Planned and expected litters can still appear below when
            no public puppies have been published yet.
          </p>
        </div>

        {error ? (
          <div className="mt-12 rounded-[2rem] border border-neutral-800 bg-neutral-950 p-8">
            <h3 className="text-2xl font-semibold text-white">
              Litters are temporarily unavailable
            </h3>
            <p className="mt-4 max-w-3xl leading-8 text-neutral-300">
              Litter availability could not be loaded right now. Please check
              back shortly or submit an application to be considered for a
              future litter.
            </p>
            <Link
              href="/apply"
              className="mt-8 inline-flex items-center justify-center rounded-2xl bg-amber-500 px-6 py-3.5 font-semibold text-black transition hover:opacity-90"
            >
              Apply for a Puppy
            </Link>
          </div>
        ) : null}

        {!error && publishedPuppies.length === 0 && upcomingLitters.length === 0 ? (
          <div className="mt-12 rounded-[2rem] border border-neutral-800 bg-neutral-950 p-8">
            <h3 className="text-2xl font-semibold text-white">
              No puppies are currently available
            </h3>
            <p className="mt-4 max-w-2xl leading-8 text-neutral-300">
              Check back for upcoming litters. Planned and expected pairings
              will appear here once they are published.
            </p>
            <Link
              href="/apply"
              className="mt-8 inline-flex items-center justify-center rounded-2xl bg-amber-500 px-6 py-3.5 font-semibold text-black transition hover:opacity-90"
            >
              Apply for a Puppy
            </Link>
          </div>
        ) : null}

        {!error && publishedPuppies.length > 0 ? (
          <div className="mt-12">
            <div className="max-w-3xl">
              <h3 className="text-2xl font-semibold text-white md:text-3xl">
                Available Puppies
              </h3>
              <p className="mt-4 max-w-[62ch] leading-8 text-neutral-300">
                Published puppies appear here directly so families can review
                photos, status, and public summaries without opening the full
                litter page first.
              </p>
            </div>

            <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {publishedPuppies.map(({ litter, puppy }) => (
                <article
                  className="overflow-hidden rounded-[1.75rem] border border-neutral-800 bg-neutral-950 shadow-[0_18px_48px_rgba(0,0,0,0.2)]"
                  key={`${litter.slug}-${puppy.slug}`}
                >
                  <PublicMediaFrame
                    src={puppy.primaryPhoto?.url ?? fallbackImage.src}
                    alt={
                      puppy.primaryPhoto?.altText ??
                      `${puppy.publicName} from ${litter.title}`
                    }
                    type={puppy.primaryPhoto?.type ?? "image"}
                    aspectRatio="5 / 4"
                    objectFit="cover"
                    className="rounded-none border-x-0 border-t-0"
                    mediaClassName="h-full w-full"
                  />

                  <div className="p-5 sm:p-6">
                    {puppy.collarColor ? (
                      <p className="text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-amber-300">
                        {puppy.collarColor} Collar
                      </p>
                    ) : null}

                    <h3 className="mt-2 text-xl font-semibold text-white sm:text-[1.35rem]">
                      {puppy.publicName}
                    </h3>
                    <p className="mt-2 text-[0.72rem] uppercase tracking-[0.18em] text-neutral-500 sm:text-xs">
                      {getLitterContext(litter)}
                    </p>

                    <div className="mt-4 flex flex-wrap items-center gap-2.5">
                      <PublicStatusBadge status={puppy.status} type="puppy" />
                      {puppy.sex ? (
                        <span className="rounded-full border border-neutral-700 px-3 py-1 text-xs text-neutral-300">
                          {puppy.sex}
                        </span>
                      ) : null}
                      {puppy.color ? (
                        <span className="rounded-full border border-neutral-700 px-3 py-1 text-xs text-neutral-300">
                          {puppy.color}
                        </span>
                      ) : null}
                    </div>

                    {puppy.price ? (
                      <p className="mt-4 text-sm font-semibold uppercase tracking-[0.18em] text-amber-400">
                        {typeof puppy.price === "string" &&
                        puppy.price.startsWith("$")
                          ? puppy.price
                          : new Intl.NumberFormat("en-US", {
                              style: "currency",
                              currency: "USD",
                              maximumFractionDigits: 0,
                            }).format(Number(puppy.price))}
                      </p>
                    ) : null}

                    <p className="mt-3 line-clamp-3 text-sm leading-6 text-neutral-300">
                      {puppy.summary ??
                        "Public puppy details will appear here when approved for the site."}
                    </p>

                    {puppy.development.length > 0 || puppy.media.length > 0 ? (
                      <details className="mt-4 rounded-[1.25rem] border border-neutral-800 bg-neutral-900/60 p-4">
                        <summary className="cursor-pointer list-none text-xs font-semibold uppercase tracking-[0.22em] text-amber-300">
                          View Development
                        </summary>
                        <PuppyDevelopmentTimeline
                          entries={puppy.development}
                          media={puppy.media}
                        />
                      </details>
                    ) : null}

                    <div className="mt-4 flex flex-wrap gap-3">
                      <Link
                        href={`/litters/${litter.slug}`}
                        className="inline-flex items-center justify-center rounded-2xl border border-neutral-700 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-neutral-900"
                      >
                        View Full Litter
                      </Link>
                      {puppy.status === "Available" ? (
                        <Link
                          href={buildPuppyApplicationHref(litter, puppy)}
                          className="inline-flex items-center justify-center rounded-2xl bg-amber-500 px-4 py-2.5 text-sm font-semibold text-black transition hover:opacity-90"
                        >
                          Apply for This Puppy
                        </Link>
                      ) : null}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        ) : null}

        {!error && upcomingLitters.length > 0 ? (
          <div className="mt-12">
            <div className="max-w-3xl">
              <h3 className="text-2xl font-semibold text-white md:text-3xl">
                Upcoming Litters
              </h3>
              <p className="mt-4 max-w-[62ch] leading-8 text-neutral-300">
                Planned and expected litters continue to appear here before
                individual puppies are publicly published.
              </p>
            </div>

            <div className="mt-8 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
              {upcomingLitters.map((litter) => {
                const coverImage = litter.coverImage;

                return (
                  <article
                    className="overflow-hidden rounded-[2rem] border border-neutral-800 bg-neutral-950 shadow-[0_18px_48px_rgba(0,0,0,0.2)]"
                    key={litter.slug}
                  >
                    <PublicMediaFrame
                      src={coverImage?.url ?? fallbackImage.src}
                      alt={coverImage?.altText ?? fallbackImage.alt}
                      type={coverImage?.type ?? "image"}
                      aspectRatio="16 / 10"
                      objectFit="cover"
                      className="rounded-none border-x-0 border-t-0"
                    />

                    <div className="p-8">
                      <div className="flex flex-wrap items-center gap-3">
                        {litter.status ? (
                          <PublicStatusBadge status={litter.status} type="litter" />
                        ) : null}
                        {typeof litter.publicPuppyCount === "number" ? (
                          <span className="rounded-full border border-neutral-700 px-4 py-1 text-sm text-neutral-300">
                            {litter.publicPuppyCount}{" "}
                            {litter.publicPuppyCount === 1
                              ? "public puppy"
                              : "public puppies"}
                          </span>
                        ) : null}
                        {typeof litter.availableCount === "number" ? (
                          <span className="rounded-full border border-neutral-700 px-4 py-1 text-sm text-neutral-300">
                            {litter.availableCount} available
                          </span>
                        ) : null}
                      </div>

                      <h3 className="mt-6 text-2xl font-semibold text-white">
                        {litter.title}
                      </h3>

                      <div className="mt-4 space-y-2 text-sm leading-7 text-neutral-400">
                        {litter.sire ? <p>Sire: {litter.sire}</p> : null}
                        {litter.dam ? <p>Dam: {litter.dam}</p> : null}
                        {litter.birthDate ? (
                          <p>Birth Date: {formatPublicDate(litter.birthDate)}</p>
                        ) : null}
                        {litter.expectedGoHomeDate ? (
                          <p>
                            Go-Home Date:{" "}
                            {formatPublicDate(litter.expectedGoHomeDate)}
                          </p>
                        ) : null}
                      </div>

                      <p className="mt-4 leading-8 text-neutral-300">
                        {litter.summary ??
                          "Published litter details will appear here as soon as they are available."}
                      </p>

                      <Link
                        href={`/litters/${litter.slug}`}
                        className="mt-8 inline-flex items-center justify-center rounded-2xl bg-amber-500 px-6 py-3.5 font-semibold text-black transition hover:opacity-90"
                      >
                        View Litter
                      </Link>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
}
