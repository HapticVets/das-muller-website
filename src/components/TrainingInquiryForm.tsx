"use client";

import Script from "next/script";
import { useEffect, useRef, useState } from "react";
import { contactMethods, inquiryServices } from "@/lib/trainingInquiry";

export default function TrainingInquiryForm({ defaultService = "" }: { defaultService?: string }) {
  const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || "";
  const widgetRef = useRef<string | null>(null);
  const [turnstileToken, setTurnstileToken] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState("");

  useEffect(() => {
    if (!siteKey) return;
    const render = () => {
      const container = document.getElementById("training-inquiry-turnstile");
      if (!container || !window.turnstile || widgetRef.current !== null) return;
      const options = {
        sitekey: siteKey,
        action: "training_inquiry",
        callback: setTurnstileToken,
        "expired-callback": () => setTurnstileToken(""),
        "error-callback": () => setTurnstileToken(""),
      };
      widgetRef.current = window.turnstile.render(container, options);
    };
    render();
    const interval = window.setInterval(render, 300);
    return () => {
      window.clearInterval(interval);
      if (widgetRef.current !== null) window.turnstile?.remove?.(widgetRef.current);
      widgetRef.current = null;
    };
  }, [siteKey]);

  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (submitting) return;
    if (!siteKey || !turnstileToken) {
      setStatus(siteKey ? "Please complete verification before submitting." : "Online inquiries are temporarily unavailable. Please call or text us.");
      return;
    }
    setSubmitting(true);
    setStatus("");
    const data = Object.fromEntries(new FormData(event.currentTarget));
    try {
      const response = await fetch("/api/training-inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, turnstileToken }),
        signal: AbortSignal.timeout(30_000),
      });
      const result = await response.json();
      if (!response.ok || !result.success) throw new Error(result.error || "Your inquiry could not be submitted.");
      window.location.assign("/inquire/thank-you");
    } catch (error) {
      setStatus(error instanceof Error ? error.message : "Your inquiry could not be submitted. Please try again.");
      setTurnstileToken("");
      if (widgetRef.current !== null) window.turnstile?.reset?.(widgetRef.current);
      setSubmitting(false);
    }
  }

  return <>
    {siteKey ? <Script src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit" strategy="afterInteractive" /> : null}
    <form onSubmit={submit} className="surface-card p-6 md:p-8">
      <input name="companyFax" className="hidden" autoComplete="off" tabIndex={-1} aria-hidden="true" />
      <div className="grid gap-6 md:grid-cols-2">
        <Field label="Full name" name="name" autoComplete="name" required />
        <Field label="Email" name="email" type="email" autoComplete="email" required />
        <Field label="Phone" name="phone" type="tel" autoComplete="tel" required />
        <Field label="City and state" name="cityState" autoComplete="address-level2" required />
        <Field label="Dog's name" name="dogName" required />
        <Field label="Breed" name="breed" />
        <Field label="Dog's age" name="dogAge" />
        <label className="block text-sm font-medium text-neutral-200">Service needed *<select name="service" required defaultValue={inquiryServices.includes(defaultService as never) ? defaultService : ""} className="field-base mt-2"><option value="">Select a service</option>{inquiryServices.map((service) => <option key={service}>{service}</option>)}</select></label>
        <Field label="Requested boarding dates" name="requestedDates" placeholder="If applicable" />
        <label className="block text-sm font-medium text-neutral-200">Preferred contact *<select name="preferredContact" required defaultValue="Text" className="field-base mt-2">{contactMethods.map((method) => <option key={method}>{method}</option>)}</select></label>
        <label className="block text-sm font-medium text-neutral-200 md:col-span-2">Goals, behavior concerns, or care needs *<textarea name="goals" required maxLength={2000} rows={5} className="field-base mt-2" placeholder="Tell us what you need help with and anything important about your dog." /></label>
      </div>
      <p className="form-hint mt-6">Submitting this form does not reserve boarding dates or guarantee acceptance into a training program. We will contact you to confirm availability and the right next step.</p>
      <div className="mt-6" id="training-inquiry-turnstile" />
      {status ? <p role="alert" className="mt-4 text-sm leading-7 text-amber-300">{status}</p> : null}
      <button type="submit" disabled={submitting || !siteKey || !turnstileToken} className="action-primary mt-6 disabled:opacity-60">{submitting ? "Sending..." : "Send Training & Boarding Inquiry"}</button>
    </form>
  </>;
}

function Field({ label, name, type = "text", required = false, ...props }: { label: string; name: string; type?: string; required?: boolean; autoComplete?: string; placeholder?: string }) {
  return <label className="block text-sm font-medium text-neutral-200">{label}{required ? " *" : ""}<input name={name} type={type} required={required} maxLength={254} className="field-base mt-2" {...props} /></label>;
}
