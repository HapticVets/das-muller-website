export const inquiryServices = [
  "Boarding only",
  "Board & Train",
  "Private training",
  "Training evaluation",
  "Behavior modification",
  "Puppy training",
  "Not sure",
] as const;

export const contactMethods = ["Text", "Phone call", "Email"] as const;

export type TrainingInquiryData = {
  name: string;
  email: string;
  phone: string;
  cityState: string;
  dogName: string;
  breed: string;
  dogAge: string;
  service: (typeof inquiryServices)[number];
  requestedDates: string;
  goals: string;
  preferredContact: (typeof contactMethods)[number];
};

const limits: Record<keyof TrainingInquiryData, number> = {
  name: 120,
  email: 254,
  phone: 40,
  cityState: 120,
  dogName: 80,
  breed: 120,
  dogAge: 60,
  service: 80,
  requestedDates: 240,
  goals: 2_000,
  preferredContact: 40,
};

function clean(value: unknown, maxLength: number) {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

export function parseTrainingInquiry(value: unknown):
  | { success: true; data: TrainingInquiryData; token: string; honeypot: string }
  | { success: false; error: string } {
  if (!value || typeof value !== "object") return { success: false, error: "Invalid inquiry." };
  const input = value as Record<string, unknown>;
  const data = Object.fromEntries(
    Object.entries(limits).map(([key, maxLength]) => [key, clean(input[key], maxLength)]),
  ) as TrainingInquiryData;
  const token = clean(input.turnstileToken, 4_096);
  const honeypot = clean(input.companyFax, 200);

  if (!data.name || !data.email || !data.phone || !data.cityState || !data.dogName || !data.service || !data.goals || !data.preferredContact) {
    return { success: false, error: "Please complete all required fields." };
  }
  if (!/^\S+@\S+\.\S+$/.test(data.email)) return { success: false, error: "Please enter a valid email address." };
  if (!inquiryServices.includes(data.service)) return { success: false, error: "Please choose a valid service." };
  if (!contactMethods.includes(data.preferredContact)) return { success: false, error: "Please choose a valid contact method." };
  if (!token) return { success: false, error: "Please complete verification before submitting." };
  return { success: true, data, token, honeypot };
}

export const inquiryEmailRows = (data: TrainingInquiryData): Array<[string, string]> => [
  ["Name", data.name],
  ["Email", data.email],
  ["Phone", data.phone],
  ["City / State", data.cityState],
  ["Dog name", data.dogName],
  ["Breed", data.breed],
  ["Dog age", data.dogAge],
  ["Service", data.service],
  ["Requested boarding dates", data.requestedDates],
  ["Goals / behavior concerns", data.goals],
  ["Preferred contact method", data.preferredContact],
];
