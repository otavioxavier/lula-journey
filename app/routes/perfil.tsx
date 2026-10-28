import type { Route } from "./+types/perfil";
import { Tabs } from "~/components/ui/Tabs";
import { BlurFade } from "~/components/magicui/blur-fade";
import { perfilTabs } from "~/data/perfil-tabs";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Trajetória de Lula — Perfil" },
    {
      name: "description",
      content: "Biografia, mandatos, programas sociais e curiosidades em abas.",
    },
  ];
}

export default function PerfilPage() {
  return (
    <div className="space-y-8">
      <BlurFade>
        <p className="eyebrow text-[var(--poster-red)]">Retrato</p>
        <h1 className="poster-display-title mt-3 text-[length:var(--poster-heading)]">
          Quem é <span className="text-[var(--poster-red)] italic">Lula</span>
        </h1>
        <p className="mt-4 max-w-prose">
          Quatro lentes sobre a mesma trajetória: origem, governo, políticas e
          curiosidades.
        </p>
      </BlurFade>
      <Tabs tabs={perfilTabs} defaultTabId="biografia" />
    </div>
  );
}
