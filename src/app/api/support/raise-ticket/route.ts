import { NextRequest, NextResponse } from "next/server";

/* ============================================================
   Types
   ============================================================ */
interface TicketRequest {
  name?: string;
  email?: string;
  phone?: string;
  category?: string;
  priority?: string;
  subject?: string;
  details?: string;
}

interface ValidationError {
  field: keyof TicketRequest;
  message: string;
}

/* ============================================================
   Validation
   ============================================================ */
const VALID_CATEGORIES = [
  "Account opening / KYC",
  "Trading platform",
  "Payments / payout",
  "Brokerage / charges",
  "Mutual funds",
  "IPO application",
  "DP / demat",
  "Other",
];

const VALID_PRIORITIES = ["Low", "Medium", "High"];

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_REGEX = /^[+]?[\d\s-]{10,15}$/;

function validate(body: TicketRequest): ValidationError[] {
  const errors: ValidationError[] = [];

  if (!body.name || body.name.trim().length < 2) {
    errors.push({ field: "name", message: "Name must be at least 2 characters" });
  }

  if (!body.email || !EMAIL_REGEX.test(body.email)) {
    errors.push({ field: "email", message: "Valid email is required" });
  }

  if (body.phone && !PHONE_REGEX.test(body.phone)) {
    errors.push({ field: "phone", message: "Phone format is invalid" });
  }

  if (!body.category || !VALID_CATEGORIES.includes(body.category)) {
    errors.push({ field: "category", message: "Valid category is required" });
  }

  if (!body.priority || !VALID_PRIORITIES.includes(body.priority)) {
    errors.push({ field: "priority", message: "Valid priority is required" });
  }

  if (!body.subject || body.subject.trim().length < 5) {
    errors.push({ field: "subject", message: "Subject must be at least 5 characters" });
  }

  if (!body.details || body.details.trim().length < 20) {
    errors.push({ field: "details", message: "Details must be at least 20 characters" });
  }

  return errors;
}

/* ============================================================
   Ticket ID generation
   ============================================================ */
function generateTicketId(): string {
  const year = new Date().getFullYear();
  const random = Math.floor(10000 + Math.random() * 90000);
  return `ASH-${year}-${random}`;
}

/* ============================================================
   In-memory store (replace with DB in production)
   ============================================================ */
const ticketStore: Map<string, {
  id: string;
  createdAt: string;
  data: TicketRequest;
}> = (globalThis as any).__ticketStore__ ?? new Map();

if (!(globalThis as any).__ticketStore__) {
  (globalThis as any).__ticketStore__ = ticketStore;
}

/* ============================================================
   Email dispatch (stub — wire to your provider)
   ============================================================ */
async function sendEmail(params: {
  ticketId: string;
  body: TicketRequest;
}): Promise<void> {
  // In production, replace with Resend / SendGrid / Postmark / SES
  // Example with fetch (Resend):
  //
  // await fetch("https://api.resend.com/emails", {
  //   method: "POST",
  //   headers: {
  //     "Authorization": `Bearer ${process.env.RESEND_API_KEY}`,
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify({
  //     from: "support@ashlarindia.com",
  //     to: params.body.email!,
  //     subject: `[${params.ticketId}] Your ticket has been received`,
  //     html: renderTicketEmail(params),
  //   }),
  // });

  // For now: log to server console
  console.log("📧 New support ticket:", {
    ticketId: params.ticketId,
    from: params.body.email,
    subject: params.body.subject,
    priority: params.body.priority,
  });
}

/* ============================================================
   POST handler
   ============================================================ */
export async function POST(request: NextRequest) {
  try {
    // 1. Parse body
    let body: TicketRequest;
    try {
      body = await request.json();
    } catch {
      return NextResponse.json(
        { error: "Invalid JSON in request body" },
        { status: 400 },
      );
    }

    // 2. Validate
    const errors = validate(body);
    if (errors.length > 0) {
      return NextResponse.json(
        {
          error: "Validation failed",
          fields: errors,
        },
        { status: 400 },
      );
    }

    // 3. Create ticket
    const ticketId = generateTicketId();
    const createdAt = new Date().toISOString();

    ticketStore.set(ticketId, {
      id: ticketId,
      createdAt,
      data: body,
    });

    // 4. Send confirmation email (fire-and-forget)
    sendEmail({ ticketId, body }).catch((err) => {
      console.error("Email dispatch failed:", err);
      // Don't fail the request — ticket is saved
    });

    // 5. Respond with success
    return NextResponse.json(
      {
        ticketId,
        createdAt,
        message: "Ticket received. You'll get a confirmation email shortly.",
      },
      { status: 201 },
    );
  } catch (err) {
    console.error("Ticket submission error:", err);
    return NextResponse.json(
      { error: "Internal server error. Please try again." },
      { status: 500 },
    );
  }
}

/* ============================================================
   GET — list tickets (dev/admin use; remove or auth-guard in prod)
   ============================================================ */
export async function GET() {
  if (process.env.NODE_ENV === "production") {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  return NextResponse.json({
    count: ticketStore.size,
    tickets: Array.from(ticketStore.values()).map((t) => ({
      id: t.id,
      createdAt: t.createdAt,
      subject: t.data.subject,
      priority: t.data.priority,
    })),
  });
}