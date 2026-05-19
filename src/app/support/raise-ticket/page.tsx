"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Ticket, AlertCircle, ListChecks, CheckCircle2, Copy, Check } from "lucide-react";
import Link from "next/link";
import {
  PageHero,
  Section,
  Field,
  FormStatus,
  Button,
} from "@/components/ui";

const CATEGORIES = [
  "Account opening / KYC",
  "Trading platform",
  "Payments / payout",
  "Brokerage / charges",
  "Mutual funds",
  "IPO application",
  "DP / demat",
  "Other",
];

const PRIORITIES = [
  { label: "Low",    description: "General query, no urgency" },
  { label: "Medium", description: "Issue affecting trading workflow" },
  { label: "High",   description: "Active trading blocked or financial impact" },
];

interface FormData {
  name: string;
  email: string;
  phone: string;
  category: string;
  priority: string;
  subject: string;
  details: string;
}

interface FieldError {
  field: string;
  message: string;
}

const INITIAL: FormData = {
  name: "",
  email: "",
  phone: "",
  category: CATEGORIES[0],
  priority: PRIORITIES[1].label,
  subject: "",
  details: "",
};

export default function RaiseTicketPage() {
  const [data, setData] = useState<FormData>(INITIAL);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [ticketId, setTicketId] = useState<string | null>(null);
  const [errorMsg, setErrorMsg] = useState<string>("");
  const [fieldErrors, setFieldErrors] = useState<FieldError[]>([]);
  const [copied, setCopied] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
    // Clear field error when user edits the field
    if (fieldErrors.some((err) => err.field === name)) {
      setFieldErrors((prev) => prev.filter((err) => err.field !== name));
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    setFieldErrors([]);
    setErrorMsg("");

    try {
      const res = await fetch("/api/support/raise-ticket", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (res.ok) {
        setStatus("success");
        setTicketId(result.ticketId);
        setData(INITIAL);
      } else if (res.status === 400 && result.fields) {
        // Validation errors from API
        setFieldErrors(result.fields);
        setStatus("error");
        setErrorMsg("Please fix the issues highlighted below.");
      } else {
        setStatus("error");
        setErrorMsg(result.error ?? "Something went wrong. Please try again.");
      }
    } catch (err) {
      setStatus("error");
      setErrorMsg(
        "Couldn't reach the server. Check your connection or email investorcell@ashlarindia.com directly.",
      );
    }
  };

  const handleCopyTicketId = async () => {
    if (!ticketId) return;
    try {
      await navigator.clipboard.writeText(ticketId);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard not available — silently ignore
    }
  };

  const handleReset = () => {
    setStatus("idle");
    setTicketId(null);
    setErrorMsg("");
    setFieldErrors([]);
    setCopied(false);
  };

  // Get error message for a specific field
  const getFieldError = (fieldName: string) =>
    fieldErrors.find((err) => err.field === fieldName)?.message;

  /* ============ SUCCESS STATE ============ */
  if (status === "success" && ticketId) {
    return (
      <main>
        <PageHero
          eyebrow="Help & Support"
          title="Ticket submitted"
          description="We've received your ticket. Save the ticket ID below — you'll need it to track progress."
         
        />

        <Section>
          <div className="mx-auto max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="rounded-xl border border-success/20 bg-success/5 p-6 sm:p-8"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-success/10 text-success ring-1 ring-inset ring-success/20">
                  <CheckCircle2 size={20} strokeWidth={2} />
                </div>
                <div className="min-w-0 flex-1">
                  <h2 className="font-display text-xl font-medium text-ink-900">
                    {"Your ticket is being processed"}
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-ink-600">
                    {"A confirmation email has been sent. Our team will respond within one business day."}
                  </p>
                </div>
              </div>

              {/* Ticket ID block */}
              <div className="mt-6 rounded-lg border border-border bg-surface p-5">
                <p className="text-[10px] font-semibold uppercase tracking-wider text-ink-500">
                  {"Your ticket ID"}
                </p>
                <div className="mt-2 flex items-center justify-between gap-3">
                  <code className="font-mono text-xl font-semibold tabular-nums text-ink-900">
                    {ticketId}
                  </code>
                  <button
                    type="button"
                    onClick={handleCopyTicketId}
                    className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-surface-subtle px-3 py-1.5 text-xs font-medium text-ink-700 transition-colors hover:border-brand-600 hover:text-brand-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 focus-visible:ring-offset-2"
                    aria-label="Copy ticket ID"
                  >
                    {copied ? (
                      <>
                        <Check size={12} aria-hidden="true" />
                        {"Copied"}
                      </>
                    ) : (
                      <>
                        <Copy size={12} aria-hidden="true" />
                        {"Copy"}
                      </>
                    )}
                  </button>
                </div>
              </div>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Button
                  href={`/support/track-ticket?id=${ticketId}`}
                  variant="primary"
                  size="md"
                  withArrow
                >
                  Track this ticket
                </Button>
                <button
                  type="button"
                  onClick={handleReset}
                  className="inline-flex h-10 items-center justify-center rounded-lg border border-border bg-surface px-5 text-sm font-medium text-ink-800 transition-colors hover:border-border-strong"
                >
                  {"Submit another ticket"}
                </button>
              </div>
            </motion.div>

            {/* What's next */}
            <div className="mt-8 rounded-xl border border-border bg-surface p-6">
              <h3 className="font-display text-base font-medium text-ink-900">
                {"What happens next"}
              </h3>
              <ol className="mt-4 space-y-3 text-sm text-ink-600">
                <li className="flex gap-3">
                  <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-surface-subtle font-mono text-[10px] font-medium text-ink-500 ring-1 ring-inset ring-border-subtle">
                    01
                  </span>
                  <span>{"Confirmation email arrives within 5 minutes."}</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-surface-subtle font-mono text-[10px] font-medium text-ink-500 ring-1 ring-inset ring-border-subtle">
                    02
                  </span>
                  <span>{"First substantive response within 1 business day."}</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-surface-subtle font-mono text-[10px] font-medium text-ink-500 ring-1 ring-inset ring-border-subtle">
                    03
                  </span>
                  <span>
                    {"Track progress anytime at "}
                    <Link
                      href="/support/track-ticket"
                      className="font-medium text-brand-700 hover:underline"
                    >
                      {"track ticket"}
                    </Link>
                    {"."}
                  </span>
                </li>
              </ol>
            </div>
          </div>
        </Section>
      </main>
    );
  }

  /* ============ FORM STATE ============ */
  return (
    <main>
      <PageHero
        eyebrow="Help & Support"
        title="Raise a support ticket"
        description="Submit a detailed query. Tickets are tracked, time-bound, and routed to the right specialist team."
       
      />

      <Section>
        <div className="grid gap-6 lg:grid-cols-12">
          {/* Sidebar */}
          <aside className="lg:col-span-4">
            <div className="space-y-4 lg:sticky lg:top-24">
              <div className="rounded-xl border border-border bg-surface p-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-50 text-brand-700 ring-1 ring-inset ring-brand-600/10">
                    <ListChecks size={18} strokeWidth={1.75} />
                  </div>
                  <h2 className="font-display text-base font-medium text-ink-900">
                    {"What to expect"}
                  </h2>
                </div>
                <ol className="mt-5 space-y-3 text-sm text-ink-600">
                  <li className="flex gap-3">
                    <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-surface-subtle font-mono text-[10px] font-medium text-ink-500 ring-1 ring-inset ring-border-subtle">
                      01
                    </span>
                    <span>{"You'll get a ticket ID by email within 5 minutes."}</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-surface-subtle font-mono text-[10px] font-medium text-ink-500 ring-1 ring-inset ring-border-subtle">
                      02
                    </span>
                    <span>{"First response within 1 business day."}</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-surface-subtle font-mono text-[10px] font-medium text-ink-500 ring-1 ring-inset ring-border-subtle">
                      03
                    </span>
                    <span>{"Resolution timeline depends on priority and category."}</span>
                  </li>
                </ol>
              </div>

              <div className="rounded-xl border border-amber-200/60 bg-amber-50/50 p-5">
                <div className="flex items-start gap-3">
                  <AlertCircle size={16} className="mt-0.5 text-amber-700" />
                  <div className="min-w-0">
                    <p className="text-[11px] font-semibold uppercase tracking-wider text-amber-800">
                      {"For urgent issues"}
                    </p>
                    <p className="mt-1.5 text-[13px] leading-relaxed text-amber-800/90">
                      {"Call our toll-free helpline for trade-blocking issues."}
                    </p>
                    <a
                      href="tel:+9118001239343"
                      className="mt-2 inline-block font-mono text-sm font-semibold text-amber-900 hover:underline"
                    >
                      {"1800 123 9343"}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </aside>

          {/* Form */}
          <div className="lg:col-span-8">
            <div className="rounded-xl border border-border bg-surface">
              <div className="p-6 sm:p-8">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-50 text-brand-700 ring-1 ring-inset ring-brand-600/10">
                    <Ticket size={18} strokeWidth={1.75} />
                  </div>
                  <h2 className="font-display text-lg font-medium text-ink-900">
                    {"Submit a new ticket"}
                  </h2>
                </div>

                {/* Top-level error message */}
                <AnimatePresence>
                  {status === "error" && errorMsg && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <div className="mt-5 flex items-start gap-3 rounded-lg border border-danger/20 bg-danger/5 p-4">
                        <AlertCircle size={16} className="mt-0.5 shrink-0 text-danger" />
                        <p className="text-sm text-ink-800">{errorMsg}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <form onSubmit={handleSubmit} noValidate className="mt-6 space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <FieldWithError
                      label="Full name"
                      name="name"
                      required
                      value={data.name}
                      onChange={handleChange}
                      error={getFieldError("name")}
                    />
                    <FieldWithError
                      label="Email"
                      name="email"
                      type="email"
                      required
                      value={data.email}
                      onChange={handleChange}
                      error={getFieldError("email")}
                    />
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <FieldWithError
                      label="Phone"
                      name="phone"
                      type="tel"
                      value={data.phone}
                      onChange={handleChange}
                      error={getFieldError("phone")}
                    />
                    <label className="block">
                      <span className="mb-1.5 flex items-center gap-1 text-xs font-medium text-ink-600">
                        {"Category"}
                        <span aria-hidden="true" className="text-brand-600">*</span>
                      </span>
                      <select
                        name="category"
                        required
                        value={data.category}
                        onChange={handleChange}
                        className="block w-full rounded-lg border border-border bg-surface px-4 py-3 text-[15px] text-ink-900 transition-[border-color,box-shadow] duration-200 focus:border-brand-600 focus:outline-none focus:ring-4 focus:ring-brand-600/10"
                      >
                        {CATEGORIES.map((c) => (
                          <option key={c} value={c}>{c}</option>
                        ))}
                      </select>
                    </label>
                  </div>

                  {/* Priority radio cards */}
                  <fieldset>
                    <legend className="mb-1.5 flex items-center gap-1 text-xs font-medium text-ink-600">
                      {"Priority"}
                      <span aria-hidden="true" className="text-brand-600">*</span>
                    </legend>
                    <div className="grid gap-2 sm:grid-cols-3">
                      {PRIORITIES.map((p) => (
                        <label
                          key={p.label}
                          className={`cursor-pointer rounded-lg border p-3 transition-colors ${
                            data.priority === p.label
                              ? "border-brand-600 bg-brand-50"
                              : "border-border bg-surface hover:border-border-strong"
                          }`}
                        >
                          <input
                            type="radio"
                            name="priority"
                            value={p.label}
                            checked={data.priority === p.label}
                            onChange={handleChange}
                            className="sr-only"
                          />
                          <p className="text-sm font-medium text-ink-900">{p.label}</p>
                          <p className="mt-0.5 text-[11px] leading-snug text-ink-500">
                            {p.description}
                          </p>
                        </label>
                      ))}
                    </div>
                  </fieldset>

                  <FieldWithError
                    label="Subject"
                    name="subject"
                    required
                    value={data.subject}
                    onChange={handleChange}
                    error={getFieldError("subject")}
                  />

                  <FieldWithError
                    label="Describe your issue"
                    name="details"
                    required
                    textarea
                    rows={5}
                    maxLength={1000}
                    value={data.details}
                    onChange={handleChange}
                    error={getFieldError("details")}
                  />

                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    fullWidth
                    disabled={status === "loading"}
                  >
                    {status === "loading" ? (
                      <>
                        <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                        {"Submitting…"}
                      </>
                    ) : (
                      "Submit ticket"
                    )}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
}

/* ============ Field wrapper with inline error display ============ */
function FieldWithError(props: React.ComponentProps<typeof Field> & { error?: string }) {
  const { error, ...fieldProps } = props;
  return (
    <div>
      <Field {...fieldProps} />
      <AnimatePresence>
        {error && (
          <motion.p
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="mt-1.5 text-xs text-danger"
          >
            {error}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}