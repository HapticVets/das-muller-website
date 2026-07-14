import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import {
  AI_TRAINER_FREE_MESSAGES,
  AI_TRAINER_MONTHLY_PRICE,
  AI_TRAINER_PRICE_LINE,
  AI_TRAINER_SUPPORTING_LINE,
  ONLINE_TRAINING_APP_URL,
} from "@/lib/siteUrls";

export const metadata: Metadata = {
  title: "AI Dog Trainer",
  description:
    "Personalized online dog training guidance from Patriot K9 Command for puppy foundations, obedience, household manners, and everyday training challenges.",
  alternates: {
    canonical: "/ai-dog-trainer",
  },
  openGraph: {
    title: "Patriot K9 AI Trainer",
    description:
      "Train at home with personalized plans, saved progress, and structured online guidance.",
    url: "/ai-dog-trainer",
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
    title: "Patriot K9 AI Trainer",
    description:
      "Train at home with personalized plans, saved progress, and structured online guidance.",
    images: ["/images/branding/og-image.jpg"],
  },
};

const valueItems = [
  "Create profiles for multiple dogs",
  "Receive personalized training guidance",
  "Build step-by-step training plans",
  "Save session notes and progress",
  "Review previous conversations and reports",
  "Get help whenever your schedule allows",
];

const bestForItems = [
  "New puppy owners",
  "Basic obedience and manners",
  "Leash pulling",
  "Recall foundations",
  "Crate and routine guidance",
  "Household structure",
  "Training refreshers",
  "Owners outside the in-person service area",
  "Owners who prefer a lower monthly commitment",
];

