"use client";

import { useState, useEffect, useRef, ChangeEvent, FormEvent } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useInView } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  AlertCircle,
  RefreshCw,
  ShieldCheck,
} from "lucide-react";

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
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
};

const MESSAGE_MAX = 600;

/* --------------------------- captcha --------------------------- */
const generateCaptcha = () => {
  const a = Math.floor(Math.random() * 10) + 1;
  const b = Math.floor(Math.random() * 10) + 1;

  const add = Math.random() > 0.5;

  if (add) {
    return {
      question: `${a} + ${b}`,
      answer: a + b,
    };
  }

  const [hi, lo] = a >= b ? [a, b] : [b, a];

  return {
    question: `${hi} − ${lo}`,
    answer: hi - lo,
  };
};

/* ----------------------------- field ------------------------------- */
interface FieldProps {
  label: string;
  name: keyof FormData;
  type?: string;
  required?: boolean;
  value: string;
  placeholder?: string;
  onChange: (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  textarea?: boolean;
  rows?: number;
  maxLength?: number;
}

const Field: React.FC<FieldProps> = ({
  label,
  name,
  type = "text",
  required,
  value,
  placeholder,
  onChange,
  textarea,
  rows = 5,
  maxLength,
}) => {
  const base =
    "block w-full rounded-lg border border-border bg-surface px-4 py-3 text-[15px] text-ink-900 " +
    "placeholder:text-ink-400 transition-[border-color,box-shadow] duration-200 " +
    "focus:outline-none focus:border-brand-600 focus:ring-4 focus:ring-brand-600/10";

  return (
    <label className="block">
      <span className="mb-1.5 flex items-center gap-1 text-xs font-medium text-ink-600">
        {label}
        {required && (
          <span aria-hidden="true" className="text-brand-600">
            *
          </span>
        )}
      </span>

      {textarea ? (
        <textarea
          name={name}
          required={required}
          rows={rows}
          value={value}
          placeholder={placeholder}
          maxLength={maxLength}
          onChange={onChange}
          className={`${base} resize-none`}
        />
      ) : (
        <input
          type={type}
          name={name}
          required={required}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          className={base}
        />
      )}

      {textarea && maxLength && (
        <span className="mt-1 block text-right text-[11px] tabular-nums text-ink-400">
          {value.length} / {maxLength}
        </span>
      )}
    </label>
  );
};

/* --------------------------- info card item ----------------------- */
const InfoItem: React.FC<{
  icon: React.ElementType;
  label: string;
  children: React.ReactNode;
}> = ({ icon: Icon, label, children }) => (
  <div className="flex items-start gap-4">
    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-50 text-brand-700 ring-1 ring-inset ring-brand-600/10">
      <Icon size={18} strokeWidth={1.75} />
    </div>

    <div className="min-w-0">
      <p className="text-[11px] font-medium uppercase tracking-wider text-ink-400">
        {label}
      </p>

      <div className="mt-1 text-sm text-ink-800">{children}</div>
    </div>
  </div>
);

/* ------------------------------ map ------------------------------- */
const LazyMap: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);

  const inView = useInView(ref, {
    once: true,
    margin: "200px",
  });

  return (
    <div
      ref={ref}
      className="relative h-[360px] w-full overflow-hidden rounded-xl border border-border bg-surface-muted"
    >
      {inView ? (
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.061807115718!2d77.314163!3d28.613459!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce4a6c2f4b2f7%3A0x8f8b2c7e8f8b2c7e!2sNoida%2C%20Uttar%20Pradesh%20201301!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{
            border: 0,
            filter: "saturate(0.85) contrast(0.95)",
          }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Ashlar office location, Sector 67 Noida"
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center bg-dot-grid">
          <div className="flex items-center gap-2 rounded-full bg-surface/80 px-4 py-2 text-xs font-medium text-ink-600 backdrop-blur">
            <MapPin size={14} />
            Loading map…
          </div>
        </div>
      )}
    </div>
  );
};

