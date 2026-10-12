import VeteranLink from "@/components/veterans/VeteranLink";
import VeteranSection from "@/components/veterans/VeteranSection";
import { buildVeteranMetadata } from "@/lib/veteranSeo";

export const metadata = buildVeteranMetadata({
  title: "Mission Hocking Hills | Annual Veteran Adventures",
  description:
    "Explore Mission Hocking Hills: a planned April 2028 veteran adventure in Ohio, its proposed itinerary, $20,000 working budget, and sponsorship opportunities.",
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
          <p className="mt-6 max-w-3xl rounded-xl border border-amber-500/30 bg-amber-500/5 p-5 text-sm leading-7 text-neutral-200">
            Planning target: April 2028 · Hocking Hills, Ohio. Exact dates,
            lodging, activities and attendee selection are not confirmed.
            Registration is not open. These are working estimates, not booked
            services or a statement of funds raised.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {[['4', 'Planned fly-in veteran places'], ['~15', 'People at a time, including the support team'], ['$20,000', 'Working planning ceiling']].map(([value, label]) => (
              <div key={label} className="surface-card p-5">
                <p className="text-3xl font-semibold text-amber-300">{value}</p>
                <p className="mt-2 text-sm leading-6 text-neutral-300">{label}</p>
              </div>
            ))}
          </div>
          <div className="surface-card mt-8 border-amber-500/30 p-6">
            <h2 className="text-2xl font-semibold">Help veterans take the mission home.</h2>
            <p className="mt-3 max-w-3xl leading-7 text-neutral-300">Explore our sponsor page for proposed classes, laptop resource kits, fishing kits, funding progress and ways your business can help.</p>
            <VeteranLink href="/veterans/adventures/hocking-hills" className="action-primary mt-5">Sponsor the Hocking Hills Veteran Adventure</VeteranLink>
          </div>
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

      <VeteranSection eyebrow="The Proposed Experience" title="Veteran connection through shared adventure.">
        <p className="mb-6 max-w-3xl leading-8 text-neutral-300">
          The goal is a sponsor-supported experience centered on camaraderie,
          outdoor activities and time together. The plan includes airfare for
          four selected veterans and additional local veteran attendees. The
          approximately 15-person group includes the support team; it is not
          a promise of 15 veteran places. Activities remain subject to pricing,
          availability, safety and accessibility review.
        </p>
        <div className="grid gap-5 md:grid-cols-2">
          {[
            ['Day 1 — Team arrival and setup', 'The core team prepares the lodge, groceries, rooms and supplies, and confirms transportation, reservations, emergency information and the itinerary.'],
            ['Day 2 — Veteran arrival and Wreck-It Day', 'Four fly-in veterans arrive through Cleveland with designated airport pickup. Local attendees meet the group for a proposed Wreck-It / Rage Room experience, followed by travel to Hocking Hills, dinner, introductions and lodge time.'],
            ['Day 3 — Hocking Hills nature day', 'Explore trails, caves, waterfalls and sightseeing, with meals and evening group time at the lodge. Paintball is optional and depends on pricing, timing, available budget and suitability.'],
            ['Day 4 — Zipline and veteran departure', 'A proposed group zipline adventure, final meal and time together, followed by veteran departures and airport transportation for fly-in attendees.'],
            ['Days 5–7 — Team review and family time', 'After veteran attendees depart, the proposed remaining lodge stay includes team review, veteran feedback, cost and sponsor reporting, future planning and personal/family time. Local core-team families may join. This portion is separate from the veteran activity days.'],
          ].map(([title, text]) => (
            <article key={title} className="surface-card p-6">
              <h3 className="text-xl font-semibold text-white">{title}</h3>
              <p className="mt-3 leading-7 text-neutral-300">{text}</p>
            </article>
          ))}
        </div>
      </VeteranSection>

      <VeteranSection eyebrow="Working Costs" title="A transparent $20,000 planning target.">
        <p className="mb-6 max-w-3xl leading-8 text-neutral-300">
          These preliminary estimates come from the Outreach event outline.
          The target is a ceiling, not a requirement to spend the full amount.
          Current quotes, taxes, insurance, transportation and the final lodging
          duration must be checked before commitments.
        </p>
        <div className="overflow-x-auto rounded-xl border border-neutral-800">
          <table className="w-full min-w-[480px] text-left text-sm">
            <caption className="sr-only">Mission Hocking Hills preliminary budget in US dollars</caption>
            <thead className="bg-neutral-900 text-white"><tr><th scope="col" className="p-4">Category</th><th scope="col" className="p-4">Estimate</th><th scope="col" className="p-4">Basis</th></tr></thead>
            <tbody className="divide-y divide-neutral-800 text-neutral-300">
              {[
                ['Lodging', '$6,200', 'Proposed seven-night lodge stay; duration to be confirmed'],
                ['Food', 'Up to $6,000', 'Three dinners out up to $1,000 each; approximately $3,000 for lodge meals, snacks and non-alcoholic drinks'],
                ['Veteran airfare', '$2,400', 'Four round-trip flights at approximately $600 each'],
                ['Zipline', '$1,700', 'Group activity estimate'],
                ['Event shirts', '$700', 'Event apparel'],
                ['Fuel / local transport', '$500', 'Personal vehicles, airport pickup and activity travel'],
                ['Wreck-It Room', '$350', 'Arrival-day group activity'],
              ].map(([category, amount, basis]) => <tr key={category}><th scope="row" className="p-4 font-medium text-white">{category}</th><td className="whitespace-nowrap p-4">{amount}</td><td className="p-4 leading-6">{basis}</td></tr>)}
            </tbody>
            <tfoot className="border-t border-neutral-700 bg-neutral-900 text-white">
              <tr><th scope="row" className="p-4">Listed estimates</th><td className="p-4">$17,850</td><td className="p-4">Not an expenditure report</td></tr>
              <tr><th scope="row" className="p-4">Remaining headroom</th><td className="p-4">$2,150</td><td className="p-4">Possible paintball, supplies and contingency; paintball price TBD</td></tr>
              <tr><th scope="row" className="p-4">Working ceiling</th><td className="p-4">$20,000</td><td className="p-4">Final spending requires separate approval</td></tr>
            </tfoot>
          </table>
        </div>
      </VeteranSection>

      <VeteranSection eyebrow="Sponsorship" title="Help make the veteran experience possible.">
        <div className="grid gap-5 md:grid-cols-2">
          <div className="surface-card p-6">
            <h3 className="text-xl font-semibold">Financial or in-kind support</h3>
            <p className="mt-3 leading-7 text-neutral-300">Discuss supporting lodging, food, a veteran flight (approximately $600), activities, apparel or transportation. Donated goods and services can reduce the cash needed. Scope and recognition are agreed individually; no sponsorship package is committed by this page.</p>
          </div>
          <div className="surface-card p-6">
            <h3 className="text-xl font-semibold">Recognition and reporting</h3>
            <p className="mt-3 leading-7 text-neutral-300">Potential recognition includes an agreed business name or logo listing, event materials, consent-based photos or stories, and a post-event thank-you and impact summary. Sponsor reporting will distinguish plans, approved decisions, actual finances and progress.</p>
          </div>
        </div>
        <p className="mt-6 max-w-3xl leading-8 text-neutral-300">The full proposed stay includes Days 5–7 team review and personal/family time. Direct veteran costs, necessary team support and personal/family costs must be allocated separately. Sponsor funds are used only for agreed purposes; this plan does not authorize sponsors to fund family leisure. Cash and in-kind contributions are recorded separately. No tax-deductibility claim is made.</p>
        <VeteranLink href="/veterans/contact" className="action-primary mt-6">Discuss Mission Sponsorship</VeteranLink>
      </VeteranSection>

      <VeteranSection eyebrow="Taking Part" title="Attendee selection will be announced before registration opens.">
        <div className="surface-card p-7">
          <p className="leading-8 text-neutral-300">Applications or nominations, eligibility, accessibility needs, travel coordination, emergency contacts and activity expectations will be established before registration opens. The current plan is four selected fly-in veterans plus local attendees. Membership does not guarantee a place. Please keep personal, medical and service records out of public channels.</p>
          <VeteranLink href="/veterans/contact" className="action-secondary mt-6">Ask About Participation</VeteranLink>
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
            This page reflects the saved Outreach event outline and October 9
            board vote packet, reviewed October 12, 2026. The latest verified
            October 10 tally was five Yes votes for trip scope and six Yes votes
            each for the budget, cost allocation, membership policy and sponsor
            reporting. The polls were scheduled to close October 16; these
            tallies are not certified final decisions. Live vote changes have
            not yet been rechecked. We will publish confirmed dates, approved
            results and reconciled funding updates as they become available.
          </p>
          <VeteranLink href="/veterans/contact" className="action-primary mt-6">
            Ask About Mission Hocking Hills
          </VeteranLink>
        </div>
      </VeteranSection>
    </>
  );
}
