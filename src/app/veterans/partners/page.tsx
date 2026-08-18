import type { Metadata } from "next";
import Image from "next/image";
import VeteranLink from "@/components/veterans/VeteranLink";
import VeteranSection from "@/components/veterans/VeteranSection";
import { buildVeteranMetadata } from "@/lib/veteranSeo";
import {
  veteranCurrentState,
  veteranOutreachAssets,
  veteranSupportCategories,
} from "@/lib/veteranOutreachContent";

export const metadata: Metadata = buildVeteranMetadata({
  title: "Partners | Patriot K9 Command",
  description:
    "Support, sponsorship, and partnership concepts for Patriot K9 Command Veteran Outreach.",
  path: "/partners",
});

export default function VeteransPartnersPage() {
  return (
    <>
      <section className="border-b border-neutral-900 bg-[linear-gradient(180deg,rgba(23,23,23,0.96)_0%,rgba(10,10,10,1)_100%)]">
        <div className="section-shell max-w-5xl">
          <p className="section-eyebrow">Partnerships</p>
          <h1 className="section-title max-w-[12ch]">
            Support the build, not just the idea
          </h1>
          <p className="section-copy mt-6">
            The original HNVO project framed support around real infrastructure,
            land systems, kennel buildout, dog development, and future trade
            pathways. This page preserves that practical focus without
            recreating donation or payment behavior.
          </p>
          <div className="mt-8">
            <VeteranLink href="/veterans/contact" className="action-primary">
              Start a Partnership Conversation
            </VeteranLink>
          </div>
        </div>
      </section>

      <VeteranSection
        eyebrow="System Buildout"
        title="How the mission was designed to grow in phases"
      >
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Step 1 — Build the Revenue Base",
              text: "The kennel, dog training, and homestead systems form the early foundation that can help stabilize and support the wider mission.",
            },
            {
              title: "Step 2 — Expand Food and Land Systems",
              text: "The source describes chickens already active, with fencing, livestock infrastructure, and broader food production as the next build stage.",
            },
            {
              title: "Step 3 — Launch Full Trade Pathways",
              text: "With stronger physical infrastructure in place, the long-term model expands into trade programs, certification-aligned pathways, and wider veteran support.",
            },
          ].map((item) => (
            <article className="surface-card p-7 md:p-8" key={item.title}>
              <h2 className="text-xl font-semibold text-amber-300">
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
        eyebrow="Current State"
        title="What the source project says is already in motion"
        className="bg-neutral-900/30"
      >
        <div className="grid gap-6 lg:grid-cols-2">
          <article className="surface-card p-7 md:p-8">
            <h2 className="text-2xl font-semibold text-white">
              Active Foundation
            </h2>
            <ul className="mt-6 space-y-3 text-sm leading-7 text-neutral-300">
              {veteranCurrentState.activeFoundation.map((item) => (
                <li className="flex gap-3" key={item}>
                  <span className="mt-2 h-2 w-2 rounded-full bg-amber-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className="surface-card p-7 md:p-8">
            <h2 className="text-2xl font-semibold text-white">
              Immediate Build Needs
            </h2>
            <ul className="mt-6 space-y-3 text-sm leading-7 text-neutral-300">
              {veteranCurrentState.immediateNeeds.map((item) => (
                <li className="flex gap-3" key={item}>
                  <span className="mt-2 h-2 w-2 rounded-full bg-amber-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </VeteranSection>

      <VeteranSection
        eyebrow="Support Categories"
        title="Partnership and funding-support concepts preserved from the source project."
      >
        <div className="grid gap-6 md:grid-cols-2">
          {veteranSupportCategories.map((category) => (
            <article className="surface-card p-7 md:p-8" key={category.title}>
              <h2 className="text-2xl font-semibold text-amber-300">
                {category.title}
              </h2>
              <p className="mt-2 text-sm font-medium uppercase tracking-[0.16em] text-neutral-500">
                {category.range}
              </p>
              <p className="mt-4 text-sm leading-7 text-neutral-300">
                {category.description}
              </p>
              <ul className="mt-6 space-y-3 text-sm leading-7 text-neutral-300">
                {category.impact.map((item) => (
                  <li className="flex gap-3" key={item}>
                    <span className="mt-2 h-2 w-2 rounded-full bg-amber-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </VeteranSection>

      <VeteranSection
        eyebrow="Current Relationships"
        title="The source project explicitly connected HNVO to these canine systems."
        className="bg-neutral-900/30"
      >
        <div className="grid gap-6 lg:grid-cols-2">
          <article className="surface-card p-7 text-center md:p-8">
            <div className="relative mx-auto h-24 w-full max-w-[14rem]">
              <Image
                src={veteranOutreachAssets.partnerDasMuller.src}
                alt={veteranOutreachAssets.partnerDasMuller.alt}
                fill
                sizes="224px"
                className="object-contain"
              />
            </div>
            <p className="mt-6 text-sm leading-7 text-neutral-300">
              Das Muller was presented in the source site as part of the
              working-dog side of the broader outreach system.
            </p>
          </article>

          <article className="surface-card p-7 text-center md:p-8">
            <div className="relative mx-auto h-24 w-full max-w-[14rem]">
              <Image
                src={veteranOutreachAssets.partnerPatriotK9.src}
                alt={veteranOutreachAssets.partnerPatriotK9.alt}
                fill
                sizes="224px"
                className="object-contain"
              />
            </div>
            <p className="mt-6 text-sm leading-7 text-neutral-300">
              Patriot K9 Command was presented as supporting professional
              training systems and the canine side of the mission.
            </p>
          </article>
        </div>
      </VeteranSection>

      <VeteranSection
        eyebrow="Next Step"
        title="If you want to help build something durable, practical, and veteran-focused, start here."
      >
        <div className="surface-card max-w-4xl p-8 text-center">
          <p className="text-base leading-8 text-neutral-300">
            This phase keeps the partnership language intact while avoiding
            unsupported nonprofit donation claims or payment flows. The next
            step is a direct conversation.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <VeteranLink href="/veterans/contact" className="action-primary">
              Contact Veteran Outreach
            </VeteranLink>
            <a
              href="mailto:jreese@hapticvets.com?subject=Veteran%20Outreach%20Partnership"
              className="action-secondary"
            >
              Email About Support
            </a>
          </div>
        </div>
      </VeteranSection>
    </>
  );
}
