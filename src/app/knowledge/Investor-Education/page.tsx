"use client";

import {
  Shield,
  TriangleAlert,
  BadgeCheck,
  Landmark,
} from "lucide-react";

import {
  PageHero,
  Section,
  SectionHeader,
  FeatureCard,
  StaggerGrid,
  StaggerItem,
} from "@/components/ui";

const principles = [
  {
    icon: <Shield size={20} strokeWidth={1.75} />,
    title: "Safe Investing",
    description:
      "Always research investments carefully before investing.",
  },
  {
    icon: <TriangleAlert size={20} strokeWidth={1.75} />,
    title: "Risk Awareness",
    description:
      "Understand volatility and leverage-related risks.",
  },
  {
    icon: <BadgeCheck size={20} strokeWidth={1.75} />,
    title: "Verified Platforms",
    description:
      "Trade only through registered intermediaries.",
  },
  {
    icon: <Landmark size={20} strokeWidth={1.75} />,
    title: "SEBI Guidelines",
    description:
      "Follow investor protection and compliance practices.",
  },
];

export default function InvestorEducationPage() {
  return (
    <main>
      <PageHero
        eyebrow="Investor Awareness"
        title="Investor Education & Awareness"
        description="Learn safe investing practices and understand market risks."
      />

      <Section>
        <SectionHeader
          eyebrow="Investor Protection"
          title="Invest Responsibly"
          description="Key principles every investor should follow."
          className="mb-12"
        />

        <StaggerGrid className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {principles.map((principle) => (
            <StaggerItem
              key={principle.title}
              className="h-full"
            >
              <FeatureCard
                icon={principle.icon}
                title={principle.title}
                description={principle.description}
              />
            </StaggerItem>
          ))}
        </StaggerGrid>
      </Section>
    </main>
  );
}