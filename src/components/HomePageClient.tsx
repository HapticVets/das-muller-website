"use client";

import Link from "next/link";
import AvailableLitters from "@/components/AvailableLitter";
import Header from "@/components/Header";
import Pricing from "@/components/Pricing";
import ResponsiveMedia from "@/components/media/ResponsiveMedia";
import TrainingVideo from "@/components/media/TrainingVideo";
import { siteMediaById } from "@/lib/siteMedia";

const trustItems = [
  "Veteran-Owned",
  "Licensed Kennel",
  "Structured Puppy Development",
  "Practical In-Person Training",
];

export default function HomePageClient() {
  const puppyPortrait = siteMediaById["puppy-black-tan-portrait-outdoors"];
  const publicStoreTraining = siteMediaById["training-public-down-stay-store"];
  const publicOfficeTraining =
    siteMediaById["training-public-place-command-doctors-office"];
  const placeCommandOutdoors =
    siteMediaById["training-place-command-outdoors"];
  const facilityOverview = siteMediaById["facility-drone-property-overview"];
  const kennelRoom = siteMediaById["facility-kennel-room"];
  const communityImage = siteMediaById["team-veterans-with-service-dogs"];

  return (
    <>
      <Header />

      <main className="min-h-screen bg-neutral-950 text-white">
        <section className="border-b border-neutral-900 bg-[radial-gradient(circle_at_top_left,rgba(245,158,11,0.16),transparent_35%),linear-gradient(180deg,rgba(23,23,23,0.98)_0%,rgba(10,10,10,1)_78%)]">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:px-12 lg:py-20">
            <div className="max-w-3xl self-center">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-amber-400">
                German Shepherd Breeding &amp; Training
              </p>
              <h1 className="mt-5 max-w-[12ch] text-4xl font-bold leading-[0.95] text-white md:text-6xl">
                Stable Dogs. Practical Training. Real-World Results.
              </h1>
              <p className="mt-6 max-w-[62ch] text-lg leading-8 text-neutral-300">
                Patriot K9 Command raises German Shepherd puppies with purpose
                and provides structured, hands-on training for dogs and
                families throughout Ohio and the surrounding tri-state region.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#pricing"
                  className="inline-flex items-center justify-center rounded-2xl bg-amber-500 px-6 py-3.5 font-semibold text-black transition hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-amber-300"
                >
                  View Training Programs
                </a>
                <a
                  href="#litters"
                  className="inline-flex items-center justify-center rounded-2xl border border-neutral-700 px-6 py-3.5 font-semibold text-white transition hover:bg-neutral-900 focus:outline-none focus:ring-2 focus:ring-neutral-400"
                >
                  Explore Our Puppies
                </a>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                {trustItems.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-neutral-700 bg-neutral-950/70 px-4 py-2 text-sm font-medium text-neutral-200"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="mx-auto w-full max-w-xl self-center lg:max-w-none">
              <div className="relative flex flex-col gap-4 lg:min-h-[35rem] lg:gap-0 xl:min-h-[38rem]">
                <div className="w-full lg:w-[76%]">
                  <ResponsiveMedia
                    src={puppyPortrait.src}
                    alt={puppyPortrait.alt}
                    sizes="(min-width: 1280px) 29vw, (min-width: 1024px) 32vw, 100vw"
                    aspectRatio="4 / 5"
                    objectFit="contain"
                    objectPosition="center top"
                    priority
                    containerClassName="rounded-[1.75rem] border border-neutral-700/80 bg-neutral-950/85 shadow-[0_24px_60px_rgba(0,0,0,0.34)]"
                  />
                </div>
                <div className="w-full lg:absolute lg:bottom-5 lg:right-0 lg:w-[58%] xl:bottom-6">
                  <ResponsiveMedia
                    src={publicStoreTraining.src}
                    alt={publicStoreTraining.alt}
                    sizes="(min-width: 1280px) 22vw, (min-width: 1024px) 24vw, 100vw"
                    aspectRatio="16 / 10"
                    objectFit="cover"
                    objectPosition="center"
                    containerClassName="rounded-[1.5rem] border border-amber-500/30 bg-neutral-950/85 shadow-[0_20px_48px_rgba(0,0,0,0.32)] lg:ring-1 lg:ring-amber-400/10"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-neutral-900 bg-neutral-950">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:px-12 lg:py-16">
            <div className="max-w-2xl self-center">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-amber-400">
                Breeding Program
              </p>
              <h2 className="mt-4 text-3xl font-bold text-white md:text-5xl">
                Purpose-Raised German Shepherd Puppies
              </h2>
              <p className="mt-6 max-w-[62ch] text-lg leading-8 text-neutral-300">
                Our puppies are raised with structured handling, environmental
                exposure, early engagement, and ongoing observation. Each puppy
                is evaluated as an individual so placement decisions consider
                temperament, household needs, and long-term goals.
              </p>
              <p className="mt-4 max-w-[62ch] text-base leading-8 text-neutral-400">
                We do not match puppies by appearance alone. We pay close
                attention to confidence, recovery, engagement, and how each
                puppy responds to new experiences.
              </p>
              <Link
                href="/apply"
                className="mt-8 inline-flex items-center justify-center rounded-2xl bg-amber-500 px-6 py-3.5 font-semibold text-black transition hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-amber-300"
              >
                Learn About Our Breeding Program
              </Link>
            </div>

            <div className="rounded-[2rem] border border-neutral-800 bg-neutral-900/70 p-4">
              <ResponsiveMedia
                src={puppyPortrait.src}
                alt={puppyPortrait.alt}
                sizes="(min-width: 1024px) 42vw, 100vw"
                aspectRatio="4 / 5"
                objectFit="contain"
                objectPosition="center top"
              />
            </div>
          </div>
        </section>

        <AvailableLitters />

        <section
          id="programs"
          className="border-b border-neutral-900 bg-neutral-900/40"
        >
          <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:px-8 lg:grid-cols-[1fr_1fr] lg:px-12 lg:py-16">
            <div className="max-w-2xl self-center">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-amber-400">
                In-Person Dog Training
              </p>
              <h2 className="mt-4 text-3xl font-bold text-white md:text-5xl">
                Training Built for Everyday Life
              </h2>
              <p className="mt-6 max-w-[62ch] text-lg leading-8 text-neutral-300">
                Patriot K9 Command provides structured in-person training
                focused on communication, obedience, impulse control, public
                manners, and behavior that carries into daily life.
              </p>
              <p className="mt-4 max-w-[62ch] text-base leading-8 text-neutral-400">
                In-person training is based in Leetonia, Ohio. Clients
                traveling from other parts of Ohio or the surrounding region
                may contact us to discuss scheduling, evaluation locations, and
                available transportation arrangements.
              </p>
              <a
                href="#pricing"
                className="mt-8 inline-flex items-center justify-center rounded-2xl bg-amber-500 px-6 py-3.5 font-semibold text-black transition hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-amber-300"
              >
                Compare Training Programs
              </a>
            </div>

            <div className="rounded-[2rem] border border-neutral-800 bg-neutral-900/70 p-4">
              <ResponsiveMedia
                src={publicStoreTraining.src}
                alt={publicStoreTraining.alt}
                sizes="(min-width: 1024px) 44vw, 100vw"
                aspectRatio="16 / 10"
                objectFit="contain"
              />
            </div>
          </div>
        </section>

        <Pricing />

        <section className="border-b border-neutral-900 bg-neutral-950">
          <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-12 lg:py-16">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-amber-400">
                Training Proof
              </p>
              <h2 className="mt-4 text-3xl font-bold text-white md:text-5xl">
                Training Beyond the Backyard
              </h2>
              <p className="mt-6 max-w-[62ch] text-lg leading-8 text-neutral-300">
                Training is practiced in everyday places where dogs need to
                stay calm, responsive, and clear with their handler.
              </p>
            </div>

            <div className="mt-10 grid gap-5 lg:grid-cols-2">
              <div className="rounded-[2rem] border border-neutral-800 bg-neutral-900/70 p-4">
                <ResponsiveMedia
                  src={publicStoreTraining.src}
                  alt={publicStoreTraining.alt}
                  sizes="(min-width: 1024px) 44vw, 100vw"
                  aspectRatio="16 / 10"
                  objectFit="contain"
                />
                <div className="px-2 pb-2 pt-5">
                  <h3 className="text-xl font-semibold text-white">Store</h3>
                  <p className="mt-3 text-sm leading-7 text-neutral-300">
                    Calm obedience around shoppers, carts, movement, and noise.
                  </p>
                </div>
              </div>

              <TrainingVideo
                src={publicOfficeTraining.src}
                title="Doctor&apos;s Office"
                description="Settling quietly in an everyday public environment."
                aspectRatio="16 / 10"
                controls
              />

              <div className="rounded-[2rem] border border-neutral-800 bg-neutral-900/70 p-4">
                <ResponsiveMedia
                  src={placeCommandOutdoors.src}
                  alt={placeCommandOutdoors.alt}
                  sizes="(min-width: 1024px) 44vw, 100vw"
                  aspectRatio="16 / 10"
                  objectFit="contain"
                />
                <div className="px-2 pb-2 pt-5">
                  <h3 className="text-xl font-semibold text-white">
                    Stay and Release
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-neutral-300">
                    Maintaining position until the handler gives a clear release
                    cue.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-neutral-900 bg-neutral-900/40">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:px-8 lg:grid-cols-[1.08fr_0.92fr] lg:px-12 lg:py-16">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-amber-400">
                Our Training Environment
              </p>
              <h2 className="mt-4 text-3xl font-bold text-white md:text-5xl">
                Room to Train, Learn, and Develop
              </h2>
              <p className="mt-6 max-w-[62ch] text-lg leading-8 text-neutral-300">
                Patriot K9 Command operates in a rural Ohio setting with room
                for structured obedience, puppy development, controlled
                exposure, and outdoor distraction work.
              </p>
              <p className="mt-4 max-w-[62ch] text-base leading-8 text-neutral-400">
                Based in Leetonia, Ohio and serving clients throughout Ohio and
                the surrounding tri-state region.
              </p>

              <div className="mt-8 rounded-[2rem] border border-neutral-800 bg-neutral-900/70 p-4">
                <ResponsiveMedia
                  src={facilityOverview.src}
                  alt={facilityOverview.alt}
                  sizes="(min-width: 1024px) 54vw, 100vw"
                  aspectRatio="16 / 9"
                  objectFit="contain"
                />
              </div>
            </div>

            <div className="rounded-[2rem] border border-neutral-800 bg-neutral-900/70 p-4">
              <ResponsiveMedia
                src={kennelRoom.src}
                alt={kennelRoom.alt}
                sizes="(min-width: 1024px) 34vw, 100vw"
                aspectRatio="4 / 5"
                objectFit="contain"
              />
              <div className="px-2 pb-2 pt-5">
                <h3 className="text-xl font-semibold text-white">
                  Practical Boarding Space
                </h3>
                <p className="mt-3 text-sm leading-7 text-neutral-300">
                  Clean kennel space supports daily structure, dog care, and
                  board-and-train routines without overstating the facility.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-neutral-900 bg-neutral-950">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:px-8 lg:grid-cols-[0.96fr_1.04fr] lg:px-12 lg:py-16">
            <div className="rounded-[2rem] border border-neutral-800 bg-neutral-900/70 p-4">
              <ResponsiveMedia
                src={communityImage.src}
                alt={communityImage.alt}
                sizes="(min-width: 1024px) 40vw, 100vw"
                aspectRatio="16 / 10"
                objectFit="contain"
              />
            </div>

            <div className="max-w-2xl self-center">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-amber-400">
                Veteran-Owned
              </p>
              <h2 className="mt-4 text-3xl font-bold text-white md:text-5xl">
                Built Through Dogs, Service, and Community
              </h2>
              <p className="mt-6 max-w-[62ch] text-lg leading-8 text-neutral-300">
                Patriot K9 Command is veteran-owned and rooted in long-term
                relationships with clients, families, and fellow veterans. Our
                work is centered on responsible placement, practical training,
                and continued support as dogs grow into their roles at home and
                in the community.
              </p>
            </div>
          </div>
        </section>

        <section className="border-b border-neutral-900 bg-neutral-900/40">
          <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-12 lg:py-16">
            <div className="rounded-[2rem] border border-neutral-800 bg-neutral-950 px-6 py-8 shadow-[0_20px_60px_rgba(0,0,0,0.25)] md:px-8 md:py-10">
              <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
                <div className="max-w-3xl">
                  <p className="text-sm font-semibold uppercase tracking-[0.28em] text-amber-400">
                    Contact
                  </p>
                  <h2 className="mt-4 text-3xl font-bold text-white md:text-5xl">
                    Start With the Right Next Step
                  </h2>
                  <p className="mt-6 max-w-[62ch] text-lg leading-8 text-neutral-300">
                    Whether you are looking for a German Shepherd puppy,
                    in-person training, or help choosing the right program,
                    tell us about your goals and location. Patriot K9 Command
                    is based in Leetonia, Ohio and works with clients
                    throughout Ohio and the surrounding tri-state region.
                  </p>
                  <p className="mt-4 max-w-[62ch] text-sm leading-7 text-neutral-400">
                    Pickup, meet-up, and delivery arrangements may be available
                    depending on the service, distance, and scheduling.
                  </p>
                </div>

                <div className="space-y-4 self-center">
                  <Link
                    href="/apply"
                    className="inline-flex w-full items-center justify-center rounded-2xl bg-amber-500 px-6 py-3.5 font-semibold text-black transition hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-amber-300"
                  >
                    Apply for a Puppy
                  </Link>
                  <Link
                    href="/training/evaluation"
                    className="inline-flex w-full items-center justify-center rounded-2xl border border-neutral-700 px-6 py-3.5 font-semibold text-white transition hover:bg-neutral-900 focus:outline-none focus:ring-2 focus:ring-neutral-400"
                  >
                    Schedule a Training Evaluation
                  </Link>
                  <div className="pt-2 text-sm leading-7 text-neutral-400">
                    <p>
                      Email:{" "}
                      <a
                        href="mailto:jreese@hapticvets.com"
                        className="text-white transition hover:text-amber-300"
                      >
                        jreese@hapticvets.com
                      </a>
                    </p>
                    <p>
                      Call or Text:{" "}
                      <a
                        href="tel:8132996905"
                        className="text-white transition hover:text-amber-300"
                      >
                        (813) 299-6905
                      </a>
                    </p>
                    <p>Text message preferred for first contact.</p>
                    <p>Based in Leetonia, Ohio.</p>
                    <p>Serving Ohio and the surrounding tri-state region.</p>
                    <p>Visits are by appointment only.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer className="bg-neutral-950">
          <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-8 text-sm text-neutral-400 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-12">
            <div>
              <p className="font-semibold uppercase tracking-[0.18em] text-white">
                Patriot K9 Command
              </p>
              <p className="mt-2">
                Based in Leetonia, Ohio. Serving Ohio and the surrounding
                tri-state region.
              </p>
              <p className="mt-2">
                Pickup, scheduled meet-up, and delivery arrangements may be
                available.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link href="/apply" className="transition hover:text-white">
                Apply for a Puppy
              </Link>
              <Link
                href="/training/evaluation"
                className="transition hover:text-white"
              >
                Training Evaluation
              </Link>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
