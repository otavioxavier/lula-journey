import { imagePath } from "~/data/image-credits";
import type { TabItem } from "~/components/ui/Tabs";

export const perfilTabs: TabItem[] = [
  {
    id: "biografia",
    label: "Biografia",
    content: (
      <div className="grid gap-6 md:grid-cols-2 md:items-start">
        <img
          src={imagePath("lula-2003.jpg")}
          alt="Luiz Inácio Lula da Silva, presidente do Brasil em 2003"
          className="w-full border-[3px] border-[var(--poster-ink)] object-cover shadow-[-6px_6px_0_var(--poster-blue)]"
          loading="lazy"
        />
        <div className="space-y-3 text-sm leading-relaxed">
          <p>
            Luiz Inácio Lula da Silva nasceu em Garanhuns, Pernambuco, e
            construiu sua trajetória no ABC paulista como metalúrgico e líder
            sindical. Entrou para a história política brasileira ao fundar o PT
            e, décadas depois, tornar-se presidente da República.
          </p>
          <p>
            Sua biografia combina migração, trabalho manual, greves históricas
            e campanhas eleitorais que ampliaram a representação da classe
            trabalhadora no poder executivo.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: "mandatos",
    label: "Mandatos",
    content: (
      <div className="grid gap-6 md:grid-cols-2">
        <img
          src={imagePath("alemao-2022.jpg")}
          alt="Caminhada de campanha no Complexo do Alemão, Rio de Janeiro, 2022"
          className="w-full border-[3px] border-[var(--poster-ink)] object-cover shadow-[-6px_6px_0_var(--poster-blue)]"
          loading="lazy"
        />
        <img
          src={imagePath("posse-2023-parlatorio.jpg")}
          alt="Discurso de posse no Parlatório, Brasília, 2023"
          className="w-full border-[3px] border-[var(--poster-ink)] object-cover shadow-[-6px_6px_0_var(--poster-blue)]"
          loading="lazy"
        />
        <div className="md:col-span-2 space-y-3 text-sm leading-relaxed">
          <p>
            <strong>2003–2006:</strong> Primeiro mandato, com Fome Zero, Bolsa
            Família e política externa ativa no Mercosul.
          </p>
          <p>
            <strong>2007–2010:</strong> Segundo mandato, continuidade social e
            crescimento econômico até a crise internacional de 2008.
          </p>
          <p>
            <strong>2023–2026:</strong> Terceiro mandato, com recomposição de
            programas sociais, meio ambiente e estabilidade institucional.
          </p>
          <p>
            <strong>2026–:</strong> Reeleito no 2º turno (25/out) com 51,79% dos
            votos válidos, segundo apuração do TSE — quarto mandato presidencial.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: "programas",
    label: "Programas sociais",
    content: (
      <div className="grid gap-6 md:grid-cols-2 md:items-start">
        <img
          src={imagePath("indigenas-posse-2003.jpg")}
          alt="Indígenas da aldeia Pacararu na Esplanada dos Ministérios, 2003"
          className="w-full border-[3px] border-[var(--poster-ink)] object-cover shadow-[-6px_6px_0_var(--poster-blue)]"
          loading="lazy"
        />
        <img
          src={imagePath("esplanada-2003.jpg")}
          alt="Desfile pela Esplanada dos Ministérios na posse de 2003"
          className="w-full border-[3px] border-[var(--poster-ink)] object-cover shadow-[-6px_6px_0_var(--poster-blue)]"
          loading="lazy"
        />
        <div className="md:col-span-2 space-y-3 text-sm leading-relaxed">
          <p>
            Programas como Bolsa Família, Luz para Todos, ProUni e Minha Casa,
            Minha Vida ampliaram acesso a renda, energia, educação superior e
            moradia.
          </p>
          <p>
            As imagens de 2003 lembram que políticas sociais dialogam com a
            diversidade do povo brasileiro presente na capital federal.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: "curiosidades",
    label: "Curiosidades",
    content: (
      <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed">
        <li>
          Perdeu o dedo indicador direito em um acidente de trabalho na
          metalúrgica, fato frequentemente citado em sua narrativa pessoal.
        </li>
        <li>
          Foi o primeiro presidente brasileiro originário da classe operária
          metalúrgica.
        </li>
        <li>
          Usou o apelido &quot;Lula&quot; desde a juventude, abreviação de Luiz.
        </li>
        <li>
          Participou de comícios de 1º de Maio por décadas, mantendo laços com
          centrais sindicais.
        </li>
        <li>
          Retornou ao Planalto em 2023, tornando-se o único presidente eleito
          três vezes na história recente do país.
        </li>
      </ul>
    ),
  },
];
