import { createContext, useState } from "react";

export const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
  const [questions, setQuestions] = useState(() =>
    JSON.parse(localStorage.getItem("quiz_data") || "[]"),
  );
  const [currentIndex, setCurrentIndex] = useState(() => {
    const saved = localStorage.getItem("quiz_index");
    return saved !== null ? Number(saved) : 0;
  });
  const [timeLeft, setTimeLeft] = useState(() => {
    const saved = localStorage.getItem("quiz_timer");
    return saved !== null ? Number(saved) : 110;
  });
  const [score, setScore] = useState(() =>
    JSON.parse(
      localStorage.getItem("quiz_score") || '{"correct": 0, "wrong": 0}',
    ),
  );

  return (
    <QuizContext.Provider
      value={{
        questions,
        setQuestions,
        currentIndex,
        setCurrentIndex,
        timeLeft,
        setTimeLeft,
        score,
        setScore,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};
