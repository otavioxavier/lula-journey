import { cn } from "~/lib/utils";

type BorderBeamProps = {
  className?: string;
  size?: number;
  duration?: number;
};

export function BorderBeam({
  className,
  size = 120,
  duration = 6,
}: BorderBeamProps) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden rounded-[inherit]",
        className,
      )}
      aria-hidden
    >
      <div
        className="absolute aspect-square animate-[border-beam-spin_var(--duration)_linear_infinite] bg-[conic-gradient(from_0deg,transparent_0deg,var(--color-brasil-amarelo)_90deg,var(--color-brasil-verde)_180deg,transparent_270deg)] opacity-80"
        style={
          {
            width: size,
            top: "50%",
            left: "50%",
            marginTop: -size / 2,
            marginLeft: -size / 2,
            "--duration": `${duration}s`,
          } as React.CSSProperties
        }
      />
    </div>
  );
}
