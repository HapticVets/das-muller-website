import Link from "next/link";
import DogImageCard from "@/components/dogs/DogImageCard";
import HealthStatusBadge from "@/components/dogs/HealthStatusBadge";
import Header from "@/components/Header";
import { getDogsByRole } from "@/lib/dogs";

function DogRoleSection({
  title,
  description,
  role,
}: {
  title: string;
  description: string;
  role: "Sire" | "Dam";
}) {
  const dogs = getDogsByRole(role);

  return (
    <section className="border-t border-neutral-900 bg-neutral-950">
      <div className="section-shell-tight">
        <div className="max-w-3xl">
          <p className="section-eyebrow">{title}</p>
          <p className="mt-5 text-lg leading-8 text-neutral-300">
            {description}
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {dogs.map((dog) => (
            <article className="surface-card p-5" key={dog.slug}>
              <DogImageCard photo={dog.photos[0]} aspectClassName="aspect-[4/5]" />

              <div className="mt-5 flex flex-wrap gap-3">
                <span className="rounded-full border border-amber-500/30 bg-amber-500/12 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-amber-200">
                  {dog.role}
                </span>
                <span className="rounded-full border border-neutral-700 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-neutral-300">
                  {dog.sex}
                </span>
                <HealthStatusBadge status={dog.healthTests[0]?.status ?? "Pending"} />
              </div>

              <h2 className="mt-5 text-2xl font-semibold text-white">
                {dog.name}
              </h2>
              <p className="mt-3 text-sm uppercase tracking-[0.2em] text-neutral-500">
                {dog.color} - {dog.coat}
              </p>
              <p className="mt-4 leading-8 text-neutral-300">{dog.summary}</p>
              <p className="mt-4 text-sm leading-7 text-neutral-400">
                {dog.healthSummary}
              </p>

              <Link
                href={`/our-dogs/${dog.slug}`}
                className="action-primary mt-8"
              >
                View Profile
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function OurDogsPage() {
  return (
    <>
      <Header />

      <main className="min-h-screen bg-neutral-950 text-white">
        <section className="border-b border-neutral-900 bg-[radial-gradient(circle_at_top_left,rgba(245,158,11,0.14),transparent_34%),linear-gradient(180deg,rgba(23,23,23,0.98)_0%,rgba(10,10,10,1)_78%)]">
          <div className="section-shell grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div className="max-w-3xl">
              <p className="section-eyebrow">Our Dogs</p>
              <h1 className="section-title max-w-[11ch]">
                Meet the German Shepherds Behind Our Program
              </h1>
              <p className="section-copy">
                Patriot K9 Command values stable temperament, trainability,
                environmental confidence, and strong family connection. This
                page highlights the sires and dams that shape our German
                Shepherd breeding program.
              </p>
              <p className="mt-4 max-w-3xl text-base leading-8 text-neutral-400">
                Each profile is built to make updates straightforward as photos,
                pedigree documents, health results, and future offspring
                details are added over time.
              </p>
            </div>

            <article className="surface-card p-8">
              <p className="section-eyebrow text-amber-300">
                What We Track
              </p>
              <ul className="mt-6 space-y-4 text-neutral-300">
                {[
                  "Temperament and working role",
                  "Color, coat type, and basic profile details",
                  "Health-testing status with clear completed, pending, and planned labels",
                  "AKC pedigree support for uploaded documents when available",
                ].map((item) => (
                  <li className="flex gap-3" key={item}>
                    <span className="mt-2 h-2 w-2 rounded-full bg-amber-400" />
                    <span className="leading-7">{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </section>

        <DogRoleSection
          title="Sires"
          description="Our sires are selected for stable temperament, working ability, trainability, and qualities that support practical family and working German Shepherds."
          role="Sire"
        />

        <DogRoleSection
          title="Dams"
          description="Our dams contribute temperament, handler connection, engagement, and the softer but dependable qualities that matter in everyday life and long-term development."
          role="Dam"
        />
      </main>
    </>
  );
}
