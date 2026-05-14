import Header from "@/components/Header";
import type { TrainingService } from "@/lib/trainingServices";

const trainingBannerImages: Record<TrainingService["slug"], string> = {
  evaluation: "/images/training/evaluation-banner.png",
  "puppy-foundation": "/images/training/puppy-foundation-banner.png",
  "private-lessons": "/images/training/private-lessons-banner.png",
  "day-training": "/images/training/day-training-banner.png",
  "board-and-train": "/images/training/board-and-train-banner.png",
  "behavior-modification": "/images/training/behavior-modification-banner.png",
  "service-dog-foundations":
    "/images/training/service-dog-foundations-banner.png",
};

const trainingHeroVideos: Partial<Record<TrainingService["slug"], string>> = {
  "puppy-foundation": "/videos/training/puppy-foundation.mp4",
  "behavior-modification": "/videos/training/behavior-modification.mp4",
};

function SectionList({
  title,
  items,
}: {
  title: string;
  items: string[];
}) {
  return (
    <section className="rounded-3xl border border-neutral-800 bg-neutral-950/90 p-8">
      <p className="text-sm uppercase tracking-[0.2em] text-amber-400">
        {title}
      </p>
      <ul className="mt-6 space-y-4 text-neutral-300">
        {items.map((item) => (
          <li className="flex gap-3" key={item}>
            <span className="mt-2 h-2 w-2 rounded-full bg-amber-400" />
            <span className="leading-7">{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default function TrainingServicePage({
  service,
}: {
  service: TrainingService;
}) {
  return (
    <>
      <Header />

      <main className="min-h-screen bg-neutral-950 text-white">
        <section className="border-b border-neutral-900 bg-[linear-gradient(180deg,rgba(23,23,23,0.92)_0%,rgba(10,10,10,1)_100%)]">
          <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 md:px-10 lg:grid-cols-[1.1fr_0.9fr] lg:px-12 lg:py-24">
            <div className="max-w-3xl">
              <p className="text-sm uppercase tracking-[0.25em] text-amber-400">
                Training Services
              </p>
              <h1 className="mt-4 text-4xl font-bold leading-tight md:text-6xl">
                {service.title}
              </h1>
              <p className="mt-6 text-lg leading-8 text-neutral-300">
                {service.shortDescription}
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="mailto:jreese@hapticvets.com?subject=Training%20Inquiry"
                  className="rounded-2xl bg-amber-500 px-6 py-3 font-semibold text-black hover:opacity-90"
                >
                  Email About Training
                </a>
                <a
                  href="tel:8132996905"
                  className="rounded-2xl border border-neutral-700 px-6 py-3 font-semibold text-white hover:bg-neutral-900"
                >
                  Call or Text: (813) 299-6905
                </a>
              </div>
              <p className="mt-6 max-w-2xl text-sm leading-7 text-neutral-400">
                Text message preferred for first contact. If calling, please
                leave a voicemail.
              </p>
            </div>

            <div className="rounded-[2rem] border border-neutral-800 bg-neutral-900/70 p-4">
              {trainingHeroVideos[service.slug] ? (
                <div className="relative h-full min-h-80 overflow-hidden rounded-[1.5rem] border border-neutral-700">
                  <video
                    autoPlay
                    aria-hidden="true"
                    className="pointer-events-none select-none absolute inset-0 h-full w-full object-cover"
                    controls={false}
                    controlsList="nodownload nofullscreen noremoteplayback"
                    disablePictureInPicture
                    loop
                    muted
                    playsInline
                    tabIndex={-1}
                  >
                    <source
                      src={trainingHeroVideos[service.slug]}
                      type="video/mp4"
                    />
                  </video>
                  <div className="absolute inset-0 z-10 bg-transparent" />
                  <div className="absolute inset-0 bg-black/45" />
                  <div className="relative z-20 flex h-full min-h-80 items-end p-8">
                    <div>
                      {service.slug === "puppy-foundation" ? (
                        <>
                          <p className="text-sm uppercase tracking-[0.25em] text-amber-300">
                            PUPPY FOUNDATION
                          </p>
                          <h2 className="mt-3 text-3xl font-bold leading-tight text-white md:text-5xl">
                            STRUCTURE EARLY. BUILD RIGHT.
                          </h2>
                        </>
                      ) : null}

                      {service.slug === "behavior-modification" ? (
                        <>
                          <p className="text-sm uppercase tracking-[0.25em] text-amber-300">
                            BEHAVIOR MODIFICATION
                          </p>
                          <h2 className="mt-3 text-3xl font-bold leading-tight text-white md:text-5xl">
                            REAL CHANGE. LASTING RESULTS.
                          </h2>
                        </>
                      ) : null}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="relative h-full min-h-80 overflow-hidden rounded-[1.5rem] border border-neutral-700 bg-neutral-950">
                  <img
                    alt={`${service.title} banner`}
                    className="absolute inset-0 h-full w-full object-contain"
                    src={trainingBannerImages[service.slug]}
                  />
                  <div className="absolute inset-0 bg-black/45" />
                </div>
              )}
            </div>
          </div>
        </section>

        <section className="border-b border-neutral-900 bg-neutral-900/40">
          <div className="mx-auto grid max-w-7xl gap-6 px-6 py-16 md:px-10 lg:grid-cols-[1.1fr_0.9fr] lg:px-12">
            <article className="rounded-3xl border border-neutral-800 bg-neutral-950/90 p-8">
              <p className="text-sm uppercase tracking-[0.2em] text-amber-400">
                Purpose
              </p>
              <p className="mt-4 text-lg leading-8 text-neutral-300">
                {service.purpose}
              </p>
            </article>

            <aside className="rounded-3xl border border-amber-500/20 bg-amber-500/10 p-8">
              <p className="text-sm uppercase tracking-[0.2em] text-amber-300">
                Price
              </p>
              <p className="mt-4 text-3xl font-bold text-white">
                {service.price}
              </p>
              <p className="mt-4 leading-7 text-neutral-200">
                Clear training structure, direct standards, and a practical next
                step for owners who want real progress.
              </p>
            </aside>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-16 md:px-10 lg:px-12">
          <div className="grid gap-6 lg:grid-cols-2">
            <SectionList title="Who This Is For" items={service.whoItsFor} />
            <SectionList title="What Is Included" items={service.included} />
            <SectionList title="Training Goals" items={service.trainingGoals} />
            <SectionList
              title="Owner Expectations"
              items={service.ownerExpectations}
            />
          </div>
        </section>

        <section className="border-t border-neutral-900 bg-neutral-900/40">
          <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 lg:px-12">
            <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
              <article className="rounded-3xl border border-neutral-800 bg-neutral-950/90 p-8">
                <p className="text-sm uppercase tracking-[0.25em] text-amber-400">
                  Contact
                </p>
                <h2 className="mt-4 text-3xl font-bold md:text-5xl">
                  Located in Leetonia, Ohio
                </h2>
                <div className="mt-8 space-y-4 text-lg leading-8 text-neutral-300">
                  <p>
                    Email:{" "}
                    <a
                      href="mailto:jreese@hapticvets.com"
                      className="text-white hover:text-amber-300"
                    >
                      jreese@hapticvets.com
                    </a>
                  </p>
                  <p>
                    Call or Text:{" "}
                    <a
                      href="tel:8132996905"
                      className="text-white hover:text-amber-300"
                    >
                      (813) 299-6905
                    </a>
                  </p>
                  <p className="text-base text-neutral-400">
                    Text message preferred for first contact. If calling,
                    please leave a voicemail.
                  </p>
                </div>
              </article>

              <aside className="rounded-3xl border border-neutral-800 bg-neutral-950 p-8">
                <p className="text-sm uppercase tracking-[0.25em] text-amber-400">
                  Puppy Inquiries
                </p>
                <p className="mt-6 text-lg leading-8 text-neutral-300">
                  For puppy applications, submit the application and we will
                  contact you within 24 hours.
                </p>
                <a
                  href="/#application"
                  className="mt-8 inline-block rounded-2xl bg-amber-500 px-6 py-3 font-semibold text-black hover:opacity-90"
                >
                  Start Your Puppy Application
                </a>
              </aside>
            </div>
          </div>
        </section>

        <section className="border-t border-neutral-900 bg-neutral-900/40">
          <div className="mx-auto max-w-5xl px-6 py-16 text-center md:px-10">
            <p className="text-sm uppercase tracking-[0.25em] text-amber-400">
              Patriot K9 Command
            </p>
            <h2 className="mt-4 text-3xl font-bold md:text-5xl">
              Structured training with clear standards and practical direction.
            </h2>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-neutral-300">
              Every program is built to improve communication, structure, and
              real-world handling without making unrealistic guarantees about
              outcomes.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <a
                href="mailto:jreese@hapticvets.com?subject=Training%20Inquiry"
                className="rounded-2xl bg-amber-500 px-6 py-3 font-semibold text-black hover:opacity-90"
              >
                Email About Training
              </a>
              <a
                href="tel:8132996905"
                className="rounded-2xl border border-neutral-700 px-6 py-3 font-semibold text-white hover:bg-neutral-900"
              >
                Call or Text: (813) 299-6905
              </a>
            </div>
            <p className="mx-auto mt-6 max-w-3xl text-sm leading-7 text-neutral-400">
              Text message preferred for first contact. If calling, please
              leave a voicemail.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
