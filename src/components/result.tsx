import { useAtom, useSetAtom } from "jotai";
import { answerStatusAtom, currentQuestionIndexAtom } from "./atom.ts";

export function Result() {
  const [answerStatus, setAnswerStatus] = useAtom(answerStatusAtom);
  const setCurrentQuestionIndex = useSetAtom(currentQuestionIndexAtom);
  return (
    <>
      <div className="grow text-8xl text-center flex flex-col">
        <div className="grow" />
        <div>
          {answerStatus === "waiting"
            ? null
            : answerStatus === "correct"
            ? (
              <div className="w-48 h-48 p-6 m-auto rounded-full bg-lime-500">
                <div className="w-36 h-36 m-auto rounded-full bg-slate-50">
                </div>
              </div>
            )
            : "❌"}
        </div>
        <div className="grow" />
      </div>
      {answerStatus === "waiting" ? null : (
        <div
          className="absolute inset-0 cursor-pointer"
          onClick={() => {
            setCurrentQuestionIndex((index) => index + 1);
            setAnswerStatus("waiting");
          }}
        >
        </div>
      )}
    </>
  );
}
