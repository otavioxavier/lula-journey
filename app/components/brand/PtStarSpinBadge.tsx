import { cn } from "~/lib/utils";
import { STAR_CLIP } from "~/components/brand/PtStar";

type PtStarSpinBadgeProps = {
  className?: string;
  size?: "transition" | "stamp";
};

function StarFace() {
  return (
    <span className="pt-star-spin-shape" style={{ clipPath: STAR_CLIP }}>
      <span className="pt-star-spin-label" aria-hidden>
        PT
      </span>
    </span>
  );
}

export function PtStarSpinBadge({ className, size = "transition" }: PtStarSpinBadgeProps) {
  return (
    <div
      className={cn(
        "pt-star-spin-scene",
        size === "transition" && "pt-star-spin-scene--transition",
        size === "stamp" && "pt-star-spin-scene--stamp",
        className,
      )}
      aria-hidden
    >
      <div className="pt-star-spin-rotator">
        <div className="pt-star-spin-face pt-star-spin-face--front">
          <StarFace />
        </div>
        <div className="pt-star-spin-face pt-star-spin-face--back">
          <StarFace />
        </div>
      </div>
    </div>
  );
}
