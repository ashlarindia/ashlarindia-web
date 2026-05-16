"use client";

import type { FC } from "react";
import Image from "next/image";
import { Mail } from "lucide-react";
import { cn } from "@/lib/cn";

interface PersonCardProps {
  name: string;
  designation: string;
  experience?: string;
  bio: string;
  linkedin?: string;
  email: string;
  /** Real photo path (e.g. "/leadership/BharatBansal.webp"). If omitted, renders typographic monogram. */
  image?: string;
  imageWidth?: number;
  imageHeight?: number;
  /** Card variant: 'photo' shows image on top, 'avatar' shows initials tile in header */
  variant?: "photo" | "avatar";
  className?: string;
}

const initials = (name: string) =>
  name
    .replace(/^(Mr\.|Ms\.|Mrs\.|Dr\.)\s*/, "")
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((n) => n[0])
    .join("");

const LinkedInIcon: FC<{ size?: number }> = ({ size = 14 }) => (
  <svg aria-hidden="true" width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z" />
  </svg>
);

const PersonCard: FC<PersonCardProps> = ({
  name,
  designation,
  experience,
  bio,
  linkedin,
  email,
  image,
  imageWidth = 400,
  imageHeight = 300,
  variant,
  className,
}) => {
  // Auto-detect variant: if image present → photo, else → avatar
  const resolvedVariant = variant ?? (image ? "photo" : "avatar");

  return (
    <article
      className={cn(
        "group relative flex h-full flex-col rounded-xl border border-border bg-surface p-6",
        "transition-[transform,border-color,box-shadow] duration-300 ease-out-expo",
        "hover:-translate-y-0.5 hover:border-border-strong hover:shadow-md",
        className,
      )}
    >
      {/* Photo variant: image on top */}
      {resolvedVariant === "photo" && image && (
        <div className="mb-5 overflow-hidden rounded-xl">
          <Image
            src={image}
            alt={name}
            width={imageWidth}
            height={imageHeight}
            className="h-56 w-full object-cover transition-transform duration-500 ease-out-expo group-hover:scale-[1.02]"
          />
        </div>
      )}

      {/* Header row */}
      {resolvedVariant === "photo" ? (
        // Photo variant: name + experience badge inline, designation below
        <>
          <div className="flex items-center justify-between gap-3">
            <h3 className="font-display text-lg font-medium leading-snug tracking-tight text-ink-900">
              {name}
            </h3>
            {experience && (
              <span className="shrink-0 rounded-full border border-border-subtle bg-surface-subtle px-2.5 py-0.5 text-[11px] font-medium text-ink-600">
                {experience}
              </span>
            )}
          </div>
          <p className="mt-1 text-[11px] font-semibold uppercase tracking-wider text-brand-600">
            {designation}
          </p>
        </>
      ) : (
        // Avatar variant: monogram tile + experience pinned right, name below
        <>
          <div className="flex items-start justify-between">
            <div
              className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-brand-50 to-brand-100 font-display text-lg font-medium text-brand-700 ring-1 ring-inset ring-brand-600/10"
              aria-hidden="true"
            >
              {initials(name)}
            </div>
            {experience && (
              <span className="rounded-full border border-border-subtle bg-surface-subtle px-2.5 py-0.5 text-[11px] font-medium text-ink-600">
                {experience}
              </span>
            )}
          </div>
          <div className="mt-5">
            <h3 className="font-display text-lg font-medium leading-snug tracking-tight text-ink-900">
              {name}
            </h3>
            <p className="mt-1 text-[11px] font-semibold uppercase tracking-wider text-brand-600">
              {designation}
            </p>
          </div>
        </>
      )}

      {/* Bio */}
      <p className="mt-4 flex-1 text-sm leading-relaxed text-ink-600">{bio}</p>

      {/* Contact row */}
      <div className="mt-5 flex items-center gap-2 border-t border-border-subtle pt-4">
        {linkedin && linkedin !== "#" && (
          <a
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${name} on LinkedIn`}
            className="flex h-8 w-8 items-center justify-center rounded-md border border-border-subtle text-ink-400 transition-colors hover:border-brand-600 hover:bg-brand-50 hover:text-brand-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 focus-visible:ring-offset-2"
          >
            <LinkedInIcon />
          </a>
        )}
        <a
          href={`mailto:${email}`}
          aria-label={`Email ${name}`}
          className="flex h-8 w-8 items-center justify-center rounded-md border border-border-subtle text-ink-400 transition-colors hover:border-brand-600 hover:bg-brand-50 hover:text-brand-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 focus-visible:ring-offset-2"
        >
          <Mail size={14} strokeWidth={1.75} />
        </a>
      </div>
    </article>
  );
};

export default PersonCard;