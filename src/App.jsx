// App.js
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import MainContext from "./components/MainContent";
import QuizComponent from "./components/Discreatemaths";
import discreteMathQuestions from "./components/maths.js"
import vocabularyQuestions from './components/vocabulary/vocabulary.json';
import reactQuestions from "./components/React/Questions_react.js";
import pythonProblemSolvingQuestions from "./components/ProblemSUP.js/Psup.js";
import gkQuestions from "./components/gk/Gk.js";


function App() {
  const [page, setPage] = useState("main");

 
  return (
    <>
      <div>
        {page === "main" ? (
          <>
            <Navbar />
            <MainContext setPage={setPage} />
          </>
        ) : page === "maths" ? (
          <QuizComponent questions={discreteMathQuestions} setPage={setPage} />
        ) : page === "Vocabluary" ? (
          <QuizComponent questions={vocabularyQuestions} setPage={setPage} />
        ) : page === "react" ? (
          <QuizComponent questions={reactQuestions} setPage={setPage} />
        ) : page === "python" ? (
          <QuizComponent questions={pythonProblemSolvingQuestions} setPage={setPage} />
        ) : page === "Gk" ? (
          <QuizComponent questions={gkQuestions} setPage={setPage} />
        )  : null }
      </div>
    </>
  );
}

export default App;
