import { cn } from "~/lib/utils";

type PaginationProps = {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
  className?: string;
};

function pageNumbers(total: number, current: number): (number | "ellipsis")[] {
  if (total <= 7) {
    return Array.from({ length: total }, (_, i) => i + 1);
  }
  const pages: (number | "ellipsis")[] = [1];
  if (current > 3) pages.push("ellipsis");
  for (
    let p = Math.max(2, current - 1);
    p <= Math.min(total - 1, current + 1);
    p++
  ) {
    pages.push(p);
  }
  if (current < total - 2) pages.push("ellipsis");
  pages.push(total);
  return pages;
}

export function Pagination({
  totalPages,
  currentPage,
  onPageChange,
  className,
}: PaginationProps) {
  if (totalPages <= 1) return null;

  const prevDisabled = currentPage <= 1;
  const nextDisabled = currentPage >= totalPages;

  const pageBtn = (active: boolean) =>
    cn(
      "poster-btn poster-btn--compact min-w-9 !px-2",
      active ? "poster-btn--red" : "poster-btn--paper !border-[3px] !border-[var(--poster-ink)] !shadow-[-3px_3px_0_var(--poster-ink)]",
    );

  return (
    <nav
      className={cn("flex flex-wrap items-center justify-center gap-2", className)}
      aria-label="Paginação"
    >
      <button
        type="button"
        disabled={prevDisabled}
        onClick={() => onPageChange(currentPage - 1)}
        className={cn(pageBtn(false), "disabled:opacity-40")}
      >
        Anterior
      </button>
      <ul className="flex flex-wrap items-center gap-1">
        {pageNumbers(totalPages, currentPage).map((item, index) =>
          item === "ellipsis" ? (
            <li key={`e-${index}`} className="px-2 font-black">
              …
            </li>
          ) : (
            <li key={item}>
              <button
                type="button"
                aria-current={item === currentPage ? "page" : undefined}
                onClick={() => onPageChange(item)}
                className={pageBtn(item === currentPage)}
              >
                {item}
              </button>
            </li>
          ),
        )}
      </ul>
      <button
        type="button"
        disabled={nextDisabled}
        onClick={() => onPageChange(currentPage + 1)}
        className={cn(pageBtn(false), "disabled:opacity-40")}
      >
        Próxima
      </button>
    </nav>
  );
}
