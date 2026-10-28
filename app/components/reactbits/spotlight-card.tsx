import type { ReactNode } from "react";
import { cn } from "~/lib/utils";

type SpotlightCardProps = {
  children: ReactNode;
  className?: string;
};

export function SpotlightCard({ children, className }: SpotlightCardProps) {
  return (
    <div
      className={cn(
        "overflow-hidden border-[3px] border-[var(--poster-ink)] bg-white shadow-[-10px_10px_0_var(--poster-blue)] transition-transform duration-150 hover:translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[-12px_12px_0_var(--poster-blue)]",
        className,
      )}
    >
      {children}
    </div>
  );
}
