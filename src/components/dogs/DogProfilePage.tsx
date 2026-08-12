import Image from "next/image";
import Link from "next/link";
import DogImageCard from "@/components/dogs/DogImageCard";
import HealthStatusBadge from "@/components/dogs/HealthStatusBadge";
import Header from "@/components/Header";
import type { DogProfile, HealthTest } from "@/lib/dogs";

function DetailRow({
  label,
  value,
}: {
  label: string;
  value?: string;
}) {
  return (
    <div className="rounded-2xl border border-neutral-800 bg-neutral-950/70 p-4">
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-neutral-500">
        {label}
      </p>
      <p className="mt-3 text-base leading-7 text-neutral-200">
        {value ?? "Pending update"}
      </p>
    </div>
  );
}

function getPedigreeType(dog: DogProfile) {
  if (dog.pedigreeDocumentType) {
    return dog.pedigreeDocumentType;
  }

  if (!dog.pedigreeDocument) {
    return null;
  }

  return /\.pdf$/i.test(dog.pedigreeDocument) ? "pdf" : "image";
}

function getDocumentType(test: HealthTest) {
  if (test.documentType) {
    return test.documentType;
  }

  if (!test.documentPath) {
    return null;
  }

  return /\.pdf$/i.test(test.documentPath) ? "pdf" : "image";
}

function DocumentCard({
  src,
  type,
  alt,
  eyebrow,
  body,
  buttonLabel,
}: {
  src: string;
  type: "pdf" | "image";
  alt: string;
  eyebrow: string;
  body: string;
  buttonLabel: string;
}) {
  return (
    <div className="mt-5 space-y-4">
      {type === "image" ? (
        <div className="overflow-hidden rounded-[1.5rem] border border-neutral-800 bg-neutral-950/80">
          <div className="relative aspect-[4/3] w-full bg-neutral-900">
            <Image
              src={src}
              alt={alt}
              fill
              className="object-contain p-3"
              sizes="(min-width: 1024px) 32vw, 100vw"
            />
          </div>
        </div>
      ) : (
        <div className="rounded-[1.5rem] border border-neutral-800 bg-neutral-950/80 p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-neutral-500">
            {eyebrow}
          </p>
          <p className="mt-4 text-base leading-7 text-neutral-300">{body}</p>
        </div>
      )}

      <a href={src} target="_blank" rel="noreferrer" className="action-primary">
        {buttonLabel}
      </a>
    </div>
  );
}

