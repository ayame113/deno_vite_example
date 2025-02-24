import { useAtom, useAtomValue } from "jotai";
import { words } from "../words.ts";
import { answerStatusAtom, currentQuestionIndexAtom } from "./atom.ts";
import { shuffled, takeRandom } from "../utils.ts";
import { twMerge } from "tailwind-merge";

export function Answer() {
  const currentQuestionIndex = useAtomValue(currentQuestionIndexAtom);

  const correctAnswer = {
    ...words[currentQuestionIndex],
    index: currentQuestionIndex,
  };
  const wrongAnswers = takeRandom(
    words
      .toSpliced(currentQuestionIndex, 1)
      .map((word, i) => ({ ...word, index: i })),
    3,
  );
  const answers = shuffled([correctAnswer, ...wrongAnswers]);
  return <AnswerButton answers={answers} />;
}

interface AnswerButtonProps {
  answers: { mean: string; index: number }[];
}

export function AnswerButton({ answers }: AnswerButtonProps) {
  const currentQuestionIndex = useAtomValue(currentQuestionIndexAtom);
  const [answerStatus, setAnswerStatus] = useAtom(answerStatusAtom);
  return (
    <div>
      {answers.map((answer) => (
        <button
          type="button"
          key={answer.mean}
          className={twMerge(
            "block w-full py-6 my-2 text-slate-600 bg-slate-200 rounded-md shadow-md cursor-pointer",
            answerStatus === "waiting"
              ? null
              : answer.index === currentQuestionIndex
              ? "bg-lime-100"
              : "bg-rose-300",
          )}
          onClick={() => {
            if (answer.index === currentQuestionIndex) {
              setAnswerStatus("correct");
            } else {
              setAnswerStatus("incorrect");
            }
          }}
        >
          {answer.mean}
        </button>
      ))}
    </div>
  );
}
