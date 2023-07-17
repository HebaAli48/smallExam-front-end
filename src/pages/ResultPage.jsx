import React, { useContext, useEffect, useState } from "react";
import FinalScore from "./../components/resultPage/FinalScore";
import FinalRank from "../components/resultPage/FinalRank";
import TryAgain from "../components/resultPage/TryAgain";
const ResultPage = () => {
  // In This Page I Showed :
  // 1) Final Score
  // 2)Rank
  // 3) Try Exam Again
  return (
    <>
      <div className="flex flex-col  gap-3 items-center justify-center  bg-gradient-to-tr from-blue-200 to-purple-200 pt-2">
        {/* 1) Final Score */}
        <FinalScore />
        {/* 2)Rank */}
        <FinalRank />
        {/* 3) Try Exam Again */}
        <TryAgain />
      </div>
    </>
  );
};

export default ResultPage;
