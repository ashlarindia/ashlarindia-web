"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import { Mail, Zap } from "lucide-react";
import {
  PageHero,
  Section,
  Container,
  Field,
  FormStatus,
  Button,
} from "@/components/ui";

const DEPARTMENTS = [
  { value: "investorcell@ashlarindia.com", label: "Investor Cell" },
  { value: "kyc@ashlarindia.com",          label: "KYC Team" },
  { value: "payouts@ashlarindia.com",      label: "Payouts & Banking" },
  { value: "tech@ashlarindia.com",         label: "Technical Support" },
  { value: "grievance@ashlarindia.com",    label: "Grievance Cell" },
];

interface FormData {
  name: string;
  email: string;
  department: string;
  subject: string;
  message: string;
}

const INITIAL: FormData = {
  name: "",
  email: "",
  department: DEPARTMENTS[0].value,
  subject: "",
  message: "",
};

export default function QuickMailPage() {
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
      const res = await fetch("/api/support/quick-mail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      setStatus(res.ok ? "success" : "error");
      if (res.ok) setData(INITIAL);
    } catch {
      setStatus("error");
    } finally {
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  const formStatusKind: "success" | "error" | null =
    status === "success" ? "success" : status === "error" ? "error" : null;

  return (
    <main>
      <PageHero
        eyebrow="Help & Support"
        title="Quick mail"
        description="Skip the ticket queue — send a direct email to the right department."
      
      />

      <Section>
        <Container>
          <div className="mx-auto max-w-3xl">
            <div className="rounded-xl border border-border bg-surface p-6 sm:p-8">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-50 text-brand-700 ring-1 ring-inset ring-brand-600/10">
                  <Zap size={18} strokeWidth={1.75} />
                </div>
                <div>
                  <h2 className="font-display text-lg font-medium text-ink-900">
                    {"Send a direct email"}
                  </h2>
                  <p className="mt-0.5 text-sm text-ink-600">
                    {"Replies typically arrive within one business day."}
                  </p>
                </div>
              </div>

              <FormStatus
                status={formStatusKind}
                successTitle="Email sent"
                successMessage="The department will reply directly to your registered email."
                errorTitle="Couldn't send"
                errorMessage="Try again or write to investorcell@ashlarindia.com directly."
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
                    label="Your email"
                    name="email"
                    type="email"
                    required
                    value={data.email}
                    onChange={handleChange}
                  />
                </div>

                <label className="block">
                  <span className="mb-1.5 flex items-center gap-1 text-xs font-medium text-ink-600">
                    {"Department"}
                    <span aria-hidden="true" className="text-brand-600">*</span>
                  </span>
                  <select
                    name="department"
                    required
                    value={data.department}
                    onChange={handleChange}
                    className="block w-full rounded-lg border border-border bg-surface px-4 py-3 text-[15px] text-ink-900 transition-[border-color,box-shadow] duration-200 focus:border-brand-600 focus:outline-none focus:ring-4 focus:ring-brand-600/10"
                  >
                    {DEPARTMENTS.map((d) => (
                      <option key={d.value} value={d.value}>
                        {d.label} — {d.value}
                      </option>
                    ))}
                  </select>
                </label>

                <Field
                  label="Subject"
                  name="subject"
                  required
                  value={data.subject}
                  onChange={handleChange}
                />

                <Field
                  label="Message"
                  name="message"
                  required
                  textarea
                  rows={6}
                  maxLength={1500}
                  value={data.message}
                  onChange={handleChange}
                />

                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  fullWidth
                  disabled={status === "loading"}
                >
                  {status === "loading" ? "Sending…" : "Send email"}
                </Button>
              </form>
            </div>

            {/* Quick contact strip */}
            <div className="mt-6 rounded-xl border border-border-subtle bg-surface-subtle p-5">
              <div className="flex items-center gap-3">
                <Mail size={16} className="text-ink-500" />
                <p className="text-sm text-ink-700">
                  {"Prefer to email directly? Reach us at "}
                  <a
                    href="mailto:investorcell@ashlarindia.com"
                    className="font-medium text-brand-700 hover:underline"
                  >
                    {"investorcell@ashlarindia.com"}
                  </a>
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}