import Link from "next/link";

type PricingFeatureBlock = {
  title: string;
  price: string;
  features: string[];
  outcome?: string;
};

const corePhases: PricingFeatureBlock[] = [
  {
    title: "Foundation & Communication",
    price: "$1,000",
    features: [
      "Leash control and heel work",
      "Sit, down, place, and stay",
      "Engagement and focus",
      "Owner handling fundamentals",
    ],
    outcome: "Clearer communication and better listening in controlled settings.",
  },
  {
    title: "Control Around Distractions",
    price: "$1,000",
    features: [
      "Outdoor training environments",
      "Distraction proofing",
      "Owner confidence building",
      "Structured exposure to everyday pressure",
    ],
    outcome: "Stronger obedience while movement, noise, and distractions are present.",
  },
  {
    title: "Real-World Reliability",
    price: "$1,000",
    features: [
      "Public training sessions",
      "Advanced obedience work",
      "Off-leash progression if appropriate",
      "Real-life application training",
    ],
    outcome: "Better carryover into normal routines, outings, and everyday life.",
  },
];

const supportPrograms = [
  {
    title: "Maintenance Program",
    price: "$200/month",
    description:
      "For owners who want continued structure, tune-ups, and ongoing support after the initial training phase.",
    features: [
      "2 sessions per month",
      "Priority scheduling",
      "Continued behavior refinement",
      "Access to ongoing guidance",
    ],
  },
  {
    title: "2 Week Board & Train",
    price: "$2,200",
    features: [
      "Daily structured training",
      "Obedience foundation and behavior work",
      "Owner transfer session included",
    ],
  },
  {
    title: "4 Week Board & Train",
    price: "$3,800",
    features: [
      "Daily structured training",
      "Obedience foundation and behavior work",
      "Owner transfer session included",
    ],
  },
];

const privateSessions = [
  { label: "1 Session", price: "$120" },
  { label: "6 Sessions", price: "$700" },
  { label: "12 Sessions", price: "$1,200" },
];

const additionalServices = [
  { label: "Daycare / Training Day", price: "$80/day" },
  { label: "Boarding", price: "$600/week" },
];

function FeatureList({ features }: { features: string[] }) {
  return (
    <ul className="mt-5 space-y-3 text-sm leading-7 text-neutral-300">
      {features.map((feature) => (
        <li className="flex gap-3" key={feature}>
          <span className="mt-2 h-2 w-2 rounded-full bg-amber-400" />
          <span>{feature}</span>
        </li>
      ))}
    </ul>
  );
}

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="border-t border-neutral-900 bg-[linear-gradient(180deg,rgba(23,23,23,0.88)_0%,rgba(10,10,10,1)_100%)]"
    >
      <div className="section-shell">
        <div className="max-w-3xl">
          <p className="section-eyebrow">In-Person Dog Training</p>
          <h2 className="section-title">A Progressive Training System</h2>
          <p className="section-copy">
            Training progresses from foundational communication to distraction
            control and real-world reliability. Each phase builds on the work
            completed before it.
          </p>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {corePhases.map((phase, index) => (
            <article className="surface-card p-7 md:p-8" key={phase.title}>
              <div className="flex items-center justify-between gap-4">
                <span className="rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-amber-300">
                  Phase {index + 1}
                </span>
                <p className="text-lg font-semibold text-amber-300">
                  {phase.price}
                </p>
              </div>

              <h3 className="mt-6 text-2xl font-semibold text-white">
                {phase.title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-neutral-300">
                {phase.outcome}
              </p>
              <FeatureList features={phase.features} />
            </article>
          ))}
        </div>

        <div className="mt-8 flex flex-col gap-5 rounded-[1.75rem] border border-neutral-800 bg-neutral-950/75 p-7 md:flex-row md:items-center md:justify-between md:p-8">
          <div className="max-w-2xl">
            <p className="section-eyebrow">Full Program Commitment</p>
            <h3 className="mt-4 text-3xl font-semibold text-white">$2,700</h3>
            <p className="mt-4 text-base leading-8 text-neutral-300">
              Save $300 when committing to the full three-phase system upfront.
            </p>
          </div>
          <Link href="/training/evaluation" className="action-primary">
            Schedule a Training Evaluation
          </Link>
        </div>

        <div className="mt-16 grid gap-10 xl:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="section-eyebrow">Support Programs</p>
            <h3 className="mt-4 text-3xl font-semibold text-white">
              Ongoing work and immersive options
            </h3>

            <div className="mt-8 space-y-5">
              <article className="surface-card p-7 md:p-8">
                <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                  <h4 className="text-2xl font-semibold text-white">
                    {supportPrograms[0].title}
                  </h4>
                  <p className="text-lg font-semibold text-amber-300">
                    {supportPrograms[0].price}
                  </p>
                </div>
                <p className="mt-4 text-sm leading-7 text-neutral-300">
                  {supportPrograms[0].description}
                </p>
                <FeatureList features={supportPrograms[0].features} />
              </article>

              <div className="grid gap-5 md:grid-cols-2">
                {supportPrograms.slice(1).map((program) => (
                  <article className="surface-card p-7" key={program.title}>
                    <div className="flex flex-col gap-2">
                      <h4 className="text-xl font-semibold text-white">
                        {program.title}
                      </h4>
                      <p className="text-base font-semibold text-amber-300">
                        {program.price}
                      </p>
                    </div>
                    <FeatureList features={program.features} />
                  </article>
                ))}
              </div>
            </div>
          </div>

          <div>
            <p className="section-eyebrow">Additional Services</p>
            <h3 className="mt-4 text-3xl font-semibold text-white">
              Private sessions and support options
            </h3>

            <div className="mt-8 space-y-5">
              <div className="surface-card p-7 md:p-8">
                <h4 className="text-2xl font-semibold text-white">
                  Private Sessions
                </h4>
                <dl className="mt-6 space-y-3">
                  {privateSessions.map((session) => (
                    <div
                      className="flex items-center justify-between border-b border-neutral-800/80 pb-3 text-neutral-200 last:border-b-0 last:pb-0"
                      key={session.label}
                    >
                      <dt>{session.label}</dt>
                      <dd className="font-semibold text-white">
                        {session.price}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>

              <div className="surface-card p-7 md:p-8">
                <dl className="space-y-4">
                  {additionalServices.map((service) => (
                    <div
                      className="flex items-center justify-between gap-4 border-b border-neutral-800/80 pb-4 text-neutral-200 last:border-b-0 last:pb-0"
                      key={service.label}
                    >
                      <dt>{service.label}</dt>
                      <dd className="font-semibold text-white">
                        {service.price}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>

              <aside className="rounded-[1.75rem] border border-amber-500/20 bg-amber-500/10 p-7 md:p-8">
                <p className="section-eyebrow text-amber-300">
                  Patriot K9 Command
                </p>
                <p className="mt-5 text-xl font-semibold leading-9 text-white md:text-2xl">
                  At Patriot K9 Command, we don&apos;t just teach commands. We
                  build discipline, structure, and dependable behavior that
                  owners can carry into everyday life.
                </p>
              </aside>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
