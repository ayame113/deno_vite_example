import { useAtomValue } from "jotai";
import { words } from "../words.ts";
import { currentQuestionIndexAtom } from "./atom.ts";

export function Question() {
  const currentQuestionIndex = useAtomValue(currentQuestionIndexAtom);

  return (
    <div className="text-5xl text-center py-4">
      {words[currentQuestionIndex].word}
    </div>
  );
}
