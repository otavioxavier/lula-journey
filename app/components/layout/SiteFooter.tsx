import { PtStar } from "~/components/brand/PtStar";
import { imageCredits } from "~/data/image-credits";

export function SiteFooter() {
  return (
    <footer className="mt-[var(--poster-section)] bg-[var(--poster-ink)] px-[var(--poster-gutter)] py-10 text-sm text-white/85">
      <div className="mx-auto flex max-w-[var(--poster-max)] flex-col gap-8">
        <div className="flex flex-wrap items-center gap-4">
          <PtStar variant="stamp" color="white" rotate={10} className="!h-12 !w-12" />
          <p className="m-0 text-lg font-black uppercase italic">Trajetória de Lula</p>
        </div>
        <div>
          <p className="font-black uppercase text-white">Créditos das imagens</p>
          <ul className="mt-3 grid gap-2 sm:grid-cols-2">
            {imageCredits.map((item) => (
              <li key={item.file} className="text-white/75">
                {item.title} — {item.author} ({item.license})
              </li>
            ))}
          </ul>
        </div>
        <p className="m-0 border-t border-white/20 pt-4 text-white/60">
          Trabalho acadêmico — Engenharia de Software, UCS. Conteúdo informativo e
          neutro.
        </p>
      </div>
    </footer>
  );
}
