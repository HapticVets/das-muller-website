import VeteranLink from "@/components/veterans/VeteranLink";
import VeteranSection from "@/components/veterans/VeteranSection";
import { buildVeteranMetadata } from "@/lib/veteranSeo";
import { hockingHillsInquiry, hockingHillsSponsorProgress as progress } from "@/lib/hockingHillsSponsor";

export const metadata = buildVeteranMetadata({
  title: "Hocking Hills Veteran Adventure | Become a Sponsor",
  description: "Help veterans build connection, practical skills and opportunity. Explore Hocking Hills sponsorships, laptop resource kits, fishing kits and in-kind support.",
  path: "/adventures/hocking-hills",
});

const sponsorships = [
  ["Veteran Adventure Sponsor", "Help cover the overall cost for one veteran participating in the trip."],
  ["Veteran Laptop Sponsor", "Help provide a laptop loaded with organized resources a veteran can use at home."],
  ["Veteran Fishing Kit Sponsor", "Support a take-home fishing rod, reel, tackle and starter equipment."],
  ["Meal Sponsor", "Help provide a group meal and time for veterans to connect."],
  ["Workshop Sponsor", "Help cover materials and resources for an approved educational session."],
  ["Trip Partner", "Support multiple parts of the adventure as a business or organization."],
];
const workshops = ["Veteran benefits and available resources", "Employment, resumes and career planning", "Financial basics and budgeting", "Starting a small business", "Trades and apprenticeship opportunities", "Technology and computer skills", "Outdoor skills", "Basic first aid and preparedness", "Personal development and healthy support networks"];
const mission = [
  ["Skilled trades", "Practical skills and exposure to trades, alongside our longer-term trade school vision."],
  ["Veteran activities", "Meaningful activities, friendships and opportunities to meet other veterans."],
  ["Outdoor adventures", "Hiking, fishing, camping and shared experiences that bring people together."],
  ["Veteran skateboarding", "A planned local veteran skateboarding community and potential future skate opportunities."],
  ["Mentorship and resources", "Connections to information, people, businesses and organizations that can help veterans move forward."],
  ["Community projects", "Opportunities to work together for veterans and the surrounding community."],
];
const money = (value: number | null) => value === null ? "To be confirmed" : new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(value);

