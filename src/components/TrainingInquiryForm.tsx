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
  const [service, setService] = useState(defaultService);
  const [slots, setSlots] = useState<{id:string;starts_at:string;ends_at:string}[]>([]);
  const [availabilityStatus, setAvailabilityStatus] = useState('Loading available times…');
  const [day, setDay] = useState('');
  const [bookingSlot, setBookingSlot] = useState('');
  const submissionRef = useRef('');
  const refreshAvailability = async () => {
    try {
      const response = await fetch('/api/booking-availability',{cache:'no-store'});
      if (!response.ok) throw new Error();
      const result = await response.json();
      setSlots(result.slots);
      setAvailabilityStatus(result.slots.length ? '' : 'No appointment times are currently posted. Send an inquiry below and we will arrange a time with you.');
    } catch { setAvailabilityStatus('Available times could not be loaded. Send an inquiry below or call/text us.'); }
  };
  useEffect(() => { void refreshAvailability(); }, []);
  const slotDay = (value:string) => new Intl.DateTimeFormat('en-CA',{timeZone:'America/New_York',year:'numeric',month:'2-digit',day:'2-digit'}).format(new Date(value));
  const days = [...new Set(slots.map(s=>slotDay(s.starts_at)))];

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
    if (!submissionRef.current) submissionRef.current = crypto.randomUUID();
    try {
      const response = await fetch("/api/training-inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, bookingSlot, submissionId:submissionRef.current, turnstileToken }),
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
      void refreshAvailability();
    }
  }

  return <>
    {siteKey ? <Script src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit" strategy="afterInteractive" /> : null}
    <form onSubmit={submit} className="surface-card p-6 md:p-8">
      <input name="companyFax" className="hidden" autoComplete="off" tabIndex={-1} aria-hidden="true" />
      <div className="mb-7 rounded-2xl border border-amber-500/20 bg-amber-500/10 p-5 text-sm leading-7 text-neutral-200">
        <p className="font-semibold text-white">A quick request—not a commitment.</p>
        <p className="mt-1">Tell us what you need. We will review fit and availability, then contact you before anything is scheduled or charged.</p>
        <ul className="mt-3 flex flex-wrap gap-x-5 gap-y-1 text-neutral-300">
          <li>Usually takes about 2 minutes</li>
          <li>No payment required</li>
          <li>No obligation</li>
          <li>We normally respond by your preferred contact method</li>
        </ul>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        <Field label="Full name" name="name" autoComplete="name" required />
        <Field label={bookingSlot ? 'Email for appointment confirmation' : 'Email (or provide a phone number)'} name="email" type="email" autoComplete="email" required={!!bookingSlot} />
        <Field label="Phone (or provide an email address)" name="phone" type="tel" autoComplete="tel" />
        <Field label="City and state" name="cityState" autoComplete="address-level2" />
        <Field label="Dog's name" name="dogName" required />
        <Field label="Breed" name="breed" />
        <Field label="Dog's age" name="dogAge" />
        <label className="block text-sm font-medium text-neutral-200">Service needed *<select name="service" required value={inquiryServices.includes(service as never) ? service : ''} onChange={e=>{setService(e.target.value);setBookingSlot('');submissionRef.current='';}} className="field-base mt-2"><option value="">Select a service</option>{inquiryServices.map((service) => <option key={service}>{service}</option>)}</select></label>
        {service === 'Private training' ? <fieldset className="md:col-span-2 rounded-xl border border-neutral-700 p-5">
          <legend className="px-2 font-semibold">Request a 60-minute private training appointment</legend>
          <p className="text-sm text-neutral-300">All times are Eastern time. Your appointment is pending until John approves it. You may also leave the time blank and ask us to arrange one.</p>
          {availabilityStatus ? <p className="mt-3 text-sm" role="status">{availabilityStatus}</p> : null}
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <label>Available day<select className="field-base mt-2" value={day} onChange={e=>{setDay(e.target.value);setBookingSlot('');submissionRef.current='';}}><option value="">Choose a day (optional)</option>{days.map(d=><option key={d} value={d}>{new Date(`${d}T12:00:00Z`).toLocaleDateString('en-US',{timeZone:'America/New_York',weekday:'long',month:'long',day:'numeric',year:'numeric'})}</option>)}</select></label>
            <label>Available time<select className="field-base mt-2" disabled={!day} value={bookingSlot} onChange={e=>{setBookingSlot(e.target.value);submissionRef.current='';}}><option value="">Arrange a time with us</option>{slots.filter(s=>slotDay(s.starts_at)===day).map(s=><option key={s.id} value={s.id}>{new Date(s.starts_at).toLocaleTimeString('en-US',{timeZone:'America/New_York',hour:'numeric',minute:'2-digit'})} – {new Date(s.ends_at).toLocaleTimeString('en-US',{timeZone:'America/New_York',hour:'numeric',minute:'2-digit',timeZoneName:'short'})}</option>)}</select></label>
          </div>
        </fieldset> : null}
        <Field label="Requested boarding dates" name="requestedDates" placeholder="If applicable" />
        <label className="block text-sm font-medium text-neutral-200">Preferred contact *<select name="preferredContact" required defaultValue="Text" className="field-base mt-2">{contactMethods.map((method) => <option key={method}>{method}</option>)}</select></label>
        <label className="block text-sm font-medium text-neutral-200 md:col-span-2">Goals, behavior concerns, or care needs *<textarea name="goals" required maxLength={2000} rows={5} className="field-base mt-2" placeholder="Tell us what you need help with and anything important about your dog." /></label>
      </div>
      <p className="form-hint mt-6">Submitting this form does not reserve boarding dates or guarantee acceptance into a training program. We will contact you to confirm availability and the right next step. Your information is used only to respond to your request and is not sold. <a href="/privacy" className="underline hover:text-white">Privacy policy</a>.</p>
      <div className="mt-6" id="training-inquiry-turnstile" />
      {status ? <p role="alert" className="mt-4 text-sm leading-7 text-amber-300">{status}</p> : null}
      <button type="submit" disabled={submitting || !siteKey || !turnstileToken} className="action-primary mt-6 disabled:opacity-60">{submitting ? "Sending..." : "Request Training or Boarding Availability"}</button>
    </form>
  </>;
}

function Field({ label, name, type = "text", required = false, ...props }: { label: string; name: string; type?: string; required?: boolean; autoComplete?: string; placeholder?: string }) {
  return <label className="block text-sm font-medium text-neutral-200">{label}{required ? " *" : ""}<input name={name} type={type} required={required} maxLength={254} className="field-base mt-2" {...props} /></label>;
}
