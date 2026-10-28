export type ImageCredit = {
  file: string;
  title: string;
  author: string;
  license: string;
};

export const imageCredits: ImageCredit[] = [
  {
    file: "lula-2023-quadrado.jpg",
    title: "Retrato oficial, 2023",
    author: "Ricardo Stuckert / Palácio do Planalto",
    license: "CC BY 2.0",
  },
  {
    file: "lula-2023-ombros.jpg",
    title: "Retrato oficial (ombros), 2023",
    author: "Ricardo Stuckert / Palácio do Planalto",
    license: "CC BY 2.0",
  },
  {
    file: "lula-2003.jpg",
    title: "Retrato presidencial, 2003",
    author: "Ricardo Stuckert / Agência Brasil",
    license: "CC BY 3.0 BR",
  },
  {
    file: "comicio-1999-sp.jpg",
    title: "Comício de 1º de Maio, São Paulo, 1999",
    author: "Silnei Laise de Andrade",
    license: "CC BY 2.0",
  },
  {
    file: "posse-2003-esplanada.jpg",
    title: "Manifestações na posse, Brasília, 2003",
    author: "Márcia Kalume / Agência Senado",
    license: "CC BY 2.0",
  },
  {
    file: "indigenas-posse-2003.jpg",
    title: "Aldeia Pacararu (PE) na Esplanada, 2003",
    author: "Antonio Cruz / Agência Brasil",
    license: "CC BY 3.0 BR",
  },
  {
    file: "esplanada-2003.jpg",
    title: "Desfile pela Esplanada, 2003",
    author: "Victor Soares / Agência Brasil",
    license: "CC BY 3.0 BR",
  },
  {
    file: "primeiro-maio-2010-sp.jpg",
    title: "1º de Maio, Santana (SP), 2010",
    author: "Ricardo Stuckert / PR",
    license: "CC BY 3.0 BR",
  },
  {
    file: "alemao-2022.jpg",
    title: "Caminhada no Complexo do Alemão, RJ, 2022",
    author: "Marcelo Freixo",
    license: "CC BY 2.0",
  },
  {
    file: "posse-2023-parlatorio.jpg",
    title: "Posse no Parlatório, Brasília, 2023",
    author: "Ricardo Stuckert / Palácio do Planalto",
    license: "CC BY 2.0",
  },
];

export const imagePath = (file: string) => `/images/${file}`;
