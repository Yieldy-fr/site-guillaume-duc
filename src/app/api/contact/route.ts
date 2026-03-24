import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const formData = await request.json();

  // TODO: Replace with real persistence/email integration.
  console.log("[/api/contact] Received contact form data:", formData);

  return NextResponse.json(
    {
      success: true,
      message: "Contact form data received.",
    },
    { status: 200 }
  );
}
