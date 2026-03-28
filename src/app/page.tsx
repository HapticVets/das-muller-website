"use client";

import Header from "@/components/Header";

export default function Home() {
  return (
    <>
      <Header />

      <main className="min-h-screen bg-neutral-950 text-white">
        
        {/* HERO */}
        <section className="mx-auto max-w-7xl px-6 py-20 md:px-10 lg:px-12">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm uppercase tracking-[0.25em] text-amber-400">
              Patriot K9 Kennel
            </p>

            <h1 className="text-4xl font-bold leading-tight md:text-6xl">
              Purpose-bred German Shepherds.
              <br />
              Structured training.
              <br />
              Veteran-driven mission.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-300">
              Patriot K9 Kennel is built to place the right German Shepherd in
              the right home, backed by structure, screening, and a training
              pathway that continues beyond pickup day.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#application"
                className="rounded-2xl bg-amber-500 px-6 py-3 font-semibold text-black hover:opacity-90"
              >
                Apply for a Puppy
              </a>

              <a
                href="https://train.hapticvets.com"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl border border-neutral-700 px-6 py-3 font-semibold text-white hover:bg-neutral-900"
              >
                Start Training
              </a>
            </div>
          </div>
        </section>

        {/* PROGRAMS */}
        <section className="border-t border-neutral-900 bg-neutral-900/40">
          <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 lg:px-12">
            <div className="max-w-2xl">
              <p className="text-sm uppercase tracking-[0.25em] text-amber-400">
                Programs
              </p>
              <h2 className="mt-4 text-3xl font-bold md:text-5xl">
                Built around dogs with purpose.
              </h2>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-3">

              {/* Puppies */}
              <div className="rounded-3xl border border-neutral-800 bg-neutral-950 p-8">
                <h3 className="text-2xl font-semibold">
                  German Shepherd Puppies
                </h3>
                <p className="mt-4 text-neutral-300">
                  Purpose-bred puppies matched to the right homes through a
                  structured application and evaluation process.
                </p>
              </div>

              {/* Training */}
              <div className="rounded-3xl border border-neutral-800 bg-neutral-950 p-8">
                <h3 className="text-2xl font-semibold">
                  Online Dog Training
                </h3>
                <p className="mt-4 text-neutral-300">
                  Continue building obedience and communication with our
                  structured training platform for real-world results.
                </p>

                <a
                  href="https://train.hapticvets.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-block text-amber-400 hover:underline"
                >
                  Go to Training Platform →
                </a>
              </div>

              {/* Mission */}
              <div className="rounded-3xl border border-neutral-800 bg-neutral-950 p-8">
                <h3 className="text-2xl font-semibold">
                  Veteran Mission
                </h3>
                <p className="mt-4 text-neutral-300">
                  Long-term placement and support built around a mission that
                  gives back through disciplined dogs and strong homes.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* APPLICATION CTA */}
        <section id="application" className="border-t border-neutral-900">
          <div className="mx-auto max-w-5xl px-6 py-20 md:px-10 text-center">
            <h2 className="text-3xl font-bold md:text-5xl">
              Apply for a Puppy
            </h2>

            <p className="mt-6 text-lg text-neutral-300">
              We evaluate puppies weekly starting at week 5 to properly match
              them with the right homes.
            </p>

            <a
              href="#application-form"
              className="mt-8 inline-block rounded-2xl bg-amber-500 px-8 py-4 text-lg font-semibold text-black hover:opacity-90"
            >
              Start Application
            </a>
          </div>
        </section>

      </main>
    </>
  );
}