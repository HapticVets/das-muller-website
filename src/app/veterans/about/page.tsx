import type { Metadata } from "next";
import VeteranLink from "@/components/veterans/VeteranLink";
import VeteranSection from "@/components/veterans/VeteranSection";
import { buildVeteranMetadata } from "@/lib/veteranSeo";
import { veteranAboutParagraphs } from "@/lib/veteranOutreachContent";

export const metadata: Metadata = buildVeteranMetadata({
  title: "About Veteran Outreach | Patriot K9 Command",
  description:
    "Background and mission context for Patriot K9 Command Veteran Outreach and the original Haptic Nation Veteran Outreach effort.",
  path: "/about",
});

export default function VeteransAboutPage() {
  return (
    <>
      <section className="border-b border-neutral-900 bg-[linear-gradient(180deg,rgba(23,23,23,0.96)_0%,rgba(10,10,10,1)_100%)]">
        <div className="section-shell max-w-4xl">
          <p className="section-eyebrow">About Veteran Outreach</p>
          <h1 className="section-title max-w-[13ch]">
            Why This Outreach Effort Exists
          </h1>
          <p className="section-copy mt-6">
            The original Haptic Nation Veteran Outreach mission was built around
            the belief that veterans need more than encouragement after service.
            They need structure, responsibility, practical capability, and a
            clear path into meaningful civilian life.
          </p>
        </div>
      </section>

      <VeteranSection
        eyebrow="Mission"
        title="A grounded transition model shaped by work, land, and canine systems."
      >
        <div className="space-y-6 max-w-4xl text-lg leading-8 text-neutral-300">
          {veteranAboutParagraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </VeteranSection>

      <VeteranSection
        eyebrow="Focus"
        title="What the outreach mission keeps at the center"
        className="bg-neutral-900/30"
      >
        <div className="grid gap-6 md:grid-cols-2">
          {[
            {
              title: "Purpose After Service",
              text: "The source project consistently frames the problem as a lack of structured transition, not a lack of discipline or ability.",
            },
            {
              title: "Practical Skill Development",
              text: "Trade training, land-based work, and measurable responsibility are treated as tools for long-term capability rather than short-term motivation.",
            },
            {
              title: "Canine Connection",
              text: "Working-dog development remains part of the broader system through existing Patriot K9 Command and Das Muller relationships.",
            },
            {
              title: "Long-Term Structure",
              text: "The intent is to build a durable ecosystem that can support future pathways, not just a temporary outreach concept.",
            },
          ].map((item) => (
            <article className="surface-card p-7 md:p-8" key={item.title}>
              <h2 className="text-2xl font-semibold text-white">
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
        title="Continue into the program and partnership concepts."
      >
        <div className="surface-card max-w-4xl p-8">
          <p className="text-base leading-8 text-neutral-300">
            The strongest surviving source material focuses on program
            direction, phased buildout, and the kinds of support required to
            move the mission forward responsibly.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <VeteranLink href="/veterans/programs" className="action-primary">
              Explore Programs
            </VeteranLink>
            <VeteranLink href="/veterans/partners" className="action-secondary">
              View Support Opportunities
            </VeteranLink>
          </div>
        </div>
      </VeteranSection>
    </>
  );
}
