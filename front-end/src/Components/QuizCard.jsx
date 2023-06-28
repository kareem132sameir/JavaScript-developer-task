/* eslint-disable react/prop-types */
import React from "react";
import ReactDOM from "react-dom";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const QuizCard = (props) => {
  let wordTypes = ["verb", "noun", "adverb", "adjective"];
  let [index, setIndex] = useState(0);
  let [wordList, setWordList] = useState([]);
  let counter = props.counter;
  let decreamentCounter = props.decreamentCounter;
  let increamentScore = props.increamentScore;
  let setGameOver = props.setGameOver;
  let initializeCounter = props.initializeCounter;
  let changeProgress = props.changeProgress;
  const navigate = useNavigate();

  async function fetchData() {
    try {
      const response = await axios.get("http://localhost:3000/words");
      // Handle the response data
      setWordList(response.data);
      initializeCounter(response.data.length - 1);
    } catch (error) {
      // Handle error
      console.error(error);
    }
  }

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function check(word) {
    if (counter + 1 > 0) {
      if (word == wordList[index].pos) {
        alert("Your Answer is Correct!");
        increamentScore();
      } else {
        alert("Wrong Answer");
      }
      changeProgress(counter);
      setIndex(index + 1);
      decreamentCounter();
    }
    if (counter === 0) {
      setGameOver(true);
      navigate("/result");
    }
  }

  return (
    <div className=" mt-40  mx-40 h-60 flex justify-center bg-blue-50 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div className="flex flex-col my-auto items-center pb-10">
        <h5 className="mb-1 text-3xl font-medium text-gray-900 dark:text-white">
          {wordList.length !== 0 ? wordList[index].word : <div>loading</div>}
        </h5>
        <div className="flex mt-4 space-x-3 md:mt-6">
          {wordTypes.map((word) => (
            <button
              onClick={() => check(word)}
              key={word}
              className="inline-block rounded bg-primary  px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal bg-blue-500 text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
            >
              {word}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuizCard;
