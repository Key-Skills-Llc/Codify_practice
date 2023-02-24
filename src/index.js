import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Quiz from "./components/Quiz";
import { QuizProvider } from "./contexts/quiz";
// import Timer from "./timer";


ReactDOM.render(
  <React.StrictMode>
    <QuizProvider>
    {/* <Timer/> */}
      <Quiz />
    </QuizProvider>
  </React.StrictMode>,
  document.getElementById("root")
);