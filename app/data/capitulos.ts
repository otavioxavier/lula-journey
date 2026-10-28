import { imagePath } from "~/data/image-credits";

export const capitulos = [
  {
    year: "1945",
    title: "Infância",
    phrase: "De Garanhuns ao ABC, o trabalho molda o menino que viria a liderar metalúrgicos.",
    image: imagePath("lula-2003.jpg"),
    imageAlt: "Retrato de Luiz Inácio Lula da Silva",
  },
  {
    year: "1978",
    title: "ABC",
    phrase: "Greves e sindicato: a voz da fábrica ecoa contra a ditadura.",
    image: imagePath("comicio-1999-sp.jpg"),
    imageAlt: "Comício de trabalhadores em São Paulo",
  },
  {
    year: "1980",
    title: "PT",
    phrase: "Nasce o Partido dos Trabalhadores e uma nova forma de fazer política.",
    image: imagePath("posse-2003-esplanada.jpg"),
    imageAlt: "Multidão em Brasília",
  },
  {
    year: "2003",
    title: "Mandatos",
    phrase: "Do Planalto à Esplanada, programas sociais mudam a vida de milhões.",
    image: imagePath("esplanada-2003.jpg"),
    imageAlt: "Desfile pela Esplanada dos Ministérios",
  },
  {
    year: "2023",
    title: "Retorno",
    phrase: "Posse no Parlatório e reconstrução democrática após 2022.",
    image: imagePath("posse-2023-parlatorio.jpg"),
    imageAlt: "Posse no Parlatório do Planalto",
  },
  {
    year: "2026",
    title: "Reeleição",
    phrase: "Segundo turno decidido por poucos pontos — quarto mandato no Planalto.",
    image: imagePath("lula-2023-quadrado.jpg"),
    imageAlt: "Retrato oficial de Luiz Inácio Lula da Silva",
  },
] as const;
