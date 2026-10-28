import { useMemo, useState } from "react";
import type { Route } from "./+types/trajetoria";
import { PtStar } from "~/components/brand/PtStar";
import { Accordion, type AccordionItem } from "~/components/ui/Accordion";
import { BlurFade } from "~/components/magicui/blur-fade";
import { fases } from "~/data/fases";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Trajetória de Lula — Capítulos" },
    {
      name: "description",
      content: "Acordeão com fases da trajetória de Luiz Inácio Lula da Silva.",
    },
  ];
}

export default function TrajetoriaPage() {
  const [activeId, setActiveId] = useState<string>("eleicao-2026");

  const items: AccordionItem[] = useMemo(
    () =>
      fases.map((fase) => ({
        id: fase.id,
        title: fase.title,
        content: fase.content,
        image: fase.image,
        imageAlt: fase.imageAlt,
      })),
    [],
  );

  const active = fases.find((f) => f.id === activeId) ?? fases[0];

  return (
    <div className="space-y-10">
      <header>
        <p className="eyebrow text-[var(--poster-red)]">Linha do tempo</p>
        <h1 className="poster-display-title mt-3 text-[length:var(--poster-heading)]">
          Capítulos da <span className="text-[var(--poster-red)] italic">vida</span>
        </h1>
        <p className="mt-4 max-w-prose">
          Abra um capítulo por vez. A foto e o ano acompanham o trecho que você
          está lendo.
        </p>
      </header>

      <div className="grid gap-10 lg:grid-cols-[1fr_minmax(280px,0.85fr)] lg:items-start">
        <Accordion
          items={items}
          defaultOpenId="eleicao-2026"
          variant="poster"
          onActiveChange={(id) => {
            if (id) setActiveId(id);
          }}
        />

        <BlurFade key={active.id} className="sticky top-4">
          <div className="relative border-[3px] border-[var(--poster-ink)] bg-white shadow-[-10px_10px_0_var(--poster-blue)]">
            <div className="absolute left-4 top-4 z-10 flex items-center gap-2 bg-[var(--poster-paper)] px-2 py-1">
              <PtStar variant="stamp" className="!h-8 !w-8" rotate={8} />
              <span className="text-4xl font-black italic leading-none text-[var(--poster-red)]">
                {active.year}
              </span>
            </div>
            <img
              src={active.image}
              alt={active.imageAlt}
              className="aspect-[4/5] w-full object-cover"
              loading="lazy"
            />
            <p className="border-t-[3px] border-[var(--poster-ink)] px-4 py-3 text-sm font-medium uppercase">
              {active.title}
            </p>
          </div>
        </BlurFade>
      </div>
    </div>
  );
}
