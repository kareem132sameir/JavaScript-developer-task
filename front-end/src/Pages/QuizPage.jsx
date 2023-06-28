/* eslint-disable react/prop-types */
import React from "react";
import ReactDOM from "react-dom";
import QuizCard from "../Components/QuizCard";
import ProgressBar from "../Components/ProgressBar";
import Modal from "./Modal";

const QuizPage = (props) => {
  return (
    <>
      <Modal />
      <div className=" h-screen bg-gradient-to-r from-blue-100 via-blue-300 to-blue-500">
        <ProgressBar progress={props.progress} counter={props.counter} />
        <QuizCard
          changeProgress={props.changeProgress}
          score={props.score}
          increamentScore={props.increamentScore}
          gameOver={props.gameOver}
          setGameOver={props.setGameOver}
          counter={props.counter}
          decreamentCounter={props.decreamentCounter}
          initializeCounter={props.initializeCounter}
        />
      </div>
    </>
  );
};

export default QuizPage;
