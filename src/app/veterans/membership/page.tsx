import VeteranSection from "@/components/veterans/VeteranSection";
import VeteranLink from "@/components/veterans/VeteranLink";
import { buildVeteranMetadata } from "@/lib/veteranSeo";

export const metadata = buildVeteranMetadata({title: "Membership | Haptic Veteran Outreach", path: "/membership", description: "Support Haptic Veteran Outreach with a $20 monthly membership or one $240 payment for 12 months."});

export default function MembershipPage() {
  return <>
    <div className="section-shell py-16 sm:py-24"><p className="section-eyebrow">Keep the connection going</p><h1 className="mt-5 max-w-3xl text-4xl font-bold sm:text-5xl">A community with a shared purpose.</h1><p className="mt-6 max-w-3xl text-lg leading-8 text-neutral-300">For approved Outreach members, choose the payment option that works for you. Membership supports our community and includes member discussions, meetings, and participation in developing Outreach projects.</p></div>
    <VeteranSection title="Two ways to pay. One community."><div className="grid gap-6 md:grid-cols-2">
      <article className="surface-card p-8"><p className="section-eyebrow">Monthly membership</p><h2 className="mt-5 text-4xl font-bold">$20 <span className="text-base font-normal text-neutral-400">/ month</span></h2><p className="mt-5 leading-7 text-neutral-300">Automatically renews each month until canceled. Cancel anytime; membership continues through your paid period.</p><a className="action-primary mt-7" href="https://buy.stripe.com/fZu6oJ4zo7Zj33jeYj3Je00">Start Monthly Membership</a></article>
      <article className="surface-card p-8"><p className="section-eyebrow">12 months · one payment</p><h2 className="mt-5 text-4xl font-bold">$240 <span className="text-base font-normal text-neutral-400">once</span></h2><p className="mt-5 leading-7 text-neutral-300">Covers 12 months from payment. This is a one-time payment and does not automatically renew.</p><a className="action-primary mt-7" href="https://buy.stripe.com/7sY14p5DsdjD1Zf2bx3Je01">Pay for 12 Months</a></article>
    </div><p className="mt-6 text-sm leading-7 text-neutral-400">Both options open secure Stripe checkout. Use an email our team can match to your membership. Access is confirmed by the team; payment does not automatically assign Discord roles.</p></VeteranSection>
    <VeteranSection title="Before you join" className="bg-neutral-900/30"><div className="max-w-3xl space-y-5 leading-8 text-neutral-300"><p>New to Haptic Veteran Outreach? Contact us first to discuss membership and how to take part. Membership does not confer board voting rights or guarantee a trip place, computer, equipment, or other program benefit.</p><p>Refund requests are reviewed individually. To cancel a monthly membership or ask about a payment, email jreese@hapticvets.com. We do not promise that membership payments are tax-deductible.</p></div><VeteranLink className="action-secondary mt-7" href="/veterans/contact">Ask About Membership</VeteranLink></VeteranSection>
  </>;
}
