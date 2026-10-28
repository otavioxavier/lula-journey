import { useMemo, useState } from "react";
import type { Route } from "./+types/fatos";
import { DropdownMenu } from "~/components/ui/DropdownMenu";
import { Pagination } from "~/components/ui/Pagination";
import { SpotlightCard } from "~/components/reactbits/spotlight-card";
import { useToast } from "~/components/toast-context";
import {
  FACTS_PER_PAGE,
  fatos,
  periodLabels,
  themeLabels,
  type PeriodFilter,
  type ThemeFilter,
} from "~/data/fatos";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Trajetória de Lula — Fatos históricos" },
    {
      name: "description",
      content: "Cards de fatos com filtro, paginação e favoritos.",
    },
  ];
}

export default function FatosPage() {
  const { showToast } = useToast();
  const [period, setPeriod] = useState<PeriodFilter>("todos");
  const [theme, setTheme] = useState<ThemeFilter>("todos");
  const [page, setPage] = useState(1);
  const [favorites, setFavorites] = useState<Set<string>>(() => new Set());

  const filtered = useMemo(() => {
    return fatos.filter((fato) => {
      const periodOk = period === "todos" || fato.period === period;
      const themeOk = theme === "todos" || fato.theme === theme;
      return periodOk && themeOk;
    });
  }, [period, theme]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / FACTS_PER_PAGE));
  const safePage = Math.min(page, totalPages);
  const sliceStart = (safePage - 1) * FACTS_PER_PAGE;
  const pageItems = filtered.slice(sliceStart, sliceStart + FACTS_PER_PAGE);

  const setPeriodAndReset = (value: PeriodFilter) => {
    setPeriod(value);
    setPage(1);
  };

  const setThemeAndReset = (value: ThemeFilter) => {
    setTheme(value);
    setPage(1);
  };

  const toggleFavorite = (id: string, title: string) => {
    setFavorites((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
        showToast("info", `"${title}" removido dos favoritos.`);
      } else {
        next.add(id);
        showToast("success", `Fato favoritado: ${title}`);
      }
      return next;
    });
  };

  return (
    <div className="space-y-8">
      <header>
        <p className="eyebrow text-[var(--poster-red)]">Arquivo vivo</p>
        <h1 className="poster-display-title mt-3 text-[length:var(--poster-heading)]">
          Fatos que <span className="text-[var(--poster-red)] italic">marcaram</span>
        </h1>
        <p className="mt-4 max-w-prose">
          Filtre por década ou tema. Salve os favoritos — cinco histórias por
          página.
        </p>
      </header>

      <div className="flex flex-wrap gap-3">
        <DropdownMenu
          label={`Período: ${periodLabels[period]}`}
          options={(Object.keys(periodLabels) as PeriodFilter[]).map((key) => ({
            id: key,
            label: periodLabels[key],
            onSelect: () => setPeriodAndReset(key),
          }))}
        />
        <DropdownMenu
          label={`Tema: ${themeLabels[theme]}`}
          options={(Object.keys(themeLabels) as ThemeFilter[]).map((key) => ({
            id: key,
            label: themeLabels[key],
            onSelect: () => setThemeAndReset(key),
          }))}
        />
      </div>

      {filtered.length === 0 ? (
        <p role="status" className="rounded-xl bg-white p-6 text-center text-[var(--color-texto-muted)]">
          Nenhum fato encontrado para os filtros selecionados.
        </p>
      ) : (
        <>
          <ul className="grid gap-4 sm:grid-cols-2">
            {pageItems.map((fato) => (
              <li key={fato.id}>
                <SpotlightCard className="h-full">
                  <img
                    src={fato.image}
                    alt={fato.imageAlt}
                    className="aspect-video w-full object-cover"
                    loading="lazy"
                  />
                  <div className="space-y-2 p-4">
                    <div className="flex items-start justify-between gap-2">
                      <p className="text-sm font-black italic uppercase text-[var(--poster-red)]">
                        {fato.year} · {themeLabels[fato.theme]}
                      </p>
                      <button
                        type="button"
                        onClick={() => toggleFavorite(fato.id, fato.title)}
                        className="text-lg leading-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-brasil-azul)]"
                        aria-pressed={favorites.has(fato.id)}
                        aria-label={
                          favorites.has(fato.id)
                            ? `Remover ${fato.title} dos favoritos`
                            : `Favoritar ${fato.title}`
                        }
                      >
                        {favorites.has(fato.id) ? "★" : "☆"}
                      </button>
                    </div>
                    <h2 className="text-lg font-black uppercase leading-tight">
                      {fato.title}
                    </h2>
                    <p className="text-sm leading-snug">{fato.summary}</p>
                  </div>
                </SpotlightCard>
              </li>
            ))}
          </ul>

          <Pagination
            totalPages={totalPages}
            currentPage={safePage}
            onPageChange={setPage}
          />
        </>
      )}
    </div>
  );
}
