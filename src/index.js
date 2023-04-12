import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import Quiz from "./components/Quiz";
import { QuizProvider } from "./contexts/quiz";
// import Timer from "./timer";
// import "./i18n";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <BrowserRouter>
        <QuizProvider>
            {/* <Timer/> */}
            <Quiz />
        </QuizProvider>
        <Suspense fallback={<div>Loading...</div>}>
            <App />
        </Suspense>
    </BrowserRouter>
);

// ReactDOM.render(
//   <React.StrictMode>
//     <QuizProvider>
//     {/* <Timer/> */}
//       <Quiz />
//     </QuizProvider>
//   </React.StrictMode>,
//   document.getElementById("root")
// );
