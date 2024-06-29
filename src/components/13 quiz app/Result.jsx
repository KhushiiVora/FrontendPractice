const Result = (props) => {
  const { quiz, userAnswers, resetQuiz } = props;
  return (
    <div className="quiz__result">
      <h2>Result</h2>
      <p>{`Score: ${userAnswers.filter((answer) => answer).length}/${
        quiz.length
      }`}</p>
      <ul>
        {quiz.map((question, index) => {
          return (
            <li key={question.question} data-correct={userAnswers[index]}>
              Q-{index + 1}. {question.question}
              <span className="quiz__result--answer">
                {
                  quiz[index].answerOptions.filter(
                    (option) => option.isCorrect
                  )[0].text
                }
              </span>
            </li>
          );
        })}
      </ul>
      <button className="restart_button" onClick={resetQuiz}>
        Restart Quiz
      </button>
    </div>
  );
};

export { Result };
