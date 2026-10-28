import { useEffect, useId, useRef, useState } from "react";
import { cn } from "~/lib/utils";

export type DropdownOption = {
  id: string;
  label: string;
  onSelect: () => void;
};

type DropdownMenuProps = {
  label: string;
  options: DropdownOption[];
  className?: string;
};

export function DropdownMenu({ label, options, className }: DropdownMenuProps) {
  const menuId = useId();
  const rootRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;

    const onPointerDown = (event: MouseEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <div ref={rootRef} className={cn("relative inline-block text-left", className)}>
      <button
        type="button"
        aria-haspopup="menu"
        aria-expanded={open}
        aria-controls={menuId}
        onClick={() => setOpen((v) => !v)}
        className="poster-btn poster-btn--compact poster-btn--blue !gap-2"
      >
        {label}
        <span aria-hidden className={cn("transition-transform", open && "rotate-180")}>
          ▼
        </span>
      </button>
      {open && (
        <ul
          id={menuId}
          role="menu"
          className="absolute left-0 z-20 mt-2 min-w-[14rem] border-[3px] border-[var(--poster-ink)] bg-white py-1 shadow-[-8px_8px_0_var(--poster-blue)]"
        >
          {options.map((option) => (
            <li key={option.id} role="none">
              <button
                type="button"
                role="menuitem"
                className="block w-full px-4 py-2.5 text-left text-sm font-medium hover:bg-[var(--poster-paper)] focus-visible:bg-[var(--poster-paper)] focus-visible:outline-none"
                onClick={() => {
                  option.onSelect();
                  setOpen(false);
                }}
              >
                {option.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
