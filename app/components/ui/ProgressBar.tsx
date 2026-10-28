import { cn } from "~/lib/utils";

type ProgressBarProps = {
  value: number;
  label?: string;
  showPercent?: boolean;
  className?: string;
};

export function ProgressBar({
  value,
  label,
  showPercent = true,
  className,
}: ProgressBarProps) {
  const clamped = Math.min(100, Math.max(0, value));

  return (
    <div className={cn("w-full", className)}>
      {(label || showPercent) && (
        <div className="mb-2 flex items-center justify-between gap-2 text-sm font-bold uppercase">
          {label ? <span>{label}</span> : <span />}
          {showPercent && (
            <span className="tabular-nums text-[var(--poster-red)]">
              {Math.round(clamped)}%
            </span>
          )}
        </div>
      )}
      <div className="h-4 overflow-hidden border-[3px] border-[var(--poster-ink)] bg-white">
        <div
          role="progressbar"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={clamped}
          aria-label={label ?? "Progresso"}
          className="h-full bg-[var(--poster-red)] transition-[width] duration-500 ease-out"
          style={{ width: `${clamped}%` }}
        />
      </div>
    </div>
  );
}
