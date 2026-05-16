"use client";

import { useState, useEffect, useRef, ChangeEvent, FormEvent } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useInView } from "framer-motion";
import {
  Phone, Mail, MapPin, Clock, Send, RefreshCw, ShieldCheck,
} from "lucide-react";
import {
  Section,
  Field,
  FormStatus,
  Button,
} from "@/components/ui";

/* ------------------------------ types ------------------------------ */
interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

type SubmitStatus = "idle" | "loading" | "success" | "error";

const INITIAL_FORM: FormData = {
  name: "", email: "", phone: "", subject: "", message: "",
};

const MESSAGE_MAX = 600;

/* --------------------------- captcha --------------------------- */
const generateCaptcha = () => {
  const a = Math.floor(Math.random() * 10) + 1;
  const b = Math.floor(Math.random() * 10) + 1;
  const add = Math.random() > 0.5;
  if (add) return { question: `${a} + ${b}`, answer: a + b };
  const [hi, lo] = a >= b ? [a, b] : [b, a];
  return { question: `${hi} − ${lo}`, answer: hi - lo };
};

/* --------------------------- info item ----------------------- */
const InfoItem: React.FC<{
  icon: React.ElementType;
  label: string;
  children: React.ReactNode;
}> = ({ icon: Icon, label, children }) => (
  <div className="flex items-start gap-3">
    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-brand-50 text-brand-700 ring-1 ring-inset ring-brand-600/10">
      <Icon size={14} strokeWidth={1.75} />
    </div>
    <div className="min-w-0">
      <p className="text-[10px] font-medium uppercase tracking-wider text-ink-400">
        {label}
      </p>
      <div className="mt-0.5 text-[13px] text-ink-800">{children}</div>
    </div>
  </div>
);

/* ------------------------------ map ------------------------------- */
const LazyMap: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "200px" });

  return (
    <div
      ref={ref}
      className="relative h-[240px] w-full overflow-hidden rounded-xl border border-border bg-surface-muted"
    >
      {inView ? (
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.061807115718!2d77.314163!3d28.613459!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce4a6c2f4b2f7%3A0x8f8b2c7e8f8b2c7e!2sNoida%2C%20Uttar%20Pradesh%20201301!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0, filter: "saturate(0.85) contrast(0.95)" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Ashlar office location, Sector 67 Noida"
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center bg-dot-grid">
          <div className="flex items-center gap-2 rounded-full bg-surface/80 px-3 py-1.5 text-xs font-medium text-ink-600 backdrop-blur">
            <MapPin size={12} />
            {"Loading map…"}
          </div>
        </div>
      )}
    </div>
  );
};

