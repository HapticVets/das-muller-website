import type { Metadata } from "next";
import VeteranLink from "@/components/veterans/VeteranLink";
import VeteranSection from "@/components/veterans/VeteranSection";
import ResponsiveMedia from "@/components/media/ResponsiveMedia";
import { buildVeteranMetadata } from "@/lib/veteranSeo";
import { veteranProgramCards } from "@/lib/veteranOutreachContent";

export const metadata: Metadata = buildVeteranMetadata({
  title: "Programs | Patriot K9 Command",
  description:
    "Program concepts for Patriot K9 Command Veteran Outreach, including trade pathways, homestead systems, and canine development.",
  path: "/programs",
});

export default function VeteransProgramsPage() {
  return (
    <>
      <section className="border-b border-neutral-900 bg-[linear-gradient(180deg,rgba(23,23,23,0.96)_0%,rgba(10,10,10,1)_100%)]">
        <div className="section-shell max-w-5xl">
          <p className="section-eyebrow">Programs</p>
          <h1 className="section-title max-w-[14ch]">
            Practical pathways built for real-world use
          </h1>
          <p className="section-copy mt-6">
            The original HNVO program structure centered on trade pathways,
            homestead systems, and canine development. Some elements are
            already taking shape, while others remain planned future buildout.
          </p>
        </div>
      </section>

      <VeteranSection
        eyebrow="Program Concepts"
        title="Current, developing, and planned tracks from the source project."
      >
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {veteranProgramCards.map((program) => (
            <article
              className="overflow-hidden rounded-[1.75rem] border border-neutral-800 bg-neutral-950 shadow-[0_18px_48px_rgba(0,0,0,0.2)]"
              key={program.title}
            >
              <ResponsiveMedia
                src={program.image}
                alt={`${program.title} image from the original Haptic Veteran Outreach program library.`}
                sizes="(min-width: 1280px) 25vw, (min-width: 768px) 48vw, 100vw"
                aspectRatio="16 / 10"
                objectFit="cover"
                framed={false}
                wrapperClassName="rounded-none"
              />
              <div className="p-6">
                <span className="rounded-full border border-amber-500/30 bg-amber-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-amber-200">
                  {program.status}
                </span>
                <h2 className="mt-4 text-xl font-semibold text-white">
                  {program.title}
                </h2>
                <p className="mt-4 text-sm leading-7 text-neutral-300">
                  {program.text}
                </p>
              </div>
            </article>
          ))}
        </div>
      </VeteranSection>

      <VeteranSection
        eyebrow="Interpretation"
        title="How these program tracks are presented in this phase"
        className="bg-neutral-900/30"
      >
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Planned Pathway",
              text: "Used where the source clearly describes a direction or training model but does not prove the pathway is fully active today.",
            },
            {
              title: "Developing",
              text: "Used where the source shows work already in motion, especially around homestead systems and canine development.",
            },
            {
              title: "Conservative Wording",
              text: "This phase avoids overstating capacity, staffing, certification status, or current operating scale beyond what the source supports.",
            },
          ].map((item) => (
            <article className="surface-card p-7 md:p-8" key={item.title}>
              <h2 className="text-xl font-semibold text-white">
                {item.title}
              </h2>
              <p className="mt-4 text-sm leading-7 text-neutral-300">
                {item.text}
              </p>
            </article>
          ))}
        </div>
      </VeteranSection>

      <VeteranSection
        eyebrow="Next Step"
        title="Programs depend on land, equipment, infrastructure, and support."
      >
        <div className="surface-card max-w-4xl p-8">
          <p className="text-base leading-8 text-neutral-300">
            The source material ties program growth directly to buildout,
            sponsorship, and phased infrastructure. That is why the partnership
            page remains central to the Veteran Outreach story.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <VeteranLink href="/veterans/partners" className="action-primary">
              View Support Priorities
            </VeteranLink>
            <VeteranLink href="/veterans/contact" className="action-secondary">
              Ask a Program Question
            </VeteranLink>
          </div>
        </div>
      </VeteranSection>
    </>
  );
}
