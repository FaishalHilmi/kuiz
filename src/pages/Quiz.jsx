import MainLayout from "../layouts/MainLayout";
import { MdTimer } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";
import useQuiz from "../hooks/useQuiz";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Quiz() {
  const { questions, currentIndex, timeLeft, score, handleAnswer } = useQuiz();
  const navigate = useNavigate();

  const currentQuestion = questions[currentIndex];
  const totalQuestion = questions.length;
  const progressPercentage = (currentIndex / questions.length) * 100;
  const remaining = totalQuestion - currentIndex;

  useEffect(() => {
    if (
      questions.length > 0 &&
      (currentIndex >= questions.length || timeLeft <= 0)
    ) {
      navigate("/result");
    }
  }, [currentIndex, questions, timeLeft]);

  if (questions.length === 0) {
    return (
      <MainLayout>
        <div className="min-h-screen flex items-center justify-center text-white">
          Memuat soal...
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <div className="min-h-screen pt-28 lg:pt-36 mb-12 lg:pb-12">
        <div className="heading mb-6">
          <div className="flex justify-between items-end lg:items-center gap-3 md:gap-0 mb-6">
            <div>
              <span className="uppercase text-secondary mb-2 block">
                Pertanyaan {currentIndex + 1} dari {totalQuestion}
              </span>
              <h4 className="text-2xl lg:text-3xl font-bold">
                Sedang Berlangsung
              </h4>
            </div>
            <div>
              <div className="bg-white/10 border border-white/15 rounded-xl py-2 px-4 flex items-center gap-2">
                <MdTimer className="text-secondary text-xl" />
                <span className="text-lg font-mono">{timeLeft}</span>
              </div>
            </div>
          </div>
          <div className="progress">
            <div className="flex justify-between mb-2">
              <div className="percentage text-slate-400">
                {progressPercentage}% Selesai
              </div>
              <div className="remainder text-slate-400">
                {remaining} Sisanya
              </div>
            </div>
            <div className="progress-bar w-full h-2 overflow-x-hidden rounded-full bg-white/10">
              <div
                className="bar h-full bg-linear-to-r from-blue-500 to-blue-600 rounded-full
          transition-all duration-300 ease-out"
                style={{ width: `${progressPercentage}%` }}
              ></div>
            </div>
          </div>
        </div>
        <div className="quiz-card bg-blue-900/15 border-2 border-blue-400/20 p-8 rounded-2xl">
          <span
            className="text-2xl lg:text-3xl font-bold mb-8 block leading-snug"
            dangerouslySetInnerHTML={{
              __html: currentQuestion?.question,
            }}
          />
          <div className="flex flex-col gap-4">
            {currentQuestion?.answers.map((answer, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(answer)}
                className="bg-slate-400/5 border-2 border-slate-500/20 hover:border-secondary hover:bg-secondary/5 py-4 px-5 rounded-xl w-full text-start transition-all duration-200 group flex justify-between items-center"
              >
                <span
                  className="group-hover:text-secondary transition-colors"
                  dangerouslySetInnerHTML={{ __html: answer }}
                />
              </button>
            ))}
          </div>
        </div>
        <div className="flex justify-center items-center gap-2 mt-3">
          <FaCheckCircle className="text-green-400" />
          <span>{score.correct} Benar</span>
        </div>
      </div>
    </MainLayout>
  );
}
