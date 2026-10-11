import VeteranLink from "@/components/veterans/VeteranLink";
import VeteranSection from "@/components/veterans/VeteranSection";
import { buildVeteranMetadata } from "@/lib/veteranSeo";

export const metadata = buildVeteranMetadata({
  title: "Mission Hocking Hills | Annual Veteran Adventures",
  description:
    "Mission Hocking Hills is Patriot K9 Command's first planned annual veteran adventure trip, supported by net merchandise profits.",
  path: "/adventures",
});

export default function VeteranAdventuresPage() {
  return (
    <>
      <section className="border-b border-neutral-900 bg-neutral-950">
        <div className="section-shell">
          <p className="section-eyebrow">Annual Veteran Adventures · Planned</p>
          <h1 className="section-title max-w-4xl">Mission Hocking Hills</h1>
          <p className="section-copy mt-6 max-w-3xl">
            Our first planned adventure trip brings veterans together through
            time outdoors, shared experiences, and community. Mission Hocking
            Hills is the beginning of an annual veteran adventure effort.
          </p>
        </div>
      </section>

      <VeteranSection eyebrow="The Mission" title="An adventure. A connection. A reason to get outside.">
        <div className="surface-card p-7 md:p-8">
          <p className="max-w-3xl text-lg leading-8 text-neutral-200">
            We want veterans to have opportunities to meet, spend time outdoors,
            and build connections through shared adventures. This trip effort
            sits alongside our broader Veteran Outreach vision: planned trade
            school pathways, canine development, homestead systems, and
            long-term purpose after service.
          </p>
        </div>
      </VeteranSection>

      <VeteranSection eyebrow="Merchandise With a Mission" title="Your purchase helps fund the adventure.">
        <div className="surface-card p-7 md:p-8">
          <p className="max-w-3xl text-lg leading-8 text-neutral-200">
            100% of net profits from Patriot K9 merchandise will help fund our
            annual veteran adventure trips, beginning with Mission Hocking
            Hills. Net profits are what remains after production, payment fees,
            and other merchandise-related costs.
          </p>
          <a href="https://shop.patriotk9kennel.com/" className="action-primary mt-6">
            Shop to Support Veteran Adventures
          </a>
        </div>
      </VeteranSection>

      <VeteranSection eyebrow="Trip Updates" title="Details will follow as plans are confirmed.">
        <div className="surface-card p-7 md:p-8">
          <p className="max-w-3xl text-base leading-8 text-neutral-300">
            We will share dates, participation details, and funding updates here
            as plans are confirmed. Contact
            us if you are interested in participating or helping with the trip.
          </p>
          <VeteranLink href="/veterans/contact" className="action-primary mt-6">
            Ask About Mission Hocking Hills
          </VeteranLink>
        </div>
      </VeteranSection>
    </>
  );
}
