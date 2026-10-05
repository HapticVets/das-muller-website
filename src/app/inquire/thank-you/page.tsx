import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";

export const metadata: Metadata = { title: "Inquiry Received", robots: { index: false, follow: false } };

export default function InquiryThankYouPage() {
  return <>
    <Header />
    <main className="min-h-screen bg-neutral-950 text-white">
      <section className="section-shell-tight max-w-4xl text-center">
        <p className="section-eyebrow">Inquiry Received</p>
        <h1 className="section-title mx-auto">Thank you for contacting Patriot K9 Command</h1>
        <p className="section-copy mx-auto">We received your training or boarding inquiry and will contact you about availability and the right next step. Submitting an inquiry does not reserve boarding dates.</p>
        <div className="mt-8 flex flex-wrap justify-center gap-4"><Link href="/" className="action-primary">Return Home</Link><a href="sms:8132996905" className="action-secondary">Text (813) 299-6905</a></div>
      </section>
    </main>
  </>;
}
