import { cn } from "~/lib/utils";

export const STAR_CLIP =
  "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 94%, 50% 72%, 21% 94%, 32% 57%, 2% 35%, 39% 35%)";

type PtStarProps = {
  variant?: "stamp" | "poster";
  className?: string;
  color?: "red" | "white" | "yellow";
  rotate?: number;
  "aria-hidden"?: boolean;
};

const sizes = {
  stamp: "h-14 w-14 sm:h-20 sm:w-20",
  poster: "h-[min(36vw,520px)] w-[min(36vw,520px)]",
};

const colors = {
  red: "bg-[var(--poster-red)]",
  white: "bg-white",
  yellow: "bg-[var(--poster-yellow)]",
};

export function PtStar({
  variant = "stamp",
  className,
  color = "red",
  rotate = 11,
  "aria-hidden": ariaHidden = true,
}: PtStarProps) {
  return (
    <span
      aria-hidden={ariaHidden}
      className={cn("inline-block shrink-0", sizes[variant], colors[color], className)}
      style={{
        clipPath: STAR_CLIP,
        transform: `rotate(${rotate}deg)`,
      }}
    />
  );
}

export function PtStarInline({ className }: { className?: string }) {
  return (
    <span
      aria-hidden
      className={cn(
        "inline-block aspect-square w-[0.34em] translate-y-[-0.38em] rotate-[12deg] bg-[var(--poster-red)] align-baseline",
        className,
      )}
      style={{ clipPath: STAR_CLIP }}
    />
  );
}
