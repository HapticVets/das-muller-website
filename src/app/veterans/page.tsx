import type { Metadata } from "next";
import Image from "next/image";
import VeteranSection from "@/components/veterans/VeteranSection";
import VeteranLink from "@/components/veterans/VeteranLink";
import ResponsiveMedia from "@/components/media/ResponsiveMedia";
import { buildVeteranMetadata } from "@/lib/veteranSeo";
import {
  veteranCredibilityPoints,
  veteranHomePillars,
  veteranOutreachAssets,
  veteranProgramCards,
  veteranRoadmap,
} from "@/lib/veteranOutreachContent";

export const metadata: Metadata = buildVeteranMetadata({
  title: "Veteran Outreach | Patriot K9 Command",
  description:
    "Veteran outreach mission focused on practical skills, canine development, homestead systems, and long-term structure after service.",
  path: "/",
});

export default function VeteransPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-neutral-900">
        <div className="absolute inset-0">
          <Image
            src={veteranOutreachAssets.hero.src}
            alt={veteranOutreachAssets.hero.alt}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,10,10,0.38)_0%,rgba(10,10,10,0.82)_58%,rgba(10,10,10,0.96)_100%)]" />
        </div>

        <div className="relative section-shell flex min-h-[38rem] flex-col justify-center lg:min-h-[44rem]">
          <p className="section-eyebrow">Veteran Outreach</p>
          <h1 className="mt-5 max-w-[12ch] text-4xl font-bold leading-[0.95] text-white md:text-6xl">
            A New Mission After Service
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-neutral-200">
            Patriot K9 Command Veteran Outreach carries forward the original
            Haptic Nation Veteran Outreach vision: building a veteran-focused
            ecosystem shaped around trade training, canine development,
            homestead systems, and long-term purpose after service.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <VeteranLink href="/veterans/partners" className="action-primary">
              Support the Mission
            </VeteranLink>
            <VeteranLink href="/veterans/contact" className="action-secondary">
              Contact Veteran Outreach
            </VeteranLink>
          </div>
        </div>
      </section>

      <VeteranSection eyebrow="Structure" title="What We&apos;re Building">
        <div className="grid gap-6 md:grid-cols-2">
          {veteranHomePillars.map((item) => (
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
        eyebrow="Programs"
        title="Real skills, practical systems, and a long-range mission."
        className="bg-neutral-900/30"
      >
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {veteranProgramCards.map((program) => (
            <article
              className="overflow-hidden rounded-[1.75rem] border border-neutral-800 bg-neutral-950 shadow-[0_18px_48px_rgba(0,0,0,0.2)]"
              key={program.title}
            >
              <ResponsiveMedia
                src={program.image}
                alt={`${program.title} program image from the original Veteran Outreach site.`}
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
        eyebrow="Why This Works"
        title="This model is built on practical logic, not empty motivation."
      >
        <div className="grid gap-6 md:grid-cols-2">
          {veteranCredibilityPoints.map((point) => (
            <article className="surface-card p-7 md:p-8" key={point.title}>
              <h2 className="text-2xl font-semibold text-white">
                {point.title}
              </h2>
              <p className="mt-4 text-sm leading-7 text-neutral-300">
                {point.text}
              </p>
            </article>
          ))}
        </div>
      </VeteranSection>

      <VeteranSection
        eyebrow="Mission in Motion"
        title="This vision is being built in stages, not just imagined."
        className="bg-neutral-900/30"
      >
        <div className="grid gap-8 lg:grid-cols-2">
          <article className="surface-card overflow-hidden">
            <ResponsiveMedia
              src={veteranOutreachAssets.missionVeterans.src}
              alt={veteranOutreachAssets.missionVeterans.alt}
              sizes="(min-width: 1024px) 44vw, 100vw"
              aspectRatio="16 / 10"
              objectFit="cover"
              framed={false}
              wrapperClassName="rounded-none"
            />
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-white">
                Veteran Community
              </h2>
              <p className="mt-4 text-sm leading-7 text-neutral-300">
                The original outreach vision centers on structure, teamwork,
                responsibility, and shared purpose rather than abstract
                motivation alone.
              </p>
            </div>
          </article>

          <article className="surface-card overflow-hidden">
            <ResponsiveMedia
              src={veteranOutreachAssets.missionHomestead.src}
              alt={veteranOutreachAssets.missionHomestead.alt}
              sizes="(min-width: 1024px) 44vw, 100vw"
              aspectRatio="16 / 10"
              objectFit="cover"
              framed={false}
              wrapperClassName="rounded-none"
            />
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-white">
                Homestead Systems
              </h2>
              <p className="mt-4 text-sm leading-7 text-neutral-300">
                The source project describes chickens already in motion and
                future expansion into fencing, cattle infrastructure, and
                broader food systems that make the land more self-sustaining.
              </p>
            </div>
          </article>
        </div>
      </VeteranSection>

      <VeteranSection
        eyebrow="Roadmap"
        title="A phased approach to building the full system."
      >
        <div className="grid gap-6 lg:grid-cols-3">
          {veteranRoadmap.map((phase) => (
            <article className="surface-card p-7 md:p-8" key={phase.phase}>
              <h2 className="text-xl font-semibold text-amber-300">
                {phase.phase}
              </h2>
              <ul className="mt-5 space-y-3 text-sm leading-7 text-neutral-300">
                {phase.items.map((item) => (
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
        eyebrow="Relationship"
        title="Mission-aligned partnerships remain part of the broader build."
        className="bg-neutral-900/30"
      >
        <div className="grid gap-6 lg:grid-cols-2">
          <article className="surface-card p-7 text-center md:p-8">
            <div className="relative mx-auto h-28 w-full max-w-[15rem]">
              <Image
                src={veteranOutreachAssets.partnerDasMuller.src}
                alt={veteranOutreachAssets.partnerDasMuller.alt}
                fill
                sizes="240px"
                className="object-contain"
              />
            </div>
            <p className="mt-6 text-sm leading-7 text-neutral-300">
              Das Muller contributes to working-dog development and remains a
              visible part of the original HNVO mission structure.
            </p>
          </article>

          <article className="surface-card p-7 text-center md:p-8">
            <div className="relative mx-auto h-28 w-full max-w-[15rem]">
              <Image
                src={veteranOutreachAssets.partnerPatriotK9.src}
                alt={veteranOutreachAssets.partnerPatriotK9.alt}
                fill
                sizes="240px"
                className="object-contain"
              />
            </div>
            <p className="mt-6 text-sm leading-7 text-neutral-300">
              Patriot K9 Command provides the current site home for this
              veteran outreach section while preserving the original focus on
              canine structure, mission support, and practical systems.
            </p>
          </article>
        </div>

        <div className="surface-card mt-8 p-8 text-center">
          <p className="mx-auto max-w-3xl text-base leading-8 text-neutral-300">
            If you want to support, sponsor, or help build the next phase of
            the mission, start with the partnership and contact pages.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <VeteranLink href="/veterans/partners" className="action-primary">
              View Support Opportunities
            </VeteranLink>
            <VeteranLink href="/veterans/contact" className="action-secondary">
              Contact Veteran Outreach
            </VeteranLink>
          </div>
        </div>
      </VeteranSection>
    </>
  );
}
