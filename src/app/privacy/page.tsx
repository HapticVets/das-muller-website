import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import { CONTACT_EMAIL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Patriot K9 Command collects, uses, and protects information submitted through this website.",
  alternates: { canonical: "/privacy" },
};

const sections = [
  {
    title: "Information we collect",
    body: "When you submit a puppy application or contact us, we collect the information you provide, including contact details, household information, dog experience, preferences, and placement goals. We also receive limited technical information needed for security and site operation, such as an IP address and CAPTCHA verification data.",
  },
  {
    title: "How we use information",
    body: "We use submitted information to review placement fit, respond to questions, communicate about puppies or training services, protect the website from abuse, and maintain appropriate business records. We do not sell personal information.",
  },
  {
    title: "Service providers",
    body: "We use service providers to host the website, prevent spam, deliver application emails, and measure advertising performance. These providers may process limited information on our behalf under their own privacy terms. Current services may include Vercel, Cloudflare Turnstile, Resend, and Google advertising or analytics tools.",
  },
  {
    title: "Retention and protection",
    body: "We retain application and inquiry information only as long as reasonably needed for placement review, communication, legal obligations, and legitimate business records. We use reasonable administrative and technical safeguards, but no internet transmission or storage method can be guaranteed completely secure.",
  },
  {
    title: "Your choices",
    body: "You may ask us to correct or delete information you submitted, subject to any records we must retain for legitimate business or legal reasons. You can also adjust browser settings that control cookies and similar technologies.",
  },
];

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-neutral-950 text-white">
        <section className="section-shell-tight">
          <p className="section-eyebrow">Privacy</p>
          <h1 className="section-title">Privacy Policy</h1>
          <p className="section-copy">Last updated September 23, 2026</p>
          <div className="mt-10 max-w-4xl space-y-6">
            {sections.map((section) => (
              <section key={section.title} className="surface-card p-6 sm:p-8">
                <h2 className="text-xl font-semibold text-white">{section.title}</h2>
                <p className="mt-4 text-base leading-8 text-neutral-300">{section.body}</p>
              </section>
            ))}
            <section className="surface-card p-6 sm:p-8">
              <h2 className="text-xl font-semibold text-white">Contact us</h2>
              <p className="mt-4 text-base leading-8 text-neutral-300">
                For privacy questions or requests, email{" "}
                <a className="text-amber-300 underline underline-offset-4" href={`mailto:${CONTACT_EMAIL}`}>
                  {CONTACT_EMAIL}
                </a>.
              </p>
              <Link href="/" className="action-secondary mt-6">Return Home</Link>
            </section>
          </div>
        </section>
      </main>
    </>
  );
}
