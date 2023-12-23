import React, { useState } from "react";
import "../App.css"
import kalviumlogo from "./kalvium logo.png"
import quizlogo from "./quiz logo.png"
import Result from "./Result.jsx";

const QuizComponent = ({ questions , setPage}) => {
  
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [ishighlight, setHighlight] = useState(false)
  const [score, setScore] = useState(0)
  const [theme,setTheme]=useState(true)
  const [quizend, setQuizEnd] = useState(false);
  const [Answered, setAnswer] = useState(0);
  const [incorrect, setIncorrect] = useState(0);

  const ThemeChange=()=>{
    setTheme(!theme)
  }
  const CorrectAnswer=true;
  const Highlight = () => {
    setHighlight(!ishighlight)
  }
  const OptionClick=()=>{
    if(currentQuestion<questions.length-1){

      setCurrentQuestion(currentQuestion+1)
    }else{
      setQuizEnd(true)
    }
  }
  const isCorrect=(option)=>{
    if(CorrectAnswer==option.isCorrect){
      setAnswer(Answered+1)
      setScore(score+1)
      localStorage.setItem("score",score+1)

    }else{
      setIncorrect(incorrect+1)
    }
  }
  return (
    <div className="dicreatemaths" style={{
      backgroundColor: theme ? "white" : "black",
      color : theme ? "black" : "white"
    }}>
      <div className="Navbar">

        <img className="Kalvium_logo" src={kalviumlogo} alt="" />
        <h2 className="Welcome">Konfident Quiz</h2>
        <img className="Quiz_logo" src={quizlogo} alt="" />

      </div>
    {!quizend ? (  <>
      <div className="maths">
        <p className="p_tag" style={{
          color: ishighlight ? "black" : "red"

        }}>{questions[currentQuestion].text}</p>
        <div>
          <div className="Option_button">

            {questions[currentQuestion].options.map((option) => (
              <button onClick={()=> {OptionClick();isCorrect(option)}} key={option.id} className="">

                {option.text}

              </button>
            ))}
          </div>
          <div className="Buttons_flex">

          
              <div className="highight_button">
              

                <div className="Button_back" onClick={Highlight} > <img width={"30px"} src="https://kalvium.com/wp-content/uploads/2022/07/fav.png" alt="" />
                <p>{ishighlight ? "Highlight" : "Remove Highlight"}</p></div>
                <div className="Button_back" onClick={()=>{
                    setPage("main")
                }} > <img width={"30px"} src="https://kalvium.com/wp-content/uploads/2022/07/fav.png" alt="" />
                <p>Home</p></div>
                
              </div>
              <div className="Button_back" onClick={ThemeChange} > <img width={"30px"} src="https://kalvium.com/wp-content/uploads/2022/07/fav.png" alt="" />
                <p>Theme Change</p></div>
        </div>
        </div>
      </div>
      </>) : <Result score={score} setPage={setPage} Answered={Answered} incorrect={incorrect}/>}
    </div>
  );
};

export default QuizComponent;
