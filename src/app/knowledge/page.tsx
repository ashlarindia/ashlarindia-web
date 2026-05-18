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

const iconMap = {
  shield: Shield,
  risk: TriangleAlert,
  verified: BadgeCheck,
  sebi: Landmark,
};

const principles = [
  {
    icon: "shield",
    title: "Safe Investing",
    description:
      "Always research investments carefully before investing.",
  },
  {
    icon: "risk",
    title: "Risk Awareness",
    description:
      "Understand market volatility and leverage-related risks.",
  },
  {
    icon: "verified",
    title: "Verified Platforms",
    description:
      "Trade only through registered and verified intermediaries.",
  },
  {
    icon: "sebi",
    title: "Investor Protection",
    description:
      "Follow SEBI investor guidelines and compliance practices.",
  },
];

export default function InvestorEducationPage() {
  return (
    <main className="bg-[#fafafa]">
      <PageHero
        eyebrow="Investor Awareness"
        title="Investor Education & Awareness"
        description="Learn safe investing practices and understand financial market risks."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Investor Education" },
        ]}
      />

      <Section>
        <SectionHeader
          eyebrow="Investor Protection"
          title="Invest responsibly"
          description="Understand key principles of safe and informed investing."
          className="mb-12"
        />

        <StaggerGrid className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {principles.map((principle) => {
            const Icon =
              iconMap[principle.icon as keyof typeof iconMap];

            return (
              <StaggerItem
                key={principle.title}
                className="h-full"
              >
                <FeatureCard
                  icon={<Icon className="h-7 w-7" />}
                  title={principle.title}
                  description={principle.description}
                />
              </StaggerItem>
            );
          })}
        </StaggerGrid>
      </Section>
    </main>
  );
}