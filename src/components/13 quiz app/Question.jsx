const Question = (props) => {
  const { question, onAnswerClick } = props;

  return (
    <div className="quiz__question">
      <h4>{question.question}</h4>
      <div className="question__options">
        {question.answerOptions.map((option, index) => {
          return (
            <button key={option.text} onClick={() => onAnswerClick(option)}>
              {option.text}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export { Question };
