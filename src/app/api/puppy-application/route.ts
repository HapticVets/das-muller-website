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

    if (!token || typeof token !== "string") {
      return Response.json(
        { success: false, error: "Captcha token missing." },
        { status: 400 }
      );
    }

    const ipHeader =
      req.headers.get("x-forwarded-for") ||
      req.headers.get("x-real-ip") ||
      "";
    const remoteip = ipHeader.split(",")[0].trim();

    const verifyFormData = new FormData();
    verifyFormData.append("secret", process.env.TURNSTILE_SECRET_KEY || "");
    verifyFormData.append("response", token);

    if (remoteip) {
      verifyFormData.append("remoteip", remoteip);
    }

    const turnstileRes = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      {
        method: "POST",
        body: verifyFormData,
      }
    );

    const turnstileData = (await turnstileRes.json()) as TurnstileResponse;

    if (!turnstileData.success) {
      console.error("Turnstile verification failed:", turnstileData);
      return Response.json(
        {
          success: false,
          error: "Captcha verification failed.",
          details: turnstileData["error-codes"] || [],
        },
        { status: 403 }
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
      <p><strong>Preferred Traits:</strong><br/>${String(body.preferredTraits || "").replace(/\n/g, "<br/>")}</p>

      <h2>Commitment and Placement Standards</h2>
      <p><strong>Willing to Crate Train:</strong> ${body.crateTrain || ""}</p>
      <p><strong>Maintain Structure and Obedience:</strong> ${body.maintainStructure || ""}</p>
      <p><strong>Open to Training Guidance:</strong> ${body.openToTraining || ""}</p>
      <p><strong>Prepared for Ongoing Costs:</strong> ${body.preparedForCosts || ""}</p>
      <p><strong>Final Notes:</strong><br/>${String(body.finalNotes || "").replace(/\n/g, "<br/>")}</p>
    `;

    const data = await resend.emails.send({
      from: "Patriot K9 Command Applications <applications@updates.hapticvets.com>",
      to: ["jreese@hapticvets.com"],
      replyTo: body.email ? String(body.email) : undefined,
      subject: `New Puppy Application from ${body.name || "Website"}`,
      html,
    });

    return Response.json({ success: true, data });
  } catch (error) {
    console.error("Puppy application send error:", error);
    return Response.json(
      { success: false, error: "Failed to send application." },
      { status: 500 }
    );
  }
}
