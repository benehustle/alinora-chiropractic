import { NextRequest, NextResponse } from "next/server";

/** Required for Cloudflare Pages (@cloudflare/next-on-pages). */
export const runtime = "edge";

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY;
    const to = process.env.CONTACT_TO_EMAIL;
    const from = process.env.RESEND_FROM_EMAIL;

    if (!apiKey || !to || !from) {
      console.error(
        "Contact API: set RESEND_API_KEY, CONTACT_TO_EMAIL, and RESEND_FROM_EMAIL (verified sender in Resend)."
      );
      return NextResponse.json(
        { error: "Email is not configured on the server" },
        { status: 503 }
      );
    }

    const replyEmail = String(email).trim();
    const safeName = escapeHtml(String(name));
    const safeEmail = escapeHtml(replyEmail);
    const safePhone = escapeHtml(String(phone ?? "Not provided"));
    const safeMessage = escapeHtml(String(message)).replace(/\n/g, "<br>");

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: replyEmail,
        subject: `New enquiry from ${name}`,
        html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1A3030; border-bottom: 2px solid #2BA8A8; padding-bottom: 12px;">New Enquiry</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px 0; color: #666; width: 120px;"><strong>Name</strong></td><td style="padding: 8px 0;">${safeName}</td></tr>
            <tr><td style="padding: 8px 0; color: #666;"><strong>Email</strong></td><td style="padding: 8px 0;"><a href="mailto:${encodeURIComponent(replyEmail)}">${safeEmail}</a></td></tr>
            <tr><td style="padding: 8px 0; color: #666;"><strong>Phone</strong></td><td style="padding: 8px 0;">${safePhone}</td></tr>
          </table>
          <div style="margin-top: 20px; padding: 16px; background: #F7F7F5; border-radius: 8px; border-left: 4px solid #2BA8A8;">
            <strong style="color: #1A3030;">Message</strong>
            <p style="margin-top: 8px; color: #333; line-height: 1.6;">${safeMessage}</p>
          </div>
        </div>
      `,
      }),
    });

    if (!res.ok) {
      const errText = await res.text();
      console.error("Resend error:", res.status, errText);
      return NextResponse.json({ error: "Failed to send message" }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact form error:", err);
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 });
  }
}