const comparisonColumns = [
  {
    title: "AI Trainer",
    subtitle: `${AI_TRAINER_MONTHLY_PRICE}/month`,
    items: [
      `Start with ${AI_TRAINER_FREE_MESSAGES} free messages`,
      "Train on your schedule",
      "Available from anywhere",
      "Personalized guidance",
      "Progress tracking",
      "Best for owner-led training",
    ],
  },
  {
    title: "Private Lessons",
    subtitle: "$120 single session, $700 for 6 sessions, $1,200 for 12 sessions",
    items: [
      "Hands-on coaching",
      "Trainer feedback in person",
      "Scheduled sessions",
      "Best for owners wanting direct instruction",
    ],
  },
  {
    title: "Board & Train",
    subtitle: "$2,200 for 2 weeks, $3,800 for 4 weeks, $5,500 for 6 weeks",
    items: [
      "Intensive professional training",
      "Dog stays with the trainer",
      "Structured daily work",
      "Best for more involved training needs",
    ],
  },
];

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="mt-6 space-y-4 text-neutral-300">
      {items.map((item) => (
        <li className="flex gap-3" key={item}>
          <span className="mt-2 h-2 w-2 rounded-full bg-amber-400" />
          <span className="leading-7">{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function AiDogTrainerPage() {
  return (
    <>
      <Header />

      <main className="min-h-screen bg-neutral-950 text-white">
        <section className="border-b border-neutral-900 bg-[radial-gradient(circle_at_top_right,rgba(245,158,11,0.14),transparent_32%),linear-gradient(180deg,rgba(23,23,23,0.96)_0%,rgba(10,10,10,1)_78%)]">
          <div className="section-shell grid gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-center lg:py-24">
            <div className="max-w-3xl">
              <p className="section-eyebrow">Online Dog Training</p>
              <h1 className="section-title max-w-[13ch]">
                Train at Home With Structured Guidance
              </h1>
              <p className="section-copy">
                The Patriot K9 AI Trainer gives dog owners personalized
                training guidance they can follow on their own schedule. Build
                plans around your dog, save progress, review past sessions, and
                get practical help with puppy development, obedience,
                household manners, and common training challenges.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href={ONLINE_TRAINING_APP_URL}
                  className="action-primary"
                  rel="noreferrer"
                  target="_blank"
                >
                  Start With {AI_TRAINER_FREE_MESSAGES} Free Messages
                </a>
                <a
                  href={ONLINE_TRAINING_APP_URL}
                  className="action-secondary"
                  rel="noreferrer"
                  target="_blank"
                >
                  Open the AI Trainer
                </a>
              </div>
              <p className="mt-6 text-base leading-8 text-amber-100/90">
                {AI_TRAINER_SUPPORTING_LINE}
              </p>
            </div>

            <div className="rounded-[1.75rem] border border-amber-500/20 bg-neutral-950/80 p-7 shadow-[0_20px_60px_rgba(0,0,0,0.24)] md:p-8">
              <p className="section-eyebrow text-amber-300">
                Structured Online Support
              </p>
              <h2 className="mt-4 text-3xl font-semibold text-white">
                A practical lower-commitment option for owners who want to work
                at home first.
              </h2>
              <BulletList
                items={[
                  "Owner-led training support without waiting for a scheduled session",
                  "Useful for early puppy work, routines, and foundational obedience",
                  "A strong starting point before deciding whether hands-on training is needed",
                ]}
              />
            </div>
          </div>
        </section>

        <section className="section-shell-tight border-b border-neutral-900">
          <div className="max-w-3xl">
            <p className="section-eyebrow">What You Can Do With the AI Trainer</p>
            <h2 className="section-title max-w-[14ch]">
              Personalized guidance that stays organized around your dog
            </h2>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {valueItems.map((item) => (
              <article className="surface-card p-7" key={item}>
                <p className="text-lg leading-8 text-neutral-200">{item}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section-shell-tight border-b border-neutral-900 bg-neutral-900/35">
          <div className="grid gap-6 lg:grid-cols-[1.02fr_0.98fr]">
            <article className="surface-card p-8">
              <p className="section-eyebrow">
                Best for Owners Who Want to Train at Home
              </p>
              <h2 className="mt-4 text-3xl font-semibold text-white">
                A strong fit for foundational work, refreshers, and owners who
                want flexibility.
              </h2>
              <BulletList items={bestForItems} />
            </article>

            <article className="surface-card p-8">
              <p className="section-eyebrow">When In-Person Training Is the Better Choice</p>
              <p className="mt-5 text-lg leading-8 text-neutral-300">
                Online guidance can support puppy development, obedience,
                management, and training homework. Dogs with serious
                aggression, bite history, severe reactivity, or immediate
                safety concerns may require an in-person professional
                evaluation.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="/#pricing" className="action-primary">
                  View In-Person Training
                </Link>
                <Link href="/training/evaluation" className="action-secondary">
                  Schedule an Evaluation
                </Link>
              </div>
            </article>
          </div>
        </section>

        <section className="section-shell-tight border-b border-neutral-900">
          <div className="max-w-3xl">
            <p className="section-eyebrow">Comparison</p>
            <h2 className="section-title max-w-[14ch]">
              Choose the training path that matches your dog and your schedule
            </h2>
          </div>

          <div className="mt-10 grid gap-5 xl:grid-cols-3">
            {comparisonColumns.map((column) => (
              <article className="surface-card p-8" key={column.title}>
                <p className="section-eyebrow">{column.title}</p>
                <h3 className="mt-4 text-2xl font-semibold text-white">
                  {column.subtitle}
                </h3>
                <BulletList items={column.items} />
              </article>
            ))}
          </div>
        </section>

        <section className="border-b border-neutral-900 bg-neutral-900/40">
          <div className="section-shell-tight max-w-5xl text-center">
            <p className="section-eyebrow">Start Training Online</p>
            <h2 className="mt-4 text-3xl font-bold md:text-5xl">
              Begin With Your Dog Today
            </h2>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-neutral-300">
              Create your dog&apos;s profile, explain what you are working on,
              and receive a structured place to begin.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <a
                href={ONLINE_TRAINING_APP_URL}
                className="action-primary"
                rel="noreferrer"
                target="_blank"
              >
                Try the AI Trainer
              </a>
            </div>
            <p className="mx-auto mt-6 max-w-3xl text-sm leading-7 text-neutral-400">
              {AI_TRAINER_PRICE_LINE}
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
