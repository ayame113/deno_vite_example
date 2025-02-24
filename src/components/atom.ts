import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";

export const currentQuestionIndexAtom = atomWithStorage(
  "currentQuestionIndex",
  0,
);

export const answerStatusAtom = atom<"waiting" | "correct" | "incorrect">(
  "waiting",
);
