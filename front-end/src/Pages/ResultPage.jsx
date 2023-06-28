/* eslint-disable react/prop-types */
import React, { useState } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const ResultPage = (props) => {
  // Initialize variables and states
  const navigate = useNavigate();
  let playerScore = props.score;
  playerScore = (playerScore / 10) * 100;

  let [rank, setRank] = useState(0);
  let resetScore = props.resetScore;

  // Fetch data from the server
  async function fetchData() {
    try {
      const response = await axios.post("http://localhost:3000/rank", {
        playerScore,
      });
      // Handle the response data
      setRank(response.data);
      console.log(response.data);
    } catch (error) {
      // Handle error
      console.error(error);
    }
  }

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Function to handle the "Play Again" button click to reset the game
  function playAgain() {
    resetScore();
    navigate("/", { replace: true });
  }
  return (
    <>
      <div className="flex flex-col justify-center h-screen w-screen bg-gradient-to-r from-blue-100 via-blue-300 to-blue-500">
        <div className="mx-40 h-60 my-44 flex justify-center bg-blue-50 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <div className=" flex flex-col my-auto items-center pb-10">
            <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
              {rank ? rank : <div>Loading your rank..</div>}
            </h5>
            <div className="flex mt-4 space-x-3 md:mt-6">
              <button
                className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal bg-blue-500 text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                onClick={playAgain}
              >
                Play Again
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResultPage;
