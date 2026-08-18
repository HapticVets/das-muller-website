import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import PublicMediaFrame from "@/components/litters/PublicMediaFrame";
import PuppyDevelopmentTimeline from "@/components/litters/PuppyDevelopmentTimeline";
import PublicStatusBadge from "@/components/litters/PublicStatusBadge";
import {
  buildLitterPageUrl,
  buildPuppyApplicationHref,
  fetchPublicLitter,
  formatPublicDate,
  getDogProfileHref,
  type PublicLitter,
} from "@/lib/publicLitters";
import { MAIN_SITE_URL } from "@/lib/siteDomains";
import { OG_IMAGE_PATH, SITE_NAME, toJsonLd } from "@/lib/seo";
import { siteMediaById } from "@/lib/siteMedia";

type LitterPageProps = {
  params: Promise<{ slug: string }>;
};

type DetailFact = {
  label: string;
  value: React.ReactNode;
};

function getMetadataDescription(litter: PublicLitter) {
  if (litter.summary) {
    return litter.summary;
  }

  const pairing = [litter.sire, litter.dam].filter(Boolean).join(" x ");

  return pairing
    ? `${pairing} litter from Patriot K9 Command with published puppy availability and development updates.`
    : "Published Patriot K9 litter details, puppy availability, and development updates.";
}

function buildLitterJsonLd(litter: PublicLitter) {
  const pageUrl = buildLitterPageUrl(litter.slug);

  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${pageUrl}#webpage`,
    url: pageUrl,
    name: `${litter.title} | ${SITE_NAME}`,
    description: getMetadataDescription(litter),
    isPartOf: {
      "@type": "WebSite",
      url: MAIN_SITE_URL,
      name: SITE_NAME,
    },
    mainEntity:
      litter.puppies.length > 0
        ? {
            "@type": "ItemList",
            itemListElement: litter.puppies.map((puppy, index) => ({
              "@type": "ListItem",
              position: index + 1,
              name: puppy.collarColor
                ? `${puppy.collarColor} Collar`
                : puppy.publicName,
              description: puppy.summary,
            })),
          }
        : undefined,
  };
}

export async function generateMetadata({
  params,
}: LitterPageProps): Promise<Metadata> {
  const { slug } = await params;
  const { data: litter, error, notFound: missing } = await fetchPublicLitter(slug);

  if (missing) {
    return {
      title: "Litter Not Found",
      description: "This litter is not currently available on the public site.",
    };
  }

  if (!litter || error) {
    return {
      title: "Available Litters",
      description:
        "Public litter details from Patriot K9 Command, including puppy availability and development updates when published.",
      alternates: {
        canonical: `/litters/${slug}`,
      },
    };
  }

  const title = `${litter.title} | ${SITE_NAME}`;
  const description = getMetadataDescription(litter);

  return {
    title,
    description,
    alternates: {
      canonical: `/litters/${litter.slug}`,
    },
    openGraph: {
      title,
      description,
      url: `/litters/${litter.slug}`,
      images: [
        {
          url: OG_IMAGE_PATH,
          alt: `${SITE_NAME} German Shepherd breeding and training`,
        },
      ],
    },
    twitter: {
      title,
      description,
      images: [OG_IMAGE_PATH],
    },
  };
}

