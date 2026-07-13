import type { Metadata } from "next";
import Header from "@/components/Header";
import PuppyApplicationWizard from "@/components/PuppyApplicationWizard";
import ResponsiveMedia from "@/components/media/ResponsiveMedia";
import { siteMediaById } from "@/lib/siteMedia";

export const metadata: Metadata = {
  title: "Puppy Application",
  description:
    "Apply for a Patriot K9 Command German Shepherd puppy and tell us about your home, goals, and expectations.",
  alternates: {
    canonical: "/apply",
  },
  openGraph: {
    title: "Puppy Application",
    description:
      "Apply for a Patriot K9 Command German Shepherd puppy and tell us about your home, goals, and expectations.",
    url: "/apply",
    images: [
      {
        url: "/images/branding/og-image.jpg",
        width: 1358,
        height: 1159,
        alt: "Patriot K9 Command German Shepherd breeding and training",
      },
    ],
  },
  twitter: {
    title: "Puppy Application",
    description:
      "Apply for a Patriot K9 Command German Shepherd puppy and tell us about your home, goals, and expectations.",
    images: ["/images/branding/og-image.jpg"],
  },
};

export default function ApplyPage() {
  const puppyPortrait = siteMediaById["puppy-black-tan-portrait-outdoors"];

  return (
    <>
      <Header />

      <main className="min-h-screen bg-neutral-950 text-white">
        <section className="border-b border-neutral-900 bg-[linear-gradient(180deg,rgba(23,23,23,0.95)_0%,rgba(10,10,10,1)_100%)]">
          <div className="mx-auto grid max-w-7xl items-center gap-8 px-5 py-12 sm:px-8 sm:py-14 lg:grid-cols-[minmax(0,0.52fr)_minmax(0,0.48fr)] lg:gap-12 lg:px-12 lg:py-16">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-amber-400">
                Puppy Application
              </p>
              <h1 className="mt-4 max-w-[14ch] text-4xl font-bold leading-[1] text-white md:max-w-[15ch] md:text-5xl lg:text-[3.7rem]">
                Help Us Understand Your Home and Goals
              </h1>
              <p className="mt-6 max-w-[62ch] text-lg leading-8 text-neutral-300">
                This application helps us evaluate household fit, experience,
                expectations, and the type of German Shepherd that may suit
                your lifestyle. Submission does not guarantee placement.
              </p>
              <p className="mt-4 max-w-[62ch] text-sm leading-7 text-neutral-400">
                Your information is used only to review your application and
                communicate with you about potential placement.
              </p>
              <p className="mt-4 max-w-[62ch] text-sm leading-7 text-neutral-400">
                Based in Leetonia, Ohio. Serving clients throughout Ohio and
                the surrounding tri-state region.
              </p>
            </div>

            <div className="w-full max-w-xl justify-self-center lg:max-w-[34rem] lg:justify-self-end">
              <ResponsiveMedia
                src={puppyPortrait.src}
                alt={puppyPortrait.alt}
                sizes="(min-width: 1280px) 31vw, (min-width: 1024px) 34vw, 100vw"
                aspectRatio="4 / 5"
                objectFit="contain"
                objectPosition="center top"
                priority
                framed={false}
                wrapperClassName="rounded-[1.85rem] border border-neutral-700/80 bg-neutral-950/40 shadow-[0_24px_56px_rgba(0,0,0,0.26)] ring-1 ring-amber-400/10"
              />
            </div>
          </div>
        </section>

        <section className="border-b border-neutral-900 bg-neutral-900/35">
          <div className="mx-auto max-w-5xl px-5 py-10 sm:px-8 sm:py-12 lg:px-12 lg:py-12">
            <div className="surface-card p-6 md:p-8">
              <p className="section-eyebrow">
                Pickup, Meet-Up, and Delivery Options
              </p>
              <p className="mt-4 max-w-4xl text-lg leading-8 text-neutral-300">
                Families may pick up their puppy directly from Patriot K9
                Command in Leetonia, Ohio. Depending on distance and
                scheduling, we may also arrange a scheduled meet-up location,
                coordinated pickup, or delivery. Transportation availability
                and any related fee are confirmed individually before
                placement.
              </p>
              <p className="mt-4 text-sm leading-7 text-neutral-400">
                Transportation arrangements are not guaranteed until confirmed
                directly by Patriot K9 Command.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-neutral-950">
          <div className="mx-auto max-w-5xl px-5 py-10 sm:px-8 sm:py-12 lg:px-12 lg:py-12">
            <PuppyApplicationWizard />
          </div>
        </section>
      </main>
    </>
  );
}
