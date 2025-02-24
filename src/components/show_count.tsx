import { useAtomValue } from "jotai";
import { words } from "../words.ts";
import { currentQuestionIndexAtom } from "./atom.ts";

export function ShowCount() {
  const currentQuestionIndex = useAtomValue(currentQuestionIndexAtom);
  return (
    <div className="text-slate-600 text-center">
      {currentQuestionIndex + 1}/{words.length}
    </div>
  );
}
