import React, { useState, useEffect } from 'react';
import '../App.css';

const Result = ({ score, incorrect, Answered, setPage }) => {
  const percentage = (Answered / 5) * 100;
  const [phrase, setPhrase] = useState('🎊 Congratulations 🎊');
  const [color, setColor] = useState(false);

  useEffect(() => {
    if (Answered <= 2) {
      setPhrase(
        'Challenges are the pillars of success. Use this experience to fuel your determination. 🏋️‍♂️🚀'
      );
      setColor('grey');
    } else {
      setPhrase('🎊 Congratulations 🎊');
      setColor('GREEN');
    }
  }, [Answered]);

  const blastAnimationClass = score >= 3 ? 'blast-animation' : '';

  const circleStyle = {
    width: '100px',
    height: '100px',
    borderRadius: '50%',
    backgroundColor: score >= 3 ? 'green' : 'grey',
    margin: '20px auto',
  };

  return (
    <div className={`main-box`}>
      <div className={`results ${blastAnimationClass}`}>
        <h2>🎉 Quiz Results 🎉</h2>
        <h2 style={{ color }}>{phrase}</h2>
        <h3> No. of correct Answers: {Answered}</h3>
        <h3> No. of incorrect Answers: {incorrect}</h3>
        <h3>Score: {score}</h3>
        <h3>Your percentage is: {percentage} %</h3>
        <div className="Button_back" onClick={() => setPage('main')}>
          <img width={'30px'} src="https://kalvium.com/wp-content/uploads/2022/07/fav.png" alt="" />
          <p>Home</p>
        </div>
        <div style={circleStyle}></div>
      </div>
    </div>
  );
};

export default Result;
