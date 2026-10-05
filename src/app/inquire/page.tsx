import type { Metadata } from "next";
import Header from "@/components/Header";
import TrainingInquiryForm from "@/components/TrainingInquiryForm";

export const metadata: Metadata = {
  title: "Training & Boarding Inquiry",
  description: "Contact Patriot K9 Command about dog boarding, Board & Train, private lessons, evaluations, puppy training, or behavior modification in Leetonia, Ohio.",
  alternates: { canonical: "/inquire" },
};

export default async function InquiryPage({ searchParams }: { searchParams: Promise<{ service?: string }> }) {
  const { service = "" } = await searchParams;
  return <>
    <Header />
    <main className="min-h-screen bg-neutral-950 text-white">
      <section className="section-shell-tight">
        <p className="section-eyebrow">Training &amp; Boarding</p>
        <h1 className="section-title">Tell us what your dog needs</h1>
        <p className="section-copy">Request boarding dates, a training evaluation, private lessons, Board &amp; Train, or help choosing the right service. This request does not commit you to a program. Patriot K9 Command is based in Leetonia, Ohio.</p>
        <div className="mt-10"><TrainingInquiryForm defaultService={service} /></div>
        <p className="form-hint mt-6">Prefer to text? Contact (813) 299-6905. Visits are by appointment only.</p>
      </section>
    </main>
  </>;
}
