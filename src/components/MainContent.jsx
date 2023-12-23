import React, { useState } from "react";
import Quizz from "./instructions.png";
export default function MainContext({ setPage }) {

  return (
    <>
      <div className="main">
        <div className="buttons">
        <div className="Button_Get_Quizz" onClick={() => {
        setPage("maths")
      }} > <img width={"30px"} src="https://kalvium.com/wp-content/uploads/2022/07/fav.png" alt="" />
        <p className="Dm">Discrete Maths</p></div>
        <div className="Button_Get_Quizz" onClick={() => {
        setPage("python")
      }} > <img width={"30px"} src="https://kalvium.com/wp-content/uploads/2022/07/fav.png" alt="" />
        <p className="P">Python</p></div>
        <div className="Button_Get_Quizz" onClick={() => {
        setPage("Vocabluary")
      }} > <img width={"30px"} src="https://kalvium.com/wp-content/uploads/2022/07/fav.png" alt="" />
        <p className="Voc">Vocabulary</p></div>
        <div className="Button_Get_Quizz" onClick={() => {
        setPage("react")
      }} > <img width={"30px"} src="https://kalvium.com/wp-content/uploads/2022/07/fav.png" alt="" />
        <p className="Re">React</p></div>
        <div className="Button_Get_Quizz" onClick={() => {
        setPage("Gk")
      }} > <img width={"30px"} src="https://kalvium.com/wp-content/uploads/2022/07/fav.png" alt="" />
        <p className="Gk">GK</p></div>
           
        </div>
        <div className="instructions">
          <img className="Instruction_img" src={Quizz} alt="" />
          <img
            className="Brain_img"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0Km9bZx8TT_b_67OL7m5B3TIjn-OR8KSqMkrhCcC72q5g6f8BGHB3Ayq0BnG4_30V4tY&usqp=CAU"
            alt=""
          />
        </div>
      </div>
    </>
  );
}
