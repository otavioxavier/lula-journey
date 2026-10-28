import { useEffect } from "react";
import { cn } from "~/lib/utils";

export type ToastType = "success" | "error" | "info";

type ToastProps = {
  type: ToastType;
  message: string;
  onClose: () => void;
  durationMs?: number;
};

const styles: Record<ToastType, string> = {
  success: "poster-btn--blue !min-h-0 !cursor-default",
  error: "poster-btn--red !min-h-0 !cursor-default",
  info: "poster-btn--paper !min-h-0 border-[3px] border-[var(--poster-ink)] !cursor-default",
};

const labels: Record<ToastType, string> = {
  success: "Ok",
  error: "Ops",
  info: "Info",
};

export function Toast({
  type,
  message,
  onClose,
  durationMs = 4000,
}: ToastProps) {
  useEffect(() => {
    const timer = window.setTimeout(onClose, durationMs);
    return () => window.clearTimeout(timer);
  }, [durationMs, onClose]);

  return (
    <div
      className="pointer-events-none fixed inset-x-0 bottom-4 z-50 flex justify-center px-4 sm:bottom-6"
      aria-live="polite"
    >
      <div
        role="status"
        className={cn(
          "poster-btn pointer-events-auto max-w-md flex-col items-stretch gap-2 !px-4 !py-3 text-left",
          styles[type],
        )}
      >
        <div className="flex items-start justify-between gap-3">
          <span className="text-xs font-black uppercase">{labels[type]}</span>
          <button
            type="button"
            onClick={onClose}
            className="bg-transparent px-1 font-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
            aria-label="Fechar notificação"
          >
            ×
          </button>
        </div>
        <p className="m-0 text-sm font-medium normal-case not-italic">{message}</p>
      </div>
    </div>
  );
}
