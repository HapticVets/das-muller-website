import Image from "next/image";

export default function KennelSponsor() {
  return (
    <section id="sponsor" aria-label="Kennel and Veteran outreach sponsor" className="scroll-mt-28 border-y border-amber-500/25 bg-neutral-900/60">
      <div className="mx-auto max-w-5xl px-5 py-10 sm:px-8 lg:px-12">
        <div className="grid items-center gap-6 sm:grid-cols-[minmax(0,18rem)_minmax(0,1fr)]">
          <Image
            src="/logos/frontline-chimney.png"
            alt="Will’s Frontline Chimney sponsor logo"
            width={1536}
            height={1024}
            sizes="(min-width: 640px) 288px, calc(100vw - 40px)"
            className="h-auto w-full rounded-2xl border border-neutral-200 bg-white object-contain"
          />
          <div>
            <p className="section-eyebrow">Our Sponsor</p>
            <h2 className="mt-3 text-2xl font-semibold text-white">Will’s Frontline Chimney</h2>
            <p className="mt-4 max-w-3xl text-base leading-8 text-neutral-300">
              Thank you to Will’s Frontline Chimney for sponsoring Patriot K9 Command,
              our kennel, and our Veteran outreach missions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
