"use client";

import type { FC, ReactNode } from "react";
import { motion, type Variants } from "framer-motion";

interface StaggerGridProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
  initialDelay?: number;
  as?: "div" | "ul" | "ol" | "section";
}

interface StaggerItemProps {
  children: ReactNode;
  className?: string;
  as?: "div" | "li" | "article";
  y?: number;
  duration?: number;
}

const containerVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

/**
 * Parent container — orchestrates stagger across children.
 * Wrap each child in <StaggerItem>.
 */
export const StaggerGrid: FC<StaggerGridProps> = ({
  children, className, staggerDelay = 0.08, initialDelay = 0.05, as: Tag = "div",
}) => {
  const variants: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: staggerDelay, delayChildren: initialDelay } },
  };

  const MotionTag = motion[Tag] as typeof motion.div;

  return (
    <MotionTag
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      className={className}
    >
      {children}
    </MotionTag>
  );
};

export const StaggerItem: FC<StaggerItemProps> = ({
  children, className, as: Tag = "div", y = 14, duration = 0.55,
}) => {
  const variants: Variants = {
    hidden: { opacity: 0, y },
    show: { opacity: 1, y: 0, transition: { duration, ease: [0.16, 1, 0.3, 1] } },
  };

  const MotionTag = motion[Tag] as typeof motion.div;

  return (
    <MotionTag variants={variants} className={className}>
      {children}
    </MotionTag>
  );
};