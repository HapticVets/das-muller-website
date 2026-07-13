import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import ResponsiveMedia from "@/components/media/ResponsiveMedia";
import TrainingVideo from "@/components/media/TrainingVideo";
import { siteMediaById } from "@/lib/siteMedia";
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

const trainingPageMedia: Partial<
  Record<
    TrainingService["slug"],
    {
      heading: string;
      copy: string;
      notes?: string[];
      items: Array<
        | {
            type: "image";
            mediaId: keyof typeof siteMediaById;
            aspectRatio?: number | string;
            objectFit?: "cover" | "contain";
          }
        | {
            type: "video";
            mediaId: keyof typeof siteMediaById;
            aspectRatio?: number | string;
            controls?: boolean;
            autoPlay?: boolean;
            loop?: boolean;
          }
      >;
    }
  >
> = {
  "behavior-modification": {
    heading: "Controlled Behavior Work with Real Context",
    copy:
      "Behavior work is built around neutrality, controlled exposure, handler timing, and realistic thresholds. The goal is steadier decision-making and safer responses, not empty promises.",
    notes: [
      "Neutrality means the dog can acknowledge a trigger without escalating into chaotic behavior.",
      "Controlled exposure helps us work at a threshold where learning is still possible.",
      "Impulse control and handler consistency matter as much as the session itself.",
      "No training plan can guarantee the same outcome for every dog or every home.",
    ],
    items: [
      {
        type: "video",
        mediaId: "training-behavior-modification-neutrality",
        aspectRatio: "16 / 9",
        controls: true,
      },
      {
        type: "image",
        mediaId: "training-calm-around-cat",
        aspectRatio: "16 / 10",
        objectFit: "contain",
      },
    ],
  },
  "private-lessons": {
    heading: "Hands-On Lessons with Practical Repetition",
    copy:
      "Private lessons are built for owners who want to handle the dog themselves while improving timing, leash communication, place work, and follow-through between sessions.",
    items: [
      {
        type: "video",
        mediaId: "training-place-stay-with-release-command",
        aspectRatio: "16 / 9",
        controls: true,
      },
      {
        type: "image",
        mediaId: "training-place-command-outdoors",
        aspectRatio: "16 / 10",
        objectFit: "contain",
      },
    ],
  },
  "board-and-train": {
    heading: "Daily Structure That Transfers into Public Life",
    copy:
      "Board and train is designed to create repetition, obedience, calmer behavior, and stronger public manners before the owner handoff phase begins.",
    items: [
      {
        type: "image",
        mediaId: "training-public-down-stay-store",
        aspectRatio: "16 / 10",
        objectFit: "contain",
      },
      {
        type: "video",
        mediaId: "training-public-place-command-doctors-office",
        aspectRatio: "16 / 9",
        controls: true,
      },
    ],
  },
  "puppy-foundation": {
    heading: "Early Development with Structure and Exposure",
    copy:
      "Puppy foundation work starts with engagement, basic structure, environmental exposure, and clean communication so owners can build the right habits from the beginning.",
    items: [
      {
        type: "video",
        mediaId: "puppy-ball-drive-development",
        aspectRatio: "16 / 9",
        autoPlay: false,
        loop: false,
        controls: true,
      },
      {
        type: "image",
        mediaId: "puppy-evaluations-vet-office-group",
        aspectRatio: "16 / 10",
        objectFit: "contain",
      },
    ],
  },
};

