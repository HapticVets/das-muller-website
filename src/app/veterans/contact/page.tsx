import type { Metadata } from "next";
import VeteranLink from "@/components/veterans/VeteranLink";
import VeteranSection from "@/components/veterans/VeteranSection";
import { MAIN_SITE_URL } from "@/lib/siteDomains";
import { buildVeteranMetadata } from "@/lib/veteranSeo";
import { veteranContactInquiryTypes } from "@/lib/veteranOutreachContent";

export const metadata: Metadata = buildVeteranMetadata({
  title: "Contact | Patriot K9 Command",
  description:
    "Contact information and inquiry guidance for Patriot K9 Command Veteran Outreach.",
  path: "/contact",
});

export default function VeteransContactPage() {
  return (
    <>
      <section className="border-b border-neutral-900 bg-[linear-gradient(180deg,rgba(23,23,23,0.96)_0%,rgba(10,10,10,1)_100%)]">
        <div className="section-shell max-w-5xl">
          <p className="section-eyebrow">Contact</p>
          <h1 className="section-title max-w-[12ch]">
            Start with the right kind of outreach conversation
          </h1>
          <p className="section-copy mt-6">
            This phase does not recreate the old Haptic contact form. For now,
            outreach conversations should start directly by email or phone,
            depending on the kind of inquiry.
          </p>
        </div>
      </section>

      <VeteranSection
        eyebrow="Appropriate Inquiries"
        title="What this page is for right now"
      >
        <div className="grid gap-6 md:grid-cols-3">
          {veteranContactInquiryTypes.map((item) => (
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
        eyebrow="Direct Contact"
        title="Use the existing public Patriot K9 contact channels for now."
        className="bg-neutral-900/30"
      >
        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <article className="surface-card p-8">
            <p className="text-base leading-8 text-neutral-300">
              Veteran outreach inquiries can begin through the same public
              contact information already displayed elsewhere in this
              repository. This keeps Phase 2 factual and avoids recreating the
              old unsupported contact API.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="mailto:jreese@hapticvets.com?subject=Veteran%20Outreach%20Inquiry"
                className="action-primary"
              >
                Email Veteran Outreach
              </a>
              <a href="tel:8132996905" className="action-secondary">
                Call or Text: (813) 299-6905
              </a>
            </div>
            <div className="mt-8 space-y-3 text-sm leading-7 text-neutral-400">
              <p>Email: jreese@hapticvets.com</p>
              <p>Call or Text: (813) 299-6905</p>
              <p>Text message preferred for first contact.</p>
              <p>If calling, please leave a voicemail.</p>
            </div>
          </article>

          <aside className="surface-card p-8">
            <h2 className="text-2xl font-semibold text-white">
              Related Patriot K9 paths
            </h2>
            <p className="mt-4 text-sm leading-7 text-neutral-300">
              If your question is really about puppies, in-person dog training,
              or the current commercial services side of Patriot K9 Command,
              use the main website directly.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={MAIN_SITE_URL}
                className="action-secondary"
                rel="noreferrer"
                target="_blank"
              >
                Visit Patriot K9 Command
              </a>
              <VeteranLink
                href="/veterans/partners"
                className="action-primary"
              >
                View Support Opportunities
              </VeteranLink>
            </div>
          </aside>
        </div>
      </VeteranSection>
    </>
  );
}
