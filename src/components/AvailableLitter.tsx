import Link from "next/link";
import PublicMediaFrame from "@/components/litters/PublicMediaFrame";
import PublicStatusBadge from "@/components/litters/PublicStatusBadge";
import {
  fetchPublicLitters,
  formatPublicDate,
} from "@/lib/publicLitters";
import { siteMediaById } from "@/lib/siteMedia";

export default async function AvailableLitters() {
  const { data: litters, error } = await fetchPublicLitters();
  const fallbackImage = siteMediaById["puppy-early-socialization-training"];

  return (
    <section id="litters" className="border-b border-neutral-900 bg-neutral-900/35">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-12 lg:py-16">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-amber-400">
            Available Puppies
          </p>
          <h2 className="mt-4 text-3xl font-bold text-white md:text-5xl">
            Available Litters &amp; Upcoming Puppies
          </h2>
          <p className="mt-6 max-w-[62ch] text-lg leading-8 text-neutral-300">
            Published Patriot K9 litters appear here as details become
            available. Planned and expected litters may be shown before
            individual puppies are listed, and published puppy development
            updates can be viewed inside each litter page.
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

        {!error && litters.length === 0 ? (
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

        {!error && litters.length > 0 ? (
          <div className="mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {litters.map((litter) => {
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
                        "Published litter details, puppy availability, and weekly development updates will appear here as approved."}
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
        ) : null}
      </div>
    </section>
  );
}
