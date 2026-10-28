import { imagePath } from "~/data/image-credits";

export const fases = [
  {
    id: "infancia",
    year: "1945",
    title: "Infância e formação (1945–1968)",
    image: imagePath("lula-2003.jpg"),
    imageAlt: "Retrato oficial de Luiz Inácio Lula da Silva",
    content:
      "Nascido em 27 de outubro de 1945, em Garanhuns (PE), Luiz Inácio da Silva migrou cedo para o ABC paulista com a família. Trabalhou como entregador de doces, office-boy e, a partir de 1966, como torneiro mecânico na Villares. A infância marcada por pobreza e migração moldou sua identidade com o trabalho e a periferia industrial.",
  },
  {
    id: "sindicalismo",
    year: "1978",
    title: "Sindicalismo e greves do ABC (1968–1980)",
    image: imagePath("comicio-1999-sp.jpg"),
    imageAlt: "Lula discursando em comício de 1º de Maio em São Paulo",
    content:
      "Lula tornou-se líder sindical nas fábricas do ABC. Participou das grandes greves de 1978 e 1979, que pressionaram por salários e liberdades durante a ditadura. Foi presidente do Sindicato dos Metalúrgicos de São Bernardo e Diadema e ganhou projeção nacional como voz da classe trabalhadora.",
  },
  {
    id: "pt",
    year: "1980",
    title: "Fundação do PT e transição democrática (1980–2002)",
    image: imagePath("posse-2003-esplanada.jpg"),
    imageAlt: "Multidão em frente ao Congresso na posse de 2003",
    content:
      "Em 1980, ajudou a fundar o Partido dos Trabalhadores (PT). Foi deputado federal, fundador da CUT e candidato à Presidência em 1989, 1994 e 1998. A vitória em 2002 representou a primeira ascensão de um operário metalúrgico ao Planalto, após duas décadas de campanhas e alianças.",
  },
  {
    id: "mandatos",
    year: "2003",
    title: "Mandatos presidenciais (2003–2010)",
    image: imagePath("esplanada-2003.jpg"),
    imageAlt: "Desfile de carro aberto pela Esplanada dos Ministérios em 2003",
    content:
      "Dois mandatos marcados por programas como Bolsa Família, Fome Zero, ProUni e expansão do crédito. A economia cresceu com combinação de política social e estabilidade macro. Lula deixou o cargo em 2010 com alta popularidade, tendo sido reeleito em 2006.",
  },
  {
    id: "atualidade",
    year: "2023",
    title: "Retorno e terceiro mandato (2023–2026)",
    image: imagePath("posse-2023-parlatorio.jpg"),
    imageAlt: "Discurso de posse no Parlatório do Planalto, 2023",
    content:
      "Após vencer as eleições de 2022, Lula tomou posse em 1º de janeiro de 2023. O discurso no Parlatório reuniu símbolos da reconstrução democrática, com ênfase em combate à fome, meio ambiente e diálogo institucional. Concorreu à reeleição em 2026 com Geraldo Alckmin (PSB) como vice.",
  },
  {
    id: "eleicao-2026",
    year: "2026",
    title: "Eleição histórica de 2026",
    image: imagePath("lula-2023-quadrado.jpg"),
    imageAlt: "Retrato oficial de Luiz Inácio Lula da Silva, 2023",
    content:
      "Nas eleições gerais de 2026, o 1º turno ocorreu em 4 de outubro. Lula (PT, 13) e Flávio Bolsonaro (PL, 22) avançaram ao 2º turno, realizado em 25 de outubro. Segundo apuração final do TSE, Lula foi reeleito com 51,79% dos votos válidos (64.256.232), contra 48,21% de Flávio Bolsonaro (59.826.041). Foi o quarto mandato presidencial de Lula, em uma das disputas mais acirradas da história recente do país.",
  },
] as const;
