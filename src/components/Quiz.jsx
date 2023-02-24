import { useContext } from "react";
import Question from "./Question";
import { QuizContext } from "../contexts/quiz";
import Answer from "./Answer";
// import backgroundimage from "../images/background-image.png"

const Quiz = () => {
  const [quizState, dispatch] = useContext(QuizContext);

  return (
    <div className="quiz">
      {quizState.showResults && (
        <div className="results">
          {/* <img src={backgroundimage} alt="image" className="background-image"/> */}
          <div className="congratulations">Вы прошли тест!</div>
          <div className="results-info">
            <div>Вы ответили правильно на {quizState.correctAnswersCount}&nbsp;вопросов из &nbsp;{quizState.questions.length} </div>
            <div>
              Чтобы получить другие вопросы приобретите методичку 
            </div>
          </div>
          <a
            href="https://wa.me/+996550855936"
            className="buy-button"
          >
            Купить методичку
          </a>
        </div>
      )}
      {!quizState.showResults && (
        <div>
          <div className="score">
            Вопрос {quizState.currentQuestionIndex + 1}/
            {quizState.questions.length}
          </div>
          
              
          <Question />
          {quizState.currentAnswer && (
            <div> 
              <div className="true-answer">Правильный ответ </div>
              <div className="comments">/* Коментарий Коментарий Коментарий Коментарий Коментарий Коментарий Коментарий Коментарий Коментарий Коментарий Коментарий Коментарий Коментарий Коментарий Коментарий Коментарий Коментарий Коментарий Коментарий Коментарий Коментарий Коментарий Коментарий Коментарий Коментарий Коментарий Коментарий Коментарий */</div>
              <div
              onClick={() => dispatch({ type: "NEXT_QUESTION" })}
              className="next-button"
            >
              Продолжить
            </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Quiz;