export default function DogProfilePage({ dog }: { dog: DogProfile }) {
  const gallery = dog.photos.slice(1);
  const pedigreeDocument = dog.pedigreeDocument ?? dog.pedigree?.src;
  const pedigreeType = getPedigreeType(dog) ?? dog.pedigree?.type ?? null;
  const pedigreeLabel = dog.pedigree?.label ?? "Official pedigree document";
  const pedigreeAltText =
    dog.pedigreeAltText ?? `${dog.name} AKC pedigree document`;

  return (
    <>
      <Header />

      <main className="min-h-screen bg-neutral-950 text-white">
        <section className="border-b border-neutral-900 bg-[linear-gradient(180deg,rgba(23,23,23,0.96)_0%,rgba(10,10,10,1)_100%)]">
          <div className="section-shell grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
            <div className="space-y-6">
              <DogImageCard
                photo={dog.photos[0]}
                aspectClassName="aspect-[4/5]"
                priority
              />

              {gallery.length > 0 ? (
                <div className="grid gap-4 sm:grid-cols-2">
                  {gallery.map((photo) => (
                    <DogImageCard
                      key={photo.src}
                      photo={photo}
                      aspectClassName="aspect-[4/5]"
                    />
                  ))}
                </div>
              ) : (
                <div className="surface-card p-6">
                  <p className="section-eyebrow">Additional Photos</p>
                  <p className="mt-4 text-base leading-7 text-neutral-400">
                    Additional authentic photos can be added here later by
                    updating this dog&apos;s photo gallery data.
                  </p>
                </div>
              )}
            </div>

            <div className="max-w-3xl">
              <p className="section-eyebrow">Our Dogs</p>
              <h1 className="section-title max-w-[14ch]">{dog.name}</h1>
              <div className="mt-6 flex flex-wrap gap-3">
                <span className="rounded-full border border-amber-500/30 bg-amber-500/12 px-4 py-2 text-sm font-semibold uppercase tracking-[0.18em] text-amber-200">
                  {dog.role}
                </span>
                <span className="rounded-full border border-neutral-700 px-4 py-2 text-sm font-semibold uppercase tracking-[0.18em] text-neutral-300">
                  {dog.sex}
                </span>
                <span className="rounded-full border border-neutral-700 px-4 py-2 text-sm font-semibold uppercase tracking-[0.18em] text-neutral-300">
                  {dog.color}
                </span>
                <span className="rounded-full border border-neutral-700 px-4 py-2 text-sm font-semibold uppercase tracking-[0.18em] text-neutral-300">
                  {dog.coat}
                </span>
              </div>
              <p className="section-copy mt-6">{dog.summary}</p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <DetailRow label="Age / Date of Birth" value={dog.age ?? dog.dateOfBirth} />
                <DetailRow label="Working / Service Role" value={dog.workingRole} />
                <DetailRow label="Sire" value={dog.sire} />
                <DetailRow label="Dam" value={dog.dam} />
                <DetailRow
                  label="AKC Registration Number"
                  value={dog.akcRegistrationNumber}
                />
                <DetailRow label="Health Summary" value={dog.healthSummary} />
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="/our-dogs" className="action-secondary">
                  Back to Our Dogs
                </Link>
                <Link href="/apply" className="action-primary">
                  Ask About Our Program
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="section-shell-tight border-b border-neutral-900">
          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <article className="surface-card p-8">
              <p className="section-eyebrow">Full Description</p>
              <div className="mt-5 space-y-5 text-lg leading-8 text-neutral-300">
                {dog.description.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </article>

            <article className="surface-card p-8">
              <p className="section-eyebrow">Temperament</p>
              <p className="mt-5 text-lg leading-8 text-neutral-300">
                {dog.temperament}
              </p>
            </article>
          </div>
        </section>

        <section className="section-shell-tight border-b border-neutral-900 bg-neutral-900/35">
          <div className="grid gap-6 lg:grid-cols-[1.06fr_0.94fr]">
            <article className="surface-card p-8">
              <p className="section-eyebrow">Health Testing</p>
              <div className="mt-6 space-y-4">
                {dog.healthTests.map((test) => (
                  <div
                    className="rounded-[1.5rem] border border-neutral-800 bg-neutral-950/80 p-5"
                    key={test.label}
                  >
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <h2 className="text-lg font-semibold text-white">
                        {test.label}
                      </h2>
                      <HealthStatusBadge status={test.status} />
                    </div>
                    <p className="mt-4 text-sm leading-7 text-neutral-400">
                      {test.details ?? "Update this field when verified testing information is available."}
                    </p>
                    {test.provider || test.testDate ? (
                      <div className="mt-4 grid gap-4 sm:grid-cols-2">
                        {test.provider ? (
                          <DetailRow label="Provider" value={test.provider} />
                        ) : null}
                        {test.testDate ? (
                          <DetailRow label="Test Date" value={test.testDate} />
                        ) : null}
                      </div>
                    ) : null}
                    {test.resultSummary?.length ? (
                      <ul className="mt-4 space-y-3 text-sm leading-7 text-neutral-300">
                        {test.resultSummary.map((item) => (
                          <li className="flex gap-3" key={item}>
                            <span className="mt-2 h-2 w-2 rounded-full bg-amber-400" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    ) : null}
                    {test.documentPath ? (
                      <DocumentCard
                        src={test.documentPath}
                        type={getDocumentType(test) ?? "image"}
                        alt={
                          test.documentAltText ??
                          `${dog.name} ${test.label} document`
                        }
                        eyebrow={test.label}
                        body="Verified health document"
                        buttonLabel={test.documentLabel ?? "View Document"}
                      />
                    ) : null}
                  </div>
                ))}
              </div>
            </article>

            <article className="surface-card p-8">
              <p className="section-eyebrow">AKC Pedigree</p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <DetailRow
                  label="AKC Registered Name"
                  value={dog.registeredName ?? dog.name}
                />
                <DetailRow
                  label="AKC Registration Number"
                  value={dog.akcRegistrationNumber}
                />
                <DetailRow
                  label="AKC Registered Color"
                  value={dog.akcRegisteredColor}
                />
                <DetailRow label="Date of Birth" value={dog.dateOfBirth} />
                <DetailRow
                  label="Sire"
                  value={
                    dog.sireRegistrationNumber
                      ? `${dog.sire ?? "Pending update"} (${dog.sireRegistrationNumber})`
                      : dog.sire
                  }
                />
                <DetailRow
                  label="Dam"
                  value={
                    dog.damRegistrationNumber
                      ? `${dog.dam ?? "Pending update"} (${dog.damRegistrationNumber})`
                      : dog.dam
                  }
                />
              </div>
              <p className="mt-5 text-sm leading-7 text-neutral-400">
                When an official pedigree file is uploaded, this section can
                show either an image preview or a PDF document link without
                changing the page layout.
              </p>

              {pedigreeDocument ? (
                <DocumentCard
                  src={pedigreeDocument}
                  type={pedigreeType === "pdf" ? "pdf" : "image"}
                  alt={pedigreeAltText}
                  eyebrow="Pedigree Document"
                  body={pedigreeLabel}
                  buttonLabel="View AKC Pedigree"
                />
              ) : (
                <div className="mt-8 rounded-[1.5rem] border border-dashed border-neutral-700 bg-neutral-950/70 p-6">
                  <p className="text-sm font-semibold uppercase tracking-[0.22em] text-neutral-500">
                    AKC Pedigree
                  </p>
                  <p className="mt-4 text-base leading-7 text-neutral-300">
                    Pedigree document will be added soon.
                  </p>
                </div>
              )}
            </article>
          </div>
        </section>

        <section className="section-shell-tight">
          <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
            <article className="surface-card p-8">
              <p className="section-eyebrow">Related Offspring / Litters</p>
              {dog.relatedOffspring?.length ? (
                <ul className="mt-6 space-y-4 text-neutral-300">
                  {dog.relatedOffspring.map((item) => (
                    <li className="flex gap-3" key={item}>
                      <span className="mt-2 h-2 w-2 rounded-full bg-amber-400" />
                      <span className="leading-7">{item}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="mt-6 text-base leading-7 text-neutral-400">
                  Related offspring or litter references can be added here
                  later without changing the page layout.
                </p>
              )}
            </article>

            <article className="surface-card p-8">
              <p className="section-eyebrow">Profile Updates</p>
              <p className="mt-6 text-base leading-7 text-neutral-400">
                This profile is built to support future additions like more
                photos, confirmed health results, pedigree documents, and
                offspring references by updating one centralized dog-data file.
              </p>
            </article>
          </div>
        </section>
      </main>
    </>
  );
}
