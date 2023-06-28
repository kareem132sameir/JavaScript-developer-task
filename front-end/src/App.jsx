import { useState } from "react";
import "./App.css";
import QuizPage from "./Pages/quizPage";
import { Route, Routes } from "react-router-dom";
import ResultPage from "./Pages/ResultPage";
import ProtectedRoutes from "./Pages/ProtectedRoutes";
import Error from "./Pages/Error";

function App() {
  // State for the counter of number of turns of the player
  let [counter, setCounter] = useState(0);

  // State for the score
  let [score, setScore] = useState(0);

  // State for game over status
  let [gameOver, setGameOver] = useState(false);

  // State for the progress
  let [progress, setProgress] = useState(0);

  // Function to update progress based on counter
  function changeProgress(counter) {
    setProgress((counter - 10) * 10 * -1);
  }

  // Function to increment the score
  function increamentScore() {
    setScore(score + 1);
  }

  function decreamentCounter() {
    setCounter(counter - 1);
  }

  function initializeCounter(x) {
    setCounter(x);
  }

  // Function to reset the score and progress
  function resetScore() {
    setProgress(0);
    setScore(0);
  }

  return (
    <Routes>
      <Route
        path="/"
        element={
          <QuizPage
            changeProgress={changeProgress}
            progress={progress}
            score={score}
            increamentScore={increamentScore}
            gameOver={gameOver}
            setGameOver={setGameOver}
            counter={counter}
            decreamentCounter={decreamentCounter}
            initializeCounter={initializeCounter}
          />
        }
      />
      <Route element={<ProtectedRoutes gameOver={gameOver} />}>
        <Route
          path="/result"
          element={<ResultPage resetScore={resetScore} score={score} />}
        />
      </Route>
      <Route path="*" element={<Error />} />
    </Routes>
  );
}

export default App;
