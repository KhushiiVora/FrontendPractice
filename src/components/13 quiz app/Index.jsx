import { useState } from "react";
import { Question } from "./Question";
import { Result } from "./Result";
import quiz from "./data/questions.json";
import "./index.css";

const Index = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);

  const saveAnswer = (option) => {
    setAnswers([...answers, option.isCorrect]);
    setCurrentQuestion(currentQuestion + 1);
  };

  const resetQuiz = () => {
    setAnswers([]);
    setCurrentQuestion(0);
  };

  return (
    <div className="quiz">
      <h2>Quiz</h2>
      {currentQuestion < quiz.length && (
        <Question question={quiz[currentQuestion]} onAnswerClick={saveAnswer} />
      )}
      {currentQuestion === quiz.length && (
        <Result quiz={quiz} userAnswers={answers} resetQuiz={resetQuiz} />
      )}
    </div>
  );
};

export default Index;
