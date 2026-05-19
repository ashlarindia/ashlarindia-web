"use client";

import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Clock, CheckCircle2, AlertCircle, MessageSquare } from "lucide-react";
import {
  PageHero,
  Section,
  Container,
  Field,
  Button,
  Badge,
} from "@/components/ui";

type TicketStatus = "open" | "in-progress" | "resolved" | "closed";

interface Ticket {
  id: string;
  subject: string;
  category: string;
  priority: "Low" | "Medium" | "High";
  status: TicketStatus;
  createdAt: string;
  updatedAt: string;
  messages: { from: string; text: string; at: string }[];
}

// Demo ticket data — replace with API fetch
const DEMO_TICKETS: Record<string, Ticket> = {
  "ASH-2026-04823": {
    id: "ASH-2026-04823",
    subject: "Unable to add bank account",
    category: "Account opening / KYC",
    priority: "Medium",
    status: "in-progress",
    createdAt: "2026-05-15T10:30:00Z",
    updatedAt: "2026-05-18T14:20:00Z",
    messages: [
      {
        from: "You",
        text: "I'm trying to add a new bank account but the form rejects my IFSC code.",
        at: "2026-05-15T10:30:00Z",
      },
      {
        from: "Ashlar Support",
        text: "Thanks for reaching out. We've verified the IFSC code is valid. The issue may be related to the bank's recent migration. Can you try again in 24 hours?",
        at: "2026-05-16T09:15:00Z",
      },
    ],
  },
};

const statusConfig: Record<TicketStatus, { label: string; tone: "amber" | "brand" | "success" | "ink" }> = {
  open: { label: "Open", tone: "amber" },
  "in-progress": { label: "In progress", tone: "brand" },
  resolved: { label: "Resolved", tone: "success" },
  closed: { label: "Closed", tone: "ink" },
};

const formatDateTime = (iso: string) =>
  new Date(iso).toLocaleString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
  });

export default function TrackTicketPage() {
  const [ticketId, setTicketId] = useState("");
  const [email, setEmail] = useState("");
  const [searched, setSearched] = useState(false);
  const [result, setResult] = useState<Ticket | null>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSearched(true);
    setResult(DEMO_TICKETS[ticketId.toUpperCase().trim()] ?? null);
  };

  return (
    <main>
      <PageHero
        eyebrow="Help & Support"
        title="Track your support ticket"
        description="Enter your ticket ID and registered email to see status, conversation history, and next steps."
       
      />

      <Section>
        <Container>
          <div className="mx-auto max-w-3xl">
            <div className="rounded-xl border border-border bg-surface p-6 sm:p-8">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-50 text-brand-700 ring-1 ring-inset ring-brand-600/10">
                  <Search size={18} strokeWidth={1.75} />
                </div>
                <h2 className="font-display text-lg font-medium text-ink-900">
                  {"Look up a ticket"}
                </h2>
              </div>

              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                <Field
                  label="Ticket ID"
                  name="ticketId"
                  required
                  value={ticketId}
                  placeholder="ASH-2026-XXXXX"
                  onChange={(e) => setTicketId(e.target.value)}
                />
                <Field
                  label="Registered email"
                  name="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Button type="submit" variant="primary" size="md" fullWidth>
                  Find ticket
                </Button>

                <p className="text-center text-xs text-ink-400">
                  {"Tip: try "}
                  <code className="rounded bg-surface-subtle px-1.5 py-0.5 font-mono text-[11px] text-ink-700">
                    {"ASH-2026-04823"}
                  </code>
                  {" for a demo result."}
                </p>
              </form>
            </div>

            {/* Result */}
            <AnimatePresence mode="wait">
              {searched && (
                <motion.div
                  key={result?.id ?? "not-found"}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="mt-6"
                >
                  {result ? (
                    <div className="rounded-xl border border-border bg-surface">
                      <div className="border-b border-border-subtle p-6 sm:p-8">
                        <div className="flex flex-wrap items-start justify-between gap-3">
                          <div>
                            <p className="font-mono text-xs text-ink-500">{result.id}</p>
                            <h3 className="mt-1 font-display text-xl font-medium text-ink-900">
                              {result.subject}
                            </h3>
                            <p className="mt-1 text-sm text-ink-600">{result.category}</p>
                          </div>
                          <Badge tone={statusConfig[result.status].tone} withDot>
                            {statusConfig[result.status].label}
                          </Badge>
                        </div>

                        <div className="mt-4 grid grid-cols-2 gap-4 border-t border-border-subtle pt-4 sm:grid-cols-3">
                          <div>
                            <p className="text-[10px] font-medium uppercase tracking-wider text-ink-400">
                              {"Priority"}
                            </p>
                            <p className="mt-0.5 text-sm font-medium text-ink-800">
                              {result.priority}
                            </p>
                          </div>
                          <div>
                            <p className="text-[10px] font-medium uppercase tracking-wider text-ink-400">
                              {"Created"}
                            </p>
                            <p className="mt-0.5 text-sm font-medium text-ink-800">
                              {formatDateTime(result.createdAt)}
                            </p>
                          </div>
                          <div>
                            <p className="text-[10px] font-medium uppercase tracking-wider text-ink-400">
                              {"Last update"}
                            </p>
                            <p className="mt-0.5 text-sm font-medium text-ink-800">
                              {formatDateTime(result.updatedAt)}
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="p-6 sm:p-8">
                        <h4 className="text-[11px] font-semibold uppercase tracking-wider text-ink-500">
                          {"Conversation"}
                        </h4>
                        <ul className="mt-4 space-y-4">
                          {result.messages.map((msg, idx) => (
                            <li key={idx} className="flex gap-3">
                              <div
                                className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ring-1 ring-inset ${
                                  msg.from === "You"
                                    ? "bg-ink-100 text-ink-800 ring-border"
                                    : "bg-brand-50 text-brand-700 ring-brand-600/10"
                                }`}
                              >
                                <MessageSquare size={14} strokeWidth={1.75} />
                              </div>
                              <div className="min-w-0 flex-1">
                                <div className="flex items-baseline gap-2">
                                  <p className="text-sm font-medium text-ink-900">
                                    {msg.from}
                                  </p>
                                  <p className="text-[11px] text-ink-400">
                                    {formatDateTime(msg.at)}
                                  </p>
                                </div>
                                <p className="mt-1 text-sm leading-relaxed text-ink-600">
                                  {msg.text}
                                </p>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ) : (
                    <div className="rounded-xl border border-border bg-surface p-8 text-center">
                      <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-amber-50 text-amber-700">
                        <AlertCircle size={20} />
                      </div>
                      <h3 className="mt-4 font-display text-lg font-medium text-ink-900">
                        {"Ticket not found"}
                      </h3>
                      <p className="mt-2 text-sm text-ink-600">
                        {"Double-check your ticket ID and email. If the issue persists, contact support directly."}
                      </p>
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </Container>
      </Section>
    </main>
  );
}