export default function HockingHillsSponsorPage() {
  const remaining = progress.totalGoal !== null && progress.raisedCommitted !== null ? Math.max(0, progress.totalGoal - progress.raisedCommitted) : null;
  const percent = progress.totalGoal !== null && progress.totalGoal > 0 && progress.raisedCommitted !== null ? Math.min(100, Math.max(0, progress.raisedCommitted / progress.totalGoal * 100)) : null;
  return <>
    <section className="border-b border-neutral-800 bg-[radial-gradient(ellipse_at_top_right,rgba(245,158,11,0.13),transparent_65%)]">
      <div className="section-shell">
        <VeteranLink href="/veterans/adventures" className="text-sm text-amber-300 underline underline-offset-4">← Veteran Adventures</VeteranLink>
        <p className="section-eyebrow mt-8">Haptic Nation Veteran Outreach · Supported by Patriot K9 Command</p>
        <h1 className="section-title max-w-4xl">Hocking Hills Veteran Adventure</h1>
        <p className="mt-5 text-lg font-semibold tracking-wide text-amber-300">Connection. Recreation. Opportunity.</p>
        <p className="section-copy mt-5 max-w-3xl">Help us give veterans more than a weekend away. We are planning a multi-day experience in Hocking Hills, Ohio that brings veterans together outdoors and connects them with practical classes, resources and tools they can use long after they return home.</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a className="action-primary" href={hockingHillsInquiry("Sponsorship interest")}>Become a Sponsor</a>
          <a className="action-secondary" href="#sponsor-options">Explore Ways to Help</a>
        </div>
        <p className="mt-6 max-w-3xl text-sm leading-7 text-neutral-400">Planning target: April 2028. Exact dates, bookings and attendee selection remain to be confirmed; registration is not open. Classes and resource kits are planning goals, subject to team approval and available support.</p>
        <section aria-labelledby="sponsor-progress" className="surface-card mt-10 border-amber-500/30 p-5 sm:p-8">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div><p className="section-eyebrow">Building the mission together</p><h2 id="sponsor-progress" className="mt-2 text-2xl font-semibold sm:text-3xl">Sponsor progress</h2></div>
            <span className="rounded-full border border-neutral-700 px-3 py-2 text-xs text-neutral-300">{progress.updatedAt ? `Updated ${progress.updatedAt}` : "Funding update pending"}</span>
          </div>
          <dl className="mt-6 grid gap-3 sm:grid-cols-3">
            {[["Total goal", money(progress.totalGoal)], ["Raised / committed", money(progress.raisedCommitted)], ["Remaining", money(remaining)], ["Laptops needed", progress.laptopsNeeded ?? "Target pending"], ["Fishing kits needed", progress.fishingKitsNeeded ?? "Target pending"], ["Confirmed sponsors", progress.confirmedSponsors === null ? "List pending" : progress.confirmedSponsors.length]].map(([label, value]) => <div key={label} className="rounded-xl bg-neutral-950/70 p-4"><dt className="text-sm text-neutral-400">{label}</dt><dd className="mt-2 text-xl font-semibold text-amber-300 sm:text-2xl">{value}</dd></div>)}
          </dl>
          {percent !== null && <div className="mt-6"><div role="progressbar" aria-label="Sponsorship funding progress" aria-valuenow={Math.round(percent)} aria-valuemin={0} aria-valuemax={100} className="h-3 overflow-hidden rounded-full bg-neutral-800"><div className="h-full bg-amber-400" style={{ width: `${percent}%` }} /></div><p className="mt-2 text-sm text-neutral-300">{Math.round(percent)}% of goal raised or committed</p></div>}
          <p className="mt-5 text-sm leading-7 text-neutral-400">The existing $20,000 working planning ceiling is preliminary; the final fundraising goal and reconciled totals have not been published. Pending values are not zero. Commitments are distinguished from received funds in project records; donated goods are tracked separately.</p>
          {progress.confirmedSponsors !== null && progress.confirmedSponsors.length > 0 && <p className="mt-4 text-sm leading-7 text-neutral-200">With thanks to: {progress.confirmedSponsors.join(" · ")}</p>}
        </section>
        <nav aria-label="Sponsor page sections" className="mt-7 flex flex-wrap gap-x-5 gap-y-3 text-sm text-amber-300">
          {[['#purpose','Trip purpose'],['#workshops','Classes'],['#resource-kits','Take-home kits'],['#sponsor-options','Sponsorship'],['#funding','Fund usage'],['#contact','Contact']].map(([href,label]) => <a key={href} href={href} className="inline-flex min-h-11 items-center underline underline-offset-4">{label}</a>)}
        </nav>
      </div>
    </section>
    <div id="purpose" className="scroll-mt-80"><VeteranSection eyebrow="What we are building" title="An adventure with a purpose that lasts.">
      <div className="grid gap-6 lg:grid-cols-2"><article className="surface-card p-6 sm:p-8"><h3 className="text-2xl font-semibold">Bring veterans together</h3><p className="mt-4 leading-8 text-neutral-300">Hiking, fishing, outdoor recreation, group meals, cookouts, veteran fellowship and team-building create room for friendships and conversations. Hocking Hills offers a relaxed setting where veterans can connect outside offices and formal programs.</p></article><article className="surface-card p-6 sm:p-8"><h3 className="text-2xl font-semibold">Set veterans up for success</h3><p className="mt-4 leading-8 text-neutral-300">Educational workshops, career and trade discussions, resource sessions and personal development will help participants discover opportunities. Our goal is for veterans to return with new knowledge, useful equipment and connections that support their next step.</p></article></div>
      <VeteranLink href="/veterans/adventures" className="action-secondary mt-6">View the Proposed Itinerary and Working Budget</VeteranLink>
    </VeteranSection></div>
    <div id="workshops" className="scroll-mt-80"><VeteranSection eyebrow="Practical learning" title="The team will vote on the final classes.">
      <p className="max-w-3xl leading-8 text-neutral-300">These are proposed workshop topics. The veteran outreach team will vote on which classes fit the trip before the schedule is finalized. Each approved workshop will have a designated instructor, organizer or subject-matter resource.</p>
      <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{workshops.map(topic => <li key={topic} className="surface-card p-5 text-neutral-200"><span className="mr-2 text-amber-400" aria-hidden="true">✦</span>{topic}</li>)}</ul>
    </VeteranSection></div>
    <div id="resource-kits" className="scroll-mt-80"><VeteranSection eyebrow="Tools for the next chapter" title="Something useful to take home.">
      <p className="mb-6 max-w-3xl leading-8 text-neutral-300">Our ideal Veteran Resource Kit includes a laptop and a personal fishing setup for every participating veteran. These are goals we are asking sponsors to help make possible; equipment and quantities are not yet guaranteed.</p>
      <div className="grid gap-6 md:grid-cols-2"><article className="surface-card p-6 sm:p-8"><p className="section-eyebrow">Laptop resource package</p><h3 className="mt-3 text-2xl font-semibold">Resources within reach</h3><ul className="mt-5 list-disc space-y-2 pl-5 leading-7 text-neutral-300">{["Veteran benefits and veteran-service links", "Employment resources and resume templates", "Trade, apprenticeship and education information", "Budgeting tools and practical learning materials", "Workshop materials and outreach team contacts"].map(item => <li key={item}>{item}</li>)}</ul><a className="action-primary mt-6" href={hockingHillsInquiry("Laptop resource kit sponsorship")}>Sponsor a Laptop Kit</a></article><article className="surface-card p-6 sm:p-8"><p className="section-eyebrow">Fishing kit</p><h3 className="mt-3 text-2xl font-semibold">Keep the adventure going</h3><p className="mt-5 leading-8 text-neutral-300">We want veterans to leave with their own fishing rod, reel, tackle and basic starter equipment. A personal setup gives them a way to keep enjoying the outdoors after the trip, instead of only borrowing gear for the weekend.</p><p className="mt-4 leading-7 text-neutral-400">Equipment suitability and the final kit contents will be coordinated with our team.</p><a className="action-primary mt-6" href={hockingHillsInquiry("Fishing kit sponsorship")}>Sponsor a Fishing Kit</a></article></div>
    </VeteranSection></div>
    <div id="sponsor-options" className="scroll-mt-80"><VeteranSection eyebrow="Sponsorship opportunities" title="Choose the part of the mission you can help build.">
      <p className="mb-6 max-w-3xl leading-8 text-neutral-300">Businesses, organizations and individuals can support a specific outcome or the overall adventure. Package amounts will be finalized with the approved budget; contact us to discuss a contribution that fits.</p>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{sponsorships.map(([title, text]) => <article key={title} className="surface-card flex flex-col p-6"><h3 className="text-xl font-semibold">{title}</h3><p className="mt-3 flex-1 leading-7 text-neutral-300">{text}</p><p className="mt-4 text-sm text-amber-300">Target amount: to be finalized</p><a className="mt-5 inline-flex min-h-11 items-center text-sm font-semibold text-amber-300 underline underline-offset-4" href={hockingHillsInquiry(title)}>Discuss {title}</a></article>)}</div>
    </VeteranSection></div>
    <VeteranSection eyebrow="In-kind donations" title="Businesses can help with equipment, skills and services.">
      <p className="max-w-3xl leading-8 text-neutral-300">Financial sponsorship is one way to participate. We also welcome donated goods, professional services, equipment and gift cards that directly support participating veterans. Please coordinate with our team before delivering items.</p>
      <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{["Laptops and technology support", "Fishing rods, tackle and outdoor gear", "Food and grocery gift cards", "Fuel cards and transportation assistance", "Printing, shirts and apparel", "Workshop supplies and educational materials", "Trade tools and safety equipment", "Professional instruction and services"].map(item => <li key={item} className="surface-card p-5 text-neutral-200">{item}</li>)}</ul>
      <a className="action-primary mt-6" href={hockingHillsInquiry("In-kind equipment or services")}>Offer Equipment or Services</a>
    </VeteranSection>
    <div id="funding" className="scroll-mt-80"><VeteranSection eyebrow="Transparency" title="Know what your support helps provide.">
      <div className="grid gap-6 lg:grid-cols-2"><article className="surface-card p-6 sm:p-8"><h3 className="text-xl font-semibold">Project needs and approved uses</h3><p className="mt-4 leading-8 text-neutral-300">Sponsorship may help cover lodging, meals, veteran airfare, transportation and fuel, activities, laptops, fishing equipment, veteran resource kits, educational and workshop materials, outdoor and safety equipment, and event shirts. Funds and resources will be used toward approved Hocking Hills expenses and resources for participating veterans.</p><p className="mt-4 leading-8 text-neutral-300">Our team discusses needs, votes on program priorities and maintains project records. Cash received, commitments, donated goods and actual spending are tracked separately so sponsors can understand what their support accomplished.</p></article><article className="surface-card p-6 sm:p-8"><h3 className="text-xl font-semibold">Clear agreements and follow-through</h3><p className="mt-4 leading-8 text-neutral-300">Sponsor uses and recognition are agreed individually. Potential recognition includes an agreed business name or logo listing, thank-you posts, consent-based photos or stories, and a post-event impact summary.</p><p className="mt-4 leading-8 text-neutral-300">The proposed stay also includes team review and personal/family time after veteran departures. Direct veteran delivery, necessary team support and personal/family costs must be allocated separately. Sponsor support is used only for agreed purposes; the plan does not authorize funding family leisure.</p><p className="mt-5 rounded-xl border border-neutral-700 p-4 text-sm leading-7 text-neutral-300">Haptic Nation Veteran Outreach is continuing to develop its organizational structure. We do not represent current sponsorship payments or contributions as tax-deductible.</p></article></div>
    </VeteranSection></div>
    <VeteranSection eyebrow="Our larger mission" title="One adventure. A longer commitment to veterans.">
      <p className="mb-6 max-w-3xl leading-8 text-neutral-300">Haptic Nation Veteran Outreach is developing practical programs, activities, resources and opportunities for veterans. Supported by Patriot K9 Command, this adventure is one part of a broader effort to create connection, skills and purpose after service.</p>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{mission.map(([title,text]) => <article className="surface-card p-6" key={title}><h3 className="text-xl font-semibold">{title}</h3><p className="mt-3 leading-7 text-neutral-300">{text}</p></article>)}</div>
      <VeteranLink href="/veterans/programs" className="action-secondary mt-6">Explore the Veteran Outreach Mission</VeteranLink>
    </VeteranSection>
    <div id="contact" className="scroll-mt-80"><VeteranSection eyebrow="Build it with us" title="Help us send veterans home with more.">
      <div className="surface-card border-amber-500/30 p-6 sm:p-8"><p className="max-w-3xl text-lg leading-8 text-neutral-200">A successful trip continues after everyone leaves Hocking Hills. Help veterans return with friendships, knowledge, useful resources, equipment and connections that may create their next opportunity.</p><div className="mt-7 flex flex-wrap gap-3"><a href={hockingHillsInquiry("Sponsorship interest")} className="action-primary">Become a Sponsor</a><a href={hockingHillsInquiry("In-kind equipment or services")} className="action-secondary">Donate Equipment or Services</a><a href="tel:8132996905" className="action-secondary">Talk With Our Team</a></div><p className="mt-6 text-sm leading-7 text-neutral-300">Email <a className="text-amber-300 underline" href={hockingHillsInquiry("Sponsorship inquiry")}>jreese@hapticvets.com</a> · Call or text <a className="text-amber-300 underline" href="tel:8132996905">(813) 299-6905</a>. Text preferred for first contact; please leave a voicemail if calling.</p><p className="mt-3 text-sm leading-7 text-neutral-400">Include your name or business, what you would like to support, and the best way to reach you. Email buttons open a draft in your email app.</p></div>
    </VeteranSection></div>
  </>;
}
