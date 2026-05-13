// src/app/login-options/webmail-login/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { Hero, Prose, Features, Disclaimer } from "@/components/parts";

export const metadata: Metadata = {
  title: "Webmail Login | Ashlar Securities",
  description:
    "Access your Ashlar staff webmail. Secure login for team members at ashlarindia.com email accounts.",
};

export default function WebmailPage() {
  return (
    <main>
      <Hero
        tag="Login Option / Webmail"
        title="Staff webmail"
        highlight="access."
        text="Secure access to your Ashlar staff email account. For team members only — please log in with your official ashlarindia.com email and password."
      />

      <section className="bg-white px-6 py-14 md:py-16">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-2xl font-bold text-[#0A1F44] md:text-3xl">
            Open webmail
          </h2>
          <p className="mt-3 text-base leading-relaxed text-slate-600">
            Log in with your full company email address and password.
          </p>
          <p className="mt-8">
            <Link
              href="http://mail.ashlarindia.com/"
              className="rounded-full bg-[#1E5EFF] px-7 py-3 text-sm font-semibold text-white"
            >
              Open Webmail →
            </Link>
          </p>
        </div>
      </section>

      <Prose alt>
        <h2>Login tips</h2>
        <ul className="ml-6 list-disc space-y-2">
          <li>Use your full email address as the username — for example, yourname@ashlarindia.com.</li>
          <li>If you have forgotten your password, contact IT Support at itsupport@ashlarindia.com.</li>
          <li>Never share your password with anyone, including colleagues or vendors.</li>
          <li>Always log out properly when working from a shared or public computer.</li>
        </ul>

        <h2>Email security guidelines</h2>
        <ul className="ml-6 list-disc space-y-2">
          <li>Be cautious about emails asking for login credentials or financial details.</li>
          <li>Verify suspicious emails by calling the sender directly before acting on them.</li>
          <li>Report any phishing attempt to IT Support immediately.</li>
          <li>Do not click on unfamiliar links or download attachments from unknown senders.</li>
        </ul>
      </Prose>

      <Features
        heading="Need help with webmail?"
        items={[
          { t: "Forgot password", d: "Email itsupport@ashlarindia.com with your full name and department." },
          { t: "Mailbox full", d: "Archive older emails or request a quota increase from IT." },
          { t: "New email account", d: "HR can raise a request to IT for a new official email ID." },
          { t: "Mobile email setup", d: "IT Support can guide you through phone configuration." },
          { t: "Phishing report", d: "Forward suspicious emails to itsupport@ashlarindia.com." },
          { t: "Other issues", d: "Call IT Support at +91 8860115225 / 9971693407." },
        ]}
      />

      <Disclaimer text="This webmail is for authorised staff use only. All communications may be monitored and recorded for security and compliance purposes. Unauthorised access is prohibited. Ashlar Securities Pvt. Ltd." />
    </main>
  );
}