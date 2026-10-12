import { NextRequest, NextResponse } from "next/server";

const TO_EMAIL = process.env.CONTACT_TO_EMAIL || "agencea2p.guillaume.duc@axa.fr";
// Resend's shared sender only delivers to the Resend account owner's address;
// set CONTACT_FROM_EMAIL to an address on a domain verified in Resend.
const FROM_EMAIL =
  process.env.CONTACT_FROM_EMAIL || "Site Cabinet Guillaume DUC <onboarding@resend.dev>";

const NEEDS: Record<string, string> = {
  "preparer-retraite": "Préparer ma retraite",
  "proteger-famille": "Protéger ma famille ou mes proches",
  "proteger-activite": "Protéger mon activité professionnelle",
  "optimiser-fiscalite": "Optimiser ma fiscalité",
  "transmettre-patrimoine": "Transmettre mon patrimoine",
  "faire-le-point": "Je ne sais pas encore — j'aimerais faire le point",
};

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function field(value: unknown, maxLength: number) {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

export async function POST(request: NextRequest) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("[/api/contact] RESEND_API_KEY is not set.");
    return NextResponse.json(
      { success: false, message: "Le service d'envoi n'est pas configuré." },
      { status: 500 }
    );
  }

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { success: false, message: "Requête invalide." },
      { status: 400 }
    );
  }

  const firstName = field(body.firstName, 100);
  const lastName = field(body.lastName, 100);
  const email = field(body.email, 200);
  const need = NEEDS[field(body.type, 50)] || "Non précisé";
  const message = field(body.message, 5000);

  if (!firstName || !lastName || !EMAIL_REGEX.test(email) || body.consent !== true) {
    return NextResponse.json(
      { success: false, message: "Merci de remplir tous les champs obligatoires." },
      { status: 400 }
    );
  }

  const text = [
    "Nouvelle demande de contact depuis le site internet.",
    "",
    `Nom : ${firstName} ${lastName}`,
    `E-mail : ${email}`,
    `Besoin principal : ${need}`,
    "",
    "Message :",
    message || "(aucun message)",
  ].join("\n");

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: FROM_EMAIL,
      to: [TO_EMAIL],
      reply_to: email,
      subject: `Demande de contact — ${firstName} ${lastName} (${need})`,
      text,
    }),
  });

  if (!response.ok) {
    console.error("[/api/contact] Resend error:", response.status, await response.text());
    return NextResponse.json(
      { success: false, message: "L'envoi a échoué." },
      { status: 502 }
    );
  }

  return NextResponse.json({ success: true, message: "Message envoyé." }, { status: 200 });
}
