/* eslint-disable no-unused-vars */

import "./App.css";
import { Route, Routes } from "react-router-dom";
import StartPage from "./pages/StartPage";
import ExamPage from "./pages/ExamPage";
import { Score } from "./utils/ScoreContext";
import { useState } from "react";
import ResultPage from "./pages/ResultPage";

function App() {
  const [score, setScore] = useState(0);
  const [rank, setRank] = useState(0);

  return (
    <Score.Provider value={{ score, setScore, rank, setRank }}>
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/exam" element={<ExamPage />} />
        <Route path="/result" element={<ResultPage />} />
      </Routes>
    </Score.Provider>
  );
}

export default App;
