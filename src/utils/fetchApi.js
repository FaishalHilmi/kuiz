import axios from "axios";

export const fetchQuizData = async () => {
  const url = import.meta.env.VITE_API_URL;

  try {
    const response = await axios.get(url);
    const data = response.data.results;

    if (data) {
      return data.map((item) => {
        const answers = [...item.incorrect_answers, item.correct_answer].sort(
          () => Math.random() - 0.5,
        );

        return {
          question: item.question,
          correct: item.correct_answer,
          answers: answers,
        };
      });
    }

    return [];
  } catch (error) {
    console.log("Error fetching api:", error);
  }
};
