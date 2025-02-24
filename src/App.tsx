import { Question } from "./components/question.tsx";
import { Answer } from "./components/answer.tsx";
import { Result } from "./components/result.tsx";
import { ShowCount } from "./components/show_count.tsx";

export function App() {
  return (
    <div className="w-full bg-slate-200">
      <div className="max-w-xl w-11/12 min-h-screen mx-auto p-4 bg-slate-50 shadow-lg flex flex-col">
        <ShowCount />
        <Question />
        <Result />
        <Answer />
      </div>
    </div>
  );
}
