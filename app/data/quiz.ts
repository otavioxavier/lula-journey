export type QuizQuestion = {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
};

export const quizQuestions: QuizQuestion[] = [
  {
    id: "q1",
    question: "Em que ano Luiz Inácio Lula da Silva nasceu?",
    options: ["1935", "1945", "1955", "1965"],
    correctIndex: 1,
    explanation: "Lula nasceu em 27 de outubro de 1945, em Garanhuns (PE).",
  },
  {
    id: "q2",
    question: "Qual profissão Lula exercia antes da vida política?",
    options: ["Professor", "Torneiro mecânico", "Advogado", "Médico"],
    correctIndex: 1,
    explanation: "Trabalhou como torneiro mecânico no ABC paulista.",
  },
  {
    id: "q3",
    question: "Em que ano o Partido dos Trabalhadores (PT) foi fundado?",
    options: ["1975", "1980", "1985", "1990"],
    correctIndex: 1,
    explanation: "O PT foi fundado em fevereiro de 1980.",
  },
  {
    id: "q4",
    question: "Quando Lula tomou posse pela primeira vez como presidente?",
    options: ["1º de janeiro de 1999", "1º de janeiro de 2003", "1º de janeiro de 2007", "1º de janeiro de 2011"],
    correctIndex: 1,
    explanation: "A posse ocorreu em 1º de janeiro de 2003.",
  },
  {
    id: "q5",
    question: "Qual programa unificou transferências de renda em 2004?",
    options: ["Bolsa Escola", "Bolsa Família", "Auxílio Brasil", "Renda Cidadã"],
    correctIndex: 1,
    explanation: "O Bolsa Família foi criado em 2004.",
  },
  {
    id: "q6",
    question: "Quantos mandatos completos Lula cumpriu antes de 2011?",
    options: ["Um", "Dois", "Três", "Nenhum"],
    correctIndex: 1,
    explanation: "Lula governou de 2003 a 2010, dois mandatos.",
  },
  {
    id: "q7",
    question: "Em qual região Lula se destacou como líder sindical?",
    options: ["ABC paulista", "Vale do Rio Doce", "Sertão nordestino", "Zona da Mata"],
    correctIndex: 0,
    explanation: "Atuou no ABC de São Bernardo e Diadema.",
  },
  {
    id: "q8",
    question: "Quando Lula retornou à Presidência após as eleições de 2022?",
    options: ["1º de janeiro de 2021", "1º de janeiro de 2023", "1º de maio de 2023", "7 de setembro de 2022"],
    correctIndex: 1,
    explanation: "Tomou posse novamente em 1º de janeiro de 2023.",
  },
  {
    id: "q9",
    question: "Em que data ocorreu o 2º turno da eleição presidencial de 2026?",
    options: ["4 de outubro de 2026", "25 de outubro de 2026", "1º de janeiro de 2027", "7 de setembro de 2026"],
    correctIndex: 1,
    explanation: "O 2º turno foi em 25 de outubro de 2026; o 1º turno, em 4 de outubro.",
  },
  {
    id: "q10",
    question: "Quem disputou o 2º turno de 2026 contra Lula (PT)?",
    options: ["Jair Bolsonaro (PL)", "Flávio Bolsonaro (PL)", "Ronaldo Caiado (PSD)", "Geraldo Alckmin (PSB)"],
    correctIndex: 1,
    explanation: "Flávio Bolsonaro (PL) foi o candidato derrotado no 2º turno, segundo o TSE.",
  },
];
