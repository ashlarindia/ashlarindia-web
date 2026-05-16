"use client";

import type { FC, ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, AlertCircle } from "lucide-react";
import { cn } from "@/lib/cn";

type StatusKind = "success" | "error" | null;

interface FormStatusProps {
  status: StatusKind;
  successTitle?: string;
  successMessage?: string;
  errorTitle?: string;
  errorMessage?: string;
  className?: string;
}

const FormStatus: FC<FormStatusProps> = ({
  status, successTitle = "Submitted", successMessage,
  errorTitle = "Something went wrong", errorMessage, className,
}) => (
  <AnimatePresence initial={false}>
    {status && (
      <motion.div
        key={status}
        initial={{ opacity: 0, y: -8, height: 0 }}
        animate={{ opacity: 1, y: 0, height: "auto" }}
        exit={{ opacity: 0, y: -4, height: 0 }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        className={cn("overflow-hidden", className)}
      >
        <div className={cn(
          "mt-6 flex items-start gap-3 rounded-lg p-4",
          status === "success" ? "border border-success/20 bg-success/5" : "border border-danger/20 bg-danger/5",
        )}>
          {status === "success" ? (
            <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-success" />
          ) : (
            <AlertCircle size={18} className="mt-0.5 shrink-0 text-danger" />
          )}
          <div>
            <p className={cn(
              "text-sm font-medium",
              status === "success" ? "text-success" : "text-danger",
            )}>
              {status === "success" ? successTitle : errorTitle}
            </p>
            {(status === "success" ? successMessage : errorMessage) && (
              <p className="mt-0.5 text-xs text-ink-600">
                {status === "success" ? successMessage : errorMessage}
              </p>
            )}
          </div>
        </div>
      </motion.div>
    )}
  </AnimatePresence>
);

export default FormStatus;