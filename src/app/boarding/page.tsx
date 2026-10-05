import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import { boardingCare, boardingPreparation, boardingPrice } from "@/lib/boarding";

export const metadata: Metadata = {
  title: "Overnight Dog Boarding",
  description: "Overnight dog boarding at Patriot K9 Command in Leetonia, Ohio. Daily care and a consistent routine, with availability confirmed individually.",
  alternates: { canonical: "/boarding" },
};

export default function BoardingPage() {
  return <>
    <Header />
    <main className="min-h-screen bg-neutral-950 text-white">
      <section className="section-shell-tight">
        <p className="section-eyebrow">Overnight Boarding · Leetonia, Ohio</p>
        <h1 className="section-title">A place to stay while you’re away</h1>
        <p className="section-copy">For dogs who need overnight care while their owners travel or take time away. Boarding includes daily care and a consistent routine. Formal training sessions and an obedience program are not included.</p>
        <div className="surface-card mt-8 p-6 md:p-8">
          <h2 className="text-2xl font-semibold">Boarding Without Training</h2>
          <p className="mt-3 text-2xl font-semibold text-amber-300">{boardingPrice}</p>
          <p className="mt-3 text-sm leading-7 text-neutral-300">Contact us for availability and a quote for your dates. Short stays, special-care requests, pickup and drop-off arrangements, and the total price are confirmed before booking.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/inquire?service=Boarding%20only" className="action-primary">Request Boarding Availability</Link>
            <a href="sms:8132996905" className="action-secondary">Text About Boarding</a>
          </div>
          <p className="form-hint mt-4">Call or text (813) 299-6905. Visits and drop-offs are by appointment. An inquiry does not reserve a space.</p>
        </div>
        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <section className="surface-card p-6 md:p-8">
            <h2 className="text-2xl font-semibold">Daily care</h2>
            <ul className="mt-5 list-disc space-y-3 pl-5 text-neutral-300">{boardingCare.map((item) => <li key={item}>{item}</li>)}</ul>
            <p className="mt-5 text-sm leading-7 text-neutral-400">Exercise and handling arrangements depend on the individual dog. Discuss the daily routine with us before confirming the stay.</p>
          </section>
          <section className="surface-card p-6 md:p-8">
            <h2 className="text-2xl font-semibold">Before your dog stays</h2>
            <ul className="mt-5 list-disc space-y-3 pl-5 text-neutral-300">{boardingPreparation.map((item) => <li key={item}>{item}</li>)}</ul>
            <p className="mt-5 text-sm leading-7 text-neutral-400">We review handling and care needs before accepting a stay. Medication, medical needs, and challenging behavior require discussion so we can confirm whether boarding is suitable.</p>
          </section>
        </div>
        <section className="surface-card mt-8 p-6 md:p-8">
          <h2 className="text-2xl font-semibold">Want training during the stay?</h2>
          <p className="mt-4 text-neutral-300">Board &amp; Train is a separate program with daily structured training and an owner transfer session. Choose that option when you want dedicated work on obedience and behavior.</p>
          <Link href="/training/board-and-train" className="action-secondary mt-6">Explore Board &amp; Train</Link>
        </section>
      </section>
    </main>
  </>;
}
