"use client";

import { useEffect, useRef, useState } from "react";
import Script from "next/script";

declare global {
  interface Window {
    turnstile?: {
      render: (
        container: string | HTMLElement,
        options: {
          sitekey: string;
          callback?: (token: string) => void;
          "expired-callback"?: () => void;
          "error-callback"?: () => void;
        }
      ) => string;
      remove?: (widgetId: string) => void;
      reset?: (widgetId?: string) => void;
    };
  }
}

type FormState = {
  companyFax: string;
  name: string;
  email: string;
  phone: string;
  location: string;
  housing: string;
  fencedYard: string;
  householdSize: string;
  childrenAges: string;
  householdAnimals: string;
  householdRoutine: string;
  ownedGsdBefore: string;
  raisedPuppyBefore: string;
  structuredTraining: string;
  experienceLevel: string;
  experience: string;
  primaryGoal: string;
  homeActivityLevel: string;
  aloneHours: string;
  dailyExercise: string;
  whyGsd: string;
  idealDogRole: string;
  preferredEnergy: string;
  preferredConfidence: string;
  preferredSocialStyle: string;
  preferredTrainingStyle: string;
  preferredTraits: string;
  pickupPreference: string;
  crateTrain: string;
  maintainStructure: string;
  openToTraining: string;
  preparedForCosts: string;
  finalNotes: string;
};

const initialState: FormState = {
  companyFax: "",
  name: "",
  email: "",
  phone: "",
  location: "",
  housing: "",
  fencedYard: "",
  householdSize: "",
  childrenAges: "",
  householdAnimals: "",
  householdRoutine: "",
  ownedGsdBefore: "",
  raisedPuppyBefore: "",
  structuredTraining: "",
  experienceLevel: "",
  experience: "",
  primaryGoal: "",
  homeActivityLevel: "",
  aloneHours: "",
  dailyExercise: "",
  whyGsd: "",
  idealDogRole: "",
  preferredEnergy: "",
  preferredConfidence: "",
  preferredSocialStyle: "",
  preferredTrainingStyle: "",
  preferredTraits: "",
  pickupPreference: "",
  crateTrain: "",
  maintainStructure: "",
  openToTraining: "",
  preparedForCosts: "",
  finalNotes: "",
};

const steps = [
  { id: "about-you", label: "About You" },
  { id: "household", label: "Your Household" },
  { id: "experience", label: "Dog Experience" },
  { id: "goals", label: "Your Goals" },
  { id: "commitment", label: "Care & Commitment" },
  { id: "review", label: "Review & Submit" },
];

const requiredFieldsByStep: Array<Array<keyof FormState>> = [
  ["name", "email", "phone", "location"],
  ["housing", "fencedYard"],
  [],
  [],
  [],
  [],
];

function FieldError({
  show,
  message = "This field is required.",
}: {
  show: boolean;
  message?: string;
}) {
  if (!show) return null;

  return <p className="mt-2 text-sm text-amber-300">{message}</p>;
}

function ReviewItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-neutral-800 bg-neutral-950/70 p-4">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-300">
        {label}
      </p>
      <p className="mt-2 whitespace-pre-wrap text-sm leading-7 text-neutral-200">
        {value || "Not provided"}
      </p>
    </div>
  );
}