/* ------------------------------ page ------------------------------ */
export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>(INITIAL_FORM);

  const [status, setStatus] =
    useState<SubmitStatus>("idle");

  const [captcha, setCaptcha] = useState({
    question: "0 + 0",
    answer: 0,
  });

  const [captchaInput, setCaptchaInput] =
    useState("");

  const [captchaError, setCaptchaError] =
    useState(false);

  useEffect(() => {
    setCaptcha(generateCaptcha());
  }, []);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const refreshCaptcha = () => {
    setCaptcha(generateCaptcha());
    setCaptchaInput("");
    setCaptchaError(false);
  };

  const handleSubmit = async (
    e: FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    if (parseInt(captchaInput, 10) !== captcha.answer) {
      setCaptchaError(true);
      return;
    }

    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
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
      setTimeout(() => {
        setStatus("idle");
      }, 5000);
    }
  };

  return (
    <main className="bg-surface-subtle">
      {/* Header */}
      {/* Body */}
{/* Body */}
<section className="py-12 sm:py-16">
  <div className="container">
    
    {/* Grid */}
    <div className="grid items-start gap-6 lg:grid-cols-12">
      
      {/* Left Column */}
      <aside className="lg:col-span-4">
        <div className="lg:sticky lg:top-24">
          
          {/* Contact Card */}
          <div className="rounded-xl border border-border bg-surface p-6 shadow-xs">
            <h2 className="font-display text-lg font-medium text-ink-900">
              Reach us directly
            </h2>

            <div className="mt-6 space-y-5">
              
              {/* Phone */}
              <InfoItem icon={Phone} label="Phone">
                <a
                  href="tel:+911206633299"
                  className="font-medium hover:text-brand-700"
                >
                  0120-6633299
                </a>

                <p className="mt-0.5 text-xs text-ink-400">
                  Mon–Sat · 9 AM – 6 PM IST
                </p>
              </InfoItem>

              {/* Email */}
              <InfoItem icon={Mail} label="Email">
                <a
                  href="mailto:investorcell@ashlarindia.com"
                  className="break-all font-medium hover:text-brand-700"
                >
                  investorcell@ashlarindia.com
                </a>

                <p className="mt-0.5 text-xs text-ink-400">
                  Replies within 24 hours
                </p>
              </InfoItem>

              {/* Office */}
              <InfoItem icon={MapPin} label="Office">
                <address className="not-italic">
                  A-38, Sector 67, Noida
                  <br />
                  Uttar Pradesh — 201301
                </address>
              </InfoItem>

              {/* Hours */}
              <InfoItem icon={Clock} label="Hours">
                <>
                  <p>Mon – Fri · 9 AM – 6 PM</p>

                  <p>Saturday · 9 AM – 5 PM</p>

                  <p className="text-ink-400">
                    Sunday · Closed
                  </p>
                </>
              </InfoItem>
            </div>
          </div>
        </div>
      </aside>

      {/* Right Column */}
      <div className="lg:col-span-8">
        
        {/* Form Card */}
        <div className="rounded-xl border border-border bg-surface shadow-sm">
          <div className="p-6 sm:p-8">
            
            <h2 className="font-display text-xl font-medium text-ink-900">
              Send us a message
            </h2>

            <p className="mt-1 text-sm text-ink-600">
              Tell us what you're working on —
              we'll route you to the right person.
            </p>

            <form
              onSubmit={handleSubmit}
              noValidate
              className="mt-6 space-y-5"
            >
              
              {/* FORM FIELDS HERE */}

              {/* Submit */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className={[
                    "group inline-flex h-12 w-full items-center justify-center gap-2 rounded-lg",
                    "bg-brand-600 px-6 text-sm font-medium text-white shadow-brand",
                    "transition-[transform,background-color,box-shadow] duration-300 ease-out",
                    "hover:-translate-y-0.5 hover:bg-brand-700",
                    "active:translate-y-0",
                    "disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 focus-visible:ring-offset-2",
                  ].join(" ")}
                >
                  {status === "loading" ? (
                    <>
                      <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                      Sending…
                    </>
                  ) : (
                    <>
                      <Send
                        size={15}
                        className="transition-transform duration-300 group-hover:translate-x-0.5"
                      />

                      Send message
                    </>
                  )}
                </button>

                <p className="mt-3 text-center text-xs text-ink-400">
                  By submitting you agree to our{" "}
                  <Link
                    href="/privacy-policy"
                    className="font-medium text-ink-600 underline-offset-2 hover:text-brand-700 hover:underline"
                  >
                    Privacy Policy
                  </Link>
                  . We never share your data.
                </p>
              </div>
            </form>
          </div>
        </div>

        {/* SEBI BOX */}
        <div className="mt-6 rounded-xl border border-amber-200/60 bg-amber-50/60 p-5">
          <div className="flex items-center gap-2">
            <ShieldCheck
              size={16}
              className="text-amber-700"
            />

            <p className="text-[11px] font-semibold uppercase tracking-wider text-amber-800">
              SEBI Investor Helpline
            </p>
          </div>

          <p className="mt-3 font-display text-2xl font-medium tracking-tight text-amber-900">
            1800 266 7575
          </p>

          <p className="mt-2 text-xs leading-relaxed text-amber-800/80">
            For grievance escalation, visit the
            SEBI SCORES portal at{" "}
            <a
              href="https://scores.gov.in"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-amber-900 underline-offset-2 hover:underline"
            >
              scores.gov.in
            </a>
          </p>
        </div>

      </div>
    </div>

    {/* Map */}
    <div className="mt-12">
      <div className="mb-4 flex items-end justify-between">
        <div>
          <span className="text-eyebrow uppercase text-ink-400">
            Visit
          </span>

          <h3 className="mt-1 font-display text-lg font-medium text-ink-900">
            Find us in Noida
          </h3>
        </div>

        <a
          href="https://www.google.com/maps/dir/?api=1&destination=A-38+Sector+67+Noida"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-medium text-brand-600 hover:text-brand-700"
        >
          Get directions →
        </a>
      </div>

      <LazyMap />
    </div>
  </div>
</section>
    </main>
  );
}