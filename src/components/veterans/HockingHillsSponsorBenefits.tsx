import VeteranSection from "@/components/veterans/VeteranSection";
import { hockingHillsInquiry } from "@/lib/hockingHillsSponsor";

export default function HockingHillsSponsorBenefits() {
  return (
    <div id="sponsor-benefits" className="scroll-mt-80">
      <VeteranSection eyebrow="What sponsors receive" title="Recognition, connection and a view into the mission.">
        <p className="mb-6 max-w-3xl leading-8 text-neutral-300">Your support helps veterans, and we want the community to know who helped make it possible. We will coordinate recognition and sponsor access with you when your sponsorship is confirmed.</p>
        <div className="grid gap-5 md:grid-cols-3">
          <article className="surface-card p-6"><h3 className="text-xl font-semibold">Website recognition and business links</h3><p className="mt-4 leading-7 text-neutral-300">Sponsors can receive a business name or logo listing and a link to their website on our Hocking Hills sponsor page and participating websites we manage. We will agree on the sites and placement with each sponsor.</p><p className="mt-4 leading-7 text-neutral-400">No website yet? We can recognize your business now and add its link after launch. Frontline Chimney’s website link is planned when its site goes live in 2027. Future business sites, including a planned construction-business website, can be added to the participating website network as they launch.</p></article>
          <article className="surface-card p-6"><h3 className="text-xl font-semibold">Hocking Hills event T-shirts</h3><p className="mt-4 leading-7 text-neutral-300">Sponsor names or logos can be included on the Hocking Hills T-shirts our team wears during the event, recognizing the businesses that helped make the adventure possible.</p><p className="mt-4 leading-7 text-neutral-400">Artwork, placement and the print deadline will be coordinated before production. Confirm your sponsorship and provide your approved name or logo in time for the shirt design.</p></article>
          <article className="surface-card p-6"><h3 className="text-xl font-semibold">Sponsor access to Discord</h3><p className="mt-4 leading-7 text-neutral-300">Confirmed sponsors can join our designated sponsor area in Discord to follow trip updates, funding transparency, planning discussions and votes shared with sponsors, and connect with our outreach team.</p><p className="mt-4 leading-7 text-neutral-400">The team will arrange your invitation and sponsor role. Participation in votes follows the permissions and rules for each vote; sponsor access does not automatically grant board voting rights or access to private veteran records.</p></article>
        </div>
        <p className="mt-6 max-w-3xl leading-7 text-neutral-300">We also plan sponsor thank-yous and a post-event impact summary showing what support helped provide. Any shared veteran photos or stories require consent. Recognition applies to agreed financial and in-kind sponsorships.</p>
        <a className="action-primary mt-6" href={hockingHillsInquiry("Sponsor recognition and Discord access")}>Discuss Sponsor Benefits With Our Team</a>
      </VeteranSection>
    </div>
  );
}