function SectionList({
  title,
  items,
}: {
  title: string;
  items: string[];
}) {
  return (
    <section className="surface-card p-8">
      <p className="section-eyebrow">{title}</p>
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
  const pageMedia = trainingPageMedia[service.slug];

  return (
    <>
      <Header />

      <main className="min-h-screen bg-neutral-950 text-white">
        <section className="border-b border-neutral-900 bg-[linear-gradient(180deg,rgba(23,23,23,0.92)_0%,rgba(10,10,10,1)_100%)]">
          <div className="section-shell grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:py-24">
            <div className="max-w-3xl">
              <p className="section-eyebrow">Training Services</p>
              <h1 className="section-title max-w-[14ch]">{service.title}</h1>
              <p className="section-copy">{service.shortDescription}</p>
              <p className="mt-4 max-w-2xl text-base leading-8 text-neutral-400">
                In-person training is based in Leetonia, Ohio. Clients
                traveling from other parts of Ohio or the surrounding region
                may contact us to discuss scheduling, evaluation locations, and
                available transportation arrangements.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="mailto:jreese@hapticvets.com?subject=Training%20Inquiry"
                  className="action-primary"
                >
                  Email About Training
                </a>
                <a href="tel:8132996905" className="action-secondary">
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
                  <Image
                    src={trainingBannerImages[service.slug]}
                    alt={`${service.title} banner`}
                    fill
                    sizes="(min-width: 1024px) 40vw, 100vw"
                    className="object-contain"
                  />
                  <div className="absolute inset-0 bg-black/45" />
                </div>
              )}
            </div>
          </div>
        </section>

        <section className="border-b border-neutral-900 bg-neutral-900/40">
          <div className="section-shell-tight grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <article className="surface-card p-8">
              <p className="section-eyebrow">Purpose</p>
              <p className="mt-4 text-lg leading-8 text-neutral-300">
                {service.purpose}
              </p>
            </article>

            <aside className="rounded-3xl border border-amber-500/20 bg-amber-500/10 p-8">
              <p className="section-eyebrow text-amber-300">Price</p>
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

        <section className="section-shell-tight">
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

        {pageMedia ? (
          <section className="border-t border-neutral-900 bg-neutral-950">
            <div className="section-shell-tight">
              <div className="max-w-3xl">
                <p className="section-eyebrow">Training in Practice</p>
                <h2 className="section-title max-w-[15ch]">
                  {pageMedia.heading}
                </h2>
                <p className="section-copy">{pageMedia.copy}</p>
              </div>

              <div className="mt-12 grid gap-6 lg:grid-cols-2">
                {pageMedia.items.map((item) => {
                  const media = siteMediaById[item.mediaId];

                  if (item.type === "video") {
                    return (
                      <TrainingVideo
                        key={media.id}
                        src={media.src}
                        title={media.title}
                        description={media.description}
                        aspectRatio={item.aspectRatio}
                        autoPlay={item.autoPlay ?? false}
                        loop={item.loop ?? false}
                        controls={item.controls ?? true}
                      />
                    );
                  }

                  return (
                    <div className="surface-card p-4" key={media.id}>
                      <ResponsiveMedia
                        src={media.src}
                        alt={media.alt}
                        sizes="(min-width: 1024px) 45vw, 100vw"
                        aspectRatio={item.aspectRatio}
                        objectFit={item.objectFit ?? "cover"}
                      />
                      <div className="p-2 pt-5">
                        <h3 className="text-xl font-semibold text-white">
                          {media.title}
                        </h3>
                        <p className="mt-3 text-sm leading-7 text-neutral-300">
                          {media.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {pageMedia.notes?.length ? (
                <div className="surface-card-soft mt-6 p-8">
                  <p className="section-eyebrow">Important Context</p>
                  <ul className="mt-6 space-y-4 text-neutral-300">
                    {pageMedia.notes.map((note) => (
                      <li className="flex gap-3" key={note}>
                        <span className="mt-2 h-2 w-2 rounded-full bg-amber-400" />
                        <span className="leading-7">{note}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </div>
          </section>
        ) : null}

        <section className="border-t border-neutral-900 bg-neutral-900/40">
          <div className="section-shell-tight">
            <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
              <article className="surface-card p-8">
                <p className="section-eyebrow">Contact</p>
                <h2 className="section-title max-w-[14ch]">
                  Start With the Right Next Step
                </h2>
                <p className="section-copy">
                  Whether you are looking for a German Shepherd puppy,
                  in-person training, or help choosing the right program, tell
                  us about your goals and location. Patriot K9 Command is based
                  in Leetonia, Ohio and works with clients throughout Ohio and
                  the surrounding tri-state region.
                </p>
                <p className="mt-4 max-w-3xl text-sm leading-7 text-neutral-400">
                  Pickup, meet-up, and delivery arrangements may be available
                  depending on the service, distance, and scheduling.
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <a
                    href="mailto:jreese@hapticvets.com?subject=Training%20Inquiry"
                    className="action-primary"
                  >
                    Email About Training
                  </a>
                  <a href="tel:8132996905" className="action-secondary">
                    Call or Text: (813) 299-6905
                  </a>
                </div>
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
                  <p className="text-base text-neutral-400">
                    Located at 4277 Lisbon Rd, Leetonia, OH 44431. Visits are
                    by appointment only. Please do not arrive without
                    scheduling first.
                  </p>
                  <p className="text-base text-neutral-400">
                    Pickup and drop-off may be available for select programs
                    and locations by prior arrangement.
                  </p>
                </div>
              </article>

              <aside className="surface-card p-8">
                <p className="section-eyebrow">Puppy Inquiries</p>
                <p className="mt-6 text-lg leading-8 text-neutral-300">
                  For puppy applications, submit the application and we will
                  contact you within 24 hours.
                </p>
                <Link href="/apply" className="action-primary mt-8">
                  Start Your Puppy Application
                </Link>
              </aside>
            </div>
          </div>
        </section>

        <section className="border-t border-neutral-900 bg-neutral-900/40">
          <div className="section-shell-tight max-w-5xl text-center">
            <p className="section-eyebrow">Patriot K9 Command</p>
            <h2 className="mt-4 text-3xl font-bold md:text-5xl">
              Structured training with clear standards and practical direction.
            </h2>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-neutral-300">
              Every program is built to improve communication, structure, and
              practical handling without making unrealistic guarantees about
              outcomes.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <a
                href="mailto:jreese@hapticvets.com?subject=Training%20Inquiry"
                className="action-primary"
              >
                Email About Training
              </a>
              <a href="tel:8132996905" className="action-secondary">
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
