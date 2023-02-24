const Answer = ({
    answerText,
    index,
    onSelectAnswer,
    currentAnswer,
    correctAnswer,
  }) => {
    const letterMapping = ["", "", ""];
    const isCorrectAnswer = currentAnswer && answerText === correctAnswer;
    const isWrongAnswer =
      currentAnswer === answerText && currentAnswer !== correctAnswer;
    const correctAnswerClass = isCorrectAnswer ? "correct-answer" : "";
    const wrongAnswerClass = isWrongAnswer ? "wrong-answer" : "";
    const disabledClass = currentAnswer ? "disabled-answer" : "";
    return (
      <div>
        <div
        className={`answer ${correctAnswerClass} ${wrongAnswerClass} ${disabledClass}`}
        onClick={() => onSelectAnswer(answerText)}
        >
        <div className="answer-letter">{letterMapping[index]}</div>
        <div className="answer-text">{answerText}</div>
      </div>
        {/* <div className="correct-answer">{correctAnswerClass}</div> */}
      </div>
    );
  };
  
  export default Answer;