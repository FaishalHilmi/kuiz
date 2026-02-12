import { useCallback, useContext, useEffect } from "react";
import { QuizContext } from "../context/QuizContext";
import { fetchQuizData } from "../utils/fetchApi";

export default function useQuiz() {
  const {
    questions,
    setQuestions,
    currentIndex,
    setCurrentIndex,
    timeLeft,
    setTimeLeft,
    score,
    setScore,
  } = useContext(QuizContext);

  useEffect(() => {
    if (
      questions.length === 0 ||
      timeLeft <= 0 ||
      currentIndex >= questions.length
    ) {
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        const newTime = prev - 1;
        localStorage.setItem("quiz_timer", newTime);
        return newTime;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [questions.length, timeLeft, currentIndex, setTimeLeft]);

  const startQuiz = async () => {
    localStorage.removeItem("quiz_data");
    localStorage.removeItem("quiz_index");
    localStorage.removeItem("quiz_timer");
    localStorage.removeItem("quiz_score");

    const data = await fetchQuizData();

    if (data.length > 0) {
      setQuestions(data);
      setCurrentIndex(0);
      setTimeLeft(110);
      setScore({ correct: 0, wrong: 0 });

      localStorage.setItem("quiz_data", JSON.stringify(data));
      localStorage.setItem("quiz_index", "0");
      localStorage.setItem("quiz_timer", "110");
      localStorage.setItem(
        "quiz_score",
        JSON.stringify({ correct: 0, wrong: 0 }),
      );

      return true;
    }

    return false;
  };

  const restartQuiz = async () => {
    localStorage.removeItem("quiz_timer");
    localStorage.removeItem("quiz_index");
    localStorage.removeItem("quiz_score");
    localStorage.removeItem("quiz_data");

    setCurrentIndex(0);
    setTimeLeft(110);
    setScore({ correct: 0, wrong: 0 });

    const success = await startQuiz();
    return success;
  };

  const quitToDashboard = () => {
    localStorage.removeItem("quiz_timer");
    localStorage.removeItem("quiz_index");
    localStorage.removeItem("quiz_score");
    localStorage.removeItem("quiz_data");

    setQuestions([]);
    setCurrentIndex(0);
  };

  const handleAnswer = useCallback(
    (answer) => {
      const isCorrect = answer === questions[currentIndex].correct;

      const newScore = {
        correct: score.correct + (isCorrect ? 1 : 0),
        wrong: score.wrong + (isCorrect ? 0 : 1),
      };

      setScore(newScore);
      localStorage.setItem("quiz_score", JSON.stringify(newScore));

      const nextIndex = currentIndex + 1;
      setCurrentIndex(nextIndex);
      localStorage.setItem("quiz_index", nextIndex);
    },
    [currentIndex, questions, score, setScore, setCurrentIndex],
  );

  return {
    questions,
    currentIndex,
    timeLeft,
    score,
    handleAnswer,
    startQuiz,
    restartQuiz,
    quitToDashboard,
  };
}
