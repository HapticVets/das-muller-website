import Link from "next/link";

export default function AnnaBreedingUpdate() {
  return (
    <aside className="my-8 rounded-2xl border border-amber-500/35 bg-amber-500/5 p-6 sm:p-8" aria-label="Anna planned litter update">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-400">Breeding plans · Updated October 29, 2026</p>
      <h2 className="mt-3 text-2xl font-semibold text-white">Preparing for Anna&apos;s next litter</h2>
      <p className="mt-4 max-w-3xl leading-7 text-neutral-300">Anna is in heat, and we are preparing to attempt a breeding during this cycle over the coming weeks. Breeding has not yet been completed, and pregnancy is not confirmed. We will share pairing details and further updates as they are confirmed; no due date or puppy availability is confirmed at this stage.</p>
      <div className="mt-5 flex flex-wrap gap-4">
        <Link href="/apply" className="inline-flex min-h-11 items-center rounded-xl bg-amber-500 px-5 py-3 font-semibold text-black hover:bg-amber-400">Ask About a Future Puppy</Link>
        <Link href="/our-dogs/anna" className="inline-flex min-h-11 items-center px-2 py-3 font-semibold text-amber-300 underline underline-offset-4">Meet Anna</Link>
      </div>
    </aside>
  );
}
