type PricingFeatureBlock = {
  title: string;
  price: string;
  description?: string;
  features: string[];
  outcome?: string;
  subtext?: string;
};

const corePhases: PricingFeatureBlock[] = [
  {
    title: "Phase 1: Foundation & Obedience",
    price: "$1,000",
    features: [
      "Leash control & heel work",
      "Sit, down, place, stay",
      "Engagement & focus",
      "Owner handling fundamentals",
    ],
    outcome: "Dog listens in controlled environments.",
  },
  {
    title: "Phase 2: Control Under Distraction",
    price: "$1,000",
    features: [
      "Outdoor training environments",
      "Distraction proofing",
      "Owner confidence building",
      "Controlled exposure to real-world scenarios",
    ],
    outcome: "Dog listens despite distractions.",
  },
  {
    title: "Phase 3: Real-World Reliability",
    price: "$1,000",
    features: [
      "Public training sessions",
      "Advanced obedience",
      "Off-leash progression (if appropriate)",
      "Real-life application training",
    ],
    outcome: "Dog is reliable in everyday situations.",
  },
];

const supportPrograms: PricingFeatureBlock[] = [
  {
    title: "Maintenance Program",
    price: "$200/month",
    features: [
      "2 sessions per month",
      "Priority scheduling",
      "Continued behavior refinement",
      "Access to ongoing guidance",
    ],
  },
  {
    title: "2 Week Program",
    price: "$2,200",
    features: [
      "Daily structured training",
      "Obedience foundation + behavior work",
      "Owner transfer session included",
    ],
  },
  {
    title: "4 Week Program",
    price: "$3,800",
    features: [
      "Daily structured training",
      "Obedience foundation + behavior work",
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
    <ul className="mt-6 space-y-3 text-sm leading-7 text-neutral-300">
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
      <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 lg:px-12">
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.25em] text-amber-400">
            Training Pricing
          </p>
          <h2 className="mt-4 text-3xl font-bold md:text-5xl">
            Professional Dog Training Programs
          </h2>
          <p className="mt-6 text-lg leading-8 text-neutral-300">
            A clear, structured training path designed to take dogs from
            obedience foundations to real-world reliability.
          </p>
        </div>

        <div className="mt-12 grid gap-6 xl:grid-cols-[1.15fr_0.85fr]">
          <article className="rounded-3xl border border-neutral-800 bg-neutral-950/90 p-8">
            <div className="flex flex-col gap-4 border-b border-neutral-800 pb-8 md:flex-row md:items-start md:justify-between">
              <div className="max-w-2xl">
                <p className="text-sm uppercase tracking-[0.2em] text-amber-400">
                  Initial Evaluation
                </p>
                <h3 className="mt-3 text-2xl font-semibold text-white">
                  Initial Evaluation {"\u2014"} $100
                </h3>
                <p className="mt-4 leading-8 text-neutral-300">
                  A one-on-one session to assess your dog&apos;s behavior,
                  identify goals, and build a structured training plan.
                </p>
              </div>
              <div className="rounded-2xl border border-amber-500/30 bg-amber-500/10 px-6 py-4 text-left md:min-w-44">
                <p className="text-sm uppercase tracking-[0.2em] text-amber-300">
                  Price
                </p>
                <p className="mt-2 text-3xl font-bold text-white">$100</p>
              </div>
            </div>

            <FeatureList
              features={[
                "Behavior assessment",
                "Obedience evaluation",
                "Customized training roadmap",
              ]}
            />
          </article>

          <aside className="rounded-3xl border border-neutral-800 bg-neutral-950/90 p-8">
            <p className="text-sm uppercase tracking-[0.2em] text-amber-400">
              Full Program Commitment
            </p>
            <p className="mt-4 text-4xl font-bold text-white">$2,700</p>
            <p className="mt-4 text-lg leading-8 text-neutral-300">
              Save $300 when committing upfront.
            </p>
            <div className="mt-8 rounded-2xl border border-neutral-800 bg-neutral-900 p-6">
              <p className="text-sm uppercase tracking-[0.2em] text-neutral-400">
                Best for
              </p>
              <p className="mt-3 leading-7 text-neutral-300">
                Owners who want a complete, progressive obedience path with
                clear benchmarks from foundation to public reliability.
              </p>
            </div>
          </aside>
        </div>

        <div className="mt-14">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.2em] text-amber-400">
              Core Training Program
            </p>
            <h3 className="mt-4 text-2xl font-semibold md:text-4xl">
              3-Phase System
            </h3>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {corePhases.map((phase) => (
              <article
                className="rounded-3xl border border-neutral-800 bg-neutral-950/90 p-8"
                key={phase.title}
              >
                <div className="flex items-start justify-between gap-4">
                  <h4 className="max-w-xs text-2xl font-semibold text-white">
                    {phase.title}
                  </h4>
                  <p className="text-xl font-bold text-amber-300">
                    {phase.price}
                  </p>
                </div>

                <FeatureList features={phase.features} />

                <div className="mt-8 rounded-2xl border border-neutral-800 bg-neutral-900 px-5 py-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-neutral-500">
                    Outcome
                  </p>
                  <p className="mt-2 text-sm leading-7 text-neutral-200">
                    {phase.outcome}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-14 grid gap-6 xl:grid-cols-3">
          <article className="rounded-3xl border border-neutral-800 bg-neutral-950/90 p-8">
            <p className="text-sm uppercase tracking-[0.2em] text-amber-400">
              Ongoing Training & Maintenance
            </p>
            <h3 className="mt-4 text-2xl font-semibold text-white">
              Maintenance Program {"\u2014"} $200/month
            </h3>
            <FeatureList features={supportPrograms[0].features} />
          </article>

          <article className="rounded-3xl border border-neutral-800 bg-neutral-950/90 p-8 xl:col-span-2">
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-amber-400">
                  Board & Train Programs
                </p>
                <h3 className="mt-4 text-2xl font-semibold text-white">
                  Board & Train Programs
                </h3>
              </div>
            </div>

            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {supportPrograms.slice(1).map((program) => (
                <div
                  className="rounded-2xl border border-neutral-800 bg-neutral-900 p-6"
                  key={program.title}
                >
                  <div className="flex items-start justify-between gap-4">
                    <h4 className="text-xl font-semibold text-white">
                      {program.title}
                    </h4>
                    <p className="text-lg font-bold text-amber-300">
                      {program.price}
                    </p>
                  </div>
                  <FeatureList features={program.features} />
                </div>
              ))}
            </div>
          </article>
        </div>

        <div className="mt-14 grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
          <article className="rounded-3xl border border-neutral-800 bg-neutral-950/90 p-8">
            <p className="text-sm uppercase tracking-[0.2em] text-amber-400">
              Additional Services
            </p>
            <h3 className="mt-4 text-2xl font-semibold text-white">
              Private Sessions
            </h3>

            <dl className="mt-8 grid gap-4">
              {privateSessions.map((session) => (
                <div
                  className="flex items-center justify-between rounded-2xl border border-neutral-800 bg-neutral-900 px-5 py-4"
                  key={session.label}
                >
                  <dt className="text-neutral-200">{session.label}</dt>
                  <dd className="text-lg font-semibold text-white">
                    {session.price}
                  </dd>
                </div>
              ))}
            </dl>

            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {additionalServices.map((service) => (
                <div
                  className="rounded-2xl border border-neutral-800 bg-neutral-900 px-5 py-5"
                  key={service.label}
                >
                  <p className="text-sm uppercase tracking-[0.2em] text-neutral-500">
                    Service
                  </p>
                  <h4 className="mt-3 text-lg font-semibold text-white">
                    {service.label}
                  </h4>
                  <p className="mt-3 text-xl font-bold text-amber-300">
                    {service.price}
                  </p>
                </div>
              ))}
            </div>
          </article>

          <aside className="rounded-3xl border border-amber-500/20 bg-amber-500/10 p-8">
            <p className="text-sm uppercase tracking-[0.2em] text-amber-300">
              Patriot K9 Command
            </p>
            <p className="mt-6 text-2xl font-semibold leading-10 text-white md:text-3xl">
              At Patriot K9 Command, we don&apos;t just teach commands{"\u2014"}we build
              discipline, structure, and real-world reliability.
            </p>
          </aside>
        </div>
      </div>
    </section>
  );
}
