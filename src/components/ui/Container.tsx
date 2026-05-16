import type { FC, ReactNode } from "react";
import { cn } from "@/lib/cn";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  as?: "div" | "section" | "article" | "main";
}

/**
 * Standard responsive container.
 * Replaces: <div className="container">...</div>
 */
const Container: FC<ContainerProps> = ({ children, className, as: Tag = "div" }) => (
  <Tag className={cn("container", className)}>{children}</Tag>
);

export default Container;