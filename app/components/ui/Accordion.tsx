import { useId, useState, type ReactNode } from "react";
import { PtStar } from "~/components/brand/PtStar";
import { cn } from "~/lib/utils";

export type AccordionItem = {
  id: string;
  title: string;
  content: ReactNode;
  image?: string;
  imageAlt?: string;
};

type AccordionProps = {
  items: AccordionItem[];
  defaultOpenId?: string;
  allowMultiple?: boolean;
  className?: string;
  variant?: "default" | "poster";
  onActiveChange?: (id: string | null) => void;
};

export function Accordion({
  items,
  defaultOpenId,
  allowMultiple = false,
  className,
  variant = "default",
  onActiveChange,
}: AccordionProps) {
  const baseId = useId();
  const [openIds, setOpenIds] = useState<Set<string>>(() => {
    if (defaultOpenId) return new Set([defaultOpenId]);
    return new Set();
  });

  const toggle = (id: string) => {
    setOpenIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
        onActiveChange?.(null);
      } else {
        if (!allowMultiple) next.clear();
        next.add(id);
        onActiveChange?.(id);
      }
      return next;
    });
  };

  const isPoster = variant === "poster";

  return (
    <div className={cn("space-y-3", className)}>
      {items.map((item) => {
        const isOpen = openIds.has(item.id);
        const panelId = `${baseId}-panel-${item.id}`;
        const triggerId = `${baseId}-trigger-${item.id}`;

        return (
          <section
            key={item.id}
            className={cn(
              "overflow-hidden bg-white",
              isPoster
                ? cn(
                    "border-[3px] border-[var(--poster-ink)]",
                    isOpen
                      ? "shadow-[-10px_10px_0_var(--poster-red)]"
                      : "shadow-[-8px_8px_0_var(--poster-blue)]",
                  )
                : "rounded-xl border-2 border-black/10 shadow-sm",
            )}
          >
            <h3 className="m-0">
              <button
                id={triggerId}
                type="button"
                className={cn(
                  "flex w-full items-center gap-3 px-4 py-4 text-left font-black uppercase focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--poster-red)]",
                  isOpen && isPoster && "border-b-[3px] border-[var(--poster-red)] bg-[var(--poster-red)] text-white",
                  !isOpen && isPoster && "text-[var(--poster-ink)] hover:bg-white/80",
                )}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => toggle(item.id)}
              >
                {isPoster && (
                  <PtStar
                    variant="stamp"
                    color={isOpen ? "white" : "red"}
                    className="!h-8 !w-8 shrink-0"
                    rotate={isOpen ? 0 : 12}
                  />
                )}
                <span className="flex-1 text-sm sm:text-base">{item.title}</span>
                <span
                  className={cn(
                    "text-lg transition-transform duration-300",
                    isOpen && "rotate-180",
                  )}
                  aria-hidden
                >
                  ▼
                </span>
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={triggerId}
              className="grid transition-[grid-template-rows] duration-300 ease-out"
              style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
            >
              <div className="overflow-hidden">
                <div
                  className={cn(
                    "px-4 py-4 text-sm leading-relaxed",
                    isPoster ? "text-[var(--poster-ink)]" : "text-gray-800",
                  )}
                >
                  {item.content}
                </div>
              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
}