/* ------------------------------ page ------------------------------ */
export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>(INITIAL_FORM);
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [captcha, setCaptcha] = useState({ question: "0 + 0", answer: 0 });
  const [captchaInput, setCaptchaInput] = useState("");
  const [captchaError, setCaptchaError] = useState(false);

  useEffect(() => {
    setCaptcha(generateCaptcha());
  }, []);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const refreshCaptcha = () => {
    setCaptcha(generateCaptcha());
    setCaptchaInput("");
    setCaptchaError(false);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (parseInt(captchaInput, 10) !== captcha.answer) {
      setCaptchaError(true);
      return;
    }
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setStatus("success");
        setFormData(INITIAL_FORM);
        setCaptchaInput("");
        setCaptcha(generateCaptcha());
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    } finally {
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  const formStatusKind: "success" | "error" | null =
    status === "success" ? "success" : status === "error" ? "error" : null;

  return (
    <main className="bg-surface-subtle">
      <Section tone="transparent" className="py-8 sm:py-10">
        <div className="mx-auto max-w-5xl">
          <div className="grid items-start gap-5 lg:grid-cols-12">

            {/* ============ LEFT: contact info + SEBI ============ */}
            <aside className="lg:col-span-4">
              <div className="space-y-3 lg:sticky lg:top-24">

                {/* Contact info card */}
                <div className="rounded-xl border border-border bg-surface p-5">
                  <h2 className="font-display text-base font-medium text-ink-900">
                    {"Reach us directly"}
                  </h2>

                  <div className="mt-4 space-y-3.5">
                    <InfoItem icon={Phone} label="Phone">
                      <a
                        href="tel:+911206633299"
                        className="font-medium hover:text-brand-700"
                      >
                        {"0120-6633299"}
                      </a>
                    </InfoItem>

                    <InfoItem icon={Mail} label="Email">
                      <a
                        href="mailto:investorcell@ashlarindia.com"
                        className="break-all font-medium hover:text-brand-700"
                      >
                        {"investorcell@ashlarindia.com"}
                      </a>
                    </InfoItem>

                    <InfoItem icon={MapPin} label="Office">
                      <address className="not-italic leading-snug">
                        {"A-38, Sector 67"}
                        <br />
                        {"Noida — 201301"}
                      </address>
                    </InfoItem>

                    <InfoItem icon={Clock} label="Hours">
                      <p className="leading-snug">
                        {"Mon–Sat · 9 AM – 6 PM"}
                      </p>
                    </InfoItem>
                  </div>
                </div>

                {/* SEBI helpline — compact */}
                <div className="rounded-xl border border-amber-200/60 bg-amber-50/50 px-4 py-3">
                  <div className="flex items-start gap-2.5">
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-amber-100 text-amber-700">
                      <ShieldCheck size={12} strokeWidth={1.75} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-[10px] font-semibold uppercase tracking-wider text-amber-800">
                        {"SEBI Helpline"}
                      </p>
                      <a
                        href="tel:+9118002667575"
                        className="mt-0.5 block font-mono text-[13px] font-semibold tabular-nums text-amber-900 hover:underline"
                      >
                        {"1800 266 7575"}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </aside>

            {/* ============ RIGHT: form ============ */}
            <div className="lg:col-span-8">
              <div className="rounded-xl border border-border bg-surface">
                <div className="p-5 sm:p-6">
                  <h2 className="font-display text-lg font-medium text-ink-900">
                    {"Send us a message"}
                  </h2>
                  <p className="mt-1 text-xs text-ink-600">
                    {"We'll get back to you within one business day."}
                  </p>

                  <FormStatus
                    status={formStatusKind}
                    successTitle="Message sent"
                    successMessage="Our team will get back to you within one business day."
                    errorTitle="Something went wrong"
                    errorMessage="Please try again or email us directly."
                  />

                  <form onSubmit={handleSubmit} noValidate className="mt-5 space-y-4">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <Field
                        label="Full name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                      />
                      <Field
                        label="Email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                      <Field
                        label="Phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                      <Field
                        label="Subject"
                        name="subject"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                      />
                    </div>

                    <Field
                      label="Message"
                      name="message"
                      required
                      textarea
                      rows={4}
                      maxLength={MESSAGE_MAX}
                      value={formData.message}
                      onChange={handleChange}
                    />

                    {/* Captcha */}
                    <div>
                      <span className="mb-1.5 flex items-center gap-1 text-xs font-medium text-ink-600">
                        {"Quick check"}
                        <span aria-hidden="true" className="text-brand-600">*</span>
                      </span>
                      <div className="flex items-center gap-2">
                        <div className="flex h-10 items-center rounded-lg border border-border bg-surface-muted px-3 font-display text-sm font-medium tabular-nums tracking-wide text-ink-800 select-none">
                          {captcha.question} = ?
                        </div>
                        <input
                          type="text"
                          inputMode="numeric"
                          value={captchaInput}
                          onChange={(e) => {
                            setCaptchaInput(e.target.value);
                            if (captchaError) setCaptchaError(false);
                          }}
                          aria-label="Captcha answer"
                          placeholder="?"
                          className="h-10 w-16 rounded-lg border border-border bg-surface px-2 text-center text-sm font-medium tabular-nums text-ink-900 transition-[border-color,box-shadow] duration-200 focus:border-brand-600 focus:outline-none focus:ring-4 focus:ring-brand-600/10"
                          disabled={status === "loading"}
                        />
                        <button
                          type="button"
                          onClick={refreshCaptcha}
                          aria-label="Refresh captcha"
                          className="group flex h-10 w-10 items-center justify-center rounded-lg border border-border text-ink-600 transition-colors hover:border-brand-600 hover:text-brand-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 focus-visible:ring-offset-2"
                        >
                          <RefreshCw
                            size={14}
                            className="transition-transform duration-500 ease-out-expo group-hover:-rotate-180"
                          />
                        </button>
                      </div>
                      <AnimatePresence>
                        {captchaError && (
                          <motion.p
                            initial={{ opacity: 0, y: -4 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="mt-1.5 text-xs text-danger"
                          >
                            {"That's not quite right — try again."}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </div>

                    {/* Submit */}
                    <div className="pt-1">
                      <Button
                        type="submit"
                        variant="primary"
                        size="md"
                        fullWidth
                        disabled={status === "loading"}
                      >
                        {status === "loading" ? (
                          <>
                            <span className="h-3.5 w-3.5 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                            {"Sending…"}
                          </>
                        ) : (
                          <>
                            <Send
                              size={14}
                              className="transition-transform duration-300 group-hover:translate-x-0.5"
                            />
                            {"Send message"}
                          </>
                        )}
                      </Button>

                      <p className="mt-2.5 text-center text-[11px] text-ink-400">
                        {"By submitting you agree to our "}
                        <Link
                          href="/privacy-policy"
                          className="font-medium text-ink-600 underline-offset-2 hover:text-brand-700 hover:underline"
                        >
                          {"Privacy Policy"}
                        </Link>
                        {"."}
                      </p>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>

          {/* ============ Map (compact) ============ */}
          <div className="mt-8">
            <div className="mb-3 flex items-end justify-between">
              <h3 className="font-display text-sm font-medium text-ink-900">
                {"Find us in Noida"}
              </h3>
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=A-38+Sector+67+Noida"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-medium text-brand-600 hover:text-brand-700"
              >
                {"Get directions →"}
              </a>
            </div>
            <LazyMap />
          </div>
        </div>
      </Section>
    </main>
  );
}