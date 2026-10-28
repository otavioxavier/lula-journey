import { useState } from "react";
import type { Route } from "./+types/quiz";
import { PosterButton } from "~/components/brand/PosterButton";
import { ProgressBar } from "~/components/ui/ProgressBar";
import { CountUp } from "~/components/reactbits/count-up";
import { useToast } from "~/components/toast-context";
import { quizQuestions } from "~/data/quiz";
import { cn } from "~/lib/utils";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Trajetória de Lula — Quiz" },
    {
      name: "description",
      content: "Mini-quiz de 10 perguntas com barra de progresso.",
    },
  ];
}

export default function QuizPage() {
  const { showToast } = useToast();
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [finished, setFinished] = useState(false);

  const question = quizQuestions[index];
  const progressValue = (answered / quizQuestions.length) * 100;

  const handleAnswer = (optionIndex: number) => {
    if (selected !== null || finished || !question) return;

    setSelected(optionIndex);
    const correct = optionIndex === question.correctIndex;
    const nextAnswered = answered + 1;
    const nextScore = correct ? score + 1 : score;

    setAnswered(nextAnswered);
    if (correct) {
      setScore(nextScore);
      showToast("success", "Resposta correta!");
    } else {
      showToast("error", "Resposta incorreta. Revise a trajetória.");
    }

    window.setTimeout(() => {
      if (index >= quizQuestions.length - 1) {
        setFinished(true);
        showToast(
          "info",
          `Você acertou ${nextScore} de ${quizQuestions.length}`,
        );
      } else {
        setIndex((i) => i + 1);
        setSelected(null);
      }
    }, 900);
  };

  const restart = () => {
    setIndex(0);
    setScore(0);
    setAnswered(0);
    setSelected(null);
    setFinished(false);
    showToast("info", "Quiz reiniciado.");
  };

  if (finished) {
    return (
      <div className="mx-auto max-w-lg space-y-8 border-[3px] border-[var(--poster-ink)] bg-white p-8 shadow-[-10px_10px_0_var(--poster-blue)]">
        <h1 className="poster-display-title text-[length:var(--poster-heading)]">
          Seu <span className="text-[var(--poster-red)] italic">placar</span>
        </h1>
        <p className="text-5xl font-black italic text-[var(--poster-red)]">
          <CountUp to={score} suffix={` / ${quizQuestions.length}`} />
        </p>
        <ProgressBar
          value={100}
          label={`Você acertou ${score} de ${quizQuestions.length}`}
        />
        <PosterButton type="button" onClick={restart}>
          Refazer quiz
        </PosterButton>
      </div>
    );
  }

  if (!question) return null;

  return (
    <div className="mx-auto max-w-2xl space-y-8">
      <header>
        <p className="eyebrow text-[var(--poster-red)]">Teste o que você leu</p>
        <h1 className="poster-display-title mt-3 text-[length:var(--poster-heading)]">
          Mini-<span className="text-[var(--poster-red)] italic">quiz</span>
        </h1>
        <p className="mt-3 font-bold uppercase">
          Pergunta {index + 1} de {quizQuestions.length}
        </p>
      </header>

      <ProgressBar
        value={progressValue}
        label={`Progresso (${answered} respondidas)`}
      />

      <article className="border-[3px] border-[var(--poster-ink)] bg-white p-6 shadow-[-10px_10px_0_var(--poster-red)]">
        <h2 className="text-xl font-black uppercase leading-snug sm:text-2xl">
          {question.question}
        </h2>
        <ul className="mt-6 space-y-3">
          {question.options.map((option, optionIndex) => {
            let stateClass =
              "border-[3px] border-[var(--poster-ink)] bg-white hover:shadow-[-4px_4px_0_var(--poster-blue)]";
            if (selected !== null) {
              if (optionIndex === question.correctIndex) {
                stateClass =
                  "border-[3px] border-[var(--poster-green)] bg-[var(--poster-green)]/15 shadow-[-4px_4px_0_var(--poster-green)]";
              } else if (optionIndex === selected) {
                stateClass =
                  "border-[3px] border-[var(--poster-red)] bg-[var(--poster-red)]/10 shadow-[-4px_4px_0_var(--poster-red-deep)]";
              }
            }

            return (
              <li key={option}>
                <button
                  type="button"
                  disabled={selected !== null}
                  onClick={() => handleAnswer(optionIndex)}
                  className={cn(
                    "w-full px-4 py-3 text-left text-sm font-bold transition-shadow disabled:cursor-default focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--poster-red)]",
                    stateClass,
                  )}
                >
                  {option}
                </button>
              </li>
            );
          })}
        </ul>
        {selected !== null && (
          <p className="mt-6 border-t-[3px] border-[var(--poster-ink)] pt-4 text-sm leading-relaxed">
            {question.explanation}
          </p>
        )}
      </article>
    </div>
  );
}
