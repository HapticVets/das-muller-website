export default function AvailableLitters() {
    return (
      <section
        id="litters"
        className="border-t border-neutral-900 bg-neutral-900/40"
      >
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 lg:px-12">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.25em] text-amber-400">
              Available Litters
            </p>
  
            <h2 className="mt-4 text-3xl font-bold md:text-5xl">
              Now accepting applications.
            </h2>
  
            <p className="mt-6 text-lg leading-8 text-neutral-300">
              We are currently accepting applications for our available German
              Shepherd litter. Puppies are evaluated weekly beginning at week 5 so
              placement is based on fit, temperament, and home goals rather than
              first-come selection alone.
            </p>
          </div>
  
          <div className="mt-12 grid gap-8 lg:grid-cols-[1.4fr_1fr]">
            <div className="rounded-3xl border border-neutral-800 bg-neutral-950 p-8">
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-full bg-amber-500 px-4 py-1 text-sm font-semibold text-black">
                  Accepting Applications
                </span>
                <span className="rounded-full border border-neutral-700 px-4 py-1 text-sm text-neutral-300">
                  Current Litter
                </span>
              </div>
  
              <h3 className="mt-6 text-3xl font-semibold">
                German Shepherd Litter
              </h3>
  
              <p className="mt-4 leading-8 text-neutral-300">
                This litter is being raised with close observation and weekly
                evaluation so we can make stronger puppy-to-home matches. Our goal
                is not simply to place puppies quickly, but to place the right dog
                in the right environment.
              </p>
  
              <div className="mt-8 grid gap-4 md:grid-cols-2">
                <div className="rounded-2xl border border-neutral-800 bg-neutral-900 p-5">
                  <p className="text-sm uppercase tracking-[0.2em] text-amber-400">
                    Matching Approach
                  </p>
                  <p className="mt-3 text-neutral-300">
                    Weekly evaluations beginning at week 5 to support proper
                    placement.
                  </p>
                </div>
  
                <div className="rounded-2xl border border-neutral-800 bg-neutral-900 p-5">
                  <p className="text-sm uppercase tracking-[0.2em] text-amber-400">
                    Best For
                  </p>
                  <p className="mt-3 text-neutral-300">
                    Serious homes looking for structure, guidance, and the right
                    puppy fit.
                  </p>
                </div>
              </div>
  
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#application"
                  className="rounded-2xl bg-amber-500 px-6 py-3 font-semibold text-black hover:opacity-90"
                >
                  Apply for This Litter
                </a>
  
                <a
                  href="https://www.gooddog.com/breeders/das-mller-hund-haus-ohio#breed_id=117&m_layout=new&locName=Leetonia%2C%20OH%2044431"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-2xl border border-neutral-700 px-6 py-3 font-semibold text-white hover:bg-neutral-900"
                >
                  View on Good Dog
                </a>
              </div>
            </div>
  
            <div className="rounded-3xl border border-neutral-800 bg-neutral-950 p-8">
              <p className="text-sm uppercase tracking-[0.2em] text-amber-400">
                Placement Notes
              </p>
  
              <ul className="mt-6 space-y-4 text-neutral-300">
                <li>• Applications are reviewed before puppy matching.</li>
                <li>• Weekly evaluations help guide final placement decisions.</li>
                <li>• Temperament fit matters more than appearance alone.</li>
                <li>• Training support is available after placement.</li>
              </ul>
  
              <div className="mt-8 rounded-2xl border border-neutral-800 bg-neutral-900 p-5">
                <p className="text-sm uppercase tracking-[0.2em] text-amber-400">
                  Next Step
                </p>
                <p className="mt-3 text-neutral-300">
                  Submit the puppy application to start the conversation and help
                  us understand your home, goals, and preferred temperament.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }