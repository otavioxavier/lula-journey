import { motion, useReducedMotion } from "motion/react";
import { cn } from "~/lib/utils";
import type { ReactNode } from "react";

type BlurFadeProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  inView?: boolean;
  direction?: "up" | "down" | "left" | "right";
};

const offsets = {
  up: { y: 12 },
  down: { y: -12 },
  left: { x: 12 },
  right: { x: -12 },
};

export function BlurFade({
  children,
  className,
  delay = 0,
  duration = 0.45,
  inView = true,
  direction = "up",
}: BlurFadeProps) {
  const reduce = useReducedMotion();
  const offset = offsets[direction];

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={cn(className)}
      initial={{ opacity: 0, filter: "blur(8px)", ...offset }}
      {...(inView
        ? {
            whileInView: { opacity: 1, filter: "blur(0px)", x: 0, y: 0 },
            viewport: { once: true, margin: "-40px" },
          }
        : {
            animate: { opacity: 1, filter: "blur(0px)", x: 0, y: 0 },
          })}
      transition={{ duration, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