export default function PuppyApplicationWizard() {
  const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || "";
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState<FormState>(initialState);
  const [touchedFields, setTouchedFields] = useState<
    Partial<Record<keyof FormState, boolean>>
  >({});
  const [submitting, setSubmitting] = useState(false);
  const [turnstileToken, setTurnstileToken] = useState("");
  const headingRef = useRef<HTMLHeadingElement | null>(null);
  const widgetRendered = useRef(false);
  const widgetId = useRef<string | null>(null);

  useEffect(() => {
    headingRef.current?.focus();
  }, [step]);

  useEffect(() => {
    if (step !== steps.length - 1) {
      if (window.turnstile && widgetId.current) {
        window.turnstile.remove?.(widgetId.current);
      }
      widgetId.current = null;
      widgetRendered.current = false;
      setTurnstileToken("");
      return;
    }

    const tryRender = () => {
      if (!siteKey) return;
      if (!window.turnstile) return;
      if (widgetRendered.current) return;

      const container = document.getElementById("turnstile-container");
      if (!container) return;

      widgetId.current = window.turnstile.render(container, {
        sitekey: siteKey,
        callback: (token: string) => {
          setTurnstileToken(token);
        },
        "expired-callback": () => {
          setTurnstileToken("");
        },
        "error-callback": () => {
          setTurnstileToken("");
        },
      });

      widgetRendered.current = true;
    };

    const interval = window.setInterval(() => {
      tryRender();
      if (widgetRendered.current) {
        window.clearInterval(interval);
      }
    }, 300);

    tryRender();

    return () => {
      window.clearInterval(interval);
    };
  }, [siteKey, step]);

  function updateField<K extends keyof FormState>(key: K, value: FormState[K]) {
    setFormData((current) => ({ ...current, [key]: value }));
  }

  function markTouched(key: keyof FormState) {
    setTouchedFields((current) => ({ ...current, [key]: true }));
  }

  function isFieldInvalid(key: keyof FormState) {
    return !!touchedFields[key] && requiredFieldsByStep[step].includes(key) && !formData[key].trim();
  }

  function isCurrentStepValid() {
    return requiredFieldsByStep[step].every((key) => formData[key].trim());
  }

  function goNext() {
    setStep((current) => Math.min(current + 1, steps.length - 1));
  }

  function goPrevious() {
    setStep((current) => Math.max(current - 1, 0));
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!siteKey) {
      alert("Captcha is not configured for this deployment yet.");
      return;
    }

    if (!turnstileToken) {
      alert("Please complete the captcha before submitting.");
      return;
    }

    setSubmitting(true);

    const data = {
      ...formData,
      turnstileToken,
    };

    try {
      const res = await fetch("/api/puppy-application", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (res.ok && result.success) {
        alert("Application submitted successfully.");
        setFormData(initialState);
        setTurnstileToken("");
        setStep(0);

        if (window.turnstile && widgetId.current) {
          window.turnstile.reset?.(widgetId.current);
        }
      } else {
        alert(result.error || "Something went wrong submitting the application.");
        console.error(result);
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong submitting the application.");
    } finally {
      setSubmitting(false);
    }
  }

  const progressWidth = `${((step + 1) / steps.length) * 100}%`;

  return (
    <>
      <Script
        src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit"
        strategy="afterInteractive"
      />

      <form onSubmit={handleSubmit} className="surface-card p-6 md:p-8">
        <input
          type="text"
          name="companyFax"
          value={formData.companyFax}
          onChange={(e) => updateField("companyFax", e.target.value)}
          className="hidden"
          autoComplete="off"
          tabIndex={-1}
        />

        <div className="rounded-2xl border border-neutral-800 bg-neutral-900/55 p-4 md:p-5">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-300">
                Step {step + 1} of {steps.length}
              </p>
              <h2
                ref={headingRef}
                tabIndex={-1}
                className="mt-2 text-2xl font-semibold text-white outline-none md:text-3xl"
              >
                {steps[step].label}
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-7 text-neutral-400">
              Your information is used only to review your application and
              communicate with you about potential placement.
            </p>
          </div>

          <div className="mt-5 h-2 overflow-hidden rounded-full bg-neutral-800">
            <div
              className="h-full rounded-full bg-amber-500 transition-all duration-200"
              style={{ width: progressWidth }}
            />
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {steps.map((item, index) => (
              <span
                key={item.id}
                className={`rounded-full px-3 py-1 text-xs font-medium tracking-[0.12em] ${
                  index === step
                    ? "bg-amber-500 text-black"
                    : index < step
                      ? "border border-amber-500/30 bg-amber-500/10 text-amber-200"
                      : "border border-neutral-700 bg-neutral-900 text-neutral-400"
                }`}
              >
                {item.label}
              </span>
            ))}
          </div>
        </div>

        {step === 0 ? (
          <section className="mt-8 space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-white">
                Tell us how to reach you
              </h3>
              <p className="form-hint">
                Start with the basic contact details we need to review your
                application.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-medium text-neutral-200">
                  Full Name *
                </label>
                <input
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => updateField("name", e.target.value)}
                  onBlur={() => markTouched("name")}
                  className="field-base"
                  required
                />
                <FieldError show={isFieldInvalid("name")} />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-neutral-200">
                  Email Address *
                </label>
                <input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => updateField("email", e.target.value)}
                  onBlur={() => markTouched("email")}
                  className="field-base"
                  required
                />
                <FieldError show={isFieldInvalid("email")} />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-neutral-200">
                  Phone Number *
                </label>
                <input
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => updateField("phone", e.target.value)}
                  onBlur={() => markTouched("phone")}
                  className="field-base"
                  required
                />
                <FieldError show={isFieldInvalid("phone")} />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-neutral-200">
                  City and State *
                </label>
                <input
                  name="location"
                  type="text"
                  value={formData.location}
                  onChange={(e) => updateField("location", e.target.value)}
                  onBlur={() => markTouched("location")}
                  className="field-base"
                  required
                />
                <FieldError show={isFieldInvalid("location")} />
              </div>
            </div>
          </section>
        ) : null}

        {step === 1 ? (
          <section className="mt-8 space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-white">
                Your home and daily environment
              </h3>
              <p className="form-hint">
                This helps us understand the setting your puppy will be living
                in and the expectations around it.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-medium text-neutral-200">
                  Do you rent or own your home? *
                </label>
                <select
                  name="housing"
                  className="field-base"
                  value={formData.housing}
                  onChange={(e) => updateField("housing", e.target.value)}
                  onBlur={() => markTouched("housing")}
                  required
                >
                  <option value="">Select an option</option>
                  <option>Own</option>
                  <option>Rent</option>
                </select>
                <FieldError show={isFieldInvalid("housing")} />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-neutral-200">
                  Do you have a fenced yard? *
                </label>
                <select
                  name="fencedYard"
                  className="field-base"
                  value={formData.fencedYard}
                  onChange={(e) => updateField("fencedYard", e.target.value)}
                  onBlur={() => markTouched("fencedYard")}
                  required
                >
                  <option value="">Select an option</option>
                  <option>Yes</option>
                  <option>No</option>
                  <option>Partially</option>
                </select>
                <FieldError show={isFieldInvalid("fencedYard")} />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-neutral-200">
                  How many people live in the home?
                </label>
                <input
                  name="householdSize"
                  type="text"
                  value={formData.householdSize}
                  onChange={(e) => updateField("householdSize", e.target.value)}
                  className="field-base"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-neutral-200">
                  Ages of children in the home
                </label>
                <input
                  name="childrenAges"
                  type="text"
                  value={formData.childrenAges}
                  onChange={(e) => updateField("childrenAges", e.target.value)}
                  className="field-base"
                />
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-medium text-neutral-200">
                  Other dogs or animals in the home
                </label>
                <textarea
                  name="householdAnimals"
                  rows={5}
                  value={formData.householdAnimals}
                  onChange={(e) => updateField("householdAnimals", e.target.value)}
                  className="field-base min-h-40"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-neutral-200">
                  Household environment and daily routine
                </label>
                <textarea
                  name="householdRoutine"
                  rows={5}
                  value={formData.householdRoutine}
                  onChange={(e) => updateField("householdRoutine", e.target.value)}
                  className="field-base min-h-40"
                />
              </div>
            </div>
          </section>
        ) : null}

        {step === 2 ? (
          <section className="mt-8 space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-white">
                Your background with dogs and training
              </h3>
              <p className="form-hint">
                Honest answers help us understand the level of structure and
                support your household may need.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {[
                {
                  key: "ownedGsdBefore",
                  label: "Have you owned a German Shepherd before?",
                  options: ["Yes", "No"],
                },
                {
                  key: "raisedPuppyBefore",
                  label: "Have you raised a puppy before?",
                  options: ["Yes", "No"],
                },
                {
                  key: "structuredTraining",
                  label: "Have you worked with structured dog training?",
                  options: ["Yes", "A little", "No"],
                },
                {
                  key: "experienceLevel",
                  label: "How would you describe your experience level?",
                  options: [
                    "First-time owner",
                    "Some experience",
                    "Experienced owner",
                    "Experienced working-dog home",
                  ],
                },
              ].map((field) => (
                <div key={field.key}>
                  <label className="mb-2 block text-sm font-medium text-neutral-200">
                    {field.label}
                  </label>
                  <select
                    name={field.key}
                    className="field-base"
                    value={formData[field.key as keyof FormState]}
                    onChange={(e) =>
                      updateField(field.key as keyof FormState, e.target.value)
                    }
                  >
                    <option value="">Select an option</option>
                    {field.options.map((option) => (
                      <option key={option}>{option}</option>
                    ))}
                  </select>
                </div>
              ))}
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-neutral-200">
                Tell us about your past dog ownership and training experience
              </label>
              <textarea
                name="experience"
                rows={6}
                value={formData.experience}
                onChange={(e) => updateField("experience", e.target.value)}
                className="field-base min-h-44"
              />
            </div>
          </section>
        ) : null}

        {step === 3 ? (
          <section className="mt-8 space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-white">
                What you want from the dog
              </h3>
              <p className="form-hint">
                Describe your priorities clearly so we can better judge fit,
                pace, and temperament.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {[
                {
                  key: "primaryGoal",
                  label: "What are you mainly looking for?",
                  options: [
                    "Family companion",
                    "Active family dog",
                    "Protection-minded home dog",
                    "Training prospect",
                    "Service prospect",
                    "Working prospect",
                  ],
                },
                {
                  key: "homeActivityLevel",
                  label: "How active is your home?",
                  options: ["Low", "Moderate", "High"],
                },
                {
                  key: "preferredEnergy",
                  label: "Preferred energy level",
                  options: [
                    "Lower / easier going",
                    "Moderate / balanced",
                    "High drive / highly active",
                  ],
                },
                {
                  key: "preferredConfidence",
                  label: "Preferred confidence level",
                  options: [
                    "Soft and easier to handle",
                    "Balanced confidence",
                    "Bold and very confident",
                  ],
                },
                {
                  key: "preferredSocialStyle",
                  label: "Preferred social style",
                  options: [
                    "Very social and outgoing",
                    "Balanced / neutral",
                    "More reserved and watchful",
                  ],
                },
                {
                  key: "preferredTrainingStyle",
                  label: "Preferred training style",
                  options: [
                    "Easy companion dog",
                    "Trainable family dog",
                    "Strong working potential",
                  ],
                },
              ].map((field) => (
                <div key={field.key}>
                  <label className="mb-2 block text-sm font-medium text-neutral-200">
                    {field.label}
                  </label>
                  <select
                    name={field.key}
                    className="field-base"
                    value={formData[field.key as keyof FormState]}
                    onChange={(e) =>
                      updateField(field.key as keyof FormState, e.target.value)
                    }
                  >
                    <option value="">Select an option</option>
                    {field.options.map((option) => (
                      <option key={option}>{option}</option>
                    ))}
                  </select>
                </div>
              ))}

              <div>
                <label className="mb-2 block text-sm font-medium text-neutral-200">
                  How many hours will the dog be alone each day?
                </label>
                <input
                  name="aloneHours"
                  type="text"
                  value={formData.aloneHours}
                  onChange={(e) => updateField("aloneHours", e.target.value)}
                  className="field-base"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-neutral-200">
                  How much daily exercise do you realistically plan to provide?
                </label>
                <input
                  name="dailyExercise"
                  type="text"
                  value={formData.dailyExercise}
                  onChange={(e) => updateField("dailyExercise", e.target.value)}
                  className="field-base"
                />
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-medium text-neutral-200">
                  Why do you want a German Shepherd specifically?
                </label>
                <textarea
                  name="whyGsd"
                  rows={5}
                  value={formData.whyGsd}
                  onChange={(e) => updateField("whyGsd", e.target.value)}
                  className="field-base min-h-40"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-neutral-200">
                  Describe your ideal dog and the role it will have in your life
                </label>
                <textarea
                  name="idealDogRole"
                  rows={5}
                  value={formData.idealDogRole}
                  onChange={(e) => updateField("idealDogRole", e.target.value)}
                  className="field-base min-h-40"
                />
              </div>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-neutral-200">
                Traits that matter most to you in a puppy
              </label>
              <textarea
                name="preferredTraits"
                rows={5}
                value={formData.preferredTraits}
                onChange={(e) => updateField("preferredTraits", e.target.value)}
                className="field-base min-h-40"
              />
              <p className="form-hint">
                Eligible puppies include the documentation needed for AKC
                registration. Registration is completed by the new owner after
                placement. Companion placements may use limited registration,
                and any full-registration arrangement must be approved and
                documented in the purchase agreement.
              </p>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-neutral-200">
                Preferred puppy pickup or transportation option
              </label>
              <select
                name="pickupPreference"
                className="field-base"
                value={formData.pickupPreference}
                onChange={(e) => updateField("pickupPreference", e.target.value)}
              >
                <option value="">Select an option</option>
                <option>Pickup in Leetonia, Ohio</option>
                <option>Scheduled meet-up location</option>
                <option>Delivery or transport request</option>
                <option>Not sure yet</option>
              </select>
              <p className="form-hint">
                Meet-up and delivery availability depends on distance,
                scheduling, and the individual placement. Any transportation
                fee will be discussed before final arrangements.
              </p>
            </div>
          </section>
        ) : null}

        {step === 4 ? (
          <section className="mt-8 space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-white">
                Expectations, structure, and commitment
              </h3>
              <p className="form-hint">
                These answers help us understand readiness for the ongoing work
                that comes with this breed.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {[
                {
                  key: "crateTrain",
                  label: "Are you willing to crate train?",
                },
                {
                  key: "maintainStructure",
                  label: "Are you willing to maintain structure and obedience?",
                },
                {
                  key: "openToTraining",
                  label: "Are you open to training guidance or a training program?",
                },
                {
                  key: "preparedForCosts",
                  label: "Are you prepared for the ongoing cost of a large breed dog?",
                },
              ].map((field) => (
                <div key={field.key}>
                  <label className="mb-2 block text-sm font-medium text-neutral-200">
                    {field.label}
                  </label>
                  <select
                    name={field.key}
                    className="field-base"
                    value={formData[field.key as keyof FormState]}
                    onChange={(e) =>
                      updateField(field.key as keyof FormState, e.target.value)
                    }
                  >
                    <option value="">Select an option</option>
                    <option>Yes</option>
                    <option>No</option>
                  </select>
                </div>
              ))}
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-neutral-200">
                Anything else you want us to know about your home, goals, or ideal puppy?
              </label>
              <textarea
                name="finalNotes"
                rows={6}
                value={formData.finalNotes}
                onChange={(e) => updateField("finalNotes", e.target.value)}
                className="field-base min-h-44"
              />
            </div>
          </section>
        ) : null}

        {step === 5 ? (
          <section className="mt-8 space-y-8">
            <div>
              <h3 className="text-lg font-semibold text-white">
                Review your information carefully before submitting
              </h3>
              <p className="form-hint">
                You can return to any previous step to make changes.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <ReviewItem label="Full Name" value={formData.name} />
              <ReviewItem label="Email" value={formData.email} />
              <ReviewItem label="Phone" value={formData.phone} />
              <ReviewItem label="City and State" value={formData.location} />
              <ReviewItem label="Housing" value={formData.housing} />
              <ReviewItem label="Fenced Yard" value={formData.fencedYard} />
              <ReviewItem label="Household Size" value={formData.householdSize} />
              <ReviewItem label="Children Ages" value={formData.childrenAges} />
              <ReviewItem label="Other Animals" value={formData.householdAnimals} />
              <ReviewItem
                label="Household Routine"
                value={formData.householdRoutine}
              />
              <ReviewItem
                label="Owned German Shepherd Before"
                value={formData.ownedGsdBefore}
              />
              <ReviewItem
                label="Raised Puppy Before"
                value={formData.raisedPuppyBefore}
              />
              <ReviewItem
                label="Structured Training"
                value={formData.structuredTraining}
              />
              <ReviewItem
                label="Experience Level"
                value={formData.experienceLevel}
              />
              <ReviewItem
                label="Past Experience"
                value={formData.experience}
              />
              <ReviewItem label="Primary Goal" value={formData.primaryGoal} />
              <ReviewItem
                label="Home Activity Level"
                value={formData.homeActivityLevel}
              />
              <ReviewItem
                label="Hours Alone Each Day"
                value={formData.aloneHours}
              />
              <ReviewItem
                label="Daily Exercise Plan"
                value={formData.dailyExercise}
              />
              <ReviewItem label="Why a German Shepherd" value={formData.whyGsd} />
              <ReviewItem label="Ideal Dog Role" value={formData.idealDogRole} />
              <ReviewItem
                label="Preferred Energy"
                value={formData.preferredEnergy}
              />
              <ReviewItem
                label="Preferred Confidence"
                value={formData.preferredConfidence}
              />
              <ReviewItem
                label="Preferred Social Style"
                value={formData.preferredSocialStyle}
              />
              <ReviewItem
                label="Preferred Training Style"
                value={formData.preferredTrainingStyle}
              />
              <ReviewItem
                label="Preferred Pickup or Transportation"
                value={formData.pickupPreference}
              />
              <ReviewItem
                label="Preferred Traits"
                value={formData.preferredTraits}
              />
              <ReviewItem label="Crate Train" value={formData.crateTrain} />
              <ReviewItem
                label="Maintain Structure"
                value={formData.maintainStructure}
              />
              <ReviewItem
                label="Open to Training"
                value={formData.openToTraining}
              />
              <ReviewItem
                label="Prepared for Ongoing Costs"
                value={formData.preparedForCosts}
              />
              <ReviewItem label="Final Notes" value={formData.finalNotes} />
            </div>

            <div className="rounded-2xl border border-neutral-800 bg-neutral-900/55 p-5">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-300">
                Verification
              </p>
              {siteKey ? (
                <div className="mt-4" id="turnstile-container" />
              ) : (
                <p className="mt-4 text-sm text-amber-300">
                  Captcha is not configured for this deployment yet.
                </p>
              )}
            </div>
          </section>
        ) : null}

        <div className="mt-10 flex flex-col gap-3 border-t border-neutral-800 pt-6 sm:flex-row sm:justify-between">
          <button
            type="button"
            onClick={goPrevious}
            disabled={step === 0}
            className="action-secondary disabled:cursor-not-allowed disabled:opacity-50"
          >
            Previous
          </button>

          {step < steps.length - 1 ? (
            <button
              type="button"
              onClick={goNext}
              disabled={!isCurrentStepValid()}
              className="action-primary disabled:cursor-not-allowed disabled:opacity-60"
            >
              Continue
            </button>
          ) : (
            <button
              type="submit"
              disabled={submitting || (!!siteKey && !turnstileToken)}
              className="action-primary disabled:cursor-not-allowed disabled:opacity-60"
            >
              {submitting ? "Submitting..." : "Submit Puppy Application"}
            </button>
          )}
        </div>
      </form>
    </>
  );
}