export default async function LitterDetailPage({ params }: LitterPageProps) {
  const { slug } = await params;
  const { data: litter, error, notFound: missing } = await fetchPublicLitter(slug);
  const fallbackImage = siteMediaById["puppy-black-tan-portrait-outdoors"];

  if (missing) {
    notFound();
  }

  if (!litter || error) {
    return (
      <>
        <Header />

        <main className="min-h-screen bg-neutral-950 text-white">
          <section className="border-b border-neutral-900 bg-[linear-gradient(180deg,rgba(23,23,23,0.96)_0%,rgba(10,10,10,1)_100%)]">
            <div className="section-shell max-w-4xl">
              <p className="section-eyebrow">Available Litters</p>
              <h1 className="section-title max-w-[14ch]">
                Litter Details Are Temporarily Unavailable
              </h1>
              <p className="section-copy mt-6">
                Public litter details could not be loaded right now. Please
                check back shortly or submit an application if you would like
                to be considered for an upcoming litter.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="/#litters" className="action-secondary">
                  Back to Available Litters
                </Link>
                <Link href="/apply" className="action-primary">
                  Apply for a Puppy
                </Link>
              </div>
            </div>
          </section>
        </main>
      </>
    );
  }

  const sireHref = getDogProfileHref(litter.sire);
  const damHref = getDogProfileHref(litter.dam);
  const showLitterApplicationCta =
    litter.availableCount !== undefined
      ? litter.availableCount > 0
      : litter.status === "Accepting Applications" || litter.status === "Available";
  const detailFacts = [
    litter.sire
      ? {
          label: "Sire",
          value: sireHref ? (
            <Link href={sireHref} className="transition hover:text-amber-300">
              {litter.sire}
            </Link>
          ) : (
            litter.sire
          ),
        }
      : null,
    litter.dam
      ? {
          label: "Dam",
          value: damHref ? (
            <Link href={damHref} className="transition hover:text-amber-300">
              {litter.dam}
            </Link>
          ) : (
            litter.dam
          ),
        }
      : null,
    litter.birthDate
      ? {
          label: "Birth Date",
          value: formatPublicDate(litter.birthDate),
        }
      : null,
    litter.expectedGoHomeDate
      ? {
          label: "Expected Go-Home Date",
          value: formatPublicDate(litter.expectedGoHomeDate),
        }
      : null,
  ].filter((fact) => fact !== null) as DetailFact[];

  return (
    <>
      <Header />

      <main className="min-h-screen bg-neutral-950 text-white">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: toJsonLd(buildLitterJsonLd(litter)) }}
        />

        <section className="border-b border-neutral-900 bg-[linear-gradient(180deg,rgba(23,23,23,0.96)_0%,rgba(10,10,10,1)_100%)]">
          <div className="section-shell grid gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:items-start">
            <div className="max-w-3xl">
              <p className="section-eyebrow">Public Litter</p>
              <h1 className="section-title max-w-[12ch]">{litter.title}</h1>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                {litter.status ? (
                  <PublicStatusBadge status={litter.status} type="litter" />
                ) : (
                  <span className="rounded-full border border-neutral-700 px-4 py-2 text-sm font-semibold uppercase tracking-[0.18em] text-neutral-300">
                    Litter Update
                  </span>
                )}
                {typeof litter.publicPuppyCount === "number" ? (
                  <span className="rounded-full border border-neutral-700 px-4 py-2 text-sm font-semibold uppercase tracking-[0.18em] text-neutral-300">
                    {litter.publicPuppyCount}{" "}
                    {litter.publicPuppyCount === 1
                      ? "Public Puppy"
                      : "Public Puppies"}
                  </span>
                ) : null}
                {typeof litter.availableCount === "number" ? (
                  <span className="rounded-full border border-neutral-700 px-4 py-2 text-sm font-semibold uppercase tracking-[0.18em] text-neutral-300">
                    {litter.availableCount} Available
                  </span>
                ) : null}
              </div>

              {detailFacts.length > 0 ? (
                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  {detailFacts.map((fact) => (
                    <div
                      className="rounded-2xl border border-neutral-800 bg-neutral-950/70 p-4"
                      key={fact.label}
                    >
                      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-neutral-500">
                        {fact.label}
                      </p>
                      <p className="mt-3 text-base leading-7 text-neutral-200">
                        {fact.value}
                      </p>
                    </div>
                  ))}
                </div>
              ) : null}

              <p className="section-copy mt-8">
                {litter.summary ??
                  "Published litter details, puppy availability, and weekly development updates are shown here when approved for the public site."}
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="/#litters" className="action-secondary">
                  Back to Available Litters
                </Link>
                {showLitterApplicationCta ? (
                  <Link href={buildPuppyApplicationHref(litter)} className="action-primary">
                    Apply for This Litter
                  </Link>
                ) : null}
              </div>
            </div>

            <div className="surface-card p-4">
              <PublicMediaFrame
                src={litter.coverImage?.url ?? fallbackImage.src}
                alt={litter.coverImage?.altText ?? fallbackImage.alt}
                type={litter.coverImage?.type ?? "image"}
                aspectRatio="4 / 3"
                objectFit="cover"
              />
            </div>
          </div>
        </section>

        <section className="section-shell-tight border-b border-neutral-900">
          <div className="max-w-3xl">
            <p className="section-eyebrow">Published Puppies</p>
            <h2 className="mt-4 text-3xl font-bold text-white md:text-5xl">
              Meet the Puppies
            </h2>
            <p className="mt-6 max-w-[62ch] text-lg leading-8 text-neutral-300">
              Only publicly approved puppies and buyer-safe updates appear
              below. Weekly development summaries, photos, and videos are shown
              when published for this litter.
            </p>
          </div>

          {litter.puppies.length === 0 ? (
            <div className="surface-card mt-10 p-8">
              <h3 className="text-2xl font-semibold text-white">
                Puppies are not publicly listed yet
              </h3>
              <p className="mt-4 max-w-2xl leading-8 text-neutral-300">
                This litter is visible publicly, but individual puppies have
                not been published yet. Check back for updates or submit an
                application if you would like to be considered.
              </p>
            </div>
          ) : (
            <div className="mt-10 grid gap-8 lg:grid-cols-2">
              {litter.puppies.map((puppy) => (
                <article
                  key={`${litter.slug}-${puppy.slug}`}
                  className="overflow-hidden rounded-[2rem] border border-neutral-800 bg-neutral-950 shadow-[0_18px_48px_rgba(0,0,0,0.2)]"
                >
                  <div className="p-4">
                    <PublicMediaFrame
                      src={puppy.primaryPhoto?.url ?? litter.coverImage?.url ?? fallbackImage.src}
                      alt={
                        puppy.primaryPhoto?.altText ??
                        `${puppy.publicName} from ${litter.title}`
                      }
                      type={puppy.primaryPhoto?.type ?? litter.coverImage?.type ?? "image"}
                      aspectRatio="4 / 3"
                      objectFit="cover"
                    />
                  </div>

                  <div className="px-8 pb-8">
                    {puppy.collarColor ? (
                      <p className="text-sm font-semibold uppercase tracking-[0.22em] text-amber-300">
                        {puppy.collarColor}
                      </p>
                    ) : null}

                    <h3 className="mt-3 text-2xl font-semibold text-white">
                      {puppy.publicName}
                    </h3>

                    <div className="mt-5 flex flex-wrap items-center gap-3">
                      <PublicStatusBadge status={puppy.status} type="puppy" />
                      {puppy.sex ? (
                        <span className="rounded-full border border-neutral-700 px-4 py-1 text-sm text-neutral-300">
                          {puppy.sex}
                        </span>
                      ) : null}
                      {puppy.color ? (
                        <span className="rounded-full border border-neutral-700 px-4 py-1 text-sm text-neutral-300">
                          {puppy.color}
                        </span>
                      ) : null}
                    </div>

                    {puppy.price ? (
                      <p className="mt-5 text-sm font-semibold uppercase tracking-[0.2em] text-amber-400">
                        {puppy.price}
                      </p>
                    ) : null}

                    {puppy.summary ? (
                      <p className="mt-4 leading-8 text-neutral-300">{puppy.summary}</p>
                    ) : (
                      <p className="mt-4 leading-8 text-neutral-400">
                        Public details for this puppy will appear here when
                        approved.
                      </p>
                    )}

                    {puppy.development.length > 0 || puppy.media.length > 0 ? (
                      <details className="mt-6 rounded-[1.5rem] border border-neutral-800 bg-neutral-900/60 p-5">
                        <summary className="cursor-pointer list-none text-sm font-semibold uppercase tracking-[0.22em] text-amber-300">
                          View Development
                        </summary>
                        <PuppyDevelopmentTimeline
                          entries={puppy.development}
                          media={puppy.media}
                        />
                      </details>
                    ) : null}

                    {puppy.status === "Available" ? (
                      <Link
                        href={buildPuppyApplicationHref(litter, puppy)}
                        className="action-primary mt-6"
                      >
                        Apply for This Puppy
                      </Link>
                    ) : (
                      <p className="mt-6 text-sm leading-7 text-neutral-400">
                        This puppy is currently marked {puppy.status.toLowerCase()}.
                      </p>
                    )}
                  </div>
                </article>
              ))}
            </div>
          )}
        </section>
      </main>
    </>
  );
}
