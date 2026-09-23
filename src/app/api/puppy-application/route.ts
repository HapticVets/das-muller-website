import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

type TurnstileResponse = {
  success: boolean;
  "error-codes"?: string[];
};

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const token = body.turnstileToken;
    const honeypot = body.companyFax;

    if (honeypot) {
      return Response.json(
        { success: false, error: "Spam detected." },
        { status: 400 }
      );
    }

    if (typeof token !== "string" || !token.trim() || token.length > 2048) {
      console.error("Turnstile verification rejected:", { reason: "invalid-token" });
      return Response.json(
        { success: false, error: "Captcha token missing." },
        { status: 400 }
      );
    }

    const secret = process.env.TURNSTILE_SECRET_KEY?.trim();
    if (!secret) {
      console.error("Turnstile configuration error: TURNSTILE_SECRET_KEY is missing.");
      return Response.json(
        { success: false, error: "Captcha verification is unavailable. Please try again later." },
        { status: 503 }
      );
    }

    try {
      const turnstileRes = await fetch(
        "https://challenges.cloudflare.com/turnstile/v0/siteverify",
        {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: new URLSearchParams({ secret, response: token }),
          signal: AbortSignal.timeout(10000),
          cache: "no-store",
        }
      );
      const turnstileData = (await turnstileRes.json()) as TurnstileResponse;

      if (!turnstileRes.ok || turnstileData?.success !== true) {
        // Log only verification diagnostics, never the request credentials/token.
        console.error("Turnstile Siteverify rejected:", {
          status: turnstileRes.status,
          errorCodes: turnstileData?.["error-codes"] || [],
        });
        return Response.json(
          { success: false, error: "Captcha verification failed. Please complete the new captcha and try again." },
          { status: turnstileRes.ok ? 403 : 502 }
        );
      }
    } catch {
      console.error("Turnstile Siteverify request failed: network, timeout, or invalid JSON response.");
      return Response.json(
        { success: false, error: "Captcha verification is unavailable. Please try again." },
        { status: 503 }
      );
    }

    const html = `
      <h1>New Patriot K9 Command Puppy Application</h1>

      <h2>Basic Information</h2>
      <p><strong>Full Name:</strong> ${body.name || ""}</p>
      <p><strong>Email:</strong> ${body.email || ""}</p>
      <p><strong>Phone:</strong> ${body.phone || ""}</p>
      <p><strong>City / State:</strong> ${body.location || ""}</p>

      <h2>Household Profile</h2>
      <p><strong>Housing:</strong> ${body.housing || ""}</p>
      <p><strong>Fenced Yard:</strong> ${body.fencedYard || ""}</p>
      <p><strong>Household Size:</strong> ${body.householdSize || ""}</p>
      <p><strong>Children Ages:</strong> ${body.childrenAges || ""}</p>
      <p><strong>Other Animals:</strong><br/>${String(body.householdAnimals || "").replace(/\n/g, "<br/>")}</p>
      <p><strong>Household Routine:</strong><br/>${String(body.householdRoutine || "").replace(/\n/g, "<br/>")}</p>

      <h2>Experience Level</h2>
      <p><strong>Owned German Shepherd Before:</strong> ${body.ownedGsdBefore || ""}</p>
      <p><strong>Raised Puppy Before:</strong> ${body.raisedPuppyBefore || ""}</p>
      <p><strong>Structured Training Experience:</strong> ${body.structuredTraining || ""}</p>
      <p><strong>Experience Level:</strong> ${body.experienceLevel || ""}</p>
      <p><strong>Past Experience:</strong><br/>${String(body.experience || "").replace(/\n/g, "<br/>")}</p>

      <h2>Goals for the Dog</h2>
      <p><strong>Primary Goal:</strong> ${body.primaryGoal || ""}</p>
      <p><strong>Home Activity Level:</strong> ${body.homeActivityLevel || ""}</p>
      <p><strong>Hours Alone Per Day:</strong> ${body.aloneHours || ""}</p>
      <p><strong>Daily Exercise Plan:</strong> ${body.dailyExercise || ""}</p>
      <p><strong>Why a German Shepherd:</strong><br/>${String(body.whyGsd || "").replace(/\n/g, "<br/>")}</p>
      <p><strong>Ideal Dog Role:</strong><br/>${String(body.idealDogRole || "").replace(/\n/g, "<br/>")}</p>

      <h2>Temperament Preference</h2>
      <p><strong>Preferred Energy:</strong> ${body.preferredEnergy || ""}</p>
      <p><strong>Preferred Confidence:</strong> ${body.preferredConfidence || ""}</p>
      <p><strong>Preferred Social Style:</strong> ${body.preferredSocialStyle || ""}</p>
      <p><strong>Preferred Training Style:</strong> ${body.preferredTrainingStyle || ""}</p>
      <p><strong>Preferred Pickup or Transportation:</strong> ${body.pickupPreference || ""}</p>
      <p><strong>Preferred Traits:</strong><br/>${String(body.preferredTraits || "").replace(/\n/g, "<br/>")}</p>

      <h2>Commitment and Placement Standards</h2>
      <p><strong>Willing to Crate Train:</strong> ${body.crateTrain || ""}</p>
      <p><strong>Maintain Structure and Obedience:</strong> ${body.maintainStructure || ""}</p>
      <p><strong>Open to Training Guidance:</strong> ${body.openToTraining || ""}</p>
      <p><strong>Prepared for Ongoing Costs:</strong> ${body.preparedForCosts || ""}</p>
      <p><strong>Final Notes:</strong><br/>${String(body.finalNotes || "").replace(/\n/g, "<br/>")}</p>
    `;

    const fromEmail = process.env.RESEND_FROM_EMAIL?.trim();
    if (!fromEmail) {
      console.error("Puppy application email configuration error: RESEND_FROM_EMAIL is missing.");
      return Response.json(
        { success: false, error: "Application submission is unavailable. Please try again later." },
        { status: 503 }
      );
    }

    const data = await resend.emails.send({
      from: fromEmail,
      to: ["jreese@hapticvets.com"],
      replyTo: body.email ? String(body.email) : undefined,
      subject: `New Puppy Application from ${body.name || "Website"}`,
      html,
    });

    if (data.error) {
      console.error("Puppy application email rejected:", { name: data.error.name });
      return Response.json(
        { success: false, error: "Failed to send application. Please try again." },
        { status: 502 }
      );
    }

    return Response.json({ success: true, data });
  } catch (error) {
    console.error("Puppy application send error:", error);
    return Response.json(
      { success: false, error: "Failed to send application." },
      { status: 500 }
    );
  }
}
