import { Resend } from "resend";
import { inquiryEmailRows, parseTrainingInquiry } from "@/lib/trainingInquiry";

const resend = new Resend(process.env.RESEND_API_KEY);
const MAX_BODY_BYTES = 20_000;
const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 5;
const rateLimitStore = new Map<string, { count: number; resetAt: number }>();

function jsonError(error: string, status: number, headers?: HeadersInit) {
  return Response.json({ success: false, error }, { status, headers });
}

function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;" })[character]!);
}

export async function POST(req: Request) {
  try {
    if (!req.headers.get("content-type")?.toLowerCase().startsWith("application/json")) return jsonError("Content-Type must be application/json.", 415);
    if (Number(req.headers.get("content-length") || "0") > MAX_BODY_BYTES) return jsonError("Inquiry is too large.", 413);

    const clientIp = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || req.headers.get("x-real-ip")?.trim() || "unknown";
    const now = Date.now();
    const current = rateLimitStore.get(clientIp);
    if (!current || current.resetAt <= now) rateLimitStore.set(clientIp, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    else if (current.count >= RATE_LIMIT_MAX_REQUESTS) return jsonError("Too many attempts. Please wait before trying again.", 429, { "Retry-After": String(Math.max(1, Math.ceil((current.resetAt - now) / 1000))) });
    else current.count += 1;

    const rawBody = await req.text();
    if (new TextEncoder().encode(rawBody).byteLength > MAX_BODY_BYTES) return jsonError("Inquiry is too large.", 413);
    let decoded: unknown;
    try { decoded = JSON.parse(rawBody); } catch { return jsonError("Invalid JSON request.", 400); }

    const parsed = parseTrainingInquiry(decoded);
    if (!parsed.success) return jsonError(parsed.error, 400);
    if (parsed.honeypot) return jsonError("Spam detected.", 400);

    const secret = process.env.TURNSTILE_SECRET_KEY?.trim();
    if (!secret) return jsonError("Captcha verification is unavailable. Please try again later.", 503);
    try {
      const verification = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({ secret, response: parsed.token, remoteip: clientIp }),
        signal: AbortSignal.timeout(10_000),
        cache: "no-store",
      });
      const result = await verification.json() as { success?: boolean; hostname?: string; action?: string };
      const expectedHostname = process.env.TURNSTILE_EXPECTED_HOSTNAME?.trim();
      if (!verification.ok || result.success !== true || result.action !== "training_inquiry" || (expectedHostname && result.hostname !== expectedHostname)) {
        return jsonError("Captcha verification failed. Please complete the new captcha and try again.", verification.ok ? 403 : 502);
      }
    } catch {
      return jsonError("Captcha verification is unavailable. Please try again.", 503);
    }

    const fromEmail = process.env.RESEND_FROM_EMAIL?.trim();
    const toEmail = process.env.TRAINING_INQUIRY_TO_EMAIL?.trim() || "jreese@hapticvets.com";
    if (!fromEmail) return jsonError("Inquiry submission is unavailable. Please try again later.", 503);
    const rows = inquiryEmailRows(parsed.data);
    const html = `<h1>New Patriot K9 Training &amp; Boarding Inquiry</h1>${rows.map(([label, value]) => `<p><strong>${escapeHtml(label)}:</strong><br/>${escapeHtml(value || "Not provided").replace(/\r?\n/g, "<br/>")}</p>`).join("")}`;
    const text = rows.map(([label, value]) => `${label}: ${value || "Not provided"}`).join("\n");
    const sent = await resend.emails.send({ from: fromEmail, to: [toEmail], replyTo: parsed.data.email, subject: `New ${parsed.data.service} inquiry from ${parsed.data.name}`, html, text });
    if (sent.error) return jsonError("Failed to send inquiry. Please try again.", 502);
    return Response.json({ success: true });
  } catch {
    return jsonError("Failed to send inquiry.", 500);
  }
}
