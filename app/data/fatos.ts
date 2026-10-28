import { imagePath } from "~/data/image-credits";

export type PeriodFilter =
  | "todos"
  | "anos70"
  | "anos80"
  | "anos2000"
  | "anos2010"
  | "anos2020";

export type ThemeFilter =
  | "todos"
  | "economia"
  | "social"
  | "politica";

export type Fato = {
  id: string;
  year: number;
  period: Exclude<PeriodFilter, "todos">;
  theme: Exclude<ThemeFilter, "todos">;
  title: string;
  summary: string;
  image: string;
  imageAlt: string;
};

export const periodLabels: Record<PeriodFilter, string> = {
  todos: "Todos os períodos",
  anos70: "Anos 1970",
  anos80: "Anos 1980",
  anos2000: "Anos 2000",
  anos2010: "Anos 2010",
  anos2020: "Anos 2020",
};

export const themeLabels: Record<ThemeFilter, string> = {
  todos: "Todos os temas",
  economia: "Economia",
  social: "Social",
  politica: "Política externa e institucional",
};

export const fatos: Fato[] = [
  {
    id: "f1",
    year: 1975,
    period: "anos70",
    theme: "social",
    title: "Liderança sindical no ABC",
    summary:
      "Lula consolidou-se como dirigente sindical em São Bernardo do Campo, articulando reivindicações salariais em meio ao regime militar.",
    image: imagePath("comicio-1999-sp.jpg"),
    imageAlt: "Comício com trabalhadores em São Paulo",
  },
  {
    id: "f2",
    year: 1978,
    period: "anos70",
    theme: "social",
    title: "Greve de 1978",
    summary:
      "Metalúrgicos do ABC paralisaram fábricas por mais de dez dias, ampliando o espaço de protesto trabalhista no país.",
    image: imagePath("primeiro-maio-2010-sp.jpg"),
    imageAlt: "Trabalhadores em ato de 1º de Maio",
  },
  {
    id: "f3",
    year: 1979,
    period: "anos70",
    theme: "politica",
    title: "Greve de 1979",
    summary:
      "Nova paralisação reforçou a pressão por anistia e abertura política, com Lula como rosto das negociações.",
    image: imagePath("comicio-1999-sp.jpg"),
    imageAlt: "Discurso em comício trabalhista",
  },
  {
    id: "f4",
    year: 1980,
    period: "anos80",
    theme: "politica",
    title: "Fundação do PT",
    summary:
      "Em fevereiro de 1980, trabalhadores, intelectuais e movimentos sociais fundaram o Partido dos Trabalhadores.",
    image: imagePath("posse-2003-esplanada.jpg"),
    imageAlt: "Público em Brasília",
  },
  {
    id: "f5",
    year: 1983,
    period: "anos80",
    theme: "social",
    title: "Presidência do sindicato",
    summary:
      "Lula presidiu o Sindicato dos Metalúrgicos e ampliou alianças com a igreja e movimentos de bairro no ABC.",
    image: imagePath("primeiro-maio-2010-sp.jpg"),
    imageAlt: "Comemoração de 1º de Maio",
  },
  {
    id: "f6",
    year: 1989,
    period: "anos80",
    theme: "politica",
    title: "Primeira candidatura à Presidência",
    summary:
      "Na redemocratização, Lula disputou o Planalto pela primeira vez, levando pauta social ao centro do debate eleitoral.",
    image: imagePath("lula-2003.jpg"),
    imageAlt: "Retrato de Lula",
  },
  {
    id: "f7",
    year: 2003,
    period: "anos2000",
    theme: "politica",
    title: "Posse presidencial",
    summary:
      "Em 1º de janeiro de 2003, Lula tomou posse como o primeiro metalúrgico presidente do Brasil, diante de multidão em Brasília.",
    image: imagePath("indigenas-posse-2003.jpg"),
    imageAlt: "Indígenas da aldeia Pacararu na Esplanada",
  },
  {
    id: "f8",
    year: 2003,
    period: "anos2000",
    theme: "social",
    title: "Fome Zero",
    summary:
      "Programa articulou produção de alimentos, abastecimento e transferência de renda para reduzir a insegurança alimentar.",
    image: imagePath("esplanada-2003.jpg"),
    imageAlt: "Desfile na Esplanada em 2003",
  },
  {
    id: "f9",
    year: 2004,
    period: "anos2000",
    theme: "social",
    title: "Bolsa Família",
    summary:
      "Programa unificou transferências condicionadas e ampliou cobertura a milhões de famílias em situação de pobreza.",
    image: imagePath("indigenas-posse-2003.jpg"),
    imageAlt: "Brasileiros na Esplanada em 2003",
  },
  {
    id: "f10",
    year: 2006,
    period: "anos2000",
    theme: "economia",
    title: "Reeleição",
    summary:
      "Lula foi reeleito com agenda que combinava estabilidade econômica e continuidade de políticas sociais.",
    image: imagePath("posse-2003-esplanada.jpg"),
    imageAlt: "Manifestações populares em Brasília",
  },
  {
    id: "f11",
    year: 2007,
    period: "anos2000",
    theme: "economia",
    title: "Crescimento e emprego",
    summary:
      "O país registrou expansão do PIB e queda do desemprego, com consumo impulsionado por crédito e programas sociais.",
    image: imagePath("lula-2003.jpg"),
    imageAlt: "Presidente Lula em 2003",
  },
  {
    id: "f12",
    year: 2010,
    period: "anos2010",
    theme: "social",
    title: "1º de Maio em São Paulo",
    summary:
      "Comemorações do Dia do Trabalhador reuniram centrais sindicais e reforçaram a base histórica do PT no movimento operário.",
    image: imagePath("primeiro-maio-2010-sp.jpg"),
    imageAlt: "Lula no 1º de Maio de 2010 em Santana",
  },
  {
    id: "f13",
    year: 2010,
    period: "anos2010",
    theme: "politica",
    title: "Entrega da faixa",
    summary:
      "Lula concluiu o segundo mandato com alta aprovação e transferiu a sucessora eleita, Dilma Rousseff.",
    image: imagePath("esplanada-2003.jpg"),
    imageAlt: "Cerimônia na Esplanada",
  },
  {
    id: "f14",
    year: 2018,
    period: "anos2010",
    theme: "politica",
    title: "Prisão e disputa judicial",
    summary:
      "Após condenação na Lava Jato, cumpriu pena até decisões do STF sobre competência da Justiça Federal.",
    image: imagePath("lula-2023-ombros.jpg"),
    imageAlt: "Retrato oficial de Lula",
  },
  {
    id: "f15",
    year: 2022,
    period: "anos2020",
    theme: "social",
    title: "Caminhada no Alemão",
    summary:
      "Durante a campanha, Lula percorreu o Complexo do Alemão no Rio, dialogando com moradores sobre segurança e desigualdade.",
    image: imagePath("alemao-2022.jpg"),
    imageAlt: "Campanha no Complexo do Alemão",
  },
  {
    id: "f16",
    year: 2022,
    period: "anos2020",
    theme: "politica",
    title: "Eleição presidencial",
    summary:
      "Venceu o segundo turno e retornou ao Planalto após intervalo de doze anos desde o fim do segundo mandato.",
    image: imagePath("alemao-2022.jpg"),
    imageAlt: "Apoiadores durante campanha no Rio",
  },
  {
    id: "f17",
    year: 2023,
    period: "anos2020",
    theme: "politica",
    title: "Posse de 2023",
    summary:
      "Cerimônia no Congresso e discurso no Parlatório marcaram o início do terceiro mandato presidencial.",
    image: imagePath("posse-2023-parlatorio.jpg"),
    imageAlt: "Posse no Parlatório do Planalto",
  },
  {
    id: "f18",
    year: 2023,
    period: "anos2020",
    theme: "social",
    title: "Recriação do Bolsa Família",
    summary:
      "Medida provisória restabeleceu o programa de transferência de renda com novo desenho de benefícios.",
    image: imagePath("posse-2023-parlatorio.jpg"),
    imageAlt: "Discurso de posse com público na Esplanada",
  },
  {
    id: "f19",
    year: 2023,
    period: "anos2020",
    theme: "economia",
    title: "Minha Casa, Minha Vida",
    summary:
      "Governo relançou política habitacional para ampliar acesso à moradia popular.",
    image: imagePath("lula-2023-quadrado.jpg"),
    imageAlt: "Retrato oficial de 2023",
  },
  {
    id: "f20",
    year: 2024,
    period: "anos2020",
    theme: "politica",
    title: "COP30 na Amazônia",
    summary:
      "Brasil sediará a COP30 em Belém, eixos de clima e florestas voltaram ao centro da agenda externa.",
    image: imagePath("lula-2023-ombros.jpg"),
    imageAlt: "Presidente Lula em retrato oficial",
  },
  {
    id: "f21",
    year: 2026,
    period: "anos2020",
    theme: "politica",
    title: "1º turno das eleições de 2026",
    summary:
      "Em 4 de outubro, com quase toda a apuração, Lula (PT) e Flávio Bolsonaro (PL) foram os mais votados e disputaram o 2º turno presidencial.",
    image: imagePath("posse-2003-esplanada.jpg"),
    imageAlt: "Multidão em frente ao Congresso Nacional",
  },
  {
    id: "f22",
    year: 2026,
    period: "anos2020",
    theme: "politica",
    title: "2º turno em 25 de outubro",
    summary:
      "Lula buscou a reeleição com Alckmin como vice; Flávio Bolsonaro (PL) concorreu com Alfredo Gaspar (PL) na chapa adversária.",
    image: imagePath("lula-2023-quadrado.jpg"),
    imageAlt: "Retrato oficial de Lula",
  },
  {
    id: "f23",
    year: 2026,
    period: "anos2020",
    theme: "politica",
    title: "Reeleição confirmada pelo TSE",
    summary:
      "Apuração final: Lula 51,79% dos votos válidos (64.256.232); Flávio Bolsonaro 48,21% (59.826.041). Quarto mandato presidencial.",
    image: imagePath("posse-2023-parlatorio.jpg"),
    imageAlt: "Discurso no Parlatório do Planalto",
  },
];

export const FACTS_PER_PAGE = 5;
