"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import { AlertTriangle, FileWarning, ShieldCheck, ExternalLink } from "lucide-react";
import {
  PageHero,
  Section,
  Field,
  FormStatus,
  Button,
} from "@/components/ui";

interface FormData {
  name: string;
  email: string;
  phone: string;
  clientCode: string;
  complaintType: string;
  description: string;
  amountInvolved: string;
}

const INITIAL: FormData = {
  name: "",
  email: "",
  phone: "",
  clientCode: "",
  complaintType: "Trading issue",
  description: "",
  amountInvolved: "",
};

const TYPES = [
  "Trading issue",
  "Unauthorized transaction",
  "Brokerage discrepancy",
  "Account opening",
  "Funds / payout",
  "Margin / pledge",
  "Other",
];

export default function ComplaintsPage() {
  const [data, setData] = useState<FormData>(INITIAL);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/support/complaints", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      setStatus(res.ok ? "success" : "error");
      if (res.ok) setData(INITIAL);
    } catch {
      setStatus("error");
    } finally {
      setTimeout(() => setStatus("idle"), 8000);
    }
  };

  const formStatusKind: "success" | "error" | null =
    status === "success" ? "success" : status === "error" ? "error" : null;

  return (
    <main>
      <PageHero
        eyebrow="Help & Support"
        title="File a complaint"
        description="Formally register a grievance. Complaints are tracked under SEBI's grievance redressal framework."
       
      />

      <Section>
        <div className="grid gap-6 lg:grid-cols-12">
          {/* Sidebar — escalation flow */}
          <aside className="lg:col-span-4">
            <div className="space-y-4 lg:sticky lg:top-24">
              <div className="rounded-xl border border-border bg-surface p-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-50 text-brand-700 ring-1 ring-inset ring-brand-600/10">
                    <FileWarning size={18} strokeWidth={1.75} />
                  </div>
                  <h2 className="font-display text-base font-medium text-ink-900">
                    {"Escalation flow"}
                  </h2>
                </div>

                <ol className="mt-5 space-y-4 text-sm">
                  <li>
                    <p className="font-medium text-ink-900">{"1. File here"}</p>
                    <p className="mt-0.5 text-xs leading-relaxed text-ink-600">
                      {"Response within 7 days. Resolution within 21 days."}
                    </p>
                  </li>
                  <li>
                    <p className="font-medium text-ink-900">{"2. Escalation Matrix"}</p>
                    <p className="mt-0.5 text-xs leading-relaxed text-ink-600">
                      {"If unresolved, escalate to Compliance Officer or Director."}
                    </p>
                  </li>
                  <li>
                    <p className="font-medium text-ink-900">{"3. SEBI SCORES"}</p>
                    <p className="mt-0.5 text-xs leading-relaxed text-ink-600">
                      {"If still unresolved after 30 days, file on the SEBI SCORES portal."}
                    </p>
                  </li>
                  <li>
                    <p className="font-medium text-ink-900">{"4. Smart ODR"}</p>
                    <p className="mt-0.5 text-xs leading-relaxed text-ink-600">
                      {"Online dispute resolution for monetary claims."}
                    </p>
                  </li>
                </ol>
              </div>

              <div className="rounded-xl border border-amber-200/60 bg-amber-50/50 p-5">
                <div className="flex items-start gap-3">
                  <ShieldCheck size={16} className="mt-0.5 text-amber-700" />
                  <div className="min-w-0">
                    <p className="text-[11px] font-semibold uppercase tracking-wider text-amber-800">
                      {"SEBI SCORES portal"}
                    </p>
                    <a
                      href="https://scores.gov.in"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 inline-flex items-center gap-1.5 text-sm font-medium text-amber-900 hover:underline"
                    >
                      {"scores.gov.in"}
                      <ExternalLink size={11} aria-hidden="true" />
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
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-danger/5 text-danger ring-1 ring-inset ring-danger/15">
                    <AlertTriangle size={18} strokeWidth={1.75} />
                  </div>
                  <div>
                    <h2 className="font-display text-lg font-medium text-ink-900">
                      {"Formal complaint form"}
                    </h2>
                    <p className="mt-0.5 text-sm text-ink-600">
                      {"All complaints are logged with timestamps and assigned to Compliance."}
                    </p>
                  </div>
                </div>

                <FormStatus
                  status={formStatusKind}
                  successTitle="Complaint registered"
                  successMessage="A reference number will be emailed within 1 business day. Compliance team will respond within 7 days."
                  errorTitle="Couldn't register complaint"
                  errorMessage="Please try again or write directly to grievance@ashlarindia.com."
                />

                <form onSubmit={handleSubmit} noValidate className="mt-6 space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field
                      label="Full name"
                      name="name"
                      required
                      value={data.name}
                      onChange={handleChange}
                    />
                    <Field
                      label="Email"
                      name="email"
                      type="email"
                      required
                      value={data.email}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field
                      label="Phone"
                      name="phone"
                      type="tel"
                      required
                      value={data.phone}
                      onChange={handleChange}
                    />
                    <Field
                      label="Client code"
                      name="clientCode"
                      required
                      value={data.clientCode}
                      onChange={handleChange}
                    />
                  </div>

                  <label className="block">
                    <span className="mb-1.5 flex items-center gap-1 text-xs font-medium text-ink-600">
                      {"Type of complaint"}
                      <span aria-hidden="true" className="text-brand-600">*</span>
                    </span>
                    <select
                      name="complaintType"
                      required
                      value={data.complaintType}
                      onChange={handleChange}
                      className="block w-full rounded-lg border border-border bg-surface px-4 py-3 text-[15px] text-ink-900 transition-[border-color,box-shadow] duration-200 focus:border-brand-600 focus:outline-none focus:ring-4 focus:ring-brand-600/10"
                    >
                      {TYPES.map((t) => (
                        <option key={t} value={t}>{t}</option>
                      ))}
                    </select>
                  </label>

                  <Field
                    label="Amount involved (₹) — if applicable"
                    name="amountInvolved"
                    type="text"
                    value={data.amountInvolved}
                    onChange={handleChange}
                  />

                  <Field
                    label="Detailed description"
                    name="description"
                    required
                    textarea
                    rows={6}
                    maxLength={2000}
                    value={data.description}
                    onChange={handleChange}
                  />

                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    fullWidth
                    disabled={status === "loading"}
                  >
                    {status === "loading" ? "Submitting…" : "Submit complaint"}
                  </Button>

                  <p className="text-center text-xs text-ink-400">
                    {"By submitting, you confirm the information is accurate. False complaints may be subject to legal action."}
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
}