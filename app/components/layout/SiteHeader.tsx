import { NavLink } from "react-router";
import { PtStar } from "~/components/brand/PtStar";
import { cn } from "~/lib/utils";

const links = [
  { to: "/", label: "Início", end: true },
  { to: "/trajetoria", label: "Trajetória", end: false },
  { to: "/fatos", label: "Fatos", end: false },
  { to: "/perfil", label: "Perfil", end: false },
  { to: "/quiz", label: "Quiz", end: false },
];

export function SiteHeader() {
  return (
    <header className="relative z-20 mx-auto flex w-full max-w-[var(--poster-max)] min-h-[84px] flex-col items-stretch justify-between gap-3 px-[var(--poster-gutter)] py-3 sm:flex-row sm:items-center">
      <NavLink
        to="/"
        className="inline-flex items-center gap-3 no-underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--poster-red)]"
        aria-label="Trajetória de Lula — início"
      >
        <PtStar variant="stamp" color="red" rotate={-8} className="!h-10 !w-10 sm:!h-12 sm:!w-12" />
        <span className="text-lg font-black uppercase tracking-tight text-[var(--poster-ink)] sm:text-xl">
          Trajetória
        </span>
      </NavLink>
      <nav aria-label="Principal" className="flex flex-wrap gap-2">
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            end={link.end}
            className={({ isActive }) =>
              cn(
                "poster-btn poster-btn--compact",
                isActive ? "poster-btn--red" : "poster-btn--paper",
              )
            }
          >
            {link.label}
          </NavLink>
        ))}
      </nav>
    </header>
  );
}
