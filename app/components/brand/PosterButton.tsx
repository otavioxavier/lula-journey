import { Link, type LinkProps } from "react-router";
import { cn } from "~/lib/utils";
import type { ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "red" | "blue" | "paper";

const variantClass: Record<Variant, string> = {
  red: "poster-btn poster-btn--red",
  blue: "poster-btn poster-btn--blue",
  paper: "poster-btn poster-btn--paper",
};

type BaseProps = {
  variant?: Variant;
  compact?: boolean;
  children: ReactNode;
  className?: string;
};

type AsButton = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { to?: never };

type AsLink = BaseProps & LinkProps & { to: string };

export function PosterButton(props: AsButton | AsLink) {
  const { variant = "red", compact, children, className, ...rest } = props;
  const classes = cn(variantClass[variant], compact && "poster-btn--compact", className);

  if ("to" in props && props.to) {
    const { to, ...linkRest } = rest as LinkProps;
    return (
      <Link to={to} className={classes} {...linkRest}>
        {children}
      </Link>
    );
  }

  return (
    <button type="button" className={classes} {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}
