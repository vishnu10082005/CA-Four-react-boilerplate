import React from "react";
import "../App.css"
import quizlogo from "./quiz logo.png"
import kalviumlogo from "./kalvium logo.png"
export default function Navbar(){
return(
<>
<div className="Navbar">

<img className="Kalvium_logo" src={kalviumlogo} alt="" />
<h2 className="Welcome">Welcome to Konfident Quizz</h2>
<img className="Quiz_logo" src={quizlogo} alt="" />

</div>




</>




)


}